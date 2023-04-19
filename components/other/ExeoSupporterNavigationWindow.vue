<template>
    <div class="col2_block_side">
        <ul class="col2_block_side_nav">
            <li>
                <details open>
                    <summary><span>プロフィール</span></summary>
                    <ul class="col2_block_side_nav_inr">
                        <li><NuxtLink :to="info_path.replace(':supporter_user_id:',$route.params.id)">基本情報</NuxtLink></li>
                        <li><NuxtLink :to="profile_path.replace(':supporter_user_id:',$route.params.id)">共通プロフィール</NuxtLink></li>
                        <li><NuxtLink :to="area_path.replace(':supporter_user_id:',$route.params.id)">サポートエリア</NuxtLink></li>
                        <li><NuxtLink :to="interview_path.replace(':supporter_user_id:',$route.params.id)">事前面談設定</NuxtLink></li>
                        <li><NuxtLink :to="sitter_path.replace(':supporter_user_id:',$route.params.id)">シッター設定</NuxtLink></li>
                        <li><NuxtLink :to="childbirth_path.replace(':supporter_user_id:',$route.params.id)">産前産後設定</NuxtLink></li>
                        <li><NuxtLink :to="sick_children_path.replace(':supporter_user_id:',$route.params.id)">病児保育設定</NuxtLink></li>
                        <li><NuxtLink :to="housekeeper_path.replace(':supporter_user_id:',$route.params.id)">家事代行設定</NuxtLink></li>
                        <!-- <li><NuxtLink to="/"="/T010.html">プロフィール写真</NuxtLink></li> -->
                        <li><NuxtLink :to="works_image_path.replace(':supporter_user_id:',$route.params.id)">仕事中のイメージ写真</NuxtLink></li>
                    </ul>
                </details>
            </li>
            <!-- <li>
                <details open>
                    <summary><span>実績</span></summary>
                    <ul class="col2_block_side_nav_inr">
                        <li><NuxtLink to="/">概要</NuxtLink></li>
                        <li><NuxtLink to="/">評価</NuxtLink></li>
                        <li><NuxtLink to="/">売上</NuxtLink></li>
                        <li><NuxtLink to="/">入出金履歴</NuxtLink></li>
                        <li><NuxtLink to="/">予約状況</NuxtLink></li>
                        <li><NuxtLink to="/">公開応募</NuxtLink></li>
                    </ul>
                </details>
            </li> -->
            <!-- <li>
                <details open>
                    <summary><span>勉強会受講履歴</span></summary>
                    <ul class="col2_block_side_nav_inr">
                        <li><NuxtLink to="/">勉強会受講履歴</NuxtLink></li>
                    </ul>
                </details>
            </li> -->
            <li>
                <details open>
                    <summary><span>設定</span></summary>
                    <ul class="col2_block_side_nav_inr">
                        <!-- <li><NuxtLink to="/">受取口座設定</NuxtLink></li> -->
                        <li><NuxtLink :to="password_setting.replace(':supporter_user_id:',$route.params.id)">パスワード設定</NuxtLink></li>
                        <!-- <li><NuxtLink to="/">通知設定</NuxtLink></li>
                        <li><NuxtLink to="/">ブロック設定</NuxtLink></li> -->
                    </ul>
                </details>
            </li>
            <!-- <li>
                <details open>
                    <summary><span>採用</span></summary>
                    <ul class="col2_block_side_nav_inr">
                        <li><NuxtLink to="/">個人面談履歴</NuxtLink></li>
                    </ul>
                </details>
            </li> -->
            <li>
                <details open>
                    <summary><span>申請・提出書類</span></summary>
                    <ul class="col2_block_side_nav_inr">
                        <li><NuxtLink :to="identity_applications.replace(':supporter_id:',$route.params.id)">本人確認・資格証明</NuxtLink></li>
                        <!-- <li><NuxtLink to="/">申請提出</NuxtLink></li> -->
                    </ul>
                </details>
            </li>
        </ul>
    </div>
</template>

<script>
import Web from '~/const/web.js'
export default {
  data() {
      return {
          info_path: Web.SUPPORTER_INFO_WEB,
          profile_path: Web.SUPPORTER_PROFILE_WEB,
          area_path: Web.SUPPORTER_SUPPORT_AREA_WEB,
          interview_path: Web.SUPPORTER_PRE_INTERVIEW_WEB,
          sitter_path: Web.SUPPORTER_SITTER_SETTING_WEB,
          childbirth_path: Web.SUPPORTER_CHILDBIRTH_SETTING_WEB,
          sick_children_path: Web.SUPPORTER_SICK_CHILDREN_CARE_SETTING_WEB,
          housekeeper_path: Web.SUPPORTER_HOUSEKEEPER_SETTING_WEB,
          works_image_path: Web.SUPPORTER_WORKS_IMAGE_WEB,
          password_setting: Web.SUPPORTER_PASSWORD_SETTING_WEB,
          identity_applications: Web.SUPPORTER_IDENTITY_APPLICATIONS,
      }
  },
}
</script>

<style>

</style>
