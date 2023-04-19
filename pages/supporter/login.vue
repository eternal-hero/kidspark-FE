<template>
  <div id="loginPage">
    <div id="__nuxt">
      <div id="__layout">
        <section>
          <header id="main-header" class="main-header">
            <div class="main-header__inner">
              <span href="/" class="main-header__logo"><img src="@/assets/supporter/img/common/logo.svg" alt="Kids Park" width="230"></span>
            </div>
          </header>
          <div class="wrapper">
            <main class="login">
              <div class="login_inr">
                <h1 class="login_logo"><img src="@/assets/supporter/img/common/logo.svg" alt="Kisd Park"></h1>
                <div class="login_form">
                  <h2 class="login_block__ttl"><span class="icn icn_login">パークサポーターログイン</span></h2>
                  <dl class="login_form_input">
                    <dt>メールアドレス</dt>
                    <dd><input type="text" placeholder="半角英数で入力してください" v-model="form.mail_address"></dd>
                    <dt>パスワード</dt>
                    <dd><input type="password" placeholder="パスワードを入力してください" v-model="form.password">
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
                    <a href="P999-2.html" target="_blank">パスワードをお忘れですか？</a>
                  </div>
                  <div class="modal-login_txt_02">
                    新規登録の方は<a href="https://www.kidspark-support.com/babysitter/" target="_blank">こちら</a>
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
import AuthService from "@/services/supporter/AuthService";

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
  head() {
    return {
      title: 'ログインページ'
    }
  },
  data() {
    return {
      form: {
        mail_address: '',
        password: '',
      }
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
        this.$router.push("info");
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
<style scoped>
@import "@/assets/supporter/css/login.css";
</style>
