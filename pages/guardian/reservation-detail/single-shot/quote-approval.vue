<template>
  <main id="page-U063-2" class="wrapper">
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
            <h2 class="c-ttl__02">お支払い方法を選択してください。</h2>
            <hr class="hr mbpc-33">
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="~/assets/guardian/img/common/icon-yen.svg" alt="事前見積もり金額" width="17"> 事前見積もり金額</h3>
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
            <div class="quote-list">
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">お支払い方法</h3>
                <p class="c-txt__01">
                  お支払い方法は基本的にクレジットカード決済となります。<br>
                  <span class="c-txt__04">※クレジットカードエラーなどで一時的にカードが利用できない場合にはポイント支払いが可能です。</span><br>
                  定期予約の場合はクレジットカード決済のみとなります。<br>
                  お支払い方法はこのページで選択したものから変更はできませんでのご注意ください。
                </p>
              </div>
              <div class="quote-list__item quote-list__item--pay">
                <h3 class="quote-list__ttl">
                  <ul class="form-check form-check--radio form-check--full">
                    <li class="form-check__item">
                      <label class="form-edit__radio_02 js-check" data-id="form-edit__checkbox01">
                        <input type="radio" name="pay" class="checks" checked="checked" value="クレジットカード決済" required="">
                        <span class="checkmark"></span>クレジットカード決済 </label>
                    </li>
                  </ul>
                </h3>
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> クレジットカード </div>
                    <div class="quote-list__credit">
                      <p class="quote-list__credit-brand"><img src="~/assets/guardian/img/common/icon-visa.svg" alt="クレジット会社" width="35"></p>
                      <p class="quote-list__credit-card">楽天カード</p>
                      <p class="quote-list__credit-no">****1456</p>
                      <p class="c-txt__04"><a href="javascript:void(0);" class="c-fw--md js-modal" data-modal="M003">変更する</a></p>
                    </div>
                  </div>
                  <div class="quote-list__fee-note">保有ポイントの使用、自治体助成・福利厚生のご利用はお仕事完了後のお支払いページにて選択いただけます。</div>
                </div>

              </div>
              <div class="quote-list__item quote-list__item--pay">
                <h3 class="quote-list__ttl">
                  <ul class="form-check form-check--radio form-check--full">
                    <li class="form-check__item form-check__item--pt-not">
                      <div class="form-check__fee--point">
                        <label class="form-edit__radio_02 js-check" data-id="form-edit__checkbox01">
                          <input type="radio" name="pay" class="checks" disabled value="ポイント支払い" required="">
                          <span class="checkmark"></span>ポイント支払い</label>
                      </div>
                      <div class="quote-list__fee-note">予約日まで5日以内のためポイント支払いはご利用いただけません。</div>
                    </li>
                  </ul>
                </h3>
              </div>
            </div>
            <a href="./U022-4.html" class="btn_entry mw-335">確認ページへ</a>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="3" />
            <div class="questions-box">
              <h3 class="questions-box__ttl">
                <img src="~/assets/guardian/img/common/questions-icon.svg" alt="icon" width="26"> よくある質問
              </h3>
              <ul class="questions-box__list">
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/request-2/180/" target="_blank">予約リクエストの内容変更、依頼取り消しについて</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/reserve/193/" target="_blank">見積もりの修正をお願いしたい</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/flow-2/183/" target="_blank">サポート開始までの流れ</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/payment/195/" target="_blank">支払い方法について</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/point-2/172/" target="_blank">ポイントのご利用方法について</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
    <m003 />
  </main>
</template>
<script>

import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
import M003 from "@/components/modal/guardian/M003.vue";

export default {
  components: {
    M003,
    GuardianRightMenu
  },
  layout: 'guardian',
}
</script>
