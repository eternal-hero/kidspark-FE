<template>
  <main class="site_main">
    <nav class="breadcrumb">
      <ul>
        <li><a href="/app/admin/dashboard">TOP</a></li>
        <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
        <li>シッター設定</li>
      </ul>
    </nav>
    <h1 class="page_ttl_01">
      <span>プロフィール〈仕事中のイメージ写真〉</span>
    </h1>
    <supporter-header is-editing :user="supporter"/>
    <div class="col2_block f-ai-start">
      <exeo-supporter-navigation-window/>
      <exeo-table-working-image-edit :workImage="workingImage" @submit="createWorkImage"/>
    </div>
  </main>
</template>

<script>
import SupporterHeader from "@/components/header/SupporterHeader.vue";
import ExeoSupporterNavigationWindow from "@/components/other/ExeoSupporterNavigationWindow.vue";
import ExeoTableWorkingImageEdit from "@/components/table/ExeoTableWorkingImageEdit.vue";
import SupporterInfoService from "@/services/admin/supporter/SupporterInfoService";
import WorkingImageService from "@/services/admin/supporter/WorkingImageService";

export default {
  layout: "admin",
  components: {
    ExeoSupporterNavigationWindow,
    SupporterHeader,
    ExeoTableWorkingImageEdit,
  },
  head() {
    return {
      title: 'プロフィール〈仕事中のイメージ写真〉'
    }
  },
  async asyncData(context) {
    try {
      const supporter = await SupporterInfoService.getSupporterInfo(context,context.params.id);
      return {
        supporter: supporter
      }
    } catch (e) {
      context.error(e.response.data.status);
    }
  },
  data() {
    return {
      isEditing: false,
      workingImage: {
        display_status: 0,
        note: null,
        category: 0,
        image_path: null
      }
    };
  },
  methods: {
    async createWorkImage(data) {
      try {
        await WorkingImageService.createWorkImage(this,data, this.$route.params.id);
        this.$router.push('./');
      } catch (e) {
        // Error handling
      }
    }
  },
};
</script>

<style scoped>
</style>
