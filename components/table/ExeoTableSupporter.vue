<template>
    <div>
        <div class="form_block">
            <form>
                <download-excel :data="this.supporters_excel">
                    <button type="button" class="btn_style_06">印刷する</button>
                </download-excel>
            </form>
            <!-- <m-005 @submit="filter" />
            <div class="form_part">
                <div class="form_part_select">
                    <select @change="onChange($event)">
                        <option value="1">並べ替え</option>
                        <option value="2">あいうえお順</option>
                        <option value="3">都道府県順</option>
                        <option value="4">登録日順</option>
                        <option value="5">評価順</option>
                    </select>
                </div>
            </div>
            <div class="form_part">
                <span class="form_part_name">シッター</span>
                <ul class="statusdescription_list">
                    <li>
                        <span class="statusicn statusicn--02 statusicn_confirmation">選考中</span>
                        <span>10件</span>
                    </li>
                    <li>
                        <span class="statusicn statusicn--02 statusicn_quotation">書類未</span>
                        <span>10件</span>
                    </li>
                    <li>
                        <span
                            class="statusicn statusicn--02 statusicn_confirmation_ok statusicn_confirmation_open">公開中</span>
                        <span>3件</span>
                    </li>
                </ul>
            </div>
            <div class="form_part">
                <span class="form_part_name">家事代行</span>
                <ul class="statusdescription_list">
                    <li>
                        <span class="statusicn statusicn--02 statusicn_confirmation">選考中</span>
                        <span>10件</span>
                    </li>
                    <li>
                        <span class="statusicn statusicn--02 statusicn_quotation">書類未</span>
                        <span>10件</span>
                    </li>
                    <li>
                        <span class="statusicn statusicn_confirmation_ok statusicn_confirmation_open">公開中</span>
                        <span>3件</span>
                    </li>
                </ul>
            </div>
            <div class="form_part">
                <div class="statuschips js-tooltip"
                    data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>">
                    <span>ステータス説明</span>
                </div>
            </div> -->
        </div>
        <div class="tableblock_scroll">
            <table class="table_style_02 table_style_02--style4 looksort_table">
                <thead>
                    <tr>
                        <th>
                            <ul class="list-checkbox">
                                <li class="list-checkbox__item list-checkbox__item--full">
                                    <form>
                                        <label class="checkbox-custom">
                                            <input id="checkAll" type="checkbox" name="lang" value="checkall"
                                                v-model="selectAll" @click="selectData" />
                                            <span class="checkmark"></span>
                                        </label>
                                    </form>
                                </li>
                            </ul>
                        </th>
                        <th>サポーターID</th>
                        <th>名前</th>
                        <th>都道府県</th>
                        <th>シッター</th>
                        <th>病児保育</th>
                        <th>産前産後</th>
                        <th>家事代行</th>
                        <th>メモ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(supporter, index) in data" :key="index">
                        <td>
                            <ul class="list-checkbox">
                                <li class="list-checkbox__item list-checkbox__item--full">
                                    <label class="checkbox-custom">
                                        <input type="checkbox" :value="supporter" v-model="selected" class="checks" />
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                            </ul>
                        </td>
                        <td class="looksort_table_id">{{ supporter.supporter_id }}</td>
                        <td class="looksort_table_user">
                            <NuxtLink :to="`/admin/supporter/${supporter.id}/info`">
                                {{ supporter.last_name }}　{{ supporter.first_name }}<br>{{ supporter.last_kana }} {{
                                    supporter.first_kana
                                }}
                            </NuxtLink>
                        </td>
                        <td class="looksort_table_prefectures">{{ supporter.prefecture }}</td>
                        <td class="looksort_table_title"><exeo-status :value="supporter.sitter" /></td>
                        <td class="looksort_table_daycare"><exeo-status :value="supporter.is_sick_child_care" /></td>
                        <td class="looksort_table_childbirth"><exeo-status :value="supporter.is_childbirth_care" /></td>
                        <td class="looksort_table_agent"><exeo-status :value="supporter.is_housework" /></td>
                        <td class="looksort_table_memo">{{ supporter.memo }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="flex_box f-jc-space-between">
            <exeo-pagenation @next="nextPage" @prev="prevPage" :current_page="current_page" :last="last_page" :per_page="per_page" />
        </div>
    </div>
</template>

<script>
import ExeoStatusNarrow from "~/components/other/ExeoStatusNarrow"
import ExeoCheckbox from '~/components/action/ExeoCheckbox.vue'
import ExeoStatus from '~/components/other/ExeoStatus.vue'
import ExeoSelect from '~/components/action/ExeoSelect.vue'
import ExeoNarrow from '~/components/action/ExeoNarrow.vue'
import ExeoPagenation from '~/components/ExeoPagenation.vue'
import M005 from '~/components/modal/M005.vue'
import SupporterProfileService from "~/services/admin/supporter/SupporterProfileService.js";
import Vue from "vue";
import JsonExcel from "vue-json-excel";

Vue.component("downloadExcel", JsonExcel);
export default {
    components: {
        ExeoStatusNarrow,
        ExeoCheckbox,
        ExeoStatus,
        ExeoSelect,
        ExeoNarrow,
        ExeoPagenation,
        M005,
    },
    async created() {
        try {
            this.current_page = this.$route.query.hasOwnProperty('page') ? Number(this.$route.query.page) : 1;
            const supporters = await SupporterProfileService.getListSupporter(this, this.current_page);
            this.supporters_excel = await SupporterProfileService.getListSupporterExcelData(this,);
            this.data = supporters.data;
            this.current_page = supporters.current_page;
            this.per_page = supporters.per_page;
            this.last_page = supporters.last_page;
        } catch (e) {
            console.log(e);
        }
    },
    data() {
        return {
            narrows: ["男性", "20代", "家事代行"],
            n_text: "",
            all_check: false,
            check_list: [],
            select: null,
            current_page: 1,
            per_page: 0,
            last_page: 0,
            selectOptions: [
                { label: "並べ替え", value: null },
                { label: "あいうえお順", value: 1 },
                { label: "都道府県順", value: 2 },
                { label: "登録日順", value: 3 },
                { label: "評価順", value: 4 },
            ],
            data: [],
            isSearched: null,
            supporters: [],
            supporters_excel: [],
            items: [],
            selected: [],
            selectAll: false,
            sortValue: ''
        }
    },
    methods: {
        async filter(modalData) {
            let filterKeyword = [];
            this.modalData = modalData;
            if (modalData.childbirth !== '') {
                filterKeyword.push({ childbirth: modalData.childbirth });
            }
            if (modalData.housework !== '') {
                filterKeyword.push({ housework: modalData.housework });
            }
            if (modalData.prefecture !== '') {
                filterKeyword.push({ prefecture: modalData.prefecture });
            }
            if (modalData.sickChildren !== '') {
                filterKeyword.push({ sickChildren: modalData.sickChildren });
            }
            if (modalData.sitter !== '') {
                filterKeyword.push({ sitter: modalData.sitter });
            }
            if (modalData.username !== '') {
                filterKeyword.push({ username: modalData.username });
            }
            if (modalData.gender !== '') {
                filterKeyword.push({ gender: modalData.gender });
            }
            if (modalData.result !== '') {
                filterKeyword.push({ result: modalData.result });
            }
            if (filterKeyword.length !== 0) {
                const filterValue = await SupporterProfileService.getListSupporter(this,1, filterKeyword);
                this.data = filterValue.data;
            }
        },
        deleteNarrow(narrow) {
            this.narrows[narrow] = null
        },
        addNarrow() {
            this.narrows.push(this.n_text)
            this.n_text = ''
        },
        allCheck() {
            if (this.all_check) {
                this.data.forEach(item => this.check_list.push(item.id))
            } else {
                this.check_list = []
            }
        },
        narrow(narrow) {
            this.narrows = narrow
        },
        onChange(event) {
            switch (event.target.value) {
                case '1':
                    const filteredList1 = this.data.sort((a, b) => a.id - b.id);
                    this.data = filteredList1;
                    break;
                case '2':
                    break;

                case '3':
                    const filteredList3 = this.data.sort((a, b) => b.prefecture - a.prefecture);
                    this.data = filteredList3;
                    break;
                case '4':
                    const filteredList4 = this.data.sort((a, b) => b.id - a.id);
                    this.data = filteredList4;
                    break;
                case '5':
                    break;
                default:
            }
        },
        selectData() {
            this.selected = [];
            if (!this.selectAll) {
                for (let i in this.data) {
                    const data = this.selected;
                    data.push(this.data[i]);
                }
            }
        },
        async nextPage(data) {
            const supporters = await SupporterProfileService.getListSupporter(this,data);
            this.data = supporters.data;
            this.current_page = supporters.current_page;
            this.per_page = supporters.per_page;
            this.last_page = supporters.last_page;
        },
        async prevPage(data) {
            const supporters = await SupporterProfileService.getListSupporter(this,data);
            this.data = supporters.data;
            this.current_page = supporters.current_page;
            this.per_page = supporters.per_page;
            this.last_page = supporters.last_page;
        },
    },
    watch: {
        selected: function (val) {
            this.selected = val;
            this.supporters_excel = this.selected;
        }
    }
}
</script>

<style></style>
