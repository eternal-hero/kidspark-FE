<template>
  <div class="wrapper">
    <main id="page-T028" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li>
            <a href="/app/admin/dashboard">TOP</a>
          </li>
          <li>
            <a href="/app/admin/guardian">ユーザー管理</a>
          </li>
          <li>基本情報</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>プロフィール〈基本情報〉</span></h1>
      <exeo-guardian-header
        :guardian="guardian"
        @edit="edit"
        is-editing
      ></exeo-guardian-header>
      <div class="col2_block f-ai-start">
        <exeo-guardian-navigation-window></exeo-guardian-navigation-window>
        <exeo-table-guardian-info-edit
          :guardian="guardian"
          @submit="updateGuardianInfo"
        ></exeo-table-guardian-info-edit>
      </div>
    </main>
  </div>
</template>

<script>
import ExeoGuardianHeader from "@/components/header/ExeoGuardianHeader.vue";
import GuardianService from "@/services/admin/guardian/GuardianService";
import ExeoGuardianNavigationWindow from "@/components/other/ExeoGuardianNavigationWindow.vue";
import ExeoTableGuardianInfoEdit from "@/components/table/ExeoTableGuardianInfoEdit.vue";

export default {
  name: "GuardianInfoEdit",
  components: {
    ExeoTableGuardianInfoEdit,
    ExeoGuardianNavigationWindow,
    ExeoGuardianHeader,
  },
  head() {
    return {
      title: 'プロフィール〈基本情報〉'
    }
  },
  layout: "admin",
  data() {
    return {
      isEditing: false,
    };
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
  methods: {
    edit() {
      this.isEditing = true;
    },
    async updateGuardianInfo(guardian) {
      try{
        await GuardianService.updateGuardianInfo(this,guardian.id, guardian);
        this.$router.push('info');
      } catch (e) {
        console.log(e);
      }
    }
  },
};
</script>

<style scoped></style>
