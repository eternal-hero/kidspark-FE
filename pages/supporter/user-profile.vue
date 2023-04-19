<template>
  <main id="page-P023-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">メッセージ</a><span class="current">木村花子さんのプロフィール</span>
      </div>
    </div>
    <section class="sec-review">
      <div class="inner">
        <h1 class="sec-review__ttl c-ttl__01">ユーザープロフィール</h1>
        <div class="l-content__03">
          <aside class="l-content__03-l">
          <ExeoTableSupporterProfileBox
            name="木村　花子"
            address="東京都千代田区"
            rate="3.5"
            number-request="30"
            :booking-success="100"
            :response-rate="100"
            :cancellation-rate="0"
          ></ExeoTableSupporterProfileBox>
          </aside>
          <div class="l-content__3-r">
            <div class="job-infor job-infor--02 c-txt__01">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-cmt.svg" alt="自己紹介" width="17">自己紹介</h3>
              <p>夫婦が共働き、また祖父母も遠方に住んでいるため、仕事の都合上こどもの面倒を見れない時にベビーシッターを利用したいと考えています。（例）子どもと楽しく遊んでくれるベビーシッターさん出会えることを楽しみにしています^^</p>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-use.svg" alt="ユーザー情報" width="17">ユーザー情報</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">お名前</div>
                  <div class="job-infor__list-desc">木村　花子</div>
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
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icon-injection.svg" alt="新型コロナウイルスワクチン接種状況" width="17">新型コロナウイルスワクチン接種状況</h3>
              <div class="job-infor__list">
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">接種回数</div>
                  <div class="job-infor__list-desc">3回</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">最新接種日付</div>
                  <div class="job-infor__list-desc">2022年07月20日(水) 15:00</div>
                </div>
              </div>
            </div>
            <div class="job-infor">
              <h3 class="job-infor__ttl"><img src="@/assets/supporter/img/common/icn_gps.svg" alt="サポート場所" width="11">サポート場所</h3>
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
                  <div class="job-infor__list-desc">バス</div>
                </div>
                <div class="job-infor__list-item">
                  <div class="job-infor__list-ttl">最寄り駅までの所要時間</div>
                  <div class="job-infor__list-desc">15分</div>
                </div>
              </div>
            </div>
            <div class="review-block">
              <h3 class="review-block__ttl c-ttl__02">サポーターからのレビュー</h3>
              <ul class="review-block__list c-txt__01 js-accordion">
                <ExeoTableSupporterReviewBox v-for="review in listReview" :rate="review.rate" :date="review.date" :message="review.message"></ExeoTableSupporterReviewBox>
              </ul>
              <div class="review-block__btn c-al--c">
                <span class="js-btn-more btn_more">もっとみる</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ExeoTableSupporterProfileBox from "@/components/table/ExeoTableSupporterProfileBox";
import ExeoTableSupporterReviewBox from "@/components/table/ExeoTableSupporterReviewBox";

export default {
  layout: 'supporter',
  components: {
    ExeoTableSupporterProfileBox,
    ExeoTableSupporterReviewBox
  },
  head() {
    return {
      title: 'ユーザープロフィール'
    }
  },
  data () {
    return {
      listReview: [
        {rate: 5, date: '2022年12月', message: 'ヒヤリングの際とても丁寧に教えていただき仕事が大変やりやすかったです。お子様もあまりわがままを言わないタイプの子でとても楽しく一緒におそんだりできました。'},
        {rate: 5, date: '2022年12月', message: 'ヒヤリングの際とても丁寧に教えていただき仕事が大変やりやすかったです。お子様もあまりわがままを言わないタイプの子でとても楽しく一緒におそんだりできました。'},
        {rate: 5, date: '2022年12月', message: 'ヒヤリングの際とても丁寧に教えていただき仕事が大変やりやすかったです。お子様もあまりわがままを言わないタイプの子でとても楽しく一緒におそんだりできました。'},
        {rate: 5, date: '2022年12月', message: 'ヒヤリングの際とても丁寧に教えていただき仕事が大変やりやすかったです。お子様もあまりわがままを言わないタイプの子でとても楽しく一緒におそんだりできました。'},
        {rate: 5, date: '2022年12月', message: 'ヒヤリングの際とても丁寧に教えていただき仕事が大変やりやすかったです。お子様もあまりわがままを言わないタイプの子でとても楽しく一緒におそんだりできました。'},
        {rate: 5, date: '2022年12月', message: 'ヒヤリングの際とても丁寧に教えていただき仕事が大変やりやすかったです。お子様もあまりわがままを言わないタイプの子でとても楽しく一緒におそんだりできました。'},
        {rate: 5, date: '2022年12月', message: 'ヒヤリングの際とても丁寧に教えていただき仕事が大変やりやすかったです。お子様もあまりわがままを言わないタイプの子でとても楽しく一緒におそんだりできました。'},
        {rate: 5, date: '2022年12月', message: 'ヒヤリングの際とても丁寧に教えていただき仕事が大変やりやすかったです。お子様もあまりわがままを言わないタイプの子でとても楽しく一緒におそんだりできました。'}
      ]
    }
  }
}
</script>
