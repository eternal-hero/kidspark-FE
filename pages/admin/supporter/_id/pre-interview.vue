<template>
  <main class="site_main">
    <nav class="breadcrumb">
      <ul>
        <li><a href="/app/admin/dashboard">TOP</a></li>
        <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
        <li>事前面談設定</li>
      </ul>
    </nav>
    <h1 class="page_ttl_01"><span>プロフィール〈事前面談設定〉</span></h1>
    <ExeoAlert></ExeoAlert>
    <supporter-header :user="supporter" @edit="transitToEditPage"/>
    <div class="col2_block f-ai-start">
      <exeo-supporter-navigation-window/>
      <exeo-table-pre-interview-show :pre-interview-setting="preInterviewSetting"/>
    </div>
  </main>
</template>

<script>
import SupporterHeader from "../../../../components/header/SupporterHeader.vue";
import ExeoSupporterNavigationWindow from "../../../../components/other/ExeoSupporterNavigationWindow.vue";
import ExeoTablePreInterviewShow from "../../../../components/table/ExeoTablePreInterviewShow.vue";
import SupporterInfoService from "@/services/admin/supporter/SupporterInfoService";
import PreInterviewSettingService from "@/services/admin/supporter/PreInterviewSettingService";
import ExeoAlert from "@/components/other/ExeoAlert";

export default {
  layout: "admin",
  components: {
    ExeoAlert,
    ExeoSupporterNavigationWindow,
    SupporterHeader,
    ExeoTablePreInterviewShow,
  },
  head() {
    return {
      title: 'プロフィール〈事前面談設定〉'
    }
  },
  async asyncData(context) {
    try {
      const supporter = await SupporterInfoService.getSupporterInfo(context, context.params.id);
      const preInterviewSetting = await PreInterviewSettingService.getPreInterviewSetting(context, context.params.id);
      return {
        supporter: supporter,
        preInterviewSetting: preInterviewSetting
      }
    } catch (e) {
      context.error(e.response.data.status);
    }
  },
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    transitToEditPage(){
      this.$router.push('pre-interview-edit');
    }
  },
};
</script>

<style scoped>
</style>
