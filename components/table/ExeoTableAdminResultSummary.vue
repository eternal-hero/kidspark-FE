<template>
    <div>
        <table class="table_style_02 looksort_table looksort_table--small">
            <thead>
                <tr>
                    <th>レポート名</th>
                    <th>今月の結果</th>
                    <th>前月の結果</th>
                    <th>累計の結果</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="looksort_table_name">お仕事回数<span class="js-tooltip"
                            data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>"></span>
                    </td>
                    <td class="looksort_table_results">30回</td>
                    <td class="looksort_table_last">3回</td>
                    <td class="looksort_table_cumulative">33回</td>
                </tr>
                <tr>
                    <td class="looksort_table_name">フォロワー数<span class="js-tooltip"
                            data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>"></span>
                    </td>
                    <td class="looksort_table_results">20人</td>
                    <td class="looksort_table_last">10人</td>
                    <td class="looksort_table_cumulative">30人</td>
                </tr>
                <tr>
                    <td class="looksort_table_name">リピートユーザー数<span class="js-tooltip"
                            data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>"></span>
                    </td>
                    <td class="looksort_table_results">10人</td>
                    <td class="looksort_table_last">5人</td>
                    <td class="looksort_table_cumulative">ー</td>
                </tr>
                <tr>
                    <td class="looksort_table_name">予約成立率<span class="js-tooltip"
                            data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>"></span>
                    </td>
                    <td class="looksort_table_results">100%</td>
                    <td class="looksort_table_last">98%</td>
                    <td class="looksort_table_cumulative">ー</td>
                </tr>
                <tr>
                    <td class="looksort_table_name">返信率<span class="js-tooltip"
                            data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>"></span>
                    </td>
                    <td class="looksort_table_results">100%</td>
                    <td class="looksort_table_last">100%</td>
                    <td class="looksort_table_cumulative">ー</td>
                </tr>
                <tr>
                    <td class="looksort_table_name">直前キャンセル率<span class="js-tooltip"
                            data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>"></span>
                    </td>
                    <td class="looksort_table_results">0%</td>
                    <td class="looksort_table_last">0%</td>
                    <td class="looksort_table_cumulative">ー</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'ExeoTableAdminDashboardSupport',
    props: {
        summaryData: {
            type: Array,
            default: []
        }
    }
}
</script>
<style scoped>

</style>