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
    <supporter-header :user="supporter" is-editing/>
    <div class="col2_block f-ai-start">
      <exeo-supporter-navigation-window/>
      <exeo-table-supporter-info-edit :supporter="supporter" @submit="updateSupporterInfo"/>
    </div>
  </main>
</template>

<script>
import SupporterHeader from '../../../../components/header/SupporterHeader.vue'
import ExeoSupporterNavigationWindow from '../../../../components/other/ExeoSupporterNavigationWindow.vue'
import ExeoTableSupporterInfoEdit from '../../../../components/table/ExeoTableSupporterInfoEdit.vue'
import SupporterInfoService from "@/services/admin/supporter/SupporterInfoService";

export default {
  name: "SupporterInfoEditPage",
  layout: "admin",
  components: {
    SupporterHeader,
    ExeoSupporterNavigationWindow,
    ExeoTableSupporterInfoEdit,
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
    async updateSupporterInfo(supporter) {
      try{
        await SupporterInfoService.updateSupporterInfo(this,supporter, this.$route.params.id);
        // Redirect
        this.$router.push({
          name: 'admin-supporter-id-info',
          params: {
            id : this.$route.params.id,
            message: '保存しました'
          },
        });
      } catch (e) {
        // Error handling
      }
    }
  }
}
</script>

<style>

</style>
