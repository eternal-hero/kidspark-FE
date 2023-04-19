<template>
  <div class="tableblock_scroll">
    <table class="table_style_02 looksort_table table_settement_manager">
      <thead>
      <tr>
        <th>ユーザー</th>
        <th>回収状況</th>
        <th>請求日</th>
        <th>回収日</th>
        <th>回収金額</th>
        <th>
          <div class="statuschips js-tooltip statuschips--02"
               data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>">
            <span>入金額</span></div>
        </th>
        <th>メモ</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <template v-for="(payment, index) in payments">
        <tr v-if="payment.editing" :key="index">
          <td>
            <a href="/T014.html">
              {{ payment.user.first_name }}　{{ payment.user.last_name }}
              <br>
              {{ payment.user.first_kana }}　{{ payment.user.last_kana }}
            </a>
          </td>
          <td>
            <div class="tableform_select">
              <exeo-select :options="statusOptions" v-model="payment.status"/>
            </div>
          </td>
          <td>2022年06月31日</td>
          <td>
            <label class="form_part_date">
              <input type="date" placeholder="日付を選択してください" class="form_part_date_input"
                     v-model="payment.payment_date">
            </label>
          </td>
          <td>{{ payment.amount }}</td>
          <td>
            <div class="form_part_unit form_part_unit--styles02">
              <input type="text" v-model="payment.deposit">
              <span class="form_part_unit_label">円</span>
            </div>
          </td>
          <td>
            <input type="text"
                   v-model="payment.memo"
                   class="table_settement_manager__input table_settement_manager__input--full"
                   placeholder="(例)○月売上分から回収済み)">
          </td>
          <td>
            <button class="btn_style_01" @click.prevent="save(index)">保存</button>
          </td>
        </tr>
        <tr v-else>
          <td>
            <a href="/T014.html">
              {{ payment.user.first_name }}　{{ payment.user.last_name }}
              <br>{{ payment.user.first_kana }}　{{ payment.user.last_kana }}
            </a>
          </td>
          <td>
            <span class="statusicn statusicn_unsupported" v-if="parseInt(payment.status) === 0">未確定</span>
            <span class="statusicn statusicn_completion" v-if="parseInt(payment.status) === 1">回収済み</span>
          </td>
          <td>{{ formatDate(payment.billing_date) }}</td>
          <td>{{ formatDate(payment.payment_date) }}</td>
          <td>{{ payment.amount }}</td>
          <td class="table_settement_manager_deposit">{{ payment.deposit }}</td>
          <td>{{ payment.memo }}</td>
          <td>
            <button class="btn_style_02" @click.prevent="edit(index)">編集</button>
          </td>
        </tr>
      </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import {datetimeMixin} from "@/mixins/datetimeMixin";
import ExeoSelect from "@/components/action/ExeoSelect.vue";

export default {
  name: "UnpaidPaymentTable",
  components: {
    ExeoSelect
  },
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  mixins: [datetimeMixin],
  data() {
    return {
      payments: [],
      // Constants
      statusOptions: [
        {label: "未確定", value: 0},
        {label: "回収済み", value: 1}
      ]
    }
  },
  methods: {
    edit(index) {
      console.log(this.payments[index]);
      this.payments[index].editing = true;
    },
    save(index) {
      // TODO - API呼び出す
      this.payments[index].editing = false;
    }
  },
  created() {
    console.log("created");
    this.payments = [...this.value];
    for (let i = 0; i < this.payments.length; i++) {
      this.$set(this.payments[i], 'editing', false);
    }
  }
}
</script>

<style scoped>

</style>
