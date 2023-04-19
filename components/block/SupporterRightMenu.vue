<template>
  <div>
    <!--profile avatar-->
    <div class="use-box">
      <div class="use-box__avatar">
        <img src="@/assets/supporter/img/common/img_use_gray.png" alt="木村　花子" width="60">
      </div>
      <div class="use-box__ct">
        <div class="use-box__ttl">
          <a href="./P023.html">{{ userName }}</a>
        </div>
        <div class="use-box__address"><img src="@/assets/supporter/img/common/icn_gps.svg" alt="東京都千代田区" width="11">
          <div class="use-box__address-desc">{{ userAddress }}</div>
        </div>
      </div>
    </div>

    <!--main sidebar menu-->
    <div class="use-sidebar-main">
      <div v-if="useUserInfo" :class="useStep ? 'use-info' : 'use-info mbpc-0 mbsp-0'">
        <dl class="use-info__item">
          <dt class="use-info__ttl">お仕事ID</dt>
          <dd class="use-info__desc">0000000</dd>
        </dl>
        <dl class="use-info__item">
          <dt class="use-info__ttl">合計金額</dt>
          <dd class="use-info__desc">7,500円</dd>
        </dl>
        <dl class="use-info__item">
          <dt class="use-info__ttl">開始</dt>
          <dd class="use-info__desc"><span>2022年07月20日(水) 12:00</span></dd>
        </dl>
        <dl class="use-info__item">
          <dt class="use-info__ttl">終了</dt>
          <dd class="use-info__desc"><span>2022年07月20日(水) 15:00</span></dd>
        </dl>
        <dl class="use-info__item">
          <dt class="use-info__ttl">最寄り駅</dt>
          <dd class="use-info__desc"><img src="@/assets/supporter/img/common/icn_gps.svg" alt="最寄り駅" width="11"><span>山手線 秋葉原駅</span></dd>
        </dl>
        <dl :class="useStep ? 'use-info__item' : 'use-info__item mbpc-0 mbsp-0'">
          <dt class="use-info__ttl">お子様</dt>
          <dd class="use-info__desc"><span>女の子（3歳2ヶ月）</span></dd>
        </dl>
      </div>
      <ol v-if="useStep" class="use-step">
        <li class="use-step__item" :class="{'active': stepActive == index + 1}" v-for="(step, index) in steps">
          <div class="use-step__number" v-if="step.number !== ''" v-text="step.number"></div>
          <div class="use-step__number" v-else>
            <img v-if="stepActive != endStep" src="@/assets/supporter/img/common/icon-like.svg" alt="icon" width="16">
            <img v-else src="@/assets/supporter/img/common/icon-likewhite.svg" alt="icon" width="16">
          </div>
          <div class="use-step__ttl" v-text="step.message"></div>
        </li>

      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupporterRightMenu",
  props: {
    useStep: {
      type: Boolean,
      default: true
    },
    useUserInfo: {
      type: Boolean,
      default: true
    },
    stepActive: {
      type: String,
      required: false
    },
    steps: {
      type: Array,
      default() {
        return [
          {number: '01', message: 'お見積もりを提示する'},
          {number: '02', message: 'お見積もり確認待ち'},
          {number: '03', message: 'お仕事開始待ち'},
          {number: '04', message: 'お仕事中'},
          {number: '05', message: '完了レポートを提出する'},
          {number: '06', message: 'レビュー・お支払い待ち'},
          {number: '', message: 'お疲れ様でした！'},
        ];
      }
    },
    userName: {
      type: String,
      default: '木村　花子'
    },
    userAvatar: {
      type: String,
      default: '/assets/supporter/img/common/img_use_gray.png'
    },
    userAddress: {
      type: String,
      default: '東京都千代田区'
    },
    endStep: {
      type: Number,
      default: 7
    },
  },
}
</script>
<style scoped>
</style>
