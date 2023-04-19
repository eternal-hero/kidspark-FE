<template>
    <main id="page-T055" class="site_main">
        <nav class="breadcrumb">
            <ul>
                <li><a href="../">TOP</a></li>
                <li>予約・稼働状況</li>
            </ul>
        </nav>
        <h1 class="page_ttl_01"><span>予約・稼働状況〈一覧〉</span></h1>
        <div class="looksort">
            <div class="form_block">
                <div class="form_part">
                    <button class="btn_style_05 js-popup">絞り込む</button>
                </div>
            </div>
            <div class="tableblock_scroll">
                <ExeoTableAdminReserve :reserveData="reserveData"></ExeoTableAdminReserve>
            </div>
        </div>
        <exeo-pagenation @next="nextPage" @prev="prevPage" :current_page="this.current_page" :last="this.last_page"
            :per_page="this.per_page"></exeo-pagenation>
        <div class="flex_box f-jc-flex-end">
            <div class="statusdescription looksort_statusdescription">
                <p class="statusdescription_ttl">ステータス説明</p>
                <ul class="statusdescription_list">
                    <li><span class="statusicn statusicn_request">リクエスト</span><span>ユーザーのリクエスト中</span></li>
                    <li><span class="statusicn statusicn_quotation">見積り提示</span><span>サポーターから見積提出済み</span></li>
                    <li><span class="statusicn statusicn_confirmation">予約確定</span><span>予約確定しました</span></li>
                    <li><span class="statusicn statusicn_confirmation_ok">予約確定</span><span>サポーターが当日準備OKのボタンを押しました</span>
                    </li>
                    <li><span class="statusicn statusicn_confirmation_support">予約確定</span><span>サポート中</span></li>
                    <li><span class="statusicn statusicn_awaitingreport">レポート待ち</span><span>サポート終了後の完了報告待ち</span></li>
                    <li><span class="statusicn statusicn_awaitingapproval">承認待ち</span><span>サポート終了後のレポート承認待ち</span></li>
                    <li><span class="statusicn statusicn_completion">完　了</span><span>売上確定</span></li>
                    <li><span class="statusicn statusicn_expiration">期限切れ</span><span>見積またはリクエスの返答期限を過ぎました</span></li>
                    <li><span class="statusicn statusicn_cancel">キャンセル</span><span>予約キャンセルされました</span></li>
                </ul>
            </div>
        </div>
        <M015></M015>
    </main>
</template>
<script>
import M015 from '@/components/modal/M015.vue';
import ExeoTableAdminReserve from '@/components/table/ExeoTableAdminReserve.vue';
export default {
    layout: 'admin',
    name: 'reservePage',
    components: {
        M015,
        ExeoTableAdminReserve
    },
    head() {
        return {
            title: '予約・稼働状況〈一覧〉'
        }
    },
    data() {
        return {
            last: null,
            current_page: null,
            per_page: null,
            guardians: [],
            modalData: {},
            guardians_excel: [],
            open_modal: false,
            reserveData: [
                { jobId: '0000123', beginning: '2022年07月20日(水) 12:00', end: '2022年07月20日(水) 15:00', lastName: '櫛谷', firstName: '由貴', lastkana: 'くしや', firstkana: 'ゆき', constant: '定期', Request: '家庭教師', watch: '0', status: '0', memo: '' },
                { jobId: '0000123', beginning: '2022年07月20日(水) 12:00', end: '2022年07月20日(水) 15:00', lastName: '櫛谷', firstName: '由貴', lastkana: 'くしや', firstkana: 'ゆき', constant: '定期', Request: '家庭教師', watch: '1', status: '1', memo: '' },
                { jobId: '0000124', beginning: '2022年07月21日(水) 12:00', end: '2022年07月20日(水) 15:00', lastName: '櫛谷', firstName: '由貴', lastkana: 'くしや', firstkana: 'ゆき', constant: '定期', Request: '家庭教師', watch: '1', status: '2', memo: '' },
                { jobId: '0000125', beginning: '2022年07月22日(水) 12:00', end: '2022年07月20日(水) 15:00', lastName: '櫛谷', firstName: '由貴', lastkana: 'くしや', firstkana: 'ゆき', constant: '定期', Request: '家庭教師', watch: '1', status: '3', memo: '' },
                { jobId: '0000126', beginning: '2022年07月22日(水) 12:00', end: '2022年07月20日(水) 15:00', lastName: '櫛谷', firstName: '由貴', lastkana: 'くしや', firstkana: 'ゆき', constant: '定期', Request: '家庭教師', watch: '0', status: '4', memo: '' },
                { jobId: '0000127', beginning: '2022年07月22日(水) 12:00', end: '2022年07月20日(水) 15:00', lastName: '櫛谷', firstName: '由貴', lastkana: 'くしや', firstkana: 'ゆき', constant: '定期', Request: '家庭教師', watch: '0', status: '5', memo: '' },
                { jobId: '0000128', beginning: '2022年07月22日(水) 12:00', end: '2022年07月20日(水) 15:00', lastName: '櫛谷', firstName: '由貴', lastkana: 'くしや', firstkana: 'ゆき', constant: '定期', Request: '家庭教師', watch: '1', status: '6', memo: '' }
            ]
        }
    },
    methods: {

    }
}
</script>
<style scoped></style>
