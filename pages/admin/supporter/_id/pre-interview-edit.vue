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
    <supporter-header :user="supporter" is-editing/>
    <div class="col2_block f-ai-start">
      <ExeoSupporterNavigationWindow/>
      <exeo-table-pre-interview-edit v-model="preInterviewSetting" @submit="updatePreInterviewSetting"/>
    </div>
  </main>
</template>

<script>
import SupporterHeader from "../../../../components/header/SupporterHeader.vue";
import ExeoSupporterNavigationWindow from "../../../../components/other/ExeoSupporterNavigationWindow.vue";
import ExeoTablePreInterviewEdit from "../../../../components/table/ExeoTablePreInterviewEdit.vue";
import SupporterInfoService from "@/services/admin/supporter/SupporterInfoService";
import PreInterviewSettingService from "@/services/admin/supporter/PreInterviewSettingService";

export default {
  layout: "admin",
  components: {
    ExeoSupporterNavigationWindow,
    SupporterHeader,
    ExeoTablePreInterviewEdit,
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
    async updatePreInterviewSetting(data) {
      try {
        if (data.id) {
          await PreInterviewSettingService.updatePreviewSetting(this, data, this.$route.params.id);
        } else {
          const supporterUserId = this.$route.params.id;
          await PreInterviewSettingService.createPreviewSetting(this, {...data, supporter_user_id: supporterUserId}, supporterUserId);
        }
        this.$router.push({
          name: 'admin-supporter-id-pre-interview',
          params: {
            id: this.$route.params.id,
            message: '保存しました'
          }
        })
      } catch (e){
        console.log(e);
        // エーラを処理
      }
    }
  },
};
</script>

<style scoped>
</style>
