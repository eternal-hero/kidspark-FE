<template>
  <div>
    <table class="tb-transfer c-txt__01">
      <tr>
        <th>振込金額</th>
        <th>三菱UFJ銀行</th>
        <th>その他の銀行</th>
      </tr>
      <tr>
        <td> 3万円未満</td>
        <td> 0円</td>
        <td> 154円</td>
      </tr>
      <tr>
        <td> 3万円以上</td>
        <td> 0円</td>
        <td> 220円</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'ExeoTableSupporterTransfer',
}
</script>
