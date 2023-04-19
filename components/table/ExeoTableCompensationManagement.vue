<template>
  <div class="tableblock_scroll">
    <table
      class="
        table_style_02
        looksort_table
        table_settement_manager table_settement_manager--styles02
      "
    >
      <thead>
        <tr>
          <th>
            <ul class="list-checkbox">
              <li class="list-checkbox__item list-checkbox__item--full">
                <form>
                  <label class="checkbox-custom">
                    <input
                      id="checkAll"
                      type="checkbox"
                      name="lang"
                      value="checkall"
                      v-model="selectAll"
                      @change="selectAllData"
                    />
                    <span class="checkmark"></span>
                  </label>
                </form>
              </li>
            </ul>
          </th>
          <th>パークサポーター</th>
          <th>売上</th>
          <th>支払い</th>
          <th>支払い日</th>
          <th>今月の売上</th>
          <th>繰越金</th>
          <th>
            <div
              class="statuschips js-tooltip statuschips--02"
              data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>"
            >
              <span>売上合計</span>
            </div>
          </th>
          <th>振込先</th>
          <th>振込手数料</th>
          <th>支払い合計</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(supporter, index) in supporter_datas" :key="index">
          <td>
            <ul class="list-checkbox">
              <li class="list-checkbox__item list-checkbox__item--full">
                <label class="checkbox-custom">
                  <input
                    type="checkbox"
                    :value="supporter"
                    v-model="selected"
                    class="checks"
                    @change="selectData(index)"
                  />
                  <span class="checkmark"></span>
                </label>
              </li>
            </ul>
          </td>
          <td>
            <NuxtLink :to="`/admin/supporter/${supporter.id}/info`">
              {{ supporter.last_name }}　{{ supporter.first_name }}<br />{{
                supporter.last_kana
              }} {{ supporter.first_kana }}
            </NuxtLink>
          </td>
          <td>
            <span
              class="statusicn statusicn_cancel"
              v-if="parseInt(supporter.sales_status) === 0"
              >未確定</span
            >
            <span
              class="statusicn statusicn_completion"
              v-if="parseInt(supporter.sales_status) === 1"
              >確定済み</span
            >
          </td>
          <td>
            <span
              class="statusicn statusicn_unsupported"
              v-if="parseInt(supporter.payment_status) === 0"
              >振込エラー</span
            >
            <span
              class="statusicn statusicn_completion"
              v-if="parseInt(supporter.payment_status) === 1"
              >決済済み</span
            >
          </td>
          <td>{{ $moment(supporter.payment_at).format("YYYY年MM月DD日") }}</td>
          <td>{{ supporter.payment }}</td>
          <td>{{ supporter.carry_forward }}</td>
          <td>{{ supporter.total_sales }}</td>
          <td>{{ supporter.payee }}</td>
          <td>{{ supporter.transfer_fee }}</td>
          <td>{{ supporter.payment_total }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ExeoTableCompensationManagement",
  components: {},
  props: {
    supporter_datas: {
      type: Array,
    },
  },
  data() {
    return {
      showPage: false,
      selected: [],
      selectAll: false,
    };
  },
  methods: {
    selectAllData() {
      this.selected = [];
      if (this.selectAll) {
        for (let i in this.$props.supporter_datas) {
          const data = this.selected;
          data.push(this.$props.supporter_datas[i]);
        }
        console.log("ALL中", this.selected);
      }
    },

    selectData(index) {
      if (this.selected.length == this.supporter_datas.length) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      }
    },
  },
  watch: {
    selected: function (val) {
      this.selected = val;
      console.log("selectONE", this.selected);
    },
    selectAll: function (val) {
      this.selectAll = val;
      console.log("selectAll", this.selectAll);
    },
  },
};
</script>

<style scoped>
</style>
