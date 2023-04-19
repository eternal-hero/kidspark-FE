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
                        <li class="m-subnav__item"><a href="./guardian/children">お子様の情報</a></li>
                        <li class="m-subnav__item is-active"><a href="./guardian/profile">共通プロフィール</a></li>
                        <li class="m-subnav__item"><a href="./guardian/profile-image">プロフィール写真</a></li>
                    </ul>
                </div>
                <div class="l-content">
                    <div class="l-content__body">
                        <form class="quote-list quote-list--026">
                            <h2 class="c-ttl__02 mbpc-34">共通プロフィール</h2>
                            <hr class="hr mbpc-18 mbsp-18">
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">自己紹介文<span>※</span></div>
                                    <div class="quote-list__fee-ct">
                                        <exeo-textarea cols="30" rows="8" class="form-edit__textarea js-countcharecter"
                                            placeholder="（例）夫婦が共働き、また祖父母も遠方に住んでいるため、仕事の都合上こどもの面倒を見れない時にベビーシッターを利用したいと考えています。"
                                            maxlength="1000" v-model='profileInfo.self_introduction'></exeo-textarea>
                                        <div class="request-form__ct-wrap">
                                            <div class="charecter-count"> 残り<span
                                                    class="charecter-count__no">{{1000 - profileInfo.self_introduction?.length}}</span>文字 </div>
                                            <div class="request-form__ct-right">
                                                <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                                                <div class="c-example__cont js-acc-cont" style="display: none;">
                                                    <span class="c-example__close js-acc-close">×</span>
                                                    <p class="c-txt__01">
                                                        (例)<br>夫婦が共働き、また祖父母も遠方に住んでいるため、仕事の都合上こどもの面倒を見れない時にベビーシッターを利用したいと考えています。<br><br>（例）<br>子どもと楽しく遊んでくれるベビーシッターさん出会えることを楽しみにしています^^
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="c-txt__04 mtpc-14 mtsp-14 c-fw--md">
                                            サービス利用の背景やご家庭の状況などをパークサポータさんにお伝えしましょう。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">最寄り駅<span>※</span></div>
                                    <div class="quote-list__fee-ct">
                                        <div class="quote-list__fee-input w226">

                                            <input type="text" class="form-edit__input" placeholder="（例）埼京"
                                                v-model="profile_info.near_line">
                                            <span>線</span>
                                        </div>
                                        <div class="quote-list__fee-input w226">
                                            <input type="text" class="form-edit__input" placeholder="（例）渋谷"
                                                v-model="profile_info.near_station">
                                            <span>駅</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">最寄り駅までの交通手段</div>
                                    <div class="quote-list__fee-ct">
                                        <ExeoRadioGuardian :options="nearest_stationOptions" name="nearest_station"
                                            v-model="profileInfo.means"></ExeoRadioGuardian>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">最寄り駅までの所要時間</div>
                                    <div class="quote-list__fee-ct">
                                        <div class="quote-list__fee-input w186">
                                            <input type="text" class="form-edit__input" name="travel_time"
                                                placeholder="（例）15" v-model="profileInfo.travel_time">
                                            <span>分</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">最寄り駅の公開</div>
                                    <div class="quote-list__fee-ct">
                                        <ExeoRadioGuardian :options="publishOptions" name="publish"
                                            v-model="profileInfo.is_publish"></ExeoRadioGuardian>
                                        <p class="c-txt__04 mtpc-14 mtsp-14 c-fw--md">
                                            「公開しない」に設定していても、お仕事リクエストを送った時点で最寄駅はユーザーへ公開されます。</p>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">家までの行き方</div>
                                    <div class="quote-list__fee-ct">
                                        <exeo-textarea name="" cols="30" rows="4" class="form-edit__textarea"
                                            v-model='profileInfo.way_to_get_home'
                                            placeholder="例）〇〇駅の西口を出てまっすぐ進み、1つ目の信号を左折。右手にコンビニが見えるのでコンビニを右折したら見える茶色いマンションです。エントランスの入り口で部屋の番号を入れて呼び出してください。"></exeo-textarea>

                                            <div class="charecter-count"> 残り<span class="charecter-count__no">1000</span>文字
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="quote-list__item mbpc-44 mbsp-40">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">ご家庭のルール<span>※</span></div>
                                    <div class="quote-list__fee-ct">
                                        <exeo-textarea v-model="profileInfo.rule" cols="30" rows="8"
                                            class="form-edit__textarea js-countcharecter"
                                            placeholder="パークサポータさんにサポート中にお願いしたいこと、気をつけてほしいことなどをご記入ください。"
                                            maxlength="1000"></exeo-textarea>
                                        <div class="request-form__ct-wrap">
                                            <div class="charecter-count"> 残り<span
                                                    class="charecter-count__no">{{1000 - profileInfo.rule?.length}}</span>文字 </div>
                                            <div class="request-form__ct-right">
                                                <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                                                <div class="c-example__cont js-acc-cont" style="display: none;">
                                                    <span class="c-example__close js-acc-close">×</span>
                                                    <p class="c-txt__01">（例）<br>You
                                                        Tubeは1日30分までとしています。<br>固定電話に着信があってもとらなくて大丈夫です。<br>宅配が来たら受け取ってほしいです。<br>食事の後は必ず歯磨きのサポートをお願いします。
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="c-txt__04 mtpc-14 mtsp-14 c-fw--md">
                                            サービス利用の背景やご家庭の状況などをパークサポータさんにお伝えしましょう。</p>
                                    </div>
                                </div>
                            </div>
                            <h2 class="c-ttl__02 mbpc-31">新型コロナウイルスワクチン接種状況</h2>
                            <hr class="hr mbpc-18 mbsp-18">
                            <div class="quote-list__item">
                                <div class="quote-list__fee-item quote-list__fee-item--start">
                                    <div class="quote-list__fee-ttl">公開</div>
                                    <div class="quote-list__fee-ct">
                                        <ExeoRadioGuardian :options="publishOptions" name="is_publish"
                                            v-model="inoculationInfo.is_publish"></ExeoRadioGuardian>
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
                                            <input type="text" class="form-edit__input" placeholder="（例）3"
                                                v-model="inoculationInfo.inoculation_times">
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
                                            <exeo-form type="date" placeholder="日付を選択してください"
                                                class="form_part_date_input" name="inoculation_on"
                                                v-model="inoculationInfo.inoculation_on"></exeo-form>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="request-note">
                                <h3 class="c-ttl__02 mbpc-10"> 登録内容の公開範囲について </h3>
                                <p class="c-txt__01">
                                    共通プロフィールの内容は一般公開はされません。パークサポーターとのメッセージのやりとりや、予約の際に該当サポーターのみに公開されます。<a
                                        href="https://stg.kids-parks.com/faq/profile-2/164/" target="_blank"
                                        class="txt-link">詳しくはこちら</a>をご覧ください。</p>
                            </div>
                            <button type="button" @click="save" class="btn_entry mw-335">保存する</button>
                        </form>
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
import ExeoRadioGuardian from '../../components/guardian/ExeoRadio.vue';
import GuardianProfileService from '../../services/guardian/ProfileService.js';
import InoculationService from '../../services/guardian/InoculationService.js';

export default {
    layout: 'guardian',
    components: { ExeoForm, ExeoRadio, ExeoTextarea, ExeoRadioGuardian },
    head() {
        return {
            title: 'プロフィール編集'
        }
    },
    data() {
        return {
            nearest_stationOptions: [
                { value: '0', label: "徒歩" },
                { value: '1', label: "バス" },
                { value: '2', label: "自転車" },
                { value: '3', label: "自家用車" },
                { value: '4', label: "その他" }
            ],
            publishOptions: [
                { value: 1, label: "公開する" },
                { value: 0, label: "公開しない" },
            ],
        };
    },
    async asyncData(context) {
        // try {
            const profileInfo = await GuardianProfileService.getProfile(context);
            const inoculationInfo = await InoculationService.getInoculationfile(context, profileInfo?.inoculation_status_id);
            return {
                profileInfo: profileInfo,
                inoculationInfo: inoculationInfo
            }
        // } catch (e) {
        //     context.error(e.response);
        // }
    },
    methods: {
        async save() {
          let inoculation_data;
          if (this.inoculationInfo.id) {
              inoculation_data = await InoculationService.updateInoculationfile(this, this.profileInfo.inoculation_status_id, this.inoculationInfo);
          } else {
              this.inoculationInfo = await InoculationService.createInoculation(this, this.inoculationInfo);
          }
          console.log(this.inoculationInfo);
          this.profileInfo.inoculation_status_id = this.inoculationInfo.id;
          if (this.profileInfo.id) {
              await GuardianProfileService.updateProfile(this, this.profileInfo);
          } else {
              this.profileInfo = await GuardianProfileService.createProfile(this, this.profileInfo);
          }
          window.scrollTo({top:0});
        }
    }
}
</script>

<style>

</style>
