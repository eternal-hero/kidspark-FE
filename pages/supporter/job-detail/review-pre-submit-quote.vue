<template>
  <main id="page-P079" class="wrapper">
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
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">お仕事リクエストが届きました！</h2>
              <p class="c-txt__01">依頼詳細をご確認いただき、お見積もりを提示してください。</p>
            </div>
            <div class="list-btn sp">
              <div class="list-btn__item">
                <a href="" class="c-btn__02"><img src="@/assets/supporter/img/common/icon-time.svg" alt="icon" width="15"> 残り48時間</a>
              </div>
              <div class="list-btn__item">
                <a href="./P011.html" class="btn_entry">お見積もりを提示する</a>
              </div>
              <div class="list-btn__item">
                <a href="./P010.html" class="c-btn__04">お断りする</a>
              </div>
            </div>
            <supporter-job-menu :route-names="routeNames"></supporter-job-menu>
            <div class="job-money">
              <h3 class="job-money__ttl"><img src="@/assets/supporter/img/common/icon-yen.svg" alt="予定合計金額" width="17"> 予定合計金額</h3>
              <div class="job-money__list">
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">基本料金</div>
                  <div class="job-money__list-desc">9500円（1900円×5.0時間）</div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">オプション料金</div>
                  <div class="job-money__list-desc">0円</div>
                </div>
                <div class="job-money__list-item">
                  <div class="job-money__list-ttl">交通費</div>
                  <div class="job-money__list-desc">0円</div>
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
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-note.svg" alt="基本情報" width="17"> 基本情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">開始</div>
                  <div class="job-infor__list-desc">2022年07月20日(水) 12:00</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">終了</div>
                  <div class="job-infor__list-desc">2022年07月20日(水) 15:00</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">依頼カテゴリー</div>
                  <div class="job-infor__list-desc">家事代行</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">予約内容</div>
                  <div class="job-infor__list-desc">単発予約</div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icn_gps.svg" alt="サポート場所" width="11"> サポート場所</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">住所</div>
                  <div class="job-infor__list-desc">東京都千代田区<br class="sp">(以降の住所は予約が確定したら表示されます)</div>
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
                  <div class="job-infor__list-desc"><span>予約が確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">保育場所の写真</div>
                  <div class="job-infor__list-desc"><span>家事代行の場合公開されません</span></div>
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
                  <div class="job-infor__list-desc"><span>予約が確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">緊急連絡先</div>
                  <div class="job-infor__list-desc"><span>予約が確定したら表示されます</span></div>
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
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-use.svg" alt="ユーザー情報" width="17"> お子様情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お名前</div>
                  <div class="job-infor__list-desc"><span>家事代行の場合公開されません</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">愛称</div>
                  <div class="job-infor__list-desc"><span>家事代行の場合公開されません</span></div>
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
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お子様のお写真</div>
                  <div class="job-infor__list-desc"><span>家事代行の場合公開されません</span></div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-file.svg" alt="今回の具体的な依頼内容" width="13"> 今回の具体的な依頼内容</h3>
              <div class="job-infor__note">我々は夫婦2人と子供1人の3人家族で、猫が一匹おります。その日のご飯や作り置きなどを依頼したいです。<br>なるべくご都合あわせさせて頂きたいと存じますが、月曜〜金曜のうち、まずはご都合の良いお時間をご確認頂きたく、よろしくお願い致します。</div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-file.svg" alt="ご家庭のルール" width="13"> ご家庭のルール</h3>
              <div class="job-infor__note job-infor__note--auto"> 基本在宅勤務で、12時〜13時にかかると昼休み </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-use.svg" alt="ユーザー情報" width="17"> サポーター情報</h3>
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
                  <div class="job-infor__list-desc"><span>予約が確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">住所</div>
                  <div class="job-infor__list-desc"><span>予約が確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">最寄駅</div>
                  <div class="job-infor__list-desc"><span>予約が確定したら表示されます</span></div>
                </div>
              </div>
            </div>
          </div>
          <aside class="l-content__02-r">
            <supporter-right-menu step-active="0"></supporter-right-menu>
            <div class="list-btn">
              <div class="list-btn__item">
                <span class="c-btn__02 mbsp-21"><img src="@/assets/supporter/img/common/icon-time.svg" alt="icon" width="15">残り48時間</span>
              </div>
              <div class="list-btn__item">
                <a href="./P011.html" class="btn_entry">お見積もりを提示する</a>
              </div>
              <div class="list-btn__item">
                <a href="./P010.html" class="c-btn__04">お断りする</a>
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
import SupporterJobMenu from "@/components/block/SupporterJobMenu";
import SupporterRightMenu from "@/components/block/SupporterRightMenu";
import QuestionBox from "@/components/block/QuestionBox";
export default {
  layout: 'supporter',
  components: {
    SupporterJobMenu,
    SupporterRightMenu,
    QuestionBox
  },
  head() {
    return {
      title: 'お仕事詳細(単発)'
    }
  },
  data() {
    return {
      questions: [
        {
          url: 'https://www.kids-parks.com/faq/quotation/45/',
          name: 'お見積りの作成方法'
        },
        {
          url: 'https://www.kids-parks.com/faq/request-ng/48/',
          name: 'お仕事リクエストのお断り方法について'
        },
        {
          url: 'https://www.kids-parks.com/faq/flow/50/',
          name: 'お仕事開始までの流れ'
        }
      ],
      routeNames: [
        {
          name: '依頼メッセージ',
          routeName: ''
        },
        {
          name: '依頼詳細',
          routeName: 'supporter-job-detail-review-pre-submit-quote'
        },
      ]
    };
  }
}
</script>
