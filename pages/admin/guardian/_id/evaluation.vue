<template>
    <div class="wrapper">
        <!--#include virtual="/assets/inc/sidebar.html" -->
        <!--▲▲ /#SIDEBAR ▲▲-->
        <main id="page-T043" class="site_main">
            <nav class="breadcrumb">
                <ul>
                    <li><a href="../">TOP</a></li>
                    <li><a href="/">ユーザー管理</a></li>
                    <li>評価</li>
                </ul>
            </nav>
            <h1 class="page_ttl_01"><span>実績〈評価〉</span></h1>
            <exeo-guardian-header :guardian="this.guardian" is-editing></exeo-guardian-header>
            <div class="col2_block f-ai-start">
                <exeo-guardian-navigation-window></exeo-guardian-navigation-window>
                <div class="col2_block_main f-ai-start">
                    <h2 class="cmn-ttl-01 flex-box">レビュー</h2>
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
                                <div class="menu-tab__content-tab tab01 active" v-for="value, index in evaluation1">
                                    <div class="menu-tab__content-item"
                                        :style="index % 2 !== 1 ? '' : 'background-color : white'">
                                        <div class="menu-tab__content-left">
                                            <div class="menu-tab__content-top">
                                                <div class="menu-tab__content-user">
                                                    <img src="@/assets/admin/img/common/img_user.png" alt="木村　かな">
                                                    <span>{{ value.lastName }} {{ value.firstName }}</span>
                                                </div>
                                                <div class="menu-tab__content-name"> {{ value.name }} </div>
                                                <div class="menu-tab__content-date"> {{ value.date }} </div>
                                                <div class="menu-tab__content-star reviews-box__ranking-item">
                                                    <span class="col2_block_side_user_star_icn" data-rate='3'></span>
                                                </div>
                                            </div>
                                            <p class="menu-tab__content-desc">
                                                {{ value.content_desc }}
                                            </p>
                                        </div>
                                        <div class="menu-tab__content-right">
                                            <div class="form_part_select">
                                                <select>
                                                    <option>公開</option>
                                                    <option value="select1">非公開</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="menu-tab__content-tab tab02" v-for="value, index in evaluation2">
                                    <div class="menu-tab__content-item"
                                        :style="index % 2 == 1 ? 'background-color : white' : ''">
                                        <div class="menu-tab__content-left">
                                            <div class="menu-tab__content-top">
                                                <div class="menu-tab__content-user">
                                                    <img src="@/assets/admin/img/common/img_user.png" alt="木村　かな">
                                                    <span>{{ value.lastName }} {{ value.firstName }}</span>
                                                </div>
                                                <div class="menu-tab__content-name"> {{ value.name }} </div>
                                                <div class="menu-tab__content-date"> {{ value.date }} </div>
                                                <div class="menu-tab__content-star reviews-box__ranking-item">
                                                    <span class="col2_block_side_user_star_icn" data-rate='3'></span>
                                                </div>
                                            </div>
                                            <p class="menu-tab__content-desc">
                                                {{ value.content_desc }}
                                            </p>
                                        </div>
                                        <div class="menu-tab__content-right">
                                            <div class="form_part_select">
                                                <select>
                                                    <option>公開</option>
                                                    <option value="select1">非公開</option>
                                                </select>
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
                <M043></M043>
            </div>
        </main>
    </div>
</template>

<script>
import ExeoGuardianHeader from "@/components/header/ExeoGuardianHeader.vue";
import ExeoGuardianNavigationWindow from "@/components/other/ExeoGuardianNavigationWindow.vue";
import '@/assets/admin/css/common.css';
import '@/assets/admin/css/component.css';
import '@/assets/admin/css/dashboard.css';
import '@/assets/admin/css/reset.css';
import '@/assets/admin/css/slick-theme.css';
import '@/assets/admin/css/slick.css';
import '@/assets/admin/css/styles.css';
import M043 from '@/components/modal/M043.vue';

export default {
    layout: 'admin',
    name: "evaluation",
    components: {
        ExeoGuardianNavigationWindow,
        ExeoGuardianHeader,
        M043
    },
    head() {
        return {
            title: '実績〈評価〉'
        }
    },
    data() {
        return {
            data: [],
            evaluation_data: {},
            guardian: {
                first_name: " ",
                last_name: " ",
                first_kana: " ",
                last_kana: " ",
                rating: 0,
            },
            isEditing: false,
            evaluation1: [
                { firstName: '木村', lastName: 'かな', name: 'お仕事ID3048u', date: '2022.05.06', star: 1, content_desc: 'テキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキス' },
                { firstName: '木村', lastName: 'かな', name: 'お仕事ID3048u', date: '2022.05.06', star: 2, content_desc: 'テキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキス' },

            ],
            evaluation2: [
                { firstName: '木村', lastName: 'かな', name: 'お仕事ID3048u', date: '2022.05.06', star: 4, content_desc: 'テキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキステキストテキス' },
            ]
        }
    },
    methods: {
    }
}
</script>

<style scoped></style>
