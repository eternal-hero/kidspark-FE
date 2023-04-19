<template>
    <div class="popup-main">
        <div class="popup-block">
            <span class="popup-block__close"></span>
            <h2 class="popup-block__ttl">絞り込む</h2>
            <div class="popup-ct">
                <form id="configform" name="input" action="#" method="get">
                    <div class="form-narrow">
                        <div class="form-narrow__item">
                            <div class="form-narrow__txt">開始日</div>
                            <label class="form-narrow__date">
                                <ExeoForm type="date" placeholder="日付を選択してください" class="form-narrow__input form_part_date_input"></ExeoForm>
                            </label>
                            <small>〜</small>
                            <label class="form-narrow__date">
                                <ExeoForm type="date" placeholder="日付を選択してください" class="form-narrow__input form_part_date_input"></ExeoForm>
                            </label>
                        </div>
                        <div class="form-narrow__item">
                            <div class="form-narrow__txt">公開応募ID</div>
                            <ExeoForm  type="text" placeholder="入力してください" class="form-narrow__input"></ExeoForm>
                            <span class="form-narrow__name">ステータス</span>
                            <div class="form-narrow__select form_part_select">
                                <select>
                                    <option value="すべて">すべて</option>
                                    <option value="リクエスト">リクエスト</option>
                                    <option value="見積もり提示">見積もり提示</option>
                                    <option value="予約確定">予約確定</option>
                                    <option value="予約確定(準備OK)">予約確定(準備OK)</option>
                                    <option value="予約確定(サポート中)">予約確定(サポート中)</option>
                                    <option value="レポート待ち">レポート待ち</option>
                                    <option value="承認待ち">承認待ち</option>
                                    <option value="完了">完了</option>
                                    <option value="期限切れ">期限切れ</option>
                                    <option value="キャンセル">キャンセル</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-narrow__item">
                            <div class="form-narrow__txt">パークサポーター</div>
                            <ExeoForm  type="text" placeholder="IDまたは名前を入力" class="form-narrow__input"></ExeoForm>
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
                            <div class="form-narrow__txt">ユーザー</div>
                            <input type="text" placeholder="IDまたは名前を入力" class="form-narrow__input">
                            <span class="form-narrow__name">依頼カテゴリー</span>
                            <div class="form-narrow__select form_part_select">
                                <select>
                                    <option value="select1">すべて</option>
                                    <option value="select1">シッター</option>
                                    <option value="select1">産前産後</option>
                                    <option value="select1">病児保育</option>
                                    <option value="select1">家事代行</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-narrow__item">
                            <div class="form-narrow__txt">都道府県</div>
                            <div class="form-narrow__select form_part_select">
                                <ExeoSelect  :options="$PREFECTURES"></ExeoSelect>
                                
                            </div>
                            <span class="form-narrow__name">応募数</span>
                            <ul class="form-narrow__check">
                                <li class="form-narrow__check-item">
                                    <!-- <label class="checkbox-custom checkbox-custom--02"> -->
                                        <ExeoCheckbox type="checkbox" class="checks"></ExeoCheckbox>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span class="checkmark"></span>応募あり
                                </li>
                                <li class="form-narrow__check-item">
                                    <!-- <label class="checkbox-custom checkbox-custom--02"> -->
                                        <ExeoCheckbox type="checkbox" class="checks" checked="checked"></ExeoCheckbox>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <span class="checkmark"></span>応募なし 
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
		ExeoSelect,
        ExeoCheckbox,
		ExeoForm
	},
	data() {
		return {
            prefecturesOptions : [
                {}
            ]
		}
	},
	methods: {
	
	}
}
</script>