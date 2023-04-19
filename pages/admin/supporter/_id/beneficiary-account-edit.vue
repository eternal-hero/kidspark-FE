<template>
  <main id="page-T018-edit" class="site_main">
    <nav class="breadcrumb">
      <ul>
        <li><a href="../">TOP</a></li>
        <li><a href="/">パークサポーター管理</a></li>
        <li>受取口座設定</li>
      </ul>
    </nav>
    <h1 class="page_ttl_01"><span>設定〈受取口座設定〉</span></h1>
    <supporter-header :user="supporter" is-editing />
    <div class="col2_block f-ai-start">
      <exeo-supporter-navigation-window />
      <exeo-table-beneficiary-account-edit
        :beneficiary_accounts="beneficiary_accounts"
      />
    </div>
  </main>
</template>

<script>
import SupporterHeader from "@/components/header/SupporterHeader.vue";
import ExeoSupporterNavigationWindow from "@/components/other/ExeoSupporterNavigationWindow.vue";
import ExeoTableBeneficiaryAccountEdit from "../../../../components/table/ExeoTableBeneficiaryAccountEdit.vue";

export default {
  layout: "admin",
  components: {
    ExeoSupporterNavigationWindow,
    SupporterHeader,
    ExeoTableBeneficiaryAccountEdit,
  },
  head() {
    return {
      title: '設定〈受取口座設定〉'
    }
  },
  data() {
    return {
      beneficiary_accounts: {
        acronym: "お",
        bank_name: "あ",
        branch_name: "渋谷",
        account_type: 0,
        account_number: "11111111111",
        account_name: "ﾔﾏﾀﾞ ﾀﾛｳ",
        registration_on: "2023年02月03日",
      },
    };
  },
  methods: {},
};
</script>