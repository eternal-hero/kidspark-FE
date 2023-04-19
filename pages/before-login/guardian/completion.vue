<template>
	<div class="wrapper">
		<main class="site_main">
			<h1 class="form_ttl_01">アカウント作成</h1>
			<div class="form_style_inr_w850">
				<div class="flowlist">
					<ul>
						<li class="on">
							<span><img src="@/assets/before-login/img/newuser/registration/form_list_check_on.png" alt=""></span>
							<span>アドレス<br class="smt">認証</span>
						</li>
						<li class="on">
							<span><img src="@/assets/before-login/img/newuser/registration/form_list_edit_on.png" alt=""></span>
							<span>基本情報<br class="smt">入力</span>
						</li>
						<li class="on">
							<span><img src="@/assets/before-login/img/newuser/registration/form_list_file_on.png" alt=""></span>
							<span>本人確認<span>書類</span><br>アップ<span>ロード</span></span>
						</li>
						<li class="on">
							<span><img src="@/assets/before-login/img/newuser/registration/form_list_completion_on.png" alt=""></span>
							<span>完了</span>
						</li>
					</ul>
				</div>

					<h1 class="form_ttl_02">送信しました。本人確認書類の審査中です。</h1>
					<p class="form_txt_01">サービスをご利用いただくにあたり本人確認書類の審査をさせていただきます。<br>審査結果は30分〜24時間ほどお時間をいただいております。<br>審査が完了次第すぐにパークサポーターへのメッセージ送信や、<br class="pc">予約リクエストを送ることができるようになります。</p>
					<p class="form_txt_01">登録したメールアドレス、PWでログインしていただけます。<br>ログインしてやることリストを確認してください。</p>

					<section class="todo">
						<div class="form_style_inr_w610">
							<div class="form_part_w100p">
								<h2 class="form_ttl_02">やることリスト</h2>
								<ul class="todo_list">
									<li>共通プロフィールを登録しましょう</li>
									<li>サポートエリアを登録しましょう</li>
									<li>プロフィール写真・仕事中のイメージ写真を登録しましょう</li>
									<li>パークサポーター設定をしましょう</li>
									<li>事前面談設定をしましょう</li>
									<li>保有資格をアップロードしましょう</li>
								</ul>
							</div>

							<div class="form_style_inr">
								<button class="btn_style_01 js-modal-open" data-target="mainHeaderLogin" @click.prevent="goToLogin">ログインする</button>
							</div>
						</div>
					</section>
			</div>
		</main>
	</div>
</template>
<script>
export default {
  layout: 'before-login',
  head: {
    script: [
      { src: '/before-login/js/datepicker/jquery-ui.min.js', type: 'text/javascript', body: true },
      { src: '/before-login/js/datepicker/jquery-ui.min.css', type: 'text/javascript', body: true },
      { src: '/before-login/js/datepicker/jquery.ui.datepicker-ja.min.js', type: 'text/javascript', body: true },
      { src: '/before-login/js/registration.js', type: 'text/javascript', body: true },
    ],
	title: "アカウント作成"
  },
  data() {
  },
  methods: {
    goToLogin(){
      window.location.href = '/app/guardian/login';
    }
  }
}
</script>

