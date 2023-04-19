<template>
  <div class="wrapper">
    <main id="page-T033" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li>
            <nuxt-link to="../">TOP</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">パークサポーター管理</nuxt-link>
          </li>
          <li>パスワード設定</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>設定〈パスワード設定〉</span></h1>
      <supporter-header
        :user="supporter"
        @edit="moveToEditPage"
      ></supporter-header>
      <div class="col2_block f-ai-start">
        <exeo-supporter-navigation-window/>
        <exeo-table-supporter-password-edit @submit="updatePassword" :password="password"/>
      </div>
    </main>
  </div>
</template>

<script>
import SupporterInfoService from "@/services/admin/supporter/SupporterInfoService";
import SupporterHeader from '@/components/header/SupporterHeader.vue'
import ExeoSupporterNavigationWindow from '@/components/other/ExeoSupporterNavigationWindow.vue'
import ExeoTableSupporterPasswordEdit from "@/components/table/ExeoTableSupporterPasswordEdit.vue";

export default {
  name: "PasswordEdit",
  components: {
    ExeoTableSupporterPasswordEdit,
    ExeoSupporterNavigationWindow,
    SupporterHeader
  },
  layout: 'admin',
  head() {
    return {
      title: '設定〈パスワード設定〉'
    }
  },
  async asyncData(context) {
    try {
      const supporter = await SupporterInfoService.getSupporterInfo(context, context.params.id);
      return {
        guardian: supporter,
      };
    } catch (e) {
      context.error(e.response.data.status);
    }
  },
  data() {
    return {};
  },
  methods: {
    async updatePassword(newPass) {
      try{
        const param = {
          password: newPass,
        }
        await SupporterInfoService.updatePassword(this, this.$route.params.id,param);
        this.$router.push({
          name: 'admin-supporter-id-password-setting',
          params: {
            id: this.$route.params.id,
            message: '保存しました'
          },
        });
      } catch (e) {
        console.log(e);
      }
    }
  },
}
</script>

<style scoped>

</style>
