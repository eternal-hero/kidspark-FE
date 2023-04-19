<template>
    <main id="page-T024-1" class="site_main">
        <nav class="breadcrumb">
            <ul>
                <li><a href="/app/admin/dashboard">TOP</a></li>
                <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
                <li>本人確認・資格証明</li>
            </ul>
        </nav>
        <h1 class="page_ttl_01"><span>申請・提出書類〈本人確認・資格証明〉</span></h1>
        <supporter-header :isEditing="true"/>
        <div class="col2_block f-ai-start">
            <exeo-supporter-navigation-window/>
            <div class="col2_block_main">
                <form action="" class="form-edit" runat="server">
                    <div class="add-info">
                        <table class="table_style_02 table_style_02--medium table_style_02--style5 table_style_02--no-striped form-edit__table looksort_table--small">
                            <thead>
                                <tr>
                                    <th>本人確認・資格証明の詳細</th>
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
                                        <div class="form_part_select">
                                            <exeo-select v-model="status" :options="statusOptions"/>
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
                                    <td class="looksort_table_info vertical-top">カテゴリー</td>
                                    <td>
                                        <div class="form_block  js-check-value">
                                            <exeo-radio v-model="category" :options="categoryOptions" name="category"/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info">名称</td>
                                    <td>
                                        <div class="list-select">
                                            <div class="add-info__select form_part_select add-info__select--550" :class='{"show": category==="本人確認書類"}' id="本人確認書類">
                                                <exeo-select v-model="type" :options="identityOptions"/>
                                            </div>
                                            <div class="add-info__select form_part_select add-info__select--550" :class='{"show": category==="シッター必須資格"}' id="シッター必須資格">
                                                <exeo-select v-model="type" :options="sitterLicenseOptions"/>
                                            </div>
                                            <div class="add-info__select form_part_select add-info__select--550" :class='{"show": category==="病児・産前産後必須資格"}' id="病児・産前産後必須資格">
                                                <exeo-select v-model="type" :options="sickLicenseOptions"/>
                                            </div>
                                            <div id="その他の保育関連資格" class="add-info__select-pd add-info__select add-info__select--550 js-select-change" :class='{"show": category==="その他の保育関連資格"}'>
                                                <div class="form_part_select add-info__select--550">
                                                    <exeo-select v-model="type" :options="otherLicenseOptions"/>
                                                </div>
                                                <textarea name="memo" rows="4" cols="40" class="form_part_txt form_part_txt_memo"></textarea>
                                            </div>
                                            <div id="家事代行関連資格" class="add-info__select-pd add-info__select add-info__select--550 js-select-change" :class='{"show": category==="家事代行関連資格"}'>
                                                <div class="form_part_select add-info__select--550">
                                                    <exeo-select v-model="type" :options="housekeeperLicenseOptions"/>
                                                </div>
                                                <textarea name="memo" rows="4" cols="40" class="form-edit__textarea"></textarea>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info">申請日時</td>
                                    <td> 2022年07月16日 12:53 </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info">有効期限</td>
                                    <td>
                                        <label class="form_part_date">
                                            <input type="date" placeholder="日付を選択してください" class="form_part_date_input">
                                        </label>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="looksort_table_info vertical-top">ファイル</td>
                                    <td>
                                        <dd class="support-ct__form-ct support-ct__form-ct--02">
                                            <div class="support-ct__form-flex">
                                                <div class="support-ct__form-img">
                                                    <img src="~/assets/admin/img/T039-1/img-03.png" alt="補助書類">
                                                    <div class="flex-box f-jc-flex-end"><button class="btn_s_delete">削除</button></div>
                                                </div>
                                                <div class="support-ct__form-file">
                                                    <label for="upload-photo">PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</label>
                                                    <input type="file" name="photo" id="upload-photo">
                                                    <div class="support-ct__form-desc"> ※アップロードいただけるファイル　jpg / jpeg / gif / png / pdf<br>※ファイルにつき○○○MBまでのファイルをアップロードできます。 </div>
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
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import SupporterHeader from '../../../../../../components/header/SupporterHeader.vue'
import ExeoSupporterNavigationWindow from '../../../../../../components/other/ExeoSupporterNavigationWindow.vue'
import ExeoSelect from '../../../../../../components/action/ExeoSelect.vue'
import ExeoRadio from '../../../../../../components/action/ExeoRadio.vue'
export default {
    components: {
        SupporterHeader,
        ExeoSupporterNavigationWindow,
        ExeoSelect,
        ExeoRadio,

    },
    head() {
        return {
            title: '申請・提出書類〈本人確認・資格証明〉'
        }
    },
    data() {
        return {
            status: "未対応",
            statusOptions: [
                {value: "未対応", label: "未対応"},
                {value: "有効", label: "有効"},
                {value: "期限切れ", label: "期限切れ"},
                {value: "不受理", label: "不受理"},
            ],
            category: null,
            categoryOptions: [
                {value: "本人確認書類", label: "本人確認書類"},
                {value: "シッター必須資格", label: "シッター必須資格"},
                {value: "病児・産前産後必須資格", label: "病児・産前産後必須資格"},
                {value: "その他の保育関連資格", label: "その他の保育関連資格"},
                {value: "家事代行関連資格", label: "家事代行関連資格"},
            ],
            type: null,
            identityOptions: [
                {value: "運転免許証（裏面の手書き住所記載不可）", label: "運転免許証（裏面の手書き住所記載不可）"},
                {value: "健康保険証（裏面の手書き住所記載の場合は補助書類必須）", label: "健康保険証（裏面の手書き住所記載の場合は補助書類必須）"},
                {value: "マイナンバーカード（個人番号が見えないように）", label: "マイナンバーカード（個人番号が見えないように）"},
                {value: "住基カード", label: "住基カード"},
                {value: "在留カード", label: "在留カード"},
                {value: "住民票の写し（6ヶ月以内に発行されたもの）", label: "住民票の写し（6ヶ月以内に発行されたもの）"},
                {value: "本人確認補助書類", label: "本人確認補助書類"},
                {value: "アカウント写真", label: "アカウント写真"},
            ],
            sitterLicenseOptions: [
                {value: "保育士（旧姓表記不可・保母資格不可）", label: "保育士（旧姓表記不可・保母資格不可）"},
                {value: "看護師（旧姓表記不可）", label: "看護師（旧姓表記不可）"},
                {value: "准看護師（旧姓表記不可）", label: "准看護師（旧姓表記不可）"},
                {value: "家庭的保育者等研修", label: "家庭的保育者等研修"},
                {value: "子育て支援員（地域保育コース）研修", label: "子育て支援員（地域保育コース）研修"},
                {value: "全国保育サービス協会（ACSA）認定ベビーシッター", label: "全国保育サービス協会（ACSA）認定ベビーシッター"},
                {value: "全国保育サービス協会（ACSA）ベビーシッター養成研修＋現任研修", label: "全国保育サービス協会（ACSA）ベビーシッター養成研修＋現任研修"},
                {value: "全国保育サービス協会（ACSA）居宅訪問型基礎研修", label: "全国保育サービス協会（ACSA）居宅訪問型基礎研修"},
                {value: "ベビーシッター届出（認可外保育施設設置届）", label: "ベビーシッター届出（認可外保育施設設置届）"},
                {value: "その他", label: "その他"},
            ],
            sickLicenseOptions: [
                {value: "産後ドゥーラ", label: "産後ドゥーラ"},
                {value: "ナーシングドゥーラ", label: "ナーシングドゥーラ"},
                {value: "助産師", label: "助産師"},
                {value: "保健師", label: "保健師"},
            ],
            otherLicenseOptions: [
                {value: "おもちゃコンサルタント", label: "おもちゃコンサルタント"},
                {value: "運動保育士", label: "運動保育士"},
                {value: "絵本専門士", label: "絵本専門士"},
                {value: "イングリッシュエキスパート保育士", label: "イングリッシュエキスパート保育士"},
                {value: "チャイルドマインダー", label: "チャイルドマインダー"},
                {value: "チャイルドコーチング", label: "チャイルドコーチング"},
                {value: "その他", label: "その他"},
            ],
            housekeeperLicenseOptions: [
                {value: "調理師", label: "調理師"},
                {value: "栄養士", label: "栄養士"},
                {value: "管理栄養士", label: "管理栄養士"},
                {value: "クリンネスト", label: "クリンネスト"},
                {value: "整理収納アドバイザー", label: "整理収納アドバイザー"},
                {value: "ライフオーガナイザー", label: "ライフオーガナイザー"},
                {value: "作りおき料理コーディネーター", label: "作りおき料理コーディネーター"},
                {value: "家事クリエイター", label: "家事クリエイター"},
                {value: "ハウスクリーニングアドバイザー", label: "ハウスクリーニングアドバイザー"},
                {value: "お掃除スペシャリスト", label: "お掃除スペシャリスト"},
                {value: "お掃除プロフェッショナル", label: "お掃除プロフェッショナル"},
                {value: "その他", label: "その他"},
            ]
        }
    }
}
</script>

<style>

</style>
