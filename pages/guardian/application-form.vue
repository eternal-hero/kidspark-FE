<template>
  <main id="page-U013" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><span class="current">申請フォーム</span>
      </div>
    </div>
    <section class="sec-application">
      <div class="inner">
        <h1 class="c-ttl__01">申請フォーム</h1>
        <div class="l-content">
          <div class="l-content__body">
            <h2 class="c-ttl__02">各種申請はこちらから申請してください。</h2>
            <p class="c-txt__01 mbpc-33 mbsp-35"> 該当の申請フォームより各種申請をお願いいたします。<br> 申請内容について分からないことがある場合は<a href="https://www.kids-parks.com/faq/" target="_blank">よくある質問</a>をご覧ください。 </p>
            <ul class="application-list">
              <li class="application-item">
                <h3 class="application-item__ttl"> 保険関連 </h3>
                <span class="application-item__ico">
										<img src="~/assets/guardian/img/U013/img-icoapp02.png" alt="保険関連">
									</span>
                <a href="./U014.html" class="application-item__link">保険申請</a>
              </li>
              <li class="application-item">
                <h3 class="application-item__ttl"> その他 </h3>
                <span class="application-item__ico">
										<img src="~/assets/guardian/img/U013/img-icoapp03.png" alt="その他">
									</span>
                <!--<a href="./U015.html" class="application-item__link">見守りカメラレンタル申請</a>-->
                <a href="./U016.html" class="application-item__link">退会申請</a>
                <a href="../demo/P047-2.html" class="application-item__link">住所変更申請</a>
                <a href="../demo/P047.html" class="application-item__link">名前変更申請</a>
              </li>
              <li class="application-item">
                <h3 class="application-item__ttl"> 法人 </h3>
                <span class="application-item__ico">
										<img src="~/assets/guardian/img/U013/img-icoapp01.png" alt="法人">
									</span>
                <a href="./U017.html" class="application-item__link">内閣府ベビーシッター割引券の対象申請</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  layout: 'guardian',
  head() {
    return {
      title: '申請フォーム'
    }
  },
}
</script>

<style>

</style>
