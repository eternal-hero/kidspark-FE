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
          <a href="/T002.html">
            {{ application.supporter_user.first_name }}　{{application.supporter_user.last_name }}
            <br/>
            {{ application.supporter_user.first_kana }}　{{ application.supporter_user.last_kana }}
          </a>
        </td>
        <td class="looksort_table_id">{{ application.member_id }}</td>
        <td class="looksort_table_name">
          {{ $SUPPORTER_REQUEST_APPLICATION_TYPES.find(x => x.value === application.subject)?.label }}
        </td>
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
          <a href="/T026.html" class="btn_style_02 decoration-none">詳細</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {datetimeMixin} from "@/mixins/datetimeMixin";

export default {
  name: "SupporterRequestApplicationsTable",
  props: {
    applications: {
      type: Array,
      required: true
    }
  },
  mixins: [datetimeMixin],
}
</script>

<style scoped>

</style>
