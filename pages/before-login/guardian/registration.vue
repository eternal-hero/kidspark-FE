<template>
  <section>
    <header id="main-header" class="main-header">
      <div class="main-header__inner">
        <a href="https://www.kids-parks.com" class="main-header__logo"><img src="@/assets/before-login/img/common/logo.svg" alt="Kids Park" width="230"></a>
        <nav class="main-header__navGlobal">
          <ul class="main-header__menu pc">
            <!--li class="main-header__menu-item current"><a href="https://www.kids-parks.com/about/">キッズパークとは</a></!--li-->
            <li class="main-header__menu-item"><a href="https://www.kids-parks.com/about/">キッズパークとは</a></li>
            <li class="main-header__menu-item"><a href="https://www.kids-parks.com/flow/">ご利用の流れ</a></li>
            <li class="main-header__menu-item"><a href="https://www.kids-parks.com/price/">ご利用料金</a></li>
            <li class="main-header__menu-item"><a href="https://www.kids-parks.com/faq/">よくある質問</a></li>
          </ul>
          <ul class="main-header__control">
            <li class="main-header__control-item pc"><a href="https://www.kids-parks.com/search/" class="btn-release"><i class="fa-solid fa-magnifying-glass"></i>シッターを探す</a></li>
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
          <div class="user-menu__nav-item"><a href="https://www.kids-parks.com/about/">キッズパークとは</a></div>
          <div class="user-menu__nav-item"><a href="https://www.kids-parks.com/flow/">ご利用の流れ</a></div>
          <div class="user-menu__nav-item"><a href="https://www.kids-parks.com/price/">ご利用料金</a></div>
          <div class="user-menu__nav-item"><a href="https://www.kids-parks.com/faq/">よくある質問</a></div>
        </nav>
        <nav class="user-menu__btn">
          <div class="user-menu__btn-item"><a href="https://www.kids-parks.com/search/"><span class="icn icn_search_b">シッターを探す</span></a></div>
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
                  新規登録の方は<a href="https://www.kids-parks.com/newuser/">こちら</a>
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
          <div class="header-tabs__content-item">
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
          <div class="header-tabs__content-item">
            <h2 class="modal-block__ttl">再設定用のURLを送信しました</h2>
            <div class="modal-ct">
              <p class="modal-login_txt_02">ご登録いただいているメールアドレスに認証コードを記載したメールをお送りしました。<br>メールをご確認いただき、確認コードと新しいパスワードを入力してください。</p>
              <label class="modal_label">認証コード<span>※</span></label>
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
          <div class="header-tabs__content-item">
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

    <div class="wrapper">
      <main class="site_main">
        <nav class="breadcrumb">
          <ul>
            <li><a href="https://www.kids-parks.com">TOP</a></li>
            <li>新規ユーザー登録</li>
          </ul>
        </nav>
        <section class="mv">
          <div class="inr">
            <h1 class="page_ttl_01">新規ユーザー登録</h1>
            <div class="mv_inr">
              <div class="mv_registration">
                <div class="mv_registration_inr">
                  <form method="get" action="#" class="">
                    <p class="mv_registration_txt_01">メールアドレスで登録する</p>
                    <input v-model="mailAddress" type="text" placeholder="（例）kidspark@gmail.com">
                    <p class="mv_registration_txt_02">このメールアドレスがマイページのログインIDとなります。</p>
                    <div class="mv_registration_checkbox">
                      <input v-model="confirmation" type="checkbox" value="" id="checkbox01">
                      <label for="checkbox01"><a href="https://www.kids-parks.com/terms/">利用規約</a>、<a href="https://www.kids-parks.com/privacy/">個人情報保護方針</a>に同意する</label>
                    </div>
                    <button v-if="confirmation" @click.prevent="storeTmpGuardianUser" class="mv_registration_btn">ユーザー登録する（無料）</button>
                    <button v-else disabled class="mv_registration_btn disabled_btn">ユーザー登録する（無料）</button>
                    <p class="mv_registration_txt_03">すでにアカウントをお持ちの方は<a href="javascript:void(0)" class="js-modal js-modal-open" target="_blank" data-target="mainHeaderLogin">こちら</a></p>
                  </form>
                </div>
                <p class="mv_registration_txt_04"><a href="#work">パークサポーターとして登録したい方</a></p>
              </div>
              <div class="mv_flow">
                <p class="mv_flow_txt_01">新規ユーザー登録の流れ</p>
                <div class="mv_flow_inr">
                  <div class="mv_flow_img pc">
                    <img src="@/assets/before-login/img/newuser/img_02.png" alt="新規ユーザー登録の流れ">
                  </div>
                  <ul class="mv_flow_list">
                    <li><p class="mv_flow_icn"><img src="@/assets/before-login/img/newuser/registration/form_list_addr.png" alt="アドレス認証"></p><span>01</span>アドレス認証</li>
                    <li><p class="mv_flow_icn"><img src="@/assets/before-login/img/newuser/registration/form_list_edit.png" alt="基本情報入力"></p><span>02</span>基本情報入力</li>
                    <li><p class="mv_flow_icn"><img src="@/assets/before-login/img/newuser/registration/form_list_edit.png" alt="緊急連絡先お子様情報入力"></p><span>03</span>緊急連絡先お子様情報入力</li>
                    <li><p class="mv_flow_icn"><img src="@/assets/before-login/img/newuser/registration/form_list_file.png" alt="本人確認書類アップロード"></p><span>04</span>本人確認書類アップロード</li>
                    <li><p class="mv_flow_icn"><img src="@/assets/before-login/img/newuser/registration/form_list_completion.png" alt="登録完了（本人確認に30分～24時間ほどかかります）"></p><span>05</span>登録完了（本人確認に30分～24時間ほどかかります）</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="choice bg_white">
          <div class="inr">
            <h2 class="page_ttl_02">キッズパークでは<br>様々なご利用方法が選べます！</h2>
            <div class="choice_babysitter">
              <h3 class="choice_ttl">ベビーシッターサービス</h3>
              <div class="choice_list">
                <div class="choice_list_block">
                  <h4 class="choice_list_block_ttl">見守り</h4>
                  <img src="@/assets/before-login/img/newuser/img_service_01.png" alt="見守り">
                </div>
                <div class="choice_list_block">
                  <h4 class="choice_list_block_ttl">送迎</h4>
                  <img src="@/assets/before-login/img/newuser/img_service_02.png" alt="送迎">
                </div>
                <div class="choice_list_block">
                  <h4 class="choice_list_block_ttl">病児保育</h4>
                  <img src="@/assets/before-login/img/newuser/img_service_03.png" alt="病児保育">
                </div>
                <div class="choice_list_block">
                  <h4 class="choice_list_block_ttl">産前産後ケア</h4>
                  <img src="@/assets/before-login/img/newuser/img_service_04.png" alt="産前産後ケア">
                </div>
                <div class="choice_list_block">
                  <h4 class="choice_list_block_ttl">レッスン</h4>
                  <img src="@/assets/before-login/img/newuser/img_service_05.png" alt="レッスン">
                </div>
              </div>
              <p class="choice_list_txt">保護者さまのさまざまなご要望に対応できるよう多様な保育サービスを展開しています。<br>ベビーシッターサポートの流れや利用料ケースなどご確認いただけます。<br>※料金やサポート内容はパークサポーターによって異なります。内容は依頼するパークサポーターとご相談ください。</p>
              <div class="btn_area">
                <a href="https://www.kids-parks.com/scene/#babysitter" class="btn_style_02"><span>ご利用シーンを見る</span></a>
              </div>
            </div>
            <div class="choice_housework">
              <h3 class="choice_ttl">家事代行サービス</h3>
              <div class="choice_list">
                <div class="choice_list_block">
                  <h4 class="choice_list_block_ttl">料理・作り置き</h4>
                  <img src="@/assets/before-login/img/newuser/img_service2_01.png" alt="料理・作り置き">
                </div>
                <div class="choice_list_block">
                  <h4 class="choice_list_block_ttl">買い物代行</h4>
                  <img src="@/assets/before-login/img/newuser/img_service2_02.png" alt="買い物代行">
                </div>
                <div class="choice_list_block">
                  <h4 class="choice_list_block_ttl">お掃除</h4>
                  <img src="@/assets/before-login/img/newuser/img_service2_03.png" alt="お掃除">
                </div>
                <div class="choice_list_block">
                  <h4 class="choice_list_block_ttl">収納アドバイス</h4>
                  <img src="@/assets/before-login/img/newuser/img_service2_04.png" alt="収納アドバイス">
                </div>
              </div>
              <p class="choice_list_txt">掃除や洗濯、買い物や料理などの日常の家事を行い、ご負担をサポートします。<br>家事サポートの流れや利用料ケースなどご確認いただけます。<br>※料金やサポート内容はパークサポーターによって異なります。内容は依頼するパークサポーターとご相談ください。</p>
              <div class="btn_area">
                <a href="https://www.kids-parks.com/scene/#housework" class="btn_style_02"><span>ご利用シーンを見る</span></a>
              </div>
            </div>
          </div>
        </section>
        <section class="work" id="work">
          <div class="inr">
            <a href="https://www.kidspark-support.com/babysitter/" target="_blank" class="work_babysitter">
              <p class="work_ttl">ベビーシッター<br class="smt">として働きたい</p>
              <div class="work_inr">
                <img src="@/assets/before-login/img/common/img_work_01.png" alt="ベビーシッターとして働きたい">
                <p>保育士資格や看護師免許などの資格を持っている方、資格を活かしてベビーシッターとして働きませんか？スケジュールや料金をご自身で設定できるので自由な働き方を実現できます！</p>
              </div>
            </a>
            <a href="https://www.kidspark-support.com/housekeeper/" target="_blank" class="work_housework">
              <p class="work_ttl">家事代行サポーター<br class="smt">として働きたい</p>
              <div class="work_inr">
                <img src="@/assets/before-login/img/common/img_work_02.png" alt="家事代行サポーターとして働きたい">
                <p>特別な資格などは必要なし！<br>掃除や料理など、自分の得意なスキルを活かして家事代行サポーターとして自由に働いてみませんか？</p>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>

    <footer id="main-footer" class="main-footer">
      <div class="inner">
        <div class="main-footer__content">
          <nav class="main-footer__nav pc">
            <details class="main-footer__nav-item" open>
              <summary class="main-footer__nav-ttl">キッズパークとは</summary>
              <div class="main-footer__nav-ct">
                <ul class="main-footer__menu">
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/about/" class="main-footer__link">キッズパークとは</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/flow/" class="main-footer__link">ご利用の流れ</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/price/" class="main-footer__link">ご利用料金</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/view_of_profile/" class="main-footer__link">シッターのプロフィールの見方</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/" class="main-footer__link">当日までの流れ</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/" class="main-footer__link">マナー・注意事項</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/rank/" class="main-footer__link">シッターランクとは</a></li>
                </ul>
              </div>
            </details>
            <details class="main-footer__nav-item" open>
              <summary class="main-footer__nav-ttl">ご利用ガイド</summary>
              <div class="main-footer__nav-ct">
                <ul class="main-footer__menu">
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/faq/" target="_blank" class="main-footer__link">よくあるご質問</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/contact/" target="_blank" class="main-footer__link">お問い合わせ</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/contents/" class="main-footer__link">コンテンツ</a></li>
                </ul>
              </div>
            </details>
            <details class="main-footer__nav-item" open>
              <summary class="main-footer__nav-ttl">運営会社</summary>
              <div class="main-footer__nav-ct">
                <ul class="main-footer__menu">
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/company/" class="main-footer__link">会社概要</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/privacy/" class="main-footer__link">個人情報保護方針</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/law/" class="main-footer__link">特定商取引法に基づく表示</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/terms/" class="main-footer__link">利用規約</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/pointterms/" class="main-footer__link">ポイントに関する特約</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/cancel/" class="main-footer__link">キャンセル料規定</a></li>
                </ul>
              </div>
            </details>
          </nav>
          <nav class="main-footer__nav smt">
            <details class="main-footer__nav-item">
              <summary class="main-footer__nav-ttl">キッズパークとは</summary>
              <div class="main-footer__nav-ct">
                <ul class="main-footer__menu">
                <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/about/" class="main-footer__link">キッズパークとは</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/flow/" class="main-footer__link">ご利用の流れ</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/price/" class="main-footer__link">ご利用料金</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/view_of_profile/" class="main-footer__link">シッターのプロフィールの見方</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/" class="main-footer__link">当日までの流れ</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/" class="main-footer__link">マナー・注意事項</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/rank/" class="main-footer__link">シッターランクとは</a></li>
                </ul>
              </div>
            </details>
            <details class="main-footer__nav-item">
              <summary class="main-footer__nav-ttl">ご利用ガイド</summary>
              <div class="main-footer__nav-ct">
                <ul class="main-footer__menu">
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/faq/" target="_blank" class="main-footer__link">よくあるご質問</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/contact/" target="_blank" class="main-footer__link">お問い合わせ</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/contents/" class="main-footer__link">コンテンツ</a></li>
                </ul>
              </div>
            </details>
            <details class="main-footer__nav-item">
              <summary class="main-footer__nav-ttl">運営会社</summary>
              <div class="main-footer__nav-ct">
                <ul class="main-footer__menu">
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/company/" class="main-footer__link">会社概要</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/privacy/" class="main-footer__link">個人情報保護方針</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/law/" class="main-footer__link">特定商取引法に基づく表示</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/terms/" class="main-footer__link">利用規約</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/pointterms/" class="main-footer__link">ポイントに関する特約</a></li>
                  <li class="main-footer__menu-item"><a href="https://www.kids-parks.com/cancel/" class="main-footer__link">キャンセル料規定</a></li>
                </ul>
              </div>
            </details>
          </nav>
        </div>
      </div>
      <div class="main-footer__copyright">
        <div class="inner main-footer__copyright_inr">
          <small class="main-footer__copyright-left">Copyright &copy;Kids Park All Rights Reserved.</small>
          <div class="main-footer__copyright-right">
            <ul class="main-footer__social">
              <li class="main-footer__social-item"><a href=""><img src="@/assets/before-login/img/common/icn_instagram.png" alt="Instagram"></a></li>
              <li class="main-footer__social-item"><a href=""><img src="@/assets/before-login/img/common/icn_twitter.png" alt="Twitter" ></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>
<script>
import GuardianService from "@/services/before-login/GuardianService";
export default {
  head: {
      script: [
        { src: '/before-login/js/jquery-3.6.0.min.js', type: 'text/javascript', body: true },
        { src: '/before-login/js/jquery.inview.min.js', type: 'text/javascript', body: true },
        { src: '/before-login/js/common.js', type: 'text/javascript', body: true },
      ],
      title: '新規ユーザー登録'
    },
  data() {
    return{
      mailAddress: "",
      confirmation: false
    }
  },
  methods: {
    async storeTmpGuardianUser() {
      try{
        const sendMailAddress = this.mailAddress;
        const registeredMailAddress = await GuardianService.storeTmpGuardianUser(sendMailAddress);
        this.$store.dispatch('beforeLogin/guardian/registeredMailAddress', registeredMailAddress);
        this.$router.push("/before-login/guardian/auth-code");
      }
      catch(e){
        console.log(e.response)
        alert(e.response.data.status.message.mail_address);
      }
    }
  }
}
</script>
<style scoped>
  @import url('~/assets/before-login/css/reset.css');
  @import url('~/assets/before-login/css/common.css');
  @import url('~/assets/before-login/css/slick.css');
  @import url('~/assets/before-login/css/newuser.css');

.disabled_btn{
  cursor: default;
}
</style>

