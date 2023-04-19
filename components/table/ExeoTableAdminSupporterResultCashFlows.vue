<template>
    <table class="table_style_02 todolist_table">
        <thead>
            <tr>
                <th>日付</th>
                <th>内容</th>
                <th>金額</th>
                <th>備考<span>※パークサポーターには表示されません</span></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="todolist_table_priority">2022年08月15日</td>
                <td class="todolist_table_details">7月分振込</td>
                <td class="todolist_table_status">
                    <div class="todolist_table_status-flex">
                        <div class="todolist_table_status-day">40,780円</div>
                        <span class="statusicn statusicn_completion">支払い済み</span>
                    </div>
                </td>
                <td class="todolist_table_btn">
                    <div class="todolist_table_btn-flex">
                        <div class="todolist_table_txt"> 三菱ＵＦＪ銀行/支店コード 000<br> 普通預金 1234456/ヤマダタロウ </div>
                        <div class="btn_area">
                            <button class="btn_style_02">編集</button>
                            <button class="btn_style_03">削除</button>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="todolist_table_priority">
                    <ExeoForm type="text" value="2022年08月15日" class="tableform_input"></ExeoForm>
                </td>
                <td class="todolist_table_details"><input type="text" value="振込手数料" class="tableform_input"></td>
                <td class="todolist_table_status">
                    <div class="todolist_table_status-flex">
                        <ExeoForm type="text" value="-220円" class="tableform_input"></ExeoForm>
                        <div class="tableform_select">
                            <ExeoSelect :options="paidOptions" value="0"></ExeoSelect>
                        </div>
                    </div>
                </td>
                <td class="todolist_table_btn">
                    <div class="todolist_table_btn-flex">
                        <ExeoForm type="text" value="" class="tableform_input"></ExeoForm>
                        <div class="btn_area">
                            <button class="btn_style_01">保存</button>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="todolist_table_priority"><span class="tx-red">2022年8月1日</span></td>
                <td class="todolist_table_details"><span class="tx-red">7月売上確定</span></td>
                <td class="todolist_table_status">
                    <div class="todolist_table_status__right">
                        <span class="tx-red">50,000円</span>
                    </div>
                </td>
                <td class="todolist_table_btn"></td>
            </tr>
            <tr>
                <td class="todolist_table_priority">2022年07月20日</td>
                <td class="todolist_table_details">00129のお仕事</td>
                <td class="todolist_table_status">
                    <div class="todolist_table_status__right">6000円</div>
                </td>
                <td class="todolist_table_btn"></td>
            </tr>
            <tr>
                <td class="todolist_table_priority">2022年07月15日</td>
                <td class="todolist_table_details">6月繰越分</td>
                <td class="todolist_table_status">
                    <div class="todolist_table_status-flex">
                        <div class="todolist_table_status-day todolist_table_status__right"> 15,000円 </div>
                        <span class="statusicn statusicn_unsupported">振込エラー</span>
                    </div>
                </td>
                <td class="todolist_table_btn">
                    <div class="btn_area">
                        <button class="btn_style_02">編集</button>
                        <button class="btn_style_03">削除</button>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="todolist_table_priority">2022年07月02日</td>
                <td class="todolist_table_details">00128のお仕事</td>
                <td class="todolist_table_status">
                    <div class="todolist_table_status__right">20,000円</div>
                </td>
                <td class="todolist_table_btn"></td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import ExeoSelect from '../action/ExeoSelect.vue';
import ExeoForm from '../form/ExeoForm.vue';

export default {
    props: {},
    data() {
        return {
            paidOptions: [
                { label: "---", value: 0 },
                { label: "支払い済み", value: 1 },
                { label: "振込エラー", value: 2 },
            ]
        };
    },
    components: { ExeoSelect, ExeoForm }
}
</script>