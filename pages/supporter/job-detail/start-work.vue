<template>
  <main id="page-P016" class="wrapper">
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
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">お仕事を開始しました。</h2>
              <p class="c-txt__01"> 安全に注意してサポートを開始してください。 </p>
            </div>
            <div class="list-btn sp">
              <div class="list-btn__item">
                <a href="./P017.html" class="btn_entry">お仕事終了を通知する</a>
              </div>
            </div>
            <supporter-job-menu :route-names="routeNames"></supporter-job-menu>
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="@/assets/supporter/img/common/icon-yen.svg" alt="事前見積もり金額" width="17"> 事前見積もり金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">9500円（1900円×5.0時間）</span></div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">オプション料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">2500円</span></div>
                  <div class="job-money__list-note"> 英語学習　+200円/1時間あたり<br>マッサージ　500円/1回あたり </div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">割引料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">-500円</span></div>
                  <div class="job-money__list-note"> 初回予約割引　-500円/1回あたり </div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl"> 交通費 </div>
                  <div class="job-money__list-desc">1080円</div>
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
            <supporter-information></supporter-information>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="4"></supporter-right-menu>
            <div class="list-btn">
              <div class="list-btn__item">
                <a href="./P017.html" class="btn_entry">お仕事終了を通知する</a>
              </div>
            </div>
            <question-box :questions="questions"></question-box>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import SupporterJobMenu from "@/components/block/SupporterJobMenu";
import QuestionBox from "@/components/block/QuestionBox";
import SupporterInformation from "@/components/block/SupporterInformation";
export default {
  layout: 'supporter',
  components: {
    QuestionBox,
    SupporterRightMenu,
    SupporterJobMenu,
    SupporterInformation
  },
  head() {
    return {
      title: 'お仕事詳細(単発)'
    }
  },
  data() {
    return {
      routeNames: [
        {
          name: '依頼メッセージ',
          routeName: '',
        },
        {
          name: '依頼詳細',
          routeName: 'supporter-job-detail-start-work',
        }
      ],
      questions: [
        {
          url: 'https://www.kids-parks.com/faq/report/65/',
          name: '完了レポートの書き方'
        },
        {
          url: 'https://www.kids-parks.com/faq/trouble-2/67/',
          name: 'サポート中の事故・トラブル'
        }
      ]
    };
  }
}
</script>
