<template>
  <main id="page-U018-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細（単発）</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box mbsp-20">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">予約リクエストを送信しました。</h2>
              <p class="c-txt__01">サポーターよりお見積もりが提示されますのでしばらくお待ちください。</p>
            </div>
            <SupporterJobMenu :route-names="routeNames" />
            <ExeoTableGuardianEstimateFee
              title="予定合計金額"
              :basicFee="9500"
              basicFeeDescription="1900円×5.0時間"
              :listFee="listFee"
              commission="1,500"
              total="11,000"
            />
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-note.svg" alt="基本情報" width="17"> 基本情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">開始</div>
                  <div class="job-infor__list-desc">2022年07月20日(水) 12:00</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">終了</div>
                  <div class="job-infor__list-desc">2022年07月20日(水) 17:00</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">依頼カテゴリー</div>
                  <div class="job-infor__list-desc">ベビーシッター</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">予約内容</div>
                  <div class="job-infor__list-desc">単発予約</div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icn_gps.svg" alt="サポート場所" width="11"> サポート場所</h3>
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
                  <div class="job-infor__list-desc"><span>予約が確定したら表示されます</span></div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-use.svg" alt="ユーザー情報" width="17"> ユーザー情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お名前</div>
                  <div class="job-infor__list-desc"><a href="./U006.html">木村　花子</a></div>
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
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-use.svg" alt="ユーザー情報" width="17"> お子様情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お名前</div>
                  <div class="job-infor__list-desc"><span>予約が確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">愛称</div>
                  <div class="job-infor__list-desc"><span>予約が確定したら表示されます</span></div>
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
                  <div class="job-infor__list-desc"><span>予約が確定したら表示されます</span></div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-file.svg" alt="" width="13">今回の具体的な依頼内容</h3>
              <div class="job-infor__note job-infor__note--auto">自宅にて7歳の娘の遊び相手をお願いします。<br>仕事で午前中から昼過ぎまで出かけないといけませんので、<br>お昼も用意したものを出していただければと思います。<br>家の目の前に公園がありますので晴れていたら公園で遊んでいただけると嬉しいです。<br>何か質問などあればメッセージをお待ちしております。<br>よろしくお願いいたします。</div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-file.svg" alt="" width="13"> ご家庭のルール</h3>
              <div class="job-infor__note job-infor__note--auto">昼間はテレビを見ない。</div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-use.svg" alt="ユーザー情報" width="17"> サポーター情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お名前</div>
                  <div class="job-infor__list-desc">
                    <a href="./U058.html">佐藤　彩</a>
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
                  <div class="job-infor__list-desc"><span>単発予約・定期予約が確定したら表示されます</span></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">最寄駅</div>
                  <div class="job-infor__list-desc"><span>予約が確定したら表示されます</span></div>
                </div>
              </div>
            </div>
          </div>
          <aside class="l-content__02-r">
            <GuardianRightMenu step-active="2" totalAmount="11,000" stopTime="2022年07月20日(水) 17:00"/>
            <div class="list-btn">
              <div class="list-btn__item">
                <a href="./U019.html" class="c-btn__04">依頼を取り消す</a>
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
import SupporterJobMenu from "~/components/block/SupporterJobMenu.vue";
import ExeoTableGuardianEstimateFee from "~/components/table/ExeoTableGuardianEstimateFee.vue";
import GuardianRightMenu from "~/components/block/GuardianRightMenu.vue";
import QuestionBox from "~/components/block/QuestionBox.vue";
export default {
  name: "waiting-for-quote",
  layout:'guardian',
  components:{
    SupporterJobMenu,
    ExeoTableGuardianEstimateFee,
    GuardianRightMenu,
    QuestionBox
  },
  data() {
    return {
      routeNames: [
        {
          name: "依頼メッセージ",
          routeName: "",
        },
        {
          name: "依頼詳細",
          routeName:
            "guardian-reservation-management-booking-detail-waiting-for-quote",
        }
      ],
      listFee: [
        {
          title: "オプション料金",
          cost: 0,
          description:
            "",
        },
        {
          title: "交通費",
          cost: 0,
          description:
            "",
        },
      ],
      questions: [
        {
          name: "予約リクエストの作成方法",
          url: "https://www.kids-parks.com/faq/request/177/",
        },
        {
          name: "予約リクエストの内容変更、依頼取り消しについて",
          url: "https://www.kids-parks.com/faq/request-2/180/",
        },
        {
          name: "サポート開始までの流れ",
          url: "https://www.kids-parks.com/faq/flow-2/183/",
        },
        {
          name: "見守り依頼とは",
          url: "https://www.kids-parks.com/faq/camera-2/212/",
        },
        {
          name: "見守り依頼で使用できるカメラ",
          url: "https://www.kids-parks.com/faq/camera-3/218/",
        },
        {
          name: "見守りカメラをレンタル・購入したい",
          url: "https://www.kids-parks.com/faq/camera-4/220/",
        }
      ]
    };
  },
}
</script>

