<template>
    <div class="result-block">
        <h2 class="cmn-ttl-01">クレジット決済結果</h2>
        <div class="result-block__ct">
            <table class="result-block__table looksort_table">
                <tr>
                    <th>決済ID</th>
                    <td>LhbNbAKo</td>
                </tr>
                <tr>
                    <th>金額</th>
                    <td>6,300円</td>
                </tr>
                <tr>
                    <th>決済手数料</th>
                    <td>150円</td>
                </tr>
                <tr>
                    <th>結果</th>
                    <td>OK</td>
                </tr>
                <tr>
                    <th>備考</th>
                    <td>[SENDPOINT:SHIBUYA_BEERGARDEN]202.221.139.50/</td>
                </tr>
                <tr>
                    <th>日付</th>
                    <td>2020-10-30 22:19:21.439041</td>
                </tr>
            </table>
        </div>
        <h2 class="cmn-ttl-01">ポイント決済結果</h2>
        <div class="result-block__ct">
            <table class="result-block__table">
                <tr>
                    <th>決済ID</th>
                    <td>LhbNbAKo</td>
                </tr>
                <tr>
                    <th>ポイント</th>
                    <td>6,300pt</td>
                </tr>
                <tr>
                    <th>結果</th>
                    <td>OK</td>
                </tr>
                <tr>
                    <th>日付</th>
                    <td>2020-10-30 22:19:21.439041</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: "PaymentResult",
    props: {
        value: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {

        };
    },
};
</script>