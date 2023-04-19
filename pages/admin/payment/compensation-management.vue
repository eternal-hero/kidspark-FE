<template>
  <div class="wrapper" v-if="showPage">
    <main id="page-T070" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li><a href="../">TOP</a></li>
          <li><a href="/">決済管理</a></li>
          <li>報酬管理</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>決済管理〈報酬管理〉</span></h1>
      <div class="looksort settement_manager">
        <div
          class="settement_manager_heading settement_manager_heading--styles02"
        >
          <div class="daily_data">
            <a href="" class="prev"></a>
            <div class="daily_data_inr">
              <p>
                <span class="daily_data_num">
                  {{ $moment().format("YYYY/MM") }}</span
                >
              </p>
            </div>
            <a href="" class="next"></a>
          </div>
          <div class="error-notify">
            <span
              ><img
                src="/assets/img/common/ico-danger.png"
                alt="5月分の振り込みエラー分が1件残っています。"
                width="20" /></span
            >5月分の振り込みエラー分が1件残っています。
          </div>
        </div>
        <m-030 @submitData="submitData"/>
        <div class="settement_manager_payment flex flex--center">
          <span>チェックした【支払い】を</span>
          <div class="form_part_select">
            <exeo-select :options="option" :value="null"/>
          </div>
          <button class="btn_style_04" @click.prevent="update">更新</button>
        </div>
        <exeo-table-compensation-management
          :supporter_datas="supporter_datas" @submitSelected="submitSelected"
        />
      </div>
      <div class="flex_box f-jc-flex-end settement_manager_note">
        <div class="statusdescription looksort_statusdescription">
          <p class="statusdescription_ttl">ステータス説明</p>
          <ul class="statusdescription_list">
            <li>
              <span class="statusicn statusicn_cancel">未確定</span
              ><span>まだ売上を確定していません</span>
            </li>
            <li>
              <span class="statusicn statusicn_completion">確定済み</span
              ><span>売上確定後のお仕事は翌月支払いになります</span>
            </li>
            <li>
              <span class="statusicn statusicn_unsupported">振込エラー</span
              ><span
                >振込処理中にエラーが発生している、銀行からエラーが返ってきている</span
              >
            </li>
            <li>
              <span class="statusicn statusicn_completion">決済済み</span
              ><span>支払い完了して売上計上済み</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ExeoTableCompensationManagement from "../../../components/table/ExeoTableCompensationManagement.vue";
import M030 from "../../../components/modal/M030.vue";
import ExeoSelect from "../../../components/action/ExeoSelect.vue";
export default {
  layout: "admin",
  components: {
    ExeoTableCompensationManagement,
    M030,
    ExeoSelect,
  },
  head() {
    return {
      title: '決済管理〈報酬管理〉'
    }
  },
  data() {
    return {
      showPage:false,
      option: [
        { label: "未入力", value: "" },
        { label: "支払い済みにする", value: 0 },
        { label: "振込エラーにする", value: 1 },
      ],

      isShowing: false,
      supporter_datas: [
        {
          id: "1",
          last_name: "木林1",
          first_name: "由有子",
          last_kana: "きばやし",
          first_kana: "ゆうこ",
          sales_status: "0",
          payment_status: "1",
          payment_at: this.$moment(),
          payment: "1000",
          carry_forward: "2200",
          total_sales: "40000",
          payee: "222 ",
          transfer_fee: "222",
          payment_total: "100",
        },
        {
          id: "2",
          last_name: "木林2",
          first_name: "由有子",
          last_kana: "きばやし",
          first_kana: "ゆうこ",
          sales_status: "1",
          payment_status: "0",
          payment_at: this.$moment(),
          payment: "2000",
          carry_forward: "2200",
          total_sales: "20000",
          payee: "2212 ",
          transfer_fee: "1222",
          payment_total: "2100",
        },
        {
          id: "3",
          last_name: "木林3",
          first_name: "由有子",
          last_kana: "きばやし",
          first_kana: "ゆうこ",
          sales_status: "1",
          payment_status: "0",
          payment_at: this.$moment(),
          payment: "2000",
          carry_forward: "2200",
          total_sales: "20000",
          payee: "2212 ",
          transfer_fee: "1222",
          payment_total: "2100",
        },
      ],
    };
  },
  created(){
     this.supporter_datas=this.supporter_datas;
this.showPage=true


  },
  methods: {
    showModal() {
      this.isShowing = true;
    },
    close() {
      this.isShowing = false;
    },
    submitData(modalData){
console.log(modalData)
    },
    submitSelected(selected){
console.log(selected)
    }
    
  },
};
</script>

<style scoped>
</style>