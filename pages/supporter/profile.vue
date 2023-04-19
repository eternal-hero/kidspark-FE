<template>
    <main id="page-P026" class="wrapper">
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
                        <li class="m-subnav__item is-active"><a href="./supporter/profile">共通プロフィール</a></li>
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
                        <form class="quote-list quote-list--026">
                            <h2 class="c-ttl__02 mbpc-34">共通プロフィール</h2>
                            <hr class="hr mbpc-18 mbsp-18">
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">タイトル<span>※</span></div>
                                    <div class="quote-list__fee-ct">
                                        <textarea cols="30" rows="3" class="form-edit__textarea js-countcharecter"
                                            placeholder="（例）笑顔で明るく！それぞれのご家庭に寄り添った楽しい保育を。" maxlength="35" v-model="supporter.title"></textarea>
                                        <div class="request-form__ct-wrap">
                                            <div class="charecter-count"> 残り<span
                                                    class="charecter-count__no">{{35 - supporter.title.length}}</span>文字 </div>
                                            <div class="request-form__ct-right">
                                                <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                                                <div class="c-example__cont js-acc-cont" style="display: none;">
                                                    <span class="c-example__close js-acc-close">×</span>
                                                    <p class="c-txt__01">
                                                        (例)発達の悩みなど保護者さまの気持ちに寄り添う子育てのお手伝い<br>(例)忙しいご依頼者さまをくつろげるお部屋と温かい料理でお迎えします
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">自己紹介文<span>※</span></div>
                                    <div class="quote-list__fee-ct">
                                        <textarea cols="30" rows="8" class="form-edit__textarea js-countcharecter"
                                            placeholder="（例）２００５年からは子育てをしながら、ベビーサイン講師として活動をしていました。　アロマセラピストとしても、赤ちゃんや幼児、小学生へのタッチケアを行なっています。　ベビーサインやタッチケアも発達障害を持つお子様にもそうでないお子様にも、とても大切なことだということが近年の研究結果で分かりつつある今、どんな子供にも一人一人対応出来るように学びは続いています。"
                                            maxlength="1000" v-model="supporter.self_introduction"></textarea>
                                        <div class="request-form__ct-wrap">
                                            <div class="charecter-count"> 残り<span
                                                    class="charecter-count__no">{{1000 - supporter.self_introduction.length}}</span>文字 </div>
                                            <div class="request-form__ct-right">
                                                <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                                                <div class="c-example__cont js-acc-cont" style="display: none;">
                                                    <span class="c-example__close js-acc-close">×</span>
                                                    <p class="c-txt__01">
                                                        (例)<br>特別支援学級や支援学校、通級指導教室を経て、子育ても落ち着いたところで保育士資格を取得し特別な配慮が必要なお子さんや、障害のあるお子さんの子育て支援に従事してきたので、特性や個性のあるお子さんに配慮した保育と保護者様のお悩みに寄り添ったサポートを行うことができます。<br>(例)<br>保育園で管理栄養士を5年勤め、栄養を考えた温かい料理や作りおき料理などを提供できます。また、アレルギー対応食や離乳食のご用意、献立やメニューの作成、食材の買い出しなどもお任せください。水回りのお掃除をはじめ、お忙しいご依頼者さまがくつろげる環境をご提供いたします。
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="c-txt__04 mtpc-14 mtsp-14 c-fw--md">
                                            個人の特定ができるような情報(名前や詳細な住所など)は書き込まないようご注意ください。 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">最寄り駅</div>
                                    <div class="quote-list__fee-ct">
                                        <div class="quote-list__fee-input w226">
                                            <input type="text" class="form-edit__input" placeholder="（例）埼京" v-model="supporter.near_line">
                                            <span>線</span>
                                        </div>
                                        <div class="quote-list__fee-input w226">
                                            <input type="text" class="form-edit__input" placeholder="（例）渋谷" v-model="supporter.near_station">
                                            <span>駅</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">最寄り駅までの交通手段</div>
                                    <div class="quote-list__fee-ct">
                                        <div class="c-control__02 c-fw--md">
                                            <label class="form-edit__radio"><input type="radio" name="radio" :value="0" v-model="supporter.means" checked="checked"><span>徒歩</span></label>
                                            <label class="form-edit__radio"><input type="radio" name="radio" :value="1" v-model="supporter.means"><span>バス</span></label>
                                            <label class="form-edit__radio"><input type="radio" name="radio" :value="2" v-model="supporter.means"><span>自転車</span></label>
                                            <label class="form-edit__radio"><input type="radio" name="radio" :value="3" v-model="supporter.means"><span>自家用車</span></label>
                                            <label class="form-edit__radio"><input type="radio" name="radio" :value="4" v-model="supporter.means"><span>その他</span></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">最寄り駅までの所要時間</div>
                                    <div class="quote-list__fee-ct">
                                        <div class="quote-list__fee-input w186">
                                            <input type="number" class="form-edit__input" placeholder="（例）15" v-model="supporter.travel_times">
                                            <span>分</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">最寄り駅の公開</div>
                                    <div class="quote-list__fee-ct">
                                        <div class="c-control__02">
                                            <label class="form-edit__radio"><input type="radio" name="radio0001" :value="1" v-model="supporter.is_publish" checked="checked"><span>公開する</span></label>
                                            <label class="form-edit__radio"><input type="radio" name="radio0001" :value="0" v-model="supporter.is_publish"><span>公開しない</span></label>
                                        </div>
                                        <p class="c-txt__04 mtpc-14 mtsp-14 c-fw--md">
                                            「公開しない」に設定していても、予約が確定した時点で最寄駅はユーザーへ公開されます。 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">予約前後の空き時間</div>
                                    <div class="quote-list__fee-ct">
                                        <div class="quote-list__fee-input w186">
                                            <input type="number" class="form-edit__input" placeholder="（例）1" v-model="supporter.time_between_appointment">
                                            <span>時間以上</span>
                                        </div>
                                        <p class="c-txt__03 mtpc-14 mtsp-14">
                                            「1時間以上」に設定した場合、予約が入った時間の前後1時間は新たな予約ができなくなります。 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">最低依頼時間目安</div>
                                    <div class="quote-list__fee-ct">
                                        <div class="quote-list__fee-input w186">
                                            <input type="number" class="form-edit__input" placeholder="（例）1" v-model="supporter.minimum_request_time">
                                            <span>時間以上</span>
                                        </div>
                                        <p class="c-txt__03 mtpc-14 mtsp-14">
                                            最低依頼時間としてユーザーへ表示されますが、あくまで目安となりますので、設定した時間より短い依頼リクエストが来る場合がございます。 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">返答までの時間</div>
                                    <div class="quote-list__fee-ct">
                                        <div class="quote-list__fee-input w161">
                                            <input type="number" class="form-edit__input" placeholder="（例）3" v-model="supporter.reply_time">
                                            <span>時間</span>
                                        </div>
                                        <p class="c-txt__03 mtpc-14 mtsp-14"> 返答までの時間としてユーザーへ表示されますが、あくまで目安となります。 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item mbpc-44 mbsp-40">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">外国語対応</div>
                                    <div class="quote-list__fee-ct">
                                        <div class="c-control__02">
                                            <label class="form-edit__radio"><input type="radio" name="radio01" :value="1" v-model="supporter.is_foreign_language" checked="checked"><span>対応する</span></label>
                                            <label class="form-edit__radio"><input type="radio" name="radio01" :value="0" v-model="supporter.is_foreign_language"><span>対応しない</span></label>
                                        </div>
                                        <p class="c-txt__03 mtpc-14 mtsp-14"> 対応する場合、自己紹介文などで対応言語など記載するとPRにつながります。 </p>
                                    </div>
                                </div>
                            </div>
                            <h2 class="c-ttl__02 mbpc-31">新型コロナウイルスワクチン接種状況</h2>
                            <hr class="hr mbpc-18 mbsp-18">
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">公開</div>
                                    <div class="quote-list__fee-ct">
                                        <div class="c-control__02">
                                            <label class="form-edit__radio"><input type="radio" name="radio002" :value="1" v-model="inoculation.is_publish" checked="checked"><span>公開する</span></label>
                                            <label class="form-edit__radio"><input type="radio" name="radio002" :value="0" v-model="inoculation.is_publish"><span>公開しない</span></label>
                                        </div>
                                        <p class="c-txt__03 mtpc-14 mtsp-14">
                                            公開は任意です。接種済みの場合は公開していた方がユーザーに安心感を与えることができます。 </p>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">接種回数</div>
                                    <div class="quote-list__fee-ct">
                                        <div class="quote-list__fee-input w146">
                                            <input type="number" class="form-edit__input" placeholder="（例）3" v-model="inoculation.inoculation_times">
                                            <span>回</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">最新接種日付</div>
                                    <div class="quote-list__fee-ct">
                                        <label class="form_part_date">
                                            <input type="date" placeholder="日付を選択してください" class="form_part_date_input" v-model="inoculation.inoculation_on">
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="request-note">
                                <h3 class="c-ttl__02 mbpc-10"> 登録内容の公開範囲について </h3>
                                <p class="c-txt__01"> 登録内容の公開範囲はお仕事予約確定前と後などで公開される内容が異なります。<br>
                                    <a href="https://stg.kids-parks.com/faq/profile/80/" target="_blank"
                                        class="txt-link">詳しくはこちら</a>をご覧ください。
                                </p>
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
import ProfileService from '@/services/supporter/ProfileService'
import InoculationStatusService from '@/services/supporter/InoculationStatusService'
export default {
    layout: 'supporter',
    head() {
        return {
            title: 'アカウント設定'
        }
    },
    async asyncData(context) {
        const ProfileData = await ProfileService.getProfile(context);
        var InoculationData = {
            "inoculation_on": null,
            "inoculation_times": null,
            "is_publish": 0,
        }
        if (ProfileData.inoculation_status_id != null) {
            InoculationData = await InoculationStatusService.getInoculationStatus(context,ProfileData.inoculation_status_id);
        }
        return {
            supporter: ProfileData,
            inoculation: InoculationData,
        }
    },
    data() {
        return {
            status: null
        }
    },
    methods: {
        async save() {
            this.status = null
            try {
                if(this.supporter.inoculation_status_id == null) {
                    const InoculationData = await InoculationStatusService.createInoculationStatus(this,this.inoculation);
                    this.supporter.inoculation_status_id = InoculationData.id
                } else {
                    await InoculationStatusService.updateInoculationStatus(this,this.inoculation.id,this.inoculation);
                }
                await ProfileService.updateProfile(this,this.supporter);
                this.status = 'save'
            } catch(e) {
                this.status = 'error'
            }
            window.scrollTo({top:0,behavior:'smooth'});
        }
    }
}
</script>

<style scoped>
@import url('@/assets/supporter/css/styles.css');
</style>
