<template>
    <div>
        <table class="table_style_02 receivingelectricity_table">
            <thead>
                <tr>
                    <th>日時</th>
                    <th>作成者</th>
                    <th>件名</th>
                    <th>発信者</th>
                    <th>問い合わせ内容</th>
                    <th>回答内容</th>
                    <th>対応所要時間(分)</th>
                </tr>
            </thead>
            <tbody v-for="data in supports" :key="data.date">
                <tr>
                    <td class="receivingelectricity_table_data">{{ data.date }}</td>
                    <td class="receivingelectricity_table_author">{{ data.author }}</td>
                    <td class="receivingelectricity_table_title"><a href="">{{ data.subject }}</a></td>
                    <td class="receivingelectricity_table_sender"><a href="">{{ data.sender }}</a></td>
                    <td class="receivingelectricity_table_inquiry">{{ data.inquiry }}</td>
                    <td class="receivingelectricity_table_responses">
                        {{ data.answerContent }}
                    </td>
                    <td class="receivingelectricity_table_time">{{ data.tableTime }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'ExeoTableAdminDashboardSupport',
    props: {
        supports: {
            type: Array,
            default: []
        }
    }
}
</script>
<style scoped>

</style>