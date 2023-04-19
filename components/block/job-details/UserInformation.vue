<template>
  <div class="job-infor">
    <h3 class="job-infor__ttl"><img src="~/assets/supporter/img/common/icon-use.svg" :alt="label" width="17"> {{ label }}</h3>
    <div class="job-infor__list">
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">お名前</div>
        <div class="job-infor__list-desc"><a href="./P023.html">木村　花子</a></div>
      </div>
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">ふりがな</div>
        <div class="job-infor__list-desc">きむら　はなこ</div>
      </div>
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">電話番号</div>
        <div class="job-infor__list-desc"><a class="tel" href="tel:07045623654">07045623654</a></div>
      </div>
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">緊急連絡先</div>
        <div class="job-infor__list-desc"><span>単発予約・定期予約が<br class="sp">確定したら表示されます</span></div>
      </div>
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">ペットの有無</div>
        <div class="job-infor__list-desc">無し</div>
      </div>
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">住居形態</div>
        <div class="job-infor__list-desc">マンション</div>
      </div>
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">カメラ設置</div>
        <div class="job-infor__list-desc">あり</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInformation",
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
