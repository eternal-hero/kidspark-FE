<template>
    <div class="wrapper">
        <!--#include virtual="/assets/inc/sidebar.html" -->
        <!--▲▲ /#SIDEBAR ▲▲-->
        <main id="page-T042" class="site_main">
            <nav class="breadcrumb">
                <ul>
                    <li><a href="../">TOP</a></li>
                    <li><a href="/">ユーザー管理</a></li>
                    <li>概要</li>
                </ul>
            </nav>
            <h1 class="page_ttl_01"><span>実績〈概要〉</span></h1>
            <exeo-guardian-header :guardian="this.guardian" is-editing></exeo-guardian-header>
            <div class="col2_block f-ai-start">
                <exeo-guardian-navigation-window></exeo-guardian-navigation-window>
                <div class="col2_block_main">
                    <div class="achievement-flex">
                        <div class="achievement-flex__item">
                            <div class="flex">
                                <div class="achievement-flex__txt"> 今月の稼働状況 <a href="T045.html"><span>一覧をみる</span></a>
                                </div>
                                <h2 class="achievement-flex__number">20件</h2>
                            </div>
                        </div>
                        <div class="achievement-flex__item">
                            <div class="flex">
                                <div class="achievement-flex__txt"> 今月の支払い金額 <a
                                        href="T046.html"><span>売り上げをみる</span></a>
                                </div>
                                <h2 class="achievement-flex__number">35,000円</h2>
                            </div>
                        </div>
                        <p class="achievement-flex__desc">※2022年08月10日 午前0時 時点</p>
                    </div>
                    <ExeoTableAdminGuardianOverview :data="overviewData"></ExeoTableAdminGuardianOverview>
                </div>
            </div>
        </main>
    </div>
</template>

<script>

import ExeoTableAdminGuardianOverview from "@/components/table/ExeoTableAdminGuardianOverview.vue";
import ExeoGuardianHeader from "@/components/header/ExeoGuardianHeader.vue";
import ExeoGuardianNavigationWindow from "@/components/other/ExeoGuardianNavigationWindow.vue";

export default {
    layout: 'admin',
    name: "GuardianProfile",
    components: {
        ExeoGuardianNavigationWindow,
        ExeoGuardianHeader,
        ExeoTableAdminGuardianOverview
    },
    head() {
        return {
            title: '実績〈概要〉'
        }
    },
    data() {
        return {
            data: [],
            guardian_profile: {},
            guardian: {
                first_name: " ",
                last_name: " ",
                first_kana: " ",
                last_kana: " ",
                rating: 0,
            },
            isEditing: false,
            overviewData: [
                { reportName: '依頼回数', thisMonthResult: '30回', lastMonthResult: '3回', cumulativeResult: '33回' },
                { reportName: '予約成立率', thisMonthResult: '20人', lastMonthResult: '10人', cumulativeResult: '30人' },
                { reportName: '返信率', thisMonthResult: '10人', lastMonthResult: '5人', cumulativeResult: 'ー' },
                { reportName: '直前キャンセル率', thisMonthResult: '10人', lastMonthResult: '98%', cumulativeResult: 'ー' },
            ],
        }
    },
    methods: {

    }
}
</script>

<style scoped>

</style>
