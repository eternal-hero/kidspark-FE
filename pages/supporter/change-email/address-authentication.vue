<template>
  <main id="page-P046-3" class="wrapper">
    <section class="sec-function">
      <div class="inner">
        <h1 class="c-ttl__01 c-al--c c-ttl__01--sp"> メールアドレスを変更する </h1>
        <div class="function-block">
          <ul class="function-tabs js-tabs">
            <li class="function-tabs__item">
              <a href="./P046.html">
									<span class="function-tabs__img">
										<img src="@/assets/supporter/img/common/img-ico01.png" alt="アドレス入力" class="function-tabs__img-normal">
										<img src="@/assets/supporter/img/common/img-ico01white.png" alt="アドレス入力" class="function-tabs__img-white">
									</span>
                <span class="function-tabs__txt"> アドレス入力 </span>
              </a>
            </li>
            <li class="function-tabs__item active">
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
              <h2 class="c-ttl__02 mbpc-18 mbsp-18"> 認証コード入力 </h2>
              <p class="c-txt__01 mbpc-27 mbsp-27"> 登録したメールアドレス宛に認証コードを送信しました。 </p>
              <form class="function-form c-txt__01">
                <div class="function-form__group mbpc-28 mbsp-24">
                  <div class="function-form__group-dd">
                    <input type="text" placeholder="6桁のコードを入力してください" class="form-edit__input form-edit__input--bg js-ctinput01">
                  </div>
                </div>
                <div class="c-control--submit mbpc-15 mbsp-15">
                  <button type="submit" class="btn_entry btn_entry--disabled js-btn__able01">送信</button>
                </div>
              </form>
              <div class="c-al--c">
                <a href="" class="c-btn__06 c-btn__06--md">認証コードを再送する</a>
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
