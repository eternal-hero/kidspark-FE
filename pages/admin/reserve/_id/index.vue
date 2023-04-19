<template>
    <main id="page-T056" class="site_main">
        <nav class="breadcrumb">
            <ul>
                <li><a href="../">TOP</a></li>
                <li><a href="/">予約・稼働状況〈予約詳細〉</a></li>
                <li>予約詳細</li>
            </ul>
        </nav>
        <h1 class="page_ttl_01"><span>予約・稼働状況〈予約詳細〉</span></h1>
        <ReserveHeader></ReserveHeader>
        <ul class="report-steps">
            <li v-bind:class="this.navbarStatus == 'booking' ? 'report-steps__item is-active' : 'report-steps__item'"><a
                    href="#" @click="booking">予約詳細</a></li>
            <li v-bind:class="this.navbarStatus == 'report' ? 'report-steps__item is-active' : 'report-steps__item'"><a
                    href="#" @click="report">レポート/レビュー</a></li>
            <li v-bind:class="this.navbarStatus == 'payment' ? 'report-steps__item is-active' : 'report-steps__item'"><a
                    href="#" @click="payment">決済結果</a></li>
            <li class='report-steps__item'><a href="#">見守りレポート</a></li>
        </ul>
        <BookingDetail v-if="this.navbarStatus == 'booking'"></BookingDetail>
        <ReportAndReview v-if="this.navbarStatus == 'report'"></ReportAndReview>
        <PaymentResult v-if="this.navbarStatus == 'payment'"></PaymentResult>
    </main>
</template>
<script>
import BookingDetail from '@/components/reserve/BookingDetail.vue';
import ReportAndReview from '@/components/reserve/ReportAndReview.vue';
import PaymentResult from '@/components/reserve/PaymentResult.vue';
import ReserveHeader from '@/components/reserve/ReserveHeader.vue';
export default {
    layout: 'admin',
    name: 'reserve',
    components: {
        BookingDetail,
        ReportAndReview,
        PaymentResult,
        ReserveHeader
    },
    head() {
        return {
            title: '予約・稼働状況〈予約詳細〉'
        }
    },
    data() {
        return {
            navbarStatus: 'booking',
        }
    },
    methods: {
        booking() {
            this.navbarStatus = 'booking';
        },
        report() {
            this.navbarStatus = 'report';
        },
        payment() {
            this.navbarStatus = 'payment';
        }
    }
}
</script>