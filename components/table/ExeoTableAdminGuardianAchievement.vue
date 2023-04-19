<template>
    <div class="tableblock_scroll">
        <table class="table_style_02 table_style_02--style2">
            <thead>
                <tr>
                    <th>日付</th>
                    <th>お仕事ID</th>
                    <th>理由</th>
                    <th>職種</th>
                    <th>金額</th>
                </tr>
            </thead>
            <tbody v-for="value in data" :key="value.jobId">
                <tr>
                    <td class="looksort_table_date">{{ value.date }}</td>
                    <td class="looksort_table_id underline">{{ value.jobId }}</td>
                    <td class="looksort_table_cause">{{ value.reason }}</td>
                    <td class="looksort_table_occupation">{{ value.occupation }}</td>
                    <td class="looksort_table_price">{{ value.money }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ExeoTableAdminGuardianAchievement',
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    data() {
        return {

        }
    }
}
</script>
<style scoped>

</style>