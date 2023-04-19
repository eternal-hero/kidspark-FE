<template>
  <main id="page-P068" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a><span class="current">お仕事詳細(Web事前面談)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">お仕事詳細(Web事前面談)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">完了レポートへ差し戻しがあります。</h2>
              <p class="c-txt__01"> 差し戻し受け取り後<span class="em">24時間</span>以内に再度レポートを送信してください。 </p>
            </div>
            <div class="list-btn sp">
              <div class="list-btn__item">
                <span class="c-btn__02 mbsp-21"><img src="@/assets/supporter/img/common/icon-time.svg" alt="icon" width="15">残り24時間</span>
              </div>
              <div class="list-btn__item">
                <a href="./P018.html" class="btn_entry">完了レポートを修正する</a>
              </div>
            </div>
            <tab :tabs="tabs"></tab>
            <div class="job-money">
              <h3 class="job-money__ttl js-show-acc"><img src="@/assets/supporter/img/common/icon-yen.svg" alt="事前見積もり金額" width="17"> 事前見積もり金額</h3>
              <div class="job-money__list js-ct-acc">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc">600円（1200円×0.5時間）</div>
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
                  <div class="job-money__list-desc"> 0円 </div>
                </div>
                <div class="job-money__list-item job-money__list-item--price">
                  <div class="job-money__list-ttl">合計</div>
                  <div class="job-money__list-desc">
                    <span>600</span>円
                  </div>
                </div>
              </div>
            </div>
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="@/assets/supporter/img/common/icon-yen.svg" alt="最終受取金額" width="17">最終受取金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc">900円（1200円×0.75時間）</div>
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
                  <div class="job-money__list-desc"> 0円 </div>
                </div>
                <div class="job-money__list-item job-money__list-item--price">
                  <div class="job-money__list-ttl">合計</div>
                  <div class="job-money__list-desc">
                    <span>900</span>円
                  </div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icn_gps.svg" alt="サポート場所" width="11">サポート場所</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">住所</div>
                  <div class="job-infor__list-desc">東京都千代田区(以降は単発・定期予約が確定したら表示されます)</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">最寄駅</div>
                  <div class="job-infor__list-desc">山手線 秋葉原駅</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">最寄り駅までの交通手段</div>
                  <div class="job-infor__list-desc">徒歩</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">最寄り駅までの所要時間</div>
                  <div class="job-infor__list-desc">15分</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">家までの行き方</div>
                  <div class="job-infor__list-desc"><span>単発予約・定期予約が<br class="sp">確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl">保育場所の写真</div>
                  <div class="job-infor__list-desc">
                    <img src="@/assets/supporter/img/p013/img-01.jpg" alt="保育場所の写真">
                  </div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-use.svg" alt="ユーザー情報" width="17"> ユーザー情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お名前</div>
                  <div class="job-infor__list-desc"><a href="./P023.html">木村　花子</a></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">ふりがな</div>
                  <div class="job-infor__list-desc">きむら　はなこ</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">電話番号</div>
                  <div class="job-infor__list-desc"><a class="tel" href="tel:07045623654">07045623654</a></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">緊急連絡先</div>
                  <div class="job-infor__list-desc"><span>単発予約・定期予約が<br class="sp">確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">ペットの有無</div>
                  <div class="job-infor__list-desc">無し</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">住居形態</div>
                  <div class="job-infor__list-desc">マンション</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">カメラ設置</div>
                  <div class="job-infor__list-desc">あり</div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-use.svg" alt="お子様情報" width="17">お子様情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お名前</div>
                  <div class="job-infor__list-desc"><span>単発予約・定期予約が<br class="sp">確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">愛称</div>
                  <div class="job-infor__list-desc"><span>単発予約・定期予約が<br class="sp">確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">性別</div>
                  <div class="job-infor__list-desc">女の子</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">年齢</div>
                  <div class="job-infor__list-desc">3歳2ヶ月</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">アレルギー</div>
                  <div class="job-infor__list-desc">なし</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">持病</div>
                  <div class="job-infor__list-desc">なし</div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl">その他/配慮事項</div>
                  <div class="job-infor__list-desc">なんでも口に入れるので注意が必要です。</div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl">お子様のお写真</div>
                  <div class="job-infor__list-desc">
                    <span>単発予約・定期予約が確定したら表示されます</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-file.svg" alt="面談で聞きたいことなど" width="13"> 面談で聞きたいことなど</h3>
              <div class="job-infor__note job-infor__note--auto"> いままでの保育のご経験など聞ければ嬉しいです。 </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-file.svg" alt="ご家庭のルール" width="13">ご家庭のルール</h3>
              <div class="job-infor__note job-infor__note--auto"> 昼間はテレビを見ない </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-use.svg" alt="サポーター情報" width="17">サポーター情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お名前</div>
                  <div class="job-infor__list-desc">
                    <a href="">佐藤　彩</a>
                  </div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">ふりがな</div>
                  <div class="job-infor__list-desc">さとう　あや</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">電話番号</div>
                  <div class="job-infor__list-desc"><a href="tel:07011112222" class="tel">07011112222</a></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">住所</div>
                  <div class="job-infor__list-desc"><span>単発予約・定期予約が<br class="sp">確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">最寄駅</div>
                  <div class="job-infor__list-desc">〇〇駅</div>
                </div>
              </div>
            </div>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="5"></supporter-right-menu>
            <div class="list-btn">
              <div class="list-btn__item">
                <span class="c-btn__02 mbsp-21"><img src="@/assets/supporter/img/common/icon-time.svg" alt="icon" width="15">残り24時間</span>
              </div>
              <div class="list-btn__item">
                <a href="./P018.html" class="btn_entry">完了レポートを修正する</a>
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
import QuestionBox from '~/components/block/QuestionBox.vue';
import SupporterJobMoney2 from '~/components/block/SupporterJobMoney2.vue';
import SupporterJobInfor from '~/components/block/SupporterJobInfor.vue';
import Tab from '~/components/block/Tab.vue';

export default {
  components: { SupporterRightMenu, SupporterJobMoney2, QuestionBox, SupporterJobInfor, Tab },
  layout: 'supporter',
  head() {
    return {
      title: 'お仕事詳細(Web事前面談)'
    }
  },
  data() {
    return {
      tabs: [
        {
          name: '依頼メッセージ',
          path: '#'
        }      ,
        {
          name: '依頼詳細',
          path: '/supporter/job-detail/web-interview/remand'
        },
        {
          name: '完了レポート',
          path: '#'
        }
      ],
      questions: [
        {
          'name': '完了レポート送信後に内容を変更したい',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        },
        {
          'name': '報酬のお支払いについて',
          'url': 'https://www.kids-parks.com/faq/request-ng/48/',
        }
      ],
    }
  },
}
</script>