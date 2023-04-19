<template>
    <main id="page-P024" class="wrapper">
        <div class="breadcrumb">
            <div class="inner">
                <a href="../">マイページ</a><span class="current">自分のプロフィール</span>
            </div>
        </div>
        <section class="sec-myprofile">
            <div class="inner inner--1150">
                <div class="myprofile-box">
                    <div class="l-content__02 pd-0--sp">
                        <div class="l-content__02-l">
                            <div v-if="supporter.supporter_works_images.length != 0" class="myprofile-img" style="box-sizing: border-box;">
                                <Carousel @increase-by="beforeChangeHandler">
                                    <div class="exo-carousel__item" v-for="item in supporter?.supporter_works_images">
                                        <video v-if="item?.image_path && checkFileIsVideo(item?.image_path)"
                                           :src="getImage(item?.image_path)"
                                           controls
                                        >
                                        </video>
                                        <img v-else :src="getImage(item?.image_path, require(`@/assets/supporter/img/p024/img-main.jpg`))" alt="自分のプロフィール">
                                    </div>
                                </Carousel>
                            </div>
                            <div v-else class="myprofile-img" style="box-sizing: border-box;">
                            </div>
                            <div class="myprofile-ct">
                                <div class="myprofile-user">
                                    <div class="myprofile-user__img">
                                        <label for="user-icon">
                                          <img :src="getImage(supporter?.supporter_profile_image?.image_path, require(`@/assets/supporter/img/p024/img-use.png`))" class="icon" id="user-icon" alt="">
                                        </label>
                                        <!-- <img src="@/assets/supporter/img/p024/img-use.png" alt="自分のプロフィール" width="87"> -->
                                    </div>
                                    <div class="use-box__address">
                                        <span>{{ageStr}}　</span>
                                        <img src="@/assets/supporter/img/common/icn_gps.svg" alt="東京都千代田区" width="11">
                                        <div class="use-box__address-desc">{{supporter.prefecture}}{{supporter.municipality}}</div>
                                    </div>
                                </div>
                                <div class="user-status user-heading">
                                    <div class="user-status__medal">
                                        <!-- <span class="user-status__medal--regular"></span> -->
                                    </div>
                                    <div class="user-status__star">
                                        <!-- <span class="user-status__star-icn" data-rate="4.5"></span> -->
                                    </div>
                                    <!-- <div class="user-status__num">（<span class="txt-underline">15</span>）</div> -->
                                </div>
                                <div class="sidebar-tags__item sidebar-tags__item--bd naikakufu_waribiki"><span>内閣府割引券対象</span></div>
                                <ul class="sidebar-tags">
                                    <li class="sidebar-tags__item" :class="{active: sitter.is_supporter}"><span>ベビーシッター</span></li>
                                    <li class="sidebar-tags__item" :class="{active: childbirth.is_childbirth_care}"><span>産前産後</span></li>
                                    <li class="sidebar-tags__item" :class="{active: sick_child_care.is_sick_child_care}"><span>病児保育</span></li>
                                    <li class="sidebar-tags__item" :class="{active: housekeeper.is_housework}"><span>家事代行</span></li>
                                </ul>
                                <div class="sidebar-ages__w">
                                    <div class="sidebar-ages__heading c-txt__02">
                                        <span>保育可能年齢</span>
                                        <span class="c-green">{{limitAgeStr}}以上</span>
                                    </div>
                                    <div class="sidebar-ages__heading c-txt__02">
                                        <span>保育可能人数</span>
                                        <span class="c-green">〜{{sitter.potential_entrant}}人</span>
                                    </div>
                                    <div class="sidebar-ages__heading c-txt__02">
                                        <span>最低依頼時間</span>
                                        <span class="c-green">{{profile.minimum_request_time}}時間</span>
                                    </div>
                                </div>
                                <div class="myprofile-heart">
                                    <div class="myprofile-heartsub js-wishlist">
                                        <!-- <span class="myprofile-heart__txt">
                                            <span class="js-wishlist_ttl">フォローする</span>(<span class="js-wishlist_number">15</span>) </span>
                                        <span class="icon">
                                            <label class="form-edit__checkbox js-wishlist__icon">
                                                <input type="checkbox" class="checks">
                                                <span class="checkmark"></span>
                                                <img src="@/assets/supporter/img/p024/img-heart.png" alt="フォローする" width="30" class="img-normal">
                                                <img src="@/assets/supporter/img/p024/img-heart01.png" alt="フォローする" width="30" class="img-heart">
                                            </label>
                                        </span> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="l-content__02-r">
                            <div class="myprofile-info">
                                <div class="m-tabs02 mbpc-0 mbsp-0">
                                    <div class="m-tabs02__item js-tab-button" :class="{tab_disabled: !sitter.is_supporter, 'is-active': sitter.is_supporter}" data-id="0">
                                        <img src="@/assets/supporter/img/common/icn-sitter_off.png" class="m-tabs02__item-icn--off" alt="" width="38" height="33">
                                        <img src="@/assets/supporter/img/common/icn-sitter_on.png" class="m-tabs02__item-icn--on" alt="" width="38" height="33">
                                    </div>
                                    <div class="m-tabs02__item js-tab-button" :class="{tab_disabled: !childbirth.is_childbirth_care, 'is-active': !sitter.is_supporter && childbirth.is_childbirth_care}" data-id="1">
                                        <img src="@/assets/supporter/img/common/icn-baby_off.png" class="m-tabs02__item-icn--off" alt="" width="38" height="33">
                                        <img src="@/assets/supporter/img/common/icn-baby_on.png" class="m-tabs02__item-icn--on" alt="" width="38" height="33">
                                    </div>
                                    <div class="m-tabs02__item js-tab-button" :class="{tab_disabled: !sick_child_care.is_sick_child_care, 'is-active': !sitter.is_supporter && !childbirth.is_childbirth_care && sick_child_care.is_sick_child_care}" data-id="2">
                                        <img src="@/assets/supporter/img/common/icn-sick_off.png" class="m-tabs02__item-icn--off" alt="" width="38" height="33">
                                        <img src="@/assets/supporter/img/common/icn-sick_on.png" class="m-tabs02__item-icn--on" alt="" width="38" height="33">
                                    </div>
                                    <div class="m-tabs02__item js-tab-button" :class="{tab_disabled: !housekeeper.is_housework, 'is-active': !sitter.is_supporter && !childbirth.is_childbirth_care && !sick_child_care.is_sick_child_care && housekeeper.is_housework}" data-id="3">
                                        <img src="@/assets/supporter/img/common/icn-housekeeping_off.png" class="m-tabs02__item-icn--off" alt="" width="38" height="33">
                                        <img src="@/assets/supporter/img/common/icn-housekeeping_on.png" class="m-tabs02__item-icn--on" alt="" width="38" height="33">
                                    </div>
                                </div>
                                <div class="m-tabs02__content-content">
                                    <div class="m-tabs02__content-item is-active js-tab" data-id="0">
                                        <div class="quote-list__box-ct">
                                            <div class="quote-list__box-desc">シッターサービス料金設定</div>
                                            <div class="quote-list__box-price">
                                                <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee.svg" alt="icon" width="30"> {{sitter.single_fee}}<span>円<span>/1時間</span></span>
                                                </div>
                                                <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee02.svg" alt="icon" width="30"> {{sitter.regular_fee}}<span>円<span>/1時間</span></span>
                                                </div>
                                            </div>
                                            <div class="quote-list__box-link">
                                                <nuxt-link to="#boxid02">サービス詳細を見る</nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-tabs02__content-item js-tab" data-id="1" hidden>
                                        <div class="quote-list__box-ct">
                                            <div class="quote-list__box-desc">産前産後サービス料金設定</div>
                                            <div class="quote-list__box-price">
                                                <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee.svg" alt="icon" width="30"> {{childbirth.single_fee}}<span>円<span>/1時間</span></span>
                                                </div>
                                                <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee02.svg" alt="icon" width="30"> {{childbirth.regular_fee}}<span>円<span>/1時間</span></span></div>
                                            </div>
                                            <div class="quote-list__box-link">
                                                <nuxt-link to="#boxid02">サービス詳細を見る</nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-tabs02__content-item js-tab" data-id="2" hidden>
                                        <div class="quote-list__box-ct">
                                            <div class="quote-list__box-desc">病児保育サービス料金設定</div>
                                            <div class="quote-list__box-price">
                                                <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee.svg" alt="icon" width="30"> {{sick_child_care.single_fee}}<span>円<span>/1時間</span></span>
                                                </div>
                                                <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee02.svg" alt="icon" width="30"> {{sick_child_care.regular_fee}}<span>円<span>/1時間</span></span></div>
                                            </div>
                                            <div class="quote-list__box-link">
                                                <nuxt-link to="#boxid02">サービス詳細を見る</nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="m-tabs02__content-item js-tab" data-id="3" hidden>
                                        <div class="quote-list__box-ct">
                                            <div class="quote-list__box-desc">家事代行サービス料金設定</div>
                                            <div class="quote-list__box-price">
                                                <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee.svg" alt="icon" width="30"> {{housekeeper.single_fee}}<span>円<span>/1時間</span></span>
                                                </div>
                                                <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee02.svg" alt="icon" width="30"> {{housekeeper.regular_fee}}<span>円<span>/1時間</span></span></div>
                                            </div>
                                            <div class="quote-list__box-link">
                                                <nuxt-link to="#boxid02">サービス詳細を見る</nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span class="c-btn__02 mbsp-21 mbpc-11">初めての依頼は事前面談が必要です。</span>
                                <div class="myprofile-info__ct-interview">
                                    <div class="quote-list__box-desc">事前面談について</div>
                                    <div class="myprofile-info__ct-w">
                                        <div class="myprofile-info__ct-wl">
                                            <div class="myprofile-info__ct-ttl"> WEB事前面談料金 </div>
                                            <div class="myprofile-info__ct-txt quote-list__box-price">
                                                <div class="quote-list__box-price-item"><span>{{pre_interview?.web_meeting_fee}}円<span>/1時間</span></span></div>
                                            </div>
                                        </div>
                                        <div class="myprofile-info__ct-wl">
                                            <div class="myprofile-info__ct-ttl"> 対面事前面談料金 </div>
                                            <div class="myprofile-info__ct-txt quote-list__box-price">
                                                <div class="quote-list__box-price-item">{{pre_interview?.facetoface_meeting_fee}}<span>円<span>/1時間</span></span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="c-txt__03 r-flsp03 js-height white-space__pre">{{pre_interview?.initial_meeting_comment}}</p>
                                    <div class="quote-list__box-link">
                                        <nuxt-link to="#boxid01">事前面談についてを見る</nuxt-link>
                                    </div>
                                </div>
                                <a href="./supporter/profile" class="btn_entry w375">プロフィールを編集する</a>
                            </div>
                        </div>
                    </div>
                    <div class="myprofile__pleasant">
                        <div class="myprofile__pleasant-block">
                            <h1 class="c-ttl__02 c-ttl__02--lg mbpc-19 mbsp-10"> {{profile.title}} </h1>
                            <div
                              class="c-txt__01 mbpc-42 mbsp-9 myprofile__pleasant-txt js-height white-space__pre"
                              data-height="195">{{profile.self_introduction}}
                            </div>
                            <div class="js-showadd sp"><span>続きを見る</span></div>
                            <h2 class="c-ttl__02 mbpc-17 c-ttl__02--centersp mbsp-18">基本情報</h2>
                            <hr class="hr mbpc-20 mbsp-20">
                            <div class="myprofile__pleasant-blue c-txt__01">
                                <p class="myprofile__pleasant-start" v-for="(application, index) in applications" :key="index">
                                    <span v-if="index%2">&#9734;</span>
                                    <span v-else>&#9733;</span>
                                    {{applicationName(application)}}
                                </p>
                            </div>
                            <ul class="job-infor__list mbpc-52 job-infor__list--modify mbsp-37">
                                <li class="job-infor__list-item" v-if="profile.is_publish">
                                    <div class="job-infor__list-ttl job-infor__list-ttl--lgw">最寄駅</div>
                                    <div class="job-infor__list-desc job-infor__list-desc--lgw">{{profile.near_line}}線{{profile.near_station}}駅</div>
                                </li>
                                <li class="job-infor__list-item">
                                    <div class="job-infor__list-ttl job-infor__list-ttl--lgw">予約前後の空き時間</div>
                                    <div class="job-infor__list-desc job-infor__list-desc--lgw">{{profile.time_between_appointment}}時間</div>
                                </li>
                                <li class="job-infor__list-item">
                                    <div class="job-infor__list-ttl job-infor__list-ttl--lgw">最低依頼時間目安</div>
                                    <div class="job-infor__list-desc job-infor__list-desc--lgw">{{profile.minimum_request_time}}時間</div>
                                </li>
                                <li class="job-infor__list-item">
                                    <div class="job-infor__list-ttl job-infor__list-ttl--lgw">返答までの時間</div>
                                    <div class="job-infor__list-desc job-infor__list-desc--lgw">{{profile.reply_time}}時間</div>
                                </li>
                                <li class="job-infor__list-item">
                                    <div class="job-infor__list-ttl job-infor__list-ttl--lgw">外国語対応</div>
                                    <div class="job-infor__list-desc job-infor__list-desc--lgw">{{profile.is_foreign_language ? 'あり' : '無し'}}</div>
                                </li>
                                <li class="job-infor__list-item" v-if="inoculation.is_publish">
                                    <div class="job-infor__list-ttl job-infor__list-ttl--lgw">新型コロナウイルスワクチン接種回数</div>
                                    <div class="job-infor__list-desc job-infor__list-desc--lgw">{{inoculation?.inoculation_times ?? ""}}回</div>
                                </li>
                                <li class="job-infor__list-item" v-if="inoculation.is_publish">
                                    <div class="job-infor__list-ttl job-infor__list-ttl--lgw">最新接種日付</div>
                                    <div class="job-infor__list-desc job-infor__list-desc--lgw">{{inoculation ? inoculationDateStr : ""}}</div>
                                </li>
                            </ul>
                            <h3 class="c-ttl__02 mbpc-18 c-ttl__02--centersp mbsp-21">対応エリア</h3>
                            <hr class="hr mbpc-17 mbsp-17">
                            <dl class="myprofile__pleasant-dl c-txt__01 myprofile__pleasant-dl--nowrap" v-for="prefecture in  [...(new Set(this.support_area.map(function (item) {return item['prefecture'];})))]" :key="prefecture.id">
                                <dt class="myprofile__pleasant-dt">{{$SUPPORT_PREFECTURES.filter(p => p.value == prefecture)[0].label}}</dt>
                                <dd class="myprofile__pleasant-dd">{{areaStr(prefecture)}}</dd>
                            </dl>
                            <!-- <dl class="myprofile__pleasant-dl c-txt__01 mbpc-17 mbsp-17 myprofile__pleasant-dl--nowrap">
                                <dt class="myprofile__pleasant-dt">東京都</dt>
                                <dd class="myprofile__pleasant-dd">千代田区/中央区/港区/目黒区</dd>
                            </dl> -->
                            <hr class="hr mbpc-24 mbsp-24">

                            <!-- TODO オプション設定が有効になったら233行目~268行目のコメントアウトを解除 -->
                            <!-- <h3 class="c-ttl__02 mbpc-17 c-ttl__02--centersp mbsp-14">共通受け入れ条件</h3>
                            <ul class="job-infor__list mbpc-31 job-infor__list--modify mbsp-37">
                                <li class="job-infor__list-item">
                                    <div class="job-infor__list-ttl job-infor__list-ttl--lgw">受入可能人数</div>
                                    <div class="job-infor__list-desc job-infor__list-desc--lgw">〜{{sitter.potential_entrant}}人</div>
                                </li>
                                <li class="job-infor__list-item">
                                    <div class="job-infor__list-ttl job-infor__list-ttl--lgw">保育可能年齢</div>
                                    <div class="job-infor__list-desc job-infor__list-desc--lgw">{{limitAgeStr}}以上</div>
                                </li>
                                <li class="job-infor__list-item">
                                    <div class="job-infor__list-ttl job-infor__list-ttl--lgw">お子様の撮影対応　 <div class="statuschips js-tooltip" data-tippy-content="
                    <div class='inner-cap'>
                        <p>ユーザーから依頼がない限り、サポーターがお子様の写真を撮ることは禁止されております。</p>
                        <p>※怪我や体調不良などの緊急時を除く</p>
                    </div>"></div>
                                    </div>
                                    <div class="job-infor__list-desc job-infor__list-desc--lgw"> {{setting_supports.shooting_support ? 'あり' : '無し'}} </div>
                                </li>
                                <li class="job-infor__list-item">
                                    <div class="job-infor__list-ttl job-infor__list-ttl--lgw">障がい児対応　 <div class="statuschips js-tooltip" data-tippy-content="
                    <div class='inner-cap'>
                        <p>障がい児のサポートを受け入れたい場合、申請フォームから登録が必要です。キッズパークの審査後受け入れが可能になります。</p>
                    </div>"></div>
                                    </div>
                                    <div class="job-infor__list-desc job-infor__list-desc--lgw"> {{setting_supports.is_handicapped_children_support ? '引き受ける' : '対応外'}} </div>
                                </li>
                                <li class="job-infor__list-item naikakufu_waribiki">
                                    <div class="job-infor__list-ttl job-infor__list-ttl--lgw">内閣府割引券　 <div class="statuschips js-tooltip" data-tippy-content="
                    <div class='inner-cap'>
                        <p>現在は内閣府割引券を利用することができません。</p>
                    </div>"></div>
                                    </div>
                                    <div class="job-infor__list-desc job-infor__list-desc--lgw"> 対象者 </div>
                                </li>
                            </ul> -->


                            <h3 class="c-ttl__02 mbpc-13 c-ttl__02--centersp mbsp-12" id="boxid01"> 初めてご利用の方、事前面談について<span class="c-ttl__02-icon"><img src="@/assets/supporter/img/p024/img-ico05.png" alt="初めてご利用の方、事前面談について" width="17"></span>
                            </h3>
                            <hr class="hr mbpc-7 mbsp-7">
                            <div class="c-txt__01 myprofile__pleasant-txt js-height white-space__pre"
                                 data-height="76">{{pre_interview?.initial_meeting_comment}}</div>
                            <div class="js-showadd sp"><span>続きを見る</span></div>
                        </div>
                    </div>
                    <div class="block-service mbpc-49 mbsp-30" id="boxid02">
                        <h3 class="c-ttl__02 mbpc-16 c-ttl__02--centersp mbsp-14">サービス詳細</h3>
                        <div class="m-tabs02">
                            <div class="m-tabs02__item js-tab-button" :class="{tab_disabled: !sitter.is_supporter, 'is-active': sitter.is_supporter}" data-id="0">
                                <img src="@/assets/supporter/img/common/icn-sitter_off.png" class="m-tabs02__item-icn--off" alt="" width="38" height="33">
                                <img src="@/assets/supporter/img/common/icn-sitter_on.png" class="m-tabs02__item-icn--on" alt="" width="38" height="33">
                                <span>シッター</span>
                            </div>
                            <div class="m-tabs02__item js-tab-button" :class="{tab_disabled: !childbirth.is_childbirth_care, 'is-active': !sitter.is_supporter && childbirth.is_childbirth_care}" data-id="1">
                                <img src="@/assets/supporter/img/common/icn-baby_off.png" class="m-tabs02__item-icn--off" alt="" width="38" height="33">
                                <img src="@/assets/supporter/img/common/icn-baby_on.png" class="m-tabs02__item-icn--on" alt="" width="38" height="33">
                                <span>産前産後</span>
                            </div>
                            <div class="m-tabs02__item js-tab-button" :class="{tab_disabled: !sick_child_care.is_sick_child_care, 'is-active': !sitter.is_supporter && !childbirth.is_childbirth_care && sick_child_care.is_sick_child_care}" data-id="2">
                                <img src="@/assets/supporter/img/common/icn-sick_off.png" class="m-tabs02__item-icn--off" alt="" width="38" height="33">
                                <img src="@/assets/supporter/img/common/icn-sick_on.png" class="m-tabs02__item-icn--on" alt="" width="38" height="33">
                                <span>病児保育</span>
                            </div>
                            <div class="m-tabs02__item js-tab-button" :class="{tab_disabled: !housekeeper.is_housework, 'is-active': !sitter.is_supporter && !childbirth.is_childbirth_care && !sick_child_care.is_sick_child_care && housekeeper.is_housework}" data-id="3">
                                <img src="@/assets/supporter/img/common/icn-housekeeping_off.png" class="m-tabs02__item-icn--off" alt="" width="38" height="33">
                                <img src="@/assets/supporter/img/common/icn-housekeeping_on.png" class="m-tabs02__item-icn--on" alt="" width="38" height="33">
                                <span>家事代行</span>
                            </div>
                        </div>
                        <div class="m-tabs02__content-content">
                            <div class="m-tabs02__content-item is-active js-tab" data-id="0">
                                <div class="quote-list__box-desc mbsp-24">ベビーシッターサービス詳細</div>
                                <div class="quote-list__box-price mbpc-22 mbsp-13">
                                    <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee.svg" alt="icon" width="30"> {{sitter.single_fee}}<span>円<span>/1時間</span></span>
                                    </div>
                                    <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee02.svg" alt="icon" width="30"> {{sitter.regular_fee}}<span>円<span>/1時間</span></span>
                                    </div>
                                </div>
                                <div class="c-txt__01 mbpc-20 mbsp-20 white-space__pre">{{sitter.service}}</div>
                                <!-- <div class="c-txt__01 mbpc-20 mbsp-20"> 安心して依頼していただけるよう、サポートは安全を最優先して行っています。<br> 子どもの自主性を大切にしたサポートを心がけています。 </div>
                                <div class="c-txt__01 mbpc-15 mbsp-15 js-height" data-height="46"> とにかく子供が大好きです。一緒にいる時間をいつも楽しく笑顔でサポートしてまいります。<br>
                                    <ul class="block-service__list">
                                        <li class="block-service__item"> ご自宅での遊び </li>
                                        <li class="block-service__item"> オムツ替え、トイレ介助 </li>
                                        <li class="block-service__item"> 入浴介助 </li>
                                        <li class="block-service__item"> おさんぽ　など </li>
                                    </ul>
                                </div> -->
                                <div class="js-showadd sp"><span>続きを見る</span></div>
                                <div class="quote-list__box-orange">
                                    <h4 class="c-txt__01 mbpc-0 c-fw--bd c-txt__01--orange"> 特典 </h4>
                                    <div class="c-txt__01 white-space__pre">{{sitter.special}}</div>
                                </div>
                                <!-- <h3 class="c-ttl__02 c-ttl__02--md mbpc-17 mbsp-17">オプション料金</h3>
                                <ul class="job-infor__list mbpc-23 job-infor__list--modify mbsp-23">
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">保育人数</div>
                                        <div class="job-infor__list-desc">2人の場合　+700円 <small>/1時間あたり</small>
                                        </div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">保育可能年齢</div>
                                        <div class="job-infor__list-desc">12時〜0時　+200円 <small>/1時間あたり</small>
                                        </div>
                                    </li>
                                    <li class="job-infor__list-item mbpc-18 mbsp-18">
                                        <div class="job-infor__list-ttl">その他設定</div>
                                        <div class="job-infor__list-desc">マッサージ　500円 <small>/1回あたり</small>
                                        </div>
                                    </li>
                                    <li class="job-infor__list-item job-infor__list-item--nowrap">
                                        <h3 class="c-ttl__02 c-ttl__02--md mbpc-17 mbsp-17">受け入れ条件</h3>
                                        <div class="job-infor__list-desc mbpc-5">
                                            <p> 短時間から長時間まで柔軟に対応します。 </p>
                                            <ul class="block-service__dots">
                                                <li class="block-service__item"> 1歳からのお子さんをサポートいたします。 </li>
                                                <li class="block-service__item"> 2名まで同時にお預かりできますが、2名以上は追加料金をいただきます。 </li>
                                                <li class="block-service__item"> 最低時間は1時間からでお願いいたします。 </li>
                                                <li class="block-service__item"> 当日サポート予約もできる限り対応させて頂きます。 </li>
                                                <li class="block-service__item"> アレルギー体質のため、ペットお飼いの場合お申し付けお願いいたします。場合によって引き受けお断りすることございますのでご了承ください。 </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">受入可能人数</div>
                                        <div class="job-infor__list-desc">〜3人</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">保育可能年齢</div>
                                        <div class="job-infor__list-desc">0歳6ヶ月以上</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl"> お子様の撮影対応 <div class="statuschips js-tooltip" data-tippy-content="
                    <div class='inner-cap'>
                        <p>ユーザーから依頼がない限り、サポーターがお子様の写真を撮ることは禁止されております。</p>
                        <p>※怪我や体調不良などの緊急時を除く</p>
                    </div>"></div>
                                        </div>
                                        <div class="job-infor__list-desc">あり</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">送迎サポート</div>
                                        <div class="job-infor__list-desc">対応する</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">早期対応</div>
                                        <div class="job-infor__list-desc">7:00~9:00</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">夜間対応（20-24時）</div>
                                        <div class="job-infor__list-desc">20:00~23:00</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">お泊り保育（0時以降）</div>
                                        <div class="job-infor__list-desc">0:00~7:00</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl"> 障がい児対応 <div class="statuschips js-tooltip" data-tippy-content="
                    <div class='inner-cap'>
                        <p>障がい児のサポートを受け入れたい場合、申請フォームから登録が必要です。キッズパークの審査後受け入れが可能になります。</p>
                    </div>"></div>
                                        </div>
                                        <div class="job-infor__list-desc">引き受ける</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl"> レッスン対応 </div>
                                        <div class="job-infor__list-desc"> 英語レッスン<br> 音楽レッスン </div>
                                    </li>
                                    <li class="job-infor__list-item naikakufu_waribiki">
                                        <div class="job-infor__list-ttl">内閣府割引券 <div class="statuschips js-tooltip" data-tippy-content="
                    <div class='inner-cap'>
                        <p>現在は内閣府割引券を利用することができません。</p>
                    </div>"></div>
                                        </div>
                                        <div class="job-infor__list-desc">対象者</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">子育て経験</div>
                                        <div class="job-infor__list-desc">あり</div>
                                    </li>
                                </ul> -->
                            </div>
                            <div class="m-tabs02__content-item js-tab" data-id="1" hidden>
                                <div class="quote-list__box-desc mbpc-22">産前産後サービス詳細</div>
                                <div class="quote-list__box-price mbpc-22 mbsp-13">
                                    <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee.svg" alt="icon" width="30"> {{childbirth.single_fee}}<span>円<span>/1時間</span></span>
                                    </div>
                                    <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee02.svg" alt="icon" width="30"> {{childbirth.regular_fee}}<span>円<span>/1時間</span></span>
                                    </div>
                                </div>
                                <div class="c-txt__01 mbpc-20 mbsp-20 white-space__pre"> {{childbirth.service}} </div>
                                <div class="quote-list__box-orange">
                                    <h4 class="c-txt__01 mbpc-0 c-fw--bd c-txt__01--orange"> 特典 </h4>
                                    <div class="c-txt__01 white-space__pre"> {{childbirth.special}} </div>
                                </div>
                                <!-- <h3 class="c-ttl__02 c-ttl__02--md mbpc-17 mbsp15">オプション料金</h3>
                                <ul class="job-infor__list mbpc-23 job-infor__list--modify mbsp-23">
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">入力したオプション名</div>
                                        <div class="job-infor__list-desc">+700円 <small>/1時間あたり</small>
                                        </div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">入力したオプション名</div>
                                        <div class="job-infor__list-desc">+200円 <small>/1時間あたり</small>
                                        </div>
                                    </li>
                                    <li class="job-infor__list-item mbpc-18 mbsp-18">
                                        <div class="job-infor__list-ttl">入力したオプション名</div>
                                        <div class="job-infor__list-desc">500円 <small>/1回あたり</small>
                                        </div>
                                    </li>
                                    <li class="job-infor__list-item job-infor__list-item--nowrap">
                                        <h3 class="c-ttl__02 c-ttl__02--md mbpc-17 mbsp-15">受け入れ条件</h3>
                                        <div class="job-infor__list-desc mbpc-5 mbsp-5">
                                            <p> 産前産後の受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。 </p>
                                        </div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">受入可能人数</div>
                                        <div class="job-infor__list-desc">〜3人</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">保育可能年齢</div>
                                        <div class="job-infor__list-desc">0歳6ヶ月以上</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl"> お子様の撮影対応 <div class="statuschips js-tooltip" data-tippy-content="
                    <div class='inner-cap'>
                        <p>ユーザーから依頼がない限り、サポーターがお子様の写真を撮ることは禁止されております。</p>
                        <p>※怪我や体調不良などの緊急時を除く</p>
                    </div>"></div>
                                        </div>
                                        <div class="job-infor__list-desc">あり</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">早期対応</div>
                                        <div class="job-infor__list-desc">7:00~9:00</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">夜間対応（20-24時）</div>
                                        <div class="job-infor__list-desc">20:00~23:00</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">お泊り保育（0時以降）</div>
                                        <div class="job-infor__list-desc">0:00~7:00</div>
                                    </li>
                                    <li class="job-infor__list-item naikakufu_waribiki">
                                        <div class="job-infor__list-ttl">内閣府割引券 <div class="statuschips js-tooltip" data-tippy-content="
                    <div class='inner-cap'>
                        <p>現在は内閣府割引券を利用することができません。</p>
                    </div>"></div>
                                        </div>
                                        <div class="job-infor__list-desc">対象者</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">子育て経験</div>
                                        <div class="job-infor__list-desc">あり</div>
                                    </li>
                                </ul> -->
                            </div>
                            <div class="m-tabs02__content-item js-tab" data-id="2" hidden>
                                <div class="quote-list__box-desc">病児保育サービス詳細</div>
                                <div class="quote-list__box-price mbpc-22 mbsp-13">
                                    <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee.svg" alt="icon" width="30"> {{sick_child_care.single_fee}}<span>円<span>/1時間</span></span>
                                    </div>
                                    <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee02.svg" alt="icon" width="30"> {{sick_child_care.regular_fee}}<span>円<span>/1時間</span></span>
                                    </div>
                                </div>
                                <div class="c-txt__01 mbpc-20 mbsp-20 white-space__pre">{{sick_child_care.service}}</div>
                                <div class="quote-list__box-orange">
                                    <h4 class="c-txt__01 mbpc-0 c-fw--bd c-txt__01--orange"> 特典 </h4>
                                    <div class="c-txt__01 white-space__pre">{{sick_child_care.special}}</div>
                                </div>
                                <!-- <h3 class="c-ttl__02 c-ttl__02--md mbpc-17 mbsp-15">オプション料金</h3>
                                <ul class="job-infor__list mbpc-23 job-infor__list--modify mbsp-23">
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">入力したオプション名</div>
                                        <div class="job-infor__list-desc">+700円 <small>/1時間あたり</small>
                                        </div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">入力したオプション名</div>
                                        <div class="job-infor__list-desc">+200円 <small>/1時間あたり</small>
                                        </div>
                                    </li>
                                    <li class="job-infor__list-item mbpc-18 mbsp-18">
                                        <div class="job-infor__list-ttl">入力したオプション名</div>
                                        <div class="job-infor__list-desc">500円 <small>/1回あたり</small>
                                        </div>
                                    </li>
                                    <li class="job-infor__list-item job-infor__list-item--nowrap">
                                        <h3 class="c-ttl__02 c-ttl__02--md mbpc-17 mbsp-15">受け入れ条件</h3>
                                        <div class="job-infor__list-desc mbpc-5 mbsp-5">
                                            <p> 病児保育の受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。受け入れ条件が入ります。 </p>
                                        </div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">受入可能人数</div>
                                        <div class="job-infor__list-desc">〜3人</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">保育可能年齢</div>
                                        <div class="job-infor__list-desc">0歳6ヶ月以上</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl"> お子様の撮影対応 <div class="statuschips js-tooltip" data-tippy-content="
                    <div class='inner-cap'>
                        <p>ユーザーから依頼がない限り、サポーターがお子様の写真を撮ることは禁止されております。</p>
                        <p>※怪我や体調不良などの緊急時を除く</p>
                    </div>"></div>
                                        </div>
                                        <div class="job-infor__list-desc">あり</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">早期対応</div>
                                        <div class="job-infor__list-desc">7:00~9:00</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">夜間対応（20-24時）</div>
                                        <div class="job-infor__list-desc">20:00~23:00</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">お泊り保育（0時以降）</div>
                                        <div class="job-infor__list-desc">0:00~7:00</div>
                                    </li>
                                    <li class="job-infor__list-item naikakufu_waribiki">
                                        <div class="job-infor__list-ttl">内閣府割引券 <div class="statuschips js-tooltip" data-tippy-content="
                    <div class='inner-cap'>
                        <p>現在は内閣府割引券を利用することができません。</p>
                    </div>"></div>
                                        </div>
                                        <div class="job-infor__list-desc">対象者</div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">子育て経験</div>
                                        <div class="job-infor__list-desc">あり</div>
                                    </li>
                                </ul> -->
                            </div>
                            <div class="m-tabs02__content-item js-tab" data-id="3" hidden>
                                <div class="quote-list__box-desc">家事代行サービス詳細</div>
                                <div class="quote-list__box-price mbpc-22 mbsp-13">
                                    <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee.svg" alt="icon" width="30"> {{housekeeper.single_fee}}<span>円<span>/1時間</span></span>
                                    </div>
                                    <div class="quote-list__box-price-item"><img src="@/assets/supporter/img/common/icon-fee02.svg" alt="icon" width="30"> {{housekeeper.regular_fee}}<span>円<span>/1時間</span></span>
                                    </div>
                                </div>
                                <div class="c-txt__01 mbpc-20 mbsp-20 white-space__pre">{{housekeeper.service}}</div>
                                <div class="quote-list__box-orange">
                                    <h4 class="c-txt__01 mbpc-0 c-fw--bd c-txt__01--orange"> 特典 </h4>
                                    <div class="c-txt__01 white-space__pre">{{housekeeper.special}}</div>
                                </div>
                                <!-- <h3 class="c-ttl__02 c-ttl__02--md mbpc-17 mbsp-15">オプション料金</h3>
                                <ul class="job-infor__list mbpc-23 job-infor__list--modify mbsp-23">
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">入力したオプション名</div>
                                        <div class="job-infor__list-desc">+700円 <small>/1時間あたり</small>
                                        </div>
                                    </li>
                                    <li class="job-infor__list-item">
                                        <div class="job-infor__list-ttl">入力したオプション名</div>
                                        <div class="job-infor__list-desc">+200円 <small>/1時間あたり</small>
                                        </div>
                                    </li>
                                    <li class="job-infor__list-item mbpc-18 mbsp-18">
                                        <div class="job-infor__list-ttl">入力したオプション名</div>
                                        <div class="job-infor__list-desc">500円 <small>/1回あたり</small>
                                        </div>
                                    </li>
                                    <li class="job-infor__list-item job-infor__list-item--nowrap">
                                        <h3 class="c-ttl__02 c-ttl__02--md mbpc-17 mbsp-15">受け入れ条件</h3>
                                        <div class="job-infor__list-desc mbpc-35 mbsp-35">
                                            <p> 対応科目が入ります。対応科目が入ります。対応科目が入ります。対応科目が入ります。対応科目が入ります。対応科目が入ります。対応科目が入ります。対応科目が入ります。対応科目が入ります。対応科目が入ります。対応科目が入ります。対応科目が入ります。対応科目が入ります。 </p>
                                        </div>
                                        <h3 class="c-ttl__02 c-ttl__02--md mbpc-17 mbsp-15">対応可能サービス</h3>
                                        <div class="job-infor__list-desc">
                                            <dl class="myprofile__pleasant-dl c-txt__01">
                                                <dt class="myprofile__pleasant-dt">部屋掃除</dt>
                                                <dd class="myprofile__pleasant-dd">リビング/寝室/子供部屋/廊下</dd>
                                            </dl>
                                            <dl class="myprofile__pleasant-dl c-txt__01">
                                                <dt class="myprofile__pleasant-dt">水回りの掃除</dt>
                                                <dd class="myprofile__pleasant-dd">風呂場/トイレ/洗面所</dd>
                                            </dl>
                                        </div>
                                    </li>
                                </ul> -->
                            </div>
                        </div>
                        <div class="c-al--c">
                            <a href="./supporter/sitter-setting" class="btn_entry w375">サポーター設定を修正する</a>
                        </div>
                    </div>
                    <!-- <div class="block-calendartime">
                        <div class="block-calendartime__t">
                            <div class="c-example__buttont">
                                <div class="statuschips tooltip">
                                    <span></span>
                                    <p class="tooltip__txt">
                                        <a href='https://www.kids-parks.com/faq/commission/42/' target='_blank'>詳しくはこちら</a>
                                    </p>
                                    カレンダー説明
                                </div>
                            </div>
                            <div data-tabs="">
                                <div class="m-tabs">
                                    <div class="m-tabs__item is-active" data-tab="">単発予約</div>
                                    <div class="m-tabs__item" data-tab="">定期予約</div>
                                </div>
                                <div class="m-tabs__content-content">
                                    <div class="m-tabs__content-item is-active" data-tab-content="">
                                        <div class="m-tabs__content-itemt">
                                            <ul class="month-slider js-calendarmonth-slider">
                                                <li class="work-date__inr"><span class="work-date__num">2022年08月</span></li>
                                                <li class="work-date__inr"><span class="work-date__num">2022年09月</span></li>
                                                <li class="work-date__inr"><span class="work-date__num">2022年10月</span></li>
                                            </ul>
                                        </div>
                                        <ul class="calendar-slider js-calendar-slider">
                                            <li class="calendar-slider__item">
                                                <div class="m-schedule__table m-schedule__table--styles03">
                                                    <table>
                                                        <tr>
                                                            <th class="sunday">日</th>
                                                            <th>月</th>
                                                            <th>火</th>
                                                            <th>水</th>
                                                            <th>木</th>
                                                            <th>金</th>
                                                            <th class="monday">土</th>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td class="td-gray">
                                                                <div class="m-schedule__table-day">1</div>
                                                            </td>
                                                            <td class="td-gray">
                                                                <div class="m-schedule__table-day">2</div>
                                                            </td>
                                                            <td class="td-gray">
                                                                <div class="m-schedule__table-day">3</div>
                                                            </td>
                                                            <td class="td-gray">
                                                                <div class="m-schedule__table-day">4</div>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">5</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-tripleangle.png" alt="triple angle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">6</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="m-schedule__table-day">7</div>
                                                                <span class="m-schedule__table-booked"> 予約満 </span>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">8</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">9</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">10</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">11</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">12</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">13</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="m-schedule__table-day">14</div>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">15</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">16</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">17</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">18</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">19</div>
                                                                <span class="m-schedule__table-booked"> 予約満 </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">20</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="m-schedule__table-day">21</div>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">22</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">23</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">24</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">25</div>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">26</div>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">27</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="m-schedule__table-day">28</div>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">29</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">30</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td class="js-modal" data-modal="M007">
                                                                <div class="m-schedule__table-day">31</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div class="c-al--c">
                                                    <a href="./P060.html" class="btn_entry w375">スケジュールを登録・修正する</a>
                                                </div>
                                            </li>
                                            <li class="calendar-slider__item">
                                                <div class="m-schedule__table m-schedule__table--styles03">
                                                    <table>
                                                        <tr>
                                                            <th class="sunday">日</th>
                                                            <th>月</th>
                                                            <th>火</th>
                                                            <th>水</th>
                                                            <th>木</th>
                                                            <th>金</th>
                                                            <th class="monday">土</th>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td>
                                                                <div class="m-schedule__table-day">1</div>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">2</div>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">3</div>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">4</div>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">5</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-tripleangle.png" alt="triple angle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">6</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="m-schedule__table-day">7</div>
                                                                <span class="m-schedule__table-booked"> 予約満 </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">8</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">9</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">10</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">11</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">12</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">13</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="m-schedule__table-day">14</div>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">15</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">16</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">17</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">18</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">19</div>
                                                                <span class="m-schedule__table-booked"> 予約満 </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">20</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="m-schedule__table-day">21</div>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">22</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">23</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">24</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">25</div>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">26</div>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">27</div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div class="m-schedule__table-day">28</div>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">29</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">30</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <div class="m-schedule__table-day">31</div>
                                                                <span class="m-schedule__table-close">
                                                                    <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                                                </span>
                                                            </td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    </table>
                                                </div>
                                                <div class="c-al--c">
                                                    <a href="./P060.html" class="btn_entry w375">スケジュールを登録・修正する</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="m-tabs__content-item" data-tab-content="">
                                        <div class="m-schedule__table m-schedule__table--styles04">
                                            <table>
                                                <tr>
                                                    <th class="sunday">日</th>
                                                    <th>月</th>
                                                    <th>火</th>
                                                    <th>水</th>
                                                    <th>木</th>
                                                    <th>金</th>
                                                    <th class="monday">土</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="td-root"></div>
                                                    </td>
                                                    <td class="js-cancheck">
                                                        <div class="td-root">
                                                            <span class="m-schedule__table-timesquare"> 09:00<br> 12:00 </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="td-root">
                                                            <span class="m-schedule__table-booked">予約満</span>
                                                        </div>
                                                    </td>
                                                    <td class="td-choose js-cancheck">
                                                        <div class="td-root">
                                                            <span class="m-schedule__table-timesquare"> 09:00<br> 12:00 </span>
                                                        </div>
                                                    </td>
                                                    <td class="js-cancheck">
                                                        <div class="td-root">
                                                            <span class="m-schedule__table-timesquare"> 09:00<br> 12:00 </span>
                                                        </div>
                                                    </td>
                                                    <td class="js-cancheck">
                                                        <div class="td-root">
                                                            <span class="m-schedule__table-timesquare"> 09:00<br> 12:00 </span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div class="td-root">
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="c-al--c">
                                            <a href="./P060.html#idbox01" class="btn_entry w375">スケジュールを登録・修正する</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> -->
                    <!-- <div class="block-checkmain">
                        <h3 class="c-ttl__02 mbpc-18 mbsp-20 c-ttl__02--centersp">レビュー</h3>
                        <hr class="hr mbpc-14 mbsp-15">
                        <div class="achievement-block mbpc-21">
                            <div class="achievement-block__l pc">
                                <div class="user-heading user-heading--03">
                                    <div class="user-heading__image"><img src="@/assets/supporter/img/common/img_use02.png" class="u-img-of" alt=""></div>
                                    <div class="user-status">
                                        <div class="user-status__medal">
                                            <span class="user-status__medal--regular"></span>
                                        </div>
                                        <div class="user-status__star">
                                            <span class="user-status__star-icn" data-rate="3.5"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="achievement-block__r achievement-block__r--nowrapsp">
                                <div class="achievement-block__num">
                                    <span>3.5</span>
                                    <small>レビュー総数<br>275件</small>
                                </div>
                                <div class="achievement-block__star c-txt__03">
                                    <div class="user-heading user-heading--04">
                                        <div class="user-status">
                                            <div class="user-status__star">
                                                <span class="user-status__star-icn" data-rate="5"></span>
                                            </div>
                                        </div>
                                        <div class="user-status user-status--02">
                                            <div class="user-status__star">
                                                <span class="user-status__star-icn" data-rate="1"></span>
                                            </div>
                                        </div>
                                        <div class="user-txt">250件</div>
                                    </div>
                                    <div class="user-heading user-heading--04">
                                        <div class="user-status">
                                            <div class="user-status__star">
                                                <span class="user-status__star-icn" data-rate="4"></span>
                                            </div>
                                        </div>
                                        <div class="user-status user-status--02">
                                            <div class="user-status__star">
                                                <span class="user-status__star-icn" data-rate="1.5"></span>
                                            </div>
                                        </div>
                                        <div class="user-txt">20件</div>
                                    </div>
                                    <div class="user-heading user-heading--04">
                                        <div class="user-status">
                                            <div class="user-status__star">
                                                <span class="user-status__star-icn" data-rate="3"></span>
                                            </div>
                                        </div>
                                        <div class="user-status user-status--02">
                                            <div class="user-status__star">
                                                <span class="user-status__star-icn" data-rate="2.5"></span>
                                            </div>
                                        </div>
                                        <div class="user-txt">5件</div>
                                    </div>
                                    <div class="user-heading user-heading--04">
                                        <div class="user-status">
                                            <div class="user-status__star">
                                                <span class="user-status__star-icn" data-rate="2"></span>
                                            </div>
                                        </div>
                                        <div class="user-status user-status--02">
                                            <div class="user-status__star">
                                                <span class="user-status__star-icn" data-rate="0"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="user-heading user-heading--04">
                                        <div class="user-status">
                                            <div class="user-status__star">
                                                <span class="user-status__star-icn" data-rate="1"></span>
                                            </div>
                                        </div>
                                        <div class="user-status user-status--02">
                                            <div class="user-status__star">
                                                <span class="user-status__star-icn" data-rate="0"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="review-block review-block--02 mbpc-41 mbsp-38">
                            <ul class="review-block__list c-txt__01 content-load-ten">
                                <li class="review-block__list-item">
                                    <div class="review-block__list-img"><img src="@/assets/supporter/img/common/icn-user.png" alt="サポーターからのレビュー"></div>
                                    <div class="review-block__list-ct">
                                        <div class="review-block__list-meta">
                                            <div class="user-heading">
                                                <div class="user-status">
                                                    <div class="user-status__star">
                                                        <span class="user-status__star-icn" data-rate="5"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="review-block__list-date">2022年12月</span>
                                        </div>
                                        <p>この度もありがとうございました。<br> はなこもとても楽しかったと言っていました。またよろしくお願いします(*^◯^*) </p>
                                    </div>
                                </li>
                                <li class="review-block__list-item">
                                    <div class="review-block__list-img"><img src="@/assets/supporter/img/common/icn-user.png" alt="サポーターからのレビュー"></div>
                                    <div class="review-block__list-ct">
                                        <div class="review-block__list-meta">
                                            <div class="user-heading">
                                                <div class="user-status">
                                                    <div class="user-status__star">
                                                        <span class="user-status__star-icn" data-rate="5"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="review-block__list-date">2022年12月</span>
                                        </div>
                                        <p>初めて利用させていただきましたが、人見知り真っ盛りの子どもが、抱っこされても泣くことがなく、本当にすばらしい対応でサポートしていただきました。</p>
                                    </div>
                                </li>
                                <li class="review-block__list-item">
                                    <div class="review-block__list-img"><img src="@/assets/supporter/img/common/icn-user.png" alt="サポーターからのレビュー"></div>
                                    <div class="review-block__list-ct">
                                        <div class="review-block__list-meta">
                                            <div class="user-heading">
                                                <div class="user-status">
                                                    <div class="user-status__star">
                                                        <span class="user-status__star-icn" data-rate="5"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <span class="review-block__list-date">2022年12月</span>
                                        </div>
                                        <p>久々の再会で、最初は泣いてしまいましたが、すぐに遊びに切り替わってさすがはプロだなと思いました。</p>
                                    </div>
                                </li>
                            </ul>
                            <div class="c-al--r c-al--ctsp">
                                <a href="" class="c-btn__06 js-load-ten">もっと見る</a>
                            </div>
                        </div>
                        <h3 class="c-ttl__02 mbpc-18 c-ttl__02--centersp">サポーターの実績</h3>
                        <ul class="job-infor__list job-infor__list--modify mbsp-23">
                            <li class="job-infor__list-item">
                                <div class="job-infor__list-ttl">お仕事回数</div>
                                <div class="job-infor__list-desc">30回</div>
                            </li>
                            <li class="job-infor__list-item">
                                <div class="job-infor__list-ttl">フォロワー数</div>
                                <div class="job-infor__list-desc">20人</div>
                            </li>
                            <li class="job-infor__list-item">
                                <div class="job-infor__list-ttl">リピートユーザー数</div>
                                <div class="job-infor__list-desc">10人</div>
                            </li>
                            <li class="job-infor__list-item">
                                <div class="job-infor__list-ttl">予約成立率</div>
                                <div class="job-infor__list-desc">100%</div>
                            </li>
                            <li class="job-infor__list-item">
                                <div class="job-infor__list-ttl">返信率</div>
                                <div class="job-infor__list-desc">100%</div>
                            </li>
                            <li class="job-infor__list-item">
                                <div class="job-infor__list-ttl">直前キャンセル率</div>
                                <div class="job-infor__list-desc">0%</div>
                            </li>
                        </ul>
                        <div class="c-al--c sp block-checkmain__btn">
                            <a href="./P060.html" class="btn_entry w375" tabindex="0">プロフィールを編集する</a>
                        </div>
                    </div> -->
                </div>
            </div>
        </section>
        <div class="modal-main" id="M007">
            <div class="modal-block">
                <span class="modal-block__close"></span>
                <div class="modal-block__ttltime">8月23日(火)</div>
                <div class="modal-ct">
                    <div class="m-schedule__table m-schedule__table--styles04">
                        <table class="table-time">
                            <tr>
                                <td>
                                    <div class="m-schedule__table-fl">
                                        <div class="m-schedule__table-day">00:00</div>
                                    </div>
                                </td>
                                <td>
                                    <div class="m-schedule__table-fl">
                                        <div class="m-schedule__table-day">01:00</div>
                                    </div>
                                </td>
                                <td>
                                    <div class="m-schedule__table-fl">
                                        <div class="m-schedule__table-day">02:00</div>
                                    </div>
                                </td>
                                <td>
                                    <div class="m-schedule__table-fl">
                                        <div class="m-schedule__table-day">03:00</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="m-schedule__table-fl">
                                        <div class="m-schedule__table-day">04:00</div>
                                    </div>
                                </td>
                                <td>
                                    <div class="m-schedule__table-fl">
                                        <div class="m-schedule__table-day">05:00</div>
                                    </div>
                                </td>
                                <td>
                                    <div class="m-schedule__table-fl">
                                        <div class="m-schedule__table-day">06:00</div>
                                    </div>
                                </td>
                                <td>
                                    <div class="m-schedule__table-fl">
                                        <div class="m-schedule__table-day">07:00</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="m-schedule__table-fl">
                                        <div class="m-schedule__table-day">08:00</div>
                                    </div>
                                </td>
                                <td>
                                    <div class="m-schedule__table-day">09:00</div>
                                </td>
                                <td>
                                    <div class="m-schedule__table-day">10:00</div>
                                </td>
                                <td>
                                    <div class="m-schedule__table-day">11:00</div>
                                    <span class="m-schedule__table-close">
                                        <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="m-schedule__table-day">12:00</div>
                                    <span class="m-schedule__table-close">
                                        <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                    </span>
                                </td>
                                <td>
                                    <div class="m-schedule__table-day">13:00</div>
                                    <span class="m-schedule__table-booked">予約満</span>
                                </td>
                                <td>
                                    <div class="m-schedule__table-day">14:00</div>
                                    <span class="m-schedule__table-booked">予約満</span>
                                </td>
                                <td>
                                    <div class="m-schedule__table-day">15:00</div>
                                    <span class="m-schedule__table-booked">予約満</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="m-schedule__table-day">16:00</div>
                                    <span class="m-schedule__table-booked">予約満</span>
                                </td>
                                <td>
                                    <div class="m-schedule__table-day">17:00</div>
                                    <span class="m-schedule__table-close">
                                        <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                    </span>
                                </td>
                                <td>
                                    <div class="m-schedule__table-day">18:00</div>
                                    <span class="m-schedule__table-close">
                                        <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                    </span>
                                </td>
                                <td>
                                    <div class="m-schedule__table-day">19:00</div>
                                    <span class="m-schedule__table-close">
                                        <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="m-schedule__table-day">20:00</div>
                                    <span class="m-schedule__table-close">
                                        <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                    </span>
                                </td>
                                <td>
                                    <div class="m-schedule__table-day">21:00</div>
                                    <span class="m-schedule__table-close">
                                        <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                    </span>
                                </td>
                                <td>
                                    <div class="m-schedule__table-day">22:00</div>
                                    <span class="m-schedule__table-close">
                                        <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                    </span>
                                </td>
                                <td>
                                    <div class="m-schedule__table-day">23:00</div>
                                    <span class="m-schedule__table-close">
                                        <img src="@/assets/supporter/img/common/img-circle.png" alt="circle">
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="c-al--c">
                        <a href="./P060.html" class="btn_entry w375" tabindex="0">スケジュールを登録・修正する</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import ProfilePreviewService from '@/services/supporter/ProfilePreviewService'
import {imageMixin} from "@/mixins/imageMixin"
import Carousel from "@/components/block/Carousel.vue";

export default {
    mixins: [imageMixin],
    layout: 'supporter',
    components: { Carousel },
    head() {
        return {
            title: 'アカウント設定'
        }
    },
    async asyncData(context) {
        const supporterData = await ProfilePreviewService.getSupporter(context)
        const profileData = await ProfilePreviewService.getProfile(context)
        let inoculationData = ""
        if(profileData.data.inoculation_status_id != null){
            inoculationData = await ProfilePreviewService.getInoculation(context,profileData.data.inoculation_status_id)
        }
        const applicationData = await ProfilePreviewService.getApplication(context)
        const supportAreaData = await ProfilePreviewService.getSupportArea(context)
        const preInterviewData = await ProfilePreviewService.getPreInterview(context)
        // const settingSupportData = await ProfilePreviewService.getSettingSupport(context)
        const sitterData = await ProfilePreviewService.getSitter(context)
        if(sitterData.data==null){
            sitterData.data=[{
                id: "",
                settings_id: "",
                supporter_user_id: "",
                is_supporter: "",
                single_fee: "",
                regular_fee: "",
                special: "",
                service: "",
                potential_entrant: "",
                minimum_age_limit: "",
                maximum_age_limit: "",
                created_at: "",
                updated_at: ""
            }]
        }
        const childbirthData = await ProfilePreviewService.getChildbirth(context)
        if(childbirthData.data==null){
            childbirthData.data=[{
                id: "",
                settings_id: "",
                supporter_user_id: "",
                is_childbirth_care: "",
                single_fee: "",
                regular_fee: "",
                special: "",
                service: "",
                created_at: "",
                updated_at: ""
            }]
        }
        const sickChildCareData = await ProfilePreviewService.getSickChildCare(context)
        if(sickChildCareData.data==null){
            sickChildCareData.data= [{
                id: null,
                settings_id: null,
                supporter_user_id: null,
                is_sick_child_care: null,
                single_fee: null,
                regular_fee: null,
                special: null,
                service: null,
                created_at: null,
                updated_at: null
            }]
        }
        const housekeeperData = await ProfilePreviewService.getHousekeeper(context)
        if(housekeeperData.data==null){
            housekeeperData.data= [{
                id: null,
                settings_id: null,
                supporter_user_id: null,
                is_housework: null,
                single_fee: null,
                regular_fee: null,
                special: null,
                service: null,
                created_at: null,
                updated_at: null
            }]
        }
        return {
            supporter: supporterData.data,
            profile: profileData.data,
            inoculation: inoculationData.data,
            applications: applicationData.filter(application => application.category != 0),
            support_area: supportAreaData.data.sort((a, b) => a.area - b.area),
            pre_interview: preInterviewData.data,
            // setting_supports: settingSupportData.data,
            sitter: sitterData.data,
            childbirth: childbirthData.data,
            sick_child_care: sickChildCareData.data,
            housekeeper: housekeeperData.data,
        }
    },
    computed: {
        ageStr: function() {
            const age = Math.floor((this.$moment.duration(this.$moment().diff(this.$moment(this.supporter.birthday))).as('months') / 12) / 10) * 10;
            const gender = this.supporter.gender ? '男性' : '女性'
            return age + '代' + gender + '  '
        },
        limitAgeStr: function() {
          if(this.sitter.minimum_age_limit != null){
            return Math.floor(this.sitter.minimum_age_limit / 12) + '年' + this.sitter.minimum_age_limit % 12 + 'ヵ月'
          }
        },
        inoculationDateStr: function() {
          if(this.inoculation.inoculation_on != null){
            return this.inoculation?.inoculation_on.split('-')[0] + '年' + this.inoculation?.inoculation_on.split('-')[1] + '月'
          }
        },
    },
    methods: {
        areaStr(prefecture) {
            const areaArray = this.support_area.filter((e) => e.prefecture == prefecture)
            let area_str = null
            areaArray.forEach((item) => {
                area_str = (area_str ? area_str + '/' : '') + this.$SUPPORT_AREA.filter((e) => e.value == item.area)[0].label
            })
            return area_str
        },
        applicationName(application) {
            switch(application.category) {
                case 1: return this.$SUPPORTER_APPLICATION_SITTER_LICENSE_SHOW[application.application_type];
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
        checkFileIsVideo(url) {
          const extensionVideoSupport = ['mp4', 'mov'];
          const extension = url.split(/[#?]/)[0].split('.').pop().trim();

          return extensionVideoSupport.includes(extension);
        },
    }
}
</script>

<style scoped>
  .tab_disabled {
      pointer-events: none;
  }
  .myprofile-user__img label{
    display: block;
    width: 87px;
    height: 87px;
    overflow: hidden;
    border-radius: 50%;
    position: relative;
  }
  .icon {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .white-space__pre {
    white-space: pre-wrap;
  }
  .exo-carousel {
    max-width: 600px;
  }
  .exo-carousel img,
  .exo-carousel video{
    width: 100%;
    height: calc(100vw / 4.7);
    object-fit: cover;
  }

</style>
