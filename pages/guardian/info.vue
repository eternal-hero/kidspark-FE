<template>
	<main id="page-U006-X" class="wrapper">
		<div class="breadcrumb">
			<div class="inner">
				<a href="/guardian/dashboard">マイページ</a><a href="/guardian/info">プロフィール編集</a><span class="current">基本情報</span>
			</div>
		</div>
		<div class="main-content page-account-setting">
			<div class="inner">
				<h1 class="c-ttl__01">プロフィール編集</h1>
				<div class="nav-scroll">
					<ul class="m-subnav">
                        <li class="m-subnav__item is-active"><a href="./guardian/info">基本情報</a></li>
                        <li class="m-subnav__item"><a href="./guardian/children">お子様の情報</a></li>
                        <li class="m-subnav__item"><a href="./guardian/profile">共通プロフィール</a></li>
                        <li class="m-subnav__item"><a href="./guardian/profile-image">プロフィール写真</a></li>
					</ul>
				</div>
				<div class="l-content">
					<div class="l-content__body">
						<h2 class="c-ttl__02 mbpc-31">基本情報</h2>
						<ul class="job-infor__list job-infor__list--w178 mbpc-32 mbsp-32">
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">名前</div>
								<div class="job-infor__list-desc"> {{ guardian.last_name }}
									{{ guardian.first_name }} ({{ guardian.last_kana }}
									{{ guardian.first_kana }})<br>
									<!-- <a href="./U082.html" class="txt-link"> 氏名変更申請をする </a> -->
								</div>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">ニックネーム<small class="required">※</small></div>
								<div class="job-infor__list-desc">
									<exeo-form type="text" name="nickname" placeholder="花ママ" class="form-edit__input"
										v-model="guardian.nickname"></exeo-form>
								</div>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">性別</div>
								<ExeoRadio_Guardian :options="genderOptions" name="gender" v-model="guardian.gender"/>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">お子様との続柄</div>
								<div class="job-infor__list-desc">
									<exeo-form type="text" name="relation" placeholder="母" class="form-edit__input"
										v-model="guardian.relation"></exeo-form>
								</div>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">生年月日</div>
								<div class="job-infor__list-desc">
									{{ formatDate(guardian.birthday) }}
								</div>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">住所</div>
								<div class="job-infor__list-desc">{{ full_address }}<br>
									<!-- <a href="./U082.html" class="txt-link"> 住所変更申請をする </a> -->
								</div>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">連絡先電話番号<small class="required">※</small></div>
								<div class="job-infor__list-desc">
									<exeo-form type="text" name="contact_phone_number" placeholder="（例）07025654569"
										class="form-edit__input"
										v-model="guardian.contact_phone_number"></exeo-form>
									<p class="c-txt__04 mtpc-8 mtsp-8">連絡の取れやすい電話番号を登録してください。</p>
								</div>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">メールアドレス</div>
								<div class="job-infor__list-desc">
									<a href="mailto:kidspark@gmail.com" class="no-underline">
                    {{guardian.mail_address }}
                  </a><br>
									<!-- <a href="./U083.html" class="txt-link"> メールアドレスを変更する </a> -->
								</div>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">勤務先<small class="required">※</small></div>
								<div class="job-infor__list-desc">
									<exeo-form name="workspace" type="text" placeholder="（例）株式会社キッズパーク"
										class="form-edit__input" v-model="guardian.workspace"></exeo-form>
								</div>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">家族構成<small class="required">※</small></div>
								<div class="job-infor__list-desc">
									<exeo-form type="text" name="family_structure" placeholder="（例）父, 母, 子"
										class="form-edit__input" v-model="guardian.family_structure"></exeo-form>
								</div>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">ペットの有無<small class="required">※</small></div>
								<ExeoRadio_Guardian :options="petOptions" name="pet" v-model="guardian.is_pets">
								</ExeoRadio_Guardian>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">住居形態<small class="required">※</small></div>
								<div class="job-infor__list-desc">
									<exeo-form type="text" name="housing_type" placeholder="（例）マンション、戸建など"
										class="form-edit__input" v-model="guardian.housing_type"></exeo-form>
								</div>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">カメラ設置</div>
								<ExeoRadio_Guardian :options="cameraOptions" v-model="guardian.is_camera">
								</ExeoRadio_Guardian>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">緊急連絡先のお名前<small class="required">※</small></div>
								<div class="job-infor__list-desc">
									<exeo-form type="text" name="emergency_contact_name" placeholder="（例）鈴木　太郎"
										class="form-edit__input"
										v-model="guardian.emergency_contact_name"></exeo-form>
								</div>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">緊急連絡先電話番号<small class="required">※</small></div>
								<div class="job-infor__list-desc">
									<exeo-form type="text" name="emergency_contact_phone_number"
										placeholder="（例）07012345678" class="form-edit__input"
										v-model="guardian.emergency_contact_phone_number"></exeo-form>
								</div>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">登録者との関係<small class="required">※</small></div>
								<div class="job-infor__list-desc">
									<exeo-form name="emergency_contact_relation" type="text" placeholder="（例）夫、祖母など"
										class="form-edit__input"
										v-model="guardian.emergency_contact_relation"></exeo-form>
								</div>
							</li>
							<li class="job-infor__list-item job-infor__list-item--wrap">
								<div class="job-infor__list-ttl">ユーザーID</div>
								<div class="job-infor__list-desc">{{ this.guardian.id }}</div>
							</li>
						</ul>
						<div class="request-note">
							<h3 class="c-ttl__02 mbpc-10"> 登録内容の公開範囲について </h3>
							<p class="c-txt__01">基本情報の内容は一般公開はされません。登録内容の公開範囲は予約確定前と後などでパークサポーターへ公開される内容が異なります。<a
									href="https://stg.kids-parks.com/faq/profile-2/164/" class="txt-link"
									target="_blank">詳しくはこちら</a>をご覧ください。<br>
							</p>
						</div>
						<button type="button" @click="save" class="btn_entry mw-335">保存する</button>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import ExeoForm from "@/components/form/ExeoForm.vue";
import ExeoRadio from "../../components/action/ExeoRadio.vue";
import ExeoTextarea from '../../components/form/ExeoTextarea.vue';
import ExeoRadio_Guardian from '../../components/guardian/ExeoRadio.vue';
import GuardianInfoService from '../../services/guardian/InfoService.js';
import {datetimeMixin} from "@/mixins/datetimeMixin";

export default {
	layout: 'guardian',
	components: { ExeoForm, ExeoRadio, ExeoTextarea, ExeoRadio_Guardian },
	head() {
		return {
			title: 'プロフィール編集'
		}
	},
  mixins: [datetimeMixin],
	data() {
		return {
			guardian: {},
			genderOptions: [
				{ value: 0, label: "女性" },
				{ value: 1, label: "男性" },
			],
			petOptions: [
				{ value: 1, label: "あり" },
				{ value: 0, label: "なし" },
			],
			cameraOptions: [
				{ value: 1, label: "あり" },
				{ value: 0, label: "なし" },
			],
		};
	},
  async asyncData(context) {
		try {
			const guardian = await GuardianInfoService.getInfo(context);
      return {
        guardian: guardian
      }
		} catch (e) {
			context.error(e.response);
		}
	},
	methods: {
		async save() {
      try {
  			const guardian_status = await GuardianInfoService.updateInfo(this, this.guardian);
				window.scrollTo({top:0})
			} catch (e) {
        console.log(e);
      }
		}
	},
  computed: {
    full_address() {
      return `${this.guardian.prefecture || ""}${this.guardian.municipality || ""} ${this.guardian.street_name || ""}${this.guardian.building||""}`;
    },
  }
}
</script>

<style>

</style>
