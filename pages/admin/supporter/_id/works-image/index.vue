<template>
  <main class="site_main">
    <nav class="breadcrumb">
      <ul>
        <li><a href="/app/admin/dashboard">TOP</a></li>
        <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
        <li>仕事中のイメージ写真</li>
      </ul>
    </nav>
    <h1 class="page_ttl_01"><span>プロフィール〈仕事中のイメージ写真〉</span></h1>
    <ExeoAlert></ExeoAlert>
    <supporter-header :user="supporter" @edit="transitToEditPage" :isEditing="false"/>
    <div class="col2_block f-ai-start">
      <ExeoSupporterNavigationWindow/>
      <exeo-table-working-image :work-images="workImages" :pagination="pagination" @change="changePage"/>
    </div>
  </main>
</template>

<script>
import SupporterHeader from "@/components/header/SupporterHeader.vue";
import ExeoSupporterNavigationWindow from "@/components/other/ExeoSupporterNavigationWindow.vue";
import ExeoTableWorkingImage from "@/components/table/ExeoTableWorkingImage.vue";
import SupporterInfoService from "@/services/admin/supporter/SupporterInfoService";
import WorkingImageService from "@/services/admin/supporter/WorkingImageService";
import ExeoAlert from "@/components/other/ExeoAlert";

export default {
  layout: "admin",
  components: {
    ExeoAlert,
    ExeoSupporterNavigationWindow,
    SupporterHeader,
    ExeoTableWorkingImage,
  },
  head() {
    return {
      title: 'プロフィール〈仕事中のイメージ写真〉'
    }
  },
  data() {
    return {
      isEditing: false,
    };
  },
  async asyncData(context) {
    try {
      const supporter = await SupporterInfoService.getSupporterInfo(context,context.params.id);
      const workImagesData = await WorkingImageService.getWorkImagesBySupporterId(context,context.params.id);
      const workImages = workImagesData.data
      delete workImagesData.data
      return {
        workImages: workImages,
        supporter: supporter,
        pagination: workImagesData
      }
    } catch (e) {
      context.error(e.response.data.status);
    }
  },
  methods: {
    transitToEditPage() {
      this.$router.push('works-image/create');
    },
    async changePage(current_page) {
      const workImagesData = await WorkingImageService.getWorkImagesBySupporterId(this,this.$route.params.id,current_page);
      const workImages = workImagesData.data
      delete workImagesData.data
      this.workImages = workImages
      this.pagination = workImagesData
    }
  },
};
</script>

<style scoped>
</style>
