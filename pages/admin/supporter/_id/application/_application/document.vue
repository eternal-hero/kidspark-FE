<template>
    <main id="page-T024" class="site_main">
        <nav class="breadcrumb">
            <ul>
                <li><a href="../">TOP</a></li>
                <li><a href="/">パークサポーター管理</a></li>
                <li>本人確認・資格証明</li>
            </ul>
        </nav>
        <h1 class="page_ttl_01"><span>申請・提出書類〈本人確認・資格証明〉</span></h1>
        <SupporterHeader :user="user" :isEditing="false" @edit="$router.push('document-edit')"/>
        <div class="col2_block f-ai-start">
            <ExeoSupporterNavigationWindow />
            <div class="col2_block_main">
                <form action="" class="form-edit">
                    <div class="add-info">
                        <table class="table_style_02 table_style_02--style5 table_style_02--white">
                            <thead>
                                <tr>
                                    <th> 本人確認・資格証明の詳細 </th>
                                    <th>
                                        <div class="looksort_table__right">
                                            <div class="statuschips js-tooltip" data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>"><span>本人確認・資格証明について</span></div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="looksort_table_info">ファイルID</td>
                                    <td> {{ document.file_id }} </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info">ステータス</td>
                                    <td>
                                        <span class="statusicn statusicn_confirmation" v-if="document.status == 0">未対応</span>
                                        <span class="statusicn statusicn_completion" v-else-if="document.status == 1">有効</span>
                                        <span class="statusicn statusicn_expiration" v-else-if="document.status == 2">期限切</span>
                                        <span class="statusicn statusicn_expiration" v-else-if="document.status == 3">不受理</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info">メモ</td>
                                    <td>
                                        <div class="looksort_table__txt"> {{document.memo}} </div>
                                        <span class="looksort_table__note">※メモはパークサポーターには公開されません。</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info">カテゴリー</td>
                                    <td> {{$ADMIN_SUPPORTER_APPLCATION_CATEGORY_SHOW[document.category]}} </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info">名称</td>
                                    <td> {{application_type_name}} <br v-show="document.application_name">{{document.application_name}} </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info">申請日時</td>
                                    <td> {{application_at_show}} </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info">有効期限</td>
                                    <td> {{expiration_on_show}} </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info vertical-top border-0">ファイル</td>
                                    <td class="border-0">
                                        <div class="flex-img" style="width: 265px;">
                                            <div class="flex-img__item">
                                                <a :href="image_path_show" target="_blank" ><img :src="image_path_show" alt="クリックで拡大"></a>
                                                <p>クリックで拡大</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import SupporterHeader from '@/components/header/SupporterHeader.vue'
import ExeoSupporterNavigationWindow from '@/components/other/ExeoSupporterNavigationWindow.vue'
import ApplicationDocumentService from '@/services/admin/supporter/ApplicationDocumentService.js'

export default {
    layout: 'admin',
    components: { 
        SupporterHeader,
        ExeoSupporterNavigationWindow,
    },
    head() {
        return {
            title: '申請・提出書類〈本人確認・資格証明〉'
        }
    },
    async asyncData(context) {
        let document = await ApplicationDocumentService.getDocumentById(context, context.route.params.id, context.route.params.application)
        let image_path_show = document.file_path == null ? require("~/assets/admin/img/T039-1/img-03.png") : process.env.storageURL + document.file_path
        let application_at_show = context.app.$moment(document.application_at).format('YYYY年MM月DD日 HH:MM')
        let expiration_on_show = context.app.$moment(document.expiration_on).format('YYYY年MM月DD日')
        var application_type_name = null
        switch(document.category) {
            case 0:
                application_type_name = context.app.$ADMIN_SUPPORTER_APPLICATION_IDENTITY_SHOW[document.application_type]
                break;
            case 1:
                application_type_name = context.app.$ADMIN_SUPPORTER_APPLICATION_SITTER_LICENSE_SHOW[document.application_type]
                break;
            case 2:
                application_type_name = context.app.$ADMIN_SUPPORTER_APPLICATION_INFANT_CARE_LICENSE_SHOW[document.application_type]
                break;
            case 3:
                application_type_name = context.app.$ADMIN_SUPPORTER_APPLICATION_OTHER_LICENSE_SHOW[document.application_type]
                break;
            case 4:
                application_type_name = context.app.$ADMIN_SUPPORTER_APPLICATION_HOUSEKEEPER_LICENSE_SHOW[document.application_type]
                break;
        }

        await context.store.dispatch('admin/supporter/info/initDataWithNuxtApp', context);
        const supporter = context.store.getters['admin/supporter/info/supporter']

        return {
            document,
            image_path_show,
            application_at_show,
            expiration_on_show,
            application_type_name,
            user : supporter
        }
    },
}
</script>