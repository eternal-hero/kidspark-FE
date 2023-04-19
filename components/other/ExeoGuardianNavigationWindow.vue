<template>
  <div class="col2_block_side">
    <ul class="col2_block_side_nav">
      <li>
        <details open>
          <summary><span>プロフィール</span></summary>
          <ul class="col2_block_side_nav_inr">
            <li>
              <NuxtLink :to="info_path.replace(':guardian_id:',$route.params.id)">基本情報</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="profile_path.replace(':guardian_id:',$route.params.id)">共通プロフィール</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="children_path.replace(':guardian_id:',$route.params.id)">お子様の情報</NuxtLink>
            </li>
            <li>
              <NuxtLink :to="profile_image_path.replace(':guardian_id:',$route.params.id)">プロフィール写真</NuxtLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details open>
          <summary><span>設定</span></summary>
          <ul class="col2_block_side_nav_inr">
            <!-- <li>
              <NuxtLink to="/T032">支払い方法</NuxtLink>
            </li> -->
            <li>
              <NuxtLink :to="password_setting.replace(':guardian_id:',$route.params.id)">パスワード設定</NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink to="/T034">通知設定</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/T036">福利厚生</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/T037">法人特典</NuxtLink>
            </li> -->
          </ul>
        </details>
      </li>
      <li>
        <details open>
          <summary><span>実績</span></summary>
          <ul class="col2_block_side_nav_inr">
            <!-- <li>
              <NuxtLink to="/T042">概要</NuxtLink>
            <li>
              <NuxtLink to="/T043">評価</NuxtLink>
            <li>
              <NuxtLink to="/T044">ポイント実績</NuxtLink>
            <li>
              <NuxtLink to="/T045">予約状況</NuxtLink>
            <li>
              <NuxtLink to="/T046">入金履歴</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/T047">公開応募</NuxtLink>
            </li> -->
          </ul>
        </details>
      </li>
      <li>
        <details open>
          <summary><span>申請・提出書類</span></summary>
          <ul class="col2_block_side_nav_inr">
            <li>
             <NuxtLink :to="identity_verifications.replace(':guardian_id:',$route.params.id)">本人確認</NuxtLink>
            </li>
            <!-- <li>
              <NuxtLink to="/">見守りカメラ</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/T040">申請提出</NuxtLink>
            </li> -->
          </ul>
        </details>
      </li>
    </ul>
  </div>
</template>

<script>
import Web from '~/const/web.js'
export default {
  name: "ExeoGuardianNavigationWindow",
  data() {
    return {
        info_path: Web.GUARDIAN_INFO_WEB,
        profile_path: Web.GUARDIAN_PROFILE_WEB,
        children_path: Web.GUARDIAN_CHILDREN_WEB,
        profile_image_path: Web.GUARDIAN_PROFILE_IMAGE_WEB,
        password_setting: Web.GUARDIAN_PASSWORD_SETTING_WEB,
        identity_verifications: Web.GUARDIAN_IDENTITY_VERIFICATIONGS,
    }
},

}
</script>

<style scoped>

</style>
