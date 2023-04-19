<template>
  <div class="tableblock_scroll">
    <table class="table_style_02 table_style_02--style11 looksort_table">
      <thead>
        <tr>
          <th>ファイルID</th>
          <th>送信者</th>
          <th>会員ID</th>
          <th>名称</th>
          <th>申請日時</th>
          <th>ステータス</th>
          <th>メモ</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="verify in indentity_verifications" :key="verify.id">
          <td class="looksort_table_id">{{verify.id.toString().padStart( 7, '0')}}</td>
          <td class="looksort_table_user"><NuxtLink :to="user_path.replace(':guardian_id:', verify.guardian_user.id)">{{ verify.guardian_user.first_name }} {{ verify.guardian_user.last_name }}<br>{{verify.guardian_user.first_kana }} {{ verify.guardian_user.last_kana }}</NuxtLink></td>
          <td class="looksort_table_id">{{verify.guardian_user.id.toString().padStart( 7, '0')}}</td>
          <td class="looksort_table_type">{{$APPLICATION_TYPES_SHOW[verify.title]}}</td>
          <td class="looksort_table_start">{{$moment(verify.request_at).format('YYYY/MM/DD hh:mm')}}</td>
          <td class="looksort_table_status">
            <span v-if="verify.status == 0" class="statusicn statusicn--04 statusicn_confirmation">{{ $VERITIFY_STATUS_SHOW[0] }}</span>
            <span v-if="verify.status == 1" class="statusicn statusicn--04 statusicn_completion">{{ $VERITIFY_STATUS_SHOW[1] }}</span>
            <span v-if="verify.status == 2" class="statusicn statusicn--04 statusicn_expiration">{{ $VERITIFY_STATUS_SHOW[2] }}</span>
            <span v-if="verify.status == 3" class="statusicn statusicn--04 statusicn_expiration">{{ $VERITIFY_STATUS_SHOW[3] }}</span>
          </td>
          <td class="looksort_table_memo">{{verify.memo}}</td>
          <td><NuxtLink :to="detail_path.replace(':guardian_id:', verify.guardian_user.id).replace(':verification_id:', verify.id)" class="btn_style_02 decoration-none">詳細</NuxtLink></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Web from '~/const/web.js'

export default {
    props: {
      indentity_verifications: Array
      },
    data() {
        return {
            user_path: Web.GUARDIAN_INFO_WEB,
            detail_path: Web.VERIFY_GUARDIAN_DETAIL_WEB
        }
    },
}
</script>
