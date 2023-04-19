<template>
  <div class="wrapper">
    <main id="page-T067" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li><a href="../">TOP</a></li>
          <li><a href="/">決済管理</a></li>
          <li>ユーザー入金管理</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>決済管理〈ユーザー入金管理〉</span></h1>
      <div class="flex-box f-jc-space-between">
        <button class="btn_style_05 js-popup" @click="showModal()">
          絞り込む
        </button>
        <div class="looksort-yen">
          <span class="looksort-yen__name">入金合計</span>
          <span class="looksort-yen__number">64,957円</span>
        </div>
      </div>
      <div class="tableblock_scroll">
        <ExeoTableDepositManagement :deposits="deposits" />
      </div>
      <div class="flex_box f-jc-space-between">
        <exeo-pagenation />
        <div class="flex_box f-jc-flex-end supporter-block">
          <div class="statusdescription looksort_statusdescription">
            <p class="statusdescription_ttl">ステータス説明</p>
            <ul class="statusdescription_list">
              <li>
                <span class="statusicn statusicn_quotation">仮決済中</span
                ><span>予約確定〜お仕事完了まで</span>
              </li>
              <li>
                <span class="statusicn statusicn_cancel">キャンセル</span
                ><span>予約確定後にキャンセル（キャンセル料無料）</span>
              </li>
              <li>
                <span class="statusicn statusicn_completion">決済済み</span
                ><span
                  >最終見積もり(レポート)承認済みまたは有料キャンセルに承認した場合</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <M027 class="open" v-show="isShowing" @close="close" />
    </main>
  </div>
</template>

<script>
import ExeoPagenation from "@/components/ExeoPagenation.vue";
import M027 from "@/components/modal/M027.vue";
import ExeoTableDepositManagement from "@/components/table/ExeoTableDepositManagement.vue";
import M033 from "../../../components/modal/M033.vue";
export default {
  layout: "admin",
  components: {
    ExeoTableDepositManagement,
    M027,
    ExeoPagenation,
    M033,
  },
  head() {
    return {
      title: '決済管理〈ユーザー入金管理〉'
    }
  },
  data() {
    return {
      isShowing: false,
      deposits: [
        {
          id: "1",
          settlement_at: this.$moment(),
          last_updated_at: this.$moment(),
          status: "1",
          payment_details: "1",
          job_id: "001",
          name: "木林 由有子",
          kana: "きばやし ゆうこ",
          amount: "100",
          fee: "10",
          total_points: "100",
        },
        {
          id: "2",
          settlement_at: this.$moment(),
          last_updated_at: this.$moment(),
          status: "1",
          payment_details: 1,
          job_id: "001",
          name: "木林",
          kana: "きばやし",
          amount: "100",
          fee: "10",
          total_points: "100",
        },
      ],
    };
  },
  methods: {
    showModal() {
      this.isShowing = true;
    },
    close() {
      this.isShowing = false;
    },
  },
};
</script>

<style scoped>
</style>