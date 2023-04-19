<template>
    <main id="page-P030" class="wrapper">
        <div class="breadcrumb">
            <div class="inner">
                <!-- <a href="../">マイページ</a><span class="current">アカウント設定</span> -->
                <a>マイページ</a><span class="current">アカウント設定</span>
            </div>
        </div>
        <div class="main-content page-account-setting">
            <div class="inner">
                <h1 class="c-ttl__01">アカウント設定</h1>
                <div class="nav-scroll">
                    <ul class="m-subnav">
                        <li class="m-subnav__item"><a href="./supporter/info">基本情報</a></li>
                        <li class="m-subnav__item"><a href="./supporter/profile">共通プロフィール</a></li>
                        <li class="m-subnav__item"><a href="./supporter/support-area">サポートエリア</a></li>
                        <li class="m-subnav__item"><a href="./supporter/pre-interview">事前面談設定</a></li>
                        <li class="m-subnav__item"><a href="./supporter/working-image">仕事中のイメージ写真</a></li>
                        <li class="m-subnav__item is-active"><a href="./supporter/license">保有資格</a></li>
                    </ul>
                </div>
                <div v-if="submissionStatus === 'success'" class="c-notyfication c-notyfication--primary">
                    <div class="c-notyfication__icn">
                        <img src="@/assets/supporter/img/common/icn_success.png" alt="Ico" width="24">
                    </div>
                    <div class="c-notyfication__ct">
                        <div class="c-notyfication__ttl">送信しました</div>
                    </div>
                    <div class="c-notyfication__close js-close-notyfication" @click="submissionStatus = ''"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
                </div>
                <div v-if="submissionStatus === 'failed'" class="c-notyfication c-notyfication--danger">
                    <div class="c-notyfication__icn">
                        <img src="@/assets/supporter/img/common/icn_danger.png" alt="Ico" width="24">
                    </div>
                    <div class="c-notyfication__ct">
                        <div class="c-notyfication__ttl">エラー通知</div>
                        <div class="c-notyfication__desc">保存できませんでした。</div>
                    </div>
                    <div class="c-notyfication__close js-close-notyfication" @click="submissionStatus = ''"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
                </div>
                <div class="l-content">
                    <div class="l-content__body">
                        <h2 class="c-ttl__02 mbpc-40">保有資格</h2>
                        <hr class="hr mbpc-33">
                        <p class="c-txt__01 mbpc-25 mbsp-20 c-txt__01--fw400"> 資格・研修の書類は申請された内容を本部で審査後、審査に通ったものが「有効」となり、「有効」のステータスのみサポーターのプロフィール画面に表示されます。 </p>
                        <h3 class="c-txt__02 c-txt__02--bold">登録済み保有資格・修了研修</h3>
                        <ul class="work-list work-list--02 c-txt__03 js-accordion02">
                            <li class="work-list__item" v-for="(application, index) in applications" :key="index">
                                <div class="work-list__link">
                                    <div class="work-list__ct">
                                        <div class="work-list__ttl"> {{applicationName(application)}}
                                            <span>有効期限:{{formatDate(application.expiration_on)}}</span>
                                        </div>
                                    </div>
                                    <exeo-supporter-request-status :value="application.status"/>
                                </div>
                            </li>
                        </ul>
                        <div class="form-add js-show-acc">
                            <span class="on">資格を追加する</span>
                            <span class="off">資格を閉じる</span>
                        </div>
                        <div class="js-ct-acc">
                            <form method="post">
                                <div class="quote-list">
                                    <div class="quote-list__item02">
                                        <h3 class="quote-list__ttl">追加したい保有資格・修了研修を申請</h3>
                                        <p class="c-txt__01 c-txt__01--fw400"> お仕事に関係がないと判断した資格、研修については本部にて不受理とする可能性がございますのであらかじめご了承ください。 </p>
                                        <div class="request-form request-form--02">
                                            <div class="request-form__item">
                                                <div class="request-form__ttl">カテゴリー<span>※</span>
                                                </div>
                                                <div class="request-form__ct">
                                                    <ul class="form-check form-check--radio js-check-value">
                                                        <li class="form-check--radio" v-for="(categoryOption, index) in categoryOptions" :key="index">
                                                            <label class="form-edit__radio_02">
                                                                <input type="radio" name="transportation" class="checks" :value="categoryOption.value" v-model="newApplication.category">
                                                                <span class="checkmark"></span>{{categoryOption.label}} </label>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="request-form__item">
                                                <div class="request-form__ttl pt0 mtpc-1">名称<span>※</span>
                                                </div>
                                                <div class="request-form__ct">
                                                    <div id="シッター必須資格" class="js-check-form" :class="{show: newApplication.category == 1}">
                                                        <div class="form_part_select">
                                                            <select v-model="newApplication.application_type">
                                                                <option v-for="(license, index) in $ADMIN_SUPPORTER_APPLICATION_SITTER_LICENSE" :key="index" :value="license.value">
                                                                    {{license.label}}
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div id="病児・産前産後必須資格" class="js-check-form" :class="{show: newApplication.category == 2}">
                                                        <div class="form_part_select">
                                                            <select v-model="newApplication.application_type">
                                                                <option v-for="(license, index) in $ADMIN_SUPPORTER_APPLICATION_INFANT_CARE_LICENSE" :key="index" :value="license.value">
                                                                    {{license.label}}
                                                                </option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div id="その他の保育関連資格" class="js-check-form" :class="{show: newApplication.category == 3}">
                                                        <div class="form_part_select mbpc-10 mbsp-10 js-select-change">
                                                            <select v-model="newApplication.application_type">
                                                                <option v-for="(license, index) in $ADMIN_SUPPORTER_APPLICATION_OTHER_LICENSE" :key="index" :value="license.value">
                                                                    {{license.label}}
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <input :class="{show: newApplication.application_type == 6}" type="text" placeholder="正式名称を記載してください" class="form-edit__input form-edit__input-show" v-model="newApplication.application_name">
                                                    </div>
                                                    <div id="家事代行関連資格" class="js-check-form" :class="{show: newApplication.category == 4}">
                                                        <div class="form_part_select mbpc-10 mbsp-10 js-select-change">
                                                            <select v-model="newApplication.application_type">
                                                                <option v-for="(license, index) in $ADMIN_SUPPORTER_APPLICATION_HOUSEKEEPER_LICENSE" :key="index" :value="license.value">
                                                                    {{license.label}}
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <input :class="{show: newApplication.application_type == 11}" type="text" placeholder="正式名称を記載してください" class="form-edit__input form-edit__input-show" v-model="newApplication.application_name">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="quote-list__item02">
                                        <h3 class="quote-list__ttl">資格証明書の提出</h3>
                                        <div class="job-infor__txt"> ※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf </div>
                                        <div class="job-infor__listfile-thumbnail form-fileimg">
                                            <div class="job-infor__listfile js-add-wrap">
                                                <div class="job-infor__listfile-thumbnail form-fileimg"
                                                     @drop.prevent="dropLicenceImage($event)" @dragover="dragover">
                                                >
                                                    <div class="lb-file">
                                                        <label for="upload-photo01">PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。
                                                            <div v-if="image.show" class="job-infor__listfile-imguse"><img :src="image.url" alt="img"></div>
                                                            <span v-else class="job-infor__listfile-imguse">
                                                                <span class="pc"><img src="@/assets/supporter/img/p029/img-05.png" alt="img" id="blah" class="js-imgfile"></span>
                                                                <span class="sp"><img width="93" src="@/assets/supporter/img/p029/img-05.png" alt="img" class="js-imgfile"></span>
                                                            </span>
                                                            <input type="file" name="photo" id="upload-photo01" class="js_uploadfile" @change="changeImage">
                                                        </label>
                                                        <div class="form-remove js-remove" @click="deleteImage">削除</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="form-add on mbpc-23 mbsp-23" @click="addImage">ファイルを追加する</div> -->
                                        <hr class="hr mbpc-30">
                                        <div class="request-note">申請受理まで最短30分、最大で2日間ほどかかる場合がございます。<br>申請が受理されるとメールにて通知され、サポータープロフィール画面へ資格・研修名が表示されます。</div>
                                        <button type="button" class="btn_entry mw-314" @click="save">送信する</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import ExeoSupporterRequestStatus from "~/components/supporter/ExeoSupporterRequestStatus.vue"
import LicenseService from '@/services/supporter/LicenseService'
import {datetimeMixin} from '@/mixins/datetimeMixin'
import moment from "moment"
export default {
    layout: "supporter",
    mixins: [datetimeMixin],
    head() {
        return {
            title: 'アカウント設定'
        }
    },
    components: {
        ExeoSupporterRequestStatus,
    },
    async asyncData(context) {
        const applications = await LicenseService.getLicense(context);
        return {
            applications: applications.filter(application => application.category != 0)
        }
    },
    data() {
        return {
            applications: [],
            status: "未対応",
            statusOptions: [
                {value: 0, label: "未対応"},
                {value: 1, label: "有効"},
                {value: 2, label: "期限切れ"},
                {value: 3, label: "不受理"},
            ],
            categoryOptions: [
                {value: 1, label: "シッター必須資格"},
                {value: 2, label: "病児・産前産後必須資格"},
                {value: 3, label: "その他の保育関連資格"},
                {value: 4, label: "家事代行関連資格"},
            ],
            newApplication: {
                status: 0,
                category: null,
                application_type: 1,
                application_name: null,
                application_at: moment().format('YYYY-MM-DD HH:mm:ss'),
                expiration_on: moment().add(3,'y').format('YYYY-MM-DD'),
                file_path: null,
                file_id: "000000",
            },
            image: {
                show: false,
                url: null,
                file: null,
            },
            submissionStatus: ''
        }
    },
    methods: {
        applicationName(application) {
            switch(application.category) {
                case 1: return this.$ADMIN_SUPPORTER_APPLICATION_SITTER_LICENSE_SHOW[application.application_type];
                case 2: return this.$ADMIN_SUPPORTER_APPLICATION_INFANT_CARE_LICENSE_SHOW[application.application_type];
                case 3:
                    if (application.application_type == 6) {
                        return application.application_name
                    } else {
                        return this.$ADMIN_SUPPORTER_APPLICATION_OTHER_LICENSE_SHOW[application.application_type];
                    }
                case 4:
                    if (application.application_type == 11) {
                        return application.application_name
                    } else {
                        return this.$ADMIN_SUPPORTER_APPLICATION_HOUSEKEEPER_LICENSE_SHOW[application.application_type];
                    }
            }
        },
        changeImage(e) {
            const file = e.target.files[0]
            if (file) {
                if (file.type == 'image/jpg' || file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/heic' || file.type == 'application/pdf') {
                    this.image.file = file
                    this.image.url = URL.createObjectURL(file)
                    this.image.show = true
                }
            }
        },
        deleteImage() {
            this.image= {
                show: false,
                url: null,
                file: null,
            }
        },
        async save() {
            try {
                const response = await LicenseService.postFile(this,this.image.file)
                this.newApplication.file_path = response.data
                await LicenseService.createLicense(this,this.newApplication)
                this.submissionStatus = 'success';
            } catch {
                this.submissionStatus = 'failed';
            }
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            setTimeout(() => {location.reload();}, 2000);
        },
        dropLicenceImage(event) {
          event.preventDefault();
          const file = event.dataTransfer.items[0].getAsFile();
          if (file.type.includes('image')) {
            this.$set(this.image, 'file', file)
            this.$set(this.image, 'show', true)
            this.$set(this.image, 'url', URL.createObjectURL(file))
          }
        },
        dragover(event) {
          event.preventDefault();
        },
    },
}
</script>

<style>

</style>
