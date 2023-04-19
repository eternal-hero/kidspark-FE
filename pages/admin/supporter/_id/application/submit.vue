<template>
    <div class="wrapper">
        <main id="page-T025" class="site_main">
            <nav class="breadcrumb">
                <ul>
                    <li><a href="/app/admin/dashboard">TOP</a></li>
                    <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
                    <li>申請提出</li>
                </ul>
            </nav>
            <h1 class="page_ttl_01"><span>申請・提出書類〈申請提出〉</span></h1>
            <supporter-header :isEditing="true"/>
            <div class="col2_block f-ai-start">
                <exeo-supporter-navigation-window/>
                <div class="col2_block_main">
                    <div class="application-block">
                        <div class="application-block__btn">
                            <button class="sort js-popup" @click="openModal">絞り込む</button>
                        </div>
                        <div class="application-block__right">
                            <span class="statusicn statusicn_confirmation">未対応</span>
                            <span>1件</span>
                        </div>
                    </div>
                    <div class="tableblock_scroll">
                        <table class="table_style_02 table_style_02--style6 looksort_table--small">
                            <thead>
                                <tr>
                                    <th>申請ID</th>
                                    <th>件名</th>
                                    <th>更新日時</th>
                                    <th>ステータス</th>
                                    <th>メモ</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(application, index) in applications" :key="index">
                                    <td class="looksort_table_id">{{application.id}}</td>
                                    <td class="looksort_table_type">{{application.type}}</td>
                                    <td class="looksort_table_end">{{application.end_at}}</td>
                                    <td class="looksort_table_status"><span class="statusicn statusicn_confirmation">未対応</span></td>
                                    <td></td>
                                    <td class="looksort_table_detail"><button class="btn_s_edit">詳細</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex-box f-jc-flex-start">
                        <exeo-pagenation/>
                    </div>
                </div>
            </div>
            <div class="popup-main" :class="{open: isShowing}">
                <div class="popup-block">
                    <span class="popup-block__close" @click="closeModal"></span>
                    <h2 class="popup-block__ttl">絞り込む</h2>
                    <div class="popup-ct">
                        <form id="configform" name="input" action="#" method="get">
                            <div class="form-narrow">
                                <div class="form-narrow__item">
                                    <div class="form-narrow__txt">更新日</div>
                                    <label class="form-narrow__date">
                                        <input type="date" placeholder="日付を選択してください" class="form-narrow__input form_part_date_input">
                                    </label>
                                    <small>〜</small>
                                    <label class="form-narrow__date">
                                        <input type="date" placeholder="日付を選択してください" class="form-narrow__input form_part_date_input">
                                    </label>
                                </div>
                                <div class="form-narrow__item">
                                    <div class="form-narrow__txt">申請ID</div>
                                    <input type="text" placeholder="入力してください" class="form-narrow__input">
                                    <span class="form-narrow__name">ステータス</span>
                                    <div class="form-narrow__select form_part_select">
                                        <exeo-select :options="statusOptions" v-model="status"/>
                                    </div>
                                </div>
                                <div class="form-narrow__item">
                                    <div class="form-narrow__txt">件名</div>
                                    <div class="form-narrow__select form_part_select">
                                        <exeo-select :options="typeOptions" v-model="type"/>
                                    </div>
                                </div>
                            </div>
                            <div class="popup-ct__btn tc">
                                <button class="btn_entry">絞り込む</button>
                                <input type="reset" id="configreset" value="すべてリセットする" class="btn_s_edit">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import ExeoSelect from '../../../../../components/action/ExeoSelect.vue'
import ExeoPagenation from '../../../../../components/ExeoPagenation.vue'
import SupporterHeader from '../../../../../components/header/SupporterHeader.vue'
import ExeoSupporterNavigationWindow from '../../../../../components/other/ExeoSupporterNavigationWindow.vue'

export default {
    layout: "admin",
    components: {
        SupporterHeader,
        ExeoSupporterNavigationWindow,
        ExeoPagenation,
        ExeoSelect
    },
    head() {
        return {
            title: '申請・提出書類〈申請提出〉'
        }
    },
    data() {
        return {
            isShowing: false,
            status: null,
            statusOptions: [
                {value: "すべて", label: "すべて"},
                {value: "未対応", label: "未対応"},
                {value: "期限切れ", label: "期限切れ"},
                {value: "不受理", label: "不受理"},
            ],
            type: null,
            typeOptions: [
                {value: "すべて", label: "すべて"},
                {value: "保険申請", label: "保険申請"},
                {value: "ペナルティ免除申請", label: "ペナルティ免除申請"},
                {value: "保育可能年齢変更申請", label: "保育可能年齢変更申請"},
                {value: "産前産後対応可能申請", label: "産前産後対応可能申請"},
                {value: "病児保育対応可能申請", label: "病児保育対応可能申請"},
                {value: "障がい児対応可能申請", label: "障がい児対応可能申請"},
                {value: "退会・一時休会申請", label: "退会・一時休会申請"},
                {value: "活動再開申請", label: "活動再開申請"},
                {value: "認可外保育施設設置届", label: "認可外保育施設設置届"},
            ]
        }
    },
    methods: {
        openModal() {
            this.isShowing = true
        },
        closeModal() {
            this.isShowing = false
        }
    }

}
</script>

<style>

</style>
