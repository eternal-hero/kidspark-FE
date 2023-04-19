<template>
  <div class="wrapper">
    <!--#include virtual="/assets/inc/sidebar.html" -->
    <!--▲▲ /#SIDEBAR ▲▲-->
    <main id="page-T080" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li><a href="../">TOP</a></li>
          <li><a href="/">カスタマー管理</a></li>
          <li>申請提出</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>カスタマー管理〈申請提出〉</span></h1>
      <ul class="report-steps">
        <li class="report-steps__item is-active">
          <a href="">パークサポーター</a>
        </li>
        <li class="report-steps__item">
          <nuxt-link :to="{name: 'admin-applications-guardian-request'}">ユーザー</nuxt-link>
        </li>
      </ul>
      <div class="application-block application-block--style2">
        <modal-t080 @submit="query"></modal-t080>
        <div class="application-block__right">
          <div class="statusicn statusicn--04 statusicn_unsupported">
            未対応
          </div>
          <div class="application-block__right-txt">{{ unresolved }}件</div>
        </div>
      </div>
      <supporter-request-applications-table :applications="applications"/>
      <exeo-pagination :value="paginationData" @change-page="changePage"/>
    </main>
  </div>
</template>

<script>
import SupporterRequestApplicationsTable from "@/components/table/admin/SupporterRequestApplicationsTable.vue";
import ExeoPagination from "@/components/ExeoPagination.vue";

export default {
  name: "T080",
  components: {ExeoPagination, SupporterRequestApplicationsTable},
  layout: "admin",
  head() {
    return {
      title: 'カスタマー管理〈本人確認・資格証明提出〉'
    }
  },
  async asyncData(context) {
    const {data, meta} = JSON.parse('{"data":[{"id":1,"supporter_user_id":1,"file_id":959,"status":1,"memo":"memo","category":0,"application_name":"id","application_at":"2023-02-16 13:35:46","expiration_on":"1992-09-27","file_path":"Rje8OEkq2x","created_at":"2023-02-06T08:17:08.000000Z","updated_at":"2023-02-06T08:17:08.000000Z","supporter_user":{"id":1,"first_name":"\u8061\u592a\u90ce","last_name":"\u6728\u6751","first_kana":"\u30df\u30c4\u30eb","last_kana":"\u30b5\u30a4\u30c8\u30a6"}},{"id":2,"supporter_user_id":1,"file_id":385,"status":0,"memo":"memo","category":0,"application_name":"officia","application_at":"2023-02-16 13:35:46","expiration_on":"1991-01-04","file_path":"poqT0VZb2r","created_at":"2023-02-06T08:17:08.000000Z","updated_at":"2023-02-06T08:17:08.000000Z","supporter_user":{"id":1,"first_name":"\u8061\u592a\u90ce","last_name":"\u6728\u6751","first_kana":"\u30df\u30c4\u30eb","last_kana":"\u30b5\u30a4\u30c8\u30a6"}},{"id":3,"supporter_user_id":1,"file_id":224,"status":0,"memo":"memo","category":0,"application_name":"rem","application_at":"2023-02-16 13:35:47","expiration_on":"1976-04-22","file_path":"UtKBshaXwC","created_at":"2023-02-06T08:17:08.000000Z","updated_at":"2023-02-06T08:17:08.000000Z","supporter_user":{"id":1,"first_name":"\u8061\u592a\u90ce","last_name":"\u6728\u6751","first_kana":"\u30df\u30c4\u30eb","last_kana":"\u30b5\u30a4\u30c8\u30a6"}},{"id":4,"supporter_user_id":1,"file_id":654,"status":0,"memo":"memo","category":0,"application_name":"debitis","application_at":"2023-02-16 13:35:48","expiration_on":"2012-08-01","file_path":"is8hZO6x3f","created_at":"2023-02-06T08:17:08.000000Z","updated_at":"2023-02-06T08:17:08.000000Z","supporter_user":{"id":1,"first_name":"\u8061\u592a\u90ce","last_name":"\u6728\u6751","first_kana":"\u30df\u30c4\u30eb","last_kana":"\u30b5\u30a4\u30c8\u30a6"}},{"id":5,"supporter_user_id":1,"file_id":123,"status":1,"memo":"memo","category":1,"application_name":"ea","application_at":"2023-02-16 13:35:47","expiration_on":"1981-04-23","file_path":"17l9asHx2X","created_at":"2023-02-06T08:17:08.000000Z","updated_at":"2023-02-06T08:17:08.000000Z","supporter_user":{"id":1,"first_name":"\u8061\u592a\u90ce","last_name":"\u6728\u6751","first_kana":"\u30df\u30c4\u30eb","last_kana":"\u30b5\u30a4\u30c8\u30a6"}},{"id":6,"supporter_user_id":1,"file_id":925,"status":0,"memo":"memo","category":1,"application_name":"consectetur","application_at":"2023-02-16 13:35:50","expiration_on":"1990-09-29","file_path":"5CnT9M3agI","created_at":"2023-02-06T08:17:08.000000Z","updated_at":"2023-02-06T08:17:08.000000Z","supporter_user":{"id":1,"first_name":"\u8061\u592a\u90ce","last_name":"\u6728\u6751","first_kana":"\u30df\u30c4\u30eb","last_kana":"\u30b5\u30a4\u30c8\u30a6"}},{"id":7,"supporter_user_id":1,"file_id":887,"status":0,"memo":"memo","category":0,"application_name":"qui","application_at":"2023-02-16 13:35:51","expiration_on":"2002-06-20","file_path":"T0M14c0fbR","created_at":"2023-02-06T08:17:08.000000Z","updated_at":"2023-02-06T08:17:08.000000Z","supporter_user":{"id":1,"first_name":"\u8061\u592a\u90ce","last_name":"\u6728\u6751","first_kana":"\u30df\u30c4\u30eb","last_kana":"\u30b5\u30a4\u30c8\u30a6"}},{"id":8,"supporter_user_id":1,"file_id":932,"status":1,"memo":"memo","category":1,"application_name":"officiis","application_at":"2023-02-16 13:35:52","expiration_on":"2022-09-08","file_path":"dIpp1aDc2k","created_at":"2023-02-06T08:17:08.000000Z","updated_at":"2023-02-06T08:17:08.000000Z","supporter_user":{"id":1,"first_name":"\u8061\u592a\u90ce","last_name":"\u6728\u6751","first_kana":"\u30df\u30c4\u30eb","last_kana":"\u30b5\u30a4\u30c8\u30a6"}},{"id":9,"supporter_user_id":1,"file_id":693,"status":0,"memo":"memo","category":0,"application_name":"rem","application_at":"2023-02-16 13:35:51","expiration_on":"2007-07-19","file_path":"ZH8WqsWmca","created_at":"2023-02-06T08:17:08.000000Z","updated_at":"2023-02-06T08:17:08.000000Z","supporter_user":{"id":1,"first_name":"\u8061\u592a\u90ce","last_name":"\u6728\u6751","first_kana":"\u30df\u30c4\u30eb","last_kana":"\u30b5\u30a4\u30c8\u30a6"}},{"id":10,"supporter_user_id":1,"file_id":623,"status":0,"memo":"memo","category":1,"application_name":"rem","application_at":"2023-02-16 13:35:53","expiration_on":"2001-03-22","file_path":"SaELLmW2hk","created_at":"2023-02-06T08:17:08.000000Z","updated_at":"2023-02-06T08:17:08.000000Z","supporter_user":{"id":1,"first_name":"\u8061\u592a\u90ce","last_name":"\u6728\u6751","first_kana":"\u30df\u30c4\u30eb","last_kana":"\u30b5\u30a4\u30c8\u30a6"}}],"links":{"first":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=1","last":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=30","prev":null,"next":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=2"},"meta":{"current_page":1,"from":1,"last_page":30,"links":[{"url":null,"label":"« Previous","active":false},{"url":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=1","label":"1","active":true},{"url":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=2","label":"2","active":false},{"url":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=3","label":"3","active":false},{"url":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=4","label":"4","active":false},{"url":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=5","label":"5","active":false},{"url":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=6","label":"6","active":false},{"url":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=7","label":"7","active":false},{"url":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=8","label":"8","active":false},{"url":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=9","label":"9","active":false},{"url":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=10","label":"10","active":false},{"url":null,"label":"...","active":false},{"url":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=29","label":"29","active":false},{"url":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=30","label":"30","active":false},{"url":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list?page=2","label":"Next »","active":false}],"path":"http:\\/\\/127.0.0.1:8000\\/api\\/admin\\/supporter\\/application\\/documents\\/list","per_page":10,"to":10,"total":300},"status":{"code":200,"message":"success"}}');
    return {
      applications: data,
      paginationData: meta
    }
  },
  data() {
  },
  methods: {
    changePage(pageNumber){
      // API 呼び出す
    },
    query(modalData) {
      // API 呼び出す
    }
  },
  computed: {
    unresolved() {
      return 1;
    }
  }
};
</script>

<style scoped></style>
