<template>
    <div class="popup-block">
        <span class="popup-block__close"></span>
        <h2 class="popup-block__ttl">絞り込む</h2>
        <div class="popup-ct">
            <form id="configform" name="input" action="#" method="get">
                <div class="form-narrow">
                    <div class="form-narrow__item">
                        <div class="form-narrow__txt">投稿日</div>
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
                        <div class="form-narrow__txt">ユーザー</div>
                        <ExeoForm type="text" placeholder="IDまたは名前を入力" class="form-narrow__input"></ExeoForm>
                        <span class="form-narrow__name">お仕事ID</span>
                        <div class="form-narrow__select">
                            <ExeoForm type="text" placeholder="入力してください" class="form-narrow__input"></ExeoForm>
                        </div>
                    </div>
                    <div class="form-narrow__item">
                        <div class="form-narrow__txt">公開</div>
                        <div class="form-narrow__select form_part_select">
                            <ExeoSelect :options="publicOptions" value="1"></ExeoSelect>
                        </div>
                    </div>
                    <div class="form-narrow__item">
                        <div class="form-narrow__txt">評価</div>
                        <ul class="form-narrow__check">
                            <li class="form-narrow__check-item">
                                <label class="checkbox-custom checkbox-custom--02">
                                    <input type="checkbox" class="checks">
                                    <span class="checkmark"></span>5つ星 </label>
                            </li>
                            <li class="form-narrow__check-item">
                                <label class="checkbox-custom checkbox-custom--02">
                                    <input type="checkbox" class="checks" checked="checked">
                                    <span class="checkmark"></span>4つ星 </label>
                            </li>
                            <li class="form-narrow__check-item">
                                <label class="checkbox-custom checkbox-custom--02">
                                    <input type="checkbox" class="checks">
                                    <span class="checkmark"></span>3つ星 </label>
                            </li>
                            <li class="form-narrow__check-item">
                                <label class="checkbox-custom checkbox-custom--02">
                                    <input type="checkbox" class="checks">
                                    <span class="checkmark"></span>2つ星 </label>
                            </li>
                            <li class="form-narrow__check-item">
                                <label class="checkbox-custom checkbox-custom--02">
                                    <input type="checkbox" class="checks">
                                    <span class="checkmark"></span>1つ星 </label>
                            </li>
                            <li class="form-narrow__check-item">
                                <label class="checkbox-custom checkbox-custom--02">
                                    <input type="checkbox" class="checks">
                                    <span class="checkmark"></span>なし </label>
                            </li>
                        </ul>
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
            publicOptions: [
                { label: 'すべて', value: 0 },
                { label: '予約中', value: 1 },
                { label: '欠席', value: 2 },
                { label: 'キャンセル', value: 3 },
                { label: '受講済み', value: 4 },
            ],
        }
    },
    methods: {

    }
}
</script> 