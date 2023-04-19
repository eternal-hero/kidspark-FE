<template>
  <div class="col2_block_main">
    <h2 class="cmn-ttl-01 flex-box">プロフィール写真</h2>
    <div class="profile-form">
      <form>
        <dl class="profile-form__item">
          <dt class="profile-form__ttl">アイコン画像</dt>
          <div class="profile-form__img">
            <img :src="userIconSource" alt="写真がアップロードされていません" />
            <div class="flex-box f-jc-flex-end">
              <span class="btn_style_03" @click="removeUserIcon">削除</span>
            </div>
          </div>
          <dd class="profile-form__ct">
            <div
              class="profile-form__file add-form__file support-ct__form-file"
              @drop.prevent="dropIconImage($event)" @dragover="dragover"
            >
              <label for="upload-photo"
                >PCからの<span class="underline">ファイル選択</span
                >、またはドラッグ＆ドロップで添付できます。</label
              >
              <input
                type="file"
                name="user-icon"
                id="upload-photo"
                @change="onUserIconChange"
              />
            </div>
            <p class="tx-blue bold">
              ●ご自身の顔写真1枚　●予約や公開掲示板、メッセージ中のパークサポーターのみに公開されます
            </p>
            <p>※アップロードいただけるファイル　jpg / jpeg / png / heic</p>
            <p>
              ※
              撮影場所が暗すぎて顔が見えない、遠すぎる、後ろ姿や横顔である、過度な加工が施してある。ご自分以外の方が入り込んでいる場合、審査が通らない場合がございます。
            </p>
            <p>
              ※ご自身のアイコンとして使用されます。※加工写真はご遠慮ください
            </p>
          </dd>
        </dl>
        <dl class="profile-form__item">
          <dt class="profile-form__ttl">お子様と一緒の写真</dt>
          <div class="profile-form__img">
            <img
              :src="familyPhotoSource"
              alt="写真がアップロードされていません"
            />
            <div class="flex-box f-jc-flex-end">
              <span class="btn_style_03" @click="removeFamilyPhoto">削除</span>
            </div>
          </div>
          <dd class="profile-form__ct">
            <div
              class="profile-form__file add-form__file support-ct__form-file"
              @drop.prevent="dropFamilyPhotoImage($event)" @dragover="dragover"
            >
              <label for="upload-photo02"
                >PCからの<span class="underline">ファイル選択</span
                >、またはドラッグ＆ドロップで添付できます。</label
              >
              <input
                type="file"
                name="family-photo"
                id="upload-photo02"
                @change="onFamilyPhotoChange"
              />
            </div>
            <p class="tx-blue bold">
              ●お子様と一緒の写真1枚　●予約が確定されたときに、パークサポーターのみに公開されます
            </p>
            <p>※アップロードいただけるファイル　jpg / jpeg / png / heic</p>
            <p>
              ※
              撮影場所が暗すぎて顔が見えない、遠すぎる、後ろ姿や横顔である、過度な加工が施してある。ご自分以外の方が入り込んでいる場合、審査が通らない場合がございます。
            </p>
            <p>※必ずお子様と一緒に写った写真をアップロードしてください。</p>
            <p>※加工写真はご遠慮ください</p>
          </dd>
        </dl>
        <dl
          class="profile-form__item profile-form__add"
          v-for="(photo, index) in careLocationPhotoSource"
          :key="`care-location-${index}`"
        >
          <dt class="profile-form__ttl">
            {{ index === 0 ? "保育場所の写真" : "" }}
          </dt>
          <div class="profile-form__img">
            <img :src="photo" alt="写真がアップロードされていません" />
            <div class="flex-box f-jc-flex-end">
              <span class="btn_style_03" @click="removeCareLocationPhoto(index)"
                >削除</span
              >
            </div>
          </div>
          <dd class="profile-form__ct">
            <div
              class="profile-form__file add-form__file support-ct__form-file"
              @drop.prevent="dropCareLocationImage($event,index)" @dragover="dragover"
            >
              <label :for="`care-location-photo-${index}`">
                PCからの
                <span class="underline"> ファイル選択 </span
                >、またはドラッグ＆ドロップで添付できます。
              </label>
              <input
                type="file"
                :name="`care-location-photo-${index}`"
                :id="`care-location-photo-${index}`"
                @change="onCareLocationChange($event, index)"
              />
            </div>
            <p class="tx-blue bold">
              ●保育場所の写真1枚〜5枚　●予約が確定されたときに、パークサポーターのみに公開されます
            </p>
            <p>※アップロードいただけるファイル　jpg / jpeg / png / heic</p>
            <p>
              ※
              撮影場所が暗すぎて顔が見えない、遠すぎる、後ろ姿や横顔である、過度な加工が施してある。ご自分以外の方が入り込んでいる場合、審査が通らない場合がございます。
            </p>
          </dd>
        </dl>
        <div class="profile-form__control">
          <button class="btn_add" @click.prevent="addCareLocationPhoto">
            写真を追加する
          </button>
        </div>
      </form>
      <button class="btn_style_04" @click.prevent="submit">保存する</button>
    </div>
  </div>
</template>

<script>
import GuardianProfileImageService from "@/services/admin/guardian/GuardianProfileImageService";
export default {
  name: "ExeoImageEditForm",
  props: {
    apiformData: {},
  },
  data() {
    return {
      formData: {
        userIcon: "",
        familyPhoto: "",
        careLocationPhotos: [],
      },
      careLocation_remove_array: [],
      is_change: 0,
      submitData: [],
    };
  },
  methods: {
    removeUserIcon() {
      if (this.formData.userIcon.id !== "") {
        this.formData.userIcon.image_url = "";
        this.formData.userIcon.remove_ckeck = 1;
        this.is_change = 1;
      }
    },
    removeFamilyPhoto() {
      if (this.formData.familyPhoto.id !== "") {
        this.formData.familyPhoto.image_url = "";
        this.formData.familyPhoto.remove_ckeck = 1;
        this.is_change = 1;
      }
    },
    removeCareLocationPhoto(index) {
      if (this.formData.careLocationPhotos.length == 1) {
        if (this.formData.careLocationPhotos[index].id !== "") {
          this.formData.careLocationPhotos[index].image_url = "";
          this.formData.careLocationPhotos[index].remove_ckeck = 1;
          this.is_change = 1;
        }
      } else {
        this.careLocation_remove_array.push(
          this.formData.careLocationPhotos[index].id
        );
        this.formData.careLocationPhotos[index].image_url = "";
        this.formData.careLocationPhotos[index].remove_ckeck = 1;
        this.formData.careLocationPhotos.splice(index, 1);
        this.is_change = 1;
      }
    },

    addCareLocationPhoto() {
      if (this.formData.careLocationPhotos.length < 5) {
        let image = {
          id: "",
          guardian_user_id: this.$route.params.id,
          image_path: "",
          image_url: "",
          which_image: 3,
          is_examination: 0,
        };
        this.formData.careLocationPhotos.push(image);
      }
      this.is_change = 1;
    },

    onUserIconChange(e) {
      const file = e.target.files[0];
      this.formData.userIcon["file"] = file;
      this.formData.userIcon.image_url = URL.createObjectURL(file);
      this.formData.userIcon["update_ckeck"] = 1;
      this.is_change = 1;
    },
    onFamilyPhotoChange(e) {
      const file = e.target.files[0];
      this.formData.familyPhoto["file"] = file;
      this.formData.familyPhoto.image_url = URL.createObjectURL(file);
      this.formData.familyPhoto["update_ckeck"] = 1;
      e.target.value = e.target.defaultValue;
      this.is_change = 1;
    },
    onCareLocationChange(e, index) {
      const file = e.target.files[0];
      this.formData.careLocationPhotos[index]["file"] = file;
      this.formData.careLocationPhotos[index]["image_url"] =
        URL.createObjectURL(file);
      this.formData.careLocationPhotos[index]["update_ckeck"] = 1;
      e.target.value = e.target.defaultValue;
      this.is_change = 1;
    },

    async submit() {
      if (this.is_change == 1) {
        //1
        if (
          this.formData.userIcon.update_ckeck == 1 ||
          this.formData.userIcon.remove_ckeck == 1
        ) {
          if (this.formData.userIcon.image_url !== "") {
            this.formData.userIcon.image_path =
              await GuardianProfileImageService.uploadImage(
                this,
                this.$route.params.id,
                this.formData.userIcon.file
              );
          }
          const userIcon_data = {
            id: this.formData.userIcon.id,
            guardian_profiles_id: this.$route.params.id,
            image_path: this.formData.userIcon.image_path,
            image_url: this.formData.userIcon.image_url,
            which_image: this.formData.userIcon.which_image,
            is_examination: this.formData.userIcon.is_examination,
          };
          this.submitData.push(userIcon_data);
        }
        //1
        //2
        if (
          this.formData.familyPhoto.update_ckeck == 1 ||
          this.formData.familyPhoto.remove_ckeck == 1
        ) {
          if (this.formData.familyPhoto.image_url !== "") {
            this.formData.familyPhoto.image_path =
              await GuardianProfileImageService.uploadImage(
                this,
                this.$route.params.id,
                this.formData.familyPhoto.file
              );
          }
          const familyPhoto_data = {
            id: this.formData.familyPhoto.id,
            guardian_profiles_id: this.$route.params.id,
            image_path: this.formData.familyPhoto.image_path,
            image_url: this.formData.familyPhoto.image_url,
            which_image: this.formData.familyPhoto.which_image,
            is_examination: this.formData.familyPhoto.is_examination,
          };
          this.submitData.push(familyPhoto_data);
        }
        //2end

        //3start
        if (this.formData.careLocationPhotos.length !== 0) {
          for (const image_data of this.formData.careLocationPhotos) {
            if (image_data.update_ckeck == 1 || image_data.remove_ckeck == 1) {
              if (image_data.image_url !== "") {
                image_data.image_path =
                  await GuardianProfileImageService.uploadImage(
                    this,
                    this.$route.params.id,
                    image_data.file
                  );
              }
              const careLocationPhotos_data = {
                id: image_data.id,
                guardian_profiles_id: this.$route.params.id,
                image_path: image_data.image_path,
                image_url: image_data.image_url,
                which_image: image_data.which_image,
                is_examination: image_data.is_examination,
              };
              this.submitData.push(careLocationPhotos_data);
            }
          }
        }
        //3end
        this.$emit(
          "submit-image-form",
          this.submitData,
          this.careLocation_remove_array
        );
      } else {
        window.scrollTo({ top: 0 });
      }
    },
    dropIconImage(event) {
      event.preventDefault();
      const file = event.dataTransfer.items[0].getAsFile();
      if (file.type.includes('image')) {
        this.formData.userIcon["file"] = file;
        this.formData.userIcon.image_url = URL.createObjectURL(file);
        this.formData.userIcon["update_ckeck"] = 1;
        this.is_change = 1;

      }
    },
    dropFamilyPhotoImage(event) {
      event.preventDefault();
      const file = event.dataTransfer.items[0].getAsFile();
      if (file.type.includes('image')) {
        this.formData.familyPhoto["file"] = file;
        this.formData.familyPhoto.image_url = URL.createObjectURL(file);
        this.formData.familyPhoto["update_ckeck"] = 1;
        this.is_change = 1;
      }
    },
    dropCareLocationImage(event,index) {
      event.preventDefault();
      const file = event.dataTransfer.items[0].getAsFile();
      if (file.type.includes('image')) {
        this.formData.careLocationPhotos[index]["file"] = file;
        this.formData.careLocationPhotos[index]["image_url"] = URL.createObjectURL(file);
        this.formData.careLocationPhotos[index]["update_ckeck"] = 1;
        this.is_change = 1;
      }
    },
    dragover(event) {
      event.preventDefault();
    },
  },

  created() {
    console.log(this.apiformData)
    if (this.apiformData.length !== 0) {
      this.apiformData.forEach((image_data) => {
        if (image_data.which_image == 1) {
          image_data["update_ckeck"] = 0;
          image_data["remove_ckeck"] = 0;
          image_data["image_url"] =
            process.env.BROWSER_API_URL + "/storage/" + image_data.image_path;
          this.formData.userIcon = { ...image_data };
        } else if (image_data.which_image == 2) {
          image_data["update_ckeck"] = 0;
          image_data["remove_ckeck"] = 0;
          image_data["image_url"] =
            process.env.BROWSER_API_URL + "/storage/" + image_data.image_path;
          this.formData.familyPhoto = { ...image_data };
        } else if (image_data.which_image == 3) {
          image_data["update_ckeck"] = 0;
          image_data["remove_ckeck"] = 0;
          image_data["image_url"] =
            process.env.BROWSER_API_URL + "/storage/" + image_data.image_path;
          this.formData.careLocationPhotos.push({ ...image_data });
        }
      });
      if (!this.formData.userIcon) {
        const data = {
          id: "",
          guardian_profiles_id: this.$route.params.id,
          image_path: "",
          image_url: "",
          which_image: 1,
          is_examination: 0,
        };
        this.formData.userIcon = data;
      }
      if (!this.formData.familyPhoto) {
        const data = {
          id: "",
          guardian_profiles_id: this.$route.params.id,
          image_path: "",
          image_url: "",
          which_image: 2,
          is_examination: 0,
        };
        this.formData.familyPhoto = data;
      }
      if (this.formData.careLocationPhotos.length == 0) {
        const data = {
          id: "",
          guardian_profiles_id: this.$route.params.id,
          image_path: "",
          image_url: "",
          which_image: 3,
          is_examination: 0,
        };
        this.formData.careLocationPhotos.push(data);
      }
    } else {
      const data = {
        id: "",
        guardian_profiles_id: this.$route.params.id,
        image_path: "",
        image_url: "",
        which_image: "",
        is_examination: 0,
      };
      this.formData.userIcon = { ...data };
      (this.formData.userIcon.which_image = 1),
        (this.formData.familyPhoto = { ...data });
      (this.formData.familyPhoto.which_image = 2),
        this.formData.careLocationPhotos.push(data);
      this.formData.careLocationPhotos[0].which_image = 3;
    }
  },
  computed: {
    userIconSource() {
      return (
        this.formData.userIcon.image_url ||
        require(`@/assets/admin/img/T031/img-01.png`)
      );
    },
    familyPhotoSource() {
      return (
        this.formData.familyPhoto.image_url ||
        require(`@/assets/admin/img/T031/img-02.png`)
      );
    },
    careLocationPhotoSource() {
      return this.formData.careLocationPhotos.map(function (e) {
        return e.image_url || require(`@/assets/admin/img/T031/img-03.png`);
      });
    },
  },
};
</script>

<style scoped></style>
