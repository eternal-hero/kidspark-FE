<template>
  <div class="work-list__ct">
    <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
    <div class="work-list__meta">
      <div class="work-list__meta-name">佐藤　花子</div>
      <div class="work-list__meta-date">
        <span><img src="@/assets/supporter/img/common/icn-sitter_off.png" alt="単発" width="18">単発</span>
        <span><img src="@/assets/supporter/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemWork',
  props: {
    item: {
      type: Object,
      default () {
        return {
          name: '',
          date: '',
          address: '',
        }
      }
    },
  },
}
</script>
<style scoped>
</style>