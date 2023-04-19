<template>
  <main id="page-U018" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a><span class="current">予約詳細</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box mbsp-20">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">予約リクエストを作成してください。</h2>
              <p class="c-txt__01">今回のご依頼内容を入力して、リクエストを送信してください。</p>
            </div>
            <div class="use-request_01">
              <div class="use-box">
                <UserAvatarBox :format="1" :user="user"></UserAvatarBox>
              </div>
              <ul class="sidebar-tags">
                <li class="sidebar-tags__item active"><span>ベビーシッター</span></li>
                <li class="sidebar-tags__item active"><span>家事代行</span></li>
              </ul>
              <dl class="possible_list">
                <dt>保育可能年齢</dt>
                <dd>0歳6ヶ月以上</dd>
                <dt>保育可能人数</dt>
                <dd>〜3人</dd>
                <dt>最低依頼時間</dt>
                <dd>1時間</dd>
              </dl>
            </div>
            <div class="requestcreate-box">
              <div class="requestcreate-box_ttl">依頼カテゴリー</div>
              <div class="requestcreate-box_cont requestcreate-box_cont_category">
                <ul class="form_block">
                  <li class="form-check__item">
                    <label class="form-edit__radio_02">
                      <input type="radio" name="category" checked="checked" value="ベビーシッター">
                      <span class="checkmark"></span>ベビーシッター</label>
                  </li>
                  <li class="form-check__item">
                    <label class="form-edit__radio_02">
                      <input type="radio" name="category" value="病児保育">
                      <span class="checkmark"></span>病児保育</label>
                  </li>
                  <li class="form-check__item">
                    <label class="form-edit__radio_02">
                      <input type="radio" name="category" value="産前産後">
                      <span class="checkmark"></span>産前産後</label>
                  </li>
                  <li class="form-check__item">
                    <label class="form-edit__radio_02">
                      <input type="radio" name="category" value="家事代行">
                      <span class="checkmark"></span>家事代行</label>
                  </li>
                </ul>
              </div>
              <div class="requestcreate-box_ttl">予約内容
                <div>
                  <div class="statuschips tooltip">
                    <span>事前面談とは</span>
                    <p class="tooltip__txt">初めてのパークサポーターへ保育を依頼する場合、必ず事前面談（オンライン、または対面）による顔合わせを行なって頂きます。<br>お子様及びご家族とパークサポーターとの相性チェックの他、パークサポーターへ希望するサポート内容、パークサポーターの方針や考え方など、面談を実施する事で大切なお子様を預けられるサポーターかどうかを、事前面談を通して必ず確認して頂きます。<br><a href="" target="_blank">事前面談についてはこちら</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="requestcreate-box_cont">
                <!-- ※事前面談が必要なのはベビーシッター関連のみ家事代行では必須ではありません。 -->
                <span class="c-btn__02 mbsp-21">初めて依頼するパークサポーターです。通常の予約の前に必ず事前面談の予約が必要です。</span>
                <ul class="form_block">
                  <li class="form-check__item">
                    <label class="form-edit__radio_02">
                      <input type="radio" name="transportation" checked="checked" value="WEB事前面談（初回必須）">
                      <span class="checkmark"></span>WEB事前面談（初回必須）</label>
                  </li>
                  <li class="form-check__item">
                    <label class="form-edit__radio_02">
                      <input type="radio" name="transportation" value="対面事前面談（初回必須）">
                      <span class="checkmark"></span>対面事前面談（初回必須）</label>
                  </li>
                  <li class="form-check__item radio_disabled__item">
									<span class="radio_disabled">
										<label class="form-edit__radio_02">
											<input type="radio" name="transportation" value="単発予約">
											<span class="checkmark"></span>単発予約</label></span>
                  </li>
                  <li class="form-check__item radio_disabled__item">
									<span class="radio_disabled">
										<label class="form-edit__radio_02">
											<input type="radio" name="transportation" value="定期予約">
											<span class="checkmark"></span>定期予約</label></span>
                  </li>
                </ul>
              </div>
              <dl class="about_g_block">
                <dt class="about_g_block_ttl">事前面談について</dt>
                <dd class="about_g_block_txt">はじめまして。プロフィールをご覧いただきありがとうございます。事前面談はまずはメッセージにてご連絡くださいますようお願いします。<br>Web事前面談は30分ほどを予定しております。</dd>
              </dl>
              <div class="requestcreate-box_ttl">予約希望日<div>
                <div class="statuschips tooltip">
                  <span>カレンダー説明</span>
                  <p class="tooltip__txt">◯：空きあり<br>△：一部空きあり<br>予約満：空き無し<br>空白：スケジュール未入力または受付不可</p>
                </div>
              </div>
              </div>
              <div class="requestcreate-box_cont requestcreate-box_cont_calendar">
                <div class="register-schedule__month">
                  <div class="register-schedule__month-wp">
                    <button class="register-schedule__month-control register-schedule__month-control--prev"><i class="fa-solid fa-angle-left"></i></button>
                    <div class="register-schedule__month-ct js-data" data-year="2022" data-month="8">2022年08月</div>
                    <button class="register-schedule__month-control register-schedule__month-control--next"><i class="fa-solid fa-angle-right"></i></button>
                  </div>
                </div>
                <div class="m-schedule__table js-m-schedule">
                  <table>
                    <tbody>
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
                        <input type="radio" name="schedule" id="schedule1" value="1">
                        <label for="schedule1">
                          <div class="m-schedule__table-day">1</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule2" value="2">
                        <label for="schedule2">
                          <div class="m-schedule__table-day">2</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-tripleangle.png" alt="tripleangle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <div class="no_select">
                          <div class="m-schedule__table-day">3</div>
                        </div>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule4" value="4">
                        <label for="schedule4">
                          <div class="m-schedule__table-day">4</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule5" value="5">
                        <label for="schedule5">
                          <div class="m-schedule__table-day">5</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-tripleangle.png" alt="Close">
                            </span>
                        </label>
                      </td>
                      <td>
                        <div class="no_select">
                          <div class="m-schedule__table-day">6</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="no_select">
                          <div class="m-schedule__table-day">7</div>
                        </div>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule8" value="8">
                        <label for="schedule8">
                          <div class="m-schedule__table-day">8</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule9" value="9">
                        <label for="schedule9">
                          <div class="m-schedule__table-day">9</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule10" value="10">
                        <label for="schedule10">
                          <div class="m-schedule__table-day">10</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule11" value="11">
                        <label for="schedule11">
                          <div class="m-schedule__table-day">11</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule12" value="12">
                        <label for="schedule12">
                          <div class="m-schedule__table-day">12</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <div class="no_select">
                          <div class="m-schedule__table-day">13</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="no_select">
                          <div class="m-schedule__table-day">14</div>
                        </div>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule15" value="15">
                        <label for="schedule15">
                          <div class="m-schedule__table-day">15</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule16" value="16">
                        <label for="schedule16">
                          <div class="m-schedule__table-day">16</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule17" value="17">
                        <label for="schedule17">
                          <div class="m-schedule__table-day">17</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule18" value="18">
                        <label for="schedule18">
                          <div class="m-schedule__table-day">18</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <div class="no_select">
                          <div class="m-schedule__table-day">19</div>
                          <span class="m-schedule__table-booked"> 予約満 </span>
                        </div>
                      </td>
                      <td>
                        <div class="no_select">
                          <div class="m-schedule__table-day">20</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="no_select">
                          <div class="m-schedule__table-day">21</div>
                        </div>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule22" value="22">
                        <label for="schedule22">
                          <div class="m-schedule__table-day">22</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule23" value="23" checked>
                        <label for="schedule23">
                          <div class="m-schedule__table-day">23</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule24" value="24">
                        <label for="schedule24">
                          <div class="m-schedule__table-day">24</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule25" value="25">
                        <label for="schedule25">
                          <div class="m-schedule__table-day">25</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule26" value="26">
                        <label for="schedule26">
                          <div class="m-schedule__table-day">26</div>
                          <span class="m-schedule__table-img">
                              <img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
                            </span>
                        </label>
                      </td>
                      <td>
                        <div class="no_select">
                          <div class="m-schedule__table-day">27</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="no_select">
                          <div class="m-schedule__table-day">28</div>
                        </div>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule29" value="29">
                        <label for="schedule29">
                          <div class="m-schedule__table-day">29</div>
                          <span class="m-schedule__table-img">
														<img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
                        </label>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule30" value="30">
                        <label for="schedule30">
                          <div class="m-schedule__table-day">30</div>
                          <span class="m-schedule__table-img">
														<img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
                        </label>
                      </td>
                      <td>
                        <input type="radio" name="schedule" id="schedule31" value="31">
                        <label for="schedule31">
                          <div class="m-schedule__table-day">31</div>
                          <span class="m-schedule__table-img">
														<img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
                        </label>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div class="m-schedule__time js-m-schedule__time">
                  <div class="m-schedule__ttltime">8月23日(火)</div>
                  <div class="m-schedule__table">
                    <table>
                      <tbody>
                      <tr>
                        <td>
                          <input type="radio" name="time" id="time0900" value="0900">
                          <label for="time0900">
                            <div class="m-schedule__table-day">09:00</div>
                            <span class="m-schedule__table-img">
																<img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
                          </label>
                        </td>
                        <td>
                          <div class="no_select">
                            <div class="m-schedule__table-day">10:00</div>
                            <span class="m-schedule__table-booked"> 予約満 </span>
                          </div>
                        </td>
                        <td>
                          <input type="radio" name="time" id="time1100" value="1100">
                          <label for="time1100">
                            <div class="m-schedule__table-day">11:00</div>
                            <span class="m-schedule__table-img">
																<img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
                          </label>
                        </td>
                        <td>
                          <input type="radio" name="time" id="time1200" value="1200">
                          <label for="time1200">
                            <div class="m-schedule__table-day">12:00</div>
                            <span class="m-schedule__table-img">
																<img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
                          </label>
                        </td>
                        <td>
                          <input type="radio" name="time" id="time1300" value="1300">
                          <label for="time1300">
                            <div class="m-schedule__table-day">13:00</div>
                            <span class="m-schedule__table-img">
																<img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
                          </label>
                        </td>
                        <td>
                          <input type="radio" name="time" id="time1400" value="1400">
                          <label for="time1400">
                            <div class="m-schedule__table-day">14:00</div>
                            <span class="m-schedule__table-img">
																<img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
                          </label>
                        </td>
                        <td>
                          <input type="radio" name="time" id="time1500" value="1500">
                          <label for="time1500">
                            <div class="m-schedule__table-day">15:00</div>
                            <span class="m-schedule__table-img">
																<img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input type="radio" name="time" id="time1600" value="1600">
                          <label for="time1600">
                            <div class="m-schedule__table-day">16:00</div>
                            <span class="m-schedule__table-img">
																<img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
                          </label>
                        </td>
                        <td>
                          <input type="radio" name="time" id="time1700" value="1700">
                          <label for="time1700">
                            <div class="m-schedule__table-day">17:00</div>
                            <span class="m-schedule__table-img">
																<img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
                          </label>
                        </td>
                        <td>
                          <input type="radio" name="time" id="time1800" value="1800">
                          <label for="time1800">
                            <div class="m-schedule__table-day">18:00</div>
                            <span class="m-schedule__table-img">
																<img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
                          </label>
                        </td>
                        <td>
                          <input type="radio" name="time" id="time1900" value="1900">
                          <label for="time1900">
                            <div class="m-schedule__table-day">19:00</div>
                            <span class="m-schedule__table-img">
																<img src="~/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
                          </label>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="m-schedule__end">
                    <div class="m-schedule__end_ttl">2022年8月23日(火)</div>
                    <div class="m-schedule__end_cont">
                      <div>開始　</div>
                      <label class="form_part_date">
                        <input type="date" disabled placeholder="日付を選択してください" name="m-schedule__start-day" value="2022-08-23" class="form_part_date_input">
                      </label>
                      <div class="form_part_select">
                        <select name="m-schedule__start-hour" disabled>
                          <option value="00" selected>00</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                        </select>
                      </div>
                      <div class="form_part_select">
                        <select name="m-schedule__start-min" disabled>
                          <option value="00" selected>00</option>
                          <option value="15">15</option>
                          <option value="30">30</option>
                          <option value="45">45</option>
                        </select>
                      </div>
                    </div>
                    <div class="m-schedule__end_cont">
                      <div>終了　</div>
                      <label class="form_part_date">
                        <input type="date" placeholder="日付を選択してください" name="m-schedule__end-day" value="2022-08-23" class="form_part_date_input">
                      </label>
                      <div class="form_part_select">
                        <select name="m-schedule__end-hour">
                          <option value="00" selected>00</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                          <option value="03">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                        </select>
                      </div>
                      <div class="form_part_select">
                        <select name="m-schedule__end-min">
                          <option value="00" selected>00</option>
                          <option value="15">15</option>
                          <option value="30">30</option>
                          <option value="45">45</option>
                        </select>
                      </div>
                    </div>
                    <p class="m-schedule__end_total"><span>合計　　0時間</span></p>
                  </div>
                </div>
              </div>
              <div class="requestcreate-box_ttl">面談するお子様</div>
              <div class="requestcreate-box_cont">
                <ul class="form-check">
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" checked="checked">
                      <span class="checkmark"></span>さなちゃん（3歳2ヶ月/女の子）
                    </label>
                  </li>
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" checked="checked">
                      <span class="checkmark"></span>りんくん（1歳4ヶ月/男の子）
                    </label>
                  </li>
                </ul>
              </div>
              <div class="requestcreate-box_ttl">面談で聞きたいことなど</div>
              <div class="requestcreate-box_cont">
                <textarea name="" cols="30" rows="10" class="form-edit__textarea" placeholder="面談で聞きたいことなどを記入してください。"></textarea>
                <div class="c-txt__04">今回のサポートでお願いしたい項目や、注意事項などがあればこちらに記入してください。</div>

                <div class="ct-right">
                  <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                  <div class="c-example__cont js-acc-cont">
                    <span class="c-example__close js-acc-close">×</span>
                    <p class="c-txt__01">（例）<br>今までお仕事でどのように保育に携わってきたか。<br>子どもを楽しませる為にどのような工夫や遊びをおこなっていただけるのか詳しく聞ければと思います。<br><br>（例）<br>Web面談ですが実際に子どもと少し話していただき、相性をみさせていただきたいです。</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="request-note">
              <h3 class="c-ttl__02 mbpc-10">登録内容の公開範囲について</h3>
              <p class="c-txt__01">基本情報の内容は一般公開はされません。登録内容の公開範囲は予約確定前と後などでパークサポーターへ公開される内容が異なります。<a href="https://www.kids-parks.com/faq/profile-2/164/" class="txt-link" target="_blank">詳しくはこちら</a>をご覧ください。<br>
              </p>
            </div>
            <div class="c-control--submit">
              <a href="#" class="btn_back w100">もどる</a>
              <NuxtLink to="/guardian/reservation-management/overview-booking" class="btn_entry">
                リクエストを送信する
              </NuxtLink>
            </div>
          </div>
          <aside class="l-content__02-r">
            <GuardianRightMenu :use-user-info="false" step-active="1"></GuardianRightMenu>
            <QuestionBox :questions="questions"></QuestionBox>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import GuardianRightMenu from "@/components/block/GuardianRightMenu";
import QuestionBox from "@/components/block/QuestionBox";
import UserAvatarBox from "@/components/block/UserAvatarBox";
import ExeoTableGuardianBookingCalendar from "@/components/table/ExeoTableGuardianBookingCalendar";
import {showScheduleMixin} from "@/mixins/showScheduleMixin";

export default {
  layout: 'guardian',
  components: {
    GuardianRightMenu,
    QuestionBox,
    UserAvatarBox,
    ExeoTableGuardianBookingCalendar
  },
  mixins: [showScheduleMixin],
  mounted() {
    this.showSchedule();
  },
  data() {
    return {
      questions: [
        {
          name: "予約リクエストの作成方法",
          url: "https://www.kids-parks.com/faq/request/177/",
        },
        {
          name: "予約リクエストの内容変更、依頼取り消しについて",
          url: "https://www.kids-parks.com/faq/request-2/180/",
        },
        {
          name: "サポート開始までの流れ",
          url: "https://www.kids-parks.com/faq/flow-2/183/",
        }
      ],
      user: {
        rating: 3.5
      }
    }
  }
}
</script>
