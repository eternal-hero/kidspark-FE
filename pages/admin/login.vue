<template>
<section>
  <exeo-header/>
	<div class="wrapper">
		<main class="login">
			<div class="login_inr">
				<h1 class="login_logo"><img src="@/assets/admin/img/common/logo2.png" alt="Kisd Park"></h1>
				<div class="login_form">
					<dl class="login_form_input">
            <dt>メールアドレス</dt>
						<dd>
              <exeo-form
              v-model="form.mail_address"
              placeholder="半角英数で入力してください"/>
            </dd>
            <dt>パスワード</dt>
						<dd>
              <exeo-form
              v-model="form.password"
              placeholder="パスワードを入力してください"/>
							<p class="login_form_com">※ログインができない場合は、制作部までご連絡ください</p>
						</dd>
						<dd></dd>
					</dl>
					<div class="login_btn_area">
						<button @click.prevent="postLogin()"
            >
              ログイン
            </button>
					</div>
				</div>
			</div>
		</main>
	</div>
</section>
</template>
<script>
import ExeoForm from "~/components/form/ExeoForm.vue"
import ExeoHeader from "~/components/other/ExeoHeader.vue"
import AuthService from "@/services/admin/AuthService";

export default {
  name: 'LoginPage',
  components: {
    ExeoForm,
    ExeoHeader
  },
  head() {
    return {
      title: 'ログイン '
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
@import "~/assets/admin/css/reset.css";
@import "~/assets/admin/css/common.css";
@import "~/assets/admin/css/login.css";
</style>
