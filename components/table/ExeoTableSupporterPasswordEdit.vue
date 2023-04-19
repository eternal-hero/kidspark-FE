<template>
  <div class="col2_block_main">
    <form action="" class="form-edit">
      <div class="add-info">
        <table
          class="table_style_02 table_style_02--style5 table_style_02--white form-edit__table looksort_table--small"
        >
          <thead>
          <tr>
            <th>パスワード設定</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="looksort_table_info">パスワード</td>
            <td>
              <div class="flex-center">
                <input
                  type="password"
                  class="form-edit__input"
                  v-model="password"
                />
                <span class="looksort_table__character"
                >半角英数字 8文字以上</span
                >
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="add-info__control">
        <button class="form_part_btn01" @click.prevent="submit">保存する</button>
      </div>
    </form>
  </div>
</template>

<script>
import GuardianService from "@/services/admin/guardian/GuardianService";

export default {
  name: "ExeoTableSupporterPasswordEdit",
  data() {
    return {
      password: ''
    }
  },
  methods: {
    submit(){
      this.$emit('submit', this.password)
    }
  }
};
</script>

<style scoped></style>
