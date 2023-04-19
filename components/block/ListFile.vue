<template>
  <div>
    <div class="job-infor__listfile js-add-wrap mbpc-16 mbsp-16">
      <div class="job-infor__listfile-item job-infor__listfile-item--add js-add-input-item">
        <div class="job-infor__listfile-thumbnail form-fileimg">
          <label for="upload-photo01" class="lb-file"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
														<span class="job-infor__listfile-imguse--thumb">
															<img src="@/assets/supporter/img/p051-2/img-02.png" alt="img" class="js-imgfile">
														</span>
													</span>
            <input type="file" name="photo" id="upload-photo01" class="js_uploadfile checkbt" width="408">
          </label>
          <div class="form-remove js-remove">削除</div>
        </div>
      </div>
    </div>
    <div class="job-infor__listfile">
      <div class="job-infor__listfile js-add-wrapwp">
        <div class="job-infor__listfile-item job-infor__listfile-item--add js-add-wrapwpsub js-add-input-item">
          <div class="job-infor__listfile-thumbnail form-fileimg">
            <label for="upload-photo03" class="lb-file"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
															<span class="job-infor__listfile-imguse--thumb">
																<img src="@/assets/supporter/img/p051-2/img-02.png" alt="img" class="js-imgfile">
															</span>
														</span>
              <input type="file" name="photo" id="upload-photo03" class="js_uploadfile checkbt">
            </label>
            <div class="form-remove js-remove">削除</div>
          </div>
        </div>
      </div>
      <div class="form-add js-add-file02sub">写真を追加する</div>
      <div class="js-addbox" style="display: none">
        <div class="job-infor__listfile-item job-infor__listfile-item--add js-add-wrapwpsub js-add-input-item">
          <div class="job-infor__listfile-thumbnail form-fileimg">
            <label class="lb-file"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
															<span class="job-infor__listfile-imguse--thumb">
																<img src="@/assets/supporter/img/p051-2/img-02.png" alt="img" class="js-imgfile">
															</span>
														</span>
              <input type="file" name="photo" id="upload-photo04" class="js_uploadfile checkbt">
            </label>
            <div class="form-remove js-remove">削除</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListFile",
};
</script>

<style scoped>

</style>
