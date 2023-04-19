<template>
  <main id="page-T002" class="site_main">
    <nav class="breadcrumb">
      <ul>
        <li><a href="/app/admin/dashboard">TOP</a></li>
        <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
        <li>基本情報</li>
      </ul>
    </nav>
    <h1 class="page_ttl_01"><span>プロフィール〈基本情報〉</span></h1>
    <ExeoAlert></ExeoAlert>
    <supporter-header :user="supporter" @edit="moveToEditPage"/>
    <div class="col2_block f-ai-start">
      <exeo-supporter-navigation-window/>
      <exeo-table-supporter-info-show :supporter="supporter"/>
    </div>
  </main>
</template>

<script>
import SupporterHeader from '@/components/header/SupporterHeader.vue'
import ExeoSupporterNavigationWindow from '@/components/other/ExeoSupporterNavigationWindow.vue'
import ExeoTableSupporterInfoShow from '@/components/table/ExeoTableSupporterInfoShow.vue'
import SupporterInfoService from "@/services/admin/supporter/SupporterInfoService";
import ExeoAlert from "@/components/other/ExeoAlert";

export default {
  name: "SupporterInfoShowPage",
  layout: "admin",
  components: {
    SupporterHeader,
    ExeoSupporterNavigationWindow,
    ExeoTableSupporterInfoShow,
    ExeoAlert
  },
  head() {
    return {
      title: 'プロフィール〈基本情報〉'
    }
  },
  async asyncData(context) {
    try {
      const supporter = await SupporterInfoService.getSupporterInfo(context, context.params.id);
      return {
        supporter: supporter
      }
    } catch (e) {
      context.error(e.response.data.status);
    }
  },
  methods: {
    moveToEditPage() {
      this.$router.push("info-edit");
    }
  }
}
</script>

<style>

</style>
