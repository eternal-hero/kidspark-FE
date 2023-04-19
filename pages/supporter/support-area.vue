<template>
	<main id="page-P027" class="wrapper">
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
                        <li class="m-subnav__item is-active"><a href="./supporter/support-area">サポートエリア</a></li>
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
                        <form>
                            <h2 class="cmn-ttl-01">サポートエリア</h2>
                            <p class="c-txt__01 mbpc-37 mbsp-35">サポート可能なエリアを選択してください。</p>
                            <div class="support-ct__table">
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>北海道</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
											<li class="list-checkbox__item list-checkbox__item--full">
												<label class="form-edit__checkbox">
													<input type="checkbox" :value="0" v-model="checkedArea">
													<span class="checkmark"></span>北海道全域
                                                </label>
											</li>
										</ul>
                                        <div class="support-ct__table-accordion">
                                            <label class="support-ct__table-title">札幌市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(0)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>青森県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
											<li class="list-checkbox__item list-checkbox__item--full">
												<label class="form-edit__checkbox">
													<input type="checkbox" :value="1000" v-model="checkedArea">
													<span class="checkmark"></span>青森県全域
                                                </label>
											</li>
										</ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(1)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>岩手県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
											<li class="list-checkbox__item list-checkbox__item--full">
												<label class="form-edit__checkbox">
													<input type="checkbox" :value="2000" v-model="checkedArea">
													<span class="checkmark"></span>岩手県全域
                                                </label>
											</li>
										</ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(2)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>宮城県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
											<li class="list-checkbox__item list-checkbox__item--full">
												<label class="form-edit__checkbox">
													<input type="checkbox" :value="3000" v-model="checkedArea">
													<span class="checkmark"></span>宮城県全域
                                                </label>
											</li>
										</ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(3)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>秋田県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
											<li class="list-checkbox__item list-checkbox__item--full">
												<label class="form-edit__checkbox">
													<input type="checkbox" :value="4000" v-model="checkedArea">
													<span class="checkmark"></span>秋田県全域
                                                </label>
											</li>
										</ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(4)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>山形県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="5000" v-model="checkedArea">
                                                    <span class="checkmark"></span>山形県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(5)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>福島県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="6000" v-model="checkedArea">
                                                    <span class="checkmark"></span>福島県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(6)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>茨城県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="7000" v-model="checkedArea">
                                                    <span class="checkmark"></span>茨城県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(7)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>栃木県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="8000" v-model="checkedArea">
                                                    <span class="checkmark"></span>栃木県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(8)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>群馬県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="9000" v-model="checkedArea">
                                                    <span class="checkmark"></span>群馬県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(9)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>埼玉県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="10000" v-model="checkedArea">
                                                    <span class="checkmark"></span>埼玉県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(10)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>千葉県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="11000" v-model="checkedArea">
                                                    <span class="checkmark"></span>千葉県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <label class="support-ct__table-title">千葉市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(11)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>東京都</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="12000" v-model="checkedArea">
                                                    <span class="checkmark"></span>東京都全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <label class="support-ct__table-title">東京23区</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(12)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>神奈川県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="13000" v-model="checkedArea">
                                                    <span class="checkmark"></span> 神奈川県全域 </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <label class="support-ct__table-title">横浜市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13001" v-model="checkedArea"><span class="checkmark"></span>鶴見区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13002" v-model="checkedArea"><span class="checkmark"></span>神奈川区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13003" v-model="checkedArea"><span class="checkmark"></span>西区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13004" v-model="checkedArea"><span class="checkmark"></span>中区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13005" v-model="checkedArea"><span class="checkmark"></span>南区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13006" v-model="checkedArea"><span class="checkmark"></span>保土ケ谷区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13007" v-model="checkedArea"><span class="checkmark"></span>磯子区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13008" v-model="checkedArea"><span class="checkmark"></span>金沢区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13009" v-model="checkedArea"><span class="checkmark"></span>港北区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13010" v-model="checkedArea"><span class="checkmark"></span>戸塚区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13011" v-model="checkedArea"><span class="checkmark"></span>港南区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13012" v-model="checkedArea"><span class="checkmark"></span>旭区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13013" v-model="checkedArea"><span class="checkmark"></span>緑区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13014" v-model="checkedArea"><span class="checkmark"></span>瀬谷区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13015" v-model="checkedArea"><span class="checkmark"></span>栄区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13016" v-model="checkedArea"><span class="checkmark"></span>泉区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13017" v-model="checkedArea"><span class="checkmark"></span>青葉区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13018" v-model="checkedArea"><span class="checkmark"></span>都筑区</label></li>
                                            </ul>
                                            <label class="support-ct__table-title">川崎市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13019" v-model="checkedArea"><span class="checkmark"></span>川崎区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13020" v-model="checkedArea"><span class="checkmark"></span>幸区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13021" v-model="checkedArea"><span class="checkmark"></span>中原区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13022" v-model="checkedArea"><span class="checkmark"></span>高津区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13023" v-model="checkedArea"><span class="checkmark"></span>多摩区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13024" v-model="checkedArea"><span class="checkmark"></span>宮前区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13025" v-model="checkedArea"><span class="checkmark"></span>麻生区</label></li>
                                            </ul>
                                            <label class="support-ct__table-title">相模原市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13026" v-model="checkedArea"><span class="checkmark"></span>緑区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13027" v-model="checkedArea"><span class="checkmark"></span>中央区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13028" v-model="checkedArea"><span class="checkmark"></span>南区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13029" v-model="checkedArea"><span class="checkmark"></span>横須賀市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13030" v-model="checkedArea"><span class="checkmark"></span>平塚市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13031" v-model="checkedArea"><span class="checkmark"></span>鎌倉市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13032" v-model="checkedArea"><span class="checkmark"></span>藤沢市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13033" v-model="checkedArea"><span class="checkmark"></span>小田原市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13034" v-model="checkedArea"><span class="checkmark"></span>茅ヶ崎市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13035" v-model="checkedArea"><span class="checkmark"></span>逗子市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13036" v-model="checkedArea"><span class="checkmark"></span>三浦市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13037" v-model="checkedArea"><span class="checkmark"></span>秦野市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13038" v-model="checkedArea"><span class="checkmark"></span>厚木市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13039" v-model="checkedArea"><span class="checkmark"></span>大和市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13040" v-model="checkedArea"><span class="checkmark"></span>伊勢原市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13041" v-model="checkedArea"><span class="checkmark"></span>海老名市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13042" v-model="checkedArea"><span class="checkmark"></span>座間市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13043" v-model="checkedArea"><span class="checkmark"></span>南足柄市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13044" v-model="checkedArea"><span class="checkmark"></span>綾瀬市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13045" v-model="checkedArea"><span class="checkmark"></span>葉山町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13046" v-model="checkedArea"><span class="checkmark"></span>寒川町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13047" v-model="checkedArea"><span class="checkmark"></span>大磯町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13048" v-model="checkedArea"><span class="checkmark"></span>二宮町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13049" v-model="checkedArea"><span class="checkmark"></span>中井町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13050" v-model="checkedArea"><span class="checkmark"></span>大井町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13051" v-model="checkedArea"><span class="checkmark"></span>松田町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13052" v-model="checkedArea"><span class="checkmark"></span>山北町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13053" v-model="checkedArea"><span class="checkmark"></span>開成町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13054" v-model="checkedArea"><span class="checkmark"></span>箱根町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13055" v-model="checkedArea"><span class="checkmark"></span>真鶴町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13056" v-model="checkedArea"><span class="checkmark"></span>湯河原町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13057" v-model="checkedArea"><span class="checkmark"></span>愛川町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="13058" v-model="checkedArea"><span class="checkmark"></span>清川村</label></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>新潟県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="14000" v-model="checkedArea">
                                                    <span class="checkmark"></span>新潟県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <label class="support-ct__table-title">新潟市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(14)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>富山県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="15000" v-model="checkedArea">
                                                    <span class="checkmark"></span>富山県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(15)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>石川県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="16000" v-model="checkedArea">
                                                    <span class="checkmark"></span>石川県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(16)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>福井県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="17000" v-model="checkedArea">
                                                    <span class="checkmark"></span>福井県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(17)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>山梨県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="18000" v-model="checkedArea">
                                                    <span class="checkmark"></span>山梨県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(18)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>長野県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="19000" v-model="checkedArea">
                                                    <span class="checkmark"></span>長野県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(19)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>岐阜県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="20000" v-model="checkedArea">
                                                    <span class="checkmark"></span>岐阜県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(20)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>静岡県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="21000" v-model="checkedArea">
                                                    <span class="checkmark"></span>静岡県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <label class="support-ct__table-title">静岡市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(21)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>愛知県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="22000" v-model="checkedArea">
                                                    <span class="checkmark"></span>愛知県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <label class="support-ct__table-title">名古屋市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(22)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>三重県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="23000" v-model="checkedArea">
                                                    <span class="checkmark"></span>三重県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(23)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>滋賀県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="24000" v-model="checkedArea">
                                                    <span class="checkmark"></span>滋賀県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(24)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>京都府</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="25000" v-model="checkedArea">
                                                    <span class="checkmark"></span>京都府全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <label class="support-ct__table-title">京都市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(25)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>大阪府</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="26000" v-model="checkedArea">
                                                    <span class="checkmark"></span> 大阪府全域 </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion" id="大阪府全域">
                                            <label class="support-ct__table-title">大阪市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26001" v-model="checkedArea"><span class="checkmark"></span>都島区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26002" v-model="checkedArea"><span class="checkmark"></span>福島区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26003" v-model="checkedArea"><span class="checkmark"></span>此花区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26004" v-model="checkedArea"><span class="checkmark"></span>西区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26005" v-model="checkedArea"><span class="checkmark"></span>港区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26006" v-model="checkedArea"><span class="checkmark"></span>大正区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26007" v-model="checkedArea"><span class="checkmark"></span>天王寺区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26008" v-model="checkedArea"><span class="checkmark"></span>浪速区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26009" v-model="checkedArea"><span class="checkmark"></span>西淀川区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26010" v-model="checkedArea"><span class="checkmark"></span>東淀川区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26011" v-model="checkedArea"><span class="checkmark"></span>東成区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26012" v-model="checkedArea"><span class="checkmark"></span>生野区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26013" v-model="checkedArea"><span class="checkmark"></span>旭区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26014" v-model="checkedArea"><span class="checkmark"></span>城東区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26015" v-model="checkedArea"><span class="checkmark"></span>阿倍野区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26016" v-model="checkedArea"><span class="checkmark"></span>住吉区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26017" v-model="checkedArea"><span class="checkmark"></span>東住吉区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26018" v-model="checkedArea"><span class="checkmark"></span>西成区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26019" v-model="checkedArea"><span class="checkmark"></span>淀川区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26020" v-model="checkedArea"><span class="checkmark"></span>鶴見区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26021" v-model="checkedArea"><span class="checkmark"></span>住之江区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26022" v-model="checkedArea"><span class="checkmark"></span>平野区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26023" v-model="checkedArea"><span class="checkmark"></span>北区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26024" v-model="checkedArea"><span class="checkmark"></span>中央区</label></li>
                                            </ul>
                                            <label class="support-ct__table-title">堺市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26025" v-model="checkedArea"><span class="checkmark"></span>堺区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26026" v-model="checkedArea"><span class="checkmark"></span>中区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26027" v-model="checkedArea"><span class="checkmark"></span>東区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26028" v-model="checkedArea"><span class="checkmark"></span>西区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26029" v-model="checkedArea"><span class="checkmark"></span>南区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26030" v-model="checkedArea"><span class="checkmark"></span>北区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26031" v-model="checkedArea"><span class="checkmark"></span>美原区</label></li>
                                            </ul>
                                            <label class="support-ct__table-title"></label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26032" v-model="checkedArea"><span class="checkmark"></span>岸和田市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26033" v-model="checkedArea"><span class="checkmark"></span>豊中市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26034" v-model="checkedArea"><span class="checkmark"></span>池田市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26035" v-model="checkedArea"><span class="checkmark"></span>吹田市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26036" v-model="checkedArea"><span class="checkmark"></span>泉大津市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26037" v-model="checkedArea"><span class="checkmark"></span>高槻市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26038" v-model="checkedArea"><span class="checkmark"></span>貝塚市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26039" v-model="checkedArea"><span class="checkmark"></span>守口市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26040" v-model="checkedArea"><span class="checkmark"></span>枚方市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26041" v-model="checkedArea"><span class="checkmark"></span>茨木市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26042" v-model="checkedArea"><span class="checkmark"></span>八尾市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26043" v-model="checkedArea"><span class="checkmark"></span>泉佐野市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26044" v-model="checkedArea"><span class="checkmark"></span>富田林市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26045" v-model="checkedArea"><span class="checkmark"></span>寝屋川市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26046" v-model="checkedArea"><span class="checkmark"></span>河内長野市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26047" v-model="checkedArea"><span class="checkmark"></span>松原市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26048" v-model="checkedArea"><span class="checkmark"></span>大東市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26049" v-model="checkedArea"><span class="checkmark"></span>和泉市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26050" v-model="checkedArea"><span class="checkmark"></span>箕面市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26051" v-model="checkedArea"><span class="checkmark"></span>柏原市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26052" v-model="checkedArea"><span class="checkmark"></span>羽曳野市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26053" v-model="checkedArea"><span class="checkmark"></span>門真市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26054" v-model="checkedArea"><span class="checkmark"></span>摂津市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26055" v-model="checkedArea"><span class="checkmark"></span>高石市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26056" v-model="checkedArea"><span class="checkmark"></span>藤井寺市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26057" v-model="checkedArea"><span class="checkmark"></span>東大阪市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26058" v-model="checkedArea"><span class="checkmark"></span>泉南市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26059" v-model="checkedArea"><span class="checkmark"></span>四條畷市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26060" v-model="checkedArea"><span class="checkmark"></span>交野市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26061" v-model="checkedArea"><span class="checkmark"></span>大阪狭山市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26062" v-model="checkedArea"><span class="checkmark"></span>阪南市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26063" v-model="checkedArea"><span class="checkmark"></span>島本町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26064" v-model="checkedArea"><span class="checkmark"></span>豊能町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26065" v-model="checkedArea"><span class="checkmark"></span>能勢町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26066" v-model="checkedArea"><span class="checkmark"></span>忠岡町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26067" v-model="checkedArea"><span class="checkmark"></span>熊取町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26068" v-model="checkedArea"><span class="checkmark"></span>田尻町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26069" v-model="checkedArea"><span class="checkmark"></span>岬町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26070" v-model="checkedArea"><span class="checkmark"></span>太子町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26071" v-model="checkedArea"><span class="checkmark"></span>河南町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="26072" v-model="checkedArea"><span class="checkmark"></span>千早赤阪村</label></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>兵庫県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="27000" v-model="checkedArea">
                                                    <span class="checkmark"></span>兵庫県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <label class="support-ct__table-title">神戸市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(27)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>奈良県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="28000" v-model="checkedArea">
                                                    <span class="checkmark"></span>奈良県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(28)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>和歌山県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="29000" v-model="checkedArea">
                                                    <span class="checkmark"></span>和歌山県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(29)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>鳥取県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="30000" v-model="checkedArea">
                                                    <span class="checkmark"></span>鳥取県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(30)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>島根県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="31000" v-model="checkedArea">
                                                    <span class="checkmark"></span>島根県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(31)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>岡山県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="32000" v-model="checkedArea">
                                                    <span class="checkmark"></span>岡山県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <label class="support-ct__table-title">岡山市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(32)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>広島県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="33000" v-model="checkedArea">
                                                    <span class="checkmark"></span>広島県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <label class="support-ct__table-title">広島市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(33)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>山口県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="34000" v-model="checkedArea">
                                                    <span class="checkmark"></span>山口県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(34)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>徳島県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="35000" v-model="checkedArea">
                                                    <span class="checkmark"></span>徳島県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(35)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>香川県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="36000" v-model="checkedArea">
                                                    <span class="checkmark"></span>香川県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(36)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>愛媛県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="37000" v-model="checkedArea">
                                                    <span class="checkmark"></span>愛媛県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(37)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>高知県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="38000" v-model="checkedArea">
                                                    <span class="checkmark"></span>高知県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(38)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>福岡県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="39000" v-model="checkedArea">
                                                    <span class="checkmark"></span> 福岡県全域 </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion" id="福岡県全域">
                                            <label class="support-ct__table-title">北九州市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39001" v-model="checkedArea"><span class="checkmark"></span>門司区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39002" v-model="checkedArea"><span class="checkmark"></span>若松区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39003" v-model="checkedArea"><span class="checkmark"></span>戸畑区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39004" v-model="checkedArea"><span class="checkmark"></span>小倉北区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39005" v-model="checkedArea"><span class="checkmark"></span>八幡東区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39006" v-model="checkedArea"><span class="checkmark"></span>八幡西区</label></li>
                                            </ul>
                                            <label class="support-ct__table-title">福岡市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39007" v-model="checkedArea"><span class="checkmark"></span>東区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39008" v-model="checkedArea"><span class="checkmark"></span>博多区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39009" v-model="checkedArea"><span class="checkmark"></span>中央区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39010" v-model="checkedArea"><span class="checkmark"></span>南区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39011" v-model="checkedArea"><span class="checkmark"></span>西区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39012" v-model="checkedArea"><span class="checkmark"></span>城南区</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39013" v-model="checkedArea"><span class="checkmark"></span>早良区</label></li>
                                            </ul>
                                            <label class="support-ct__table-title"></label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39014" v-model="checkedArea"><span class="checkmark"></span>大牟田市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39015" v-model="checkedArea"><span class="checkmark"></span>久留米市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39016" v-model="checkedArea"><span class="checkmark"></span>直方市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39017" v-model="checkedArea"><span class="checkmark"></span>飯塚市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39018" v-model="checkedArea"><span class="checkmark"></span>田川市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39019" v-model="checkedArea"><span class="checkmark"></span>柳川市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39020" v-model="checkedArea"><span class="checkmark"></span>八女市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39021" v-model="checkedArea"><span class="checkmark"></span>筑後市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39022" v-model="checkedArea"><span class="checkmark"></span>大川市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39023" v-model="checkedArea"><span class="checkmark"></span>行橋市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39024" v-model="checkedArea"><span class="checkmark"></span>豊前市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39025" v-model="checkedArea"><span class="checkmark"></span>中間市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39026" v-model="checkedArea"><span class="checkmark"></span>小郡市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39027" v-model="checkedArea"><span class="checkmark"></span>筑紫野市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39028" v-model="checkedArea"><span class="checkmark"></span>春日市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39029" v-model="checkedArea"><span class="checkmark"></span>大野城市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39030" v-model="checkedArea"><span class="checkmark"></span>宗像市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39031" v-model="checkedArea"><span class="checkmark"></span>太宰府市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39032" v-model="checkedArea"><span class="checkmark"></span>古賀市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39033" v-model="checkedArea"><span class="checkmark"></span>福津市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39034" v-model="checkedArea"><span class="checkmark"></span>うきは市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39035" v-model="checkedArea"><span class="checkmark"></span>宮若市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39036" v-model="checkedArea"><span class="checkmark"></span>嘉麻市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39037" v-model="checkedArea"><span class="checkmark"></span>朝倉市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39038" v-model="checkedArea"><span class="checkmark"></span>みやま市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39039" v-model="checkedArea"><span class="checkmark"></span>糸島市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39040" v-model="checkedArea"><span class="checkmark"></span>那珂川市</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39041" v-model="checkedArea"><span class="checkmark"></span>宇美町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39042" v-model="checkedArea"><span class="checkmark"></span>篠栗町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39043" v-model="checkedArea"><span class="checkmark"></span>志免町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39044" v-model="checkedArea"><span class="checkmark"></span>須恵町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39045" v-model="checkedArea"><span class="checkmark"></span>新宮町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39046" v-model="checkedArea"><span class="checkmark"></span>久山町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39047" v-model="checkedArea"><span class="checkmark"></span>粕屋町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39048" v-model="checkedArea"><span class="checkmark"></span>芦屋町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39049" v-model="checkedArea"><span class="checkmark"></span>水巻町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39050" v-model="checkedArea"><span class="checkmark"></span>岡垣町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39051" v-model="checkedArea"><span class="checkmark"></span>遠賀町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39052" v-model="checkedArea"><span class="checkmark"></span>小竹町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39053" v-model="checkedArea"><span class="checkmark"></span>鞍手町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39054" v-model="checkedArea"><span class="checkmark"></span>桂川町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39055" v-model="checkedArea"><span class="checkmark"></span>筑前町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39056" v-model="checkedArea"><span class="checkmark"></span>東峰村</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39057" v-model="checkedArea"><span class="checkmark"></span>大刀洗町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39058" v-model="checkedArea"><span class="checkmark"></span>大木町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39059" v-model="checkedArea"><span class="checkmark"></span>広川町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39060" v-model="checkedArea"><span class="checkmark"></span>香春町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39061" v-model="checkedArea"><span class="checkmark"></span>添田町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39062" v-model="checkedArea"><span class="checkmark"></span>糸田町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39063" v-model="checkedArea"><span class="checkmark"></span>川崎町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39064" v-model="checkedArea"><span class="checkmark"></span>大任町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39065" v-model="checkedArea"><span class="checkmark"></span>赤村</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39066" v-model="checkedArea"><span class="checkmark"></span>福智町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39067" v-model="checkedArea"><span class="checkmark"></span>苅田町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39068" v-model="checkedArea"><span class="checkmark"></span>みやこ町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39069" v-model="checkedArea"><span class="checkmark"></span>吉富町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39070" v-model="checkedArea"><span class="checkmark"></span>上毛町</label></li>
                                                <li class="list-checkbox__item"><label class="form-edit__checkbox"><input type="checkbox" :value="39071" v-model="checkedArea"><span class="checkmark"></span>築上町</label></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>佐賀県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="40000" v-model="checkedArea">
                                                    <span class="checkmark"></span>佐賀県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(40)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>長崎県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="41000" v-model="checkedArea">
                                                    <span class="checkmark"></span>長崎県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(41)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>熊本県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="42000" v-model="checkedArea">
                                                    <span class="checkmark"></span>熊本県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <label class="support-ct__table-title">熊本市</label>
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(42)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>大分県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="43000" v-model="checkedArea">
                                                    <span class="checkmark"></span>大分県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(43)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>宮崎県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="44000" v-model="checkedArea">
                                                    <span class="checkmark"></span>宮崎県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(44)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>鹿児島県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="45000" v-model="checkedArea">
                                                    <span class="checkmark"></span>鹿児島県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(45)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="support-ct__table-item">
                                    <div class="support-ct__table-ttl">
                                        <span>沖縄県</span>
                                    </div>
                                    <div class="support-ct__table-ct">
                                        <ul class="list-checkbox js-acc-show">
                                            <li class="list-checkbox__item list-checkbox__item--full">
                                                <label class="form-edit__checkbox">
                                                    <input type="checkbox" :value="46000" v-model="checkedArea">
                                                    <span class="checkmark"></span>沖縄県全域
                                                </label>
                                            </li>
                                        </ul>
                                        <div class="support-ct__table-accordion">
                                            <ul class="list-checkbox">
                                                <li class="list-checkbox__item" v-for="area in supportArea(46)" :key="area.value">
                                                    <label class="form-edit__checkbox">
                                                        <input type="checkbox" :value="area.value" v-model="checkedArea">
                                                        <span class="checkmark"></span>{{area.label}}
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="c-btn__control">
								<button type="button" class="btn_entry mw-335" @click="save">保存する</button>
							</div>
                        </form>
                    </div>
                </div>
			</div>
		</div>
	</main>
</template>

<script>
import SupportAreaService from '@/services/supporter/SupportAreaService'
export default {
    layout: "supporter",
    head() {
        return {
            title: 'アカウント設定'
        }
    },
    async asyncData(context) {
        const supportAreaData = await SupportAreaService.getSupportArea(context)
        return {
            checkedArea: supportAreaData.map((item)=>{return item.area}),
            support_area: supportAreaData
        }
    },
    data() {
        return {
            supportValue: [],
            status: null
        }
    },
    methods: {
        supportArea(prefecture) {
            const tmp = prefecture * 1000 + 1
            return this.$SUPPORT_AREA.filter(e => e.value >= tmp && e.value < tmp + 999)
        },
        async save() {
            this.status = null
            this.checkedArea.forEach((item) => {
                const tmp = ('00000' + item).slice(-5)
                const param = {
                    prefecture: Number(tmp.slice(0,2)),
                    area: item
                }
                this.supportValue.push(param)
            })
            try {
                await SupportAreaService.updateSupportArea(this,this.supportValue);
                this.status = 'save'
            } catch (e) {
                this.status = 'error'
            }
            window.scrollTo({top:0})
        }
    }
}
</script>

<style>

</style>
