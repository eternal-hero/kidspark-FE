<template>
  <div class="block-calendartime">
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
																	<img src="@/assets/guardian/img/common/img-tripleangle.png" alt="triple angle">
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
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td class="js-modal" data-modal="M007">
                        <div class="m-schedule__table-day">9</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td class="js-modal" data-modal="M007">
                        <div class="m-schedule__table-day">10</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td class="js-modal" data-modal="M007">
                        <div class="m-schedule__table-day">11</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td class="js-modal" data-modal="M007">
                        <div class="m-schedule__table-day">12</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
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
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td class="js-modal" data-modal="M007">
                        <div class="m-schedule__table-day">16</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td class="js-modal" data-modal="M007">
                        <div class="m-schedule__table-day">17</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td class="js-modal" data-modal="M007">
                        <div class="m-schedule__table-day">18</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
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
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td class="js-modal" data-modal="M007">
                        <div class="m-schedule__table-day">23</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td class="js-modal" data-modal="M007">
                        <div class="m-schedule__table-day">24</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
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
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td class="js-modal" data-modal="M007">
                        <div class="m-schedule__table-day">30</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td class="js-modal" data-modal="M007">
                        <div class="m-schedule__table-day">31</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </li>
              <li class="calendar-slider__item">
                <div class="m-schedule__table m-schedule__table--styles03">
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
																	<img src="@/assets/guardian/img/common/img-tripleangle.png" alt="triple angle">
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
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td>
                        <div class="m-schedule__table-day">9</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td>
                        <div class="m-schedule__table-day">10</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td>
                        <div class="m-schedule__table-day">11</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td>
                        <div class="m-schedule__table-day">12</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
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
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td>
                        <div class="m-schedule__table-day">16</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td>
                        <div class="m-schedule__table-day">17</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td>
                        <div class="m-schedule__table-day">18</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
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
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td>
                        <div class="m-schedule__table-day">23</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td>
                        <div class="m-schedule__table-day">24</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
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
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td>
                        <div class="m-schedule__table-day">30</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td>
                        <div class="m-schedule__table-day">31</div>
                        <span class="m-schedule__table-close">
																	<img src="@/assets/guardian/img/common/img-circle.png" alt="circle">
																</span>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </li>
            </ul>
          </div>
          <div class="m-tabs__content-item" data-tab-content="">
            <div class="m-schedule__table m-schedule__table--styles04">
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CalendarSlider',
}
</script>
<style scoped>
.slick-slide img {
  display: inline-block;
}
</style>
