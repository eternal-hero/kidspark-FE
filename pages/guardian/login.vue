<template>
  <div id="loginPage">
    <div id="__nuxt">
      <div id="__layout">
        <section>
          <header id="main-header" class="main-header">
            <div class="main-header__inner">
              <span class="main-header__logo"><img src="@/assets/guardian/img/common/logo.svg" alt="Kids Park" width="230"></span>
            </div>
          </header>
          <div class="wrapper">
            <main class="login">
              <div class="login_inr">
                <h1 class="login_logo"><img src="@/assets/guardian/img/common/logo.svg" alt="Kisd Park"></h1>
                <div class="login_form">
                  <h2 class="login_block__ttl"><span class="icn icn_login">保護者様ログイン</span></h2>
                  <dl class="login_form_input">
                    <dt>メールアドレス</dt>
                    <dd><input type="email" v-model="form.mail_address" placeholder="半角英数で入力してください" class="login_form_text"></dd>
                    <dt>パスワード</dt>
                    <dd><input type="password" v-model="form.password" placeholder="パスワードを入力してください" class="login_form_text">
                    </dd>
                    <dd></dd>
                  </dl>
                  <!-- <div class="modal-login-checkbox">
                    <input type="checkbox" value="" id="modalLoginCheckbox" checked="checked">
                    <label for="modalLoginCheckbox">ログイン情報を保持する</label>
                  </div> -->
                  <div class="login_btn_area" @click="postLogin"><button>
                      ログイン
                    </button></div>
                  <!-- <div class="modal-login_txt_01">
                    <a href="U999-2.html" target="_blank">パスワードをお忘れですか？</a>
                  </div>
                  <div class="modal-login_txt_02">
                    新規登録の方は<a href="https://www.kids-parks.com/newuser/" target="_blank">こちら</a>
                  </div> -->
                </div>
              </div>
            </main>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import AuthService from "@/services/guardian/AuthService";

export default {
  name: 'LoginPage',
  components: {
    // ExeoHeader
  },
  head() {
    return {
      title: 'ログインページ'
    }
  },
  data() {
    return {
      form: {}
    };
  },
  methods: {
    async postLogin() {
      try{
        const data = await AuthService.postLogin(this.form);
        const token = data.token
        this.$cookies.set('auth_token', token, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7,
          // httpOnly: true
          sameSite: true,
          // secure: true
        })
        // Redirect
        this.$router.push("dashboard");
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style scoped>
@import "@/assets/guardian/css/login.css";
</style>
