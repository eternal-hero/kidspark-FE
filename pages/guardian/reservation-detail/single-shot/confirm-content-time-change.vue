<template>
  <main id="page-U025-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細（単発）</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細（単発）</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <h2 class="c-ttl__02">時間変更の内容を確認してください</h2>
            <hr class="hr mbpc-33">
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="@/assets/guardian/img/common/icon-yen.svg" alt="" width="17">事前見積もり金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc">9500円（0000円×5.0時間）</div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">オプション料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">2500円</span></div>
                  <div class="job-money__list-note"> 英語学習　+500円/1時間あたり<br> マッサージ　500円/1回あたり </div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl"> 割引料金 </div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">-500円</span></div>
                  <div class="job-money__list-note"> 初回予約割引　-500円/1回あたり </div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl"> 交通費 </div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">1080円</span></div>
                  <div class="job-money__list-note"> 【電車】　〇〇駅&#8646;〇〇駅　680円（往復）<br> 【バス】　〇〇&#8646;〇〇　400円（往復） </div>
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
                  <div class="job-money__list-desc"><span class="c-fw--bd">1500円</span></div>
                </div>
                <div class="job-money__list-item job-money__list-item--price">
                  <div class="job-money__list-ttl">合計</div>
                  <div class="job-money__list-desc">
                    <span>14,080</span>円
                  </div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">時間変更<small class="required">※</small></div>
                  <div class="job-infor__list-desc">
                    開始時間：12:00 <br>
                    終了時間：16:00
                  </div>
                </div>
              </div>
            </div>
            <div class="quote-list__fee-form">
              <p class="c-txt__01">時間変更に伴い、オプションの利用時間が変わる場合は、サポート終了後の完了報告でサポーターに修正を依頼してください。サポーターの完了レポートでオプション料金に間違いがないか必ずご確認ください。
                時間変更のリクエストは、送信後の変更、取り消しは出来かねますのでご注意ください。</p>
            </div>

            <div class="c-control--submit">
              <a href="#" class="btn_back w100">もどる</a>
              <a href="#" class="btn_entry">時間変更を送信する</a>
            </div>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="4"></guardian-right-menu>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";

export default {
  components: {
    GuardianRightMenu,
  },
  layout: 'guardian',
}
</script>
