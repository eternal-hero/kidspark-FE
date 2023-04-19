<template>
  <main id="page-U049" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細（対面事前面談）</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細（対面事前面談）</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <h2 class="c-ttl__02">お支払い方法を選択してください。</h2>
            <hr class="hr mbpc-33">
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="@/assets/guardian/img/common/icon-yen.svg" alt="事前見積もり金額" width="17"> 事前見積もり金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">9500円（0000円×5.0時間）</span></div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl"> 交通費 </div>
                  <div class="job-money__list-desc">1080円</div>
                  <div class="job-money__list-note"> 【電車】　〇〇駅⇆〇〇駅　300円（往復） </div>
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
                      <p class="quote-list__credit-brand"><img src="@/assets/guardian/img/common/icon-visa.svg" alt="クレジット会社" width="35"></p>
                      <p class="quote-list__credit-card">楽天カード</p>
                      <p class="quote-list__credit-no">****1456</p>
                      <p class="c-txt__04"><a href="javascript:void(0);" class="c-fw--md js-modal" data-modal="M003">変更する</a></p>
                    </div>
                  </div>
                  <div class="quote-list__fee-note">保有ポイントの使用、自治体助成・福利厚生のご利用はサポート完了後のお支払いページにて選択いただけます。</div>
                </div>

              </div>
              <div class="quote-list__item quote-list__item--pay">
                <h3 class="quote-list__ttl">
                  <ul class="form-check form-check--radio form-check--full">
                    <li class="form-check__item">
                      <label class="form-edit__radio_02 js-check" data-id="form-edit__checkbox01">
                        <input type="radio" name="pay" class="checks" value="クレジットカード決済" required="">
                        <span class="checkmark"></span>ポイント支払い </label>
                    </li>
                  </ul>
                </h3>
              </div>
            </div>
            <NuxtLink to="/guardian/reservation-detail/face-to-face-interview/quotation/approval-payment-complete" class="btn_entry mw-335">確認ページへ</NuxtLink>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="3"></guardian-right-menu>
            <question-box :questions="questions"></question-box>
          </aside>
        </div>
      </div>
    </section>
    <div class="modal-main" id="M003">
      <div class="modal-block credit">
        <span class="modal-block__close"></span>
        <h2 class="modal-block__ttl">クレジットカード登録</h2>
        <div class="modal-ct">
          <div class="c-txt__01 modal-ct__desc"> VISA、MasterCard、JCB、アメリカン・エキスプレス、ダイナースクラブがご利用になれます。 </div>
          <p class="modal-ct__credit_logo"><img src="@/assets/guardian/img/common/img-credit_logo.png" alt="icon" width="428"></p>

          <dl class="modao-dl">
            <dt><h3 class="modal-ct__ttl">カードの種類　<span class="c-fc--rd">※</span></h3></dt>
            <dd>
              <div class="form_part_select">
                <select>
                  <option value="" selected="selected">選択してください</option>
                </select>
              </div>
            </dd>
          </dl>
          <dl class="modao-dl">
            <dt><h3 class="modal-ct__ttl">カード番号（ハイフンなし）　<span class="c-fc--rd">※</span></h3></dt>
            <dd>
              <input type="text" class="form-edit__input" placeholder="半角数字">
            </dd>
          </dl>
          <dl class="modao-dl">
            <dt><h3 class="modal-ct__ttl">有効期限（月／年）　<span class="c-fc--rd">※</span></h3></dt>
            <dd>
              <input type="text" name="expiry" placeholder="MM / YY" class="form-edit__input js-expiry" maxlength="5" pattern="^[a-zA-Z0-9]+$">
            </dd>
          </dl>
          <dl class="modao-dl">
            <dt><h3 class="modal-ct__ttl">名義人　<span class="c-fc--rd">※</span></h3></dt>
            <dd>
              <input type="text" class="form-edit__input" placeholder="（例）KIDS PARK">
            </dd>
          </dl>
          <dl class="modao-dl">
            <dt><h3 class="modal-ct__ttl">セキュリティーコード　<span class="c-fc--rd">※</span></h3></dt>
            <dd>
              <input type="text" class="form-edit__input" placeholder="半角数字3〜4桁">
            </dd>
          </dl>
          <div class="modal-ct__control">
            <button class="btn_entry">保存する</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>

import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
import QuestionBox from '~/components/block/QuestionBox.vue'

export default {
  components: { GuardianRightMenu, QuestionBox },
  layout: 'guardian',
  head() {
    return {
      title: '予約詳細（対面事前面談）'
    }
  },
  data() {
    return {
      questions: [
        {
          'name': '予約リクエストの内容変更',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': 'サポート開始までの流れ',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': '支払い方法について',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': '支払い方法について',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': 'ポイントのご利用方法について',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        }
      ],
    }
  },
}
</script>
