<template>
  <ul class="request-month__dashboard">
    <li v-for="request in listRequest" class="request-month__dashboard-item">
      <span class="request-month__dashboard-ttl">{{ request.title }}</span>
      <div class="request-month__dashboard-icn">
        <img src="" alt="" width="42">
      </div>
      <div class="request-month__dashboard-number">
        <span>{{ request.number }}</span>件
      </div>
      <a href="" class="request-month__dashboard-link">すべて見る</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ExeoTableSupporterRequestMonthDasboard",
  props: {
    listRequest: {
      type: Object,
      default: [
        {title: '単発依頼', img: '', number: '20', link: ''},
        {title: '定期依頼', img: '', number: '20', link: ''},
        {title: '応募依頼', img: '', number: '0', link: ''}
      ]
    }
  }
}
</script>

<style scoped>

</style>
