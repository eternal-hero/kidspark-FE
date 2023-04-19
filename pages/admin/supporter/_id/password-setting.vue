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
      <ExeoAlert></ExeoAlert>
      <supporter-header
        :user="supporter"
        @edit="moveToEditPage"
      ></supporter-header>
      <div class="col2_block f-ai-start">
        <exeo-supporter-navigation-window/>
        <exeo-table-supporter-password/>
      </div>
    </main>
  </div>
</template>

<script>
import SupporterHeader from '@/components/header/SupporterHeader.vue'
import SupporterInfoService from "@/services/admin/supporter/SupporterInfoService";
import ExeoSupporterNavigationWindow from '@/components/other/ExeoSupporterNavigationWindow.vue'
import ExeoTableSupporterPassword from "@/components/table/ExeoTableGuardianPassword.vue";
import ExeoAlert from "@/components/other/ExeoAlert";

export default {
  name: "PasswordSetting",
  components: {
    ExeoAlert,
    ExeoTableSupporterPassword,
    ExeoSupporterNavigationWindow,
    SupporterHeader,
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
        supporter: supporter,
      };
    } catch (e) {
      context.error(e.response.data.status);
    }
  },
  data() {
    return {};
  },
  methods: {
    moveToEditPage() {
      this.$router.push("password-edit");
    }
  },
};
</script>

<style scoped></style>
