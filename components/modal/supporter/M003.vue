<template>
  <div class="modal-main" id="M003">
    <div class="modal-block">
      <span class="modal-block__close"></span>
      <h2 class="modal-block__ttl">一括入力する</h2>
      <div class="modal-ct">
        <div class="c-txt__01 modal-ct__desc"> 変更したい日付を複数選択して、時間や受入不可をまとめて入力していただけます。 </div>
        <div class="m-schedule__table m-schedule__table--modal">
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
                <ul class="m-schedule__table-time">
                  <li>09:00~12:00</li>
                </ul>
              </td>
              <td>
                <div class="m-schedule__table-day">2</div>
                <ul class="m-schedule__table-time">
                  <li>09:00~17:00</li>
                </ul>
              </td>
              <td>
                <div class="m-schedule__table-day">3</div>
                <button class="m-schedule__table-close">
                  <img src="~/assets/supporter/img/common/icn_close.png" alt="Close">
                </button>
              </td>
              <td>
                <div class="m-schedule__table-day">4</div>
                <ul class="m-schedule__table-time">
                  <li>09:00~19:00</li>
                </ul>
              </td>
              <td>
                <div class="m-schedule__table-day">5</div>
                <ul class="m-schedule__table-time">
                  <li>09:00~19:00</li>
                </ul>
              </td>
              <td>
                <div class="m-schedule__table-day">6</div>
                <button class="m-schedule__table-close">
                  <img src="~/assets/supporter/img/common/icn_close.png" alt="Close">
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="m-schedule__table-day">7</div>
                <button class="m-schedule__table-close">
                  <img src="~/assets/supporter/img/common/icn_close.png" alt="Close">
                </button>
              </td>
              <td>
                <div class="m-schedule__table-day">8</div>
                <ul class="m-schedule__table-time">
                  <li>09:00~12:00</li>
                </ul>
              </td>
              <td>
                <div class="m-schedule__table-day">9</div>
                <ul class="m-schedule__table-time">
                  <li>09:00~17:00</li>
                </ul>
              </td>
              <td class="event">
                <div class="m-schedule__table-day">10</div>
                <ul class="m-schedule__table-time">
                  <li>09:00~19:00</li>
                </ul>
              </td>
              <td class="event">
                <div class="m-schedule__table-day">11</div>
                <ul class="m-schedule__table-time">
                  <li>09:00~19:00</li>
                </ul>
              </td>
              <td>
                <div class="m-schedule__table-day">12</div>
                <ul class="m-schedule__table-time">
                  <li>09:00~19:00</li>
                </ul>
              </td>
              <td>
                <div class="m-schedule__table-day">13</div>
                <button class="m-schedule__table-close">
                  <img src="~/assets/supporter/img/common/icn_close.png" alt="Close">
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="m-schedule__table-day">14</div>
                <button class="m-schedule__table-close">
                  <img src="~/assets/supporter/img/common/icn_close.png" alt="Close">
                </button>
              </td>
              <td class="event">
                <div class="m-schedule__table-day">15</div>
                <ul class="m-schedule__table-time">
                  <li>09:00~12:00</li>
                </ul>
              </td>
              <td class="event">
                <div class="m-schedule__table-day">16</div>
                <button class="m-schedule__table-close">
                  <img src="~/assets/supporter/img/common/icn_close.png" alt="Close">
                </button>
              </td>
              <td>
                <div class="m-schedule__table-day">17</div>
                <button class="m-schedule__table-close">
                  <img src="~/assets/supporter/img/common/icn_close.png" alt="Close">
                </button>
              </td>
              <td>
                <div class="m-schedule__table-day">18</div>
                <p class="m-schedule__table-empty">未入力</p>
              </td>
              <td>
                <div class="m-schedule__table-day">19</div>
                <p class="m-schedule__table-empty">未入力</p>
              </td>
              <td>
                <div class="m-schedule__table-day">20</div>
                <button class="m-schedule__table-close">
                  <img src="~/assets/supporter/img/common/icn_close.png" alt="Close">
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="m-schedule__table-day">21</div>
                <button class="m-schedule__table-close">
                  <img src="~/assets/supporter/img/common/icn_close.png" alt="Close">
                </button>
              </td>
              <td>
                <div class="m-schedule__table-day">22</div>
                <ul class="m-schedule__table-time">
                  <li>09:00~12:00</li>
                </ul>
              </td>
              <td>
                <div class="m-schedule__table-day">23</div>
                <p class="m-schedule__table-empty">未入力</p>
              </td>
              <td>
                <div class="m-schedule__table-day">24</div>
                <p class="m-schedule__table-empty">未入力</p>
              </td>
              <td>
                <div class="m-schedule__table-day">25</div>
                <p class="m-schedule__table-empty">未入力</p>
              </td>
              <td>
                <div class="m-schedule__table-day">26</div>
                <p class="m-schedule__table-empty">未入力</p>
              </td>
              <td>
                <div class="m-schedule__table-day">27</div>
                <button class="m-schedule__table-close">
                  <img src="~/assets/supporter/img/common/icn_close.png" alt="Close">
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div class="m-schedule__table-day">28</div>
                <button class="m-schedule__table-close">
                  <img src="~/assets/supporter/img/common/icn_close.png" alt="Close">
                </button>
              </td>
              <td>
                <div class="m-schedule__table-day">29</div>
                <ul class="m-schedule__table-time">
                  <li>09:00~12:00</li>
                  <li>15:00~19:00</li>
                </ul>
              </td>
              <td>
                <div class="m-schedule__table-day">30</div>
                <p class="m-schedule__table-empty">未入力</p>
              </td>
              <td>
                <div class="m-schedule__table-day">31</div>
                <p class="m-schedule__table-empty">未入力</p>
              </td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div class="modal-ct__check">
          <ul class="form-check form-check--03">
            <li class="form-check__item">
              <label class="form-edit__checkbox">
                <input type="radio" class="checks" checked="checked" name="radio">
                <span class="checkmark"></span>時間を追加する </label>
            </li>
            <li class="form-check__item">
              <label class="form-edit__checkbox">
                <input type="radio" class="checks" name="radio">
                <span class="checkmark"></span><img src="~/assets/supporter/img/common/icn_close_02.png" alt="" width="11">受入不可 </label>
            </li>
          </ul>
        </div>
        <exeo-select-accept-time start_hour="12" end_hour="19"></exeo-select-accept-time>
        <div class="modal-ct__control">
          <button class="btn_entry">保存する</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import ExeoSelectAcceptTime from "@/components/action/ExeoSelectAcceptTime.vue";

export default {
  name: "M003",
  components: {ExeoSelectAcceptTime}
};

</script>

<style scoped>

</style>
