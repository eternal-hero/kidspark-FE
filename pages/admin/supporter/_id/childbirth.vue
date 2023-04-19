<template>
  <main class="site_main">
    <nav class="breadcrumb">
      <ul>
        <li><a href="/app/admin/dashboard">TOP</a></li>
        <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
        <li>産前産後設定</li>
      </ul>
    </nav>
    <h1 class="page_ttl_01"><span>プロフィール〈産前産後設定〉</span></h1>
    <ExeoAlert></ExeoAlert>
    <SupporterHeader :user="user" :is-editing="false" @edit="$router.push('childbirth-edit')"/>
    <div class="col2_block f-ai-start">
      <ExeoSupporterNavigationWindow />
      <div class="col2_block_main no-flex">
        <exeo-table-childbirth-show v-model="setting"/>
        <!-- 2月リリース対象外 -->
        <!-- <table
          class="
            table_style_02 table_style_02--style5 table_style_02--no-striped
            support-management
            looksort_table--small
          "
          v-show="setting.is_childbirth_care"
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
              <td class="looksort_table_info">産前産後オプション</td>
              <td colspan="2">マッサージ 500円/1回あたり</td>
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
            <tr>
              <td class="looksort_table_info">受け入れ条件</td>
              <td colspan="2">
                <p>
                  ☑️より多くのリクエストにお応えできるよう、サポーター自宅から1時間以内の方を優先でお引き受けしております。
                  基本は、自家用車での移動となっております。<br />
                  1kmあたり30円換算で交通費を頂戴致します。<br />
                  また片道1時間以上の場合は高速道路代(600円〜)を頂戴致します。<br /><br />
                </p>
                <p>
                  ☑️駐車場に関して、コインパーキングを使用する場合は、利用時間分を頂戴致します。
                </p>
              </td>
            </tr>
            <tr class="has-card">
              <td class="looksort_table_info">対応可能サービス</td>
              <td>
                <p>
                  &lt;対象者&gt;<br />
                  -妊娠初期（母子健康手帳交付時等）から、該当のお子さまが満1歳となる前日まで<br />
                  ※原則、母子同室の状況下でのサービスのため、外出をご希望な場合はベビーシッター予約となります<br /><br />
                </p>
                <p>
                  &lt;基本的な提供サービス&gt;<br />
                  ・赤ちゃんのお世話(授乳、抱っこ、沐浴、遊び)<br /><br />
                </p>
                <p>
                  ・お母様のボディケア、メンタルケア、おっぱいケア<br />
                  →
                  完全母乳、完全ミルク、混合育児に対するアドバイスやサポート時のママのおっぱいの状態に応じての対処法について提供させていただきます。必要に応じて、おっぱいに触れることはありますが、マッサージはいたしません。<br /><br />
                </p>
                <p>
                  ・妊婦相談・育児相談(健康管理や赤ちゃんの発達発育に関する相談など)
                </p>
              </td>
              <td class="looksort_table_note">
                <div class="statuschips js-tooltip-02"><span>入力例</span></div>
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
          </tbody>
        </table> -->
      </div>
    </div>
  </main>
</template>

<script>
import SupporterHeader from "../../../../components/header/SupporterHeader.vue";
import ExeoSupporterNavigationWindow from "../../../../components/other/ExeoSupporterNavigationWindow.vue";
import ExeoTableChildbirthShow from '../../../../components/table/ExeoTableChildbirthShow.vue';
import ExeoTableHousekeeperShow from "../../../../components/table/ExeoTableHousekeeperShow.vue";
import ChildbirthSettingService from "@/services/admin/supporter/ChildbirthSettingService.js";
import ExeoAlert from "@/components/other/ExeoAlert";

export default {
  layout: "admin",
  components: {
    ExeoSupporterNavigationWindow,
    SupporterHeader,
    ExeoTableHousekeeperShow,
    ExeoTableChildbirthShow,
    ExeoAlert
  },
  head() {
    return {
      title: 'プロフィール〈産前産後設定〉'
    }
  },
  async asyncData(context) {
    let {setting} = await ChildbirthSettingService.getSetting(context,context.params.id)
    if(setting == null) {
      setting = {
        id: null,
        settings_id: null,
        supporter_user_id: parseInt(context.params.id),
        is_childbirth_care: false,
        single_fee: null,
        regular_fee: null,
        special: null,
        service: null
      }
    }
    await context.store.dispatch('admin/supporter/info/initData', {supporter_id : context.params.id, context:context});
    const supporter = context.store.getters['admin/supporter/info/supporter']
    return {setting : setting, user : supporter}
  },
};
</script>

<style scoped>
</style>
