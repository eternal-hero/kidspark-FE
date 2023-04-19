<template>
  <main id="page-P085-2" class="wrapper">
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
            <h2 class="c-ttl__02">完了レポートを確認して、<br class="sp">送信をクリックする</h2>
            <hr class="hr mbpc-33">
            <div class="job-infor">
              <h3 class="job-infor__ttl">サポート時間</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">開始</div>
                  <div class="job-infor__list-desc job-infor__list-desc--pl">2022年07月20日(水) 12:00</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">終了</div>
                  <div class="job-infor__list-desc job-infor__list-desc--pl">2022年07月20日(水) 15:00</div>
                </div>
              </div>
            </div>
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="~/assets/supporter/img/common/icon-yen.svg" alt="最終受取金額" width="17">最終受取金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">4500円</span>（1500円×3.0時間）</div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">延長料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">1500円</span>（45分×20%）</div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">オプション料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">2500円</span></div>
                  <div class="job-money__list-note"> お庭の手入れ　+1000円/1回あたり<br> 買い物代行　+1000円/1回あたり </div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">割引料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">-500円</span></div>
                  <div class="job-money__list-note"> 初回予約割引　-500円/1回あたり </div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">交通費</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">1280円</span></div>
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
                  <div class="job-money__list-desc"><span class="c-fw--bd">-1500円</span></div>
                </div>
                <div class="job-money__list-item job-money__list-item--price">
                  <div class="job-money__list-ttl">合計</div>
                  <div class="job-money__list-desc">
                    <span>7,700</span>円
                  </div>
                </div>
              </div>
            </div>
            <report-today />
            <div class="job-infor mbsp-20">
              <h3 class="job-infor__ttl">ユーザーへのレビュー</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item job-infor__list-item--start">
                  <div class="job-infor__list-ttl job-infor__list-ttl--smallw">アイコン</div>
                  <div class="job-infor__list-desc job-infor__list-desc--smallw">
                    <ul class="use-list">
                      <li class="use-list__item mbpc-0 mbsp-0">
                        <img src="~/assets/supporter/img/p018/use-01.png" alt="use" width="40">
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--start">
                  <div class="job-infor__list-ttl job-infor__list-ttl--smallw">満足度</div>
                  <div class="job-infor__list-desc job-infor__list-desc--imgsp job-infor__list-desc--smallw">
                    <div class="user-status__star">
                      <span class="user-status__star-icn" data-rate="5"></span>
                    </div>
                  </div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl job-infor__list-ttl--smallw">レビュー本文</div>
                  <div class="job-infor__list-desc job-infor__list-desc--smallw"> 本日は初めてのご依頼ありがとうございました。<br> おこさまはとても元気でかわいい女の子で、またお会いできるのを楽しみにしています。 </div>
                </div>
              </div>
            </div>
            <div class="request-note"> 本日のご報告、ユーザーへのレビューは送信後変更ができませんのでご注意ください。サポート時間や料金に関しては、ユーザー側からお支払いの前に「差し戻し」があった場合のみ修正が可能です。送信後間違いを発見した場合は、メッセージにてユーザーへ変更したい旨をお伝えし、差し戻しをおこなっていただくようにお願いしてください。 </div>
            <div class="c-control--submit">
              <a href="#" class="btn_back w100">もどる</a>
              <a href="./P018-3.html" class="btn_entry">送信する</a>
            </div>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="5" />
            <div class="questions-box">
              <h3 class="questions-box__ttl">
                <img src="~/assets/supporter/img/common/questions-icon.svg" alt="icon" width="26"> よくある質問
              </h3>
              <ul class="questions-box__list">
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/report/65/" target="_blank">完了レポートの書き方</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/reward/69/" target="_blank">報酬のお支払いについて</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/trouble/71/" target="_blank">保護者が予定時間より早く帰ってきた場合</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/review/73/" target="_blank">ユーザーへのレビューについて</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>

import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import ReportToday from "@/components/block/job-details/ReportToday.vue";

export default {
  layout: 'supporter',
  components: {
    ReportToday,
    SupporterRightMenu,
  },
  head() {
    return {
      title: 'お仕事詳細(単発)'
    }
  },
}
</script>
