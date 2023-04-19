<template>
  <div class="wrapper">
    <!--#include virtual="/assets/inc/sidebar.html" -->
    <!--▲▲ /#SIDEBAR ▲▲-->
    <main id="page-T030" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li><a href="/app/admin/dashboard">TOP</a></li>
          <li><a href="/app/admin/guardian">ユーザー管理</a></li>
          <li>共通プロフィール</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>プロフィール〈共通プロフィール〉</span></h1>
      <exeo-guardian-header :guardian="this.guardian" @edit="transitToEditPage"></exeo-guardian-header>
      <div class="col2_block f-ai-start">
        <exeo-guardian-navigation-window></exeo-guardian-navigation-window>
        <exeo-table-guardian-profile-show  :inoculation="inoculation" :guardian_profile="guardian_profile"></exeo-table-guardian-profile-show>
      </div>
    </main>
  </div>
</template>

<script>
import ExeoGuardianHeader from "@/components/header/ExeoGuardianHeader.vue";
import GuardianService from "@/services/admin/guardian/GuardianService";
import ExeoGuardianNavigationWindow from "@/components/other/ExeoGuardianNavigationWindow.vue";
import ExeoTableGuardianProfileShow from "@/components/table/ExeoTableGuardianProfileShow.vue";
import InoculationStatusService from "@/services/admin/guardian/InoculationStatusService";
import GuardianProfileService from '@/services/admin/guardian/GuardianProfileService';

export default {
  layout: 'admin',
  name: "GuardianProfile",
  components: {
    ExeoTableGuardianProfileShow,
    ExeoGuardianNavigationWindow,
    ExeoGuardianHeader
  },
  head() {
    return {
      title: 'プロフィール〈共通プロフィール〉'
    }
  },
  async asyncData(context) {
    try {
      const guardian = await GuardianService.getGuardianInfo(context, context.params.id);
      const guardian_profile = await GuardianProfileService.getGuardianById(context, context.params.id);
      const inoculation = await InoculationStatusService.getInoculationStatus(context, guardian_profile?.inoculation_status_id);
      return {
        guardian: guardian,
        guardian_profile: guardian_profile,
        inoculation: inoculation
      }
    } catch (e) {
      context.error(e.response);
    }
  },
  data() {
    return {
      data: [],
      isEditing: false,
    }
  },
  methods: {
    transitToEditPage() {
      this.$router.push('profile-edit');
    },
  }
}
</script>

<style scoped>

</style>
