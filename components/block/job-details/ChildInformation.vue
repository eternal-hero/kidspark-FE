<template>
  <div class="job-infor">
    <h3 class="job-infor__ttl"><img src="~/assets/supporter/img/common/icon-use.svg" :alt="label" width="17"> {{ label }}</h3>
    <div class="job-infor__list">
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">お名前</div>
        <div class="job-infor__list-desc"><span>単発予約・定期予約が<br class="sp">確定したら表示されます</span></div>
      </div>
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">愛称</div>
        <div class="job-infor__list-desc"><span>単発予約・定期予約が<br class="sp">確定したら表示されます</span></div>
      </div>
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">性別</div>
        <div class="job-infor__list-desc">女の子</div>
      </div>
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">年齢</div>
        <div class="job-infor__list-desc">3歳2ヶ月</div>
      </div>
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">アレルギー</div>
        <div class="job-infor__list-desc">なし</div>
      </div>
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">持病</div>
        <div class="job-infor__list-desc">なし</div>
      </div>
      <div class="job-infor__list-item job-infor__list-item--wrap">
        <div class="job-infor__list-ttl">その他/配慮事項</div>
        <div class="job-infor__list-desc">なんでも口に入れるので注意が必要です。</div>
      </div>
      <div class="job-infor__list-item job-infor__list-item--wrap">
        <div class="job-infor__list-ttl">お子様のお写真</div>
        <div class="job-infor__list-desc"><span>単発予約・定期予約が確定したら表示されます</span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildInformation",
  props: {
    label: {
      type: String,
      required: true
    },
  },
};
</script>

<style scoped>

</style>
