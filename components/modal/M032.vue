<template>
	<div class="application-block__btn">
		<button class="btn_style_05 js-popup" @click="isShowing = true">絞り込む</button>
		<div class="popup-main" :class="{ open: isShowing }">
			<div class="popup-block" >
				<span class="popup-block__close" @click="isShowing = false"></span>
				<h2 class="popup-block__ttl">絞り込む</h2>
				<div class="popup-ct">
					<form id="configform" name="input" action="#" method="get">
						<div class="form-narrow">
							<div class="form-narrow__item">
								<div class="form-narrow__txt">申請日</div>
								<label class="form-narrow__date">
									<input type="date" placeholder="日付を選択してください" class="form-narrow__input form_part_date_input" v-model="value.request_at_from">
								</label>
								<small>〜</small>
								<label class="form-narrow__date">
									<input type="date" placeholder="日付を選択してください" class="form-narrow__input form_part_date_input" v-model="value.request_at_to">
								</label>
							</div>
							<div class="form-narrow__item">
								<div class="form-narrow__txt">ファイルID</div>
								<ExeoForm :placeholder="'入力してください'" class="form-narrow__input" v-model="value.file_id" />
								<span class="form-narrow__name">ステータス</span>
								<div class="form-narrow__select form_part_select">
									<ExeoSelect
										:options="$VERITIFY_STATUS_OPTIONS"
										v-model="value.status"
									/>
								</div>
							</div>
							<div class="form-narrow__item">
								<div class="form-narrow__txt">カテゴリー</div>
								<div class="form-narrow__select form_part_select">
									<exeo-select
										:options="$IDENTITY_DOCUMENT_TYPES"
										v-model="value.category"
                  >
                    <option value="">すべて</option>
                  </exeo-select>
								</div>
								<span class="form-narrow__name form-narrow__name--02">パークサポーター</span>
								<ExeoForm :placeholder="'IDまたは名前を入力'" class="form-narrow__input" v-model="value.supporter_info" />
							</div>
							<div class="form-narrow__item">
								<div class="form-narrow__txt">有効期限</div>
								<label class="form-narrow__date">
									<input type="date" placeholder="日付を選択してください" class="form-narrow__input form_part_date_input" v-model="value.expiration_on">
								</label>
								<small>まで</small>
							</div>
						</div>
						<div class="popup-ct__btn tc">
							<button class="btn_style_04" @click.prevent="emitData">絞り込む</button>
							<input type="reset" id="configreset" value="すべてリセットする" class="btn_style_02" @click="resetData">
						</div>
					</form>
				</div>
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
		ExeoCheckbox,
		ExeoSelect,
		ExeoForm
	},
	data() {
		return {
			isShowing: false,
		}
	},
	methods: {
		emitData() {
      this.isShowing = false;
			this.$emit('submit', this.value)
		},
		resetData() {
      this.value.request_at_from = "";
      this.value.request_at_to = "";
      this.value.file_id = "";
      this.value.status = "";
      this.value.category = "";
      this.value.supporter_info = "";
      this.value.expiration_on = "";
		}
	}
}
</script>

