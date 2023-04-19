<template>
  <main id="page-U061" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">お仕事管理</a><span class="current">お仕事詳細(単発)</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">お仕事詳細(単発)</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <div class="c-caution--l job-box mbsp-20">
              <h2 class="c-caution__title c-ttl__02--check c-fc--or">予約リクエストを作成してください。</h2>
              <p class="c-txt__01">今回のご依頼内容を入力して、リクエストを送信してください。</p>
            </div>
            <div class="use-request_01">
              <div class="use-box">
                <div class="use-box__avatar">
                  <img src="~/assets/guardian/img/U018/img_use.png" alt="">
                </div>
                <div class="use-box__ct">
                  <div class="use-box__ttl">
                    <div class="use-box__address">
                      <span>30代女性　</span>
                      <img src="~/assets/guardian/img/common/icn_gps.svg" alt="" width="11">
                      <div class="use-box__address-desc">東京都中央区</div>
                    </div>
                  </div>
                  <div class="user-status">
                    <div class="user-status__medal">
                      <span class="user-status__medal--regular"></span>
                    </div>
                    <div class="use-box__star">
                      <span class="use-box__star-icn" data-rate="3.5"></span>
                    </div>
                    <a href="./U058.html" class="user-status__num">(15)</a>
                  </div>
                  <span class="icn_coupon">内閣府割引券対象</span>
                </div>
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
                      <input type="radio" name="transportation" checked="checked" value="ベビーシッター">
                      <span class="checkmark"></span>ベビーシッター</label>
                  </li>
                  <li class="form-check__item">
                    <label class="form-edit__radio_02">
                      <input type="radio" name="transportation" value="病児保育">
                      <span class="checkmark"></span>病児保育</label>
                  </li>
                  <li class="form-check__item">
                    <label class="form-edit__radio_02">
                      <input type="radio" name="transportation" value="産前産後">
                      <span class="checkmark"></span>産前産後</label>
                  </li>
                  <li class="form-check__item">
                    <label class="form-edit__radio_02">
                      <input type="radio" name="transportation" value="家事代行">
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
                  <li class="form-check__item">
                    <label class="form-edit__radio_02">
                      <input type="radio" name="transportation" value="単発予約">
                      <span class="checkmark"></span>単発予約</label>
                  </li>
                  <li class="form-check__item">
                    <label class="form-edit__radio_02">
                      <input type="radio" name="transportation" value="定期予約">
                      <span class="checkmark"></span>定期予約</label>
                  </li>
                </ul>
              </div>
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

              <div class="requestcreate-box_ttl">預けるお子様</div>
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
              <div class="requestcreate-box_ttl">オプション選択</div>
              <div class="requestcreate-box_cont">
                <ul class="form-check">
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" checked="checked">
                      <span class="checkmark"></span>英語レッスン 500円/1回あたり
                    </label>
                  </li>
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" checked="checked">
                      <span class="checkmark"></span>祝日のご予約 ＋200円/1時間あたり
                    </label>
                  </li>
                  <li class="form-check__item">
                    <label class="form-edit__checkbox">
                      <input type="checkbox" class="checks" checked="checked">
                      <span class="checkmark"></span>2人預かる場合　+500円/1時間あたり
                    </label>
                  </li>
                </ul>
              </div>
              <div class="requestcreate-box_ttl">具体的な依頼内容</div>
              <div class="requestcreate-box_cont">
                <textarea name="" cols="30" rows="10" class="form-edit__textarea" placeholder="具体的な依頼内容を記入してください。"></textarea>
                <div class="c-txt__04">今回のサポートでお願いしたい項目や、注意事項などがあればこちらに記入してください。</div>
                <div class="c-al--r">


                  <div class="c-example__button js-btn-acc"><span>入力例</span></div>
                  <div class="c-example__cont js-acc-cont" style="display: none;">
                    <span class="c-example__close js-acc-close">×</span>
                    <div class="c-txt__01">
                      ・怪我の場合は怪我をした部位、怪我をした経緯を詳しく記入してください。<br>
                      ・ご自宅の器物を破損してしまった場合は、状況と破損した物を詳しく記入してください。<br><br>
                      （例）<br>
                      自宅でサポートをしてもらっている際、子供がサポーター洋服を引っ張って破いてしまいました。<br><br>
                      （例）<br>
                      〇〇公園の遊具で遊んでいたところ、2メートルほどの高さがある雲梯にぶら下がっている際に子供が落下してしまい、その際受け止めていただいた時にサポーターの手首に怪我をさせてしまいました。サポーターご自身で患部を冷やしてもらっていましたが、サポート終了後自分でも確認したところ、手首が赤く腫れ上がっており、捻挫のように見受けられました。
                    </div>
                  </div>
                </div>
              </div>


              <div class="requestcreate-box_ttl js-show-acc">見守りモニタリング依頼とは</div>
              <div class="c-al--r">

                <div class="c-txt__01">
                  <div class="statuschips tooltip">
                    <span>見守りモニタリング依頼とは</span>
                    <p class="tooltip__txt">初めてのパークサポーターへ保育を依頼する場合、必ず事前面談（オンライン、または対面）による顔合わせを行なって頂きます。<br>お子様及びご家族とパークサポーターとの相性チェックの他、パークサポーターへ希望するサポート内容、パークサポーターの方針や考え方など、面談を実施する事で大切なお子様を預けられるサポーターかどうかを、事前面談を通して必ず確認して頂きます。<br><a href="" target="_blank">事前面談についてはこちら</a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="requestcreate-box_cont js-ct-acc">
                <p class="c-txt__01">見守りモニタリング依頼は、EZVIZ 製のカメラを保有しているユーザーのみ依頼が可能です。EZVIZ 製のカメラをお持ちでない場合は、キッズパークからレンタルまたは購入も可能です。詳しくはこちらをご確認ください。</p>
                <ul class="form_block">
                  <li class="form-check__item">
                    <label class="form-edit__radio_02">
                      <input type="radio" name="request" checked="checked" value="依頼しない">
                      <span class="checkmark"></span>依頼しない</label>
                  </li>
                  <li class="form-check__item">
                    <label class="form-edit__radio_02">
                      <input type="radio" name="request" value="依頼する">
                      <span class="checkmark"></span>依頼する</label>
                  </li>
                </ul>
                <div class="quote-list__item-wrapbd">
                  <div class="quote-list__fee">
                    <div class="quote-list__fee-item">
                      <div class="quote-list__fee-ttl"> Ezviz ユーザー名<span>※</span></div>
                      <div class="quote-list__fee-ct">
                        <input type="text" class="form-edit__input" placeholder="ユーザー名">
                      </div>
                    </div>
                    <div class="quote-list__fee-item">
                      <div class="quote-list__fee-ttl"> Ezvizパスワード<span>※</span></div>
                      <div class="quote-list__fee-ct">
                        <input type="text" class="form-edit__input" placeholder="パスワード">
                      </div>
                    </div>
                    <div class="quote-list__fee-item quote-list__fee-item--start">
                      <div class="quote-list__fee-ttl"> 備考<span>※</span></div>
                      <div class="quote-list__fee-ct">
                        <textarea name="" cols="30" rows="4" class="form-edit__textarea pc" placeholder="重点的に見てほしいことなどがあれば記入してください。"></textarea>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <!-- ↓デフォルト↓ -->
              <div class="requestcreate-box_ttl">見守り依頼・カメラレンタル申請</div>
              <div class="requestcreate-box_cont">
                <p class="c-txt__01">見守り依頼は、EZVIZ 製のカメラを保有しているユーザーのみ依頼が可能です。EZVIZ 製のカメラをお持ちでない場合は、キッズパークからレンタルまたは購入も可能です。詳しくはこちらをご確認ください。</p>
                <ul class="form_block">
                  <li class="form-check__item">
                    <input type="radio" name="rental" id="rental01" checked="checked" value="ご自宅">
                    <label for="rental01" class="form-edit__radio_02">
                      <span class="checkmark"></span>見守りを依頼しない または ご自身でカメラを設置しているので見守りは不要</label>
                  </li>
                  <li class="form-check__item">
                    <input type="radio" name="rental" id="rental02" value="ご自宅">
                    <label for="rental02" class="form-edit__radio_02">
                      <span class="checkmark"></span>見守りを依頼する（カメラレンタルも同時に申請可）</label>
                    <div class="requestcreate-rental">
                      <div class="requestcreate-inr__item">
                        <div class="requestcreate-inr__item-ttl">カメラ保有状況</div>
                        <div class="requestcreate-inr__item-cont">
                          <div class="form_part_select">
                            <select>
                              <option>選択してください</option>
                              <option value="Ezviz製のカメラをご自身で所有している">Ezviz製のカメラをご自身で所有している</option>
                              <option value="Ezviz製のカメラのレンタルを希望する">Ezviz製のカメラのレンタルを希望する</option>
                              <option value="キッズパークからレンタル中（お手元にカメラがある）">キッズパークからレンタル中（お手元にカメラがある）</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <!--見守りを依頼する→ご自身で所有している場合-->
                      <div class="requestcreate-inr__item">
                        <div class="requestcreate-inr__item-ttl">カメラ保有状況</div>
                        <div class="requestcreate-inr__item-cont">
                          <div class="form_part_select">
                            <select>
                              <option>選択してください</option>
                              <option value="Ezviz製のカメラをご自身で所有している" selected>Ezviz製のカメラをご自身で所有している</option>
                              <option value="Ezviz製のカメラのレンタルを希望する">Ezviz製のカメラのレンタルを希望する</option>
                              <option value="キッズパークからレンタル中（お手元にカメラがある）">キッズパークからレンタル中（お手元にカメラがある）</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="requestcreate-inr__item">
                        <div class="requestcreate-inr__item-ttl">Ezvizアカウントの<br>メールアドレス<span>※</span></div>
                        <div class="requestcreate-inr__item-cont">
                          <input type="text" class="form-edit__input" placeholder="（メールアドレス">
                        </div>
                      </div>
                      <div class="job-money">
                        <h3 class="job-money__ttl"><img src="~/assets/guardian/img/common/icon-yen.svg" alt="" width="17"> 見守り依頼・カメラレンタル料金</h3>
                        <div class="job-money__list">
                          <div class="job-money__list-item">
                            <div class="job-money__list-ttl">見守り依頼料</div>
                            <div class="job-money__list-desc">300円</div>
                          </div>
                        </div>
                      </div>
                      <p class="c-txt__01">予約日までにキッズパークのアカウントメールアドレスの招待をお願い致します。<br><span class="requestcreate-rental_ad_text">招待アドレス</span>　kidspark〇〇@〇〇〇〇〇〇</p>
                      <!--見守りを依頼する→レンタルを希望する場合-->
                      <div class="requestcreate-inr__item">
                        <div class="requestcreate-inr__item-ttl">カメラ保有状況</div>
                        <div class="requestcreate-inr__item-cont">
                          <div class="form_part_select">
                            <select>
                              <option>選択してください</option>
                              <option value="Ezviz製のカメラをご自身で所有している">Ezviz製のカメラをご自身で所有している</option>
                              <option value="Ezviz製のカメラのレンタルを希望する" selected>Ezviz製のカメラのレンタルを希望する</option>
                              <option value="キッズパークからレンタル中（お手元にカメラがある）">キッズパークからレンタル中（お手元にカメラがある）</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <p class="c-txt__01">カメラはご登録のご自宅へ発送いたします。<br><span class="requestcreate-rental_ad_text">発送先</span>　東京都〇〇〇〇〇〇〇〇1-101</p>
                      <div class="requestcreate-inr__item_g_txt">
                        <p>・レンタル料は無料です。往復送料のみユーザー負担となります。<br>・往復料金は予約見積もりに合算されます。（往復送料に手数料はかかりません）<br>・発送後に予約がキャンセルされた場合、無料キャンセル期間であっても往復料金は請求させていただきます。</p>
                        <p>【返送に関して】<br>・レンタルカメラと一緒に返送用の伝票をお届けします。届いた時と同じ箱に入れて返送してください。<br>・依頼完了後7日以内に返送をお願いします。<br>・予約がキャンセルされた場合、キャンセル日から7日以内に返送してください。<br>・定期予約が1つでも稼働中の場合は、定期予約の最終日より7日以内に返送をお願いします。<br>　※返送期日は別途お知らせいたします。</p>
                      </div>
                      <div class="job-money">
                        <h3 class="job-money__ttl"><img src="~/assets/guardian/img/common/icon-yen.svg" alt="" width="17"> 見守り依頼・カメラレンタル料金</h3>
                        <div class="job-money__list">
                          <div class="job-money__list-item">
                            <div class="job-money__list-ttl">レンタル往復送料</div>
                            <div class="job-money__list-desc">1,760円</div>
                          </div>
                          <div class="job-money__list-item">
                            <div class="job-money__list-ttl">見守り依頼料</div>
                            <div class="job-money__list-desc">300円</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="form-check__item">
                    <input type="radio" name="rental" id="rental03" value="ご自宅">
                    <label for="rental03" class="form-edit__radio_02">
                      <span class="checkmark"></span>カメラのレンタルのみ申請する</label>
                  </li>
                </ul>
              </div>
              <!-- ↓見守り依頼不可↓ -->
              <div class="requestcreate-box_ttl">見守り依頼・カメラレンタル申請</div>
              <div class="requestcreate-box_cont">
                <p class="c-txt__01">見守り依頼は、EZVIZ 製のカメラを保有しているユーザーのみ依頼が可能です。EZVIZ 製のカメラをお持ちでない場合は、キッズパークからレンタルまたは購入も可能です。詳しくはこちらをご確認ください。</p>
                <span class="c-btn__02 mbsp-21">見守り対応時間外のため、今回の依頼では見守り依頼できません。</span>
                <ul class="form_block">
                  <li class="form-check__item">
                    <input type="radio" name="rental2" id="rental21" checked="checked" value="見守りを依頼しない または ご自身でカメラを設置しているので見守りは不要">
                    <label for="rental21" class="form-edit__radio_02">
                      <span class="checkmark"></span>見守りを依頼しない または ご自身でカメラを設置しているので見守りは不要</label>
                  </li>
                  <li class="form-check__item">
                  <span class="radio_disabled">
                    <input type="radio" name="rental2" id="rental22" value="見守りを依頼する（カメラレンタルも同時に申請可）">
                    <label for="rental22" class="form-edit__radio_02">
                      <span class="checkmark"></span>見守りを依頼する（カメラレンタルも同時に申請可）</label>
                  </span>
                  </li>
                  <li class="form-check__item">
                    <input type="radio" name="rental2" id="rental23" value="カメラのレンタルのみ申請する">
                    <label for="rental23" class="form-edit__radio_02">
                      <span class="checkmark"></span>カメラのレンタルのみ申請する</label>
                  </li>
                </ul>
              </div>
              <!-- ↓見守り・レンタル依頼不可↓ -->
              <div class="requestcreate-box_ttl">見守り依頼・カメラレンタル申請</div>
              <div class="requestcreate-box_cont">
                <p class="c-txt__01">見守り依頼は、EZVIZ 製のカメラを保有しているユーザーのみ依頼が可能です。EZVIZ 製のカメラをお持ちでない場合は、キッズパークからレンタルまたは購入も可能です。詳しくはこちらをご確認ください。</p>
                <span class="c-btn__02 mbsp-21">見守り対応時間外のため、今回の依頼では見守り依頼できません。<br>予約希望日まで7日を切っているため、今回の依頼ではレンタルに対応できません。</span>
                <ul class="form_block">
                  <li class="form-check__item">
                    <input type="radio" name="rental3" id="rental31" checked="checked" value="見守りを依頼しない または ご自身でカメラを設置しているので見守りは不要">
                    <label for="rental31" class="form-edit__radio_02">
                      <span class="checkmark"></span>見守りを依頼しない または ご自身でカメラを設置しているので見守りは不要</label>
                  </li>
                  <li class="form-check__item">
                    <span class="radio_disabled">
                      <input type="radio" name="rental3" id="rental32" value="見守りを依頼する（カメラレンタルも同時に申請可）">
                      <label for="rental32" class="form-edit__radio_02">
                        <span class="checkmark"></span>見守りを依頼する（カメラレンタルも同時に申請可）</label>
                    </span>
                  </li>
                  <li class="form-check__item">
                    <span class="radio_disabled">
                      <input type="radio" name="rental3" id="rental33" value="カメラのレンタルのみ申請する">
                      <label for="rental33" class="form-edit__radio_02">
                        <span class="checkmark"></span>カメラのレンタルのみ申請する</label>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="request-note">
              <h3 class="c-ttl__02 mbpc-10">仮決済について</h3>
              <p class="c-txt__01">キッズパークでは予約を確定する前に仮決済が行われます。クレジットカードでの仮払いは与信枠の確保となるため、仮決済をおこなった時点では決済は確定せず請求もおこなわれません。実際の請求はお仕事が完了してのお支払い後となります。<br>
              </p>
            </div>
            <NuxtLink to="/guardian/reservation-detail/booking-detail/create-a-request" class="btn_entry mw-335">確認ページへ</NuxtLink>
          </div>
          <aside class="l-content__02-r">
            <guardian-right-menu :useUserInfo="false" step-active="1" />
            <div class="questions-box">
              <h3 class="questions-box__ttl">
                <img src="~/assets/guardian/img/common/questions-icon.svg" alt="icon" width="26"> よくある質問
              </h3>
              <ul class="questions-box__list">
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/request/177/" target="_blank">予約リクエストの作成方法</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/request-2/180/" target="_blank">予約リクエストの内容変更、依頼取り消しについて</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/flow-2/183/" target="_blank">サポート開始までの流れ</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/camera-2/212/" target="_blank">見守り依頼とは</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/camera-3/218/" target="_blank">見守り依頼で使用できるカメラ</a></li>
                <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/camera-4/220/" target="_blank">見守りカメラをレンタル・購入したい</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
<script>

import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";
import {showScheduleMixin} from "@/mixins/showScheduleMixin";

export default {
  components: { GuardianRightMenu },
  layout: 'guardian',
  mixins: [showScheduleMixin],
  mounted() {
    this.showSchedule();
  }
}
</script>

<style scoped>
  #page-U061 .js-show-acc {
    position: relative;
  }
  #page-U061 .js-show-acc:after {
    pointer-events: none;
    content: "";
    width: 7px;
    height: 7px;
    border-right: 2px solid #464646;
    border-bottom: 2px solid #464646;
    position: absolute;
    top: 46%;
    right: 14px;
    z-index: 3;
    -webkit-transform: rotate(-45deg) translateY(-50%);
    -ms-transform: rotate(-45deg) translateY(-50%);
    transform: rotate(-45deg) translateY(-50%);
    -webkit-transition: -webkit-transform 0.3s ease-in;
    transition: -webkit-transform 0.3s ease-in;
    -o-transition: transform 0.3s ease-in;
    transition: transform 0.3s ease-in;
    transition: transform 0.3s ease-in, -webkit-transform 0.3s ease-in;
  }
  #page-U061 .js-show-acc.on:after {
    -webkit-transform: rotate(45deg) translateY(-50%);
    -ms-transform: rotate(45deg) translateY(-50%);
    transform: rotate(45deg) translateY(-50%);
  }
</style>
