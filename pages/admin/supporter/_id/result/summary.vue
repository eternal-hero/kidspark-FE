<template>
    <main id="page-T011" class="site_main">
        <nav class="breadcrumb">
            <ul>
                <li><a href="../">TOP</a></li>
                <li><a href="/">パークサポーター管理</a></li>
                <li>概要</li>
            </ul>
        </nav>
        <h1 class="page_ttl_01"><span>実績〈概要〉</span></h1>
        <SupporterSummaryHeader :user="user" :is-editing="true" />
        <div class="col2_block">
            <ExeoSupporterNavigationWindow></ExeoSupporterNavigationWindow>
            <div class="col2_block_main col2_block_main--block">
                <div class="achievement-flex">
                    <div class="achievement-flex__item">
                        <a href="/T055.html">
                            <div class="achievement-flex__txt"> 今月の稼働状況 <span>一覧をみる</span>
                            </div>
                            <h2 class="achievement-flex__number">20件</h2>
                        </a>
                    </div>
                    <div class="achievement-flex__item">
                        <a href="/T013.html">
                            <div class="achievement-flex__txt"> 今月の売上見込み金額 <span>売り上げをみる</span>
                            </div>
                            <h2 class="achievement-flex__number">35,000円</h2>
                        </a>
                    </div>
                    <p class="achievement-flex__desc">※2022年08月10日 午前0時 時点</p>
                </div>
                <div class="tableblock_scroll">
                    <ExeoTableAdminResultSummary :summaryData='summaryData'></ExeoTableAdminResultSummary>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import SupporterSummaryHeader from "@/components/header/SupporterSummaryHeader.vue";
import ExeoSupporterNavigationWindow from "@/components/other/ExeoSupporterNavigationWindow.vue";
import ExeoTableAdminResultSummary from '@/components/table/ExeoTableAdminResultSummary.vue';
export default {
    layout: "admin",
    components: {
        ExeoSupporterNavigationWindow,
        SupporterSummaryHeader,
        ExeoTableAdminResultSummary
    },
    head() {
        return {
            title: '実績〈概要〉'
        }
    },
    data() {
        return {
            summaryData: [],
            user: {}
        };
    },
};
</script>   

<style scoped>

</style>