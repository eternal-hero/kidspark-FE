<template>
    <main id="page-T011" class="site_main">
        <nav class="breadcrumb">
            <ul>
                <li><a href="../">TOP</a></li>
                <li><a href="/">パークサポーター管理</a></li>
                <li>概要</li>
            </ul>
        </nav>
        <h1 class="page_ttl_01"><span>実績〈予約状況〉</span></h1>
        <SupporterSummaryHeader :user="user" :is-editing="true" />
        <div class="col2_block">
            <ExeoSupporterNavigationWindow></ExeoSupporterNavigationWindow>
            <div class="col2_block_main col2_block_main--block">
                <div class="achievements-block">
                    <div class="application-block__btn">
                        <button class="btn_style_05 js-popup">絞り込む</button>
                    </div>
                    <div class="form_part_select">
                        <ExeoSelect :options="sortOptions" value='1'></ExeoSelect>
                    </div>
                </div>
                <div class="tableblock_scroll">
                    <ExeoTableAdminSupporterResultReserve :reserveData='reserveData'>
                    </ExeoTableAdminSupporterResultReserve>
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
import ExeoTableAdminSupporterResultReserve from "@/components/table/ExeoTableAdminSupporterResultReserve.vue";
import ExeoSelect from '@/components/action/ExeoSelect.vue';
import M016 from '@/components/modal/M016.vue';

export default {
    layout: "admin",
    components: {
        ExeoSupporterNavigationWindow,
        SupporterSummaryHeader,
        ExeoTableAdminSupporterResultReserve,
        M016,
        ExeoSelect
    },
    head() {
        return {
            title: '実績〈概要〉'
        }
    },
    data() {
        return {
            reserveData: [
                { serviceId: '0000123', beginning: '2022年07月20日(水) 12:00', end: '2022年07月20日(水) 15:00', lastName: '櫛谷', firstName: '由貴', lastkana: 'くしや', firstkana: 'ゆき', constant: '定期', Request: '家庭教師', watch: '0', status: '0', memo: '' },
                { serviceId: '0000123', beginning: '2022年07月20日(水) 12:00', end: '2022年07月20日(水) 15:00', lastName: '櫛谷', firstName: '由貴', lastkana: 'くしや', firstkana: 'ゆき', constant: '定期', Request: '家庭教師', watch: '1', status: '1', memo: '' },
                { serviceId: '0000124', beginning: '2022年07月21日(水) 12:00', end: '2022年07月20日(水) 15:00', lastName: '櫛谷', firstName: '由貴', lastkana: 'くしや', firstkana: 'ゆき', constant: '定期', Request: '家庭教師', watch: '1', status: '2', memo: '' },
                { serviceId: '0000125', beginning: '2022年07月22日(水) 12:00', end: '2022年07月20日(水) 15:00', lastName: '櫛谷', firstName: '由貴', lastkana: 'くしや', firstkana: 'ゆき', constant: '定期', Request: '家庭教師', watch: '1', status: '3', memo: '' },
                { serviceId: '0000126', beginning: '2022年07月22日(水) 12:00', end: '2022年07月20日(水) 15:00', lastName: '櫛谷', firstName: '由貴', lastkana: 'くしや', firstkana: 'ゆき', constant: '定期', Request: '家庭教師', watch: '0', status: '4', memo: '' },
                { serviceId: '0000127', beginning: '2022年07月22日(水) 12:00', end: '2022年07月20日(水) 15:00', lastName: '櫛谷', firstName: '由貴', lastkana: 'くしや', firstkana: 'ゆき', constant: '定期', Request: '家庭教師', watch: '0', status: '5', memo: '' },
                { serviceId: '0000128', beginning: '2022年07月22日(水) 12:00', end: '2022年07月20日(水) 15:00', lastName: '櫛谷', firstName: '由貴', lastkana: 'くしや', firstkana: 'ゆき', constant: '定期', Request: '家庭教師', watch: '1', status: '6', memo: '' }
            ],
            user: {},
            sortOptions: [
                { label: '並べ替え', value: 0 },
                { label: 'お仕事ID順', value: 1 },
                { label: '開始順', value: 2 },
                { label: 'ユーザー順', value: 3 },
                { label: 'ステータス順', value: 4 }
            ]
        };
    },
};
</script>   

<style scoped></style>