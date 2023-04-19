<template>
  <main id="page-P046" class="wrapper">
    <section class="sec-function">
      <div class="inner">
        <h1 class="c-ttl__01 c-al--c c-ttl__01--sp"> メールアドレスを変更する </h1>
        <div class="function-block">
          <ul class="function-tabs js-tabs">
            <li class="function-tabs__item active">
              <a href="./P046.html">
									<span class="function-tabs__img">
										<img src="@/assets/supporter/img/common/img-ico01.png" alt="アドレス入力" class="function-tabs__img-normal">
										<img src="@/assets/supporter/img/common/img-ico01white.png" alt="アドレス入力" class="function-tabs__img-white">
									</span>
                <span class="function-tabs__txt"> アドレス入力 </span>
              </a>
            </li>
            <li class="function-tabs__item">
              <a href="./P046-3.html">
									<span class="function-tabs__img">
										<img src="@/assets/supporter/img/common/img-ico03.png" alt="アドレス認証" class="function-tabs__img-normal">
										<img src="@/assets/supporter/img/common/img-ico03white.png" alt="アドレス認証" class="function-tabs__img-white">
									</span>
                <span class="function-tabs__txt"> アドレス認証 </span>
              </a>
            </li>
            <li class="function-tabs__item">
              <a href="./P046-5.html">
									<span class="function-tabs__img">
										<img src="@/assets/supporter/img/common/img-ico02.png" alt="完了" class="function-tabs__img-normal">
										<img src="@/assets/supporter/img/common/img-ico02white.png" alt="完了" class="function-tabs__img-white">
									</span>
                <span class="function-tabs__txt"> 完了 </span>
              </a>
            </li>
          </ul>
          <div class="function-ct">
            <div class="function-ctsub">
              <p class="c-txt__01 mbpc-30 mbsp-37"> 「認証コードを送信」ボタンを押すと、新しいアドレス宛に認証コードが届きます。 </p>
              <form class="function-form c-txt__01">
                <div class="function-form__group">
                  <div class="function-form__group-td"> 現在のメールアドレス </div>
                  <div class="function-form__group-dd">
                    <a href="mailto:kidspark@gmail.com">kidspark@gmail.com</a>
                  </div>
                </div>
                <div class="function-form__group mbpc-28 mbsp-24">
                  <div class="function-form__group-td"> 新しいメールアドレス </div>
                  <div class="function-form__group-dd">
                    <input type="email" placeholder="例）example@kids-parks.com" class="form-edit__input form-edit__input--bg js-ctinput">
                  </div>
                </div>
                <div class="c-control--submit">
                  <a href="#" class="btn_back w100">もどる</a>
                  <button type="submit" class="btn_entry btn_entry--disabled js-btn__able">認証コードを送信</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'supporter',
  head() {
    return {
      title: 'メールアドレスを変更する'
    }
  },
}
</script>

<style scoped>

</style>
