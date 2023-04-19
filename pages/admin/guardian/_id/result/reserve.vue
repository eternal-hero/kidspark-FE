<template>
  <div class="wrapper">
    <main id="page-T045" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li><a href="../">TOP</a></li>
          <li><a href="/">ユーザー管理</a></li>
          <li>予約状況</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>実績〈予約状況〉</span></h1>
      <exeo-guardian-header :guardian="this.guardian" is-editing></exeo-guardian-header>
      <div class="col2_block f-ai-start">
        <exeo-guardian-navigation-window></exeo-guardian-navigation-window>
        <div class="col2_block_main">
          <div class="achievements-block">
            <div class="application-block__btn">
              <button class="btn_style_05 js-popup">絞り込む</button>
            </div>
            <div class="form_part_select">
              <ExeoSelect :options="sortOptions" value="0"></ExeoSelect>
            </div>
          </div>
          <ExeoTableAdminGuardianReserve :value='guardian_reserve'></ExeoTableAdminGuardianReserve>
          <div class="flex_box f-jc-flex-end">
            <div class="statusdescription looksort_statusdescription">
              <p class="statusdescription_ttl">ステータス説明</p>
              <ul class="statusdescription_list">
                <li><span class="statusicn statusicn_request">リクエスト</span><span>ユーザーのリクエスト中</span></li>
                <li><span class="statusicn statusicn_quotation">見積り提示</span><span>サポーターから見積提出済み</span></li>
                <li><span class="statusicn statusicn_confirmation">予約確定</span><span>予約確定しました</span></li>
                <li><span class="statusicn statusicn_confirmation_ok">予約確定</span><span>サポーターが当日準備OKのボタンを押しました</span>
                </li>
                <li><span class="statusicn statusicn_confirmation_support">予約確定</span><span>サポート中</span></li>
                <li><span class="statusicn statusicn_awaitingreport">レポート待ち</span><span>サポート終了後の完了報告待ち</span></li>
                <li><span class="statusicn statusicn_awaitingapproval">承認待ち</span><span>サポート終了後のレポート承認待ち</span></li>
                <li><span class="statusicn statusicn_completion">完　了</span><span>売上確定</span></li>
                <li><span class="statusicn statusicn_expiration">期限切れ</span><span>見積またはリクエスの返答期限を過ぎました</span></li>
                <li><span class="statusicn statusicn_cancel">キャンセル</span><span>予約キャンセルされました</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="popup-main">
        <M045></M045>
      </div>
    </main>
  </div>
</template>

<script>
import ExeoGuardianHeader from "@/components/header/ExeoGuardianHeader.vue";
import ExeoGuardianNavigationWindow from "@/components/other/ExeoGuardianNavigationWindow.vue";
import M045 from '@/components/modal/M045.vue';
import ExeoTableAdminGuardianReserve from '@/components/table/ExeoTableAdminGuardianReserve.vue';
import ExeoSelect from '@/components/action/ExeoSelect.vue';

import '@/assets/admin/css/reset.css';
import '@/assets/admin/css/slick-theme.css';
import '@/assets/admin/css/slick.css';
import '@/assets/admin/css/common.css';
import '@/assets/admin/css/dashboard.css';
import '@/assets/admin/css/styles.css';
import '@/assets/admin/css/component.css';
export default {
  layout: 'admin',
  name: "Reserve",
  components: {
    ExeoGuardianNavigationWindow,
    ExeoGuardianHeader,
    M045,
    ExeoTableAdminGuardianReserve,
    ExeoSelect,
  },
  head() {
    return {
      title: '実績〈予約状況〉'
    }
  },
  data() {
    return {
      data: [],
      guardian_reserve: [
        { jobId: '1', start: '2022年07月20日(水) 12:00', end: '2022年07月20日(水) 15:00', first_name: '山田', last_name: '太郎', first_kana: 'たかます', last_kana: 'よしこ', constant: '定期', requestCategory: 'シッター', watchOver: 1, status: 1 },
        { jobId: '2', start: '2022年07月20日(水) 12:00', end: '2022年07月20日(水) 15:00', first_name: '山田', last_name: '太郎', first_kana: 'たかます', last_kana: 'よしこ', constant: '定期', requestCategory: 'シッター', watchOver: 0, status: 3 },
        { jobId: '3', start: '2022年07月20日(水) 12:00', end: '2022年07月20日(水) 15:00', first_name: '山田', last_name: '太郎', first_kana: 'たかます', last_kana: 'よしこ', constant: '定期', requestCategory: 'シッター', watchOver: 1, status: 2 },
        { jobId: '4', start: '2022年07月20日(水) 12:00', end: '2022年07月20日(水) 15:00', first_name: '山田', last_name: '太郎', first_kana: 'たかます', last_kana: 'よしこ', constant: '定期', requestCategory: 'シッター', watchOver: 0, status: 4 },
        { jobId: '5', start: '2022年07月20日(水) 12:00', end: '2022年07月20日(水) 15:00', first_name: '山田', last_name: '太郎', first_kana: 'たかます', last_kana: 'よしこ', constant: '定期', requestCategory: 'シッター', watchOver: 0, status: 5 },
        { jobId: '6', start: '2022年07月20日(水) 12:00', end: '2022年07月20日(水) 15:00', first_name: '山田', last_name: '太郎', first_kana: 'たかます', last_kana: 'よしこ', constant: '定期', requestCategory: 'シッター', watchOver: 1, status: 6 },
      ],
      guardian: {
        first_name: " ",
        last_name: " ",
        first_kana: " ",
        last_kana: " ",
        rating: 0,
      },
      isEditing: false,
      sortOptions: [
        { label: '並べ替え', value: '0' },
        { label: 'お仕事ID順', value: '1' },
        { label: '開始順', value: '2' },
        { label: 'パークサポーター順', value: '3' },
        { label: 'ステータス順', value: '4' }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.m-20 {
  margin-left: 20px;
}
</style>
