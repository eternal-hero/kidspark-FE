<template>
    <table class="table_style_02 looksort_table">
        <thead>
            <tr>
                <th>お仕事ID</th>
                <th>開始</th>
                <th>終了</th>
                <th>ユーザー</th>
                <th>定/単</th>
                <th>依頼カテゴリー</th>
                <th>見守り</th>
                <th>ステータス</th>
                <th>メモ</th>
            </tr>
        </thead>
        <tbody v-for="value in reserveData" :key="value.serviceId">
            <tr>
                <td class="looksort_table_id"><a href="/T056.html">{{ value.serviceId }}</a></td>
                <td class="looksort_table_start">{{ value.beginning }}</td>
                <td class="looksort_table_end">{{ value.end }}</td>
                <td class="looksort_table_user"><a href="/T028.html">{{ value.lastName }}{{ value.firstName }}<br>{{
                    value.lastkana }} {{ value.firstkana }}</a></td>
                <td class="looksort_table_time">{{ value.constant }}</td>
                <td class="looksort_table_type">{{ value.Request }}</td>
                <td class="looksort_table_watching"><span class="icn_watching" v-if="value.watch == '1'">守</span></td>
                <td class="looksort_table_status">
                    <span class="statusicn statusicn_request" v-if="value.status == 0">リクエスト</span>
                    <span class="statusicn statusicn_quotation" v-if="value.status == 1">見積り提示</span>
                    <span class="statusicn statusicn_confirmation" v-if="value.status == 2">予約確定</span>
                    <span class="statusicn statusicn_awaitingreport" v-if="value.status == 3">レポート待ち</span>
                    <span class="statusicn statusicn_completion" v-if="value.status == 4">完　了</span>
                    <span class="statusicn statusicn_cancel" v-if="value.status == 5">期限切れ</span>
                    <span class="statusicn statusicn_cancel" v-if="value.status == 6">キャンセル</span>
                </td>
                <td class="looksort_table_memo"></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import ExeoSelect from "../action/ExeoSelect.vue";
import ExeoRadio from "~/components/action/ExeoRadio.vue";
import ExeoForm from "../form/ExeoForm.vue";

export default {
    name: "ExeoTableAdminSupporterResultReserve",
    components: { ExeoSelect, ExeoRadio, ExeoForm },
    props: {
        reserveData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            form: {}
        };
    },
    methods: {

    },
    created() {

    }
};
</script>
