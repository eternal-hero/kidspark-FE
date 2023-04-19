<template>
  <div class="message-form js-message-form">
    <form method="post" class="message-form__wp">
      <textarea cols="30" rows="10" class="message-form__textarea" placeholder="メッセージを入力する"></textarea>
      <div class="message-form__control">
        <div class="message-form__file">
          <input type="file">
        </div>
        <div class="message-form__submit">
          <button class="btn_entry">送信する</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "JobDetailAnswerForm",
}
</script>

<style scoped>

</style>
