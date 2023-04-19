<template>
    <div class="popup-block">
        <span class="popup-block__close"></span>
        <h2 class="popup-block__ttl">絞り込む</h2>
        <div class="popup-ct">
            <form id="configform" name="input" action="#" method="get">
                <div class="form-narrow">
                    <div class="form-narrow__item">
                        <div class="form-narrow__txt">投稿日</div>
                        <label class="form_part_date">
                            <ExeoForm type="date" placeholder="日付を選択してください" class="form_part_date_input"></ExeoForm>
                        </label>
                        <small>〜</small>
                        <label class="form_part_date">
                            <ExeoForm type="date" placeholder="日付を選択してください" class="form_part_date_input"></ExeoForm>
                        </label>
                    </div>
                    <div class="form-narrow__item">
                        <div class="form-narrow__txt">サポーター</div>
                        <div class="js-show-search">
                            <label class="form-narrow__search">
                                <ExeoForm type="text" placeholder="IDまたは名前を入力" class="form-edit__input"></ExeoForm>
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
                        <span class="form-narrow__name">お仕事ID</span>
                        <input type="text" placeholder="入力してください" class="form-edit__input">
                    </div>
                    <div class="form-narrow__item">
                        <div class="form-narrow__txt">公開</div>
                        <div class="form_part_select">
                            <ExeoSelect :options="publicOptions"></ExeoSelect>
                        </div>
                    </div>
                    <div class="form-narrow__item">
                        <div class="form-narrow__txt">評価</div>
                        <div class="form_block">
                            <div class="form-edit__checkbox">
                                <input id="checkbox01" name="star" type="checkbox">
                                <label for="checkbox01">5つ星</label>
                            </div>
                            <div class="form-edit__checkbox">
                                <input id="checkbox02" name="star" type="checkbox">
                                <label for="checkbox02">4つ星</label>
                            </div>
                            <div class="form-edit__checkbox">
                                <input id="checkbox03" name="star" type="checkbox">
                                <label for="checkbox03">3つ星</label>
                            </div>
                            <div class="form-edit__checkbox">
                                <input id="checkbox04" name="star" type="checkbox">
                                <label for="checkbox04">2つ星</label>
                            </div>
                            <div class="form-edit__checkbox">
                                <input id="checkbox05" name="star" type="checkbox">
                                <label for="checkbox05">1つ星</label>
                            </div>
                            <div class="form-edit__checkbox">
                                <input id="checkbox06" name="star" type="checkbox">
                                <label for="checkbox06">なし</label>
                            </div>
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
import ExeoCheckbox from "@/components/action/ExeoCheckbox.vue";
import ExeoSelect from "@/components/action/ExeoSelect.vue";
import ExeoForm from "@/components/form/ExeoForm.vue";

export default {
    props: {
        value: {
            type: Object
        }
    },
    components: {
        ExeoCheckbox,
        ExeoSelect,
        ExeoForm
    },
    data() {
        return {
            publicOptions: [
                { label: 'すべて', value: 0 },
                { label: '公開', value: 1 },
                { label: '非公開', value: 2 }
            ]
        }
    },
    methods: {

    }
} 
</script>

<style>

</style>