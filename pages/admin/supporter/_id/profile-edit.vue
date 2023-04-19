<template>
  <main class="site_main">
    <nav class="breadcrumb">
      <ul>
        <li><a href="/app/admin/dashboard">TOP</a></li>
        <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
        <li>共通プロフィール</li>
      </ul>
    </nav>
    <exeo-headline>プロフィール〈基本情報〉</exeo-headline>
    <supporter-header :user="supporter" :isEditing="true" @edit="edit" />
    <div class="col2_block f-ai-start">
      <exeo-supporter-navigation-window />
      <div class="col2_block_main no-flex">
        <exeo-table-supporter-profile-edit :value=supporterProfileData />
        <exeo-table-inoculation-edit :value=inoculation />
        <div class="form-edit__control">
          <button class="btn_style_04" @click="edit">保存する</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ExeoHeadline from '@/components/other/ExeoHeadline.vue';
import SupporterHeader from '@/components/header/SupporterHeader.vue';
import ExeoSupporterNavigationWindow from '@/components/other/ExeoSupporterNavigationWindow.vue';
import ExeoTableSupporterProfileEdit from '@/components/table/ExeoTableSupporterProfileEdit.vue';
import ExeoTableInoculationEdit from '@/components/table/ExeoTableInoculationEdit.vue';
import SupporterProfileService from '@/services/admin/supporter/SupporterProfileService';
import SupporterInfoService from '@/services/admin/supporter/SupporterInfoService';
import InoculationService from '@/services/admin/supporter/InoculationStatusService';

export default {
  layout: "admin",
  components: {
    ExeoHeadline,
    SupporterHeader,
    ExeoSupporterNavigationWindow,
    ExeoTableSupporterProfileEdit,
    ExeoTableInoculationEdit,
  },
  head() {
    return {
      title: 'プロフィール〈基本情報〉'
    }
  },
  async asyncData(context) {
    const supporter = await SupporterInfoService.getSupporterInfo(context, context.params.id);
    const inoculation = await InoculationService.getInoculationStatus(context, context.params.id);
    const supporterProfileData = await SupporterProfileService.getSupporterProfile(context, context.params.id);
    return {
      supporter: supporter,
      inoculation: inoculation,
      supporterProfileData: supporterProfileData
    }
  },
  data() {
    return {
      supporterProfileData: {},
      inoculation: {},
      supporter: {},
      isEditing: false,
    }
  },
  methods: {
    async edit() {
      let inoculationStatus
      // 200系のレスポンス化を確認するため正規表現設定
      let regexp = new RegExp(/[2][\d].*/)

      let inoculationNeedRequest
      let supporterProfileStatus
      if (this.inoculation.is_publish !== null || this.inoculation.inoculation_times !== null || this.inoculation.is_publish !== null) {
        inoculationNeedRequest = true
      } else {
        // ワクチン接種の項目を一項目も入力していない時はワクチン接種状態へのリクエストをしないためフラグセット
        inoculationNeedRequest = false
      }

      if (inoculationNeedRequest === true) {
        // データ取得時に、ワクチン接種状態が存在しない時はpost、存在する時はput
        if (this.inoculation.id === void 0 && this.inoculation.id !== null) {
          const inoculationStatusResponse = await InoculationService.createInoculationStatus(this, this.inoculation);
          inoculationStatus = inoculationStatusResponse.status
          this.supporterProfileData.inoculation_status_id = inoculationStatusResponse.data.id
        } else {
          inoculationStatus = await InoculationService.updateInoculationStatus(this,this.inoculation.id, this.inoculation);
        }
      } else {
        inoculationStatus = 'not request'
      }
      if (this.supporterProfileData.id === void 0) {
        supporterProfileStatus = await SupporterProfileService.createSupporterProfile(this,this.$route.params.id, this.supporterProfileData);
      } else {
        supporterProfileStatus = await SupporterProfileService.updateSupporterProfile(this,this.$route.params.id, this.supporterProfileData);
      }
      if ((inoculationStatus === 'not request' || regexp.test(inoculationStatus.code)) && regexp.test(supporterProfileStatus.code)) {
        this.$router.push({
          name: 'admin-supporter-id-profile',
          params: {
            id : this.$route.params.id,
            message: '保存しました'
          },
        });
      } else {
        console.log(inoculationStatus.code)
        console.log(regexp.test(inoculationStatus.code))
        console.log(supporterProfileStatus.code)
        console.log(regexp.test(supporterProfileStatus.code))
        alert('Filed');
      }
    }
  }
}
</script>

<style>

</style>
