<template>
  <div class="wrapper">
    <!--#include virtual="/assets/inc/sidebar.html" -->
    <!--▲▲ /#SIDEBAR ▲▲-->
    <main id="page-T038" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li>
            <a href="/app/admin/dashboard">TOP</a>
          </li>
          <li>
            <a href="/app/admin/guardian">ユーザー管理</a>
          </li>
          <li>本人確認</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>申請・提出書類〈本人確認〉</span></h1>
      <exeo-guardian-header :guardian="guardian" is-editing></exeo-guardian-header>
      <div class="col2_block f-ai-start">
        <exeo-guardian-navigation-window></exeo-guardian-navigation-window>
        <exeo-table-guardian-identity-application
          :identity-applications="identityApplications"
          @modal-submit="query"
        ></exeo-table-guardian-identity-application>
      </div>

    </main>
  </div>
</template>

<script>
import GuardianService from "@/services/admin/guardian/GuardianService";
import ExeoGuardianHeader from "@/components/header/ExeoGuardianHeader.vue";
import ExeoGuardianNavigationWindow from "@/components/other/ExeoGuardianNavigationWindow.vue";
import IdentityApplicationService from "@/services/admin/guardian/IdentityApplicationService";
import ExeoTableGuardianIdentityApplication from "@/components/table/ExeoTableGuardianIdentityApplication.vue";

export default {
  name: "GuardianIdentityApplication",
  components: {
    ExeoTableGuardianIdentityApplication,
    ExeoGuardianNavigationWindow,
    ExeoGuardianHeader
  },
  head() {
    return {
      title: '申請・提出書類〈本人確認〉'
    }
  },
  layout: 'admin',
  async asyncData(context) {
    try {
      const guardian = await GuardianService.getGuardianInfo(context, context.params.id);
      const identityApplications = await IdentityApplicationService.getIdentityApplications(context,params.id);
      return {
        guardian: guardian,
        identityApplications: identityApplications
      };
    } catch (e) {
      console.log(e)
      context.error(e.response);
    }
  },
  methods: {
    query(modalData) {
      //   // TODO: APIを呼び出す
      console.log(modalData);
    }

  }
}
</script>

<style scoped>

</style>
