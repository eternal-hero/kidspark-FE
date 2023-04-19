<template>
  <div class="col2_block_main">
    <div class="tableblock_scroll tableblock_scroll--small">
      <div class="support-ct profile-table">
        <h2 class="cmn-ttl-01">仕事中のイメージ写真詳細</h2>
        <div class="support-ct__form">
          <form>
            <dl class="support-ct__form-item">
              <dt class="support-ct__form-ttl">ステータス</dt>
              <dd class="support-ct__form-ct">
                <div class="support-ct__form-row">
                  <div class="tableform_select">
                    <exeo-select :options="$WORKS_IMAGE_STATUS" name="status" v-model="form.display_status"/>
                  </div>
                  <span
                    class="support-ct__form-note">※新しいプロフィール写真を「公開中」に変更した場合、以前のプロフィール写真は自動的に非公開となります。</span>
                </div>
              </dd>
            </dl>
            <dl class="support-ct__form-item">
              <dt class="support-ct__form-ttl">メモ</dt>
              <dd class="support-ct__form-ct">
                <div class="support-ct__form-textarea">
                  <textarea name="" id="" cols="30" rows="10" v-model="form.note"></textarea>
                  <span class="support-ct__form-note">※メモはパークサポーターには公開されません。</span>
                </div>
              </dd>
            </dl>
            <dl class="support-ct__form-item">
              <dt class="support-ct__form-ttl">カテゴリー</dt>
              <dd class="support-ct__form-ct">
                <div class="tableform_select">
                  <exeo-select :options="$WORKS_IMAGE_CATEGORY" name="category" v-model="form.category" @change="handleChange()"/>
                </div>
              </dd>
            </dl>
            <dl class="support-ct__form-item">
              <dt class="support-ct__form-ttl">ファイル</dt>
              <dd class="support-ct__form-ct">
                <div class="support-ct__form-flex">
                  <div class="support-ct__form-img" :class="{'on': showingVideo}">
										<span :class="showingVideo ? 'type-video' : 'type-img'">
                      <video controls :src="mediaSource()" v-if="showingVideo && form.image_path"></video>
											<img :src="mediaSource()" alt="カテゴリー" v-else-if="showingVideo && !form.image_path">
											<img :src="mediaSource()" alt="カテゴリー" v-else>
										</span>
                    <button type="submit" class="support-ct__form-delete" @click.prevent="removeMediaFile">削除</button>
                  </div>
                  <div class="support-ct__form-file">
                    <label @drop.prevent="dropImage($event)" @dragover="dragover" for="upload-photo">PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。</label>
                    <input type="file" name="photo" id="upload-photo" :src="mediaSource()" :accept="showingVideo ? '.mp4, .mov' : '.png, .jpg, .jpeg, .heic'" @change="onFileChange">
                    <p class="support-ct__form-desc" :class="{'on': showingVideo}">
                      <span class="type-img"> ※アップロードいただけるファイル　jpg / jpeg / png / heic<br> ※ 撮影場所が暗すぎる場合、審査が通らない場合がございます。<br> ※ご自分以外の方が映っている場合、許可を取っていないものはアップロードをお控えください。<br> ※不適切な写真、または関連のない画像に関しては、非公開になる場合がございます。 </span>
                      <span class="type-video"> ※アップロードいただけるファイル　mp4 / mov<br> ※ 撮影場所が暗すぎる場合、審査が通らない場合がございます。<br> ※ご自分以外の方が映っている場合、許可を取っていないものはアップロードをお控えください。<br> ※不適切な写真、または関連のない画像に関しては、非公開になる場合がございます。 </span>
                    </p>
                  </div>
                </div>
              </dd>
            </dl>
            <dl class="support-ct__form-item">
              <dt class="support-ct__form-ttl support-ct__form-ttl--02">最終更新日</dt>
              <dd class="support-ct__form-ct">
                <div class="support-ct__form-date"> {{
                    formatDatetime(workImage.updated_at)
                  }}<span>※保存後、自動で更新されます</span>
                </div>
              </dd>
            </dl>
            <button class="btn_style_04" @click.prevent="submit">保存する</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExeoSelect from '../action/ExeoSelect.vue';
import {datetimeMixin} from "@/mixins/datetimeMixin";
import {imageMixin} from "@/mixins/imageMixin";

export default {
  name: 'ExeoTableWorkingImageEdit',
  components: {
    ExeoSelect,
  },
  props: {
    workImage: {
      type: Object,
      required: true
    }
  },
  mixins: [datetimeMixin, imageMixin],
  data() {
    return {
      form: {},
      originalCategory: null,
      currentCategory: null
    }
  },
  created() {
    this.form = this.workImage;
    if(this.form.image_path === 'null' || this.form.image_path === null) {
      this.form.image_path = ''
    }
    this.originalCategory = (this.form.category == 1 || this.form.category == 3) ? 'video' : 'image'
    this.currentCategory = (this.form.category == 1 || this.form.category == 3) ? 'video' : 'image'
    if (this.form['image_path']) {
      this.mediaSource
    }
  },
  methods: {
    onFileChange(e) {
      this.currentCategory = this.originalCategory = (this.form.category == 1 || this.form.category == 3) ? 'video' : 'image'
      const file = e.target.files[0];
      this.form.image_path = URL.createObjectURL(file);
      e.target.value = e.target.defaultValue;
    },
    removeMediaFile() {
      this.form.image_path = "";
    },
    async submit() {
      let formToSubmit = new FormData();
      const fields = Object.keys(this.form);
      for (let i = 0; i < fields.length;i++) {
        formToSubmit.append(fields[i], this.form[fields[i]]);
      }
      if (this.form.image_path?.startsWith('blob:http')) {
        const imageBlob = await fetch(this.form.image_path).then(r => r.blob());
        formToSubmit.append('image', imageBlob);
      } else {
        formToSubmit.append('image_path', this.form.image_path);
      }
      this.$emit('submit', formToSubmit);
    },
    mediaSource() {
      const category = parseInt(this.form.category);
      if((category === 1 || category === 3)){
        if (this.form.image_path
          && (this.currentCategory === this.originalCategory)
        ) {
          return this.getImage(this.form.image_path);
        }
        else if (this.form.image_path){
          this.form.image_path = ''
          return
        } else if (!this.form.image_path) {
          return require("~/assets/admin/img/T010/img-03.jpg");
        }
      } else {
        if (this.form.image_path
          && (this.currentCategory === this.originalCategory)
        ) {
          return this.getImage(this.form.image_path);
        } else return require("~/assets/admin/img/T010/img-02.jpg")
      }
    },
    handleChange(){
      this.currentCategory = (this.form.category == 1 || this.form.category == 3) ? 'video' : 'image'
      this.form.image_path = '';
    },
    dropImage(event) {
      event.preventDefault();
      const file = event.dataTransfer.items[0].getAsFile();
      if (file.type.includes('image')) {
        this.form.image_path = URL.createObjectURL(file);
      }
    },
    dragover(event) {
      event.preventDefault();
    },
  },
  computed: {
    showingVideo() {
      const category = parseInt(this.form.category);
      return category === 1 || category === 3;
    },
  },

}

</script>
