<template>
    <div class="wrapper">
        <main id="page-T026" class="site_main">
            <nav class="breadcrumb">
                <ul>
                    <li><a href="/app/admin/dashboard">TOP</a></li>
                    <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
                    <li>申請提出</li>
                </ul>
            </nav>
            <h1 class="page_ttl_01"><span>申請・提出書類〈申請提出〉</span></h1>

            <supporter-header :isEditing="true"/>
            <div class="col2_block">
                <exeo-supporter-navigation-window/>
                <div class="col2_block_main">
                    <form action="" class="form-edit" runat="server">
                        <div class="add-info">
                            <table class="table_style_02 table_style_02--style5 table_style_02--no-striped form-edit__table looksort_table--small">
                                <thead>
                                    <tr>
                                        <th>申請提出詳細</th>
                                        <th>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="looksort_table_info">ステータス</td>
                                        <td>
                                            <div class="form_part_select">
                                                <exeo-select :options="statusOptions" v-model="status"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="looksort_table_info vertical-top">メモ</td>
                                        <td>
                                            <div class="form_block form_block--02">
                                                <div class="form_part">
                                                    <textarea name="memo" rows="4" cols="40" class="form-edit__textarea"></textarea>
                                                </div>
                                                <div class="form_part">
                                                    <p class="form_part_com">※メモはパークサポーターには公開されません。</p>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="looksort_table_info">最終更新日時</td>
                                        <td> {{application.modified_at}} </td>
                                    </tr>
                                    <tr>
                                        <td class="looksort_table_info">申請ID</td>
                                        <td>
                                            <exeo-form v-model="application.id"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="looksort_table_info">申請件名</td>
                                        <td>
                                            <div class="form_part_select">
                                                <exeo-select :options="typeOptions" v-model="type"/>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="looksort_table_info">送信者</td>
                                        <td>
                                            <exeo-form v-model="application.supporter.name"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="looksort_table_info">サポーターID</td>
                                        <td>
                                            <exeo-form v-model="application.supporter_user_id"/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="looksort_table_info vertical-top">内容</td>
                                        <td>
                                            <div class="form_block--memo">
                                                <textarea name="memo" rows="6" cols="40" class="form-edit__textarea"></textarea>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="looksort_table_info vertical-top">ファイル</td>
                                        <td>
                                            <dd class="support-ct__form-ct support-ct__form-ct--02">
                                                <div class="support-ct__form-flex">
                                                    <div class="support-ct__form-img">
                                                        <img src="~/assets/admin/img/T039-1/img-03.png" alt="ファイル">
                                                        <div class="flex-box f-jc-flex-end"><button class="btn_s_delete js-remove-profile">削除</button></div>
                                                    </div>
                                                    <div class="support-ct__form-file">
                                                        <label for="upload-photo">PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</label>
                                                        <input type="file" name="photo" id="upload-photo">
                                                        <div class="support-ct__form-desc"> ※アップロードいただけるファイル　jpg / jpeg / gif / png / pdf<br> ※ファイルにつき○○○MBまでのファイルをアップロードできます。 </div>
                                                    </div>
                                                </div>
                                            </dd>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="add-info__control">
                                <button class="btn_entry" onclick="">保存する</button>
                            </div>
                            <table class="table-monitoring table-monitoring--history">
                                <thead>
                                    <tr>
                                        <th colspan="4">更新履歴</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(modife, index) in applications" :key="index">
                                        <td>更新日時</td>
                                        <td>{{modife.modified_at}}</td>
                                        <td>管理者</td>
                                        <td>太郎</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import ExeoSelect from '../../../../../../components/action/ExeoSelect.vue'
import ExeoForm from '../../../../../../components/form/ExeoForm.vue'
import SupporterHeader from '../../../../../../components/header/SupporterHeader.vue'
import ExeoSupporterNavigationWindow from '../../../../../../components/other/ExeoSupporterNavigationWindow.vue'
export default {
    layout: "admin",
    components: {
        SupporterHeader,
        ExeoSupporterNavigationWindow,
        ExeoForm,
        ExeoSelect,
    },
    head() {
        return {
            title: '申請・提出書類〈申請提出〉'
        }
    },
    data() {
        return {
            application: {
                id: this.$route.params.application,
                supporter_user_id: this.$route.params.id,
                supporter: {
                    name: "Supporter",
                },
                modified_at: "2023年02月01日",
            },
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
}
</script>

<style>

</style>
