<template>
<aside class="site_side">
	<input type="checkbox" class="openSidebarMenu" id="openSidebarMenu" v-model="checked" >
	<label for="openSidebarMenu" class="sidebarIconToggle">
		<div class="spinner"></div>
	</label>
	<div id="sidebarMenu">
		<ul class="sidebarMenuInner">
			<li>
				<details open>
					<summary><span class="icn_01">ダッシュボード</span></summary>
					<ul class="site_sidemenu_inr">
						<li><NuxtLink to="/admin/dashboard">一覧</NuxtLink></li>
						<!-- <li><NuxtLink to="/">予約・稼働状況</NuxtLink></li>
						<li><NuxtLink to="/">公開応募状況</NuxtLink></li> -->
					</ul>
				</details>
			</li>
			<li>
				<details open>
					<summary><span class="icn_01">パークサポーター管理</span></summary>
					<ul class="site_sidemenu_inr">
						<li><NuxtLink to="/admin/supporter">一覧</NuxtLink></li>
					</ul>
				</details>
			</li>
			<li>
				<details open>
					<summary><span class="icn_01">ユーザー管理</span></summary>
					<ul class="site_sidemenu_inr">
						<li><NuxtLink to="/admin/guardian">一覧</NuxtLink></li>
					</ul>
				</details>
			</li>
			<li>
				<details open>
					<summary><span class="icn_02">イベント管理</span></summary>
					<ul class="site_sidemenu_inr">
						<!-- <li><NuxtLink to="/">実施カレンダー</NuxtLink></li>
						<li><NuxtLink to="/">講座一覧</NuxtLink></li> -->
					</ul>
				</details>
			</li>
			<li>
				<details open>
					<summary><span class="icn_03">採用管理</span></summary>
					<ul class="site_sidemenu_inr">
						<!-- <li><NuxtLink to="/">一次選考</NuxtLink></li>
						<li><NuxtLink to="/">面談カレンダー</NuxtLink></li>
						<li><NuxtLink to="/">採用資料</NuxtLink></li> -->
					</ul>
				</details>
			</li>
			<li>
				<details open>
					<summary><span class="icn_04">決済管理</span></summary>
					<ul class="site_sidemenu_inr">
						<!-- <li><NuxtLink to="/">ポイント</NuxtLink></li>
						<li><NuxtLink to="/">請求管理</NuxtLink></li>
						<li><NuxtLink to="/">入金管理</NuxtLink></li>
						<li><NuxtLink to="/">支払い管理</NuxtLink></li>
						<li><NuxtLink to="/">報酬管理</NuxtLink></li> -->
					</ul>
				</details>
			</li>
			<li>
				<details open>
					<summary><span class="icn_05">ホームページ管理</span></summary>
					<ul class="site_sidemenu_inr">
						<!-- <li><NuxtLink to="/">お知らせ</NuxtLink></li>
						<li><NuxtLink to="/">やることリスト</NuxtLink></li>
						<li><NuxtLink to="/">コラム</NuxtLink></li>
						<li><NuxtLink to="/">よくある質問</NuxtLink></li> -->
					</ul>
				</details>
			</li>
			<li>
				<details open>
					<summary><span class="icn_06">カスタマー管理</span></summary>
					<ul class="site_sidemenu_inr">
						<!-- <li><NuxtLink to="/">メールでの問い合わせ</NuxtLink></li>
						<li><NuxtLink to="/">電話での問い合わせ</NuxtLink></li> -->
						<li><NuxtLink to="/admin/customer-management/indentity-verification/guardian">申請・提出書類</NuxtLink></li>
						<!-- <li><NuxtLink to="/">カスタマーマニュアル</NuxtLink></li> -->
					</ul>
				</details>
			</li>
			<li>
				<details open>
					<summary><span class="icn_07">監査/モニタリング</span></summary>
					<ul class="site_sidemenu_inr">
						<!-- <li><NuxtLink to="/">メッセージ</NuxtLink></li>
						<li><NuxtLink to="/">アクセスログ</NuxtLink></li>
						<li><NuxtLink to="/">統計</NuxtLink></li> -->
					</ul>
				</details>
			</li>
			<li>
				<details open>
					<summary><span class="icn_08">基本設定</span></summary>
					<ul class="site_sidemenu_inr">
						<!-- <li><NuxtLink to="/">基本設定</NuxtLink></li>
						<li><NuxtLink to="/">メンバー</NuxtLink></li>
						<li><NuxtLink to="/">利用権限</NuxtLink></li>
						<li><NuxtLink to="/">IP設定</NuxtLink></li> -->
					</ul>
				</details>
			</li>
		</ul>
	</div>
</aside>
</template>

<script>
export default {
  data(){
    return{
      checked: false
    }
  },
  watch:{
    //サイドメニューの開閉でページの余白を調整
    checked: function(){
      if(this.checked){
        document.getElementById("main-content").classList.add("opend");
      }
      if(!this.checked){
        document.getElementById("main-content").classList.remove("opend");
      }
    }
  }
}
</script>
