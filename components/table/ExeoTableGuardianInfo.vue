<template>
  <div class="col2_block_main">
    <div class="tableblock_scroll tableblock_scroll--small">
      <table
        class="table_style_02 table_style_02--no-striped table_style_02--style5"
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
          <td>{{ fullName }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">ふりがな</td>
          <td>{{ fullNameKana }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">ニックネーム</td>
          <td>{{ guardian.nickname }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">性別</td>
          <td>
            {{ $GENDER.find((gender) => parseInt(gender.value) === parseInt(guardian.gender)).label }}
          </td>
        </tr>
        <tr>
          <td class="looksort_table_info">お子様との続柄</td>
          <td>{{ guardian.relation }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">生年月日</td>
          <td>{{ formatBirthday(guardian.birthday) }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">郵便番号</td>
          <td>{{ guardian.post_code }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">都道府県</td>
          <td>{{ guardian.prefecture }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">市区町村</td>
          <td>{{ guardian.municipality }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">丁目・番地・号</td>
          <td>{{ guardian.street_name }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">建物名</td>
          <td>{{ guardian.building }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">連絡先電話番号</td>
          <td>{{ guardian.contact_phone_number }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">メールアドレス</td>
          <td>{{ guardian.mail_address }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">勤務先</td>
          <td>{{ guardian.workspace }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">家族構成</td>
          <td>{{ guardian.family_structure }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">ペットの有無</td>
          <!--        <td>{{ $IS_PET[guardian.is_pets] }}</td>-->
          <td>
            {{ $IS_PET.find((x) => parseInt(x.value) === parseInt(guardian.is_pets)).label }}
          </td>
        </tr>
        <tr>
          <td class="looksort_table_info">住居形態</td>
          <td>{{ guardian.housing_type }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">カメラ設置</td>
          <td>
            {{ $IS_CAMERA.find((x) => parseInt(x.value) === parseInt(guardian.is_camera)).label }}
          </td>
        </tr>
        <tr>
          <td class="looksort_table_info">緊急連絡先の名前</td>
          <td>{{ guardian.emergency_contact_name }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">緊急連絡先の電話番号</td>
          <td>{{ guardian.emergency_contact_phone_number }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">登録者との関係</td>
          <td>{{ guardian.emergency_contact_relation }}</td>
        </tr>
        <tr>
          <td class="looksort_table_info">ユーザーID</td>
          <td>{{ guardian.id }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ExeoRadio from "../action/ExeoRadio.vue";
import ExeoForm from "../form/ExeoForm.vue";

export default {
  components: {
    ExeoRadio,
    ExeoForm,
  },
  props: {
    guardian: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    formatBirthday(val) {
      return this.$moment(val).format("YYYY年MM月DD日");
    },
  },
  computed: {
    fullNameKana() {
      return `${this.guardian.last_kana} ${this.guardian.first_kana}`;
    },
    fullName() {
      return `${this.guardian.last_name} ${this.guardian.first_name}`;
    },
  },
};
</script>
