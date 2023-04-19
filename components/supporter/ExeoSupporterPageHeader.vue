<template>
    <header id="main-header" class="main-header">
        <div class="main-header__inner">
            <a href="https://stg.kids-parks.com/" class="main-header__logo"><img src="@/assets/supporter/img/common/logo.svg" alt="Kids Park" width="230"></a>
            <nav class="main-header__navGlobal">
                <ul class="main-header__menu">
                    <!-- <li class="main-header__menu-item current"><a href="./supporter/dashboard">ダッシュボード</a></li>
                    <li class="main-header__menu-item"><a href="./P008.html">お仕事管理</a></li>
                    <li class="main-header__menu-item"><a href="./P060.html">スケジュール</a></li>
                    <li class="main-header__menu-item"><a href="./P059.html">よくある質問</a></li> -->
                </ul>
                <ul>
                <!-- <ul class="main-header__control"> 表示しないのため-->
                    <!-- <li class="main-header__control-item"><a href="./" class="btn-release"><i class="fa-solid fa-magnifying-glass"></i>公開依頼</a></li>
                    <li class="main-header__control-item"><a href="./P003-1.html" class="btn-info"><i class="fa-sharp fa-solid fa-bell"></i><span class="num">10</span></a></li>
                    <li class="main-header__control-item"><a href="./P005.html" class="btn-mail"><i class="fa-solid fa-envelope"></i><span class="num">10</span></a></li>
                    <li class="main-header__control-item"><a href="./P004.html" class="btn-check"><i class="fa-solid fa-circle-check"></i><span class="num">10</span></a></li> -->
                    <li class="main-header__control-item">
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
            <div class="user-menu__heading">
                <div class="user-menu__heading-image">
                  <a href="/app/supporter/profile-preview">
                    <label for="header-icon">
                      <img :src="getImage(profile?.supporter_profile_image?.image_path, require(`@/assets/supporter/img/common/img_use.png`))" id="header-icon" class="u-img-of" alt="">
                    </label>
                  </a>
                </div>
                <div class="user-menu__heading-body">
                    <div class="user-menu__name">{{profile?.last_name + ' ' + profile?.first_name}}</div>
<!--                    <div class="user-menu__status user-status">-->
<!--                        <div class="user-menu__medal user-status__medal">-->
<!--                            <span class="user-status__medal&#45;&#45;gold"></span>-->
<!--                        </div>-->
<!--                        <div class="user-menu__star user-status__star">-->
<!--                            <span class="user-status__star-icn" data-rate="4.5"></span>-->
<!--                        </div>-->
<!--                        <div class="user-menu__num user-status__num">（110件）</div>-->
<!--                    </div>-->
                </div>
            </div>
            <nav class="user-menu__nav">
                <!-- <div class="user-menu__nav-item"><a href="./supporter/dashboard">ダッシュボード</a></div> -->
                <!-- <div class="user-menu__nav-item"><a href="./P003.html">お知らせ</a></div>
                <div class="user-menu__nav-item"><a href="./P005.html">メッセージ</a></div>
                <div class="user-menu__nav-item"><a href="./P004.html">やることリスト</a></div>
                <div class="user-menu__nav-item"><a href="./P008.html">お仕事管理</a></div>
                <div class="user-menu__nav-item"><a href="./P060.html">スケジュール</a></div>
                <div class="user-menu__nav-item"><a href="./">公開お仕事を探す</a></div> -->
                <!-- <div class="user-menu__nav-item">
                    <span class="btn-acc">実績</span>
                    <div class="acc-cont">
                        <div class="user-menu__nav-item-child"><a href="./P042.html">概要</a></div>
                        <div class="user-menu__nav-item-child"><a href="./P043.html">評価</a></div>
                        <div class="user-menu__nav-item-child"><a href="./P044.html">売上</a></div>
                        <div class="user-menu__nav-item-child"><a href="./P045.html">入出金履歴</a></div>
                    </div>
                </div> -->
                <div class="user-menu__nav-item">
                    <span class="btn-acc">アカウント設定</span>
                    <div class="acc-cont">
                        <div class="user-menu__nav-item-child"><a href="./supporter/identification-paper">身分証明証</a></div>
                        <div class="user-menu__nav-item-child"><a href="./supporter/info">基本情報</a></div>
                        <div class="user-menu__nav-item-child"><a href="./supporter/profile">共通プロフィール</a></div>
                        <div class="user-menu__nav-item-child"><a href="./supporter/support-area">サポートエリア</a></div>
                        <div class="user-menu__nav-item-child"><a href="./supporter/pre-interview">事前面談設定</a></div>
                        <div class="user-menu__nav-item-child"><a href="./supporter/working-image">仕事中のイメージ写真</a></div>
                        <div class="user-menu__nav-item-child"><a href="./supporter/license">保有資格</a></div>
                    </div>
                </div>
                <div class="user-menu__nav-item">
                    <span class="btn-acc">パークサポーター設定</span>
                    <div class="acc-cont">
                        <div class="user-menu__nav-item-child"><a href="./supporter/sitter-setting">シッター設定</a></div>
                        <div class="user-menu__nav-item-child"><a href="./supporter/childbirth-setting">産前産後設定</a></div>
                        <div class="user-menu__nav-item-child"><a href="./supporter/sick-child-care-setting">病児保育設定</a></div>
                        <div class="user-menu__nav-item-child"><a href="./supporter/housekeeping-setting">家事代行設定</a></div>
                    </div>
                </div>
                <div class="user-menu__nav-item">
                    <span class="btn-acc">その他の設定</span>
                    <div class="acc-cont">
                        <!-- <div class="user-menu__nav-item-child"><a href="./P039.html">受取口座設定</a></div> -->
                        <div class="user-menu__nav-item-child"><a href="./supporter/password">パスワード設定</a></div>
                        <!-- <div class="user-menu__nav-item-child"><a href="./P041.html">通知設定</a></div> -->
                    </div>
                </div>
                <!-- <div class="user-menu__nav-item"><a href="./P049.html">申請フォーム</a></div> -->
                <!-- <div class="user-menu__nav-item"><a href="./">勉強会受講履歴</a></div> -->
                <!-- <div class="user-menu__nav-item"><a href="./P059.html">よくある質問</a></div> -->
                <!-- <div class="user-menu__nav-item"><a href="./">パークサポーターマニュアル</a></div> -->
                <div class="user-menu__nav-item"><button @click="postLogout()">ログアウト</button></div>
            </nav>
        </div>
    </header>
</template>
<script>
import AuthService from "../../services/supporter/AuthService.js";
import {imageMixin} from "@/mixins/imageMixin";
import InfoService from "@/services/supporter/InfoService";

export default {
  mixins: [imageMixin],
  data() {
    return {
      profile:{
        last_name : "",
        first_name : "",
      },
    }
  },
  created() {
    InfoService.getInfo(this).then(data => {
      this.profile = data;
    });
  },
  methods: {
    async postLogout() {
      try {
        const data = await AuthService.postLogout(this);
        this.$cookies.set('auth_token', null);
        window.location.href = 'https://stg.kids-parks.com/';
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
  .user-menu__heading-image label{
    display: block;
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 50%;
  }
</style>
