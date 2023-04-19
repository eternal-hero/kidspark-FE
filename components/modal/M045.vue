<template>
    <div class="popup-block">
        <span class="popup-block__close"></span>
        <h2 class="popup-block__ttl">絞り込む</h2>
        <div class="popup-ct">
            <form id="configform" name="input" action="#" method="get">
                <div class="form-narrow">
                    <div class="form-narrow__item">
                        <div class="form-narrow__txt">開始日</div>
                        <label class="form_part_date">
                            <ExeoForm type="date" placeholder="日付を選択してください" class="form_part_date_input"></ExeoForm>
                        </label>
                        <small>〜</small>
                        <label class="form_part_date">
                            <ExeoForm type="date" placeholder="日付を選択してください" class="form_part_date_input"></ExeoForm>
                        </label>
                    </div>
                    <div class="form-narrow__item">
                        <div class="form-narrow__txt">お仕事ID</div>
                        <input type="text" placeholder="入力してください" class="form-edit__input">
                        <span class="form-narrow__name">ステータス</span>
                        <div class="form_part_select">
                            <ExeoSelect :options="statusOptions" value="0"></ExeoSelect>
                        </div>
                    </div>
                    <div class="form-narrow__item">
                        <div class="form-narrow__txt">パークサポーター</div>
                        <div class="js-show-search">
                            <label class="form-narrow__search">
                                <input type="text" placeholder="IDまたは名前を入力" class="form-edit__input">
                            </label>
                            <div class="js-box-search">
                                <ul class="form-narrow__check">
                                    <li class="form-narrow__check-item">
                                        <div class="form-edit__checkbox">
                                            <input id="radio22" name="idAdd" type="checkbox" checked="checked">
                                            <label for="radio22">木林 由有子 (012121)</label>
                                        </div>
                                    </li>
                                    <li class="form-narrow__check-item">
                                        <div class="form-edit__checkbox">
                                            <input id="radio23" name="idAdd" type="checkbox">
                                            <label for="radio23">木村 弥生 (220220)</label>
                                        </div>
                                    </li>
                                    <li class="form-narrow__check-item">
                                        <div class="form-edit__checkbox">
                                            <input id="radio34" name="idAdd" type="checkbox">
                                            <label for="radio34">鈴木 めぐみ (232155)</label>
                                        </div>
                                    </li>
                                    <li class="form-narrow__check-item">
                                        <div class="form-edit__checkbox">
                                            <input id="radio45" name="idAdd" type="checkbox">
                                            <label for="radio45">望月 千尋 (2456869)</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <span class="form-narrow__name--04">定/単</span>
                        <div class="form_block">
                            <div class="form-edit__radio">
                                <input type="radio" name="job-style" value="" id="radio01">
                                <label for="radio01">単発</label>
                            </div>
                            <div class="form-edit__radio">
                                <input type="radio" name="job-style" value="" id="radio02" checked="checked">
                                <label for="radio02">定期</label>
                            </div>
                            <div class="form-edit__radio">
                                <input type="radio" name="job-style" value="" id="radio03">
                                <label for="radio03">すべて</label>
                            </div>
                        </div>
                    </div>
                    <div class="form-narrow__item watch-over">
                        <div class="form-narrow__txt">見守り</div>
                        <div class="form_block">
                            <div class="form-edit__radio">
                                <input type="radio" name="watch-over" value="" id="radio11">
                                <label for="radio11">あり</label>
                            </div>
                            <div class="form-edit__radio">
                                <input type="radio" name="watch-over" value="" id="radio12" checked="checked">
                                <label for="radio12">なし</label>
                            </div>
                            <div class="form-edit__radio">
                                <input type="radio" name="watch-over" value="" id="radio13">
                                <label for="radio13">すべて</label>
                            </div>
                        </div>
                        <span class="form-narrow__name--05">依頼カテゴリー</span>
                        <div class="form_part_select">
                            <ExeoSelect :options="requestCategoryOptions" value="0"></ExeoSelect>
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
</template>

<script>
import ExeoSelect from '../../components/action/ExeoSelect.vue';
import ExeoForm from '../form/ExeoForm.vue';

export default {
    name: "M045",
    components: {
        ExeoForm,
        ExeoSelect
    },
    data() {
        return {
            statusOptions: [
                { label: 'すべて', value: 0 },
                { label: 'リクエスト', value: 1 },
                { label: '見積もり提示', value: 2 },
                { label: '予約確定', value: 3 },
                { label: 'レポート待ち', value: 4 },
                { label: '承認待ち', value: 5 },
                { label: '完了', value: 6 },
                { label: '期限切れ', value: 7 },
                { label: 'キャンセル', value: 8 }
            ],
            requestCategoryOptions: [
                { label: 'すべて', value: 0 },
                { label: 'シッター', value: 1 },
                { label: '産前産後', value: 2 },
                { label: '病児保育', value: 3 },
                { label: '家事代行', value: 4 }
            ]
        };
    },
    methods: {

    },
    created() {

    }
};
</script>