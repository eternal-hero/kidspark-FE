<template>
  <div>
    <div class="mbpc-22">
      <p class="c-txt__01">必ず変更後の氏名や住所と同じものが記載された書類をご提出ください。</p>
    </div>
    <div class="request-form__ttl w100 mbpc-10 mbsp-10">本人確認書類の種類を選択<span>※</span></div>
    <div class="form_part_select form_part_select">
      <select class="js-check-name">
        <option value="運転免許証" selected="selected">運転免許証</option>
        <option value="健康保険証">健康保険証</option>
        <option value="マイナンバーカード">マイナンバーカード</option>
        <option value="住民基本台帳カード">住民基本台帳カード</option>
        <option value="在留カード">在留カード</option>
        <option value="住民票の写し">住民票の写し</option>
      </select>
    </div>
    <div class="file-option mbpc-30">
      <div class="item show" id="運転免許証">
        <div class="list-file">
          <div class="job-infor__listfile list-file__item">
            <div class="job-infor__listfile-item job-infor__listfile-item--add">
              <div class="job-infor__listfile-thumbnail form-fileimg">
                <label for="upload-photo01">
                  <small>表面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
																			<img src="@/assets/supporter/img/p047/img-01.png" alt="表面">
																		</span>
                </label>
                <input type="file" name="photo" id="upload-photo01">
              </div>
            </div>
          </div>
          <div class="job-infor__listfile list-file__item">
            <div class="job-infor__listfile-item job-infor__listfile-item--add">
              <div class="job-infor__listfile-thumbnail form-fileimg">
                <label for="upload-photo02">
                  <small>裏面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
																			<img src="@/assets/supporter/img/p047/img-02.png" alt="表面">
																		</span>
                </label>
                <input type="file" name="photo" id="upload-photo02">
              </div>
            </div>
          </div>
        </div>
        <div class="c-txt__04">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
      </div>
      <div class="item" id="健康保険証">
        <div class="list-file">
          <div class="job-infor__listfile list-file__item">
            <div class="job-infor__listfile-item job-infor__listfile-item--add">
              <div class="job-infor__listfile-thumbnail form-fileimg">
                <label for="upload-photo05">
                  <small>表面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
																			<img src="@/assets/supporter/img/p047/img-05.jpg" alt="住民基本台帳カード">
																		</span>
                </label>
                <input type="file" name="photo" id="upload-photo05">
              </div>
            </div>
          </div>
        </div>
        <div class="c-txt__04">※写真データを送信する際は、付箋などでオレンジ色の箇所(記号・番号・保険者番号・QRコード)を隠して写真撮影するか、スマートフォンで撮影した後に加工して該当箇所を隠してください。<br>※アップロードいただけるファイル　jpg / jpeg / gif / png<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
      </div>
      <div class="item" id="マイナンバーカード">
        <div class="list-file">
          <div class="job-infor__listfile list-file__item">
            <div class="job-infor__listfile-item job-infor__listfile-item--add">
              <div class="job-infor__listfile-thumbnail form-fileimg">
                <label for="upload-photo06"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
																			<img src="@/assets/supporter/img/p047/img-06.png" alt="マイナンバーカード">
																		</span>
                </label>
                <input type="file" name="photo" id="upload-photo06">
              </div>
            </div>
          </div>
        </div>
        <div class="c-txt__04">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
      </div>
      <div class="item" id="住民基本台帳カード">
        <div class="list-file">
          <div class="job-infor__listfile list-file__item">
            <div class="job-infor__listfile-item job-infor__listfile-item--add">
              <div class="job-infor__listfile-thumbnail form-fileimg">
                <label for="upload-photo03">
                  <small>表面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
																			<img src="@/assets/supporter/img/p047/img-07.png" alt="住民基本台帳カード">
																		</span>
                </label>
                <input type="file" name="photo" id="upload-photo03">
              </div>
            </div>
          </div>
          <div class="job-infor__listfile list-file__item">
            <div class="job-infor__listfile-item job-infor__listfile-item--add">
              <div class="job-infor__listfile-thumbnail form-fileimg">
                <label for="upload-photo04">
                  <small>裏面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
																			<img src="@/assets/supporter/img/p047/img-08.png" alt="住民基本台帳カード">
																		</span>
                </label>
                <input type="file" name="photo" id="upload-photo04">
              </div>
            </div>
          </div>
        </div>
        <div class="c-txt__04"> ※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br> ※記載の住所が現住所と同じことを確認してください。<br> ※反射や影などで文字や画像が不鮮明な場合、お手続きができません。 </div>
      </div>
      <div class="item" id="在留カード">
        <div class="list-file">
          <div class="job-infor__listfile list-file__item">
            <div class="job-infor__listfile-item job-infor__listfile-item--add">
              <div class="job-infor__listfile-thumbnail form-fileimg">
                <label for="upload-photo07"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
																			<img src="@/assets/supporter/img/p047/img-09.png" alt="在留カード">
																		</span>
                </label>
                <input type="file" name="photo" id="upload-photo07">
              </div>
            </div>
          </div>
          <div class="job-infor__listfile list-file__item">
            <div class="job-infor__listfile-item job-infor__listfile-item--add">
              <div class="job-infor__listfile-thumbnail form-fileimg">
                <label for="upload-photo08"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
																			<img src="@/assets/supporter/img/p047/img-10.png" alt="在留カード">
																		</span>
                </label>
                <input type="file" name="photo" id="upload-photo08">
              </div>
            </div>
          </div>
        </div>
        <div class="c-txt__04">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
      </div>
      <div class="item" id="住民票の写し">
        <div class="list-file">
          <div class="job-infor__listfile list-file__item">
            <div class="job-infor__listfile-item job-infor__listfile-item--add">
              <div class="job-infor__listfile-thumbnail form-fileimg">
                <label for="upload-photo09"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
																			<img src="@/assets/supporter/img/p047/img-11.png" alt="住民票の写し">
																		</span>
                </label>
                <input type="file" name="photo" id="upload-photo09">
              </div>
            </div>
          </div>
        </div>
        <div class="c-txt__04">※6ヶ月以内に発行されたもののみご利用いただけます。<br>※マイナンバー(個人番号)の記載がある場合は、該当箇所を付箋などで隠して写真撮影するか、スマートフォンで撮影した後に加工して該当箇所を隠してください。<br>※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExeoTableSupporterIdentityDocument"
}
</script>

<style scoped>

</style>
