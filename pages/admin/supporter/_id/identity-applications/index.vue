<template>
  <div class="wrapper">
    <main id="page-T023" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li><a href="/app/admin/dashboard">TOP</a></li>
          <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
          <li>本人確認・資格証明</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01">
        <span>申請・提出書類〈本人確認・資格証明〉</span>
      </h1>
      <ExeoAlert></ExeoAlert>
      <supporter-header :user="supporter" is-editing/>
      <div class="col2_block f-ai-start">
        <exeo-supporter-navigation-window/>
        <supporter-identity-applications-list
          :applications="applications"
          :pagination-data="paginationData"
          @change-page="changePage"
          @submit-modal="submitModal"
        />
      </div>
    </main>
  </div>
</template>

<script>
import SupporterHeader from "@/components/header/SupporterHeader.vue";
import ExeoSupporterNavigationWindow from "@/components/other/ExeoSupporterNavigationWindow.vue";
import ExeoPagenation from "@/components/ExeoPagenation.vue";
import ExeoStatus from "@/components/other/ExeoStatus.vue";
import ExeoSelect from "@/components/action/ExeoSelect.vue";
import SupporterInfoService from "@/services/admin/supporter/SupporterInfoService";
import ApplicationDocumentService from "@/services/admin/supporter/ApplicationDocumentService";
import SupporterIdentityApplicationsList from "@/components/table/admin/SupporterIdentityApplicationsList.vue";
import ExeoAlert from "@/components/other/ExeoAlert";

export default {
  layout: "admin",
  components: {
    ExeoAlert,
    SupporterIdentityApplicationsList,
    SupporterHeader,
    ExeoSupporterNavigationWindow,
    ExeoPagenation,
    ExeoStatus,
    ExeoSelect,
  },
  async asyncData(context) {
    try {
      const supporter = await SupporterInfoService.getSupporterInfo(
        context,
        context.params.id
      );
      const {applications, paginationData} =
        await ApplicationDocumentService.getApplicationDocumentsBySupporterId(
          context,
          context.params.id
        );
      return {
        supporter: supporter,
        applications: applications,
        paginationData: paginationData,
      };
    } catch (e) {
      // context.error(e.response.data.status);
    }
  },
  data() {
    return {
      modalData: {}
    };
  },
  methods: {
    async submitModal(modalData) {
      this.modalData = modalData;
      try {
        const {applications, paginationData} =
          await ApplicationDocumentService.getApplicationDocumentsBySupporterId(
            this,
            this.$route.params.id,
            this.modalData
          );
        this.$set(this, "applications", applications);
        this.$set(this, "paginationData", paginationData);
      } catch (e) {
        console.log(e);
      }
    },
    async changePage(pageNumber) {
      const {applications, paginationData} =
        await ApplicationDocumentService.getApplicationDocumentsBySupporterId(
          this,
          this.$route.params.id,
          {...this.modalData, page: pageNumber}
        );
      this.$set(this, 'applications', applications);
      this.$set(this, 'paginationData', paginationData);
    }
  },
};
</script>

<style></style>
