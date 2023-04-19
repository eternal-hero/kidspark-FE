<template>
<div class="wrapper">
		<main class="site_main">
			<h1 class="form_ttl_01">アカウント作成</h1>
			<div class="form_style">
				<div class="flowlist">
					<ul>
						<li class="on">
							<span><img src="@/assets/before-login/img/newuser/registration/form_list_addr_on.png" alt=""></span>
							<span>アドレス認証</span>
						</li>
						<li>
							<span><img src="@/assets/before-login/img/newuser/registration/form_list_edit.png" alt=""></span>
							<span>基本情報入力</span>
						</li>
						<li>
							<span><img src="@/assets/before-login/img/newuser/registration/form_list_file.png" alt=""></span>
							<span>本人確認書類<br>アップロード</span>
						</li>
						<li>
							<span><img src="@/assets/before-login/img/newuser/registration/form_list_completion.png" alt=""></span>
							<span>完了</span>
						</li>
					</ul>
				</div>
				<div class="form_style_inr">
					<h1 class="form_ttl_02">認証コード入力</h1>
					<div class="form_txt_01">
						<p>登録したメールアドレス宛に認証コードを送信しました。</p>
					</div>
					<div class="form_part_w100p">
						<input v-model="authCode" type="text" placeholder="6桁のコードを入力してください">
					</div>
					<div class="form_part_w100p">
						<button @click.prevent="sendAuthCode" class="btn_style_01">送信</button>
					</div>
					<div class="form_txt_02">
						<p class="resend_mail"><a @click.prevent="resendMail">認証コードを再送する</a></p>
					</div>
				</div>
			</div>
		</main>
</div>
</template>
<script>
import GuardianService from "@/services/before-login/GuardianService";
export default {
  layout: 'before-login',
  head() {
    return {
      title: 'アカウント作成'
    }
  },
  data() {
    return{
      authCode : ""
    }
  },
  mounted () {
    window.addEventListener("beforeunload", this.confirmSave);
    if(this.$store.state.beforeLogin.guardian.registeredMailAddress == null){
      this.$router.push("/before-login/guardian/registration");
    }
  },
  destroyed () {
    window.removeEventListener("beforeunload", this.confirmSave);
  },
  methods: {
    confirmSave (event) {
      event.returnValue = "登録処理を最初からやり直していただく必要があります。よろしいですか？";
    },
  async sendAuthCode() {
    try{
      const mailAddress = this.$store.state.beforeLogin.guardian.registeredMailAddress;
      const authCode = this.authCode;
      const tmpUserInfo = await GuardianService.emailVerified(mailAddress,authCode);
      this.$store.dispatch('beforeLogin/guardian/tmpUserInfo',tmpUserInfo );
      this.$store.dispatch('beforeLogin/guardian/authCode',tmpUserInfo.auth_code );
      this.$router.push("/before-login/guardian/user-info");
    }
    catch(e){
      if(e.response.data.status.code == 400){
        alert(e.response.data.status.message.auth_code);
      }else{
         alert(e.response.data.status.message);
      }

    }
  },
  async resendMail() {
    try{
      const mailAddress = this.$store.state.beforeLogin.guardian.registeredMailAddress;
      const response = await GuardianService.resendMail(mailAddress);
      alert("認証メールを再送しました。")
    }
    catch(e){
      if(e.response.data.status.code == 400){
        alert(e.response.data.status.message.auth_code);
      }else{
         alert(e.response.data.status.message);
      }

    }
  }

}
}
</script>
<style scoped>
.resend_mail{
  cursor: pointer;
}
</style>

