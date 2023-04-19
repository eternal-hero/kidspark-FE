<template>
  <div>
    <div class="use-box" v-if="useUserInfo">
      <div class="use-box__avatar">
        <img src="@/assets/guardian/img/U058/dammy-user.png" alt="木村　花子" width="60">
      </div>
      <div class="use-box__ct">
        <div class="use-box__ttl">
          <a href="./U058.html">佐藤　彩</a>
        </div>
        <div class="use-box__address"><img src="@/assets/guardian/img/common/icn_gps.svg" alt="東京都千代田区" width="11">
          <div class="use-box__address-desc">東京都千代田区</div>
        </div>
      </div>
    </div>
    <div class="use-sidebar-main">
      <div v-if="useUserInfo" :class="useStep ? 'use-info' : 'use-info mbpc-0 mbsp-0'">
        <dl class="use-info__item">
          <dt class="use-info__ttl">予約ID</dt>
          <dd class="use-info__desc">0000000</dd>
        </dl>
        <dl class="use-info__item">
          <dt class="use-info__ttl">合計金額</dt>
          <dd class="use-info__desc">{{totalAmount}}円</dd>
        </dl>
        <dl class="use-info__item">
          <dt class="use-info__ttl">開始</dt>
          <dd class="use-info__desc"><span>2022年07月20日(水) 12:00</span></dd>
        </dl>
        <dl class="use-info__item">
          <dt class="use-info__ttl">終了</dt>
          <dd class="use-info__desc"><span>{{stopTime}}</span></dd>
        </dl>
        <dl class="use-info__item">
          <dt class="use-info__ttl">最寄り駅</dt>
          <dd class="use-info__desc"><img src="@/assets/guardian/img/common/icn_gps.svg" alt="最寄り駅" width="11"><span>山手線 秋葉原駅</span></dd>
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
            <img v-if="stepActive != 8" src="@/assets/guardian/img/common/icon-like.svg" alt="icon" width="16">
            <img v-else src="@/assets/guardian/img/common/icon-likewhite.svg" alt="icon" width="16">
          </div>
          <div class="use-step__ttl" v-text="step.message"></div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: "GuardianRightMenu",
  props: {
    totalAmount:{
      type: String,
      default: '7,500'
    },
    stopTime:{
      type: String,
      default: '2022年07月20日(水) 15:00'
    },
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
          {number: '01', message: 'リクエストを作成する'},
          {number: '02', message: 'お見積もり待ち'},
          {number: '03', message: '見積もり承認・お支払い方法選択'},
          {number: '04', message: 'サポート開始待ち'},
          {number: '05', message: 'サポート中'},
          {number: '06', message: '完了レポート待ち'},
          {number: '07', message: 'レポートの承認・お支払い'},
          {number: '', message: 'ご利用ありがとうございました！'},
        ];
      }
    }
  },
}
</script>
<style scoped>
</style>
