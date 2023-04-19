<template>
    <main id="page-P028" class="wrapper">
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
                        <li class="m-subnav__item is-active"><a href="./supporter/pre-interview">事前面談設定</a></li>
                        <li class="m-subnav__item"><a href="./supporter/working-image">仕事中のイメージ写真</a></li>
                        <li class="m-subnav__item"><a href="./supporter/license">保有資格</a></li>
                    </ul>
                </div>
                <div v-if="status === 'save'" class="c-notyfication c-notyfication--primary">
                    <div class="c-notyfication__icn">
                        <img src="@/assets/supporter/img/common/icn_success.png" alt="Ico" width="24">
                    </div>
                    <div class="c-notyfication__ct">
                        <div class="c-notyfication__ttl">送信しました</div>
                    </div>
                    <div class="c-notyfication__close js-close-notyfication" @click="status=null"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
                </div>
                <div v-if="status === 'error'" class="c-notyfication c-notyfication--danger">
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
                        <form class="quote-list quote-list--026">
                            <h2 class="c-ttl__02 mbpc-34">事前面談設定</h2>
                            <hr class="hr mbpc-18 mbsp-18">
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">初回面談について</div>
                                    <div class="quote-list__fee-ct">
                                        <textarea cols="30" rows="8" class="form-edit__textarea" placeholder="（例）火曜日朝、平日夜、土日祝日（終日）zoomにて、顔合わせ可能です。Web面談は最低30分〜とさせていただきます。まずは、メッセージからお願いします。" v-model="preinterview.initial_meeting_comment"></textarea>
                                        <p class="c-txt__04 mtpc-12 mbsp-12 c-fw--md mtsp-12">初回面談についての条件などがあればご記入ください。</p>
                                        <div class="request-form__ct-right">
                                            <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                                            <div class="c-example__cont js-acc-cont" style="display: none;">
                                                <span class="c-example__close js-acc-close">×</span>
                                                <p class="c-txt__01">(例）<br>初めて依頼するベビーシッターとは必ず事前面談を行っていただきます。事前面談のお時間は1時間、ご料金は事前面談価格1000円/1時間＋交通費です。面談は保護者さまだけでなく、お預けになるお子さまも同席していただき、事前に顔合わせをしていただくことをオススメしています。お子さまの心理的負担が緩和され、シッターとも馴染みやすくなるでしょう。その歳保護者さまがシッターに希望される保育内容についてお伝えください。シッターの人柄や相性をみることができるので保護者さまも安心でしょう。<br>(例)<br>初めて家事代行を依頼する場合、スタッフとの事前面談を行っていただきます。事前面談のお時間は1時間、ご料金は事前面談価格1000円/1時間＋交通費です。身元が保証され、実地研修を行ったスタッフばかりですが、ご依頼者さまとの相性や人柄を確認できる機会となるでしょう。掃除用具や掃除の範囲、食材、調理機具についてなど、サポート前に気になる点、つたえておきたいことなどありましたらご確認、ご相談ください。 </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">WEB事前面談料金</div>
                                    <div class="quote-list__fee-ct">
                                        <div class="quote-list__fee-input w226">
                                            <input type="number" class="form-edit__input" placeholder="（例）1800" v-model="preinterview.web_meeting_fee">
                                            <span>円／1時間あたり</span>
                                        </div>
                                        <p class="c-txt__04 mtpc-15 mbsp-15 c-fw--md">通常のサポートと同じ料金設定でも問題ございません。Webの場合は無料または少し低く設定している方もいます。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item mbpc-30">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">対面事前面談料金</div>
                                    <div class="quote-list__fee-ct">
                                        <div class="quote-list__fee-input w226">
                                            <input type="number" class="form-edit__input" placeholder="（例）1800" v-model="preinterview.facetoface_meeting_fee">
                                            <span>円／1時間あたり</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" class="btn_entry mw-335" @click="save">保存する</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import PreInterviewService from '@/services/supporter/PreInterviewService'
export default {
    layout: "supporter",
    head() {
        return {
            title: 'アカウント設定'
        }
    },
    data() {
        return {
            status: null
        }
    },
    async asyncData(context) {
        const PreInterview = await PreInterviewService.getPreInterview(context);
        return {
            preinterview: PreInterview
        }
    },
    methods: {
        async save() {
            this.status = null
            try {
                if (this.preinterview.id) {
                    await PreInterviewService.updatePreInterview(this, this.preinterview);
                } else {
                    this.preinterview = await PreInterviewService.createPreviewSetting(this, this.preinterview);
                }
                this.status = 'save'
            } catch(e) {
                this.status = 'error'
            }
            window.scrollTo({top:0,behavior:'smooth'});
        }
    }
}
</script>

<style>

</style>
