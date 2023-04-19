<template>
  <div class="col2_block_main">
    <h2 class="cmn-ttl-01"><span>支払い方法</span></h2>
    <table class="table_style_01">
      <tbody>
        <tr>
          <th class="looksort_table_info">カードの種類</th>
          <td>{{payment.card_type}}</td>
        </tr>
        <tr>
          <th class="looksort_table_info">カード番号</th>
          <td>{{payment.card_number}}</td>
        </tr>
        <tr>
          <th class="looksort_table_info">有効期限</th>
          <td>{{formatRegistration(payment.expiration_on)}}</td>
        </tr>
        <tr>
          <th class="looksort_table_info">名義人</th>
          <td>{{payment.nominee}}</td>
        </tr>
        <tr>
          <th class="looksort_table_info">セキュリティコード</th>
          <td>{{payment.security_code}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ExeoTablePaymentShow",
  props: {
    payment: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    formatRegistration(val) {
      return this.$moment(val).format("YYYY年MM月DD日");
    },
  },
};
</script>
