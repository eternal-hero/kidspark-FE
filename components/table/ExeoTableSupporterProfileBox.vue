<template>
  <div class="sidebar-page">
    <div class="user-heading user-heading--02">
      <div class="user-heading__image"><img src="@/assets/supporter/img/common/img_use02.png" class="u-img-of" alt=""></div>
      <div class="user-heading__name">{{ name }}</div>
      <div class="c-address">
        <img src="@/assets/supporter/img/common/icn_gps.svg" alt="東京都千代田区" width="11">
        <div class="c-address__desc">{{ address }}</div>
      </div>
      <div class="user-status">
        <div class="user-status__star">
          <span class="user-status__star-icn" :data-rate="rate"></span>
        </div>
      </div>
    </div>
    <div class="sidebar-cumulative sidebar-cumulative--02">
      <div class="sidebar-cumulative__calculator">
        <dl class="sidebar-cumulative__calculator-item">
          <dt class="sidebar-cumulative__calculator-label">依頼回数</dt>
          <dd class="sidebar-cumulative__calculator-result"> {{ numberRequest }}回</dd>
        </dl>
        <dl class="sidebar-cumulative__calculator-item">
          <dt class="sidebar-cumulative__calculator-label">予約成立率</dt>
          <dd class="sidebar-cumulative__calculator-result">{{ BookingSuccess }}%</dd>
        </dl>
        <dl class="sidebar-cumulative__calculator-item">
          <dt class="sidebar-cumulative__calculator-label">返信率</dt>
          <dd class="sidebar-cumulative__calculator-result">{{ responseRate }}%</dd>
        </dl>
        <dl class="sidebar-cumulative__calculator-item">
          <dt class="sidebar-cumulative__calculator-label">直前キャンセル率</dt>
          <dd class="sidebar-cumulative__calculator-result">{{ cancellationRate }}%</dd>
        </dl>
      </div>
    </div>
    <div class="list-btn list-btn--02">
      <div class="list-btn__item">
        <a href="./P008.html" class="c-btn__04">このユーザーの依頼を見る</a>
      </div>
      <div class="list-btn__item">
        <a href="./P006.html" class="c-btn__04">このユーザーとのメッセージ</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ExeoTableSupporterProfileBox",
  props: {
    name: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    },
    rate: {
      type: Number,
      default: 0
    },
    numberRequest: {
      type: String,
      default: ''
    },
    BookingSuccess: {
      type: Number,
      default: 0
    },
    responseRate: {
      type: Number,
      default: 0
    },
    cancellationRate: {
      type: Number,
      default: 0
    }
  }
}
</script>
