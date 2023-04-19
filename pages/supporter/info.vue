<template>
    <main id="page-P025" class="wrapper">
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
                        <li class="m-subnav__item is-active"><a href="./supporter/info">基本情報</a></li>
                        <li class="m-subnav__item"><a href="./supporter/profile">共通プロフィール</a></li>
                        <li class="m-subnav__item"><a href="./supporter/support-area">サポートエリア</a></li>
                        <li class="m-subnav__item"><a href="./supporter/pre-interview">事前面談設定</a></li>
                        <li class="m-subnav__item"><a href="./supporter/working-image">仕事中のイメージ写真</a></li>
                        <li class="m-subnav__item"><a href="./supporter/license">保有資格</a></li>
                    </ul>
                </div>
                <div v-if="status == 'save'" class="c-notyfication c-notyfication--primary">
                    <div class="c-notyfication__icn">
                        <img src="@/assets/supporter/img/common/icn_success.png" alt="Ico" width="24">
                    </div>
                    <div class="c-notyfication__ct">
                        <div class="c-notyfication__ttl">送信しました</div>
                    </div>
                    <div class="c-notyfication__close js-close-notyfication" @click="status=null"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
                </div>
                <div v-if="status == 'error'" class="c-notyfication c-notyfication--danger">
                    <div class="c-notyfication__icn">
                        <img src="@/assets/supporter/img/common/icn_danger.png" alt="Ico" width="24">
                    </div>
                    <div class="c-notyfication__ct">
                        <div class="c-notyfication__ttl">エラー通知</div>
                        <div class="c-notyfication__desc">保存できませんでした。</div>
                    </div>
                    <div class="c-notyfication__close js-close-notyfication" @click="status=null"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
                </div>
                <div class="l-content">
                    <div class="l-content__body">
                        <h2 class="c-ttl__02 mbpc-31">基本情報</h2>
                        <ul class="job-infor__list job-infor__list--w178 mbpc-32 mbsp-32">
                            <li class="job-infor__list-item job-infor__list-item--wrap">
                                <div class="job-infor__list-ttl">名前</div>
                                <div class="job-infor__list-desc"> {{info.last_name}}　{{info.first_name}} ({{info.last_kana}}　{{info.first_kana}})<br>
                                    <!-- <a href="./change-form/name-address" class="txt-link"> 氏名変更申請をする </a> -->
                                </div>
                            </li>
                            <li class="job-infor__list-item job-infor__list-item--wrap">
                                <div class="job-infor__list-ttl">性別</div>
                                <div class="job-infor__list-desc">
                                    <label class="form-edit__radio" v-if="info.gender == 0"><input type="radio" name="radio" checked="checked"><span>女性</span></label>
                                    <label class="form-edit__radio" v-if="info.gender == 1"><input type="radio" name="radio" checked="checked"><span>男性</span></label>
                                </div>
                            </li>
                            <li class="job-infor__list-item job-infor__list-item--wrap">
                                <div class="job-infor__list-ttl">生年月日</div>
                                <div class="job-infor__list-desc"> {{ formatDate(info.birthday)}} </div>
                            </li>
                            <li class="job-infor__list-item job-infor__list-item--wrap">
                                <div class="job-infor__list-ttl">住所</div>
                                <div class="job-infor__list-desc"> {{address}}<br>
                                    <!-- <a href="./change-form/name-address" class="txt-link"> 住所変更申請をする </a> -->
                                </div>
                            </li>
                            <li class="job-infor__list-item job-infor__list-item--wrap">
                                <div class="job-infor__list-ttl">電話番号<small class="required">※</small></div>
                                <div class="job-infor__list-desc">
                                    <input type="text" placeholder="（例）07025654569" class="form-edit__input" v-model="info.phone_number">
                                    <p class="c-txt__04 mtpc-8 mtsp-8">連絡の取れやすい電話番号を登録してください。</p>
                                </div>
                            </li>
                            <li class="job-infor__list-item job-infor__list-item--wrap">
                                <div class="job-infor__list-ttl">メールアドレス</div>
                                <div class="job-infor__list-desc">
                                    <a href="mailto:kidspark@gmail.com" class="no-underline">{{info.mail_address}}</a><br>
                                    <!-- <a href="./mailaddress-reset/input" class="txt-link"> メールアドレスを変更する </a> -->
                                </div>
                            </li>
                        </ul>
                        <div class="request-note">
                            <h3 class="c-ttl__02 mbpc-10"> 登録内容の公開範囲について </h3>
                            <p class="c-txt__01"> 登録内容の公開範囲はお仕事予約確定前と後などで公開される内容が異なります。<br>
                                <a href="https://stg.kids-parks.com/faq/profile/80/" class="txt-link">詳しくはこちら</a>をご覧ください。
                            </p>
                        </div>
                        <button type="button" class="btn_entry mw-335" @click="save">保存する</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import InfoService from '@/services/supporter/InfoService'
import {datetimeMixin} from '@/mixins/datetimeMixin'
export default {
    layout: 'supporter',
    mixins: [datetimeMixin],
    head() {
        return {
            title: 'アカウント設定'
        }
    },
    async asyncData(context) {
        const InfoData = await InfoService.getInfo(context)
        return {
            info: InfoData
        }
    },
    data() {
        return {
            status: ''
        }
    },
    mounted() {
      setTimeout(() => {
        $('.main-header__mobile-icon').trigger('click');
      }, 500);
    },
    computed: {
        address: function() {
            return (this.info.prefecture || "") + (this.info.municipality || "") + (this.info.street_name || "") + (this.info.building || "");
        }
    },
    methods: {
        async save() {
            this.status = null
            try {
                await InfoService.updateInfo(this,this.info);
                this.status = 'save'
            } catch(e) {
                this.status = 'error'
            }
            window.scrollTo({top:0})
        }
    }
}
</script>

<style>

</style>
