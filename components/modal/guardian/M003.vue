<template>
  <div class="modal-main" id="M003">
    <div class="modal-block credit">
      <span class="modal-block__close"></span>
      <h2 class="modal-block__ttl">クレジットカード登録</h2>
      <div class="modal-ct">
        <div class="c-txt__01 modal-ct__desc"> VISA、MasterCard、JCB、アメリカン・エキスプレス、ダイナースクラブがご利用になれます。 </div>
        <p class="modal-ct__credit_logo"><img src="~/assets/guardian/img/common/img-credit_logo.png" alt="icon" width="428"></p>

        <dl class="modao-dl">
          <dt><h3 class="modal-ct__ttl">カードの種類　<span class="c-fc--rd">※</span></h3></dt>
          <dd>
            <div class="form_part_select">
              <select>
                <option value="" selected="selected">選択してください</option>
              </select>
            </div>
          </dd>
        </dl>
        <dl class="modao-dl">
          <dt><h3 class="modal-ct__ttl">カード番号（ハイフンなし）　<span class="c-fc--rd">※</span></h3></dt>
          <dd>
            <input type="text" class="form-edit__input" placeholder="半角数字">
          </dd>
        </dl>
        <dl class="modao-dl">
          <dt><h3 class="modal-ct__ttl">有効期限（月／年）　<span class="c-fc--rd">※</span></h3></dt>
          <dd>
            <input type="text" name="expiry" placeholder="MM / YY" class="form-edit__input js-expiry" maxlength="5" pattern="^[a-zA-Z0-9]+$">
          </dd>
        </dl>
        <dl class="modao-dl">
          <dt><h3 class="modal-ct__ttl">名義人　<span class="c-fc--rd">※</span></h3></dt>
          <dd>
            <input type="text" class="form-edit__input" placeholder="（例）KIDS PARK">
          </dd>
        </dl>
        <dl class="modao-dl">
          <dt><h3 class="modal-ct__ttl">セキュリティーコード　<span class="c-fc--rd">※</span></h3></dt>
          <dd>
            <input type="text" class="form-edit__input" placeholder="半角数字3〜4桁">
          </dd>
        </dl>
        <div class="modal-ct__control">
          <button class="btn_entry">保存する</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "M003",
};

</script>

<style scoped>

</style>
