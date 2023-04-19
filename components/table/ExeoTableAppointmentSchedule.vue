<template>
  <div class="m-schedule__table m-schedule__table-appointment m-schedule__table--styles02">
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
        <td>
          <span class="m-schedule__table-close">
            <img src="~/assets/supporter/img/common/icn_close.png" alt="Close">
          </span>
        </td>
        <td>
          <ul class="m-schedule__table-time">
            <li>15:00~<span>19:00</span></li>
          </ul>
        </td>
        <td>
          <span class="m-schedule__table-close">
            <img src="~/assets/supporter/img/common/icn_close.png" alt="Close">
          </span>
        </td>
        <td>
          <ul class="m-schedule__table-time">
            <li>15:00~<span>19:00</span></li>
          </ul>
        </td>
        <td>
          <ul class="m-schedule__table-time">
            <li>15:00~<span>19:00</span></li>
          </ul>
        </td>
        <td>
          <ul class="m-schedule__table-time">
            <li>15:00~<span>19:00</span></li>
          </ul>
        </td>
        <td>
          <p class="m-schedule__table-empty">未入力</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'ExeoTableAppointmentSchedule',
}
</script>

<style scoped>

</style>
