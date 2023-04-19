<template>
    <main id="page-T013" class="site_main">
        <nav class="breadcrumb">
            <ul>
                <li><a href="../">TOP</a></li>
                <li><a href="/">パークサポーター管理</a></li>
                <li>売上</li>
            </ul>
        </nav>
        <h1 class="page_ttl_01"><span>実績〈売上〉</span></h1>
        <SupporterSummaryHeader :user="user" :is-editing="true" />
        <div class="col2_block">
            <ExeoSupporterNavigationWindow></ExeoSupporterNavigationWindow>
            <div class="col2_block_main col2_block_main--block">
                <div class="daily_data">
                    <a href="" class="prev"></a>
                    <div class="daily_data_inr">
                        <p>
                            <span class="daily_data_num">2022年8月分</span>
                        </p>
                    </div>
                    <a href="" class="next"></a>
                </div>
                <div class="achievement-flex">
                    <div class="achievement-flex__item">
                        <a href="">
                            <div class="achievement-flex__txt"> 売上 </div>
                            <h2 class="achievement-flex__number">50,000円</h2>
                        </a>
                    </div>
                </div>
                <div class="tableblock_scroll">
                    <ExeoTableAdminSupporterResultSales :salesData="salesData"></ExeoTableAdminSupporterResultSales>
                </div>
            </div>
        </div>
        <div class="popup-main">
            <M016></M016>
        </div>
    </main>
</template>

<script>
import SupporterSummaryHeader from "@/components/header/SupporterSummaryHeader.vue";
import ExeoSupporterNavigationWindow from "@/components/other/ExeoSupporterNavigationWindow.vue";
import ExeoTableAdminSupporterResultSales from "@/components/table/ExeoTableAdminSupporterResultSales.vue";
import ExeoSelect from '@/components/action/ExeoSelect.vue';
import M016 from '@/components/modal/M016.vue';

export default {
    layout: "admin",
    components: {
        ExeoSupporterNavigationWindow,
        SupporterSummaryHeader,
        ExeoTableAdminSupporterResultSales,
        M016,
        ExeoSelect
    },
    head() {
        return {
            title: '実績〈売上〉'
        }
    },
    data() {
        return {
            reserveData: [],
            user: {},
            salesData: [
                { jobId: '00128', supportDate: '2022年07月16日', paymentStatus: '2022年07月17日12:00', fristName: '櫛谷 由貴', lastName: '鳥谷 さおる', requestCategory: 'シッター', breakdown: 'ペナルティ料', amount: '-5,000円', total: '8,800円' },
                { jobId: '00129', supportDate: '2022年07月16日', paymentStatus: '2022年07月17日12:00', fristName: '櫛谷 由貴', lastName: '鳥谷 さおる', requestCategory: 'シッター', breakdown: 'ペナルティ料', amount: '-5,000円', total: '8,800円' },
                { jobId: '00130', supportDate: '2022年07月16日', paymentStatus: '2022年07月17日12:00', fristName: '櫛谷 由貴', lastName: '鳥谷 さおる', requestCategory: 'シッター', breakdown: 'ペナルティ料', amount: '-5,000円', total: '8,800円' },
            ]
        };
    },
};
</script>   

<style scoped>

</style>