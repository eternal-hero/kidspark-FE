<template>
  <div class="job-infor">
    <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icn_gps.svg" :alt="label" width="11"> {{ label }}</h3>
    <div class="job-infor__list">
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">住所</div>
        <div class="job-infor__list-desc">東京都千代田区<br class="sp">(以降は単発・定期予約が確定したら表示されます)</div>
      </div>
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">最寄駅</div>
        <div class="job-infor__list-desc">山手線 秋葉原駅</div>
      </div>
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">最寄り駅までの交通手段</div>
        <div class="job-infor__list-desc">徒歩</div>
      </div>
      <div class="job-infor__list-item">
        <div class="job-infor__list-ttl">最寄り駅までの所要時間</div>
        <div class="job-infor__list-desc">15分</div>
      </div>
      <div class="job-infor__list-item job-infor__list-item--wrap">
        <div class="job-infor__list-ttl">家までの行き方</div>
        <div class="job-infor__list-desc"><span>単発予約・定期予約が確定したら表示されます</span></div>
      </div>
      <div class="job-infor__list-item job-infor__list-item--wrap">
        <div class="job-infor__list-ttl">保育場所の写真</div>
        <div class="job-infor__list-desc">
          <img :src="imagePath" :alt="imageAlt">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupporterLocation",
  props: {
    label: {
      type: String,
      required: true
    },
    imagePath: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
  },
};
</script>

<style scoped>

</style>
