<template>
  <form action="method">
    <div class="request-form request-form--02 request-form--confirm">
      <div class="request-form__item">
        <div class="request-form__ttl"> 確認事項<span>※</span>
        </div>
        <div class="request-form__ct" v-html="confirmItem"></div>
      </div>
      <div class="request-form__item">
        <div class="request-form__ttl pt0"> キャンセル理由<span>※</span>
          <span class="disclosure">サポーターに開示されます</span>
        </div>
        <div class="request-form__ct" v-html="reasonCancel"></div>
      </div>
      <div class="request-form__item">
        <div class="request-form__ttl pt0"> 理由詳細<span>※</span>
          <span class="disclosure">サポーターに開示されます</span>
        </div>
        <div class="request-form__ct" v-html="reasonDetail"></div>
      </div>
    </div>
    <div class="request-note" v-html="reviewCancelNote"></div>
    <div class="c-control--submit">
      <a href="./U026.html" class="btn_back w100">もどる</a>
      <a href="./U026-3.html" class="btn_entry">キャンセルする</a>
    </div>
  </form>
</template>

<script>
export default {
  name: "ExeoTableGuardianPreviewCancelForm",
  props: {
    confirmItem: {
      type: String
    },
    reasonCancel: {
      type: String
    },
    reasonDetail: {
      type: String
    },
    reviewCancelNote: {
      type: String,
    }
  }
}
</script>
