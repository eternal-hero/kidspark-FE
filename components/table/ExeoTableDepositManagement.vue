<template>
  <div class="tableblock_scroll">
    <table class="table_style_02 table_style_02--style8 looksort_table">
      <thead>
        <tr>
          <th>決済ID</th>
          <th>決済日時</th>
          <th>最終更新日</th>
          <th>決済状況</th>
          <th>決済内容</th>
          <th>お仕事ID</th>
          <th>ユーザー</th>
          <th>決済金額</th>
          <th>決済手数料</th>
          <th>入金合計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="deposit in deposits" :key="deposit.id">
          <td class="looksort_table_id">
            <a href="/T068.html">{{ deposit.id }}</a>
          </td>
          <td class="looksort_table_start">
            {{ $moment(deposit.settlement_at).format("YYYY/MM/DD hh:mm") }}
          </td>
          <td class="looksort_table_end">
            {{ $moment(deposit.last_updated_at).format("YYYY/MM/DD hh:mm") }}
          </td>
          <td class="looksort_table_status">
            <span
              v-if="deposit.status == 0"
              class="statusicn statusicn--04 statusicn_confirmation"
              >仮決済中
            </span>
            <span
              v-else-if="deposit.status == 1"
              class="statusicn statusicn--04 statusicn_completion"
              >キャンセル
            </span>
            <span
              v-else-if="deposit.status == 2"
              class="statusicn statusicn--04 statusicn_expiration"
              >決済済み
            </span>
          </td>
          <td class="looksort_table_details">{{ deposit.payment_details }}</td>
          <td class="looksort_table_id02">
            <a href="/T056.html">{{ deposit.job_id }}</a>
          </td>
          <td class="looksort_table_user">
            <a href="/T044.html"
              >{{ deposit.name }}<br />
              {{ deposit.kana }}</a
            >
          </td>
          <td class="looksort_table_day">{{ deposit.amount }}</td>
          <td class="looksort_table_day02">{{ deposit.fee }}</td>
          <td class="looksort_table_point">{{ deposit.total_points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ExeoTableDepositManagement",
  components: {},
  props: {
    deposits: {
      type: Array,
    },
  },
  methods: {},
};
</script>

<style scoped>
</style>
