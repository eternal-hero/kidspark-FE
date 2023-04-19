<template>
  <main class="site_main">
    <nav class="breadcrumb">
      <ul>
        <li><a href="/app/admin/dashboard">TOP</a></li>
        <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
        <li>家事代行設定</li>
      </ul>
    </nav>
    <h1 class="page_ttl_01"><span>プロフィール〈家事代行設定〉</span></h1>
    <ExeoAlert></ExeoAlert>
    <SupporterHeader :user="user" :isEditing="false" @edit="$router.push('housekeeper-edit')"/>
    <div class="col2_block f-ai-start">
      <ExeoSupporterNavigationWindow />
      <div class="col2_block_main no-flex">
        <ExeoTableHousekeeperShow :housekeepingSetting="housekeeping_setting" />
        <table
          class="
            table_style_02 table_style_02--style5 table_style_02--no-striped
            support-management
            looksort_table--small
          "
          v-show="housekeeping_setting.is_housework"
        >
          <thead>
            <tr>
              <th>オプション設定</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="looksort_table_info">家事代行オプション</td>
              <td colspan="2">
                <div v-for="option in options" :key="option.id">{{option.option_content}}  +{{option.additional_fee}}円/{{option.unit == 0 ? '1時間あたり' : '1回あたり'}}<br/><br/></div>
              </td>
            </tr>
          </tbody>
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
                {{supports.acceptance_condition}}
              </td>
              <td class="looksort_table_note">
                <div class="statuschips js-tooltip-02"><span>入力例</span></div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td colspan="2">
                <div class="form-edit__card">
                  <button class="form-edit__card-close js-close-tooltip"></button>
                  (例)<br>
                  子育てのご家庭をサポートをさせて頂いておりますので、お子さまのいらっしゃらないご家庭の家事代行はお断りしております。ご了承ください<br>
                  また、男性ユーザー様からのご依頼もお断りさせて頂いております。<br><br>

                  (例)<br>
                  家事代行は3時間からお受けしております。<br><br>

                  (例)<br>
                  当方自宅より片道1時間以内の方のみとさせて頂いております。
                </div>
              </td>
            </tr>
            <tr>
              <td class="looksort_table_info">対応可能サービス</td>
              <td colspan="2">
                <div v-if="supports.supported_service">
                  料理（{{cookingOptions.filter(x => supports.supported_service.split(',').map(y => Number(y)).includes(x.value)).map(z => z.label).join('、')}}）<br/>
                  掃除・洗濯（{{cleaningOptions.filter(x => supports.supported_service.split(',').map(y => Number(y)).includes(x.value)).map(z => z.label).join('、')}}）
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
import SupporterHeader from "@/components/header/SupporterHeader.vue";
import ExeoSupporterNavigationWindow from "@/components/other/ExeoSupporterNavigationWindow.vue";
import ExeoTableHousekeeperShow from "@/components/table/ExeoTableHousekeeperShow.vue";
import SupporterHousekeeperSettingService from "@/services/admin/supporter/SupporterHousekeeperSettingService.js";
import ExeoAlert from "@/components/other/ExeoAlert";

export default {
  layout: "admin",
  components: {
    ExeoSupporterNavigationWindow,
    SupporterHeader,
    ExeoTableHousekeeperShow,
    ExeoAlert
  },
  head() {
    return {
      title: 'プロフィール〈家事代行設定〉'
    }
  },
  async asyncData(context) {
    let {setting} = await SupporterHousekeeperSettingService.getSetting(context,context.params.id)
    let options = await SupporterHousekeeperSettingService.getSettingOptions(context,context.params.id)
    let supports = await SupporterHousekeeperSettingService.getSettingSupports(context,context.params.id)
    if(setting == null || setting.is_housework == 0) {
      setting = {
        id: null,
        settings_id: null,
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
        acceptance_condition: null,
        supported_service: null,
      }
    }
    await context.store.dispatch('admin/supporter/info/initData', {supporter_id : context.params.id, context:context});
    const supporter = context.store.getters['admin/supporter/info/supporter']
    return {
      housekeeping_setting : setting,
      options: options,
      supports: supports,
      user : supporter
    }
  },
  data() {
    return {
      cookingOptions: [
        {value: 0, label: "作り置き"},
        {value: 1, label: "パーティー料理"},
        {value: 2, label: "お買い物"},
      ],
      cleaningOptions: [
        {value: 3, label: "リビング"},
        {value: 4, label: "寝室"},
        {value: 5, label: "子供部屋"},
        {value: 6, label: "廊下"},
        {value: 7, label: "クローゼット"},
        {value: 8, label: "風呂場"},
        {value: 9, label: "トイレ"},
        {value: 10, label: "洗面所"},
        {value: 11, label: "キッチン"},
        {value: 12, label: "庭"},
        {value: 13, label: "洗濯"},
        {value: 14, label: "アイロンがけ"},
        {value: 15, label: "収納アドバイス"},
      ]
    }
  }
};
</script>

<style scoped>
</style>
