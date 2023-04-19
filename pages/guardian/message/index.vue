<template>
  <main id="page-U004" class="wrapper">
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
              <message-tab></message-tab>
              <div class="m-tabs__content-content">
                <div class="m-tabs__content-item is-active" data-tab-content="message">
                  <ul class="message-list content-load-more">
                    <li class="message-list__item" v-for="(item, index) in messages" :key="index">
                      <item-message :item="item" url="/"></item-message>
                    </li>
                  </ul>
                  <div class="c-al--c"><a href="" class="btn_more js-load-more">もっとみる</a></div>
                </div>
                <div class="m-tabs__content-item" data-tab-content="job-message">
                  <p class="c-txt__01 c-al--c">未読</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import MessageTab from "@/components/guardian/MessageTab";
import { loadMoreMixin } from '~/mixins/loadMoreMixin';
import ItemMessage from "@/components/block/ItemMessage";

export default {
  layout: 'guardian',
  components: {
    ItemMessage,
    MessageTab,
  },
  mixins: [loadMoreMixin],
  head() {
    return {
      title: 'メッセージ'
    }
  },
  data() {
    return {
      messages: [
        {
          src: require('@/assets/guardian/img/common/img_use02.png'),
          name: '名前　名前',
          date: '2022年8月19日(金) 11:00',
          desc: 'この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…',
          qty: 2
        },
        {
          src: require('@/assets/guardian/img/common/img_use02.png'),
          name: '名前　名前',
          date: '2022年8月19日(金) 11:00',
          desc: 'この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…'
        },
        {
          src: require('@/assets/guardian/img/common/img_use02.png'),
          name: '名前　名前',
          date: '2022年8月19日(金) 11:00',
          desc: 'この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…'
        },
        {
          src: require('@/assets/guardian/img/common/img_use02.png'),
          name: '名前　名前',
          date: '2022年8月19日(金) 11:00',
          desc: 'この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…'
        },
        {
          src: require('@/assets/guardian/img/common/img_use02.png'),
          name: '名前　名前',
          date: '2022年8月19日(金) 11:00',
          desc: 'この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…'
        },
        {
          src: require('@/assets/guardian/img/common/img_use02.png'),
          name: '名前　名前',
          date: '2022年8月19日(金) 11:00',
          desc: 'この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…'
        },
        {
          src: require('@/assets/guardian/img/common/img_use02.png'),
          name: '名前　名前',
          date: '2022年8月19日(金) 11:00',
          desc: 'この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…'
        },
        {
          src: require('@/assets/guardian/img/common/img_use02.png'),
          name: '名前　名前',
          date: '2022年8月19日(金) 11:00',
          desc: 'この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…'
        },
        {
          src: require('@/assets/guardian/img/common/img_use02.png'),
          name: '名前　名前',
          date: '2022年8月19日(金) 11:00',
          desc: 'この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…'
        },
        {
          src: require('@/assets/guardian/img/common/img_use02.png'),
          name: '名前　名前',
          date: '2022年8月19日(金) 11:00',
          desc: 'この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…'
        },
        {
          src: require('@/assets/guardian/img/common/img_use02.png'),
          name: '名前　名前',
          date: '2022年8月19日(金) 11:00',
          desc: 'この文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーですこの文章はダミーです…'
        },
      ]
    }
  },

  mounted() {
    this.initLoadMore();
  }
}
</script>

<style>

</style>
