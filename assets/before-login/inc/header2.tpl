<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NNXXNBJ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<header id="main-header" class="main-header">
	<div class="main-header__inner">
		<a href="./" class="main-header__logo"><img src="/assets/img/common/logo.svg" alt="Kids Park" width="230"></a>
		<nav class="main-header__navGlobal">
			<ul class="main-header__menu pc">
				<!--li class="main-header__menu-item current"><a href="/about/">キッズパークとは</a></!--li-->
				<li class="main-header__menu-item"><a href="/about/">キッズパークとは</a></li>
				<li class="main-header__menu-item"><a href="/flow/">ご利用の流れ</a></li>
				<li class="main-header__menu-item"><a href="/price/">ご利用料金</a></li>
				<li class="main-header__menu-item"><a href="/faq/">よくある質問</a></li>
			</ul>
			<ul class="main-header__control">
				<li class="main-header__control-item pc"><a href="/search/" class="btn-release"><i class="fa-solid fa-magnifying-glass"></i>シッターを探す</a></li>
				<li class="main-header__control-item"><a href="" class="btn-registrations">新規登録</a></li>
				<li class="main-header__control-item">
					<button class="js-modal js-modal-open btn-login" data-target="mainHeaderLogin"><span class="icn icn_login">ログイン</span></button>
				</li>
				<li class="main-header__control-item smt">
					<span class="main-header__mobile-icon">
						<span class="main-header__mobile-icon-border"></span>
						<span class="main-header__mobile-icon-border"></span>
						<span class="main-header__mobile-icon-border"></span>
					</span>
				</li>
			</ul>
		</nav>
	</div>
	<div class="user-menu">
		<nav class="user-menu__nav">
			<div class="user-menu__nav-item"><a href="/about/">キッズパークとは</a></div>
			<div class="user-menu__nav-item"><a href="/flow/">ご利用の流れ</a></div>
			<div class="user-menu__nav-item"><a href="/price/">ご利用料金</a></div>
			<div class="user-menu__nav-item"><a href="/faq/">よくある質問</a></div>
		</nav>
		<nav class="user-menu__btn">
			<div class="user-menu__btn-item"><a href="/search/"><span class="icn icn_search_b">シッターを探す</span></a></div>
			<div class="user-menu__btn-item"><button class="js-modal-open" data-target="mainHeaderLogin"><span class="icn icn_login_b">ログイン</span></button></div>
		</nav>
	</div>
</header>
<div class="modal-main" id="mainHeaderLogin">
	<div class="modal-block">
		<span class="modal-block__close js-modal-close" data-target="mainHeaderLogin"></span>
		<div class="header-tabs">
			<div class="header-tabs__item is-active js-tab-button" data-id="0">保護者様はこちら</div>
			<div class="header-tabs__item js-tab-button" data-id="1">パークサポーターはこちら</div>
		</div>
		<div class="header-tabs__content-content">
			<div class="header-tabs__content-item is-active js-tab" data-id="0">
				<h2 class="modal-block__ttl"><span class="icn icn_login">保護者様ログイン</span></h2>
				<div class="modal-ct">
					<div class="modal-login">
						<input type="text" placeholder="メールアドレス">
						<input type="text" placeholder="パスワード">
						<div class="modal-login-checkbox">
							<input type="checkbox" value="" id="modalLoginCheckbox" checked="checked">
							<label for="modalLoginCheckbox">ログイン情報を保持する</label>
						</div>
						<div class="btn_area">
							<button class="btn_style_01">ログイン</button>
						</div>
						<div class="modal-login_txt_01">
							<a href="javascript:void(0);" class="js-modal-open" data-target="passWordForget">パスワードをお忘れですか？</a><!-- パスワードを忘れた場合へリンク -->
						</div>
						<div class="modal-login_txt_02">
							新規登録の方は<a href="/newuser/">こちら</a>
						</div>
					</div>
				</div>
			</div>
			<div class="header-tabs__content-item js-tab" data-id="1" hidden>
				<h2 class="modal-block__ttl"><span class="icn icn_login">パークサポーターログイン</span></h2>
				<div class="modal-ct">
					<div class="modal-login">
						<input type="text" placeholder="メールアドレス">
						<input type="text" placeholder="パスワード">
						<div class="modal-login-checkbox">
							<input type="checkbox" value="" id="modalLoginCheckbox" checked="checked">
							<label for="modalLoginCheckbox">ログイン情報を保持する</label>
						</div>
						<div class="btn_area">
							<button class="btn_style_01">ログイン</button>
						</div>
						<div class="modal-login_txt_01">
							<a href="javascript:void(0);" class="js-modal-open" data-target="passWordForget">パスワードをお忘れですか？</a><!-- パスワードを忘れた場合へリンク -->
						</div>
						<div class="modal-login_txt_02">
							新規登録の方は<a href="https://www.kidspark-support.com/babysitter/" target="_blank">こちら</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="modal-main" id="passWordForget">
	<div class="modal-block">
	<span class="modal-block__close js-modal-close" data-target="passWordForget"></span>
	<div class="header-tabs__content-content">
			<div class="header-tabs__content-item is-active js-tab" data-id="0">
				<h2 class="modal-block__ttl">パスワードをお忘れの場合</h2>
				<div class="modal-ct">
					<p class="modal-login_txt_02">ご登録いただいているメールアドレスを入力してください。<br>本人確認のため、確認コードを記載したメールを送信します。</p>
					<input type="text" placeholder="メールアドレス">
					<div class="btn_area">
						<button class="btn_style_01 js-modal-open" data-target="passWordForgetInput">送信</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="modal-main" id="passWordForgetInput">
	<div class="modal-block">
	<span class="modal-block__close js-modal-close" data-target="passWordForgetInput"></span>
	<div class="header-tabs__content-content">
			<div class="header-tabs__content-item is-active js-tab" data-id="0">
				<h2 class="modal-block__ttl">再設定用のURLを送信しました</h2>
				<div class="modal-ct">
					<p class="modal-login_txt_02">ご登録いただいているメールアドレスに認証コードを記載したメールをお送りしました。<br>メールをご確認いただき、確認コードと新しいパスワードを入力してください。</p>
					<label class="modal_label">名前<span>※</span></label>
					<input type="text" placeholder="数字6桁">
					<label class="modal_label">新しいパスワード<span>※</span></label>
					<input type="password" placeholder="半角英数字 8文字以上20文字以内">
					<label class="modal_label">新しいパスワード(確認)<span>※</span></label>
					<input type="password" placeholder="確認のため再度記入してください">
					<p class="modal-login_txt_03">使用できる記号は「. (ドット)」「– (ハイフン)」「_ (アンダースコア)」です。</p>
					<div class="btn_area">
						<button class="btn_style_01 js-modal-open" data-target="passWordEnd" disabled>パスワードを変更する</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="modal-main" id="passWordEnd">
	<div class="modal-block">
	<span class="modal-block__close js-modal-close" data-target="passWordEnd"></span>
	<div class="header-tabs__content-content">
			<div class="header-tabs__content-item is-active js-tab" data-id="0">
				<h2 class="modal-block__ttl">パスワードの変更が完了しました。</h2>
				<div class="modal-ct">
					<p class="modal-login_txt_02">入力いただいたパスワードへの変更が完了しました。<br>ログインページから、再設定いただいたパスワードを入力してログインしてください。</p>
					<div class="btn_area">
						<button class="btn_style_01 js-modal-open" data-target="mainHeaderLogin">ログイン画面へ</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>