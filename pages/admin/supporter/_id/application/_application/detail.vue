<template>
    <main id="page-T024" class="site_main">
        <nav class="breadcrumb">
            <ul>
                <li><a href="/app/admin/dashboard">TOP</a></li>
                <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
                <li>本人確認・資格証明</li>
            </ul>
        </nav>
        <h1 class="page_ttl_01"><span>申請・提出書類〈本人確認・資格証明〉</span></h1>
        <supporter-header/>
        <div class="col2_block f-ai-start">
            <exeo-supporter-navigation-window/>
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
                                    <td> 012345 </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info">ステータス</td>
                                    <td>
                                        <span class="statusicn statusicn_confirmation">未対応</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info">メモ</td>
                                    <td>
                                        <div class="looksort_table__txt"> テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト </div>
                                        <span class="looksort_table__note">※メモはパークサポーターには公開されません。</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info">カテゴリー</td>
                                    <td> シッター必須資格 </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info">名称</td>
                                    <td> 保育士免許 </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info">申請日時</td>
                                    <td> 2022年07月16日 12:53 </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info">有効期限</td>
                                    <td> 2023年02月03日 </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info vertical-top border-0">ファイル</td>
                                    <td class="border-0">
                                        <div class="flex-img" style="width: 265px;">
                                            <div class="flex-img__item">
                                                <a href="~/assets/admin/img/T039-1/img-14.jpg" target="_blank"><img src="~/assets/admin/img/T039-1/img-14.jpg" alt="クリックで拡大"></a>
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
import SupporterHeader from '../../../../../../components/header/SupporterHeader.vue'
import ExeoSupporterNavigationWindow from '../../../../../../components/other/ExeoSupporterNavigationWindow.vue'
export default {
    components: {
        SupporterHeader,
        ExeoSupporterNavigationWindow,

    },
    head() {
        return {
            title: '申請・提出書類〈本人確認・資格証明〉'
        }
    },
}
</script>

<style>

</style>
