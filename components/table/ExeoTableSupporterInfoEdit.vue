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
          <th>基本情報</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="looksort_table_info">名前</td>
          <td>
            <div class="form-edit__group">
              <ExeoForm
                class="form-edit__input form-edit__input-name"
                v-model="form.last_name"
                placeholder="(例)鈴木"
              />
              <ExeoForm
                class="form-edit__input form-edit__input-name"
                v-model="form.first_name"
                placeholder="(例)花子"
              />
            </div>
          </td>
        </tr>

        <tr>
          <td class="looksort_table_info">ふりがな</td>
          <td>
            <div class="form-edit__group">
              <ExeoForm
                class="form-edit__input form-edit__input-name"
                v-model="form.last_kana"
                placeholder="(例)すずき"
              />
              <ExeoForm
                class="form-edit__input form-edit__input-name"
                v-model="form.first_kana"
                placeholder="(例)はなこ"
              />
            </div>
          </td>
        </tr>
        <tr>
          <td class="looksort_table_info">性別</td>
          <td>
            <ExeoRadio
              name="supporter-gender"
              :options="$GENDER"
              v-model="form.gender"
            />
          </td>
        </tr>
        <tr>
          <td class="looksort_table_info">生年月日</td>
          <td>
            <label class="form_part_date">
              <input
                type="date"
                v-model="form.birthday"
                class="form_part_date_input.focus"
              />
            </label>
          </td>
        </tr>
        <tr>
          <td class="looksort_table_info">郵便番号</td>
          <td>
            <ExeoForm
              class="form-edit__input"
              v-model="form.post_code"
              placeholder="(例)2200000"
            />
          </td>
        </tr>
        <tr>
          <td class="looksort_table_info">都道府県</td>
          <td>
            <div class="form-narrow__select form_part_select">
              <ExeoSelect
                :isLabel="'1'"
                :options="$PREFECTURES"
                name="supporter-prefecture"
                v-model="form.prefecture"
              >
                <option value="">選択してください</option>
              </ExeoSelect>
            </div>
          </td>
        </tr>
        <tr>
          <td class="looksort_table_info">市区町村</td>
          <td>
            <ExeoForm
              class="form-edit__input"
              v-model="form.municipality"
              placeholder="(例)横浜市西区みなとみらい"
            />
          </td>
        </tr>
        <tr>
          <td class="looksort_table_info">丁目・番地・号</td>
          <td>
            <ExeoForm
              class="form-edit__input"
              v-model="form.street_name"
              placeholder="(例)1-2-3"
            />
          </td>
        </tr>
        <tr>
          <td class="looksort_table_info">建物名</td>
          <td>
            <ExeoForm
              class="form-edit__input"
              v-model="form.building"
              placeholder="(例)キッズパークビル 202号室"
            />
          </td>
        </tr>
        <tr>
          <td class="looksort_table_info">電話番号</td>
          <td>
            <ExeoForm
              class="form-edit__input"
              v-model="form.phone_number"
              placeholder="(例)09012345678"
            />
          </td>
        </tr>
        <tr>
          <td class="looksort_table_info">メールアドレス</td>
          <td>
            <ExeoForm
              class="form-edit__input"
              v-model="form.mail_address"
              placeholder="(例)mail@sample.jp"
            />
          </td>
        </tr>
        </tbody>
      </table>
      <div class="add-form__control add-form__control--styles02">
        <button
          class="btn_style_04"
          @click.prevent="submit"
        >
          保存する
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import ExeoSelect from "../action/ExeoSelect.vue";
import ExeoRadio from "~/components/action/ExeoRadio.vue";
import ExeoForm from "../form/ExeoForm.vue";

export default {
  name: "ExeoTableSupporterInfoEdit",
  components: {ExeoSelect, ExeoRadio, ExeoForm},
  props: {
    supporter: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: {}
    };
  },
  methods: {
    submit() {
      this.$emit('submit', this.form);
    }
  },
  created() {
    this.form = this.supporter;
  }
};
</script>
