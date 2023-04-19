<template>
  <div>
    <main id="page-P007" class="wrapper">
      <div class="breadcrumb">
        <div class="inner">
          <a href="../">マイページ</a><span class="current">メッセージ</span>
        </div>
      </div>
      <div class="main-content">
        <div class="inner">
          <h2 class="c-ttl__01">メッセージ</h2>
          <div class="l-content l-content--styles02">
            <div class="l-content__body">
              <div data-tabs="">
                <div class="m-tabs">
                  <div class="m-tabs__item"><NuxtLink to="/supporter/message">メッセージ</NuxtLink></div>
                  <div class="m-tabs__item is-active"><NuxtLink to="/supporter/message/job-request">お仕事依頼メッセージ</NuxtLink></div>
                </div>
                <div class="m-tabs__content-content">
                  <div class="m-tabs__content-item" data-tab-content="message"></div>
                </div>
                <div class="m-tabs__content-item is-active" data-tab-content="job-message">
                  <ul class="message-list content-load-more">
                    <li class="message-list__item" v-for="(item, index) in messages" :key="index">
                      <item-message :item="item" url="/"></item-message>
                    </li>
                  </ul>
                  <div class="c-al--c"><a href="" class="btn_more js-load-more">もっとみる</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import ItemMessage from '~/components/block/ItemMessage.vue'
import { loadMoreMixin } from '~/mixins/loadMoreMixin'

export default {
  layout: 'supporter',
  components: {ItemMessage},
  mixins: [loadMoreMixin],
  head() {
    return {
      title: 'メッセージ'
    }
  },
  data() {
    return {
      messages: [
        {id: 1, name: '名前　名前', date: '2022年8月19日(金) 11:00', desc: "この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…", qty: 1},
        {id: 2, name: '名前　名前', date: '2022年8月19日(金) 11:00', desc: "この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…", qty: 0},
        {id: 3, name: '名前　名前', date: '2022年8月19日(金) 11:00', desc: "この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…", qty: 0},
        {id: 4, name: '名前　名前', date: '2022年8月19日(金) 11:00', desc: "この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…", qty: 0},
        {id: 5, name: '名前　名前', date: '2022年8月19日(金) 11:00', desc: "この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…", qty: 0},
        {id: 6, name: '名前　名前', date: '2022年8月19日(金) 11:00', desc: "この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…", qty: 0},
        {id: 7, name: '名前　名前', date: '2022年8月19日(金) 11:00', desc: "この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…", qty: 0},
        {id: 8, name: '名前　名前', date: '2022年8月19日(金) 11:00', desc: "この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…", qty: 0},
        {id: 9, name: '名前　名前', date: '2022年8月19日(金) 11:00', desc: "この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…", qty: 0},
        {id: 10, name: '名前　名前', date: '2022年8月19日(金) 11:00', desc: "この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…", qty: 0},
        {id: 11, name: '名前　名前', date: '2022年8月19日(金) 11:00', desc: "この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…", qty: 0},
        {id: 12, name: '名前　名前', date: '2022年8月19日(金) 11:00', desc: "この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…", qty: 0},
        {id: 13, name: '名前　名前', date: '2022年8月19日(金) 11:00', desc: "この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…", qty: 0},
      ],
    }
  },
  mounted () {
    this.initLoadMore();
  }
}
</script>