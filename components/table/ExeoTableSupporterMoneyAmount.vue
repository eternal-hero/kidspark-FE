<template>
  <div class="money-amount">
    <div class="money-amount__wp">
      <div class="money-amount__flex">
        <div class="money-amount__label">{{ moneyAmout.label }}</div>
        <div class="money-amount__price">{{ moneyAmout.price }}</div>
      </div>
      <div class="money-amount__btn">
        <a href="./P044.html">売り上げを見る</a>
      </div>
    </div>
    <p class="money-amount__note">{{ moneyAmout.timeNote }}</p>
  </div>
</template>

<script>
export default {
  name: "ExeoTableSupporterMoneyAmount",
  props: {
    moneyAmout: {
      type: Object,
      default: {
        label: '今月の売上見込み金額',
        price: '135,000円',
        timeNote: '最新累計　2022/09/06 02:23'
      }
    }
  }
}
</script>
