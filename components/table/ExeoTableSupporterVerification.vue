<template>
  <div class="tableblock_scroll">
    <table class="table_style_02 table_style_02--style11 looksort_table">
      <thead>
        <tr>
          <th>ファイルID</th>
          <th>送信者</th>
          <th>会員ID</th>
          <th>カテゴリー</th>
          <th>名称</th>
          <th>申請日時</th>
          <th>ステータス</th>
          <th>メモ</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="document in application_documents" :key="document.id">
          <td class="looksort_table_id">{{document.id.toString().padStart(7, '0')}}</td>
          <td class="looksort_table_user"><NuxtLink :to="user_path.replace(':supporter_user_id:', document.supporter_user.id)">{{ document.supporter_user.first_name }} {{ document.supporter_user.last_name }}<br>{{document.supporter_user.first_kana }} {{ document.supporter_user.last_kana }}</NuxtLink></td>
          <td class="looksort_table_id">{{document.supporter_user.id.toString().padStart(7, '0')}}</td>
          <td class="looksort_table_type">{{$VERITIFY_TYPE_SHOW[document.category]}}</td>
          <td class="looksort_table_name">{{applicationName(document)}}</td>
          <td class="looksort_table_start">{{$moment(document.request_at).format('YYYY/MM/DD hh:mm')}}</td>
          <td class="looksort_table_status">
            <span v-if="document.status == 0" class="statusicn statusicn--04 statusicn_confirmation">{{ $VERITIFY_STATUS_SHOW[0] }}</span>
            <span v-if="document.status == 1" class="statusicn statusicn--04 statusicn_completion">{{ $VERITIFY_STATUS_SHOW[1] }}</span>
            <span v-if="document.status == 2" class="statusicn statusicn--04 statusicn_expiration">{{ $VERITIFY_STATUS_SHOW[2] }}</span>
            <span v-if="document.status == 3" class="statusicn statusicn--04 statusicn_expiration">{{ $VERITIFY_STATUS_SHOW[3] }}</span>
          </td>
          <td class="looksort_table_memo">{{document.memo}}</td>
          <td><NuxtLink :to="detail_path.replace(':supporter_id:',document.supporter_user.id).replace(':application_id:',document.id)" class="btn_style_02 decoration-none">詳細</NuxtLink></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Web from '~/const/web.js'

export default {
    props: {
      application_documents: Array
      },
    data() {
        return {
            user_path: Web.SUPPORTER_INFO_WEB,
            detail_path: Web.VERIFY_SUPPORTER_DETAIL_WEB
        }
    },
    methods: {
      applicationName(document) {
          switch(document.category) {
                case 1: return this.$ADMIN_SUPPORTER_APPLICATION_SITTER_LICENSE_SHOW[document.application_type];
                case 2: return this.$ADMIN_SUPPORTER_APPLICATION_INFANT_CARE_LICENSE_SHOW[document.application_type];
                case 3: 
                    if (document.application_type == 6) {
                        return document.application_name
                    } else {
                        return this.$ADMIN_SUPPORTER_APPLICATION_OTHER_LICENSE_SHOW[document.application_type];
                    }
                case 4: 
                    if (document.application_type == 11) {
                        return document.application_name
                    } else {
                        return this.$ADMIN_SUPPORTER_APPLICATION_HOUSEKEEPER_LICENSE_SHOW[document.application_type];
                    }
            }
      }
    }
}
</script>
