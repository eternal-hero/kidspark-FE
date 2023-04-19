<template>
    <main id="page-T014" class="site_main">
        <nav class="breadcrumb">
            <ul>
                <li><a href="../">TOP</a></li>
                <li><a href="/">パークサポーター管理</a></li>
                <li>入出金管理</li>
            </ul>
        </nav>
        <h1 class="page_ttl_01"><span>実績〈入出金管理〉</span></h1>
        <SupporterSummaryHeader :user="user" :is-editing="true" />
        <div class="col2_block">
            <ExeoSupporterNavigationWindow></ExeoSupporterNavigationWindow>
            <div class="col2_block_main">
                <div class="flex-box">
                    <div class="todolist">
                        <div class="date-box">
                            <label for="" class="date-box__ttl">期間</label>
                            <div class="date-box__list">
                                <div class="date-box__list-item">
                                    <label class="form_part_date">
                                        <ExeoForm type="date" placeholder="日付を選択してください" class="form_part_date_input"
                                            id="datepicker"></ExeoForm>
                                    </label>
                                </div>
                                <div class="date-box__list-item">
                                    <label class="form_part_date">
                                        <ExeoForm type="date" placeholder="日付を選択してください" class="form_part_date_input"
                                            id="datepicker2"></ExeoForm>
                                    </label>
                                </div>
                            </div>
                            <div class="error"><img src="@/assets/admin/img/common/ico-error.svg"
                                    alt="error">6月分の振り込みエラー分が残っています。</div>
                        </div>
                        <ExeoTableAdminSupporterResultCashFlows :value='cashFlowsData'>
                        </ExeoTableAdminSupporterResultCashFlows>
                    </div>
                    <div class="form-box">
                        <form action="">
                            <dl class="form-box__flex">
                                <dt class="form-box__ttl">日時</dt>
                                <dd class="form-box__ct">
                                    <label class="form_part_date">
                                        <ExeoForm type="date" placeholder="日付を選択してください" class="form_part_date_input"
                                            id="datepicker3"></ExeoForm>
                                    </label>
                                </dd>
                            </dl>
                            <dl class="form-box__flex">
                                <dt class="form-box__ttl">内容</dt>
                                <dd class="form-box__ct">
                                    <ExeoForm type="text" placeholder="内容を入力してください" class="tableform_input"></ExeoForm>
                                </dd>
                            </dl>
                            <dl class="form-box__flex">
                                <dt class="form-box__ttl">金額</dt>
                                <dd class="form-box__ct">
                                    <div class="form_part_unit">
                                        <ExeoForm type="text" name="" value="" placeholder="000"></ExeoForm>
                                        <span class="form_part_unit_label">円</span>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="form-box__flex">
                                <dt class="form-box__ttl">出入金</dt>
                                <dd class="form-box__ct">
                                    <div class="radio-flex">
                                        <div class="pure-input pure-input--styles02">
                                            <input type="radio" name="gender" value="" id="radio01">
                                            <label for="radio01">入金（+）</label>
                                        </div>
                                        <div class="pure-input pure-input--styles02">
                                            <input type="radio" name="gender" value="" id="radio02" checked="checked">
                                            <label for="radio02">出金（-）</label>
                                        </div>
                                    </div>
                                </dd>
                            </dl>
                            <dl class="form-box__flex">
                                <dt class="form-box__ttl">備考</dt>
                                <dd class="form-box__ct">
                                    <exeo-textarea name="memo" rows="9" cols="40"
                                        class="form_part_txt form_part_txt_memo"
                                        placeholder="備考を入力して下さい"></exeo-textarea>
                                </dd>
                            </dl>
                            <button type="submit" class="btn_style_04">追加する</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="popup-main">
            <M016></M016>
        </div>
    </main>
</template>

<script>

import SupporterSummaryHeader from "@/components/header/SupporterSummaryHeader.vue";
import ExeoSupporterNavigationWindow from "@/components/other/ExeoSupporterNavigationWindow.vue";
import ExeoRadio from '@/components/action/ExeoRadio.vue';
import ExeoForm from '@/components/form/ExeoForm.vue';
import ExeoSelect from '@/components/action/ExeoSelect.vue';
import ExeoTableAdminSupporterResultCashFlows from '@/components/table/ExeoTableAdminSupporterResultCashFlows.vue';

export default {
    layout: "admin",
    components: {
        ExeoSupporterNavigationWindow,
        SupporterSummaryHeader,
        ExeoTableAdminSupporterResultCashFlows,
        ExeoSelect,
        ExeoRadio,
        ExeoForm
    },
    head() {
        return {
            title: '実績〈入出金管理〉'
        }
    },
    data() {
        return {
            cashFlowsData: [],
            user: {},
        };
    },
};
</script>   

<style scoped>

</style>