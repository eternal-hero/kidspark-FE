<template>
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
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td>
            <input type="radio" name="schedule" id="schedule2" value="2">
            <label for="schedule2">
              <div class="m-schedule__table-day">2</div>
              <span class="m-schedule__table-img">
														<img src="@/assets/guardian/img/common/img-tripleangle.png" alt="tripleangle">
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
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td>
            <input type="radio" name="schedule" id="schedule5" value="5">
            <label for="schedule5">
              <div class="m-schedule__table-day">5</div>
              <span class="m-schedule__table-img">
														<img src="@/assets/guardian/img/common/img-tripleangle.png" alt="Close">
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
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td>
            <input type="radio" name="schedule" id="schedule9" value="9">
            <label for="schedule9">
              <div class="m-schedule__table-day">9</div>
              <span class="m-schedule__table-img">
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td>
            <input type="radio" name="schedule" id="schedule10" value="10">
            <label for="schedule10">
              <div class="m-schedule__table-day">10</div>
              <span class="m-schedule__table-img">
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td>
            <input type="radio" name="schedule" id="schedule11" value="11">
            <label for="schedule11">
              <div class="m-schedule__table-day">11</div>
              <span class="m-schedule__table-img">
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td>
            <input type="radio" name="schedule" id="schedule12" value="12">
            <label for="schedule12">
              <div class="m-schedule__table-day">12</div>
              <span class="m-schedule__table-img">
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
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
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td>
            <input type="radio" name="schedule" id="schedule16" value="16">
            <label for="schedule16">
              <div class="m-schedule__table-day">16</div>
              <span class="m-schedule__table-img">
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td>
            <input type="radio" name="schedule" id="schedule17" value="17">
            <label for="schedule17">
              <div class="m-schedule__table-day">17</div>
              <span class="m-schedule__table-img">
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td>
            <input type="radio" name="schedule" id="schedule18" value="18">
            <label for="schedule18">
              <div class="m-schedule__table-day">18</div>
              <span class="m-schedule__table-img">
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
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
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td>
            <input type="radio" name="schedule" id="schedule23" value="23" checked>
            <label for="schedule23">
              <div class="m-schedule__table-day">23</div>
              <span class="m-schedule__table-img">
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td>
            <input type="radio" name="schedule" id="schedule24" value="24">
            <label for="schedule24">
              <div class="m-schedule__table-day">24</div>
              <span class="m-schedule__table-img">
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td>
            <input type="radio" name="schedule" id="schedule25" value="25">
            <label for="schedule25">
              <div class="m-schedule__table-day">25</div>
              <span class="m-schedule__table-img">
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td>
            <input type="radio" name="schedule" id="schedule26" value="26">
            <label for="schedule26">
              <div class="m-schedule__table-day">26</div>
              <span class="m-schedule__table-img">
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
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
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td>
            <input type="radio" name="schedule" id="schedule30" value="30">
            <label for="schedule30">
              <div class="m-schedule__table-day">30</div>
              <span class="m-schedule__table-img">
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td>
            <input type="radio" name="schedule" id="schedule31" value="31">
            <label for="schedule31">
              <div class="m-schedule__table-day">31</div>
              <span class="m-schedule__table-img">
														<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
													</span>
            </label>
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
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
																<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
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
																<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
              </label>
            </td>
            <td>
              <input type="radio" name="time" id="time1200" value="1200">
              <label for="time1200">
                <div class="m-schedule__table-day">12:00</div>
                <span class="m-schedule__table-img">
																<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
              </label>
            </td>
            <td>
              <input type="radio" name="time" id="time1300" value="1300">
              <label for="time1300">
                <div class="m-schedule__table-day">13:00</div>
                <span class="m-schedule__table-img">
																<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
              </label>
            </td>
            <td>
              <input type="radio" name="time" id="time1400" value="1400">
              <label for="time1400">
                <div class="m-schedule__table-day">14:00</div>
                <span class="m-schedule__table-img">
																<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
              </label>
            </td>
            <td>
              <input type="radio" name="time" id="time1500" value="1500">
              <label for="time1500">
                <div class="m-schedule__table-day">15:00</div>
                <span class="m-schedule__table-img">
																<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
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
																<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
              </label>
            </td>
            <td>
              <input type="radio" name="time" id="time1700" value="1700">
              <label for="time1700">
                <div class="m-schedule__table-day">17:00</div>
                <span class="m-schedule__table-img">
																<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
              </label>
            </td>
            <td>
              <input type="radio" name="time" id="time1800" value="1800">
              <label for="time1800">
                <div class="m-schedule__table-day">18:00</div>
                <span class="m-schedule__table-img">
																<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
															</span>
              </label>
            </td>
            <td>
              <input type="radio" name="time" id="time1900" value="1900">
              <label for="time1900">
                <div class="m-schedule__table-day">19:00</div>
                <span class="m-schedule__table-img">
																<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
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
</template>

<script>
export default {
  name: "ExeoTableGuardianBookingCalendar"
}
</script>
