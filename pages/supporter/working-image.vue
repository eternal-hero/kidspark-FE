<template>
  <main id="page-P029" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="#">マイページ</a><span class="current">アカウント設定</span>
      </div>
    </div>
    <div class="main-content page-account-setting">
      <div class="inner">
        <h1 class="c-ttl__01">アカウント設定</h1>
        <div class="nav-scroll">
          <ul class="m-subnav">
            <li class="m-subnav__item"><a href="./supporter/info">基本情報</a></li>
            <li class="m-subnav__item"><a href="./supporter/profile">共通プロフィール</a></li>
            <li class="m-subnav__item"><a href="./supporter/support-area">サポートエリア</a></li>
            <li class="m-subnav__item"><a href="./supporter/pre-interview">事前面談設定</a></li>
            <li class="m-subnav__item  is-active"><a href="./supporter/working-image">仕事中のイメージ写真</a></li>
            <li class="m-subnav__item"><a href="./supporter/license">保有資格</a></li>
          </ul>
        </div>
        <div v-if="status === 'success'" class="c-notyfication c-notyfication--primary">
          <div class="c-notyfication__icn">
            <img src="@/assets/supporter/img/common/icn_success.png" alt="Ico" width="24">
          </div>
          <div class="c-notyfication__ct">
            <div class="c-notyfication__ttl">送信しました</div>
          </div>
          <div class="c-notyfication__close js-close-notyfication" @click="status = ''"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
        </div>
        <div v-if="status === 'failed'" class="c-notyfication c-notyfication--danger">
          <div class="c-notyfication__icn">
            <img src="@/assets/supporter/img/common/icn_danger.png" alt="Ico" width="24">
          </div>
          <div class="c-notyfication__ct">
            <div class="c-notyfication__ttl">エラー通知</div>
            <div class="c-notyfication__desc">保存できませんでした。</div>
          </div>
          <div class="c-notyfication__close js-close-notyfication" @click="status = ''"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
        </div>
        <div class="l-content">
          <div class="l-content__body">
            <h2 class="c-ttl__02 mbpc-34">仕事中のイメージ写真</h2>
            <hr class="hr mbpc-38">
            <form method="post">
              <!-- アイコン画像 -->
              <div class="job-infor">
                <h3 class="job-infor__ttl">アイコン画像</h3>
                <div class="job-infor__txt">
                  <span>●ご自身の顔写真1枚　●パークサポーター詳細画面、予約、メッセージ中のユーザーに公開されます</span>
                  <span>●一度登録すると、次回以降の変更はプロフィール写真変更申請が必要ですのでご注意ください。</span> ※アップロードいただけるファイル　jpg /
                  jpeg / png / heic<br> ※アイコン画像は中央が丸く切り取られます。お顔が中央にある写真をアップロードしてください。<br> ※
                  撮影場所が暗すぎて顔が見えない、遠すぎる、後ろ姿や横顔である、過度な加工が施してある。ご自分以外の方が入り込んでいる場合、審査が通らない場合がございます。<br>
                  ※ご自身のアイコンとして使用されます。
                </div>
                <div class="job-infor__file job-infor__file--check" @drop.prevent="dropIcon($event)"
                     @dragover="dragover">
                  <div class="job-infor__file-img">
                    <label for="iconImage">
                      <input class="icon-input" accept="image/*" type="file" id="iconImage" @change="changeIcon" style="opacity: 0">
                      <img id="blah" :src="getImage(iconImage, require(`@/assets/supporter/img/p029/img_use.png`))"
                           alt="アイコン画像">
                    </label>
                  </div>
                  <div class="job-infor__file-link">
                    <a href="./P048.html">プロフィール写真変更申請をする</a>
                  </div>
                </div>
              </div>
              <!-- シッティング風景写真-->
              <div class="job-infor job-infor--borderno">
                <h3 class="job-infor__ttl">シッティング風景写真</h3>
                <div class="job-infor__txt">
                  <small>最大5枚まで登録いただけます。</small> ※アップロードいただけるファイル　jpg / jpeg / png / heic<br> ※
                  撮影場所が暗すぎる場合、審査が通らない場合がございます。<br>
                  ※ご自分以外の方が映っている場合、許可を取っていないものはアップロードをお控えください。<br> ※不適切な写真、または関連のない画像に関しては、非公開になる場合がございます。
                </div>
                <div class="job-infor__listfile">
                  <div class="job-infor__listfile js-add-wrap">
                    <div class="job-infor__listfile-item job-infor__listfile-item--add js-add-input-item"
                         v-for="(image, index) in sittingImages" :key="`sitting-image-${index}`">
                      <div class="job-infor__listfile-ttl">シッティング風景写真{{ String(index + 1).padStart(2, '0') }}</div>
                      <div class="job-infor__listfile-thumbnail form-fileimg"
                           @drop.prevent="dropSittingImage(index, $event)" @dragover="dragover">
                        <label>PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。
                          <div class="job-infor__listfile-imguse">
                            <img :src="getImage(image.image_path, require(`/assets/supporter/img/p029/img-01.png`))"
                                 alt="img">
                          </div>
                          <input type="file" name="photo" class="upload-photo" accept="image/*"
                                 @change="(event) => changeSittingImage(index, event)">
                        </label>
                        <div class="form-remove" @click="removeSittingImage(index)">削除</div>
                      </div>
                    </div>
                  </div>
                  <div class="form-add" @click="addSittingImage()" v-if="sittingImages.length < 5">写真を追加する</div>
                </div>
              </div>
              <!-- シッティング風景動画 -->
              <div class="job-infor">
                <h3 class="job-infor__ttl">シッティング風景動画</h3>
                <div class="job-infor__txt">
                  <small>1つの動画最大15秒まで登録いただけます。</small> ※アップロードいただけるファイル　mp4 / mov<br> ※
                  撮影場所が暗すぎる場合、審査が通らない場合がございます。<br>
                  ※ご自分以外の方が映っている場合、許可を取っていないものはアップロードをお控えください。<br> ※不適切な動画、または関連のない画像に関しては、非公開になる場合がございます。
                </div>
                <div class="job-infor__listfile">
                  <div class="job-infor__listfile-item js-add-input-item">
                    <div class="job-infor__listfile-ttl">シッティング風景動画</div>
                    <div class="job-infor__listfile-thumbnail form-fileimg" @drop.prevent="dropSittingVideo($event)"
                         @dragover="dragover">
                      <label for="upload-sitting-video" v-if="!sittingVideo.image_path">
                        PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。
                        <span class="job-infor__listfile-imguse">
                          <span class="pc">
                            <img :src="require(`@/assets/supporter/img/p029/img-02.png`)" alt="img">
                          </span>
                          <span class="sp">
                            <img width="121" :src="require(`@/assets/supporter/img/p029/img-02.png`)" alt="img">
                          </span>
                        </span>
                      </label>
                      <label for="upload-sitting-video" v-else>
                        <span>
                          <video width="320" height="240" controls :key="`sitting-video-${sittingVideo.image_path}`">
                            <source :src="getImage(sittingVideo.image_path)" type="video/mp4">
                          </video>
                        </span>
                      </label>
                      <input type="file" name="photo" id="upload-sitting-video" class="upload-photo"
                             accept="video/mp4,video/mov"
                             @change="changeSittingVideo">
                      <div class="form-remove" @click.prevent="removeSittingVideo">削除</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- 家事代行風景動画 -->
              <div class="job-infor job-infor--borderno">
                <h3 class="job-infor__ttl">家事代行風景写真</h3>
                <div class="job-infor__txt">
                  <small>最大5枚まで登録いただけます。</small> ※アップロードいただけるファイル　jpg / jpeg / png / heic<br> ※
                  撮影場所が暗すぎる場合、審査が通らない場合がございます。<br>
                  ※ご自分以外の方が映っている場合、許可を取っていないものはアップロードをお控えください。<br> ※不適切な写真、または関連のない画像に関しては、非公開になる場合がございます。
                </div>
                <div class="job-infor__listfile">
                  <div class="job-infor__listfile js-add-wrap02">
                    <div class="job-infor__listfile-item js-add-input-item02" v-for="(image, index) in houseworkImages"
                         :key="`house-work-${index}`">
                      <div class="job-infor__listfile-ttl">家事代行風景写真{{ String(index + 1).padStart(2, '0') }}
                      </div>
                      <div class="job-infor__listfile-thumbnail form-fileimg"
                           @drop.prevent="dropHouseworkImage(index, $event)" @dragover="dragover">
                        <label :for="`upload-housework-image-${index}`"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。
                          <span
                            class="job-infor__listfile-imguse">
                              <span class="pc"><img
                                :src="getImage(image.image_path, require(`/assets/supporter/img/p029/img-03.png`))"
                                alt="img"></span>
                              <span class="sp"><img width="203"
                                                    :src="getImage(image.image_path, require(`/assets/supporter/img/p029/img-03.png`))"
                                                    alt="img"></span>
                        </span>
                        </label>
                        <input type="file" name="photo" class="upload-photo" accept="image/*"
                               @change="(e) => changeHouseworkImage(index, e)" :id="`upload-housework-image-${index}`">
                        <div class="form-remove" @click="removeHouseworkImage(index)">削除</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="form-add" @click="addHouseworkImage()" v-if="houseworkImages.length < 5">写真を追加する</div>
              </div>
              <!-- 家事代行風景動画-->
              <div class="job-infor">
                <h3 class="job-infor__ttl">家事代行風景動画</h3>
                <div class="job-infor__txt">
                  <small>1つの動画最大15秒まで登録いただけます。</small> ※アップロードいただけるファイル　mp4 / mov<br> ※
                  撮影場所が暗すぎる場合、審査が通らない場合がございます。<br>
                  ※ご自分以外の方が映っている場合、許可を取っていないものはアップロードをお控えください。<br> ※不適切な動画、または関連のない画像に関しては、非公開になる場合がございます。
                </div>
                <div class="job-infor__listfile">
                  <div class="job-infor__listfile-item js-add-input-item">
                    <div class="job-infor__listfile-ttl">家事代行風景動画</div>
                    <div class="job-infor__listfile-thumbnail form-fileimg" @drop.prevent="dropHouseworkVideo($event)"
                         @dragover="dragover">
                      <label for="upload-housework-video" v-if="!houseworkVideo.image_path">
                        PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。
                        <span class="job-infor__listfile-imguse">
                            <span class="pc">
                              <img :src="require(`@/assets/supporter/img/p029/img-04.png`)" alt="img">
                            </span>
                            <span class="sp">
                              <img width="200" :src="require(`@/assets/supporter/img/p029/img-04.png`)" alt="img">
                            </span>
                          </span>
                      </label>
                      <label for="upload-housework-video" v-else>
                        <span>
                          <video width="320" height="240" controls :key="houseworkVideo.image_path">
                            <source :src="getImage(houseworkVideo.image_path)" type="video/mp4">
                          </video>
                        </span>
                      </label>
                      <input type="file" name="photo" id="upload-housework-video" class="upload-photo"
                             accept="video/mp4,video/mov"
                             @change="changeHouseworkVideo">
                      <div class="form-remove" @click.prevent="removeHouseworkVideo">削除</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="c-btn__control">
                <a class="btn_entry mw-260" @click.prevent="submit()">保存する</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {imageMixin} from "@/mixins/imageMixin";
import axios from "axios";
import InfoService from "@/services/supporter/InfoService";
import WorksImageService from "@/services/supporter/WorksImageService";

const emptySittingImage = {
  category: 0,
  display_status: 1,
  image_path: ''
}
const emptySittingVideo = {
  category: 1,
  display_status: 1,
  image_path: ''
}
const emptyHouseworkImage = {
  category: 2,
  display_status: 1,
  image_path: ''
}
const emptyHouseworkVideo = {
  category: 3,
  display_status: 1,
  image_path: ''
}
export default {
  layout: "supporter",
  head() {
    return {
      title: 'アカウント設定'
    }
  },
  mixins: [imageMixin],
  async asyncData(context) {
    const supporter = await InfoService.getInfo(context);
    const workImages = await WorksImageService.getImages(context);
    const sittingImages = workImages.filter(image => parseInt(image.category) === 0);
    const sittingVideos = workImages.filter(image => parseInt(image.category) === 1);
    const houseworkImages = workImages.filter(image => parseInt(image.category) === 2);
    const houseworkVideos = workImages.filter(image => parseInt(image.category) === 3);

    const sittingVideo = (sittingVideos.length > 0) ? sittingVideos[0] : {...emptySittingVideo};
    const houseworkVideo = (houseworkVideos.length > 0) ? houseworkVideos[0] : {...emptyHouseworkVideo};
    return {
      iconImage: supporter.supporter_profile_image?.image_path,
      sittingImages: sittingImages,
      sittingVideo: sittingVideo,
      houseworkImages: houseworkImages,
      houseworkVideo: houseworkVideo,
    }
  },
  data() {
    return {
      status: ''
    }
  },
  methods: {
    // アイコン
    changeIcon(e) {
      this.iconImage = URL.createObjectURL(e.target.files[0]);
      e.target.value = e.target.defaultValue;
    },
    dropIcon(event) {
      event.preventDefault();
      const file = event.dataTransfer.items[0].getAsFile();
      if (file.type.includes('image')) {
        this.iconImage = URL.createObjectURL(file);
      }
    },
    // シッティング風景写真
    addSittingImage() {
      this.sittingImages.push({...emptySittingImage});
    },
    removeSittingImage(index) {
      this.sittingImages.splice(index, 1);
    },
    changeSittingImage(index, e) {
      const file = e.target.files[0];
      this.$set(this.sittingImages, index, {...this.sittingImages[index], image_path: URL.createObjectURL(file)});
      e.target.value = e.target.defaultValue;
    },
    dropSittingImage(index, event) {
      event.preventDefault();
      const file = event.dataTransfer.items[0].getAsFile();
      if (file.type.includes('image')) {
        this.$set(this.sittingImages, index, {...this.sittingImages[index], image_path: URL.createObjectURL(file)});
      }
    },
    dragover(event) {
      event.preventDefault();
    },
    // シッティング風景動画
    changeSittingVideo(e) {
      const file = e.target.files[0];
      this.changeSittingVideoSource(file);
      e.target.value = e.target.defaultValue;
    },
    changeSittingVideoSource(file) {
      const vm = this;
      const MAX_DURATION = 15;
      if (file.type.includes('video')) {
        let video = document.createElement("video")
        video.src = URL.createObjectURL(file)
        video.ondurationchange = function () {
          if (this.duration < MAX_DURATION) {
            vm.sittingVideo.image_path = video.src;
          } else {
            alert("1つの動画最大15秒まで登録いただけます。");
            URL.revokeObjectURL(video.src);
          }
        }
      }
    },
    removeSittingVideo() {
      this.$set(this.sittingVideo, 'image_path', "");
    },
    dropSittingVideo(event) {
      event.preventDefault();
      const file = event.dataTransfer.items[0].getAsFile();
      this.changeSittingVideoSource(file);
      event.target.value = event.target.defaultValue;
    },
    // 家事代行風景写真
    addHouseworkImage() {
      this.houseworkImages.push({...emptyHouseworkImage});
    },
    removeHouseworkImage(index) {
      this.houseworkImages.splice(index, 1);
    },
    changeHouseworkImage(index, e) {
      const file = e.target.files[0];
      this.$set(this.houseworkImages, index, {...this.houseworkImages[index], image_path: URL.createObjectURL(file)});
      e.target.value = e.target.defaultValue;
    },
    dropHouseworkImage(index, event) {
      event.preventDefault();
      const file = event.dataTransfer.items[0].getAsFile();
      if (file.type.includes('image')) {
        this.$set(this.houseworkImages, index, {...this.houseworkImages[index], image_path: URL.createObjectURL(file)});
      }
    },
    // 家事代行風景動画
    removeHouseworkVideo() {
      this.$set(this.houseworkVideo, 'image_path', '');
    },
    changeHouseworkVideo(e) {
      const file = e.target.files[0];
      this.changeHouseworkVideoSource(file);
      e.target.value = e.target.defaultValue;
    },
    dropHouseworkVideo(event) {
      event.preventDefault();
      const file = event.dataTransfer.items[0].getAsFile();
      this.changeHouseworkVideoSource(file);
      event.target.value = event.target.defaultValue;
    },
    changeHouseworkVideoSource(file) {
      const vm = this;
      const MAX_DURATION = 15;
      if (file.type.includes('video')) {
        let video = document.createElement("video")
        video.src = URL.createObjectURL(file)
        video.ondurationchange = function () {
          if (this.duration < MAX_DURATION) {
            vm.houseworkVideo.image_path = video.src;
          } else {
            alert("1つの動画最大15秒まで登録いただけます。");
            URL.revokeObjectURL(video.src);
          }
        }
      }
    },
    async updateAvatar() {
      // アイコン
      let form = new FormData();
      if (this.isBlob(this.iconImage)) {
        const iconBlob = await fetch(this.iconImage).then(r => r.blob());
        form.append("avatar", iconBlob);
        const {image_path} = await InfoService.updateAvatar(this, form);
        this.iconImage = image_path;
      }
    },
    // フォーム
    async submit() {
      try {
        await this.updateAvatar();
        let workImages = [];
        // シッティング風景写真
        for (let i = 0; i < this.sittingImages.length; i++) {
          if (this.isBlob(this.sittingImages[i].image_path)) {
            const imageBlob = await fetch(this.sittingImages[i].image_path).then(r => r.blob());
            this.sittingImages[i].image_path = await WorksImageService.uploadFile(this, imageBlob);
          }
          workImages.push(this.sittingImages[i]);
        }
        // シッティング風景動画
        if (this.isBlob(this.sittingVideo.image_path)) {
          const videoBlob = await fetch(this.sittingVideo.image_path).then(r => r.blob());
          this.sittingVideo.image_path = await WorksImageService.uploadFile(this, videoBlob);
        }
        workImages.push(this.sittingVideo);
        // 家事代行風景写真
        for (let i = 0; i < this.houseworkImages.length; i++) {
          if (this.isBlob(this.houseworkImages[i].image_path)) {
            const imageBlob = await fetch(this.houseworkImages[i].image_path).then(r => r.blob());
            this.houseworkImages[i].image_path = await WorksImageService.uploadFile(this, imageBlob);
          }
          workImages.push(this.houseworkImages[i]);
        }
        // 家事代行風景動画
        if (this.isBlob(this.houseworkVideo.image_path)) {
          const videoBlob = await fetch(this.houseworkVideo.image_path).then(r => r.blob());
          this.houseworkVideo.image_path = await WorksImageService.uploadFile(this, videoBlob);
        }
        workImages.push(this.houseworkVideo);
        const data = await WorksImageService.saveWorkImages(this, workImages);
        console.log(data);
        this.sittingImages = data.filter(image => parseInt(image.category) === 0);
        this.sittingVideos = data.filter(image => parseInt(image.category) === 1);
        this.houseworkImages = data.filter(image => parseInt(image.category) === 2);
        this.houseworkVideos = data.filter(image => parseInt(image.category) === 3);
        this.status = 'success';
      } catch (e) {
        console.log(e);
        this.status = 'failed';
      }
      window.scrollTo({top: 0, behavior: 'smooth'});
    },
  },
}
</script>

<style scoped>
.upload-photo {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
.icon-input{
  position: absolute;
}
</style>
