<template>
  <div class="wrapper">
    <main id="page-T095" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li><a href="/app/admin/dashboard">TOP</a></li>
          <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
          <li>病児保育設定</li>
        </ul>
      </nav>
      <ExeoHeadline>プロフィール〈病児保育設定〉</ExeoHeadline>
      <ExeoAlert></ExeoAlert>
      <SupporterHeader :user="this.supporter" :isEditing="false" @edit="moveEditPage"/>
      <div class="col2_block f-ai-start">
        <ExeoSupporterNavigationWindow />
        <div class="col2_block_main no-flex">
          <ExeoTableSickChildenCareShow v-model="setting" :options="options"/>
          <!-- <table class="table_style_02 table_style_02--style5 table_style_02--no-striped support-management looksort_table--small" v-if="setting.is_sick_child_care">
            <thead>
              <tr>
                <th>対応可能設定</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr class="has-card">
                <td class="looksort_table_info">受け入れ条件</td>
                <td>
                  <div class="looksort_table_txt">
                    <p>
                      ☑️より多くのリクエストにお応えできるよう、サポーター自宅から1時間以内の方を優先でお引き受けしております。
                      基本は、自家用車での移動となっております。<br />
                      1kmあたり30円換算で交通費を頂戴致します。<br />
                      また片道1時間以上の場合は高速道路代(600円〜)を頂戴致します。<br /><br />
                    </p>
                    <p>
                      ☑️駐車場に関して、コインパーキングを使用する場合は、利用時間分を頂戴致します。
                    </p>
                  </div>
                </td>
                <td class="looksort_table_note">
                  <div class="statuschips js-tooltip-02">
                    <span>入力例</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td colspan="2">
                  <div class="form-edit__card">
                    <button
                      class="form-edit__card-close js-close-tooltip"
                    ></button
                    >より多くのリクエストにお応えできるよう、サポーター自宅から1時間以内の方を優先でお引き受けしております。 基本は、自家用車での移動となっております。<br>
                    1kmあたり30円換算で交通費を頂戴致します。<br>
                    また片道1時間以上の場合は高速道路代(600円〜)を頂戴致します。<br>
                  </div>
                </td>
              </tr>
            </tbody>
          </table> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ExeoHeadline from "~/components/other/ExeoHeadline.vue";
import SupporterHeader from "~/components/header/SupporterHeader.vue";
import ExeoSupporterNavigationWindow from "~/components/other/ExeoSupporterNavigationWindow.vue";
import ExeoTableSickChildenCareShow from "~/components/table/ExeoTableSickChildenCareShow.vue";
import SickChildCareService from "~/services/admin/supporter/SickChildCareService.js";
import SupporterService from "~/services/admin/supporter/SupporterInfoService.js";
import ExeoAlert from "@/components/other/ExeoAlert";

export default {
  layout: "admin",
  components: {
    ExeoHeadline,
    SupporterHeader,
    ExeoSupporterNavigationWindow,
    ExeoTableSickChildenCareShow,
    ExeoAlert
  },
  head() {
    return {
      title: 'プロフィール〈病児保育設定〉'
    }
  },
  async asyncData(context) {
    let {setting} = await SickChildCareService.getSetting(context,context.params.id)
    if(setting == null) {
      setting = {
        id: null,
        settings_id: null,
        supporter_user_id: parseInt(context.params.id),
        is_sick_child_care: false,
        single_fee: null,
        regular_fee: null,
        special: null,
        service: null
      }
    }
    await context.store.dispatch('admin/supporter/info/initData', {supporter_id : context.params.id, context:context});
    const supporter = context.store.getters['admin/supporter/info/supporter']
    return {setting : setting, supporter : supporter}
  },
  data() {
    return {
      options : []
    }
  },
  methods: {
    moveEditPage() {
      this.$router.push(this.$route.path + '-edit')
    }
  },
};
</script>

<style>
</style>
