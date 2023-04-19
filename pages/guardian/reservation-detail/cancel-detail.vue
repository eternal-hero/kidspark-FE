<template>
  <main id="page-U026-3" class="wrapper">
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
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">ご予約をキャンセルしました。<br>予約2日前（48時間前）までのキャンセルは無料</h2>
            </div>
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">ご予約をキャンセルしました。<br>予約１日前（24時間以上～48 時間未満）までのキャンセル<br>予定額の50%（交通費は含まない）</h2>
            </div>
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">ご予約をキャンセルしました。<br>予約2時間前(2時間以上～24 時間未満)までのキャンセル<br>予定額の100%（交通費は含まない）</h2>
            </div>
            <div class="c-caution--l job-box">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">ご予約をキャンセルしました。<br>予約2時間未満のキャンセル　予定額の100%（交通費含む）</h2>
            </div>
            <SupporterJobMenu :route-names="routeNames"></SupporterJobMenu>
            <ExeoTableGuardianEstimateFee
              basic-fee="9500"
              basic-fee-description="0000円×5.0時間"
              :list-fee="listFee"
              commission="1500"
              total="14,080"
              :is-show="true"
              title="事前見積もり金額"
            ></ExeoTableGuardianEstimateFee>
            <ExeoTableGuardianEstimateFee
              :list-fee="listFeeFinal"
              basic-fee="0"
              total="0"
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
                  <div class="job-infor__list-desc">家事代行</div>
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
                  <div class="job-infor__list-desc">東京都千代田区100-45-11</div>
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
                  <div class="job-infor__list-desc"><a href="./U006.html">木村　花子</a></div>
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
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-use.svg" alt="ユーザー情報" width="17"> お子様情報</h3>
              <div class="job-infor__list">
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
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/guardian/img/common/icon-file.svg" alt="具体的な依頼内容" width="13"> 具体的な依頼内容</h3>
              <div class="job-infor__note"> 我々は夫婦2人と子供1人の3人家族で、猫が一匹おります。その日のご飯や作り置きなどを依頼したいです。<br>なるべくご都合あわせさせて頂きたいと存じますが、月曜〜金曜のうち、まずはご都合の良いお時間をご確認頂きたく、よろしくお願い致します。 </div>
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
          </div>
          <aside class="l-content__02-r">
            <GuardianRightMenu :use-step="false"></GuardianRightMenu>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu";
import SupporterJobMenu from "@/components/block/SupporterJobMenu";
import ExeoTableGuardianEstimateFee from "@/components/table/ExeoTableGuardianEstimateFee";

export default {
  layout: 'guardian',
  components: {
    GuardianRightMenu,
    SupporterJobMenu,
    ExeoTableGuardianEstimateFee
  },
  data() {
    return {
      listFee: [
        {title: 'オプション料金', cost: '2500', description: '英語学習　+200円/1時間あたり <br> マッサージ　500円/1回あたり'},
        {title: '割引料金', cost: '-500', description: '初回予約割引　-500円/1回あたり'},
        {title: '交通費', cost: '1080', description: '【電車】　〇〇駅⇆〇〇駅　680円（往復） <br> バス】　〇〇⇆〇〇　400円（往復）'},
      ],
      listFeeFinal: [
        {title: 'キャンセル料', cost: '0', description: '基本料金　2500円　予約2日前（48時間前）までのキャンセルは無料'},
        {title: '交通費', cost: '0', description: '【電車】　〇〇駅⇆〇〇駅　680円（往復） <br> バス】　〇〇⇆〇〇　400円（往復）'},
      ],
      routeNames: [
        {
          name: '依頼メッセージ',
          routeName: 'guardian-reservation-detail-request-message'
        },
        {
          name: '依頼詳細',
          routeName: 'guardian-reservation-detail-cancel-detail'
        },
      ]
    }
  }
}
</script>
