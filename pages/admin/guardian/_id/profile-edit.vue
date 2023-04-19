<template>
  <div class="wrapper">
    <main id="page-T030" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li><a href="/app/admin/dashboard">TOP</a></li>
          <li><a href="/app/admin/guardian">ユーザー管理</a></li>
          <li>共通プロフィール</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>プロフィール〈共通プロフィール〉</span></h1>
      <exeo-guardian-header :guardian="guardian" is-editing></exeo-guardian-header>
      <div class="col2_block f-ai-start">
        <exeo-guardian-navigation-window></exeo-guardian-navigation-window>
        <exeo-table-guardian-profile-edit :guardian_profile="guardian_profile" :inoculation="inoculation"
          @submit="updateGuardianProfile"></exeo-table-guardian-profile-edit>
      </div>
    </main>
  </div>
</template>
<script>
import GuardianService from "@/services/admin/guardian/GuardianService";
import InoculationStatusService from "@/services/admin/supporter/InoculationStatusService";
import ExeoGuardianHeader from "@/components/header/ExeoGuardianHeader.vue";
import ExeoGuardianNavigationWindow from "@/components/other/ExeoGuardianNavigationWindow.vue";
import ExeoTableGuardianProfileEdit from "@/components/table/ExeoTableGuardianProfileEdit.vue";
import GuardianProfileService from '../../../../services/admin/guardian/GuardianProfileService';

export default {
  layout: "admin",
  name: "profile-edit",
  components: {
    ExeoTableGuardianProfileEdit,
    ExeoGuardianNavigationWindow,
    ExeoGuardianHeader,
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
      context.error(e.response.data.status);
    }
  },
  data() {
    return {
      data: [],
      isEditing: false,
    }
  },
  methods: {
    async updateGuardianProfile(guardianProfile, inoculationStatus) {
      try {
        if (!inoculationStatus.id) {
          this.inoculation = await InoculationStatusService.createInoculationStatus(this, inoculationStatus);
        } else {
          await InoculationStatusService.updateInoculationStatus(this, inoculationStatus.id, inoculationStatus);
        }
        if (this.inoculation.id) {
          guardianProfile.inoculation_status_id = this.inoculation.id;
        }
        if (!guardianProfile.id) {
          await GuardianProfileService.createGuardianProfile(this,this.$route.params.id, guardianProfile);
        } else {
          await GuardianProfileService.UpdateGuardianProfile(this,this.$route.params.id, guardianProfile);
        }
        this.$router.push("profile");
        alert('成功')
      } catch (e) {
        alert('失敗');
      }
    }
  }
};
</script>

<style scoped>

</style>
