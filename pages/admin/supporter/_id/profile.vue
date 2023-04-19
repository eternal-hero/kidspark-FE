<template>
  <div class="wrapper">
    <main id="page-T003" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li><a href="/app/admin/dashboard">TOP</a></li>
          <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
          <li>共通プロフィール</li>
        </ul>
      </nav>
      <exeo-headline>プロフィール〈基本情報〉</exeo-headline>
      <ExeoAlert></ExeoAlert>
      <supporter-header :user="supporter" :isEditing="isEditing" @edit="transitToEditPage" />
      <div class="col2_block f-ai-start">
        <exeo-supporter-navigation-window />
        <div class="col2_block_main no-flex">
          <exeo-table-supporter-profile-show :supporterProfile=supporterProfileData />
          <exeo-table-inoculation-show :inoculationStatus=inoculation />
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import ExeoHeadline from '@/components/other/ExeoHeadline.vue';
import SupporterHeader from '@/components/header/SupporterHeader.vue';
import ExeoSupporterNavigationWindow from '@/components/other/ExeoSupporterNavigationWindow.vue';
import ExeoTableSupporterProfileShow from "@/components/table/ExeoTableSupporterProfileShow.vue";
import ExeoTableInoculationShow from "@/components/table/ExeoTableInoculationShow.vue"
import SupporterProfileService from '@/services/admin/supporter/SupporterProfileService';
import SupporterInfoService from '@/services/admin/supporter/SupporterInfoService';
import InoculationService from '@/services/admin/supporter/InoculationStatusService';
import ExeoAlert from "@/components/other/ExeoAlert";

export default {
  layout: "admin",
  components: {
    ExeoAlert,
    ExeoHeadline,
    SupporterHeader,
    ExeoSupporterNavigationWindow,
    ExeoTableSupporterProfileShow,
    ExeoTableInoculationShow,
  },
  head() {
    return {
      title: 'プロフィール〈基本情報〉'
    }
  },
  async asyncData(context) {
    try {
      const supporterProfileData = await SupporterProfileService.getSupporterProfile(context, context.params.id);
      const supporter = await SupporterInfoService.getSupporterInfo(context, context.params.id);
      const inoculation = await InoculationService.getInoculationStatus(context, supporterProfileData.inoculation_status_id);
      return {
        supporterProfileData: supporterProfileData,
        supporter: supporter,
        inoculation: inoculation
      }
    } catch (e) {
      context.error(e.response);
    }
  },
  data() {
    return {
      data: [],
      isEditing: false,
    }
  },
  methods: {
    transitToEditPage() {
      this.$router.push('profile-edit');
    },
  }
}
</script>

<style>

</style>
