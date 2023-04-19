<template>
	<div class="col2_block_main">
		<form action="" class="form-edit">
			<table class="table_style_02 table_style_02--no-striped table_style_02--style5 form-edit__table"
				v-for="(child, index) in value" :key="index">
				<thead>
					<tr>
						<th>お子様の情報</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td class="looksort_table_info">名前</td>
						<td>
							<ExeoForm class="form-edit__input text-name" v-model="child.first_name"/>
							<ExeoForm class="form-edit__input text-name" v-model="child.last_name"/>
						</td>
					</tr>
					<tr>
						<td class="looksort_table_info">ふりがな</td>
						<td>
							<ExeoForm class="form-edit__input text-name" v-model="child.first_kana"/>
							<ExeoForm class="form-edit__input text-name" v-model="child.last_kana"/>
						</td>
					</tr>
					<tr>
						<td class="looksort_table_info">性別</td>
						<td>
							<div class="radio-group form-edit__radio">
								<ExeoRadio :options="$GENDER" :name="`gender${index}`" v-model="child.gender"/>
							</div>
						</td>
					</tr>
					<tr>
						<td class="looksort_table_info">愛称</td>
						<td><ExeoForm class="form-edit__input" v-model="child.nickname"/></td>
					</tr>
					<tr>
						<td class="looksort_table_info">生年月日</td>
						<td>
							<label class="form_part_date">
								<input type="date" v-model="child.birthday" class="form_part_date_input">
							</label>
						</td>
					</tr>
					<tr>
						<td class="looksort_table_info">アレルギー</td>
						<td><ExeoForm class="form-edit__input" v-model="child.allergy"/></td>
					</tr>
					<tr>
						<td class="looksort_table_info">持病</td>
						<td class="box-condition" :class="{'show' : child.chronic_disease_checked == '1'}">
							<div class="radio-group form-edit__radio">
								<ExeoRadio :isLabel="'1'" :options="$CONDITION" :name="`condition${index}`" v-model="child.chronic_disease_checked"/>
								<ExeoForm :isClassText="0" class="form-edit__input form-edit__input--full form-edit__input--for-radio" v-model="child.chronic_disease"/>
							</div>
						</td>
					</tr>
					<tr class="form-edit__status form-edit__auto-height">
						<td class="looksort_table_info">その他/配慮事項</td>
						<td>
							<ExeoTextarea :name="'memo'" :rows="9" :cols="40" class="form-edit__textarea form-edit__textarea--styles02" v-model="child.other"/>
						</td>
					</tr>
					<tr class="move-child" :style="value.length > 1 ? {'display': 'table-row'} : ''">
						<td></td>
						<td>
							<div class="btn_style_03 btn_style_03--large" v-on:click.prevent="removeChild(index)">このお子様情報を削除</div>
						</td>
					</tr>
				</tbody>
			</table>
			<div class="add-form__control add-form__control--styles02">
				<button class="btn_add" v-on:click.prevent="addNewChild">お子様を追加する</button>
				<button class="btn_style_04" v-on:click.prevent="saveData">保存する</button>
			</div>
		</form>
	</div>
</template>

<script>
import ExeoRadio from '~/components/action/ExeoRadio.vue';
import ExeoForm from '~/components/form/ExeoForm.vue';
import ExeoTextarea from '~/components/form/ExeoTextarea.vue';

export default {
	components: {
		ExeoRadio,
		ExeoForm,
		ExeoTextarea
	},
	props: {
		value: {
			type: Array,
			default: []
		},
	},
	created() {
		if (this.value === []) {
			addNewChild()
		}
	},
	methods: {
		saveData() {
			this.$emit('input', this.value)
			this.$emit('save')
		},
		addNewChild() {
			let newChild = {
				id: '',
				guardian_user_id: this.$route.params.id,
				first_name: '',
				last_name: '',
				first_kana: '',
				last_kana: '',
				gender: 0,
				nickname: '',
				birthday: '',
				allergy: '',
				chronic_disease: '',
				chronic_disease_checked: '0',
				other: '',
			}

			this.value.push(newChild);
		},
		removeChild(index) {
			this.value.splice(index, 1);
		}
	},
}
</script>
