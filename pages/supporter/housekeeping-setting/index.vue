<template>
  <main id="page-P037" class="wrapper">
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
        <house-keeping-setting-inform v-if="!setting.is_housework"/>
        <house-keeping-setting-edit-form :setting="setting" :options="options" :supports="supports" @submit="submit" v-else/>
      </div>
    </div>
  </main>
</template>

<script>
import ExeoSupporterSettingNavBar from "@/components/supporter/ExeoSupporterSettingNavBar.vue";
import HouseKeepingSettingInform from "@/components/form/supporter/housekeeping-setting/HouseKeepingSettingInform.vue";
import SitterService from "@/services/supporter/SitterService";
import HouseKeepingSettingEditForm from "@/components/form/supporter/housekeeping-setting/HouseKeepingSettingEditForm.vue";
import UpdateSucceededInform from "@/components/inform/UpdateSucceeded.vue";
import UpdateFailedInform from "@/components/inform/UpdateFailed.vue";

export default {
  components: {
    UpdateFailedInform,
    UpdateSucceededInform,
    HouseKeepingSettingEditForm,
    HouseKeepingSettingInform,
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
      let setting = await SitterService.getHouseKeepingSetting(context);
      let options = await SitterService.getSettingOptions(context,4);
      let supports = await SitterService.getHouseKeepingSupports(context);

      if(setting == null || setting.is_housework == 0) {
        setting = {
          id: null,
          settings_id: 4,
          supporter_user_id: context.params.id,
          is_housework: 0,
          single_fee: null,
          regular_fee: null,
          special: null,
          service: null
        }
      }
      if(supports == null) {
        supports = {
          settings_id: 4,
          acceptance_condition: null,
          supported_service: "",
        }
      }

      return {
        setting: setting,
        options: options,
        supports: supports
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
      this.successUpdate = false;
      this.failedUpdate = false;
      try {
        if(formData.setting.id) {
          await SitterService.updateHouseKeepingSetting(this,formData.setting);
        } else {
          await SitterService.createHouseKeepingSetting(this,formData.setting);
        }
        if(formData.options.length > 0) await SitterService.updateAllSettingOptions(this, formData.options);
        if(formData.supports.id) {
          await SitterService.updateHouseKeepingSupports(this,formData.supports);
        } else {
          await SitterService.createHouseKeepingSupports(this,formData.supports);
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
