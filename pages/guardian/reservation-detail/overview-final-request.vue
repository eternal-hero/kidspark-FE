<template>
  <main id="page-U034" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a><span class="current">予約詳細（単発）</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細（単発）</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">ご利用ありがとうございました！</h2>
              <p class="c-txt__01">またのご利用をお待ちしております！</p>
            </div>
            <SupporterJobMenu :route-names="routeNames"></SupporterJobMenu>
            <ExeoTableGuardianEstimateFee
              basic-fee="9500"
              basic-fee-description="0000円×5.0時間"
              commission="1500"
              total="14,080"
              :list-fee="listFeeEstimate"
              title="事前見積もり金額"
              :is-show="true"
            ></ExeoTableGuardianEstimateFee>
            <ExeoTableGuardianEstimateFee
              basic-fee="9500"
              basic-fee-description="0000円×5.0時間"
              extension-fee="1500"
              extension-fee-description="45分×20%"
              commission="1500"
              total="14,080"
              :list-fee="listFeeEstimate"
              rental-shipping-fee="1500"
              monitoring-fee="1080"
              monitoring-fee-description="全時間見守り（1,600円/1時間当たり）✕2時間分 <br> 12:00~13:00 カメラ接続不良のためチェックできず1時間分料金修正"
              :point-note="15780"
            ></ExeoTableGuardianEstimateFee>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-note.svg" alt="基本情報" width="17"> 基本情報</h3>
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
                  <div class="job-infor__list-desc">東京都千代田区</div>
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
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-use.svg" alt="ユーザー情報" width="17"> ユーザー情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お名前</div>
                  <div class="job-infor__list-desc"><a href="./U058.html">木村　花子</a></div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">ふりがな</div>
                  <div class="job-infor__list-desc">きむら　はなこ</div>
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
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-use.svg" alt="お子様情報" width="17"> お子様情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">性別</div>
                  <div class="job-infor__list-desc">女の子</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">年齢</div>
                  <div class="job-infor__list-desc">7歳5ヶ月</div>
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
              </div>
            </div>

            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-file.svg" alt="具体的な依頼内容" width="13"> 具体的な依頼内容</h3>
              <div class="job-infor__note job-infor__note--auto">
                自宅にて7歳の娘の遊び相手をお願いします。<br>
                仕事で午前中から昼過ぎまで出かけないといけませんので、
                お昼も用意したものを出していただければと思います。<br>
                家の目の前に公園がありますので晴れていたら公園で遊んでいただけると嬉しいです。<br>
                何か質問などあればメッセージをお待ちしております。<br>
                よろしくお願いいたします。
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-use.svg" alt="サポーター情報" width="17"> サポーター情報</h3>
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
              </div>
            </div>
            <!-- ↓カメラレンタルを依頼する / 弊社スタッフによる見守りも依頼する -->
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-camera.svg" alt="ユーザー情報" width="17">見守り依頼、カメラレンタル<span>（パークサポーターへは公開されません）</span></h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">申請内容</div>
                  <div class="job-infor__list-desc">カメラレンタルを依頼する / 弊社スタッフによる見守りも依頼する</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">弊社スタッフによる<br>見守り内容</div>
                  <div class="job-infor__list-desc">全時間見守り</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">使用カメラ</div>
                  <div class="job-infor__list-desc">キッズパークでレンタル中のカメラで見守ります</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">備考</div>
                  <div class="job-infor__list-desc">サポーターさんと子どもがどのような雰囲気で家の中で過ごしているのかが気になります。何をして遊んでいたか、子どもが楽しんでいる様子が見えたか、レポートに記載をお願いしたいです。</div>
                </div>
              </div>
              <p class="job-infor__list-invitationtxt">・メールアドレスへ招待を送る場合は、サポート日までに下記へ招待メールをお送りください。<br><span>招待アドレス</span>　user@kids-parks.com</p>
              <p class="job-infor__list-invitationtxt">
                ・カメラはサポート予約日の3日前までにご自宅へ発送いたします。<br>
                ・アカウント情報、設定方法などはカメラと同封してお送りいたします。<br>
                ・サポート開始時間15分前に弊社スタッフによる接続テストを行います。<br>
                詳しくは<a href="https://www.kids-parks.com/faq/camera-6/567/" target="_blank">見守り依頼、カメラレンタルの流れ</a>をご確認ください。
              </p>
            </div>
            <!-- ↓カメラレンタルを依頼する / 弊社スタッフによる見守りは不要 -->
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-camera.svg" alt="ユーザー情報" width="17">見守り依頼、カメラレンタル<span>（パークサポーターへは公開されません）</span></h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">申請内容</div>
                  <div class="job-infor__list-desc">カメラレンタルを依頼する / 弊社スタッフによる見守りは不要</div>
                </div>
              </div>
              <p class="job-infor__list-invitationtxt">
                ・カメラはサポート予約日の3日前までにご自宅へ発送いたします。<br>
                ・アカウント作成方法、設定方法などはカメラと同封してお送りいたします。<br>
                詳しくは<a href="https://www.kids-parks.com/faq/camera-6/567/" target="_blank">見守り依頼、カメラレンタルの流れ</a>をご確認ください。
              </p>
            </div>
            <!-- ↓カメラレンタルは不要 / お持ちのカメラで弊社スタッフによる見守りを依頼する -->
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-camera.svg" alt="ユーザー情報" width="17">見守り依頼、カメラレンタル<span>（パークサポーターへは公開されません）</span></h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">申請内容</div>
                  <div class="job-infor__list-desc">カメラレンタルは不要 / お持ちのカメラで弊社スタッフによる見守りを依頼する</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">弊社スタッフによる<br>見守り内容</div>
                  <div class="job-infor__list-desc">
                    時間指定見守り<br>
                    12時00分〜0時00分<br>
                    12時00分〜0時00分
                  </div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">使用カメラ</div>
                  <div class="job-infor__list-desc">キッズパークでレンタル中のカメラで見守ります</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">備考</div>
                  <div class="job-infor__list-desc">サポーターさんと子どもがどのような雰囲気で家の中で過ごしているのかが気になります。何をして遊んでいたか、子どもが楽しんでいる様子が見えたか、レポートに記載をお願いしたいです。</div>
                </div>
              </div>
              <p class="job-infor__list-invitationtxt">・メールアドレスへ招待を送る場合は、サポート日までに下記へ招待メールをお送りください。<br><span>招待アドレス</span>　user@kids-parks.com</p>
              <p class="job-infor__list-invitationtxt">
                ・サポート開始時間15分前に弊社スタッフによる接続テストを行います。<br>
                詳しくは<a href="https://www.kids-parks.com/faq/camera-6/567/" target="_blank">見守り依頼、カメラレンタルの流れ</a>をご確認ください。
              </p>
            </div>
          </div>
          <aside class="l-content__02-r">
            <GuardianRightMenu step-active="8"></GuardianRightMenu>
            <div class="list-btn">
              <div class="list-btn__item">
                <a href="./U007-4.html" class="c-btn__04">明細書ダウンロード</a>
              </div>
            </div>
            <div class="questions-box">
              <h3 class="questions-box__ttl">
                <img src="@/assets/guardian/img/common/questions-icon.svg" alt="icon" width="26"> よくある質問
              </h3>
              <ul class="questions-box__list">
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/detail/167/" target="_blank">明細書・領収書の発行方法</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu";
import SupporterJobMenu from "@/components/block/SupporterJobMenu";
import QuestionBox from "@/components/block/QuestionBox";
import ExeoTableGuardianEstimateFee from "@/components/table/ExeoTableGuardianEstimateFee";

export default {
  layout: 'guardian',
  components: {
    GuardianRightMenu,
    SupporterJobMenu,
    QuestionBox,
    ExeoTableGuardianEstimateFee
  },
  data () {
    return {
      routeNames: [
        {
          name: '依頼メッセージ',
          routeName: ''
        },
        {
          name: '依頼詳細',
          routeName: 'guardian-reservation-detail-overview-final-request'
        },
        {
          name: '完了レポート',
          routeName: 'guardian-reservation-detail-overview-completion-request'
        },
        {
          name: '見守りレポート',
          routeName: 'guardian-reservation-detail-monitoring-report'
        },
      ],
      listFeeEstimate: [
        {title: 'オプション料金', cost: '2500円', description: '英語学習　+200円/1時間あたり <br> マッサージ　500円/1回あたり'},
        {title: '割引料金', cost: '-500円', description: '初回予約割引　-500円/1回あたり'},
        {title: '交通費', cost: '1080円', description: '【電車】　〇〇駅⇆〇〇駅　680円（往復） <br> バス】　〇〇⇆〇〇　400円（往復）'},
      ],
      questions: [
        {
          url: 'https://www.kids-parks.com/faq/detail/167/',
          name: '明細書・領収書の発行方法'
        }
      ]
    }
  }
}
</script>
