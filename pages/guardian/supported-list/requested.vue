<template>
  <main id="page-U008-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="./U008.html">パークサポーター一覧</a><span class="current">依頼したことのあるパークサポーター</span>
      </div>
    </div>
    <section class="sec-myprofile">
      <div class="inner">
        <h1 class="c-ttl__01">パークサポーター一覧</h1>
        <div class="nav-scroll">
          <ul class="m-subnav">
            <li class="m-subnav__item"><NuxtLink to="/guardian/supported-list/followed">フォローした<u class="smt-hidden">パーク</u>サポーター</NuxtLink></li>
            <li class="m-subnav__item is-active"><NuxtLink to="/guardian/supported-list/requested">依頼したことのある<u class="smt-hidden">パーク</u>サポーター</NuxtLink></li>
          </ul>
        </div>
        <div class="myprofile-box">
          <div class="c-al--c">
            <a href="https://www.kids-parks.com/search/babysitter/" class="btn_entry w375" tabindex="0" target="_blank">パークサポーターを検索する</a>
          </div>
          <div class="howto">
            <p>パークサポーター検索ページから希望条件で検索して、<br>気になるサポーターさんをフォローしましょう！</p>
            <p><strong>右上のハートを押すとフォローできます</strong></p>
          </div>
          <div class="l-content__02 pd-0--sp">

            <div class="l-content__02-l">
              <img src="@/assets/guardian/img/U008/img-pointer.png" alt="右上のハートを押すとフォローできます">
              <div class="myprofile-img">
                <img src="@/assets/guardian/img/U008/img-main.jpg" alt="自分のプロフィール">
              </div>
              <div class="myprofile-ct">
                <div class="myprofile-comment">
                  <p>笑顔で明るく！それぞれのご家庭に寄り添った楽しい保育を。</p>
                </div>
                <div class="myprofile-user">
                  <div class="use-box__address">
                    <img src="@/assets/guardian/img/common/icn_gps.svg" alt="東京都千代田区" width="11">
                    <div class="use-box__address-desc">東京都千代田区</div>
                  </div>
                </div>
                <div class="user-status user-heading">
                  <div class="user-status__medal">
                    <span class="user-status__medal--regular"></span>
                  </div>
                  <div class="user-status__star">
                    <span class="user-status__star-icn" data-rate="4.5"></span>
                  </div>
                  <div class="user-status__num">（<span class="txt-underline">15</span>）</div>
                </div>
                <div class="sidebar-tags__item sidebar-tags__item--bd naikakufu_waribiki"><span>内閣府割引券対象</span></div>
                <ul class="sidebar-tags">
                  <li class="sidebar-tags__item discount"><span>内閣府割引券対象</span></li>
                  <li class="sidebar-tags__item active"><span>ベビーシッター</span></li>
                  <li class="sidebar-tags__item active"><span>病児保育</span></li>
                  <li class="sidebar-tags__item active"><span>産前産後</span></li>
                  <li class="sidebar-tags__item active pc"><span>家事代行</span></li>
                </ul>
                <div class="sidebar-ages__w">
                  <div class="sidebar-ages__heading c-txt__02">
                    <span>保育可能年齢</span>
                    <span class="c-green">0歳6ヶ月以上</span>
                  </div>
                  <div class="sidebar-ages__heading c-txt__02">
                    <span>保育可能人数</span>
                    <span class="c-green">〜3人</span>
                  </div>
                  <div class="sidebar-ages__heading c-txt__02">
                    <span>最低依頼時間</span>
                    <span class="c-green">1時間</span>
                  </div>
                </div>
                <div class="myprofile-heart">
                  <div class="myprofile-heartsub js-wishlist">
											<span class="icon">
												<label class="form-edit__checkbox js-wishlist__icon">
													<input type="checkbox" class="checks">
													<span class="checkmark"></span>
													<img src="@/assets/guardian/img/U008/img-heart.png" alt="フォローする" width="30" class="img-normal">
													<img src="@/assets/guardian/img/U008/img-heart01.png" alt="フォローする" width="30" class="img-heart">
												</label>
											</span>
                  </div>
                </div>
              </div>
              <div class="quote-list__box-price">
                <div class="quote-list__box-price-item"><img src="@/assets/guardian/img/common/icon-fee.svg" alt="icon" width="30"> 1500<span>円<span>/1時間</span></span></div>
                <div class="quote-list__box-price-item smt-hidden"><img src="@/assets/guardian/img/common/icon-fee02.svg" alt="icon" width="30"> 1400<span>円<span>/1時間</span></span></div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>

export default {
  layout: 'guardian',
  data() {
    return {
      card: {id: 1},
    }
  },
}
</script>

<style scoped>
.main-header {
  z-index: 300;
}
.smt-hidden {
  text-decoration: none;
}
.sec-myprofile .sidebar-ages__w {
  display: none;
}
.myprofile-box {
  padding: 43px 0 63px;
  background: #fff;
}
.sec-myprofile .l-content__02 {
  grid-template-columns: none;
  gap: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 330px;
  margin: 0 auto;
}
.l-content__02-l {
  border: 1px solid #E0E1E3;
  position: relative;
  width: 100%;
  max-width: 330px;
}
.l-content__02-l:after {
  content: "";
  display: block;
  padding-top: 50px;
}
a.supporter-list {
  position: absolute;
  height:100%;
  width: 100%;
  z-index: 100;
}
a.supporter-list:hover {
  background: #fff;
  z-index: 100;
  opacity: 0.5;
}
.myprofile-ct {
  position: initial;
  padding-left: 0;
}
.myprofile-heart {
  top: 10px;
  right: 10px;
  z-index: 200;
}
.myprofile-user {
  margin-top: 0;
}
.myprofile-ct .use-box__address {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 11px;
}
.quote-list__box-price {
  padding: 10px;
  background: #E8F7FB;
  position: absolute;
  bottom: 0;
  width: 100%;
}
.sidebar-tags__item.discount {
  color: #5BC0DE;
  border: 1px solid #5BC0DE;
  background: #fff;
  border-radius: 0;
  display: block;
  margin-right: 100%;
  word-break: keep-all;
}
.myprofile-ct .myprofile-comment{
  padding: 0 10px;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.2;
  text-align: justify;
  margin-bottom: 10px;
}
.myprofile-ct .user-heading {
  margin-bottom: 2px;
}
.myprofile-img {
  margin-bottom: 10px;
}
.c-al--c {
  margin-bottom: 43px;
}
.howto {
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
.howto p {
  font-weight: 500;
  font-size: 1.4rem;
  line-height: 2.0;
  margin-bottom: 10px;
}
.l-content__02-l > img {
  position: absolute;
  top: -10px;
  right: -5px;
  width: 70px;
}
@media screen and (max-width: 800px) {
  .l-content__02-l {
    width: 100%;
    max-width: 330px;
  }
  .sec-myprofile .l-content__02 {
    gap: 20px 10px;
    width: auto;
  }
  .myprofile-box {
    padding: 30px 0;
  }
  .myprofile-box .l-content__02 {
    padding: 0 ;
    margin: 0 auto;
    width: 680px;
    max-width: 100%;
  }
  .sidebar-tags {
    display: none;
  }
  .sec-myprofile .sidebar-ages__w {
    display: flex;
    margin-bottom: 0;
    padding-left: 11px;
  }
  .smt-hidden {
    display: none;
  }
  .c-al--c {
    margin-bottom: 30px;
  }
  .sec-myprofile .sidebar-ages__w .sidebar-ages__heading {
    padding-left: 0;
  }
  .sec-myprofile .sidebar-ages__w .sidebar-ages__heading {
    margin-right: 0;
    padding-right: 0;
    padding-left: 0;
    margin-bottom: 8px;
    min-width: 55%;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .sec-myprofile .sidebar-ages__w .sidebar-ages__heading:last-child {
    padding-right: 0;
    margin-right: 0;
    margin-bottom: 14px;
  }
  .sec-myprofile .sidebar-ages__w .sidebar-ages__heading:after {
    content: none;
  }
  .myprofile-ct .user-heading {
    margin-bottom: 10px;
  }
}
@media screen and (max-width: 640px) {
  .sec-myprofile .sidebar-ages__w .sidebar-ages__heading {
    padding-left: 0;
  }
  .myprofile-ct .myprofile-comment{
    font-size: 1.4rem;
    line-height: 1.4;
  }
}
@media screen and (max-width: 480px) {
  .c-txt__02 {
    font-size: 1.1rem;
  }
  .use-box__address {
    font-size: 1.1rem;
  }
  .myprofile-ct .user-heading .user-status__star > span {
    width: 80px;
    height: 16px;
  }
  .myprofile-ct .user-heading .user-status__star > span:after {
    background-size: auto 85%;
  }
  .sec-myprofile .sidebar-ages__w .sidebar-ages__heading span:first-child {
    margin-right: 10px;
  }
  .howto p {
    font-size: 1.35rem;
  }
}
</style>