<template>
  <div class="col2_block_main">
    <table class="table_style_02 table_style_02--style5">
      <thead>
      <tr>
        <th>基本情報</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="looksort_table_info">名前</td>
        <td>{{ supporter.last_name }}　{{ supporter.first_name }}</td>
      </tr>
      <tr>
        <td class="looksort_table_info">ふりがな</td>
        <td>{{ supporter.last_kana }}　{{ supporter.first_kana }}</td>
      </tr>
      <tr>
        <td class="looksort_table_info">性別</td>
        <td>{{ supporter.gender === 0 ? "女性" : "男性" }}</td>
      </tr>
      <tr>
        <td class="looksort_table_info">生年月日</td>
        <td>{{ supporter.birthday }}</td>
      </tr>
      <tr>
        <td class="looksort_table_info">郵便番号</td>
        <td>{{ supporter.post_code }}</td>
      </tr>
      <tr>
        <td class="looksort_table_info">都道府県</td>
        <td>{{ supporter.prefecture }}</td>
      </tr>
      <tr>
        <td class="looksort_table_info">市区町村</td>
        <td>{{ supporter.municipality }}</td>
      </tr>
      <tr>
        <td class="looksort_table_info">丁目・番地・号</td>
        <td>{{ supporter.street_name }}</td>
      </tr>
      <tr>
        <td class="looksort_table_info">建物名</td>
        <td>{{ supporter.building }}</td>
      </tr>
      <tr>
        <td class="looksort_table_info">電話番号</td>
        <td>{{ supporter.phone_number }}</td>
      </tr>
      <tr>
        <td class="looksort_table_info">メールアドレス</td>
        <td>{{ supporter.mail_address }}</td>
      </tr>
      <tr>
        <td class="looksort_table_info">サポーターID</td>
        <td>{{ supporter.supporter_id }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ExeoTableSupporterInfoShow",
  props: {
    supporter: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
