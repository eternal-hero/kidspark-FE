<template>
  <main id="page-T032" class="site_main">
    <nav class="breadcrumb">
      <ul>
        <li><a href="../">TOP</a></li>
        <li><a href="/">ユーザー管理</a></li>
        <li>支払い方法</li>
      </ul>
    </nav>
    <h1 class="page_ttl_01"><span>設定〈支払い方法〉</span></h1>
    <exeo-guardian-header
      :guardian="guardian"
      is-editing
    ></exeo-guardian-header>
    <div class="col2_block f-ai-start">
      <exeo-guardian-navigation-window />
      <exeo-table-payment-show :payment="payment" />
    </div>
  </main>
</template>

<script>
import ExeoGuardianNavigationWindow from "@/components/other/ExeoGuardianNavigationWindow.vue";
import ExeoTablePaymentShow from "../../../../components/table/ExeoTablePaymentShow.vue";
import ExeoGuardianHeader from "../../../../components/header/ExeoGuardianHeader.vue";

export default {
  name: "payment",
  layout: "admin",
  components: {
    ExeoGuardianNavigationWindow,
    ExeoTablePaymentShow,
    ExeoGuardianHeader,
  },
  head() {
    return {
      title: '設定〈支払い方法〉'
    }
  },
  data() {
    return {
      payment: {
        card_type: "三菱UFJ",
        card_number: "渋谷",
        account_type: "普通",
        expiration_on: "2023年02月03日",
        nominee: "ﾔﾏﾀﾞ ﾀﾛｳ",
        security_code: "123",
      },
    };
  },
  methods: {},
};
</script>

<style>
</style>
