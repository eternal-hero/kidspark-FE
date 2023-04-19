<template>
  <div class="l-content__02 pd-0--sp">
    <div class="l-content__02-l" v-for="(card, index) in cards">
      <a v-if="canLink" href="./U058.html" class="supporter-list"></a>
      <img v-else src="@/assets/guardian/img/U008/img-pointer.png" alt="右上のハートを押すとフォローできます">
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
        <div class="quote-list__box-price-item"><img src="@/assets/guardian/img/common/icon-fee.svg" alt="icon" width="30">
          1500<span>円<span>/1時間</span></span></div>
        <div class="quote-list__box-price-item smt-hidden"><img src="@/assets/guardian/img/common/icon-fee02.svg" alt="icon" width="30">
          1400<span>円<span>/1時間</span></span></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SupportedItemCard',

  props: {
    canLink: {
      type: Boolean,
      default: true
    },
    cards: {
      type: Array,
    },
  },
}
</script>

