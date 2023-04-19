<template>
    <table class="table_style_02 looksort_table looksort_table--small">
        <thead>
            <tr>
                <th>お仕事ID</th>
                <th>サポート日</th>
                <th>決済状況</th>
                <th>ユーザー</th>
                <th>依頼カテゴリー</th>
                <th>内訳</th>
                <th>合計</th>
            </tr>
        </thead>
        <tbody v-for="data in salesData" :key="data.jobId">
            <tr>
                <td class="looksort_table_id">{{ data.jobId }}</td>
                <td class="looksort_table_start">{{ data.supportDate }}</td>
                <td class="looksort_table_end">{{ data.paymentStatus }}</td>
                <td class="looksort_table_supporter">
                    <a href="/T058.html"> {{ data.fristName }}<br>{{ data.lastName }} </a>
                </td>
                <td class="looksort_table_user">{{ data.requestCategory }}</td>
                <td class="looksort_table_time">
                    <div class="looksort_table_time-flex">
                        <div class="looksort_table_time-left"> {{ data.breakdown }} </div>
                        <div class="looksort_table_time-right"> {{ data.amount }} </div>
                    </div>
                </td>
                <td class="looksort_table_type"> {{ data.total }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        salesData: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {

        };
    },
}
</script>