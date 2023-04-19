<template>
  <div class="col2_block_main">
    <div class="flex-box f-jc-space-between">
      <modal-t023 @submit="submitModal"/>
      <a href="/T024-1.html" class="btn_style_04 decoration-none">新規作成</a>
    </div>
    <div class="tableblock_scroll">
      <table class="table_style_02 table_style_02--style6 looksort_table--small">
        <thead>
        <tr>
          <th>ファイルID</th>
          <th>カテゴリー</th>
          <th>名称</th>
          <th>ファイル名</th>
          <th>申請日時</th>
          <th>有効期限</th>
          <th>ステータス</th>
          <th>メモ</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(application, index) in applications" :key="index">
          <td class="looksort_table_id">{{ application.file_id }}</td>
          <td class="looksort_table_type">{{
              $IDENTITY_DOCUMENT_TYPES.find(x => x.value === application.category)?.label
            }}
          </td>
          <td class="looksort_table_user">{{ applicationName(application) }}</td>
          <td class="looksort_table_file">{{ application.file_path }}</td>
          <td class="looksort_table_start">{{ application.application_at }}</td>
          <td class="looksort_table_end">{{ formatDate(application.expiration_on) }}</td>
          <td class="looksort_table_status">
            <exeo-status-application :value="application.status"/>
          </td>
          <td>{{ application.memo }}</td>
          <td class="looksort_table_detail">
            <nuxt-link
              :to="{ name: 'admin-supporter-id-identity-applications-application_id-edit', params: { id: $route.params.id, application_id: application.id}}"
              class="btn_style_02 decoration-none">詳細
            </nuxt-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="flex-box f-jc-flex-start">
      <exeo-pagination :value="paginationData" @change-page="changePage"/>
    </div>
  </div>
</template>

<script>
import {datetimeMixin} from "@/mixins/datetimeMixin";
import ExeoStatus from "@/components/other/ExeoStatus.vue";
import ExeoStatusApplication from "@/components/other/ExeoStatusApplication";

export default {
  name: "SupporterIdentityApplicationsList",
  components: {
    ExeoStatusApplication,
    ExeoStatus
  },
  props: {
    applications: {
      type: Array,
      required: true,
    },
    paginationData: {
      type: Object,
      required: true
    }
  },
  mixins: [datetimeMixin],
  data() {
    return {
    };
  },
  methods: {
    submitModal(modalData) {
      this.$emit('submit-modal', modalData);
    },
    changePage(pageNumber){
      this.$emit('change-page', pageNumber);
    },
    applicationName(application) {
      console.log(application)
      switch(application.category) {
          case 0: return this.$APPLICATION_TYPES_SHOW[application.application_type];
          case 1: return this.$ADMIN_SUPPORTER_APPLICATION_SITTER_LICENSE_SHOW[application.application_type];
          case 2: return this.$ADMIN_SUPPORTER_APPLICATION_INFANT_CARE_LICENSE_SHOW[application.application_type];
          case 3:
              if (application.application_type == 6) {
                  return application.application_name
              } else {
                  return this.$ADMIN_SUPPORTER_APPLICATION_OTHER_LICENSE_SHOW[application.application_type];
              }
          case 4:
              if (application.application_type == 11) {
                  return application.application_name
              } else {
                  return this.$ADMIN_SUPPORTER_APPLICATION_HOUSEKEEPER_LICENSE_SHOW[application.application_type];
              }
      }
    },
  },
}
</script>

<style scoped>

</style>
