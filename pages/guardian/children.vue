<template>
	<main id="page-P025" class="wrapper">
		<div class="breadcrumb">
			<div class="inner">
				<a href="/guardian/dashboard">マイページ</a><a href="/guardian/info">プロフィール編集</a><span class="current">お子様の情報</span>
			</div>
		</div>
		<div class="main-content page-account-setting">
			<div class="inner">
				<h1 class="c-ttl__01">プロフィール編集</h1>
				<div class="nav-scroll">
					<ul class="m-subnav">
                        <li class="m-subnav__item"><a href="./guardian/info">基本情報</a></li>
                        <li class="m-subnav__item is-active"><a href="./guardian/children">お子様の情報</a></li>
                        <li class="m-subnav__item"><a href="./guardian/profile">共通プロフィール</a></li>
                        <li class="m-subnav__item"><a href="./guardian/profile-image">プロフィール写真</a></li>
					</ul>
				</div>
				<div class="l-content">
					<div class="l-content__body">
						<h2 class="c-ttl__02 mbpc-31">お子様の情報</h2>
						<div class="js-add-wrap" v-for="(child, index) in childrenInfo" :key="index">
							<div class="js-add-input-item">
								<div class="child_ttl_block">
									<h3 class="child_ttl">お子様情報<span>（{{ index + 1 }}人目）</span></h3>
								</div>
								<ul class="job-infor__list job-infor__list--w178 mbpc-32 mbsp-32 ">
									<li class="job-infor__list-item job-infor__list-item--wrap">
										<div class="job-infor__list-ttl">名前<small class="required">※</small></div>
										<div class="job-infor__list-desc job-infor__list-desc-flex">
											<input type="text" placeholder="（姓）佐藤" class="form-edit__input"
												v-model="child.last_name">
											<input type="text" placeholder="（名）花子" class="form-edit__input"
												v-model="child.first_name">
										</div>
									</li>
									<li class="job-infor__list-item job-infor__list-item--wrap">
										<div class="job-infor__list-ttl">ふりがな<small class="required">※</small></div>
										<div class="job-infor__list-desc job-infor__list-desc-flex">
											<input type="text" placeholder="（せい）さとう" class="form-edit__input"
												v-model="child.last_kana">
											<input type="text" placeholder="（めい）はなこ" class="form-edit__input"
												v-model="child.first_kana">
										</div>
									</li>
									<li class="job-infor__list-item job-infor__list-item--wrap">
										<div class="job-infor__list-ttl">性別</div>
										<ExeoRadio_Guardian :options="genderOptions"
											v-model="child.gender">
										</ExeoRadio_Guardian>
									</li>
									<li class="job-infor__list-item job-infor__list-item--wrap">
										<div class="job-infor__list-ttl">愛称<small class="required">※</small></div>
										<div class="job-infor__list-desc">
											<input type="text" placeholder="ひなちゃん" class="form-edit__input"
												v-model="child.nickname">
										</div>
									</li>
									<li class="job-infor__list-item job-infor__list-item--wrap">
										<div class="job-infor__list-ttl">生年月日<small class="required">※</small></div>
										<div class="job-infor__list-desc">
											<label class="form_part_date">
												<input type="date" placeholder="日付を選択してください"
													class="form_part_date_input"
													v-model="child.birthday">
											</label>
											<p class="c-txt__04 mtpc-8 mtsp-8">出産前のお子さまの情報は出産予定日を入力ください。出産後変更することができます。
											</p>
										</div>
									</li>
									<li class="job-infor__list-item job-infor__list-item--wrap">
										<div class="job-infor__list-ttl">アレルギー</div>
										<div class="job-infor__list-desc">
											<exeo-textarea name="" cols="30" rows="4" class="form-edit__textarea"
												placeholder="例）小麦、牛乳など"
												v-model="child.allergy"></exeo-textarea>
										</div>
									</li>
									<li class="job-infor__list-item job-infor__list-item--wrap">
										<div class="job-infor__list-ttl">持病</div>
										<div class="job-infor__list-desc">
											<exeo-textarea name="" cols="30" rows="5" class="form-edit__textarea"
												v-model="child.chronic_disease"
												placeholder="（例）喘息がある。普段の生活では特にケアは必要ないが、発作が出た場合は医師から処方されている発作時の治療薬を内服して安静にしていると落ち着きます。"></exeo-textarea>
											<p class="c-txt__04 mtpc-8 mtsp-8">
												必要なケアや持病などを具体的にご記入ください。<br>持病（アナフィラキシーショック経験、てんかん、喘息など）や障害（発育遅延、発達障害など）
											</p>
										</div>
									</li>
									<li class="job-infor__list-item job-infor__list-item--wrap">
										<div class="job-infor__list-ttl">その他/配慮事項</div>
										<div class="job-infor__list-desc">
											<exeo-textarea name="chronic" placeholder="お子様の性格や好きな遊びなどご記入ください。" cols="30"
												v-model="child.other" rows="5"
												class="form-edit__textarea"></exeo-textarea>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="form-add on mbpc-23 mbsp-23" @click="isCreateChild">お子様を追加する</div>
						<div class="request-note">
							<h3 class="c-ttl__02 mbpc-10"> 登録内容の公開範囲について </h3>
							<p class="c-txt__01">基本情報の内容は一般公開はされません。登録内容の公開範囲は予約確定前と後などでパークサポーターへ公開される内容が異なります。<a
									href="https://stg.kids-parks.com/faq/profile-2/164/" class="txt-link"
									target="_blank">詳しくはこちら</a>をご覧ください。<br>
							</p>
						</div>
						<button type="button" @click="update" class="btn_entry mw-335">保存する</button>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ExeoForm from "@/components/form/ExeoForm.vue";
import { watch } from "vue";
import ExeoRadio from "../../components/action/ExeoRadio.vue";
import ExeoTextarea from '../../components/form/ExeoTextarea.vue';
import ExeoRadio_Guardian from '../../components/guardian/ExeoRadio.vue';
import GuardianChildService from '../../services/guardian/ChildService'


export default {
	layout: 'guardian',
	components: { ExeoForm, ExeoRadio, ExeoTextarea, ExeoRadio_Guardian },
	head() {
		return {
			title: 'プロフィール編集'
		}
	},
	data() {
		return {
			children: {
				id: null,
				first_name: '',
				first_kana: '',
				last_name: '',
				last_kana: '',
				gender: null,
				nickname: '',
				birthday: '',
				allergy: '',
				chronic_disease: '',
				other: '',
			},
			childrenInfo: [],
			genderOptions: [
				{ value: 0, label: "女性" },
				{ value: 1, label: "男性" },
			],
			editStatus: false
		};
	},
	methods: {
		async update() {
			const guardian = await GuardianChildService.updateAll(this,this.childrenInfo);
			if (guardian.code == 200) {
				window.scrollTo({top:0})
			}
		},
		isCreateChild() {
			this.childrenInfo.push(this.children)
		}

	},

	async asyncData(context) {
		try {
			const childrenData = await GuardianChildService.getChildInfo(context);
			return { 
				childrenInfo: (childrenData.length > 0) ? childrenData : [this.children]
			}
		} catch (e) {
			context.error(e.response);
		}
	},
}
</script>

<style>

</style>
