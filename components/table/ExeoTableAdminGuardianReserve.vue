<template>

    <div class="tableblock_scroll">
        <table class="table_style_02 table_style_02--style2 looksort_table">
            <thead>
                <tr>
                    <th>お仕事ID</th>
                    <th>開始</th>
                    <th>終了</th>
                    <th>パークサポーター</th>
                    <th>定/単</th>
                    <th>依頼カテゴリー</th>
                    <th>見守り</th>
                    <th>ステータス</th>
                </tr>
            </thead>
            <tbody v-for="data in value">
                <tr>
                    <td class="looksort_table_id"><a href="T056.html">{{ data.jobId }}</a></td>
                    <td class="looksort_table_start">{{ data.start }}</td>
                    <td class="looksort_table_end"> {{ data.end }} </td>
                    <td class="looksort_table_user"><a href="T002.html">{{ data.first_name }} {{ data.last_name }}
                            <br /> {{ data.first_kana }} {{ data.last_kana }}</a></td>
                    <td class="looksort_table_time">{{ data.constant }}</td>
                    <td class="looksort_table_type">{{ data.requestCategory }}</td>
                    <td class="looksort_table_watching">
                        <span class="icn_watching" v-if="data.watchOver == 1">守</span>
                    </td>
                    <td class="looksort_table_status">
                        <span class="statusicn statusicn_request">リクエスト</span>
                    </td>
                </tr>
                <!-- <tr>
                    <td class="looksort_table_id"><a href="T056.html">0000124</a></td>
                    <td class="looksort_table_start">2022年07月20日(水) 12:00</td>
                    <td class="looksort_table_end">2022年07月20日(水) 15:00</td>
                    <td class="looksort_table_user"><a href="T002.html">坂口 桃香<br>さかぐち ももこ</a></td>
                    <td class="looksort_table_time">単発</td>
                    <td class="looksort_table_type">家庭教師</td>
                    <td class="looksort_table_watching"></td>
                    <td class="looksort_table_status"><span class="statusicn statusicn_quotation">見積り提示</span></td>
                </tr>
                <tr>
                    <td class="looksort_table_id"><a href="T056.html">0000125</a></td>
                    <td class="looksort_table_start">2022年07月20日(水) 12:00</td>
                    <td class="looksort_table_end">2022年07月20日(水) 15:00</td>
                    <td class="looksort_table_user"><a href="T002.html">美王 彩華<br>みおう あやか</a></td>
                    <td class="looksort_table_time">単発</td>
                    <td class="looksort_table_type">家事代行</td>
                    <td class="looksort_table_watching"></td>
                    <td class="looksort_table_status"><span class="statusicn statusicn_confirmation">予約確定</span>
                    </td>
                </tr>
                <tr>
                    <td class="looksort_table_id"><a href="T056.html">0000126</a></td>
                    <td class="looksort_table_start">2022年07月20日(水) 12:00</td>
                    <td class="looksort_table_end">2022年07月20日(水) 15:00</td>
                    <td class="looksort_table_user"><a href="T002.html">森 愛桜<br>もり あいら</a></td>
                    <td class="looksort_table_time">定期</td>
                    <td class="looksort_table_type">産前産後</td>
                    <td class="looksort_table_watching"><span class="icn_watching">守</span></td>
                    <td class="looksort_table_status"><span class="statusicn statusicn_awaitingreport">レポート待ち</span>
                    </td>
                </tr>
                <tr>
                    <td class="looksort_table_id"><a href="T056.html">0000127</a></td>
                    <td class="looksort_table_start">2022年07月20日(水) 12:00</td>
                    <td class="looksort_table_end">2022年07月20日(水) 15:00</td>
                    <td class="looksort_table_user"><a href="T002.html">持明 望彩<br>じみょう のあ</a></td>
                    <td class="looksort_table_time">単発</td>
                    <td class="looksort_table_type">シッター</td>
                    <td class="looksort_table_watching"></td>
                    <td class="looksort_table_status"><span class="statusicn statusicn_completion">完　了</span></td>
                </tr>
                <tr>
                    <td class="looksort_table_id"><a href="T056.html">0000123</a></td>
                    <td class="looksort_table_start">2022年07月20日(水) 12:00</td>
                    <td class="looksort_table_end">2022年07月20日(水) 15:00</td>
                    <td class="looksort_table_user"><a href="T002.html">倍賞 繭麻<br>ばいしょう まゆあ</a></td>
                    <td class="looksort_table_time">単発</td>
                    <td class="looksort_table_type">シッター</td>
                    <td class="looksort_table_watching"></td>
                    <td class="looksort_table_status"><span class="statusicn statusicn_cancel">期限切れ</span></td>
                </tr>
                <tr>
                    <td class="looksort_table_id"><a href="T056.html">0000124</a></td>
                    <td class="looksort_table_start">2022年07月20日(水) 12:00</td>
                    <td class="looksort_table_end">2022年07月20日(水) 15:00</td>
                    <td class="looksort_table_user"><a href="T002.html">宿谷 菜々子<br>しゅくたに ななこ</a></td>
                    <td class="looksort_table_time">単発</td>
                    <td class="looksort_table_type">シッター</td>
                    <td class="looksort_table_watching"></td>
                    <td class="looksort_table_status"><span class="statusicn statusicn_cancel">キャンセル</span></td>
                </tr>
                <tr>
                    <td class="looksort_table_id"><a href="T056.html">0000125</a></td>
                    <td class="looksort_table_start">2022年07月20日(水) 12:00</td>
                    <td class="looksort_table_end">2022年07月20日(水) 15:00</td>
                    <td class="looksort_table_user"><a href="T002.html">加藤 南菜芭<br>かとう みなは</a></td>
                    <td class="looksort_table_time">単発</td>
                    <td class="looksort_table_type">シッター</td>
                    <td class="looksort_table_watching"></td>
                    <td class="looksort_table_status"><span class="statusicn statusicn_completion">完　了</span></td>
                </tr>
                <tr>
                    <td class="looksort_table_id"><a href="T056.html">0000126</a></td>
                    <td class="looksort_table_start">2022年07月20日(水) 12:00</td>
                    <td class="looksort_table_end">2022年07月20日(水) 15:00</td>
                    <td class="looksort_table_user"><a href="T002.html">弥 梅来<br>ひさし うき</a></td>
                    <td class="looksort_table_time">単発</td>
                    <td class="looksort_table_type">シッター</td>
                    <td class="looksort_table_watching"></td>
                    <td class="looksort_table_status"><span class="statusicn statusicn_completion">完　了</span></td>
                </tr>
                <tr>
                    <td class="looksort_table_id"><a href="T056.html">0000127</a></td>
                    <td class="looksort_table_start">2022年07月20日(水) 12:00</td>
                    <td class="looksort_table_end">2022年07月20日(水) 15:00</td>
                    <td class="looksort_table_user"><a href="T002.html">近藤 敬子<br>こんどう けいこ</a></td>
                    <td class="looksort_table_time">定期</td>
                    <td class="looksort_table_type">シッター</td>
                    <td class="looksort_table_watching"></td>
                    <td class="looksort_table_status"><span class="statusicn statusicn_completion">完　了</span></td>
                </tr> -->
            </tbody>
        </table>
    </div>

</template>

<script>
export default {
    props: {
        value: {
            type: Array,
            default: []
        },
    },

    methods: {

    },
}
</script>