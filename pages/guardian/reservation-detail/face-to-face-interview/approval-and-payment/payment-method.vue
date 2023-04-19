<template>
  <main id="page-U055" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細(対面事前面談)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細(対面事前面談)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <h2 class="c-ttl__02">レポートの承認・お支払い</h2>
            <hr class="hr mbpc-33">

            <div class="job-money">
              <h3 class="job-money__ttl"><img src="@/assets/guardian/img/common/icon-yen.svg" alt="最終支払金額" width="17">最終支払金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc"><span class="c-fw--bd">9500円（0000円×5.0時間）</span></div>
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
                        手数料には保険料と消費税が含まれます。<a href='https://www.kids-parks.com/faq/commission-2/187/' target='_blank'>手数料についてはこちら</a>
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

            <div>
              <h3 class="quote-list__ttl">お支払い方法：クレジットカード決算</h3>
              <hr class="hr mbpc-22">
              <div class="quote-list__item  quote-list__item--pay-credit">

                <div class="quote-list__fee">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 登録クレジットカード </div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__credit">
                        <p class="quote-list__credit-brand"><img src="@/assets/guardian/img/common/icon-visa.svg" alt="クレジット会社" width="35"></p>
                        <p class="quote-list__credit-card">楽天カード</p>
                        <p class="quote-list__credit-no">****1456</p>
                        <p class="c-txt__04"><a href="javascript:void(0);" class="c-fw--md js-modal" data-modal="M003">変更する</a></p>
                      </div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl"> ポイント利用 </div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__fee-pt">
                        <p class="quote-list__fee-pt-Possess">保有ポイント：<span>1500pt</span></p>
                        <ul class="form-check form-check--radio form-check--full">
                          <li class="form-check__item">
                            <label class="form-edit__radio_02 js-check" data-id="form-edit__checkbox01">
                              <input type="radio" name="point" class="checks" checked="checked" value="ポイントを利用しない" required="">
                              <span class="checkmark"></span>ポイントを利用しない </label>
                          </li>
                          <li class="form-check__item">
                            <label class="form-edit__radio_02 js-check" data-id="form-edit__checkbox02">
                              <input type="radio" name="point" class="checks" value="すべてのポイントを利用する" required="">
                              <span class="checkmark"></span>すべてのポイントを利用する </label>
                          </li>
                          <li class="form-check__item">
                            <label class="form-edit__radio_02 js-check" data-id="form-edit__checkbox03">
                              <input type="radio" name="point" class="checks" value="一部のポイントを利用する" required="">
                              <span class="checkmark"></span>一部のポイントを利用する </label>
                          </li>
                        </ul>
                        <div class="quote-list__fee-pt-use">
                          <div class="quote-list__fee-input">
                            <input type="text" class="form-edit__input" value="0">
                            <span>pt</span>
                          </div>
                          <p>を利用する</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">自治体助成・福利厚生のご利用</h3>
                <div class="preparation-box"><p>準備中</p></div>
              </div>
              <div class="quote-list__fee-form">
                <p class="c-txt__01 mb-0">お支払い内容はお支払い完了後変更ができませんのでご注意ください。</p>
              </div>
            </div>
            <NuxtLink to="/guardian/reservation-detail/face-to-face-interview/approval-and-payment/confirm-payment" class="btn_entry mw-335">確認ページへ</NuxtLink>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu step-active="7" :steps="$STEP_PRE_INTERVIEW_GUARDIAN"></guardian-right-menu>
            <question-box :questions="questions"></question-box>
          </aside>
        </div>
      </div>
    </section>
    <ModalM003RegistrationCredit></ModalM003RegistrationCredit>
  </main>
</template>

<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
import QuestionBox from '~/components/block/QuestionBox.vue';
import { modalMixin } from "@/mixins/modalMixin";
import { collapseMixin } from '@/mixins/collapseMixin'

export default {
  components: { GuardianRightMenu, QuestionBox },
  layout: 'guardian',
  mixins: [modalMixin, collapseMixin],
  data() {
    return {
      questions: [
        {
          'name': '支払い方法について',
          'url': 'https://www.kids-parks.com/faq/payment/195/',
        },
        {
          'name': 'ポイントのご利用方法について',
          'url': 'https://www.kids-parks.com/faq/point-2/172/',
        },
        {
          'name': '自治体助成・福利厚生について',
          'url': 'https://stg.kids-parks.com/faq/subsidy/280/',
        },
        {
          'name': 'サポート中の事故・トラブル',
          'url': 'https://www.kids-parks.com/faq/trouble-4/205/',
        }
      ],
    }
  },
  mounted () {
    this.toggleModal()
  },
}
</script>
