<template>
    <main id="page-T012" class="site_main">
        <nav class="breadcrumb">
            <ul>
                <li><a href="../">TOP</a></li>
                <li><a href="/">パークサポーター管理</a></li>
                <li>評価</li>
            </ul>
        </nav>
        <h1 class="page_ttl_01"><span>実績〈評価〉</span></h1>
        <SupporterSummaryHeader :user="user" :is-editing="true" />
        <div class="col2_block">
            <ExeoSupporterNavigationWindow></ExeoSupporterNavigationWindow>
            <div class="col2_block_main col2_block_main--block">
                <h2 class="cmn-ttl-01">評価</h2>
                <div class="reviews-box">
                    <div class="reviews-box__star">
                        <div class="reviews-box__number">
                            <span>3.5</span> レビュー総数<br>275件
                        </div>
                        <ul class="reviews-box__ranking">
                            <li class="reviews-box__ranking-item">
                                <span class="col2_block_side_user_star_icn" data-rate="5"></span>
                                <div class="reviews-box__ranking-value reviews-box__ranking-value--01"></div>
                                <div class="reviews-box__ranking-piece"> 250件 </div>
                            </li>
                            <li class="reviews-box__ranking-item">
                                <span class="col2_block_side_user_star_icn" data-rate="4"></span>
                                <div class="reviews-box__ranking-value reviews-box__ranking-value--02"></div>
                                <div class="reviews-box__ranking-piece"> 20件 </div>
                            </li>
                            <li class="reviews-box__ranking-item">
                                <span class="col2_block_side_user_star_icn" data-rate="3"></span>
                                <div class="reviews-box__ranking-value reviews-box__ranking-value--03"></div>
                                <div class="reviews-box__ranking-piece"> 5件 </div>
                            </li>
                            <li class="reviews-box__ranking-item">
                                <span class="col2_block_side_user_star_icn" data-rate="2"></span>
                                <div class="reviews-box__ranking-value"></div>
                                <div class="reviews-box__ranking-piece">　</div>
                            </li>
                            <li class="reviews-box__ranking-item">
                                <span class="col2_block_side_user_star_icn" data-rate="1"></span>
                                <div class="reviews-box__ranking-value"></div>
                                <div class="reviews-box__ranking-piece">　</div>
                            </li>
                        </ul>
                    </div>
                    <div class="reviews-box__medal">
                        <div class="reviews-box__list">
                            <div class="reviews-box__list-item">
                                <div class="reviews-box__list-img">
                                    <img src="@/assets/admin/img/common/icn_medal_regular.png" alt="レギュラー">
                                </div>
                                <div class="reviews-box__list-ct"> ランク <span>レギュラー</span>
                                </div>
                            </div>
                            <div class="reviews-box__list-item">
                                <div class="reviews-box__list-img">
                                    <img src="@/assets/admin/img/common/icn_medal_no.png" alt="ブロンズ">
                                </div>
                                <div class="reviews-box__list-ct"> ランク <span>ブロンズ</span>
                                </div>
                            </div>
                            <div class="reviews-box__list-item">
                                <div class="reviews-box__list-img">
                                    <img src="@/assets/admin/img/common/icn_medal_no.png" alt="シルバー">
                                </div>
                                <div class="reviews-box__list-ct"> ランク <span>シルバー</span>
                                </div>
                            </div>
                            <div class="reviews-box__list-item">
                                <div class="reviews-box__list-img">
                                    <img src="@/assets/admin/img/common/icn_medal_no.png" alt="ゴールド">
                                </div>
                                <div class="reviews-box__list-ct"> ランク <span>ゴールド</span>
                                </div>
                            </div>
                        </div>
                        <div class="statuschips js-tooltip" data-tippy-content="ステータス説明が入ります。ツールチップにはHTMLも使えます。">
                            <span>ランクについて</span>
                        </div>
                    </div>
                </div>
                <h2 class="cmn-ttl-01">レビュー</h2>
                <div class="application-block application-block--flex">
                    <div class="application-block__btn">
                        <button class="btn_style_05 js-popup">絞り込む</button>
                        <ul class="application-list">
                            <li class="application-list__item">4つ星</li>
                            <li class="application-list__item remove">すべて解除</li>
                        </ul>
                    </div>
                </div>
                <div class="tableblock_scroll">
                    <div class="menu-tab">
                        <div class="menu-tab__list js-tab">
                            <div class="menu-tab__list-item active" data-tab="tab01"><span>ベビーシッター</span></div>
                            <div class="menu-tab__list-item" data-tab="tab02"><span>家事代行</span></div>
                        </div>
                        <div class="menu-tab__content">
                            <div class="menu-tab__content-tab tab01 active" v-for="value in evaluation1" :key="value.name">
                                <div class="menu-tab__content-item">
                                    <div class="menu-tab__content-left">
                                        <div class="menu-tab__content-top">
                                            <div class="menu-tab__content-user">
                                                <img src="@/assets/admin/img/common/img_user.png" alt="木村　かな">
                                                <span>{{ value.lastName }} {{ value.firstName }}</span>
                                            </div>
                                            <div class="menu-tab__content-name"> {{ value.name }} </div>
                                            <div class="menu-tab__content-date"> {{ value.date }} </div>
                                            <div class="menu-tab__content-star">
                                                <img src="@/assets/admin/img/T012/icon-start.svg" alt="star">
                                            </div>
                                        </div>
                                        <p class="menu-tab__content-desc">{{ value.content_desc }}</p>
                                    </div>
                                    <div class="menu-tab__content-right">
                                        <div class="form_part_select">
                                            <ExeoSelect :options='selectOptions' value="1"></ExeoSelect>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="menu-tab__content-tab tab02" v-for="value in evaluation2" :key="value.name">
                                <div class="menu-tab__content-item">
                                    <div class="menu-tab__content-left">
                                        <div class="menu-tab__content-top">
                                            <div class="menu-tab__content-user">
                                                <img src="@/assets/admin/img/common/img_user.png" alt="木村　かな">
                                                <span>{{ value.lastName }} {{ value.firstName }}</span>
                                            </div>
                                            <div class="menu-tab__content-name"> {{ value.name }} </div>
                                            <div class="menu-tab__content-date"> {{ value.date }} </div>
                                            <div class="menu-tab__content-star">
                                                <img src="@/assets/admin/img/T012/icon-start.svg" alt="star">
                                            </div>
                                        </div>
                                        <p class="menu-tab__content-desc">{{ value.content_desc }}</p>
                                    </div>
                                    <div class="menu-tab__content-right">
                                        <div class="form_part_select">
                                            <ExeoSelect :options='selectOptions' value="1"></ExeoSelect>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="popup-main">
            <M017></M017>
        </div>
    </main>
</template>

<script>

import SupporterSummaryHeader from "@/components/header/SupporterSummaryHeader.vue";
import ExeoSupporterNavigationWindow from "@/components/other/ExeoSupporterNavigationWindow.vue";
import ExeoTableAdminSupporterResultReserve from "@/components/table/ExeoTableAdminSupporterResultReserve.vue";
import ExeoSelect from '@/components/action/ExeoSelect.vue';
import M017 from '@/components/modal/M017.vue';

export default {
    layout: "admin",
    components: {
        ExeoSupporterNavigationWindow,
        SupporterSummaryHeader,
        ExeoTableAdminSupporterResultReserve,
        M017,
        ExeoSelect,
    },
    head() {
        return {
            title: '実績〈評価〉'
        }
    },
    data() {
        return {
            reserveData: [],
            user: {},
            selectOptions: [
                { label: '公開', value: 0 },
                { label: '非公開', value: 1 }
            ],
            data: [],
            evaluation1: [
                { firstName: '木村', lastName: 'かな', name: 'お仕事ID3048u', date: '2022.05.06', star: '1', content_desc: 'テキストテキス' },
                { firstName: '木村', lastName: 'かな', name: 'お仕事ID3048u', date: '2022.05.06', star: '1', content_desc: 'テキストテキス' }
            ],
            evaluation2: [
                { firstName: '木村', lastName: 'かな', name: 'お仕事ID3048u', date: '2022.05.06', star: '1', content_desc: 'テキストテキス' },
            ]
        };
    },
};
</script>   

<style scoped>

</style>