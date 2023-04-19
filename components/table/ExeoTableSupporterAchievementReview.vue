<template>
  <div>
    <div class="achievement-block__ttl c-ttl__02">
      <span>レビュー</span>
      <div class="statuschips tooltip"><span></span><p class="tooltip__txt">ユーザーからのレビューは順不同、匿名です。</p></div>
    </div>
    <div data-tabs="">
      <div class="m-tabs">
        <div class="m-tabs__item is-active" data-tab="">すべて</div>
        <div class="m-tabs__item" data-tab="">ベビーシッター</div>
        <div class="m-tabs__item" data-tab="">家事代行</div>
      </div>
      <div class="m-tabs__content-content">
        <div class="m-tabs__content-item is-active" data-tab-content="">
          <div class="review-block review-block--02">
            <ul class="review-block__list c-txt__01">
              <li v-for="review in reviewList" class="review-block__list-item">
                <div class="review-block__list-img"><img src="" alt="サポーターからのレビュー"></div>
                <div class="review-block__list-ct">
                  <div class="review-block__list-meta">
                    <div class="user-heading">
                      <div class="user-status">
                        <div class="user-status__star">
                          <span class="user-status__star-icn" :data-rate="review.rateStar"></span>
                        </div>
                      </div>
                    </div>
                    <span class="review-block__list-date">{{ review.date }}</span>
                  </div>
                  <p>{{ review.content }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="m-tabs__content-item" data-tab-content="">
          <div class="review-block review-block--02">
            <ul class="review-block__list c-txt__01">
              <li v-for="review in reviewList" class="review-block__list-item">
                <div class="review-block__list-img"><img src="" alt="サポーターからのレビュー"></div>
                <div class="review-block__list-ct">
                  <div class="review-block__list-meta">
                    <div class="user-heading">
                      <div class="user-status">
                        <div class="user-status__star">
                          <span class="user-status__star-icn" :data-rate="review.rateStar"></span>
                        </div>
                      </div>
                    </div>
                    <span class="review-block__list-date">{{ review.date }}</span>
                  </div>
                  <p>{{ review.content }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="m-tabs__content-item" data-tab-content="">
          <div class="review-block review-block--none c-txt__01">
            <p>レビューはありません</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoTableSupporterAchievementReview",
  props: {
    reviewList: {
      type: Object,
      default: [
        {avatar: '', rateStar: '5', content: 'この度もありがとうございました。はなこもとても楽しかったと言っていました。またよろしくお願いします(*^◯^*) ', date: '2022年12月'},
        {avatar: '', rateStar: '5', content: '初めて利用させていただきましたが、人見知り真っ盛りの子どもが、抱っこされても泣くことがなく、本当にすばらしい対応でサポートしていただきました。', date: '2022年12月'},
        {avatar: '', rateStar: '5', content: '久々の再会で、最初は泣いてしまいましたが、すぐに遊びに切り替わってさすがはプロだなと思いました。', date: '2022年12月'},
        {avatar: '', rateStar: '5', content: '久々の再会で、最初は泣いてしまいましたが、すぐに遊びに切り替わってさすがはプロだなと思いました。', date: '2022年12月'},
        {avatar: '', rateStar: '5', content: '久々の再会で、最初は泣いてしまいましたが、すぐに遊びに切り替わってさすがはプロだなと思いました。', date: '2022年12月'},
        {avatar: '', rateStar: '5', content: '久々の再会で、最初は泣いてしまいましたが、すぐに遊びに切り替わってさすがはプロだなと思いました。', date: '2022年12月'},
        {avatar: '', rateStar: '5', content: '久々の再会で、最初は泣いてしまいましたが、すぐに遊びに切り替わってさすがはプロだなと思いました。', date: '2022年12月'},
        {avatar: '', rateStar: '5', content: '久々の再会で、最初は泣いてしまいましたが、すぐに遊びに切り替わってさすがはプロだなと思いました。', date: '2022年12月'},
        {avatar: '', rateStar: '5', content: '久々の再会で、最初は泣いてしまいましたが、すぐに遊びに切り替わってさすがはプロだなと思いました。', date: '2022年12月'},
        {avatar: '', rateStar: '5', content: '久々の再会で、最初は泣いてしまいましたが、すぐに遊びに切り替わってさすがはプロだなと思いました。', date: '2022年12月'},
      ]
    }
  }
}
</script>
