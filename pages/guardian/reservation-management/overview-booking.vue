<template>
  <main id="page-U018-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細(Web事前面談)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box mbsp-20">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">予約リクエストを確認してください。</h2>
            </div>
            <div class="use-request_01">
              <UserAvatarBox :user="user" :format="1"></UserAvatarBox>
              <ul class="sidebar-tags">
                <li class="sidebar-tags__item active"><span>ベビーシッター</span></li>
                <li class="sidebar-tags__item active"><span>家事代行</span></li>
              </ul>
              <dl class="possible_list">
                <dt>保育可能年齢</dt>
                <dd>0歳6ヶ月以上</dd>
                <dt>保育可能人数</dt>
                <dd>〜3人</dd>
                <dt>最低依頼時間</dt>
                <dd>1時間</dd>
              </dl>
            </div>
            <ExeoTableGuardianEstimateFee
              title="予定合計金額"
              :basic-fee="600"
              basic-fee-description="1200円×0.5時間"
              :commission="0"
              :total="600"
            ></ExeoTableGuardianEstimateFee>
            <div class="c-txt__04">上記は予想金額となります。予約リクエスト送信後、ユーザーからお見積もりが届きますので、そちらの価格を確認してください。</div>
            <div class="job-infor">
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">依頼カテゴリー</div>
                  <div class="job-infor__list-desc">ベビーシッター</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">予約内容</div>
                  <div class="job-infor__list-desc">WEB事前面談（初回必須）</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">予約希望日</div>
                  <div class="job-infor__list-desc">2022年07月20日(水)</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">開始</div>
                  <div class="job-infor__list-desc">2022年07月20日(水) 12:00</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">終了</div>
                  <div class="job-infor__list-desc">2022年07月20日(水) 13:00</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">面談場所</div>
                  <div class="job-infor__list-desc">その他<br>住所：東京都渋谷000 〇〇カフェ<br>最寄り駅：山手線 秋葉原駅<br>最寄り駅までの交通手段：徒歩<br>最寄り駅までの所要時間：10分<br>面談場所までの行き方：駅からまっすぐ</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">面談するお子様</div>
                  <div class="job-infor__list-desc">さなちゃん（女の子/3歳2ヶ月）</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">面談で聞きたいことなど</div>
                  <div class="job-infor__list-desc">いままでの保育のご経験など聞ければ嬉しいです。</div>
                </div>
              </div>
            </div>
            <div class="request-note">
              <h3 class="c-ttl__02 mbpc-10">登録内容の公開範囲について</h3>
              <p class="c-txt__01">登録内容の公開範囲はお仕事予約確定前と後などで公開される内容が異なります。<br><a href="https://www.kids-parks.com/faq/profile-2/164/" class="txt-link" target="_blank">詳しくはこちら</a>をご覧ください。<br>
              </p>
            </div>
            <div class="c-control--submit mw-500">
              <a href="./U036-2.html" class="btn_back w155 w100-sp">もどる</a>
              <NuxtLink to="/guardian/reservation-detail/web-pre-interview/booking-detail" class="btn_entry">
                リクエストを送信する
              </NuxtLink>
            </div>
          </div>
          <aside class="l-content__02-r">
            <GuardianRightMenu :use-user-info="false" step-active="1"></GuardianRightMenu>
            <QuestionBox :questions="questions"></QuestionBox>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import UserAvatarBox from "@/components/block/UserAvatarBox";
import ExeoTableGuardianEstimateFee from "@/components/table/ExeoTableGuardianEstimateFee";
import GuardianRightMenu from "@/components/block/GuardianRightMenu";
import QuestionBox from "@/components/block/QuestionBox";

export default {
  layout: 'guardian',
  components: {
    UserAvatarBox,
    ExeoTableGuardianEstimateFee,
    GuardianRightMenu,
    QuestionBox
  },
  data() {
    return {
      user: {
        address: '東京都中央区',
        rating: 3.5
      },
      questions: [
        {
          url: 'https://www.kids-parks.com/faq/request/177/',
          name: '予約リクエストの作成方法'
        },
        {
          url: 'https://www.kids-parks.com/faq/request-2/180/',
          name: '予約リクエストの内容変更、依頼取り消しについて'
        },
        {
          url: 'https://www.kids-parks.com/faq/flow-2/183/',
          name: 'サポート開始までの流れ'
        }
      ],
    }
  }
}
</script>
