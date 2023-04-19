<template>
  <div class="col2_block_main">
    <form action="" class="form-edit">
      <div class="add-info">
        <table class="table_style_02 table_style_02--style5 table_style_02--white looksort_table--small">
          <thead>
          <tr>
            <th> 本人確認の詳細 </th>
            <th>
              <div class="looksort_table__right">
                <div class="statuschips js-tooltip" data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>"><span>本人確認・資格証明について</span></div>
              </div>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="looksort_table_info">ファイルID</td>
            <td> {{ identityApplication.id }} </td>
          </tr>
          <tr>
            <td class="looksort_table_info">ステータス</td>
            <td>
              <template v-if="identityApplication.status === 0">
                <span class="statusicn statusicn--02 statusicn_confirmation">未対応</span>
              </template>
              <template v-else-if="identityApplication.status === 1">
                <span class="statusicn statusicn--02 statusicn_completion">有効</span>
              </template>
              <template v-else>
                <span class="btn_style_02">無効</span>
              </template>
            </td>
          </tr>
          <tr>
            <td class="looksort_table_info">メモ</td>
            <td>
              <div class="looksort_table__txt" v-html="identityApplication.memo"></div>
              <span class="looksort_table__note">※メモはパークサポーターには公開されません。</span>
            </td>
          </tr>
          <tr>
            <td class="looksort_table_info">名称</td>
            <td> {{ $APPLICATION_TYPES.find(x => x.value === identityApplication.title).label }} </td>
          </tr>
          <tr>
            <td class="looksort_table_info">申請日時</td>
            <td> {{ formatDatetime(identityApplication.request_at) }} </td>
          </tr>
          <tr>
            <td class="looksort_table_info">有効期限</td>
            <td> {{ identityApplication.expiration_on ? formatDate(identityApplication.expiration_on) : 'ー' }} </td>
          </tr>
          <tr>
            <td class="looksort_table_info vertical-top">ファイル</td>
            <td class="border-0">
              <div class="flex-img">
                <div class="flex-img__item" v-for="image in identityApplication.files">
                  <a :href="image.file_path" target="_blank">
                    <img :src="image.file_path" alt="ファイル"></a>
                  <p>クリックで拡大</p>
                </div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>

<script>
import { datetimeMixin } from "@/mixins/datetimeMixin";

export default {
  name: "ExeoTableGuardianIdentityApplicationShow",
  mixins: [datetimeMixin],
  props: {
    identityApplication: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
