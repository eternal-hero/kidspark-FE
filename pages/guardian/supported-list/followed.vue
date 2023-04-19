<template>
  <main id="page-U008" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="./U008.html">パークサポーター一覧</a><span class="current">フォローしたパークサポーター</span>
      </div>
    </div>
    <section class="sec-myprofile">
      <div class="inner">
        <h1 class="c-ttl__01">パークサポーター一覧</h1>
        <div class="nav-scroll">
          <ul class="m-subnav">
            <li class="m-subnav__item is-active">
              <NuxtLink to="/guardian/supported-list/followed">フォローした<u class="smt-hidden">パーク</u>サポーター</NuxtLink>
            </li>
            <li class="m-subnav__item">
              <NuxtLink to="/guardian/supported-list/requested">依頼したことのある<u class="smt-hidden">パーク</u>サポーター</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="myprofile-box">
          <div class="c-al--c">
            <a href="https://www.kids-parks.com/search/babysitter/" class="btn_entry w375" tabindex="0" target="_blank">パークサポーターを検索する</a>
          </div>
          <supported-item-card :cards="cards"></supported-item-card>
        </div>
      </div>
    </section>
  </main>
</template>
<script>

import SupportedItemCard from '@/components/block/SupportedItemCard.vue'

export default {
  components: { SupportedItemCard },
  layout: 'guardian',
  data () {
    return {
      cards: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]
    }
  },
}
</script>
<style>
@import url('@/assets/guardian/css/supporter_card.css');
</style>