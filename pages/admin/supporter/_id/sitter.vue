<template>
  <main class="site_main">
    <nav class="breadcrumb">
      <ul>
        <li><a href="/app/admin/dashboard">TOP</a></li>
        <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
        <li>シッター設定</li>
      </ul>
    </nav>
    <h1 class="page_ttl_01"><span>プロフィール〈シッター設定〉</span></h1>
    <ExeoAlert></ExeoAlert>
    <SupporterHeader :user="user" :is-editing="false" @edit="moveEditPage()"/>
    <div class="col2_block f-ai-start">
      <ExeoSupporterNavigationWindow />
      <div class="col2_block_main no-flex">
          <exeo-table-sitter-setting-show v-model="setting" />
          <table
            class="
              table_style_02 table_style_02--style5 table_style_02--no-striped
              support-management
              looksort_table--small"
            v-show="setting.is_supporter || options.length > 0"
          >
            <thead>
              <tr>
                <th>オプション設定</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(option, index) in options.filter(item => item['subject_type'] === 0)" :key="index">
                <td class="looksort_table_info">{{index == 0 ? "保育人数" : ''}}</td>
                <td colspan="2">{{option.option_content}}人預かる場合　+{{option.additional_fee}}円/1時間あたり</td>
              </tr>
              <tr v-for="(option, index) in options.filter(item => item['subject_type'] === 2)" :key="index">
                <td class="looksort_table_info">{{index == 0 ? "保育時間帯" : ''}}</td>
                <td colspan="2">{{option.option_content.split(',')[0]}}時〜{{option.option_content.split(',')[1]}}時は　+{{option.additional_fee}}円/1時間あたり</td>
              </tr>
              <tr v-for="(option, index) in options.filter(item => item['subject_type'] === 3)" :key="index">
                <td class="looksort_table_info">{{index == 0 ? "その他設定" : ''}}</td>
                <td colspan="2">{{option.option_content}}　{{option.additional_fee}}円/{{option.unit == 0 ? '1時間あたり' : '1回あたり'}}</td>
              </tr>
            </tbody>
          </table>
          <table
            class="
              table_style_02 table_style_02--style5 table_style_02--no-striped
              support-management
              looksort_table--small
            "
            v-show="setting.is_supporter || supports.id != null"
          >
            <thead>
              <tr>
                <th>対応可能設定</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="looksort_table_info">お子様の撮影対応</td>
                <td colspan="2">{{supports.shooting_support == null ? '' : (supports.shooting_suppoprt == 0 ? 'しない' : 'する')}}</td>
              </tr>
              <tr class="has-card">
                <td class="looksort_table_info">受け入れ条件</td>
                <td>
                  {{supports.acceptance_condition}}
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
                    >入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例入力例
                  </div>
                </td>
              </tr>
              <tr>
                <td class="looksort_table_info">対応可能サービス</td>
                <td colspan="2">
                  <dl class="support-management__service">
                    <dt>送迎サポート（送迎のみ）</dt>
                    <dd>{{supports.transportation_support == null ? '' : (supports.transportation_support == 0 ? "対応しない" : "対応する")}}</dd>
                    <dt v-show="supports.early_response_lower_limit">早期対応</dt>
                    <dd v-show="supports.early_response_lower_limit">{{supports.early_response_lower_limit}}時〜{{supports.early_response_upper_limit}}時</dd>
                    <dt v-show="supports.nighttime_lower_limit">夜間対応</dt>
                    <dd v-show="supports.nighttime_lower_limit">{{supports.nighttime_lower_limit}}時〜{{supports.nighttime_upper_limit}}時</dd>
                    <dt v-show="supports.overnight_care_lower_limit">お泊り保育</dt>
                    <dd v-show="supports.overnight_care_lower_limit">{{supports.overnight_care_lower_limit}}時〜{{supports.overnight_care_upper_limit}}時</dd>
                    <dt>外国籍ユーザー</dt>
                    <dd>{{supports.is_foreign_user_support == null ? '' : (supports.is_foreign_user_support == 0 ? "対応しない" : "対応する")}}</dd>
                  </dl>
                </td>
              </tr>
              <tr>
                <td class="looksort_table_info">障がい児対応</td>
                <td colspan="2">{{supports.is_handicapped_children_support == null ? '' : (supports.is_handicapped_children_support == 0 ? '引き受けない' : '引き受ける')}}</td>
              </tr>
              <tr>
                <td class="looksort_table_info">レッスン対応</td>
                <td colspan="2">
                  <div v-if="supports.lesson_support_bitflag & LESSON.ENGLISH">英語レッスン<br /></div>
                  <div v-if="supports.lesson_support_bitflag & LESSON.MUSIC">音楽レッスン<br /></div>
                  <div v-if="supports.lesson_support_bitflag & LESSON.SPORTS">スポーツレッスン<br /></div>
                  <div v-if="supports.lesson_support_bitflag & LESSON.DRAWING">絵・工作レッスン</div>
                </td>
              </tr>
              <!-- <tr>
                <td class="looksort_table_info">内閣府割引券対象</td>
                <td colspan="2">
                  <div class="flex flex--center">
                    <span>対象者</span>
                    <span
                      class="
                        statusicn statusicn_completion
                        support-management__statusicn
                      "
                      >申請受理済み</span
                    >
                  </div>
                </td>
              </tr> -->
            </tbody>
            <thead v-show="setting.is_supporter || experience.id != null">
              <tr>
                <th>経験</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody v-show="setting.is_supporter || experience.id != null">
              <tr>
                <td class="looksort_table_info">子育て経験</td>
                <td colspan="2">
                  <div class="flex flex--center">
                    <span>{{experience.parenting_experience == null ? '' : (experience.parenting_experience == 0 ? 'なし' : 'あり')}}</span>
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
import ExeoTableSitterSettingShow from "@/components/table/ExeoTableSitterSettingShow.vue";
import SitterSettingService from "@/services/admin/supporter/SitterSettingService.js";
import ExeoAlert from "@/components/other/ExeoAlert";


export default {
  layout: "admin",
  components: {
    ExeoSupporterNavigationWindow,
    SupporterHeader,
    ExeoTableSitterSettingShow,
    ExeoAlert
  },
  head() {
    return {
      title: 'プロフィール〈シッター設定〉'
    }
  },
  async asyncData(context) {
    let { setting } = await SitterSettingService.getSetting(context, context.params.id)
    const options = await SitterSettingService.getSettingOptions(context, context.params.id)
    let supports = await SitterSettingService.getSettingSupports(context, context.params.id)
    let experience = await SitterSettingService.getSettingExperience(context, context.params.id)
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
        is_foreign_user_support: null,
        is_sick_children_support: null,
        is_handicapped_children_support: null,
        is_handicapped_children_approval: null,
        lesson_support_bitflag: 0,
        is_cabinet_office_discount_coupon: null,
      }
    }
    if(experience == null) {
      experience = {parenting_experience: 0}
    }
    await context.store.dispatch('admin/supporter/info/initData', {supporter_id : context.params.id, context:context});
    const supporter = context.store.getters['admin/supporter/info/supporter']
    return {
      setting: setting, 
      options: options,
      supports: supports,
      experience: experience,
      user: supporter
    }
  },
  data() {
    return {
      LESSON: {
        ENGLISH: 1<<0,
        MUSIC: 1<<1,
        SPORTS: 1<<2,
        DRAWING: 1<<3,
      },
    }
  },
  methods: {
    moveEditPage() {
      this.$router.push(this.$route.path + '-edit')
    }
  },
};
</script>
