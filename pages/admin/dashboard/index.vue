<template>
    <main id="page-T062" class="site_main">
        <nav class="breadcrumb">
            <ul>
                <li><a href="/app/admin/dashboard">TOP</a></li>
                <li>ダッシュボード</li>
            </ul>
        </nav>
        <h1 class="page_ttl_01"><span>ダッシュボード</span></h1>
        <!-- <div class="daily">
            <div class="daily_data">
                <a href="" class="prev"></a>
                <div class="daily_data_inr">
                    <p>
                        <span class="daily_data_num">2022年7月15日</span><br>
                        <span class="daily_data_week">水曜日</span>
                    </p>
                </div>
                <a href="" class="next"></a>
            </div>
            <DailyLookBox></DailyLookBox>
        </div>
        <div class="reminder js-reminder">
            <div class="reminder_ttlbox">
                <h2 class="page_ttl_02"><span>申し送り</span></h2>
                <div class="btn_area">
                    <button class="btn_style_01">保存</button>
                    <button class="btn_style_02">編集</button>
                </div>
            </div>
            <ExeoTextarea rows="6" placeholder="入力して下さい"></ExeoTextarea>
        </div>
        <div class="todolist">
            <div class="todolist_ttlbox">
                <h2 class="page_ttl_02"><span>やることリスト</span></h2>
                <button class="btn_style_04 js-add-todo">新規作成</button>
            </div>
            <ExeoTableAdminDashboard :toToList="this.toToList"></ExeoTableAdminDashboard>
        </div>
        <div class="receivingelectricity">
            <div class="receivingelectricity_ttlbox">
                <h2 class="page_ttl_02"><span>受電対応</span></h2>
                <div class="receivingelectricity_ttlbox_inr">
                    <span>
                        <span>第1受電</span>
                        <div class="tableform_select">
                            <ExeoSelect :options="firstOptions"></ExeoSelect>
                        </div>
                    </span>
                    <span>
                        <span>第2受電</span>
                        <div class="tableform_select">
                            <ExeoSelect :options="secondOptions"></ExeoSelect>
                        </div>
                    </span>
                    <span>
                        <span>第3受電</span>
                        <div class="tableform_select">
                            <ExeoSelect :options="thirdOptions"></ExeoSelect>
                        </div>
                        <button class="btn_style_01">保存</button>
                    </span>
                </div>
                <a href="/T077.html" target="_blank" class="btn_style_04">新規作成</a>
            </div>
            <ExeoTableAdminDashboardSupport :supports="this.supports"></ExeoTableAdminDashboardSupport>
        </div> -->
    </main>
</template>

<script>
import DailyLookBox from '../../../components/card/admin/dashboard-box-card/DailyLookBox.vue';
import ExeoTextarea from '../../../components/form/ExeoTextarea.vue';
import ExeoTableAdminDashboard from '../../../components/table/ExeoTableAdminDashboardToList.vue';
import ExeoTableAdminDashboardSupport from '../../../components/table/ExeoTableAdminDashboardSupport.vue';
import ExeoSelect from '../../../components/action/ExeoSelect.vue';

export default {
    layout: 'admin',
    components: {
        DailyLookBox,
        ExeoTextarea,
        ExeoTableAdminDashboard,
        ExeoTableAdminDashboardSupport,
        ExeoSelect
    },
    head() {
        return {
            title: 'ダッシュボード'
        }
    },
    data() {
        return {
            supports: [
                {
                    date: 'Aug 18 16:50',
                    author: 'Manager Hanako',
                    subject: 'Inquiries about problems with My page',
                    sender: 'Yamada Taro',
                    inquiry: "I can't check the sales from my page. Also, I can't check the last month's sales. It's pure white.",
                    answerContent: "Ask the programmer. He said he could do it in 5 minutes. The cause of the problem is unknown. Confirm that it is normal. Customer has been contacted.",
                    tableTime: '30分'
                },
                {
                    date: 'Aug 18 16:50',
                    author: 'Manager Hanako',
                    subject: 'Inquiries about problems with My page',
                    sender: 'Yamada Taro',
                    inquiry: "I can't check the sales from my page. Also, I can't check the last month's sales. It's pure white.",
                    answerContent: "Ask the programmer. He said he could do it in 5 minutes. The cause of the problem is unknown. Confirm that it is normal. Customer has been contacted.",
                    tableTime: '30分'
                }
            ],
            toToList: [
                {
                    priority: 1,
                    content: 'メールワイズの問い合わせ対応',
                    status: '1',
                    CorrespondingPerson: '管理者　花子',
                },
                {
                    priority: 2,
                    content: 'メールワイズの問い合わせ対応',
                    status: '0',
                    CorrespondingPerson: '管理者　花子',
                },
                {
                    priority: 1,
                    content: 'メールワイズの問い合わせ対応',
                    status: '0',
                    CorrespondingPerson: '管理者　花子',
                }
            ],
            firstOptions: [
                { value: "", label: "管理者　太郎" },
            ],
            secondOptions: [
                { value: "", label: "管理者　太郎" },
            ],
            thirdOptions: [
                { value: "", label: "管理者　太郎" },
            ],
        }
    }
}
</script>

<style scoped>
@import url('@/assets/admin/css/reset.css');
@import url('@/assets/admin/css/slick-theme.css');
@import url('@/assets/admin/css/styles.css');
@import url('@/assets/admin/css/slick.css');
@import url('@/assets/admin/css/common.css');
@import url('@/assets/admin/css/dashboard.css');
@import url('@/assets/admin/css/styles.css');
</style>
