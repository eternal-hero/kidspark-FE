<template>
<div class="wrapper">
  <main class="site_main">
    <h1 class="form_ttl_01">アカウント作成</h1>
    <div class="form_style registration">
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
          <li>
            <span><img src="@/assets/before-login/img/newuser/registration/form_list_file.png" alt=""></span>
            <span>本人確認<span>書類</span><br>アップ<span>ロード</span></span>
          </li>
          <li>
            <span><img src="@/assets/before-login/img/newuser/registration/form_list_completion.png" alt=""></span>
            <span>完了</span>
          </li>
        </ul>
      </div>
      <div class="form_style_inr_w610">
        <h1 class="form_ttl_02">基本情報入力</h1>
        <div class="form_txt_01">
          <p>メールアドレスの認証が完了しました。<br>続いてマイページの基本情報を記入してください。</p>
        </div>
        <p class="required_note"><span>※</span>必須項目</p>
        <form action="/" method="POST">

          <div class="form_part_w100p">
            <label class="form_label">名前<span class="required">※</span></label>
            <div class="col2_box">
              <input v-model="userInfo.last_name" type="text" name="sei" placeholder="（姓）佐藤">
              <input v-model="userInfo.first_name" type="text" name="mei" placeholder="（名）花子">
            </div>
          </div>

          <div class="form_part_w100p">
            <label class="form_label">ふりがな<span class="required">※</span></label>
            <div class="col2_box">
              <input v-model="userInfo.last_kana" type="text" name="kana_sei" placeholder="（せい）さとう">
              <input v-model="userInfo.first_kana" type="text" name="kana_mei" placeholder="（めい）はなこ">
            </div>
          </div>

          <div class="form_part_w100p">
            <label class="form_label">ニックネーム<span class="required">※</span></label>
            <input v-model="userInfo.nickname" type="text" name="nickname" placeholder="（例）花ママ">
          </div>

          <div class="form_part_w100p">
            <label class="form_label">性別<span class="required">※</span></label>
            <div class="radio_box">
              <label><input v-model="userInfo.gender" type="radio" value="0" name="gender"><span>女性</span></label>
              <label><input v-model="userInfo.gender" type="radio" value="1" name="gender"><span>男性</span></label>
            </div>
          </div>

          <div class="form_part_w100p">
            <label class="form_label">お子様との続柄<br><span class="form_note_txt">●ベビーシッターをご利用の場合は必ずご記入ください。</span></label>
            <input v-model="userInfo.relation" type="text" name="relationship" placeholder="（例）母">
          </div>

          <div class="form_part_w100p">
            <label class="form_label">生年月日<span class="required">※</span></label>
            <div class="form_part_date">
              <input v-model="userInfo.birthday" type="date" name="birthday" placeholder="日付を選択してください">
            </div>
          </div>

          <div class="form_part_w100p">
            <label class="form_label">郵便番号<span class="required">※</span><br><span class="form_note_txt">●郵便番号を入力すると自動で住所が検索されます。</span></label>
            <input v-model="userInfo.post_code" type="number" name="postal_code" minlength="7" maxlength="8" placeholder="0123456">
          </div>
          <div class="form_part_w100p">
            <label class="form_label">都道府県<span class="required">※</span></label>
            <div class="form_part_select">
              <select v-model="userInfo.prefecture" name="pref" id="pref">
                <optgroup label="北海道地方">
                    <option >北海道</option>
                  </optgroup>
                <optgroup label="東北地方">
                    <option >青森県</option>
                    <option >岩手県</option>
                    <option >宮城県</option>
                    <option >秋田県</option>
                    <option >山形県</option>
                    <option >福島県</option>
                  </optgroup>
                <optgroup label="関東地方">
                    <option >茨城県</option>
                    <option >栃木県</option>
                    <option >群馬県</option>
                    <option >埼玉県</option>
                    <option >千葉県</option>
                    <option >東京都</option>
                    <option >神奈川県</option>
                  </optgroup>
                <optgroup label="中部地方">
                    <option >新潟県</option>
                    <option >富山県</option>
                    <option >石川県</option>
                    <option >福井県</option>
                    <option >山梨県</option>
                    <option >長野県</option>
                    <option >岐阜県</option>
                    <option >静岡県</option>
                    <option >愛知県</option>
                    <option >三重県</option>
                  </optgroup>
                <optgroup label="近畿地方">
                    <option >滋賀県</option>
                    <option >京都府</option>
                    <option >大阪府</option>
                    <option >兵庫県</option>
                    <option >奈良県</option>
                    <option >和歌山県</option>
                  </optgroup>
                <optgroup label="中国地方">
                    <option >鳥取県</option>
                    <option >島根県</option>
                    <option >岡山県</option>
                    <option >広島県</option>
                    <option >山口県</option>
                  </optgroup>
                <optgroup label="四国地方">
                    <option >徳島県</option>
                    <option >香川県</option>
                    <option >愛媛県</option>
                    <option >高知県</option>
                  </optgroup>
                <optgroup label="九州・沖縄地方">
                    <option >福岡県</option>
                    <option >佐賀県</option>
                    <option >長崎県</option>
                    <option >熊本県</option>
                    <option >大分県</option>
                    <option >宮崎県</option>
                    <option >鹿児島県</option>
                    <option >沖縄県</option>
                  </optgroup>
              </select>
            </div>
          </div>
          <div class="form_part_w100p">
            <label class="form_label">市区町村<span class="required">※</span></label>
            <input v-model="userInfo.municipality" type="text" name="city">
          </div>

          <div class="form_part_w100p">
            <label class="form_label">丁目・番地・号<span class="required">※</span></label>
            <input v-model="userInfo.street_name" type="text" name="address1">
          </div>

          <div class="form_part_w100p">
            <label class="form_label">建物名</label>
            <input v-model="userInfo.building" type="text" name="address2">
          </div>

          <div class="form_part_w100p">
            <label class="form_label">連絡先電話番号<span class="required">※</span><br><span class="form_note_txt">●「– (ハイフン)」なしで入力してください。</span></label>
            <input v-model="userInfo.contact_phone_number" type="tel" name="tel" placeholder="（例）09012345678">
          </div>

          <div class="form_part_w100p">
            <label class="form_label">メールアドレス</label>
            <p>{{userInfo.mail_address}}</p>
          </div>

          <div class="form_part_w100p">
            <label class="form_label">パスワード<span class="required">※</span></label>
            <input v-model="userInfo.password" type="password" name="password1" placeholder="半角英数字 8文字以上20文字以内">
          </div>

          <div class="form_part_w100p password">
            <label class="form_label">パスワード(確認)<span class="required">※</span></label>
            <input v-model="userInfo.checkPassword" type="password" name="password2" placeholder="確認のため再度記入してください">
          </div>
          <p class="form_note_txt">マイページにログインする際に使用するパスワードです。<br>使用できる記号は「. (ドット)」「– (ハイフン)」「_ (アンダースコア)」です。</p>

          <div class="form_part_submit">
            <button @click.prevent="updateUserInfo" type="submit" class="btn_style_01">保存して次へすすむ</button>
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
  head() {
    return {
      title: 'アカウント作成'
    }
  },
  data() {
    return{
      userInfo:{
        first_name:"",
        last_name:"",
        first_kana:"",
        last_kana:"",
        nickname:"",
        gender:"",
        relation:"",
        birthday:"",
        post_code:"",
        prefecture:"",
        municipality:"",
        street_name:"",
        building:"",
        contact_phone_number:"",
        mail_address:"",
        password:"",
        checkPassword:"",
      }
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
  watch: {
    'userInfo.post_code': function(post_code) {
      let context = this
        new YubinBango.Core(post_code, function(address) {
            context.userInfo.prefecture  = address.region
            context.userInfo.municipality = address.locality
            context.userInfo.street_name   = address.street
        })
    }
  },
  methods: {
    confirmSave (event) {
      event.returnValue = "登録処理を最初からやり直していただく必要があります。よろしいですか？";
    },
    async updateUserInfo() {
      try{
        console.log(this.userInfo)
        if(this.userInfo.password !== this.userInfo.checkPassword){
          alert("確認用パスワードが間違っています")
          return
        }
        const authCode = this.$store.state.beforeLogin.guardian.authCode;
        const response = await GuardianService.updateUserInfo(this.userInfo,authCode);
        this.$router.push("/before-login/guardian/identity-verification");
      }
      catch(e){
        console.log(e);
        if(e.response.data.status.code == 400){
          alert("入力内容が誤っています。");
        }else{
          alert(e.response.data.status.message);
        }
      }
    }
  }
}
</script>
<style scoped>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
