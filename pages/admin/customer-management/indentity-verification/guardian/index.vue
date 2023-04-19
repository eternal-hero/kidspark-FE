<template>
	<main id="page-T078" class="site_main">
		<nav class="breadcrumb">
			<ul>
				<li><NuxtLink to="/">TOP</NuxtLink></li>
				<li>カスタマー管理</li>
				<li>本人確認・資格証明提出</li>
			</ul>
		</nav>
		<h1 class="page_ttl_01"><span>カスタマー管理〈本人確認・資格証明提出〉</span></h1>
		<ExeoVerifyReportStep />
		<div class="application-block application-block--style2">
			<m033 @submit="searchData" :value = "condition"></m033>
			<div class="application-block__right">
				<div class="statusicn statusicn--04 statusicn_unsupported">未対応</div>
				<div class="application-block__right-txt">{{ not_verifying }}件</div>
			</div>
		</div>
		<ExeoTableGuardianVerification :indentity_verifications = "verifications"/>
    <exeo-pagenation @next="nextPage" @prev="prevPage" :current_page="this.current_page" :last="this.last_page"
    :per_page="this.per_page"></exeo-pagenation>
	</main>
</template>

<script>
import ExeoTableGuardianVerification from "~/components/table/ExeoTableGuardianVerification.vue"
import ExeoPagenation from '~/components/ExeoPagenation.vue'
import ExeoVerifyReportStep from '~/components/other/ExeoVerifyReportStep.vue'
import M033 from '~/components/modal/M033.vue'
import IdentityVerificationService from "@/services/admin/guardian/IdentityApplicationService";

export default {
    layout: 'admin',
    components: {
      ExeoTableGuardianVerification,
      ExeoPagenation,
      ExeoVerifyReportStep,
      M033
    },
    head() {
      return {
        title: 'カスタマー管理〈本人確認・資格証明提出〉'
      }
    },
    data() {
        return {
			condition: {
				request_at_from: '',
				request_at_to: '',
				file_id: '',
				status: '',
				user_info: '',
				expiration_on: ''
			},
      last_page: null,
      current_page: null,
      per_page: 10,
      not_verifying:0,
			verifications: []
        }
    },
    methods: {
    async getTableData(page,condition = this.condition){
      const responseData = await IdentityVerificationService.getIdentityVerificationList(this,page,condition);
      this.verifications = responseData.data;
      this.current_page = responseData.current_page;
      this.per_page = responseData.per_page;
      this.last_page = responseData.last_page;
      if(!Array.isArray(this.verifications)){
        this.verifications = Object.values(this.verifications);
      }
      this.not_verifying = this.verifications.filter(verify => verify.status === 0).length;
    },
    async nextPage(page) {
      this.getTableData(page);
    },
    async prevPage(page) {
      this.getTableData(page);
    },
    async searchData(condition){
      this.getTableData(1,condition);
    }
    },
  created() {
    this.getTableData();
  }
}
</script>

<style>
</style>
