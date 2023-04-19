<template>

    <table class="table_style_02 todolist_table">
        <thead>
            <tr>
                <th>優先度</th>
                <th>内容</th>
                <th>ステータス</th>
                <th>対応者</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in toToList" :key="toToList.index">
                <td class="todolist_table_priority">{{ $PRIORITY[data.priority] }}</td>
                <td class="todolist_table_details">メールワイズの問い合わせ対応</td>
                <td class="todolist_table_status">
                    <span v-bind:class=statusClass[data.status]>{{ status[data.status] }}</span>
                </td>
                <td class="todolist_table_person">管理者　花子</td>
                <td class="todolist_table_btn">
                    <div class="btn_area">
                        <button class="btn_style_02">編集</button>
                        <button class="btn_style_03">削除</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

</template>

<script>
export default {
    name: 'ExeoTableAdminDashboard',
    props: {
        toToList: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            status: {
                0: '未対応',
                1: '対応中',
                2: '完　了',
            },
            statusClass : {
                0: 'statusicn statusicn_supporting',
                1: 'statusicn statusicn_completion',
                2: 'statusicn statusicn_unsupported',
            }
        }
    }
}
</script>
<style scoped>

</style>