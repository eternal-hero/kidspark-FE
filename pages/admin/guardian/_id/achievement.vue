<template>
    <div class="wrapper">
        <!--#include virtual="/assets/inc/sidebar.html" -->
        <!--▲▲ /#SIDEBAR ▲▲-->
        <main id="page-T046" class="site_main">
            <nav class="breadcrumb">
                <ul>
                    <li><a href="../">TOP</a></li>
                    <li><a href="/">ユーザー管理</a></li>
                    <li>入金履歴</li>
                </ul>
            </nav>
            <h1 class="page_ttl_01"><span>実績〈入金履歴〉</span></h1>
            <exeo-guardian-header :guardian="this.guardian" is-editing></exeo-guardian-header>
            <div class="col2_block f-ai-start">
                <exeo-guardian-navigation-window></exeo-guardian-navigation-window>
                <div class="col2_block_main">
                    <div class="flex-box flex-box--02">
                        <div class="form-narrow form-narrow--02">
                            <div class="form-narrow__item">
                                <div class="form-narrow__txt">期間</div>
                                <label class="form_part_date">
                                    <ExeoForm type="date" placeholder="日付を選択してください" class="form_part_date_input">
                                    </ExeoForm>
                                </label>
                                <small>〜</small>
                                <label class="form_part_date">
                                    <ExeoForm type="date" placeholder="日付を選択してください" class="form_part_date_input">
                                    </ExeoForm>
                                </label>
                            </div>
                        </div>
                    </div>
                    <ExeoTableAdminGuardianAchievement :data='achievement_data'></ExeoTableAdminGuardianAchievement>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import ExeoGuardianHeader from "@/components/header/ExeoGuardianHeader.vue";
import ExeoGuardianNavigationWindow from "@/components/other/ExeoGuardianNavigationWindow.vue";
import ExeoTableAdminGuardianAchievement from '@/components/table/ExeoTableAdminGuardianAchievement.vue';
import ExeoForm from '../../../../components/form/ExeoForm.vue';
export default {
    layout: 'admin',
    name: "Achievement",
    components: {
        ExeoGuardianNavigationWindow,
        ExeoGuardianHeader,
        ExeoTableAdminGuardianAchievement,
        ExeoForm
    },
    head() {
        return {
            title: '実績〈入金履歴〉'
        }
    },
    data() {
        return {
            data: [],
            achievement_data: [
                { date: '2022年07月15日', jobId: '12345', reason: '依頼料支払い', occupation: 'ベビーシッター	', money: '5600円' },
                { date: '2022年07月15日', jobId: '12346', reason: '依頼料支払い', occupation: 'ベビーシッター	', money: '5600円' }
            ],
            guardian: {
                first_name: " ",
                last_name: " ",
                first_kana: " ",
                last_kana: " ",
                rating: 0,
            },
            isEditing: false,
        }
    },
    methods: {
    }
}
</script>

<style scoped>

</style>
