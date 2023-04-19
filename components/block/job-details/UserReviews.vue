<template>
  <div class="job-infor">
    <h3 class="job-infor__ttl">ユーザーへのレビュー</h3>
    <div class="review-block">
      <ul class="review-block__list c-txt__01">
        <li class="review-block__list-item">
          <div class="review-block__list-img"><img src="~/assets/supporter/img/common/icn-user.png" alt="サポーターからのレビュー"></div>
          <div class="review-block__list-ct">
            <div class="review-block__list-meta">
              <div class="user-heading">
                <div class="user-status">
                  <div class="user-status__star">
                    <span class="user-status__star-icn" data-rate="5"></span>
                  </div>
                </div>
              </div>
              <span class="review-block__list-date">2022年12月</span>
            </div>
            <p>ヒヤリングの際とても丁寧に教えていただき仕事が大変やりやすかったです。お子様もあまりわがままを言わないタイプの子でとても楽しく一緒におそんだりできました。</p>
          </div>
        </li>
      </ul>
      <p class="c-txt__03">レビューの内容は、ユーザーには表示されません。他のサポーターが、仕事依頼を受けた際に参考としてレビューを見ることができます。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserReviews",
};
</script>

<style scoped>

</style>
