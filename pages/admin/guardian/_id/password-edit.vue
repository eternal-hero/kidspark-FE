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
      <exeo-guardian-header :guardian="guardian" is-editing></exeo-guardian-header>
      <div class="col2_block f-ai-start">
        <exeo-guardian-navigation-window></exeo-guardian-navigation-window>
        <exeo-table-guardian-password-edit @submit="updatePassword" :password="password"/>
      </div>
    </main>
  </div>
</template>

<script>
import GuardianService from "@/services/admin/guardian/GuardianService";
import ExeoGuardianHeader from "@/components/header/ExeoGuardianHeader.vue";
import ExeoGuardianNavigationWindow from "@/components/other/ExeoGuardianNavigationWindow.vue";
import ExeoTableGuardianPasswordEdit from "@/components/table/ExeoTableGuardianPasswordEdit.vue";

export default {
  name: "PasswordEdit",
  components: {
    ExeoTableGuardianPasswordEdit,
    ExeoGuardianNavigationWindow,
    ExeoGuardianHeader
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
    async updatePassword(newPass) {
      try{
        const param = {
          password: newPass,
        }
        await GuardianService.updatePassword(this, this.$route.params.id,param);
        this.$router.push('password-setting');
      } catch (e) {
        console.log(e);
      }
    }
  },
}
</script>

<style scoped>

</style>
