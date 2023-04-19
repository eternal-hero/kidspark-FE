<template>
  <main id="page-P033" class="wrapper">
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
        <child-birth-setting-inform v-if="!setting.is_childbirth_care"/>
        <child-birth-setting-edit-form :setting="setting" @submit="submit" v-else/>
      </div>
    </div>
  </main>
</template>

<script>
import ExeoSupporterSettingNavBar from "@/components/supporter/ExeoSupporterSettingNavBar.vue";
import ChildBirthSettingInform from "@/components/form/supporter/childbirth-setting/ChildBirthSettingInform.vue";
import SitterService from "@/services/supporter/SitterService";
import UpdateSucceededInform from "@/components/inform/UpdateSucceeded.vue";
import ChildBirthSettingEditForm from "@/components/form/supporter/childbirth-setting/ChildBirthSettingEditForm.vue";
import UpdateFailedInform from "@/components/inform/UpdateFailed.vue";

export default {
  name: "ChildBirthSetting",
  components: {
    UpdateFailedInform,
    ChildBirthSettingEditForm,
    UpdateSucceededInform,
    ChildBirthSettingInform,
    ExeoSupporterSettingNavBar
  },
  head() {
    return {
      title: 'アカウント設定'
    }
  },
  layout: 'supporter',
  async asyncData(context) {
    try {
      const setting = await SitterService.getChildbirthSetting(context);
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
        await SitterService.updateChildbirthSetting(this, formData);
        this.successUpdate = true;
      } catch (e) {
        this.failedUpdate = true;
      }
    }
  }
}
</script>

<style>

</style>
