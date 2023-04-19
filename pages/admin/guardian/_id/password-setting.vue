<template>
  <div class="wrapper">
    <main id="page-T033" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li>
            <a href="/app/admin/dashboard">TOP</a>
          </li>
          <li>
            <a href="/app/admin/guardian">ユーザー管理</a>
          </li>
          <li>パスワード設定</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>設定〈パスワード設定〉</span></h1>
      <exeo-guardian-header
        :guardian="guardian"
        @edit="transitToEditPage"
      ></exeo-guardian-header>
      <div class="col2_block f-ai-start">
        <exeo-guardian-navigation-window></exeo-guardian-navigation-window>
        <exeo-table-guardian-password/>
      </div>
    </main>
  </div>
</template>

<script>
import ExeoGuardianHeader from "@/components/header/ExeoGuardianHeader.vue";
import GuardianService from "@/services/admin/guardian/GuardianService";
import ExeoGuardianNavigationWindow from "@/components/other/ExeoGuardianNavigationWindow.vue";
import ExeoTableGuardianPassword from "@/components/table/ExeoTableGuardianPassword.vue";

export default {
  name: "PasswordSetting",
  components: {
    ExeoTableGuardianPassword,
    ExeoGuardianNavigationWindow,
    ExeoGuardianHeader,
  },
  layout: 'admin',
  head() {
    return {
      title: '設定〈パスワード設定〉'
    }
  },
  async asyncData(context) {
    try {
      const data = await GuardianService.getGuardianInfo(context, context.params.id);
      return {
        guardian: data,
      };
    } catch (e) {
      context.error(e.response.data.status);
    }
  },
  data() {
    return {};
  },
  methods: {
    transitToEditPage() {
      this.$router.push('password-edit');
    },
  },
};
</script>

<style scoped></style>
