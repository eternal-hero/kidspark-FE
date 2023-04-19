<template>
  <div class="tableblock_scroll">
    <table class="table_style_02 table_style_02--style22 looksort_table">
      <thead>
      <tr>
        <th>申請ID</th>
        <th>送信者</th>
        <th>会員ID</th>
        <th>件名</th>
        <th>更新日時</th>
        <th>ステータス</th>
        <th>メモ</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="application in applications" :key="application.id">
        <td class="looksort_table_id">{{ application.id }}</td>
        <td class="looksort_table_user">
          <a href="/T028.html">
            {{ application.guardian.first_name }}　{{application.guardian.last_name }}
            <br/>
            {{ application.guardian.first_kana }}　{{ application.guardian.last_kana }}
          </a>
        </td>
        <td class="looksort_table_id">{{ application.member_id }}</td>
        <td class="looksort_table_name">{{ request_application_types.find(x => parseInt(x.value) === parseInt(application.subject))?.label }}</td>
        <td class="looksort_table_start">{{ formatDatetime(application.updated_at) }}</td>
        <td class="looksort_table_status" v-if="application.status === 0">
          <span class="statusicn statusicn--04 statusicn_confirmation">未対応</span>
        </td>
        <td class="looksort_table_status" v-if="application.status === 1">
          <span class="statusicn statusicn--04 statusicn_completion">対応済み</span>
        </td>
        <td class="looksort_table_status" v-if="application.status === 2">
          <span class="statusicn statusicn--04 statusicn_cancel">不受理</span>
        </td>
        <td class="looksort_table_memo">{{ application.memo }}</td>
        <td>
          <a href="/T041.html" class="btn_style_02 decoration-none"
          >詳細</a
          >
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {datetimeMixin} from "@/mixins/datetimeMixin";

export default {
  name: "GuardianRequestApplicationsTable",
  props: {
    applications: {
      type: Array,
      required: true
    }
  },
  mixins: [datetimeMixin],
  data() {
    return {
      request_application_types: [
        {value: 0, label: "住所変更申請"},
        {value: 1, label: "氏名変更申請"},
        {value: 2, label: "住所・氏名変更申請"},
        {value: 3, label: "保険申請"},
        {value: 4, label: "ポイント購入申請"},
        {value: 5, label: "退会申請"},
        {value: 6, label: "見守りカメラレンタル申請"},
        {value: 7, label: "内政府ベビーシッター割引券申請(法人)"}
      ]
    }
  }
}
</script>

<style scoped>

</style>
