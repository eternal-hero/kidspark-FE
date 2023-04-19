<template>
  <div class="col2_block_main">
    <div class="achievements-block f-jc-space-between">
      <modal-m014 @submit="modalSubmit"></modal-m014>
      <button class="form_part_btn01" onclick="">新規登録</button>
    </div>
    <div class="tableblock_scroll">
      <table class="table_style_02 table_style_02--style3">
        <thead>
        <tr>
          <th>ファイルID</th>
          <th>名称</th>
          <th>ファイル名</th>
          <th>申請日時</th>
          <th>有効期限</th>
          <th>ステータス</th>
          <th>メモ</th>
          <th></th>
        </tr>
        </thead>
        <tbody v-for="application in identityApplications">
        <tr>
          <td class="looksort_table_id">{{ application.id }}</td>
          <td class="looksort_table_user">{{ $APPLICATION_TYPES.find(x => x.value === application.title).label }}</td>
          <td class="looksort_table_file">{{ application.additional_file_path }}</td>
          <td class="looksort_table_start">{{ formatDatetime(application.request_at) }}</td>
          <td class="looksort_table_end">
            {{ application.expiration_on ? formatDate(application.expiration_on) : 'ー' }}
          </td>
          <td class="looksort_table_type">
            <template v-if="application.status === 0">
              <span class="statusicn statusicn--02 statusicn_confirmation">未対応</span>
            </template>
            <template v-else-if="application.status === 1">
              <span class="statusicn statusicn--02 statusicn_completion">有効</span>
            </template>
            <template v-else>
              <span class="btn_style_02">無効</span>
            </template>
          </td>
          <td class="looksort_table_memo">{{ application.memo }}</td>
          <td class="looksort_table_status">
            <span class="btn_style_02"><nuxt-link
              :to="`${application.id}`">詳細</nuxt-link></span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="flex-box">
      <exeo-pagenation></exeo-pagenation>
    </div>
  </div>
</template>

<script>
import { datetimeMixin } from "@/mixins/datetimeMixin";

export default {
  name: "ExeoTableGuardianIdentityApplication",
  components: {},
  mixins: [datetimeMixin],
  props: {
    identityApplications: {
      type: Array,
      required: true
    }
  },
  methods: {
    modalSubmit(modalData) {
      this.$emit('modal-submit', modalData);
    }
  }
}
</script>

<style scoped>

</style>
