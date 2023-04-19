<template>
<div class="wrapper">
  <main class="site_main">
    <h1 class="form_ttl_01">アカウント作成</h1>
    <div class="form_style upload">
      <div class="flowlist">
        <ul>
          <li class="on">
            <span><img src="@/assets/before-login/img/newuser/registration/form_list_check_on.png" alt=""></span>
            <span>アドレス<br class="smt">認証</span>
          </li>
          <li class="on">
            <span><img src="@/assets/before-login/img/newuser/registration/form_list_edit_on.png" alt=""></span>
            <span>基本情報<br class="smt">入力</span>
          </li>
          <li class="on">
            <span><img src="@/assets/before-login/img/newuser/registration/form_list_file_on.png" alt=""></span>
            <span>本人確認<span>書類</span><br>アップ<span>ロード</span></span>
          </li>
          <li>
            <span><img src="@/assets/before-login/img/newuser/registration/form_list_completion.png" alt=""></span>
            <span>完了</span>
          </li>
        </ul>
      </div>
      <div class="form_style_inr_w610">
        <h1 class="form_ttl_02">本人確認書類のアップロード</h1>
        <div class="form_txt_01">
          <p>お名前、住所、生年月日が確認できるものをご提出ください。</p>
        </div>

        <p class="required_note"><span>※</span>必須項目</p>
        <form action="/" method="POST">

          <div class="form_part_w100p">
            <label class="form_label">本人確認書類の種類を選択<span class="required">※</span></label>
            <div class="select_box">
              <select v-model="status" name="identity_verification" id="identity_verification">
                <option value="0">選択してください</option>
                <option value="1">免許証</option>
                <option value="2">健康保険証</option>
                <option value="3">マイナンバーカード</option>
                <option value="4">住民基本台帳カード</option>
                <option value="5">在留カード</option>
                <option value="6">住民票</option>
              </select>
            </div>
          </div>

          <div v-if="status == 1" class="upload_block active" id="driver_license">
            <div class="upload_box">
              <div class="upload_box_inr" @drop.prevent="dropFrontImage($event)" @dragover="dragover">
                <input @change="changeImage($event,1)" type="file" id="driver_license01">
                <p class="upload_ttl">表面</p>
                <p class="upload_txt smt">タップしてファイルを選択してください</p>
                <p class="upload_txt pc">PCからの<label for="driver_license01">ファイル選択</label>、またはドラッグ＆ドロップで添付できます。</p>
                <label for="driver_license01">
                  <img v-if="forntImageUrl == null" src="@/assets/before-login/img/newuser/registration/upload/driver_license01.png" alt="">
                  <img v-else :src="forntImageUrl" alt="">
                </label>
              </div>
            </div>

            <div class="upload_box">
              <div class="upload_box_inr" @drop.prevent="dropBackImage($event)" @dragover="dragover">
                <input @change="changeImage($event,2)" type="file" id="driver_license02">
                <p class="upload_ttl">裏面</p>
                <p class="upload_txt smt">タップしてファイルを選択してください</p>
                <p class="upload_txt pc">PCからの<label for="driver_license02">ファイル選択</label>、またはドラッグ＆ドロップで添付できます。</p>
                <label for="driver_license02">
                  <img v-if="backImageUrl == null" src="@/assets/before-login/img/newuser/registration/upload/driver_license02.png" alt="">
                  <img v-else :src="backImageUrl" alt="">
                </label>
              </div>
            </div>

            <ul class="upload_note_list">
              <li>アップロードいただけるファイル　jpg / jpeg / png / heic / pdf</li>
              <li>記載の住所が現住所と同じことを確認してください。</li>
              <li>反射や影などで文字や画像が不鮮明な場合、お手続きができません。</li>
            </ul>
          </div>

          <div v-else-if="status == 2" class="upload_block active" id="insurance_card">
            <div class="upload_box" >
              <div class="upload_box_inr" @drop.prevent="dropFrontImage($event)" @dragover="dragover">
                <input @change="changeImage($event,1)" type="file" id="insurance_card01">
                <p class="upload_ttl">表面</p>
                <p class="upload_txt smt">タップしてファイルを選択してください</p>
                <p class="upload_txt pc">PCからの<label for="insurance_card01">ファイル選択</label>、またはドラッグ＆ドロップで添付できます。</p>
                <label for="insurance_card01">
                  <img v-if="forntImageUrl == null" src="@/assets/before-login/img/newuser/registration/upload/insurance_card.png" alt="">
                  <img v-else :src="forntImageUrl" alt="">
                </label>
              </div>
            </div>

            <ul class="upload_note_list">
              <li class="warning">※写真データを送信する際は、付箋などでオレンジ色の箇所(記号・番号・保険者番号・QRコード)を隠して写真撮影するか、スマートフォンで撮影した後に加工して該当箇所を隠してください。</li>
              <li>アップロードいただけるファイル　jpg / jpeg / png / heic / pdf</li>
              <li>記載の住所が現住所と同じことを確認してください。</li>
              <li>反射や影などで文字や画像が不鮮明な場合、お手続きができません。</li>
            </ul>
          </div>

          <div v-else-if="status == 3" class="upload_block active" id="my_number_card">
            <div class="upload_box">
              <div class="upload_box_inr" @drop.prevent="dropFrontImage($event)" @dragover="dragover">
                <input @change="changeImage($event,2)" type="file" id="my_number_card01">
                <p class="upload_ttl">表面</p>
                <p class="upload_txt smt">タップしてファイルを選択してください</p>
                <p class="upload_txt pc">PCからの<label for="driver_license01">ファイル選択</label>、またはドラッグ＆ドロップで添付できます。</p>
                <label for="my_number_card01">
                  <img v-if="forntImageUrl == null" src="@/assets/before-login/img/newuser/registration/upload/my_number_card.png" alt="">
                  <img v-else :src="forntImageUrl" alt="">
                </label>
              </div>
            </div>

            <ul class="upload_note_list">
              <li>アップロードいただけるファイル　jpg / jpeg / png / heic / pdf</li>
              <li>記載の住所が現住所と同じことを確認してください。</li>
              <li>反射や影などで文字や画像が不鮮明な場合、お手続きができません。</li>
            </ul>
          </div>

          <div v-else-if="status == 4" class="upload_block active" id="basic_resident_registration_card">
            <div class="upload_box">
              <div class="upload_box_inr" @drop.prevent="dropFrontImage($event)" @dragover="dragover">
                <input @change="changeImage($event,1)" type="file" id="basic_resident_registration_card01">
                <p class="upload_ttl">表面</p>
                <p class="upload_txt smt">タップしてファイルを選択してください</p>
                <p class="upload_txt pc">PCからの<label for="driver_license01">ファイル選択</label>、またはドラッグ＆ドロップで添付できます。</p>
                <label for="basic_resident_registration_card01">
                  <img v-if="forntImageUrl == null" src="@/assets/before-login/img/newuser/registration/upload/basic_resident_registration_card01.png" alt="">
                  <img v-else :src="forntImageUrl" alt="">
                </label>
              </div>
            </div>
            <div class="upload_box">
              <div class="upload_box_inr" @drop.prevent="dropBackImage($event)" @dragover="dragover">
                <input @change="changeImage($event,2)" type="file" id="basic_resident_registration_card02">
                <p class="upload_ttl">裏面</p>
                <p class="upload_txt smt">タップしてファイルを選択してください</p>
                <p class="upload_txt pc">PCからの<label for="basic_resident_registration_card02">ファイル選択</label>、またはドラッグ＆ドロップで添付できます。</p>
                <label for="basic_resident_registration_card02">
                  <img v-if="backImageUrl == null" src="@/assets/before-login/img/newuser/registration/upload/basic_resident_registration_card02.png" alt="">
                  <img v-else :src="backImageUrl" alt="">
                </label>
              </div>
            </div>
            <ul class="upload_note_list">
              <li>アップロードいただけるファイル　jpg / jpeg / png / heic / pdf</li>
              <li>記載の住所が現住所と同じことを確認してください。</li>
              <li>反射や影などで文字や画像が不鮮明な場合、お手続きができません。</li>
            </ul>
          </div>

          <div v-else-if="status == 5" class="upload_block active" id="residence_card">
            <div class="upload_box">
              <div class="upload_box_inr" @drop.prevent="dropFrontImage($event)" @dragover="dragover">
                <input @change="changeImage($event,1)" type="file" id="residence_card01">
                <p class="upload_ttl">表面</p>
                <p class="upload_txt smt">タップしてファイルを選択してください</p>
                <p class="upload_txt pc">PCからの<label for="residence_card01">ファイル選択</label>、またはドラッグ＆ドロップで添付できます。</p>
                <label for="residence_card01">
                  <img v-if="forntImageUrl == null" src="@/assets/before-login/img/newuser/registration/upload/residence_card01.png" alt="">
                  <img v-else :src="forntImageUrl" alt="">
                </label>
              </div>
            </div>
            <div class="upload_box">
              <div class="upload_box_inr" @drop.prevent="dropBackImage($event)" @dragover="dragover">
                <input @change="changeImage($event,2)" type="file" id="residence_card02">
                <p class="upload_ttl">裏面</p>
                <p class="upload_txt smt">タップしてファイルを選択してください</p>
                <p class="upload_txt pc">PCからの<label for="residence_card02">ファイル選択</label>、またはドラッグ＆ドロップで添付できます。</p>
                <label for="residence_card02">
                  <img v-if="backImageUrl == null" src="@/assets/before-login/img/newuser/registration/upload/residence_card02.png" alt="">
                  <img v-else :src="backImageUrl" alt="">
                </label>
              </div>
            </div>
            <ul class="upload_note_list">
              <li>アップロードいただけるファイル　jpg / jpeg / png / heic / pdf</li>
              <li>記載の住所が現住所と同じことを確認してください。</li>
              <li>反射や影などで文字や画像が不鮮明な場合、お手続きができません。</li>
            </ul>
          </div>

          <div v-else-if="status == 6" class="upload_block active" id="certificate_of_residence">
            <div class="upload_box">
              <div class="upload_box_inr" @drop.prevent="dropFrontImage($event)" @dragover="dragover">
                <input @change="changeImage($event,1)" type="file" id="certificate_of_residence01">
                <p class="upload_ttl">表面</p>
                <p class="upload_txt smt">タップしてファイルを選択してください</p>
                <p class="upload_txt pc">PCからの<label for="certificate_of_residence01">ファイル選択</label>、またはドラッグ＆ドロップで添付できます。</p>
                <label for="certificate_of_residence01">
                  <img v-if="forntImageUrl == null" src="@/assets/before-login/img/newuser/registration/upload/certificate_of_residence.png" alt="">
                  <img v-else :src="forntImageUrl" alt="">
                </label>
              </div>
            </div>
            <ul class="upload_note_list">
              <li class="warning">6ヶ月以内に発行されたもののみご利用いただけます。</li>
              <li class="warning">マイナンバー(個人番号)の記載がある場合は、該当箇所を付箋などで隠して写真撮影するか、スマートフォンで撮影した後に加工して該当箇所を隠してください。</li>
              <li>アップロードいただけるファイル　jpg / jpeg / png / heic / pdf</li>
              <li>記載の住所が現住所と同じことを確認してください。</li>
              <li>反射や影などで文字や画像が不鮮明な場合、お手続きができません。</li>
            </ul>
          </div>

          <div v-if="status != 0" class="document_block active" id="document">
            <h2 class="form_ttl_02">補助書類のアップロード</h2>
            <div class="form_txt_01">
              <p v-if="status == 1" id="document_txt">運転免許証の住所が手書きの場合、名前が旧姓のままの場合は補助書類をご提出ください。</p>
              <p v-else-if="status == 2" id="document_txt">健康保険証の住所の記載がない場合（手書き不可）は補助書類をご提出ください。</p>
              <p v-else-if="status == 3" id="document_txt">マイナンバーの住所に相違がある場合は補助書類をご提出ください。</p>
              <p v-else-if="status == 4" id="document_txt">住民基本台帳の住所に相違がある場合は補助書類をご提出ください。</p>
              <p v-else-if="status == 5" id="document_txt">在留カードの住所に相違がある場合は補助書類をご提出ください。</p>
            </div>
            <div class="document_block_inr">
              <div class="document_block_img_wrap">
                <p class="document_block_img">
                    <img v-if="subImage.url == null" src="@/assets/before-login/img/newuser/registration/upload/icn_document.png" alt="">
                    <img class="sub_img" v-else :src="subImage.url">
                    <span v-if="subImage.url == null">ファイルがアップロードされていません</span>
                </p>
                <button @click.prevent="deleteImage" class="document_delete">削除</button>
              </div>
              <div class="document_block_txt_wrap">
                <div class="upload_box" @drop.prevent="dropSubImage($event)" @dragover="dragover">
                  <div class="upload_box_inr">
                    <input @change="changeImage($event,3)" type="file" id="my_number_card_sub">
                    <p class="upload_txt smt">タップしてファイルを選択してください</p>
                    <p class="upload_txt pc">PCからの<label for="my_number_card_sub">ファイル選択</label>、<br>またはドラッグ＆ドロップで添付できます。</p>
                  </div>
                </div>
                <h3 class="document_block_ttl">●補助書類としてご使用いただける書類<span class="icn_help">
                  <img src="@/assets/before-login/img/common/icn_help.png" alt="">
                  </span></h3>
                <ul class="document_list">
                  <li>公共料金の領収書　※電力会社、水道局、ガス会社のいずれか</li>
                  <li>国税または地方税の領収書</li>
                  <li>納税証明書</li>
                  <li>社会保険料の領収書</li>
                </ul>
                <ul class="upload_note_list">
                  <li>アップロードいただけるファイル　jpg / jpeg / png / heic / pdf</li>
                  <li>記載の住所が現住所と同じことを確認してください。</li>
                  <li>反射や影などで文字や画像が不鮮明な場合、お手続きができません。</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="privacy_block">
            <p>このフォームから送信される際は、株式会社エクシオジャパンの<a href="" target="_blank">「利用規約」「プライバシーポリシー」</a>をよくお読みいただきご同意の上で送信してください。ご同意頂けない場合、登録出来ません。</p>
            <div class="privacy_box">

              <div class="registration_checkbox">
                <input v-model="confirmation" type="checkbox" value="" id="checkbox01" checked="checked">
                <label for="checkbox01"><a href="" target="_blank">利用規約、プライバシーポリシー</a>に同意する</label>
              </div>
            </div>
          </div>
          <div class="btn_area">
            <button @click.prevent="prevPage" class="btn_style_back">もどる</button>
            <p class="form_part_submit">
              <button v-if="confirmation" @click.prevent="updateUserInfo" type="submit" class="btn_style_01">保存して次へすすむ</button>
              <button v-else disabled @click.prevent="updateUserInfo" type="submit" class="btn_style_01">保存して次へすすむ</button>
            </p>
          </div>
        </form>
      </div>
    </div>
  </main>
</div>

</template>
<script>
import GuardianService from "@/services/before-login/GuardianService";
export default {
  layout: 'before-login',
  head: {
    script: [
      { src: '/before-login/js/datepicker/jquery-ui.min.js', type: 'text/javascript', body: true },
      { src: '/before-login/js/datepicker/jquery.ui.datepicker-ja.min.js', type: 'text/javascript', body: true },
    ],
    title: "アカウント作成"
  },
  data() {
    return{
    status:0,
    mainFiles:[],
    forntImageUrl:null,
    backImageUrl:null,
    subImage: {
      url: null,
      file: null,
    },
    confirmation: false
    }
  },
  mounted () {
    window.addEventListener("beforeunload", this.confirmSave);
    this.userInfo = JSON.parse(JSON.stringify(this.$store.state.beforeLogin.guardian.tmpUserInfo));
    const store = this.$store.state.beforeLogin.guardian;
    if(store.registeredMailAddress == null || store.authCode == null){
      this.$router.push("/before-login/guardian/registration");
    }
  },
  destroyed () {
    window.removeEventListener("beforeunload", this.confirmSave);
  },
  watch:{
    status:function(){
      this.mainFiles = []
      this.subImage.file = null
      this.subImage.url = null
      this.forntImageUrl = null
      this.backImageUrl = null
    }
  },
  methods:{
    confirmSave (event) {
      event.returnValue = "登録処理を最初からやり直していただく必要があります。よろしいですか？";
    },
    changeImage(e,frontOrBack) {
      const file = e.target.files[0]
      if (file) {
          if (file.type == 'image/jpg' || file.type == 'image/jpeg' || file.type == 'image/png' || file.type == 'image/heic' || file.type == 'application/pdf') {
            if(frontOrBack == 1){
              this.mainFiles.push(file)
              this.forntImageUrl = URL.createObjectURL(file)
            }else if(frontOrBack == 2){
              this.mainFiles.push(file)
              this.backImageUrl = URL.createObjectURL(file)
            }else{
              this.subImage.file = file
              this.subImage.url = URL.createObjectURL(file)
            }
          }
      }
      e.target.value = ""
    },
    deleteImage() {
        this.subImage.url = null
        this.subImage.file = null
        console.log(this.subImage.url)
    },
    async updateUserInfo() {
      try{
        const authCode = this.$store.state.beforeLogin.guardian.authCode;
        const mailAddress = this.$store.state.beforeLogin.guardian.registeredMailAddress;
        console.log(this.mainFiles)
        let formData = new FormData();
        this.mainFiles.forEach((file, index) => {
          formData.append('main_files[' + index + ']', file)
        })
        formData.append('title',this.status - 1)
        formData.append('mail_address',mailAddress)
        if(this.file != null){
          formData.append('file',this.subImage.file)
        }
        const response = await GuardianService.storeIdentityVerification(mailAddress,authCode,formData);
        this.$router.push("/before-login/guardian/completion");
      }
      catch(e){
        console.log(e);
        if(e.response.data.status.code == 400){
          alert("入力内容が誤っています。");
        }else{
          alert(e.response.data.status.message);
        }
      }
    },
    prevPage(){
      this.$router.push("/before-login/guardian/user-info");
    },
    dropSubImage(event) {
      event.preventDefault();
      const file = event.dataTransfer.items[0].getAsFile();
      if (file.type.includes('image')) {
        this.$set(this.subImage, 'file', file)
        this.$set(this.subImage, 'url', URL.createObjectURL(file))
      }
    },
    dropFrontImage(event) {
      event.preventDefault();
      const file = event.dataTransfer.items[0].getAsFile();
      if (file.type.includes('image')) {
        this.mainFiles.push(file)
        this.forntImageUrl = URL.createObjectURL(file);
      }
    },
    dropBackImage(event) {
      event.preventDefault();
      const file = event.dataTransfer.items[0].getAsFile();
      if (file.type.includes('image')) {
        this.mainFiles.push(file)
        this.backImageUrl = URL.createObjectURL(file);
      }
    },
    dragover(event) {
      event.preventDefault();
    },
  }
}
</script>
<style scoped>
  @import url('~/assets/before-login/js/datepicker/jquery-ui.min.css');
.sub_img{
  height: auto;
  width: 100%;
}
</style>

