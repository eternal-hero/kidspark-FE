<template>
  <div class="col2_block_main">
    <form action="" class="form-edit">
      <div class="add-info">
        <table
          class="table_style_02 table_style_02--style5 looksort_table--small"
        >
          <thead>
            <tr>
              <th>受取口座</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="looksort_table_info">銀行名</td>
              <td>{{ beneficiary_accounts.bank_name }}</td>
            </tr>
            <tr>
              <td class="looksort_table_info">支店名</td>
              <td>{{ beneficiary_accounts.branch_name }}</td>
            </tr>
            <tr>
              <td class="looksort_table_info">口座種類</td>
              <td>{{ beneficiary_accounts.account_type }}</td>
            </tr>
            <tr>
              <td class="looksort_table_info">口座番号</td>
              <td>{{ beneficiary_accounts.account_number }}</td>
            </tr>
            <tr>
              <td class="looksort_table_info">講座名義</td>
              <td>{{ beneficiary_accounts.account_name }}</td>
            </tr>
            <tr>
              <td class="looksort_table_info">登録日</td>
              <td>
                {{ formatRegistration(beneficiary_accounts.registration_on) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ExeoTableBeneficiaryAccountShow",
  props: {
    beneficiary_accounts: {
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
