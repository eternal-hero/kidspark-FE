<template>
<header class="site_header">
  <div class="site_header_inr">
    <div class="site_header_logo">
      <a href="https://stg.kids-parks.com/"><img src="~/assets/admin/img/common/logo.png" alt="Kisd Park"></a>
    </div>
    <div class="site_header_login" v-if="$route.name !== 'admin-login' && $cookies.get('auth_token')">
      <details>
        <summary>{{ loginedUserName }}</summary>
        <ul class="site_header_login_menu">
          <li>
            <!-- 先方から提供されたHTMLでaタグが用いられていたため、下記記事に従い対処 -->
            <!-- https://blog.orz.at/2021/07/12/vue3-prevent-stop/ -->
            <a href="" @click.prevent.stop="postLogout()"
            >
              ログアウト
            </a>
          </li>
        </ul>
      </details>
    </div>
  </div>
</header>
</template>

<script>
import AuthService from "../../services/admin/AuthService.js";

export default {
  props: {
    loginedUserName: {Type: String}
  },
  methods: {
    async postLogout() {
      try {
        const data = await AuthService.postLogout(this);
        this.$cookies.set('auth_token', null);
        this.$router.push("/admin/login");
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
