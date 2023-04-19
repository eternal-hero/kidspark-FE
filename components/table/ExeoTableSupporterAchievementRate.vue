<template>
  <div class="achievement-block">
    <div class="achievement-block__l">
      <div class="user-heading user-heading--03">
        <div class="user-heading__image"><img src="" class="u-img-of" alt=""></div>
        <div class="user-status">
          <div class="user-status__medal">
            <span class="user-status__medal--regular"></span>
          </div>
          <div class="user-status__star">
            <span class="user-status__star-icn" :data-rate="rateNumber"></span>
          </div>
        </div>
        <div class="c-example c-al--c">
          <div class="c-example__button"><a href="https://www.kids-parks.com/faq/rank/108/" target="_blank">ランクについて</a></div>
        </div>
      </div>
    </div>
    <ExeoTableSupporterAchievementRateBox></ExeoTableSupporterAchievementRateBox>
  </div>
</template>

<script>
import ExeoTableSupporterAchievementRateBox from "@/components/table/ExeoTableSupporterAchievementRateBox";
export default {
  name: "ExeoTableSupporterAchievementRate",
  components: {
    ExeoTableSupporterAchievementRateBox,
  },
  props: {
    rateNumber: {
      type: Number,
      default: 3.5
    }
  }
}
</script>
