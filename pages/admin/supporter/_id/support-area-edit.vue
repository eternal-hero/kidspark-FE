<template>
    <main class="site_main">
        <nav class="breadcrumb">
            <ul>
                <li><a href="/app/admin/dashboard">TOP</a></li>
                <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
                <li>サポートエリア</li>
            </ul>
        </nav>
        <h1 class="page_ttl_01"><span>プロフィール〈サポートエリア〉</span></h1>
        <supporter-header :isEditing="true" :user="supporter"/>
        <div class="col2_block">
            <exeo-supporter-navigation-window/>
            <div class="col2_block_main">
                <div class="support-ct">
                    <form>
                        <h2 class="cmn-ttl-01">サポートエリア</h2>
                        <div class="support-ct__table">
                            <div class="support-ct__table-item">
                                <div class="support-ct__table-ttl">
                                    <span>北海道</span>
                                </div>
                                <div class="support-ct__table-ct">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox">
                                            <input type="checkbox" id="hokkaidoFull" :value="0" v-model="checkedArea">
                                            <label for="hokkaidoFull">北海道全域</label>
                                        </div>
                                    </div>
                                    <div class="support-ct__table-accordion">
                                        <label class="support-ct__table-title">札幌市</label>
                                        <div class="form_block">
                                            <div class="form-edit__checkbox" v-for="area in supportArea(0)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="support-ct__table-item">
                                <div class="support-ct__table-ttl">
                                    <span>青森県</span>
                                </div>
                                <div class="support-ct__table-ct">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox">
                                            <input type="checkbox" id="aomoriFull" :value="1000" v-model="checkedArea">
                                            <label for="aomoriFull">青森県全域</label>
                                        </div>
                                    </div>
                                    <div class="support-ct__table-accordion show">
                                        <div class="form_block">
                                            <div class="form-edit__checkbox" v-for="area in supportArea(1)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="support-ct__table-item">
                                <div class="support-ct__table-ttl">
                                    <span>岩手県</span>
                                </div>
                                <div class="support-ct__table-ct">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox">
                                            <input type="checkbox" id="iwateFull" :value="2000" v-model="checkedArea">
                                            <label for="iwateFull">岩手県全域</label>
                                        </div>
                                    </div>
                                    <div class="support-ct__table-accordion show">
                                        <div class="form_block">
                                            <div class="form-edit__checkbox" v-for="area in supportArea(2)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="support-ct__table-item">
                                <div class="support-ct__table-ttl">
                                    <span>宮城県</span>
                                </div>
                                <div class="support-ct__table-ct">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox">
                                            <input type="checkbox" id="miyagiFull" :value="3000" v-model="checkedArea">
                                            <label for="miyagiFull">宮城県全域</label>
                                        </div>
                                    </div>
                                    <div class="support-ct__table-accordion show">
                                        <label class="support-ct__table-title">仙台市</label>
                                        <div class="form_block">
                                            <div class="form-edit__checkbox" v-for="area in supportArea(3)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="support-ct__table-item">
                                <div class="support-ct__table-ttl">
                                    <span>秋田県</span>
                                </div>
                                <div class="support-ct__table-ct">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox">
                                            <input type="checkbox" id="akitaFull" :value="4000" v-model="checkedArea">
                                            <label for="akitaFull">秋田県全域</label>
                                        </div>
                                    </div>
                                    <div class="support-ct__table-accordion show">
                                        <div class="form_block">
                                            <div class="form-edit__checkbox" v-for="area in supportArea(4)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>山形県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="yamagataFull" :value="5000" v-model="checkedArea">
                                        <label for="yamagataFull">山形県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(5)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>福島県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="fukushimaFull" :value="6000" v-model="checkedArea">
                                        <label for="fukushimaFull">福島県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(6)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>茨城県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="ibaragiFull" :value="7000" v-model="checkedArea">
                                        <label for="ibaragiFull">茨城県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(7)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>栃木県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="tochigiFull" :value="8000" v-model="checkedArea">
                                        <label for="tochigiFull">栃木県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(8)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>群馬県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="gunmaFull" :value="9000" v-model="checkedArea">
                                        <label for="gunmaFull">群馬県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(9)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>埼玉県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="saitamaFull" :value="10000" v-model="checkedArea">
                                        <label for="saitamaFull">埼玉県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <label class="support-ct__table-title">さいたま市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(10)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>千葉県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="chibaFull" :value="11000" v-model="checkedArea">
                                        <label for="chibaFull">千葉県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <label class="support-ct__table-title">千葉市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(11)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>東京都</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="tokyoFull" :value="12000" v-model="checkedArea">
                                        <label for="tokyoFull">東京都全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <label class="support-ct__table-title">東京23区</label>
                                    <div class="form_block"><div class="form-edit__checkbox" v-for="area in supportArea(12)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>神奈川県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="kanagawaFull" :value="13000" v-model="checkedArea">
                                        <label for="kanagawaFull">神奈川県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <label class="support-ct__table-title">横浜市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama1" :value="13001"  v-model="checkedArea"><label for="yokohama1">鶴見区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama2" :value="13002"  v-model="checkedArea"><label for="yokohama2">神奈川区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama3" :value="13003"  v-model="checkedArea"><label for="yokohama3">西区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama4" :value="13004"  v-model="checkedArea"><label for="yokohama4">中区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama5" :value="13005"  v-model="checkedArea"><label for="yokohama5">南区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama6" :value="13006"  v-model="checkedArea"><label for="yokohama6">保土ケ谷区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama7" :value="13007"  v-model="checkedArea"><label for="yokohama7">磯子区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama8" :value="13008"  v-model="checkedArea"><label for="yokohama8">金沢区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama9" :value="13009"  v-model="checkedArea"><label for="yokohama9">港北区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama10" :value="13010"  v-model="checkedArea"><label for="yokohama10">戸塚区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama11" :value="13011"  v-model="checkedArea"><label for="yokohama11">港南区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama12" :value="13012"  v-model="checkedArea"><label for="yokohama12">旭区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama13" :value="13013"  v-model="checkedArea"><label for="yokohama13">緑区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama14" :value="13014"  v-model="checkedArea"><label for="yokohama14">瀬谷区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama15" :value="13015"  v-model="checkedArea"><label for="yokohama15">栄区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama16" :value="13016"  v-model="checkedArea"><label for="yokohama16">泉区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama17" :value="13017"  v-model="checkedArea"><label for="yokohama17">青葉区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="yokohama18" :value="13018"  v-model="checkedArea"><label for="yokohama18">都筑区</label></div>
                                    </div>
                                    <label class="support-ct__table-title">川崎市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox"><input type="checkbox" id="kawasaki1" :value="13019"  v-model="checkedArea"><label for="kawasaki1">川崎区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="kawasaki2" :value="13020"  v-model="checkedArea"><label for="kawasaki2">幸区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="kawasaki3" :value="13021"  v-model="checkedArea"><label for="kawasaki3">中原区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="kawasaki4" :value="13022"  v-model="checkedArea"><label for="kawasaki4">高津区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="kawasaki5" :value="13023"  v-model="checkedArea"><label for="kawasaki5">多摩区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="kawasaki6" :value="13024"  v-model="checkedArea"><label for="kawasaki6">宮前区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="kawasaki7" :value="13025"  v-model="checkedArea"><label for="kawasaki7">麻生区</label></div>
                                    </div>
                                    <label class="support-ct__table-title">相模原市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara1" :value="13026"  v-model="checkedArea"><label for="sagamihara1">緑区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara2" :value="13027"  v-model="checkedArea"><label for="sagamihara2">中央区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara3" :value="13028"  v-model="checkedArea"><label for="sagamihara3">南区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara4" :value="13029"  v-model="checkedArea"><label for="sagamihara4">横須賀市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara5" :value="13030"  v-model="checkedArea"><label for="sagamihara5">平塚市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara6" :value="13031"  v-model="checkedArea"><label for="sagamihara6">鎌倉市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara7" :value="13032"  v-model="checkedArea"><label for="sagamihara7">藤沢市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara8" :value="13033"  v-model="checkedArea"><label for="sagamihara8">小田原市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara9" :value="13034"  v-model="checkedArea"><label for="sagamihara9">茅ヶ崎市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara10" :value="13035"  v-model="checkedArea"><label for="sagamihara10">逗子市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara11" :value="13036"  v-model="checkedArea"><label for="sagamihara11">三浦市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara12" :value="13037"  v-model="checkedArea"><label for="sagamihara12">秦野市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara13" :value="13038"  v-model="checkedArea"><label for="sagamihara13">厚木市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara14" :value="13039"  v-model="checkedArea"><label for="sagamihara14">大和市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara15" :value="13040"  v-model="checkedArea"><label for="sagamihara15">伊勢原市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara16" :value="13041"  v-model="checkedArea"><label for="sagamihara16">海老名市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara17" :value="13042"  v-model="checkedArea"><label for="sagamihara17">座間市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara18" :value="13043"  v-model="checkedArea"><label for="sagamihara18">南足柄市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara19" :value="13044"  v-model="checkedArea"><label for="sagamihara19">綾瀬市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara20" :value="13045"  v-model="checkedArea"><label for="sagamihara20">葉山町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara21" :value="13046"  v-model="checkedArea"><label for="sagamihara21">寒川町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara22" :value="13047"  v-model="checkedArea"><label for="sagamihara22">大磯町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara23" :value="13048"  v-model="checkedArea"><label for="sagamihara23">二宮町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara24" :value="13049"  v-model="checkedArea"><label for="sagamihara24">中井町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara25" :value="13050"  v-model="checkedArea"><label for="sagamihara25">大井町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara26" :value="13051"  v-model="checkedArea"><label for="sagamihara26">松田町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara27" :value="13052"  v-model="checkedArea"><label for="sagamihara27">山北町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara28" :value="13053"  v-model="checkedArea"><label for="sagamihara28">開成町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara29" :value="13054"  v-model="checkedArea"><label for="sagamihara29">箱根町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara30" :value="13055"  v-model="checkedArea"><label for="sagamihara30">真鶴町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara31" :value="13056"  v-model="checkedArea"><label for="sagamihara31">湯河原町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara32" :value="13057"  v-model="checkedArea"><label for="sagamihara32">愛川町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sagamihara33" :value="13058"  v-model="checkedArea"><label for="sagamihara33">清川村</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>新潟県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="niigataFull" :value="14000" v-model="checkedArea">
                                        <label for="niigataFull">新潟県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <label class="support-ct__table-title">新潟市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(14)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>富山県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="toyamaFull" :value="15000" v-model="checkedArea">
                                        <label for="toyamaFull">富山県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(15)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>石川県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="ishikawaFull" :value="16000" v-model="checkedArea">
                                        <label for="ishikawaFull">石川県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(16)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>福井県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="fukuiFull" :value="17000" v-model="checkedArea">
                                        <label for="fukuiFull">福井県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(17)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>山梨県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="yamanashiFull" :value="18000" v-model="checkedArea">
                                        <label for="yamanashiFull">山梨県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(18)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>長野県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="naganoFull" :value="19000" v-model="checkedArea">
                                        <label for="naganoFull">長野県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(19)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>岐阜県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="gifuFull" :value="20000" v-model="checkedArea">
                                        <label for="gifuFull">岐阜県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(20)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>静岡県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="shizuokaFull" :value="21000" v-model="checkedArea">
                                        <label for="shizuokaFull">静岡県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <label class="support-ct__table-title">静岡市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(21)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>愛知県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="aichiFull" :value="22000" v-model="checkedArea">
                                        <label for="aichiFull">愛知県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <label class="support-ct__table-title">名古屋市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(22)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>三重県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="mieFull" :value="23000" v-model="checkedArea">
                                        <label for="mieFull">三重県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(23)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>滋賀県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="shigaFull" :value="24000" v-model="checkedArea">
                                        <label for="shigaFull">滋賀県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(24)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>京都府</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="kyotoFull" :value="25000" v-model="checkedArea">
                                        <label for="kyotoFull">京都府全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <label class="support-ct__table-title">京都市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(25)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>大阪府</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="osakaFull" :value="26000" v-model="checkedArea">
                                        <label for="osakaFull">大阪府全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <label class="support-ct__table-title">大阪市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka1" :value="26001"  v-model="checkedArea"><label for="osaka1">都島区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka2" :value="26002"  v-model="checkedArea"><label for="osaka2">福島区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka3" :value="26003"  v-model="checkedArea"><label for="osaka3">此花区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka4" :value="26004"  v-model="checkedArea"><label for="osaka4">西区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka5" :value="26005"  v-model="checkedArea"><label for="osaka5">港区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka6" :value="26006"  v-model="checkedArea"><label for="osaka6">大正区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka7" :value="26007"  v-model="checkedArea"><label for="osaka7">天王寺区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka8" :value="26008"  v-model="checkedArea"><label for="osaka8">浪速区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka9" :value="26009"  v-model="checkedArea"><label for="osaka9">西淀川区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka10" :value="26010"  v-model="checkedArea"><label for="osaka10">東淀川区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka11" :value="26011"  v-model="checkedArea"><label for="osaka11">東成区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka12" :value="26012"  v-model="checkedArea"><label for="osaka12">生野区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka13" :value="26013"  v-model="checkedArea"><label for="osaka13">旭区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka14" :value="26014"  v-model="checkedArea"><label for="osaka14">城東区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka15" :value="26015"  v-model="checkedArea"><label for="osaka15">阿倍野区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka16" :value="26016"  v-model="checkedArea"><label for="osaka16">住吉区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka17" :value="26017"  v-model="checkedArea"><label for="osaka17">東住吉区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka18" :value="26018"  v-model="checkedArea"><label for="osaka18">西成区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka19" :value="26019"  v-model="checkedArea"><label for="osaka19">淀川区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka20" :value="26020"  v-model="checkedArea"><label for="osaka20">鶴見区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka21" :value="26021"  v-model="checkedArea"><label for="osaka21">住之江区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka22" :value="26022"  v-model="checkedArea"><label for="osaka22">平野区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka23" :value="26023"  v-model="checkedArea"><label for="osaka23">北区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="osaka24" :value="26024"  v-model="checkedArea"><label for="osaka24">中央区</label></div>
                                    </div>
                                    <label class="support-ct__table-title">堺市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai1" :value="26025"  v-model="checkedArea"><label for="sakai1">堺区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai2" :value="26026"  v-model="checkedArea"><label for="sakai2">中区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai3" :value="26027"  v-model="checkedArea"><label for="sakai3">東区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai4" :value="26028"  v-model="checkedArea"><label for="sakai4">西区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai5" :value="26029"  v-model="checkedArea"><label for="sakai5">南区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai6" :value="26030"  v-model="checkedArea"><label for="sakai6">北区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai7" :value="26031"  v-model="checkedArea"><label for="sakai7">美原区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai8" :value="26032"  v-model="checkedArea"><label for="sakai8">岸和田市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai9" :value="26033"  v-model="checkedArea"><label for="sakai9">豊中市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai10" :value="26034"  v-model="checkedArea"><label for="sakai10">池田市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai11" :value="26035"  v-model="checkedArea"><label for="sakai11">吹田市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai12" :value="26036"  v-model="checkedArea"><label for="sakai12">泉大津市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai13" :value="26037"  v-model="checkedArea"><label for="sakai13">高槻市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai14" :value="26038"  v-model="checkedArea"><label for="sakai14">貝塚市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai15" :value="26039"  v-model="checkedArea"><label for="sakai15">守口市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai16" :value="26040"  v-model="checkedArea"><label for="sakai16">枚方市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai17" :value="26041"  v-model="checkedArea"><label for="sakai17">茨木市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai18" :value="26042"  v-model="checkedArea"><label for="sakai18">八尾市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai19" :value="26043"  v-model="checkedArea"><label for="sakai19">泉佐野市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai20" :value="26044"  v-model="checkedArea"><label for="sakai20">富田林市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai21" :value="26045"  v-model="checkedArea"><label for="sakai21">寝屋川市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai22" :value="26046"  v-model="checkedArea"><label for="sakai22">河内長野市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai23" :value="26047"  v-model="checkedArea"><label for="sakai23">松原市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai24" :value="26048"  v-model="checkedArea"><label for="sakai24">大東市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai25" :value="26049"  v-model="checkedArea"><label for="sakai25">和泉市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai26" :value="26050"  v-model="checkedArea"><label for="sakai26">箕面市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai27" :value="26051"  v-model="checkedArea"><label for="sakai27">柏原市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai28" :value="26052"  v-model="checkedArea"><label for="sakai28">羽曳野市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai29" :value="26053"  v-model="checkedArea"><label for="sakai29">門真市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai30" :value="26054"  v-model="checkedArea"><label for="sakai30">摂津市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai31" :value="26055"  v-model="checkedArea"><label for="sakai31">高石市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai32" :value="26056"  v-model="checkedArea"><label for="sakai32">藤井寺市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai33" :value="26057"  v-model="checkedArea"><label for="sakai33">東大阪市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai34" :value="26058"  v-model="checkedArea"><label for="sakai34">泉南市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai35" :value="26059"  v-model="checkedArea"><label for="sakai35">四條畷市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai36" :value="26060"  v-model="checkedArea"><label for="sakai36">交野市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai37" :value="26061"  v-model="checkedArea"><label for="sakai37">大阪狭山市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai38" :value="26062"  v-model="checkedArea"><label for="sakai38">阪南市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai39" :value="26063"  v-model="checkedArea"><label for="sakai39">島本町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai40" :value="26064"  v-model="checkedArea"><label for="sakai40">豊能町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai41" :value="26065"  v-model="checkedArea"><label for="sakai41">能勢町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai42" :value="26066"  v-model="checkedArea"><label for="sakai42">忠岡町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai43" :value="26067"  v-model="checkedArea"><label for="sakai43">熊取町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai44" :value="26068"  v-model="checkedArea"><label for="sakai44">田尻町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai45" :value="26069"  v-model="checkedArea"><label for="sakai45">岬町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai46" :value="26070"  v-model="checkedArea"><label for="sakai46">太子町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai47" :value="26071"  v-model="checkedArea"><label for="sakai47">河南町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="sakai48" :value="26072"  v-model="checkedArea"><label for="sakai48">千早赤阪村</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>兵庫県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="hyogoFull" :value="27000" v-model="checkedArea">
                                        <label for="hyogoFull">兵庫県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <label class="support-ct__table-title">神戸市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(27)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>奈良県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="naraFull" :value="28000" v-model="checkedArea">
                                        <label for="naraFull">奈良県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(28)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>和歌山県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="wakayamaFull" :value="29000" v-model="checkedArea">
                                        <label for="wakayamaFull">和歌山県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(29)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>鳥取県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="tottoriFull" :value="30000" v-model="checkedArea">
                                        <label for="tottoriFull">鳥取県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(30)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>島根県</span>
                            </div>
                            <div class="support-ct__table-ct">

                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="shimaneFull" :value="31000" v-model="checkedArea">
                                        <label for="shimaneFull">鳥取県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(31)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>岡山県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="okayamaFull" :value="32000" v-model="checkedArea">
                                        <label for="okayamaFull">岡山県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <label class="support-ct__table-title">岡山市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(32)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>広島県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="hiroshimaFull" :value="33000" v-model="checkedArea">
                                        <label for="hiroshimaFull">広島県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <label class="support-ct__table-title">広島市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(33)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>山口県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="yamaguchiFull" :value="34000" v-model="checkedArea">
                                        <label for="yamaguchiFull">山口県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(34)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>徳島県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="tokushimaFull" :value="35000" v-model="checkedArea">
                                        <label for="tokushimaFull">徳島県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(35)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>香川県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="kagawaFull" :value="36000" v-model="checkedArea">
                                        <label for="kagawaFull">香川県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(36)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>愛媛県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="ehimeFull" :value="37000" v-model="checkedArea">
                                        <label for="ehimeFull">愛媛県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(37)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>高知県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="kotiFull" :value="38000" v-model="checkedArea">
                                        <label for="kotiFull">高知県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(38)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>福岡県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="fukuokaFull" :value="39000" v-model="checkedArea">
                                        <label for="fukuokaFull">福岡県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <label class="support-ct__table-title">北九州市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox"><input type="checkbox" id="kitakyu1" :value="39001"  v-model="checkedArea"><label for="kitakyu1">門司区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="kitakyu2" :value="39002"  v-model="checkedArea"><label for="kitakyu2">若松区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="kitakyu3" :value="39003"  v-model="checkedArea"><label for="kitakyu3">戸畑区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="kitakyu4" :value="39004"  v-model="checkedArea"><label for="kitakyu4">小倉北区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="kitakyu5" :value="39005"  v-model="checkedArea"><label for="kitakyu5">八幡東区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="kitakyu6" :value="39006"  v-model="checkedArea"><label for="kitakyu6">八幡西区</label></div>
                                    </div>
                                    <label class="support-ct__table-title">福岡市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka1" :value="39007"  v-model="checkedArea"><label for="fukuoka1">東区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka2" :value="39008"  v-model="checkedArea"><label for="fukuoka2">博多区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka3" :value="39009"  v-model="checkedArea"><label for="fukuoka3">中央区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka4" :value="39010"  v-model="checkedArea"><label for="fukuoka4">南区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka5" :value="39011"  v-model="checkedArea"><label for="fukuoka5">西区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka6" :value="39012"  v-model="checkedArea"><label for="fukuoka6">城南区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka7" :value="39013"  v-model="checkedArea"><label for="fukuoka7">早良区</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka8" :value="39014"  v-model="checkedArea"><label for="fukuoka8">大牟田市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka9" :value="39015"  v-model="checkedArea"><label for="fukuoka9">久留米市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka10" :value="39016"  v-model="checkedArea"><label for="fukuoka10">直方市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka11" :value="39017"  v-model="checkedArea"><label for="fukuoka11">飯塚市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka12" :value="39018"  v-model="checkedArea"><label for="fukuoka12">田川市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka13" :value="39019"  v-model="checkedArea"><label for="fukuoka13">柳川市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka14" :value="39020"  v-model="checkedArea"><label for="fukuoka14">八女市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka15" :value="39021"  v-model="checkedArea"><label for="fukuoka15">筑後市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka16" :value="39022"  v-model="checkedArea"><label for="fukuoka16">大川市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka17" :value="39023"  v-model="checkedArea"><label for="fukuoka17">行橋市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka18" :value="39024"  v-model="checkedArea"><label for="fukuoka18">豊前市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka19" :value="39025"  v-model="checkedArea"><label for="fukuoka19">中間市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka20" :value="39026"  v-model="checkedArea"><label for="fukuoka20">小郡市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka21" :value="39027"  v-model="checkedArea"><label for="fukuoka21">筑紫野市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka22" :value="39028"  v-model="checkedArea"><label for="fukuoka22">春日市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka23" :value="39029"  v-model="checkedArea"><label for="fukuoka23">大野城市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka24" :value="39030"  v-model="checkedArea"><label for="fukuoka24">宗像市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka25" :value="39031"  v-model="checkedArea"><label for="fukuoka25">太宰府市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka26" :value="39032"  v-model="checkedArea"><label for="fukuoka26">古賀市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka27" :value="39033"  v-model="checkedArea"><label for="fukuoka27">福津市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka28" :value="39034"  v-model="checkedArea"><label for="fukuoka28">うきは市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka29" :value="39035"  v-model="checkedArea"><label for="fukuoka29">宮若市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka30" :value="39036"  v-model="checkedArea"><label for="fukuoka30">嘉麻市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka31" :value="39037"  v-model="checkedArea"><label for="fukuoka31">朝倉市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka32" :value="39038"  v-model="checkedArea"><label for="fukuoka32">みやま市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka33" :value="39039"  v-model="checkedArea"><label for="fukuoka33">糸島市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka34" :value="39040"  v-model="checkedArea"><label for="fukuoka34">那珂川市</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka35" :value="39041"  v-model="checkedArea"><label for="fukuoka35">宇美町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka36" :value="39042"  v-model="checkedArea"><label for="fukuoka36">篠栗町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka37" :value="39043"  v-model="checkedArea"><label for="fukuoka37">志免町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka38" :value="39044"  v-model="checkedArea"><label for="fukuoka38">須恵町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka39" :value="39045"  v-model="checkedArea"><label for="fukuoka39">新宮町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka40" :value="39046"  v-model="checkedArea"><label for="fukuoka40">久山町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka41" :value="39047"  v-model="checkedArea"><label for="fukuoka41">粕屋町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka42" :value="39048"  v-model="checkedArea"><label for="fukuoka42">芦屋町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka43" :value="39049"  v-model="checkedArea"><label for="fukuoka43">水巻町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka44" :value="39050"  v-model="checkedArea"><label for="fukuoka44">岡垣町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka45" :value="39051"  v-model="checkedArea"><label for="fukuoka45">遠賀町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka46" :value="39052"  v-model="checkedArea"><label for="fukuoka46">小竹町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka47" :value="39053"  v-model="checkedArea"><label for="fukuoka47">鞍手町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka48" :value="39054"  v-model="checkedArea"><label for="fukuoka48">桂川町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka49" :value="39055"  v-model="checkedArea"><label for="fukuoka49">筑前町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka50" :value="39056"  v-model="checkedArea"><label for="fukuoka50">東峰村</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka51" :value="39057"  v-model="checkedArea"><label for="fukuoka51">大刀洗町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka52" :value="39058"  v-model="checkedArea"><label for="fukuoka52">大木町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka53" :value="39059"  v-model="checkedArea"><label for="fukuoka53">広川町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka54" :value="39060"  v-model="checkedArea"><label for="fukuoka54">香春町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka55" :value="39061"  v-model="checkedArea"><label for="fukuoka55">添田町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka56" :value="39062"  v-model="checkedArea"><label for="fukuoka56">糸田町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka57" :value="39063"  v-model="checkedArea"><label for="fukuoka57">川崎町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka58" :value="39064"  v-model="checkedArea"><label for="fukuoka58">大任町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka59" :value="39065"  v-model="checkedArea"><label for="fukuoka59">赤村</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka60" :value="39066"  v-model="checkedArea"><label for="fukuoka60">福智町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka61" :value="39067"  v-model="checkedArea"><label for="fukuoka61">苅田町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka62" :value="39068"  v-model="checkedArea"><label for="fukuoka62">みやこ町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka63" :value="39069"  v-model="checkedArea"><label for="fukuoka63">吉富町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka64" :value="39070"  v-model="checkedArea"><label for="fukuoka64">上毛町</label></div>
                                        <div class="form-edit__checkbox"><input type="checkbox" id="fukuoka65" :value="39071"  v-model="checkedArea"><label for="fukuoka65">築上町</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>佐賀県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="sagaFull" :value="40000" v-model="checkedArea">
                                        <label for="sagaFull">佐賀県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(40)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>長崎県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="nagasakiFull" :value="41000" v-model="checkedArea">
                                        <label for="nagasakiFull">長崎県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(41)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>熊本県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="kumamotoFull" :value="42000" v-model="checkedArea">
                                        <label for="kumamotoFull">熊本県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <label class="support-ct__table-title">熊本市</label>
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(42)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>大分県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="oitaFull" :value="43000" v-model="checkedArea">
                                        <label for="oitaFull">大分県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(43)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>宮崎県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="miyazakiFull" :value="44000" v-model="checkedArea">
                                        <label for="miyazakiFull">宮崎県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(44)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>鹿児島県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="kagosimaFull" :value="45000" v-model="checkedArea">
                                        <label for="kagosimaFull">鹿児島県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(45)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="support-ct__table-item">
                            <div class="support-ct__table-ttl">
                                <span>沖縄県</span>
                            </div>
                            <div class="support-ct__table-ct">
                                <div class="form_block">
                                    <div class="form-edit__checkbox">
                                        <input type="checkbox" id="okinawaFull" :value="46000" v-model="checkedArea">
                                        <label for="okinawaFull">沖縄県全域</label>
                                    </div>
                                </div>
                                <div class="support-ct__table-accordion show">
                                    <div class="form_block">
                                        <div class="form-edit__checkbox" v-for="area in supportArea(46)" :key="area.value"><input type="checkbox" :id="area.id" :value="area.value" v-model="checkedArea"><label :for="area.id">{{area.label}}</label></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" class="btn_entry" @click="save">保存する</button>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import SupporterHeader from '../../../../components/header/SupporterHeader.vue'
import ExeoSupporterNavigationWindow from '../../../../components/other/ExeoSupporterNavigationWindow.vue'
import SupporterAreaService from '@/services/admin/supporter/SupporterAreaService'
import SupporterInfoService from '@/services/admin/supporter/SupporterInfoService';
export default {
    layout: "admin",
    components: {
        SupporterHeader,
        ExeoSupporterNavigationWindow,
    },
    head() {
        return {
            title: 'プロフィール〈サポートエリア〉'
        }
    },
    head: {
        script: [
            { src: '/app/admin/js/setting.js', type: 'text/javascript'},
        ]
    },
    data() {
        return {
            supportValue: []
        }
    },
    async asyncData(context) {
        const supportAreaData = await SupporterAreaService.getSupportArea(context, context.params.id)
        const supporterData = await SupporterInfoService.getSupporterInfo(context, context.params.id);
        return {
            checkedArea: supportAreaData.map((e) => {return e.area}),
            supporter: supporterData
        }
    },
    methods: {
        supportArea(prefecture) {
            const tmp = prefecture * 1000 + 1
            return this.$SUPPORT_AREA.filter(e => e.value >= tmp && e.value < tmp + 999)
        },
        async save() {
            this.checkedArea.forEach((item) => {
                const tmp = ('00000' + item).slice(-5)
                const param = {
                    prefecture: Number(tmp.slice(0,2)),
                    area: item
                }
                this.supportValue.push(param)
            })
            try {
                await SupporterAreaService.updateSupportArea(this,this.$route.params.id,this.supportValue);
                this.$router.push({
                  name: 'admin-supporter-id-support-area',
                  params: {
                    id: this.$route.params.id,
                    message: '保存しました'
                  }
                })
            } catch (e) {
                alert(e)
            }
        }
    }
}
</script>

<style scoped>
@import url('~/assets/admin/css/component.css');
</style>
