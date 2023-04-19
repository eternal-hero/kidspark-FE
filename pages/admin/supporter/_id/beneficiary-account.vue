<template>
  <main id="page-T018" class="site_main">
    <nav class="breadcrumb">
      <ul>
        <li><a href="../">TOP</a></li>
        <li><a href="/">パークサポーター管理</a></li>
        <li>受取口座設定</li>
      </ul>
    </nav>
    <h1 class="page_ttl_01"><span>設定〈受取口座設定〉</span></h1>
    <supporter-header :user="supporter" @edit="moveToEditPage" />
    <div class="col2_block f-ai-start">
      <exeo-supporter-navigation-window />
      <exeo-table-beneficiary-account-show
        :beneficiary_accounts="beneficiary_accounts"
      />
    </div>
  </main>
</template>

<script>
import SupporterHeader from "@/components/header/SupporterHeader.vue";
import ExeoSupporterNavigationWindow from "@/components/other/ExeoSupporterNavigationWindow.vue";
import ExeoTableBeneficiaryAccountShow from "../../../../components/table/ExeoTableBeneficiaryAccountShow.vue";

export default {
  name: "ExeoTableBeneficiaryAccountShowPage",
  layout: "admin",
  components: {
    SupporterHeader,
    ExeoSupporterNavigationWindow,
    ExeoTableBeneficiaryAccountShow,
  },
  head() {
    return {
      title: '設定〈受取口座設定〉'
    }
  },
  data() {
    return {
      beneficiary_accounts: {
        bank_name: "三菱UFJ",
        branch_name: "渋谷",
        account_type: "普通",
        account_number: "11111111111",
        account_name: "ﾔﾏﾀﾞ ﾀﾛｳ",
        registration_on: "2023年02月03日",
      },
    };
  },

  //   async asyncData(context) {
  //     try {
  //       const beneficiary_accounts = await BeneficiaryAccountService.getBeneficiaryAccount(context, context.params.id);
  //       return {
  //         beneficiary_accounts: beneficiary_accounts
  //       }
  //     } catch (e) {
  //       context.error(e.response.data.status);
  //     }
  //   },
  methods: {
    moveToEditPage() {
      this.$router.push("info-edit");
    },
  },
};
</script>

<style>
</style>
