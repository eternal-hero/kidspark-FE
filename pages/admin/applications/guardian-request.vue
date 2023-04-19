<template>
  <div class="wrapper">
    <!--#include virtual="/assets/inc/sidebar.html" -->
    <!--▲▲ /#SIDEBAR ▲▲-->
    <main id="page-T081" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li><a href="../">TOP</a></li>
          <li><a href="/">カスタマー管理</a></li>
          <li>申請提出</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>カスタマー管理〈申請提出〉</span></h1>
      <ul class="report-steps">
        <li class="report-steps__item">
          <nuxt-link :to="{name: 'admin-applications-supporter-request'}">パークサポーター</nuxt-link>
        </li>
        <li class="report-steps__item is-active"><a href="">ユーザー</a></li>
      </ul>
      <div class="application-block application-block--style2">
        <modal-t081 @submit="query"></modal-t081>
        <div class="application-block__right">
          <div class="statusicn statusicn--04 statusicn_unsupported">
            未対応
          </div>
          <div class="application-block__right-txt">{{ unresolved }}件</div>
        </div>
      </div>
      <guardian-request-applications-table :applications="applications"/>
      <exeo-pagination :value="paginationData" @change-page="changePage"/>
    </main>
  </div>
</template>

<script>
import GuardianRequestApplicationsTable from "@/components/table/admin/GuardianRequestApplicationsTable.vue";

export default {
  name: "T081",
  components: {GuardianRequestApplicationsTable},
  layout: "admin",
  head() {
    return {
      title: 'カスタマー管理〈申請提出〉'
    }
  },
  async asyncData(context) {
    const {
      data,
      meta
    } = JSON.parse('{"data":[{"id":1,"guardian_user_id":1,"status":0,"memo":"memo","subject":"0","sender":"Sender","member_id":0,"detail":"Detail","file_path":"file path","created_at":"2023-02-17T06:04:59.000000Z","updated_at":"2023-02-17T06:05:00.000000Z","guardian":{"id":1,"first_name":"Long","last_name":"Long","first_kana":"Long","last_kana":"Long","nickname":"","gender":0,"relation":"","birthday":"0000-00-00","post_code":"","prefecture":"","municipality":"","street_name":"","building":null,"contact_phone_number":"","mail_address":"","password":"$2y$10$Mx5g5qD.nRi7wWSD6.BqR.iaMKm3Bnb8PZStC82MZsHVfRyLzwbGe","workspace":null,"family_structure":"","is_pets":0,"housing_type":"","is_camera":0,"emergency_contact_name":"","emergency_contact_phone_number":"","emergency_contact_relation":"","status":0,"created_at":null,"updated_at":"2023-02-15T08:48:55.000000Z","memo":null}},{"id":2,"guardian_user_id":1,"status":1,"memo":"memo","subject":"1","sender":"Sender","member_id":1,"detail":"Detail","file_path":"file path","created_at":"2023-02-17T06:04:59.000000Z","updated_at":"2023-02-17T06:05:00.000000Z","guardian":{"id":1,"first_name":"Long","last_name":"Long","first_kana":"Long","last_kana":"Long","nickname":"","gender":0,"relation":"","birthday":"0000-00-00","post_code":"","prefecture":"","municipality":"","street_name":"","building":null,"contact_phone_number":"","mail_address":"","password":"$2y$10$Mx5g5qD.nRi7wWSD6.BqR.iaMKm3Bnb8PZStC82MZsHVfRyLzwbGe","workspace":null,"family_structure":"","is_pets":0,"housing_type":"","is_camera":0,"emergency_contact_name":"","emergency_contact_phone_number":"","emergency_contact_relation":"","status":0,"created_at":null,"updated_at":"2023-02-15T08:48:55.000000Z","memo":null}}],"links":{"first":"http:\/\/127.0.0.1:8000\/api\/admin\/supporter\/application\/documents\/list?page=1","last":"http:\/\/127.0.0.1:8000\/api\/admin\/supporter\/application\/documents\/list?page=1","prev":null,"next":null},"meta":{"current_page":1,"from":1,"last_page":2,"links":[{"url":null,"label":"« Previous","active":false},{"url":"http:\/\/127.0.0.1:8000\/api\/admin\/supporter\/application\/documents\/list?page=1","label":"1","active":true},{"url":null,"label":"Next »","active":false}],"path":"http:\/\/127.0.0.1:8000\/api\/admin\/supporter\/application\/documents\/list","per_page":10,"to":2,"total":2},"status":{"code":200,"message":"success"}}');
    return {
      applications: data,
      paginationData: meta
    }
  },
  methods: {
    changePage(pageNumber) {
      alert('TODO - API 呼び出す');
    },
    query(modalData) {
      alert('TODO - API 呼び出す');
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
