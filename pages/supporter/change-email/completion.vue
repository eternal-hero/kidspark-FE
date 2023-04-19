<template>
  <main id="page-P046-5" class="wrapper">
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
            <li class="function-tabs__item">
              <a href="./P046-3.html">
                <span class="function-tabs__img">
                  <img src="@/assets/supporter/img/common/img-ico03.png" alt="アドレス認証" class="function-tabs__img-normal">
                  <img src="@/assets/supporter/img/common/img-ico03white.png" alt="アドレス認証" class="function-tabs__img-white">
                </span>
                <span class="function-tabs__txt"> アドレス認証 </span>
              </a>
            </li>
            <li class="function-tabs__item active">
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
              <h2 class="c-ttl__02 mbpc-18 mbsp-18"> メールアドレスを変更しました。 </h2>
              <p class="c-txt__01 mbpc-27 mbsp-27"> 新しいメールアドレスで再度ログインしてください。 </p>
              <div class="c-control--submit mbpc-15 mbsp-15">
                <a href="./P002.html" class="btn_entry w400">ログインする</a>
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