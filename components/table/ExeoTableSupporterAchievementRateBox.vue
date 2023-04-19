<template>
  <div class="achievement-block__r">
    <div class="achievement-block__num">
      <span>{{ averageRate.averageNumber }}</span>
      <small>レビュー総数<br>{{ averageRate.totalViewer }}件</small>
    </div>
    <div class="achievement-block__star c-txt__03">
      <div v-for="rate in rateList" class="user-heading user-heading--04">
        <div class="user-status">
          <div class="user-status__star">
            <span class="user-status__star-icn" :data-rate="rate.starRateNum"></span>
          </div>
        </div>
        <div class="user-status user-status--02">
          <div class="user-status__star">
            <span class="user-status__star-icn" :data-rate="rate.starRatePer"></span>
          </div>
        </div>
        <div class="user-txt">{{ rate.numberRate }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoTableSupporterAchievementRateBox",
  props: {
    averageRate: {
      type: Object,
      default: {
        averageNumber: '3.5',
        totalViewer: '275'
      }
    },
    rateList: {
      type: Object,
      default: [
        {starRateNum: '5', starRatePer: '1', numberRate: '250件'},
        {starRateNum: '4', starRatePer: '1.5', numberRate: '20件'},
        {starRateNum: '3', starRatePer: '2.5', numberRate: '5件'},
        {starRateNum: '2', starRatePer: '0', numberRate: ''},
        {starRateNum: '1', starRatePer: '0', numberRate: ''},
      ]
    },
  }
}
</script>
