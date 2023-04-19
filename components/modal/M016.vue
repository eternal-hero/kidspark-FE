<template>
    <div class="popup-block">
        <span class="popup-block__close"></span>
        <h2 class="popup-block__ttl">絞り込む</h2>
        <div class="popup-ct">
            <form id="configform" name="input" action="#" method="get">
                <div class="form-narrow">
                    <div class="form-narrow__item">
                        <div class="form-narrow__txt">開始日</div>
                        <label class="form-narrow__date">
                            <ExeoForm type="date" placeholder="日付を選択してください"
                                class="form-narrow__input form_part_date_input"></ExeoForm>
                        </label>
                        <small>〜</small>
                        <label class="form-narrow__date">
                            <ExeoForm type="date" placeholder="日付を選択してください"
                                class="form-narrow__input form_part_date_input"></ExeoForm>
                        </label>
                    </div>
                    <div class="form-narrow__item">
                        <div class="form-narrow__txt">お仕事ID</div>
                        <ExeoForm type="text" placeholder="入力してください" class="form-narrow__input"></ExeoForm>
                        <span class="form-narrow__name">ステータス</span>
                        <div class="form-narrow__select form_part_select">
                            <ExeoSelect :options=statusOptions value="0"></ExeoSelect>
                        </div>
                    </div>
                    <div class="form-narrow__item">
                        <div class="form-narrow__txt">ユーザー</div>
                        <ExeoForm type="text" placeholder="IDまたは名前を入力" class="form-narrow__input"></ExeoForm>
                        <span class="form-narrow__name">定/単</span>
                        <ul class="form-narrow__check">
                            <li class="form-narrow__check-item">
                                <label class="checkbox-custom checkbox-custom--02">
                                    <input type="checkbox" class="checks">
                                    <span class="checkmark"></span>単発 </label>
                            </li>
                            <li class="form-narrow__check-item">
                                <label class="checkbox-custom checkbox-custom--02">
                                    <input type="checkbox" class="checks" checked="checked">
                                    <span class="checkmark"></span>定期 </label>
                            </li>
                        </ul>
                    </div>
                    <div class="form-narrow__item">
                        <div class="form-narrow__txt">見守り</div>
                        <ul class="form-narrow__check form-narrow__check--02">
                            <li class="form-narrow__check-item">
                                <label class="checkbox-custom checkbox-custom--02">
                                    <input type="checkbox" class="checks">
                                    <span class="checkmark"></span>あり </label>
                            </li>
                            <li class="form-narrow__check-item">
                                <label class="checkbox-custom checkbox-custom--02">
                                    <input type="checkbox" class="checks" checked="checked">
                                    <span class="checkmark"></span>なし </label>
                            </li>
                        </ul>
                        <span class="form-narrow__name">依頼カテゴリー</span>
                        <div class="form-narrow__select form_part_select">
                            <ExeoSelect :options="requestCategoryOptions" value=0></ExeoSelect>
                        </div>
                    </div>
                </div>
                <div class="popup-ct__btn tc">
                    <button class="btn_style_04">絞り込む</button>
                    <input type="reset" id="configreset" value="すべてリセットする" class="btn_style_02">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import ExeoCheckbox from "@/components/action/ExeoCheckbox.vue";
import ExeoSelect from "@/components/action/ExeoSelect.vue";
import ExeoForm from "@/components/form/ExeoForm.vue";

export default {
    components: {
        ExeoCheckbox,
        ExeoSelect,
        ExeoForm
    },
    data() {
        return {
            filterValue: {},
            requestCategoryOptions: [
                { label: 'すべて', value: 0 },
                { label: 'シッター', value: 1 },
                { label: '病児保育', value: 2 },
                { label: '産前産後', value: 3 },
                { label: '家事代行', value: 4 },
                { label: 'WEB事前面談', value: 5 },
                { label: '対面事前面談', value: 6 },
            ],
            statusOptions: [
                { label: 'すべて', value: 0 },
                { label: 'リクエスト', value: 1 },
                { label: '見積もり提示', value: 2 },
                { label: '予約確定', value: 3 },
                { label: '予約確定(準備OK)', value: 4 },
                { label: '予約確定(サポート中)', value: 5 },
                { label: 'レポート待ち', value: 6 },
                { label: '承認待ち', value: 7 },
                { label: '完了', value: 8 },
                { label: '期限切れ', value: 9 },
                { label: 'キャンセル', value: 10 },
            ]
        }
    },
    methods: {

    }
}
</script>