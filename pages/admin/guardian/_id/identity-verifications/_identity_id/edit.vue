<template>
  <div class="wrapper">
    <!--#include virtual="/assets/inc/sidebar.html" -->
    <!--▲▲ /#SIDEBAR ▲▲-->
    <main id="page-T039" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li><a href="/app/admin/dashboard">TOP</a></li>
          <li><a href="/app/admin/guardian">ユーザー管理</a></li>
          <li>本人確認</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>申請・提出書類〈本人確認〉</span></h1>
      <exeo-guardian-header :guardian="guardian" is-editing></exeo-guardian-header>
      <div class="col2_block f-ai-start">
        <exeo-guardian-navigation-window></exeo-guardian-navigation-window>
        <exeo-table-guardian-identity-application-edit :identity-application="identity" @submit="submit">
        </exeo-table-guardian-identity-application-edit>
      </div>
    </main>
  </div>
</template>

<script>

import GuardianService from "@/services/admin/guardian/GuardianService";
import ExeoGuardianHeader from "@/components/header/ExeoGuardianHeader.vue";
import ExeoGuardianNavigationWindow from "@/components/other/ExeoGuardianNavigationWindow.vue";
import ExeoTableGuardianIdentityApplicationEdit from "@/components/table/ExeoTableGuardianIdentityApplicationEdit.vue";
import IdentityApplicationService from "@/services/admin/guardian/IdentityApplicationService";

export default {
  name: "ApplicationIdentityEdit",
  components: {
    ExeoTableGuardianIdentityApplicationEdit,
    ExeoGuardianNavigationWindow,
    ExeoGuardianHeader
  },
  head() {
    return {
      title: '申請・提出書類〈本人確認〉'
    }
  },
  async asyncData(context) {
    try {
      const guardian = await GuardianService.getGuardianInfo(context, context.params.id);
      const identity = await IdentityApplicationService.getIdentityApplicationById(context, context.params.id, context.params.identity_id)
      return {
        guardian: guardian,
        identity: identity
      };
    } catch (e) {
      context.error(e.response.data.status);
    }
  },
  mounted() {
  },
  methods: {
    submit(formData){
      console.log(formData);
    }
  }
}
</script>

<style scoped>

</style>
