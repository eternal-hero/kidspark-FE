<template>
  <main id="page-U033" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a
        ><span class="current">予約詳細（単発）</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細（単発）</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <h2 class="c-ttl__02">レポートの承認・お支払い</h2>
            <hr class="hr mbpc-33" />
            <ExeoTableGuardianEstimateFee
              title="最終支払金額"
              :basicFee="9500"
              :extensionFee="1500"
              extensionFeeDescription="45分×20%"
              :listFee="listFee"
              :commission="1500"
              :rentalShippingFee="1500"
              :monitoringFee="1080"
              :monitoringFeeDescription="monitoringFeeDescription"
              total="14,080"
            />
            <div class="quote-list">
              <h3 class="quote-list__ttl">お支払い方法：ポイント支払い</h3>
              <hr class="hr mbpc-22" />
              <div class="quote-list__item">
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl">ポイント利用</div>
                    <div class="quote-list__fee-pt-Possess">
                      保有ポイント：<span>1500pt</span>
                    </div>
                  </div>
                  <span class="c-btn__02 mbsp-21"
                    >保有ポイントが12580pt不足しています。ポイントを購入してください。</span
                  >
                  <div class="quote-list__fee-item">
                    <p class="c-txt__01">
                      国内の各銀行からお振込にてお支払いいただけます。お支払いは仮決済完了後、48時間以内にお振り込みください。お振込が完了し、ポイントがキッズパークより付与された時点でお支払いが確定となります。
                    </p>
                  </div>
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl">
                      不足ポイントを購入する
                    </div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__fee-input">
                        <input
                          type="text"
                          class="form-edit__input"
                          value="14280"
                        />
                        <span>pt</span>
                      </div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"></div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__fee-note">
                        不足ポイントを下回る値では購入手続きを行えませんのでご注意ください。
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">自治体助成・福利厚生のご利用</h3>
                <div class="preparation-box"><p>準備中</p></div>
              </div>
              <div class="quote-list__item">
                <h3 class="quote-list__ttl">パークサポーターへのレビュー</h3>
                <p class="c-txt__01 mbpc-24 mbsp-24">
                  匿名のレビューの記入にご協力ください。<br />レビューに関する注意点などは<a
                    href="https://www.kids-parks.com/faq/review-2/282/"
                    target="_blank"
                    >レビューについて</a
                  >をご確認ください。
                </p>
                <div class="quote-list__fee">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl">アイコン</div>
                    <div class="quote-list__fee-ct">
                      <ul class="use-list">
                        <li class="use-list__item">
                          <label class="c-select-icn"
                            ><input
                              type="radio"
                              name="icon"
                              checked="checked" /><span
                              ><img
                                src="@/assets/guardian/img/U033/use-01.png"
                                alt="use"
                                width="40" /></span
                          ></label>
                        </li>
                        <li class="use-list__item">
                          <label class="c-select-icn"
                            ><input type="radio" name="icon" /><span
                              ><img
                                src="@/assets/guardian/img/U033/use-02.png"
                                alt="use"
                                width="40" /></span
                          ></label>
                        </li>
                        <li class="use-list__item">
                          <label class="c-select-icn"
                            ><input type="radio" name="icon" /><span
                              ><img
                                src="@/assets/guardian/img/U033/use-03.png"
                                alt="use"
                                width="40" /></span
                          ></label>
                        </li>
                        <li class="use-list__item">
                          <label class="c-select-icn"
                            ><input type="radio" name="icon" /><span
                              ><img
                                src="@/assets/guardian/img/U033/use-04.png"
                                alt="use"
                                width="40" /></span
                          ></label>
                        </li>
                        <li class="use-list__item">
                          <label class="c-select-icn"
                            ><input type="radio" name="icon" /><span
                              ><img
                                src="@/assets/guardian/img/U033/use-05.png"
                                alt="use"
                                width="40" /></span
                          ></label>
                        </li>
                        <li class="use-list__item">
                          <label class="c-select-icn"
                            ><input type="radio" name="icon" /><span
                              ><img
                                src="@/assets/guardian/img/U033/use-06.png"
                                alt="use"
                                width="40" /></span
                          ></label>
                        </li>
                        <li class="use-list__item">
                          <label class="c-select-icn"
                            ><input type="radio" name="icon" /><span
                              ><img
                                src="@/assets/guardian/img/U033/use-07.png"
                                alt="use"
                                width="40" /></span
                          ></label>
                        </li>
                        <li class="use-list__item">
                          <label class="c-select-icn"
                            ><input type="radio" name="icon" /><span
                              ><img
                                src="@/assets/guardian/img/U033/use-08.png"
                                alt="use"
                                width="40" /></span
                          ></label>
                        </li>
                        <li class="use-list__item">
                          <label class="c-select-icn"
                            ><input type="radio" name="icon" /><span
                              ><img
                                src="@/assets/guardian/img/U033/use-09.png"
                                alt="use"
                                width="40" /></span
                          ></label>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl">満足度</div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__fee-start">
                        <div class="c-review-stars">
                          <span>
                            <input
                              id="review01"
                              type="radio"
                              name="review"
                              checked="checked"
                            /><label for="review01"
                              ><i class="fa-solid fa-star"></i
                            ></label>
                            <input
                              id="review02"
                              type="radio"
                              name="review"
                            /><label for="review02"
                              ><i class="fa-solid fa-star"></i
                            ></label>
                            <input
                              id="review03"
                              type="radio"
                              name="review"
                            /><label for="review03"
                              ><i class="fa-solid fa-star"></i
                            ></label>
                            <input
                              id="review04"
                              type="radio"
                              name="review"
                            /><label for="review04"
                              ><i class="fa-solid fa-star"></i
                            ></label>
                            <input
                              id="review05"
                              type="radio"
                              name="review"
                            /><label for="review05"
                              ><i class="fa-solid fa-star"></i
                            ></label>
                          </span>
                        </div>
                      </div>
                      <div class="quote-list__fee-note">
                        依頼内容の正確さ、やりとりの丁寧さ、時間の正確さ、プロフィールの正確さ
                        などを総合的に評価して、星をクリックしてください。
                      </div>
                    </div>
                  </div>
                  <div class="quote-list__fee-item quote-list__fee-item--start">
                    <div class="quote-list__fee-ttl">
                      レビュー本文<span>※</span>
                    </div>
                    <div class="quote-list__fee-ct">
                      <textarea
                        name=""
                        cols="30"
                        rows="10"
                        class="form-edit__textarea h178"
                        placeholder="レビューを記入してください。"
                      ></textarea>
                      <div class="quote-list__fee-note">
                        ・今回のお仕事において、パークサポーターに対して満足した点や、改善して欲しい点をコメントに記載いただけます。<br />
                        ・レビューの内容はパークサポーターのプロフィールページへ掲載され、すべてのユーザーが依頼する際に参考としてレビューを見ることができますので、パークサポータのお名前などの個人情報や、不適切な内容の記載にご注意ください。<br />
                        ・レビューは、毎月1日に前月のレビューを匿名で一斉公開します。匿名ですが、内容や依頼件数が少なかった場合などは特定できる可能性もございますのでご了承ください。<br />
                        ※運営に対するご意見、改善点などはお問い合わせよりご記入ください。
                      </div>
                      <div class="request-form__ct-right">
                        <div class="c-example__button js-btn-acc">
                          <span>入力例</span>
                        </div>
                        <div class="c-example__cont js-acc-cont">
                          <span class="c-example__close js-acc-close">×</span>
                          <p class="c-txt__01">
                            （例）<br />
                            初めて利用させていただきましたが、人見知り真っ盛りの子どもが、抱っこされても泣くことがなく、本当にすばらしい対応でサポートしていただきました。
                            <br />
                            <br />
                            （例） <br />
                            この度もありがとうございました。 <br />
                            ピアノレッスンも初めてお願いしましたが、はなこもとても楽しかったと言っていました。またよろしくお願いします。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="quote-list__fee-form">
                    <p class="c-txt__01">
                      お支払い内容、パークサポーターへのレビューはお支払い完了後変更ができませんのでご注意ください。福利厚生使用の変更につきましては、お支払い完了後も同月の月末まで変更可能です。<a
                        href="https://www.kids-parks.com/faq/subsidy/280/"
                        target="_blank"
                        >詳しくはこちら</a
                      >をご覧ください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a href="./P0011-2.html" class="btn_entry mw-335">確認ページへ</a>
          </div>
          <aside class="l-content__02-r">
            <GuardianRightMenu step-active="7" />
            <div class="list-btn">
              <div class="list-btn__item">
                <a href="./U007-4.html" class="c-btn__04">明細書ダウンロード</a>
              </div>
            </div>
            <QuestionBox :questions="questions" />
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
import ExeoTableGuardianEstimateFee from "@/components/table/ExeoTableGuardianEstimateFee.vue";
import QuestionBox from "@/components/block/QuestionBox.vue";

export default {
  layout: "guardian",
  components: {
    GuardianRightMenu,
    ExeoTableGuardianEstimateFee,
    QuestionBox,
  },
  data() {
    return {
      listFee: [
        {
          title: "オプション料金",
          cost: 2500,
          description:
            "<p>英語学習　+500円/1時間あたり<p/><p>マッサージ　500円/1回あたり<p/>",
        },
        {
          title: "割引料金",
          cost: -500,
          description: "<p>初回予約割引　-500円/1回あたり<p/>",
        },
        {
          title: "交通費",
          cost: 1080,
          description:
            "<p>【電車】　〇〇駅⇆〇〇駅　680円（往復）<p/><p>【バス】　〇〇⇆〇〇　400円（往復）<p/>",
        },
      ],
      questions: [
        {
          name: "支払い方法について",
          url: "https://www.kids-parks.com/faq/payment/195/",
        },
        {
          name: "ポイントのご利用方法について",
          url: "https://www.kids-parks.com/faq/point-2/172/",
        },
        {
          name: "自治体助成・福利厚生について",
          url: "https://www.kids-parks.com/faq/subsidy/280/",
        },
        {
          name: "サポート中の事故・トラブル",
          url: "https://www.kids-parks.com/faq/trouble-4/205/",
        }
      ],
      monitoringFeeDescription:
        "<p>全時間見守り（1,600円/1時間当たり）✕2時間分<p/><p>12:00~13:00 カメラ接続不良のためチェックできず1時間分料金修正<p/>",
    };
  },
};
</script>
