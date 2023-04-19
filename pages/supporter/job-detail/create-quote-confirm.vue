<template>
  <main id="page-P080-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a><span class="current">お仕事詳細(単発)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">お仕事詳細(単発)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <h2 class="c-ttl__02 mbsp-0">お見積もりを確認する</h2>
            <hr class="hr">
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="@/assets/supporter/img/common/icon-yen.svg" alt="事前見積もり金額" width="17"> 事前見積もり金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">9500円（0000円×5.0時間）</span></div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">オプション料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">2500円</span></div>
                  <div class="job-money__list-note"> 英語学習　+200円/1時間あたり<br>マッサージ　500円/1回あたり </div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">割引料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">-500円</span></div>
                  <div class="job-money__list-note"> 初回予約割引 </div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl"> 交通費 </div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">1080円</span></div>
                  <div class="job-money__list-note"> 【電車】　〇〇駅&#8646;〇〇駅　680円（往復）<br>【バス】　〇〇&#8646;〇〇　400円（往復） </div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl"> 手数料 <span>（保険料・消費税込み）</span>
                    <div class="statuschips tooltip">
                      <span></span>
                      <p class="tooltip__txt">
                        手数料には保険料と消費税が含まれます。<a href='https://www.kids-parks.com/faq/commission/42/' target='_blank'>手数料についてはこちら</a>
                      </p>
                    </div>
                  </div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">-1500円</span></div>
                </div>
                <div class="job-money__list-item job-money__list-item--price">
                  <div class="job-money__list-ttl">合計</div>
                  <div class="job-money__list-desc">
                    <span>7,500</span>円
                  </div>
                </div>
              </div>
            </div>
            <div class="c-control--submit">
              <a href="#" class="btn_back w100">もどる</a>
              <NuxtLink to="/supporter/job-detail/housework/estimate-create" class="btn_entry">送信する</NuxtLink>
            </div>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="1"></supporter-right-menu>
            <question-box :questions="questions"></question-box>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>

import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import QuestionBox from '~/components/block/QuestionBox.vue'

export default {
  components: { SupporterRightMenu, QuestionBox },
  layout: 'supporter',
  head() {
    return {
      title: 'お仕事詳細(単発)'
    }
  },
  data() {
    return {
      questions: [
        {
          'name': 'お見積りの作成方法',
          'url': 'https://www.kids-parks.com/faq/quotation/45/',
        },
        {
          'name': 'お仕事リクエストのお断り方法について',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': 'お仕事開始までの流れ',
          'url': 'https://www.kids-parks.com/faq/flow/50/',
        }
      ],
    }
  },
}
</script>
