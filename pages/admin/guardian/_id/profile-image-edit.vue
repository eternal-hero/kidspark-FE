<template>
  <div class="wrapper">
    <!--#include virtual="/assets/inc/sidebar.html" -->
    <!--▲▲ /#SIDEBAR ▲▲-->
    <main id="page-T031" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li><nuxt-link to="../">TOP</nuxt-link></li>
          <li><nuxt-link to="/">ユーザー管理</nuxt-link></li>
          <li>プロフィール写真</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>プロフィール〈プロフィール写真〉</span></h1>
      <exeo-guardian-header
        :guardian="guardian"
        is-editing
      ></exeo-guardian-header>
      <div class="col2_block f-ai-start">
        <exeo-guardian-navigation-window></exeo-guardian-navigation-window>
        <exeo-image-edit-form
          :apiformData="formDataApi"
          @submit-image-form="submitImageForm"
        ></exeo-image-edit-form>
      </div>
    </main>
  </div>
</template>

<script>
import ExeoHeader from "@/components/other/ExeoHeader.vue";
import ExeoGuardianHeader from "@/components/header/ExeoGuardianHeader.vue";
import ExeoGuardianNavigationWindow from "@/components/other/ExeoGuardianNavigationWindow.vue";
import ExeoTableWorkingImageEdit from "@/components/table/ExeoTableWorkingImageEdit.vue";
import ExeoImageEditForm from "@/components/form/guardian/ExeoImageEditForm.vue";
import GuardianService from "@/services/admin/guardian/GuardianService";
import GuardianProfileImageService from "@/services/admin/guardian/GuardianProfileImageService";

export default {
  name: "T031",
  components: {
    ExeoImageEditForm,
    ExeoTableWorkingImageEdit,
    ExeoGuardianNavigationWindow,
    ExeoGuardianHeader,
    ExeoHeader,
  },
  layout: "admin",
  head() {
    return {
      title: 'プロフィール〈プロフィール写真〉'
    }
  },
  async asyncData(context) {
    try {
      const guardian = await GuardianService.getGuardianInfo(context,context.params.id);
      const formDataApi = await GuardianProfileImageService.getListProfileImage(context,context.params.id);
      return {
        guardian: guardian,
        formDataApi: formDataApi
      }
    } catch (e) {
      context.error(e.response.data.status);
    }
  },
  methods: {
    async submitImageForm(submitData, careLocation_remove_array) {
      for (const item of submitData) {
        item.guardian_profiles_id = this.guardian.guardian_profile.id
        if (item.id == "") {
          await GuardianProfileImageService.creatProfileImage(
            this,
            this.$route.params.id,
            item
          );
        } else {
          if (item.image_url == "") {
            await GuardianProfileImageService.deleteProfileImageById(
              this,
              this.$route.params.id,
              item.id
            );
          } else {
            if (item.image_path !== "") {
              await GuardianProfileImageService.updateProfileImageById(
                this,
                this.$route.params.id,
                item.id,
                item
              );
            }
          }
        }
      }
      for (const id of careLocation_remove_array) {
        await GuardianProfileImageService.deleteProfileImageById(
          this,
          this.$route.params.id,
          id
        );
      }
    },
  },
};
</script>

<style scoped></style>
