<template>
  <div>
    <div class="mbpc-24 mbsp-17">
      <p class="c-txt__01">運転免許証の住所が手書きの場合、名前が旧姓のままの場合は補助書類をアップロードしてください。</p>
    </div>
    <div class="support-ct__form-flex support-ct__form-flex--file">
      <div class="support-ct__form-img">
        <img id="blah" src="@/assets/supporter/img/p047/img-03.png" alt="ファイル">
        <button type="submit" class="c-btn__07 c-btn__07--red">削除</button>
      </div>
      <div class="support-ct__form-file">
        <label for="imgInp">PCからの<span>ファイル選択</span>、<br>またはドラッグ＆ドロップで添付できます。</label>
        <input type="file" name="photo" accept="image/*" id="imgInp">
        <div class="support-ct__form-desc">
          <div class="statuschips js-tooltip js-tooltip--right" data-tippy-content="<div class='inner-cap'>
											発行日から6ヶ月以内のものが有効です。<br>
											公共料金の領収書の名義は、ご本人さまのものをお送りください。<br>
											※カタカナ名義の補完書類はご利用できません<br>
											公共料金の領収書は、現住所と一致する住所記載があるものをご提出ください。
										</div>"><small>●補助書類としてご使用いただける書類</small></div>
          <span> 公共料金の領収書　※電力会社、水道局、ガス会社のいずれか<br> 国税または地方税の領収書<br> 納税証明書<br> 社会保険料の領収書 </span> ※アップロードいただけるファイル　jpg / jpeg / png / pdf<br> ※記載の住所が現住所と同じことを確認してください。<br> ※反射や影などで文字や画像が不鮮明な場合、お手続きができません。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoTableSupporterSupportingDocument"
}
</script>

<style scoped>

</style>
