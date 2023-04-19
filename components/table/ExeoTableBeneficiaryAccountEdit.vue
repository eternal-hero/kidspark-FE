<template>
  <div class="col2_block_main">
    <form action="" class="form-edit">
      <table
        class="
          table_style_02 table_style_02--style5 table_style_02--no-striped
          form-edit__table
          looksort_table--small
        "
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
            <td>
              <div class="form-edit__list">
                <div class="form-edit__list-item">
                  <span>頭文字</span>
                  <div class="form-edit__select form_part_select">
                    <exeo-select
                      :options="$ACRONYM"
                      v-model="beneficiary_accounts.acronym"
                    ></exeo-select>
                  </div>
                </div>
                <!-- 銀行名はAPIからとる 今は偽data-->
                <div class="form-edit__list-item">
                  <span>銀行名</span>
                  <div class="form-edit__select form_part_select">
                    <exeo-select
                      :options="$ACRONYM"
                      v-model="beneficiary_accounts.bank_name"
                    ></exeo-select>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="looksort_table_info">支店名</td>
            <td>
              <exeo-form
                class="form-edit__input"
                v-model="beneficiary_accounts.branch_name"
                placeholder="支店名または支店番号"
              />
            </td>
          </tr>
          <tr>
            <td class="looksort_table_info">口座種類</td>
            <td>
              <div class="radio-group form-edit__radio">
                <div class="pure-input pure-input--styles02">
                  <ExeoRadio
                    :name="'account_type${index}'"
                    :options="$ACCOUNT_TYPE"
                    v-model="beneficiary_accounts.account_type"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td class="looksort_table_info">口座番号</td>
            <td>
              <ExeoForm
                class="form-edit__input"
                v-model="beneficiary_accounts.account_number"
                placeholder="(例)2200000"
              />
            </td>
          </tr>
          <tr>
            <td class="looksort_table_info">講座名義</td>
            <td>
              <ExeoForm
                class="form-edit__input"
                v-model="beneficiary_accounts.account_name"
                placeholder="(例)ヤマダタロウ"
              />
            </td>
          </tr>
          <tr>
            <td class="looksort_table_info">登録日</td>
            <td>
              <strong>{{
                formatRegistration(beneficiary_accounts.registration_on)
              }}</strong
              ><span class="form-edit__note">※保存後、自動で更新されます</span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="form-edit__control">
        <button class="btn_style_04" @click.prevent="submit">保存する</button>
      </div>
    </form>
  </div>
</template>

<script>
import ExeoSelect from "../action/ExeoSelect.vue";
import ExeoRadio from "../action/ExeoRadio.vue";
import ExeoForm from "../form/ExeoForm.vue";
export default {
  components: { ExeoSelect, ExeoRadio, ExeoForm },
  name: "ExeoTableBeneficiaryAccountShow",
  props: {
    beneficiary_accounts: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      form: {},
    };
  },
  methods: {
    submit() {
      this.$emit("submit", this.form);
    },
    formatRegistration(val) {
      return this.$moment(val).format("YYYY年MM月DD日");
    },
  },
};
</script>
