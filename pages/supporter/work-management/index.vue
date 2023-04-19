<template>
  <main id="page-P008" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><span class="current">お仕事管理</span>
      </div>
    </div>
    <section class="sec-work">
      <div class="inner">
        <h1 class="c-ttl__01">お仕事管理</h1>
        <div class="l-content pd-0--sp">
          <div class="l-content__body">
            <div class="work-date">
              <a href="" class="prev"></a>
              <div class="work-date__inr">
                <p><span class="work-date__num">2022年08月</span></p>
              </div>
              <a href="" class="next"></a>
            </div>
            <div data-tabs="">
              <div class="c-al--c">
                <div class="m-subnav--02 m-tabs--mb vw100-sp">
                  <div class="m-subnav__item" :class="{'is-active' : activeTab === 'tab1'}" data-tab="tab1"><a href="#tab1" @click="activeTab = 'tab1'">すべて</a></div>
                  <div class="m-subnav__item" :class="{'is-active' : activeTab === 'tab2'}" data-tab="tab2"><a href="#tab2" @click="activeTab = 'tab2'">単発予約</a></div>
                  <div class="m-subnav__item" :class="{'is-active' : activeTab === 'tab3'}" data-tab="tab3"><a href="#tab3" @click="activeTab = 'tab3'">定期予約</a></div>
                </div>
              </div>
              <div class="m-tabs__content-content">
                <div class="m-tabs__content-item" :class="activeTab === 'tab1' ? 'is-active' : '' " data-tab-content="tab1" id="tab1">
                  <div class="work-seach c-txt__01">
                    <button class="work-seach__ttl js-modal" data-modal="M0062"><img src="@/assets/supporter/img/p008/icon-bar.svg" alt="絞り込み" width="17">絞り込み
                    </button>
                    <ul class="work-seach__list">
                      <li class="work-seach__list-item">ベビーシッター</li>
                      <li class="work-seach__list-item">完了</li>
                    </ul>
                  </div>

                  <ul class="work-list c-txt__03 js-accordion02">
                    <li class="work-list__item" v-for="(item, index) in works" :key="index">
                      <a href="#" class="work-list__link">
                        <item-work :item="item"></item-work>
                        <div class="work-list__btn" :class="`${item.btnClass}`"><span>{{ item.btnName}}</span></div>
                      </a>
                    </li>
                  </ul>
                  <div class="c-al--c"><span class="btn_more js-btn-more02">もっとみる</span></div>
                </div>
                <div class="m-tabs__content-item" :class="activeTab === 'tab2' ? 'is-active' : '' " data-tab-content="tab2" id="tab2">
                  <div class="work-seach c-txt__01">
                    <button class="work-seach__ttl js-modal" data-modal="M0062"><img src="@/assets/supporter/img/p008/icon-bar.svg" alt="絞り込み" width="17">絞り込み
                    </button>
                    <ul class="work-seach__list">
                      <li class="work-seach__list-item">ベビーシッター</li>
                      <li class="work-seach__list-item">完了</li>
                    </ul>
                  </div>
                  <ul class="work-list c-txt__03">
                    <li class="work-list__item" v-for="(item, index) in works2" :key="index">
                      <a href="#" class="work-list__link">
                        <item-work :item="item"></item-work>
                        <div class="work-list__btn" :class="`${item.btnClass}`"><span>{{ item.btnName}}</span></div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="m-tabs__content-item" :class="activeTab === 'tab3' ? 'is-active' : '' " data-tab-content="tab3" id="tab3">
                  <div class="work-seach c-txt__01">
                    <button class="work-seach__ttl js-modal" data-modal="M0062"><img src="@/assets/supporter/img/p008/icon-bar.svg" alt="絞り込み" width="17">絞り込み
                    </button>
                    <ul class="work-seach__list">
                      <li class="work-seach__list-item">ベビーシッター</li>
                      <li class="work-seach__list-item">完了</li>
                    </ul>
                  </div>
                  <ul class="work-list c-txt__03">
                    <li class="work-list__item" v-for="(item, index) in works3" :key="index">
                      <a href="#" class="work-list__link">
                        <item-work :item="item"></item-work>
                        <div class="work-list__btn" :class="`${item.btnClass}`"><span>{{ item.btnName}}</span></div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <m0062></m0062>
  </main>
</template>
<script>

import M0062 from '~/components/modal/M0062.vue'
import ItemWork from '~/components/block/ItemWork.vue'

export default {
  layout: 'supporter',
  components: { ItemWork, M0062 },
  head() {
    return {
      title: 'お仕事管理'
    }
  },
  data () {
    return {
      activeTab: 'tab1',
      user: {
        name: '木村　花子',
        avatar: '',
        address: '東京都千代田区',
        rating: 3
      },
      works: [
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: '', btnName: 'リクエスト' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--black02', btnName: '完　了' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--black', btnName: 'キャンセル' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--red', btnName: '予約確定' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--green', btnName: 'レポート待ち' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--black02', btnName: '完　了' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--black', btnName: 'キャンセル' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--green', btnName: 'レポート待ち' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--red', btnName: '予約確定' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--red', btnName: '予約確定' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--red', btnName: '予約確定' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--red', btnName: '予約確定' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--red', btnName: '予約確定' },
      ],
      works2: [
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: '', btnName: 'リクエスト' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--black02', btnName: '完　了' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--black', btnName: 'キャンセル' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--red', btnName: '予約確定' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--green', btnName: 'レポート待ち' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--black02', btnName: '完　了' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--black', btnName: 'キャンセル' },
      ],
      works3: [
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: '', btnName: 'リクエスト' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--black02', btnName: '完　了' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--black', btnName: 'キャンセル' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--red', btnName: '予約確定' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--green', btnName: 'レポート待ち' },
        { name: '名前　名前', date: '2022年8月19日(金) 11:00', btnClass: 'work-list__btn--black02', btnName: '完　了' },
      ],
    }
  },
}
</script>