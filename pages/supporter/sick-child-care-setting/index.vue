<template>
  <main id="page-P035" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><span class="current">パークサポーター設定</span>
      </div>
    </div>
    <div class="main-content page-account-setting">
      <div class="inner">
        <h1 class="c-ttl__01">パークサポーター設定</h1>
        <exeo-supporter-setting-nav-bar/>
        <update-succeeded-inform v-model="successUpdate"/>
        <update-failed-inform v-model="failedUpdate"/>
        <sick-child-care-setting-inform v-if="!setting.is_sick_child_care"/>
        <sick-child-care-setting-edit-form :setting="setting" @submit="submit" v-else/>
      </div>
    </div>
  </main>
</template>

<script>
import ExeoSupporterSettingNavBar from "@/components/supporter/ExeoSupporterSettingNavBar.vue";
import SitterService from "@/services/supporter/SitterService";
import UpdateSucceededInform from "@/components/inform/UpdateSucceeded.vue";
import SickChildCareSettingInform
  from "@/components/form/supporter/sickchildcare-setting/SickChildCareSettingInform.vue";
import SickChildCareSettingEditForm
  from "@/components/form/supporter/sickchildcare-setting/SickChildCareSettingEditForm.vue";
import UpdateFailedInform from "@/components/inform/UpdateFailed.vue";

export default {
  name: "SickChildCareSetting",
  components: {
    UpdateFailedInform,
    SickChildCareSettingEditForm,
    SickChildCareSettingInform,
    UpdateSucceededInform,
    ExeoSupporterSettingNavBar
  },
  layout: 'supporter',
  head() {
    return {
      title: 'アカウント設定'
    }
  },
  async asyncData(context) {
    try {
      const setting = await SitterService.getSickChildCareSetting(context);
      return {
        setting: setting,
      };
    } catch (e) {
      context.error(e.response.data.status);
    }
  },
  data() {
    return {
      successUpdate: false,
      failedUpdate: false,
    }
  },
  methods: {
    async submit(formData) {
      try {
        await SitterService.updateSickChildCareSetting(this,formData);
        this.successUpdate = true;
      } catch (e) {
        this.failedUpdate = true;
      }
    }
  }
}
</script>

<style scoped>
</style>
<!--P035.html - 病児保育設定-->
