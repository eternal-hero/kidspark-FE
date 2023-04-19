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
		<ExeoVerifyReportStep :isGuardian="false" />
		<div class="application-block application-block--style2">
			<m032 @submit="searchData" :value = "condition"></m032>
			<div class="application-block__right">
				<div class="statusicn statusicn--04 statusicn_unsupported">未対応</div>
				<div class="application-block__right-txt">{{ not_verifying }}件</div>
			</div>
		</div>
		<ExeoTableSupporterVerification :application_documents = "application_documents"/>
    <exeo-pagenation @next="nextPage" @prev="prevPage" :current_page="this.current_page" :last="this.last_page"
    :per_page="this.per_page"></exeo-pagenation>
	</main>
</template>

<script>
import ExeoTableSupporterVerification from "~/components/table/ExeoTableSupporterVerification.vue"
import ExeoPagenation from '~/components/ExeoPagenation.vue'
import ExeoVerifyReportStep from '~/components/other/ExeoVerifyReportStep.vue'
import M032 from '~/components/modal/M032.vue'
import ApplicationDocumentService from "@/services/admin/supporter/ApplicationDocumentService";


export default {
    layout: 'admin',
    components: {
        ExeoTableSupporterVerification,
        ExeoPagenation,
		ExeoVerifyReportStep,
		M032
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
				category: '',
				supporter_info: '',
				expiration_on: ''
			},
      last_page: null,
      current_page: null,
      per_page: 10,
      not_verifying:0,
			application_documents: []
        }
    },
    methods: {
    async getTableData(page,condition = this.condition){
      const responseData = await ApplicationDocumentService.getApplicationDocumentList(this,page,condition);
      this.application_documents = responseData.data;
      this.current_page = responseData.current_page;
      this.per_page = responseData.per_page;
      this.last_page = responseData.last_page;
      if(!Array.isArray(this.application_documents)){
        this.application_documents = Object.values(this.application_documents);
      }
      this.not_verifying = this.application_documents.filter(document => document.status === 0).length;
      console.log(this.application_documents)
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
