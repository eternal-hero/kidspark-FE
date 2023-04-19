<template>
	<div class="col2_block_main">
		<h2 class="cmn-ttl-01"><span>お子様の情報</span></h2>
		<table class="table_style_01" v-for="child in value" :key="child.id">
			<tbody>
				<tr>
					<th class="looksort_table_info">名前</th>
					<td>{{ child.first_name + '　' + child.last_name }}</td>
				</tr>
				<tr>
					<th class="looksort_table_info">ふりがな</th>
					<td>{{ child.first_kana + '　' + child.last_kana }}</td>
				</tr>
				<tr>
                  	<th>性別</th>
                    <td>{{child.gender ? "男の子" : "女の子"}}</td>
                </tr>
				<tr>
					<th class="looksort_table_info">愛称</th>
					<td>{{ child.nickname }}</td>
				</tr>
				<tr>
					<th class="looksort_table_info">生年月日</th>
					<td>{{ child.birthday ? formatBirthday(child.birthday) : ""}}</td>
				</tr>
				<tr>
					<th class="looksort_table_info">アレルギー</th>
					<td>{{ child.allergy }}</td>
				</tr>
				<tr>
					<th class="looksort_table_info">持病</th>
					<td>{{ child.chronic_disease }}</td>
				</tr>
				<tr>
					<th class="looksort_table_info">その他/配慮事項</th>
					<td>{{ child.other }}</td>
				</tr>
				<tr>
					<th></th>
					<td style="height : 10px"></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	props: {
		value: {
			type: Array,
			default: []
		},
	},

	methods: {
    formatBirthday(val) {
      return this.$moment(val).format("YYYY年MM月DD日");
    },
  },
}
</script>
