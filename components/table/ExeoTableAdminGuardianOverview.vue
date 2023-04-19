<template>
    <div class="tableblock_scroll">
        <table class="table_style_02 table_style_02--style16 looksort_table--small">
            <thead>
                <tr>
                    <th>レポート名</th>
                    <th>今月の結果</th>
                    <th>前月の結果</th>
                    <th>累計の結果</th>
                </tr>
            </thead>
            <tbody v-for="value in data">
                <tr>
                    <td class="looksort_table_name">
                        <div class="flex f-ai-center">
                            <span>{{ value.reportName }}</span>
                            <div class="statuschips statuschips--04 js-tooltip"
                                data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>">
                            </div>
                        </div>
                    </td>
                    <td class="looksort_table_results">{{ value.thisMonthResult }}</td>
                    <td class="looksort_table_last">{{ value.lastMonthResult }}</td>
                    <td class="looksort_table_cumulative">{{ value.cumulativeResult }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "ExeoTableAdminGuardianOverview",
    components: {

    },
    props: {
        data: {
            type: Array,
            required: true
        },
    },
    data() {
        return {

        }
    },
}
</script>