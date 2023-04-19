<template>
  <main id="page-P031" class="wrapper">
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
        <sitter-setting-inform v-if="!setting.is_supporter"/>
        <sitter-setting-edit-form :setting="setting" :options="options" :supports="supports" :experience="experience" @submit="submit" v-else/>
      </div>
    </div>
  </main>
</template>

<script>
import SitterService from '@/services/supporter/SitterService'
import ExeoSupporterSettingNavBar from "@/components/supporter/ExeoSupporterSettingNavBar.vue";
import SitterSettingInform from "@/components/form/supporter/sitter-setting/SitterSettingInform.vue";
import UpdateSucceededInform from "@/components/inform/UpdateSucceeded.vue";
import UpdateFailedInform from "@/components/inform/UpdateFailed.vue";
import SitterSettingEditForm from "@/components/form/supporter/sitter-setting/SitterSettingEditForm.vue";

export default {
  components: {
    SitterSettingEditForm,
    UpdateFailedInform,
    UpdateSucceededInform,
    SitterSettingInform,
    ExeoSupporterSettingNavBar
  },
  layout: "supporter",
  head() {
    return {
      title: 'アカウント設定'
    }
  },
  async asyncData(context) {
    try {
      let setting = await SitterService.getSitterSetting(context);
      const options = await SitterService.getSettingOptions(context,1);
      let supports = await SitterService.getSitterSettingSupports(context);
      let experience = await SitterService.getSitterSettingExperience(context);
      if(setting == null  || setting.is_supporter == 0) {
        setting = {
          id: null,
          settings_id: null,
          supporter_user_id: parseInt(context.params.id),
          is_supporter: false,
          single_fee: null,
          regular_fee: null,
          special: null,
          service: null,
          potential_entrant: null,
          minimum_age_limit: 0,
          maximum_age_limit: 0,
        }
      }
      if(supports == null) {
        supports = {
          id: null,
          settings_id: 1,
          supporter_user_id: parseInt(context.params.id),
          shooting_support: null,
          acceptance_condition: null,
          transportation_support: null,
          early_response_lower_limit: null,
          early_response_upper_limit: null,
          nighttime_lower_limit: null,
          nighttime_upper_limit: null,
          overnight_care_lower_limit: null,
          overnight_care_upper_limit: null,
          is_foreign_user_support: 0,
          is_sick_children_support: 0,
          is_handicapped_children_support: 0,
          is_handicapped_children_approval: 0,
          lesson_support_bitflag: 0,
          is_cabinet_office_discount_coupon: 0,
        }
      }
      if(experience == null) {
        experience = {parenting_experience: 0}
      }
      return {
        setting: setting,
        options: options,
        supports: supports,
        experience: experience
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
  methods:{
    async submit(formData) {
      this.successUpdate = false;
      this.failedUpdate = false;
      try {
        if(formData.settings.id) {
          await SitterService.updateSitterSetting(this, formData.settings);
        } else {
          await SitterService.createSitterSetting(this, formData.settings);
        }
        if(formData.options.length > 0) await SitterService.updateAllSettingOptions(this, formData.options);
        if(formData.supports.id) {
          await SitterService.updateSitterSettingSupports(this, formData.supports);
        } else {
          await SitterService.createSitterSettingSupports(this, formData.supports);
        }
        if(formData.experience.id) {
          await SitterService.updateSitterSettingExperience(this, formData.experience);
        } else {
          await SitterService.createSitterSettingExperience(this, formData.experience);
        }
        this.successUpdate = true;
      } catch (e) {
        this.failedUpdate = true;
      }
      window.scrollTo({top:0})
    }
  }
}
</script>

<style>

</style>
