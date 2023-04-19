<template>
  <div class="wrapper">
    <main id="page-T027" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li><a href="/app/admin/dashboard">TOP</a></li>
          <li>ユーザー管理</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>ユーザー管理〈一覧〉</span></h1>
      <div class="form_block flex-box f-jc-space-between f-ai-center">
        <div class="form_block__left form_block flex">
          <form>
            <download-excel :data="this.guardians_excel">
              <button type="button" class="btn_style_06">印刷する</button>
            </download-excel>
          </form>
          <m013 @submit="filter"></m013>
        </div>
        <div class="form_part">
          <div class="statuschips js-tooltip"
            data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>">
            <span>ステータス説明</span>
          </div>
        </div>
      </div>

      <exeo-table-guardian :guardians="this.guardians" @excelData="excelData"></exeo-table-guardian>
      <exeo-pagenation @next="nextPage" @prev="prevPage" :current_page="this.current_page" :last="this.last_page"
        :per_page="this.per_page"></exeo-pagenation>
    </main>
  </div>
</template>

<script>
import ExeoTableGuardian from "@/components/table/ExeoTableGuardian.vue";
import GuardianService from "~/services/admin/guardian/GuardianService";
import M013 from "@/components/modal/M013.vue";
import Vue from "vue";
import JsonExcel from "vue-json-excel";

Vue.component("downloadExcel", JsonExcel);
export default {
  layout: 'admin',
  name: "T027",
  components: {
    M013,
    ExeoTableGuardian,
  },
  head() {
    return {
      title: 'ユーザー管理〈一覧〉'
    }
  },
  data() {
    return {
      last: null,
      current_page: null,
      per_page: null,
      guardians: [],
      modalData: {},
      guardians_excel: [],
      open_modal : false
    }
  },

  methods: {
    async filter(modalData) {
      this.modalData = modalData;
      // if (modalData.)
      const filterValue = await GuardianService.getListGuardian(this,1, modalData);
      this.guardians = filterValue;
    },
    async nextPage(data) {
      const guardians = await GuardianService.getListGuardian(this,data);
      this.guardians = guardians.data;
      this.current_page = guardians.current_page;
      this.per_page = guardians.per_page;
      this.last_page = guardians.last_page;
    },
    async prevPage(data) {
      const guardians = await GuardianService.getListGuardian(this,data);
      this.guardians = guardians.data;
      this.current_page = guardians.current_page;
      this.per_page = guardians.per_page;
      this.last_page = guardians.last_page;
    },
    excelData(data) {
      this.guardians_excel = data;
    },
  },
  async created() {

    try {
      const guardians = await GuardianService.getListGuardian(this,);
      this.guardians_excel = await GuardianService.getListGuardianExcelData(this,);
      this.guardians = guardians.data;
      this.current_page = guardians.current_page;
      this.per_page = guardians.per_page;
      this.last_page = guardians.last_page;
    } catch (e) {
      console.log(e);
    }
  },

  mounted() {
    tippy('[data-tippy-content]');
  }
};
</script>

<style scoped>

</style>
