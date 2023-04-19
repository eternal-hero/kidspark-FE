<template>
  <main id="page-P047" class="wrapper">
    <div class="main-content">
      <div class="inner">
        <h1 class="c-ttl__01 c-al--c">氏名・住所変更申請</h1>
        <div class="l-content">
          <form action="">
            <div class="l-content__body">
              <div class="quote-list">
                <div class="quote-list__item02">
                  <p class="c-txt__01 mbpc-17"> 氏名または住所を変更したい場合は、新しい氏名・住所が記載された新しい本人確認書類の提出が必要です。<br> 変更したい内容を下記からお選びください。 </p>
                  <ul class="form-check form-check--radio js-check-value form-check--03 js-tabcheckbox">
                    <li class="form-check__item">
                      <label class="form-edit__checkbox js-check">
                        <input type="radio" name="transportation" class="checks" value="1" v-model="mode">
                        <span class="checkmark"></span>氏名を変更したい </label>
                    </li>
                    <li class="form-check__item">
                      <label class="form-edit__checkbox js-check">
                        <input type="radio" name="transportation" class="checks" value="2" v-model="mode">
                        <span class="checkmark"></span>住所を変更したい </label>
                    </li>
                    <li class="form-check__item">
                      <label class="form-edit__checkbox js-check">
                        <input type="radio" name="transportation" class="checks" value="3" v-model="mode">
                        <span class="checkmark"></span>氏名・住所両方を変更したい </label>
                    </li>
                  </ul>
                </div>
                <div class="quote-list__w">
                  <div v-if="mode == 1">
                    <h2 class="quote-list__ttl mbpc-19 mbsp-18">新しい氏名を記入してください。</h2>
                    <hr class="hr sp mbsp-0">
                    <div class="request-form request-form--02">
                      <div class="request-form__item">
                        <div class="request-form__ttl">名前<span>※</span>
                        </div>
                        <div class="request-form__ct">
                          <ul class="input-samerow">
                            <li class="input-samerow__item">
                              <input type="text" class="form-edit__input" placeholder="（姓）佐藤">
                            </li>
                            <li class="input-samerow__item">
                              <input type="text" class="form-edit__input" placeholder="（名）花子">
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="request-form__item">
                        <div class="request-form__ttl">ふりがな<span>※</span>
                        </div>
                        <div class="request-form__ct">
                          <ul class="input-samerow">
                            <li class="input-samerow__item">
                              <input type="text" class="form-edit__input" placeholder="（せい）さとう">
                            </li>
                            <li class="input-samerow__item">
                              <input type="text" class="form-edit__input" placeholder="（めい）はなこ">
                            </li>
                          </ul>
                        </div>
                      </div>
                      <hr class="hr mbsp-0">
                    </div>
                    <h2 class="quote-list__ttl mbpc-19 mbsp-12">本人確認書類</h2>
                    <hr class="hr mbpc-15 mbsp-12">
                    <ExeoTableSupporterIdentityDocument></ExeoTableSupporterIdentityDocument>
                    <hr class="hr">
                    <h2 class="quote-list__ttl mbpc-19">補助書類のアップロード</h2>
                    <hr class="hr mbpc-15 pc">
                    <ExeoTableSupporterSupportingDocument></ExeoTableSupporterSupportingDocument>
                    <hr class="hr mbpc-30">
                    <div class="request-note">審査完了まで30分〜24時間ほどかかります。審査結果はメールにて通知されます。</div>
                    <div class="c-control--submit mw-500">
                      <a href="./P025.html" class="btn_back w155 w100-sp">もどる</a>
                      <a href="#" class="btn_entry">申請する</a>
                    </div>
                  </div>
                  <div v-if="mode == 2">
                    <h2 class="quote-list__ttl mbpc-19 mbsp-18">新しい住所を記入してください。</h2>
                    <hr class="hr sp mbsp-0">
                    <div class="request-form request-form--02 h-adr">
                      <span class="p-country-name" style="display:none;">Japan</span>
                      <div class="request-form__item">
                        <div class="request-form__ttl">郵便番号<span>※</span>
                        </div>
                        <div class="request-form__ct">
                          <div class="request-form__ct--zip">
                            <input type="text" class="p-postal-code form-edit__input" size="8" maxlength="8" placeholder="0123456">
                            <p>郵便番号を入力すると自動で住所が検索されます。</p>
                          </div>
                        </div>
                      </div>
                      <div class="request-form__item">
                        <div class="request-form__ttl">都道府県<span>※</span></div>
                        <div class="request-form__ct">
                          <div class="form_part_select form_part_select--216">
                            <select class="p-region-id">
                              <option value=""></option>
                              <option value="1">北海道</option>
                              <option value="2">青森県</option>
                              <option value="3">岩手県</option>
                              <option value="4">宮城県</option>
                              <option value="5">秋田県</option>
                              <option value="6">山形県</option>
                              <option value="7">福島県</option>
                              <option value="8">茨城県</option>
                              <option value="9">栃木県</option>
                              <option value="10">群馬県</option>
                              <option value="11">埼玉県</option>
                              <option value="12">千葉県</option>
                              <option value="13">東京都</option>
                              <option value="14">神奈川県</option>
                              <option value="15">新潟県</option>
                              <option value="16">富山県</option>
                              <option value="17">石川県</option>
                              <option value="18">福井県</option>
                              <option value="19">山梨県</option>
                              <option value="20">長野県</option>
                              <option value="21">岐阜県</option>
                              <option value="22">静岡県</option>
                              <option value="23">愛知県</option>
                              <option value="24">三重県</option>
                              <option value="25">滋賀県</option>
                              <option value="26">京都府</option>
                              <option value="27">大阪府</option>
                              <option value="28">兵庫県</option>
                              <option value="29">奈良県</option>
                              <option value="30">和歌山県</option>
                              <option value="31">鳥取県</option>
                              <option value="32">島根県</option>
                              <option value="33">岡山県</option>
                              <option value="34">広島県</option>
                              <option value="35">山口県</option>
                              <option value="36">徳島県</option>
                              <option value="37">香川県</option>
                              <option value="38">愛媛県</option>
                              <option value="39">高知県</option>
                              <option value="40">福岡県</option>
                              <option value="41">佐賀県</option>
                              <option value="42">長崎県</option>
                              <option value="43">熊本県</option>
                              <option value="44">大分県</option>
                              <option value="45">宮崎県</option>
                              <option value="46">鹿児島県</option>
                              <option value="47">沖縄県</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="request-form__item">
                        <div class="request-form__ttl">市区町村<span>※</span></div>
                        <div class="request-form__ct">
                          <input type="text" class="form-edit__input p-locality p-street-address p-extended-addresss">
                        </div>
                      </div>
                      <div class="request-form__item">
                        <div class="request-form__ttl">丁目・番地・号<span>※</span></div>
                        <div class="request-form__ct">
                          <input type="text" class="form-edit__input">
                        </div>
                      </div>
                      <div class="request-form__item">
                        <div class="request-form__ttl">建物名</div>
                        <div class="request-form__ct">
                          <input type="text" class="form-edit__input">
                        </div>
                      </div>
                    </div>
                    <h2 class="quote-list__ttl mbpc-19 mbsp-12">本人確認書類</h2>
                    <hr class="hr mbpc-15 mbsp-12">
                    <ExeoTableSupporterIdentityDocument></ExeoTableSupporterIdentityDocument>
                    <hr class="hr">
                    <h2 class="quote-list__ttl mbpc-19">補助書類のアップロード</h2>
                    <hr class="hr mbpc-15 pc">
                    <ExeoTableSupporterSupportingDocument></ExeoTableSupporterSupportingDocument>
                    <hr class="hr mbpc-30">
                    <div class="request-note">審査完了まで30分〜24時間ほどかかります。審査結果はメールにて通知されます。</div>
                    <div class="c-control--submit mw-500">
                      <a href="./P025.html" class="btn_back w155 w100-sp">もどる</a>
                      <a href="#" class="btn_entry">申請する</a>
                    </div>
                  </div>
                  <div v-if="mode == 3">
                    <h2 class="quote-list__ttl mbpc-19 mbsp-18">新しい氏名を記入してください。</h2>
                    <hr class="hr sp mbsp-0">
                    <div class="request-form request-form--02">
                      <div class="request-form__item">
                        <div class="request-form__ttl">名前<span>※</span>
                        </div>
                        <div class="request-form__ct">
                          <ul class="input-samerow">
                            <li class="input-samerow__item">
                              <input type="text" class="form-edit__input" placeholder="（姓）佐藤">
                            </li>
                            <li class="input-samerow__item">
                              <input type="text" class="form-edit__input" placeholder="（名）花子">
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="request-form__item">
                        <div class="request-form__ttl">ふりがな<span>※</span>
                        </div>
                        <div class="request-form__ct">
                          <ul class="input-samerow">
                            <li class="input-samerow__item">
                              <input type="text" class="form-edit__input" placeholder="（せい）さとう">
                            </li>
                            <li class="input-samerow__item">
                              <input type="text" class="form-edit__input" placeholder="（めい）はなこ">
                            </li>
                          </ul>
                        </div>
                      </div>
                      <hr class="hr mbsp-0">
                    </div>
                    <h2 class="quote-list__ttl mbpc-19 mbsp-18">新しい住所を記入してください。</h2>
                    <hr class="hr sp mbsp-0">
                    <div class="request-form request-form--02 h-adr">
                      <span class="p-country-name" style="display:none;">Japan</span>
                      <div class="request-form__item">
                        <div class="request-form__ttl">郵便番号<span>※</span>
                        </div>
                        <div class="request-form__ct">
                          <div class="request-form__ct--zip">
                            <input type="text" class="p-postal-code form-edit__input" size="8" maxlength="8" placeholder="0123456">
                            <p>郵便番号を入力すると自動で住所が検索されます。</p>
                          </div>
                        </div>
                      </div>
                      <div class="request-form__item">
                        <div class="request-form__ttl">都道府県<span>※</span></div>
                        <div class="request-form__ct">
                          <div class="form_part_select form_part_select--216">
                            <select class="p-region-id">
                              <option value=""></option>
                              <option value="1">北海道</option>
                              <option value="2">青森県</option>
                              <option value="3">岩手県</option>
                              <option value="4">宮城県</option>
                              <option value="5">秋田県</option>
                              <option value="6">山形県</option>
                              <option value="7">福島県</option>
                              <option value="8">茨城県</option>
                              <option value="9">栃木県</option>
                              <option value="10">群馬県</option>
                              <option value="11">埼玉県</option>
                              <option value="12">千葉県</option>
                              <option value="13">東京都</option>
                              <option value="14">神奈川県</option>
                              <option value="15">新潟県</option>
                              <option value="16">富山県</option>
                              <option value="17">石川県</option>
                              <option value="18">福井県</option>
                              <option value="19">山梨県</option>
                              <option value="20">長野県</option>
                              <option value="21">岐阜県</option>
                              <option value="22">静岡県</option>
                              <option value="23">愛知県</option>
                              <option value="24">三重県</option>
                              <option value="25">滋賀県</option>
                              <option value="26">京都府</option>
                              <option value="27">大阪府</option>
                              <option value="28">兵庫県</option>
                              <option value="29">奈良県</option>
                              <option value="30">和歌山県</option>
                              <option value="31">鳥取県</option>
                              <option value="32">島根県</option>
                              <option value="33">岡山県</option>
                              <option value="34">広島県</option>
                              <option value="35">山口県</option>
                              <option value="36">徳島県</option>
                              <option value="37">香川県</option>
                              <option value="38">愛媛県</option>
                              <option value="39">高知県</option>
                              <option value="40">福岡県</option>
                              <option value="41">佐賀県</option>
                              <option value="42">長崎県</option>
                              <option value="43">熊本県</option>
                              <option value="44">大分県</option>
                              <option value="45">宮崎県</option>
                              <option value="46">鹿児島県</option>
                              <option value="47">沖縄県</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="request-form__item">
                        <div class="request-form__ttl">市区町村<span>※</span></div>
                        <div class="request-form__ct">
                          <input type="text" class="form-edit__input p-locality p-street-address p-extended-addresss">
                        </div>
                      </div>
                      <div class="request-form__item">
                        <div class="request-form__ttl">丁目・番地・号<span>※</span></div>
                        <div class="request-form__ct">
                          <input type="text" class="form-edit__input">
                        </div>
                      </div>
                      <div class="request-form__item">
                        <div class="request-form__ttl">建物名</div>
                        <div class="request-form__ct">
                          <input type="text" class="form-edit__input">
                        </div>
                      </div>
                    </div>
                    <h2 class="quote-list__ttl mbpc-19 mbsp-12">本人確認書類</h2>
                    <hr class="hr mbpc-15 mbsp-12">
                    <ExeoTableSupporterIdentityDocument></ExeoTableSupporterIdentityDocument>
                    <hr class="hr">
                    <h2 class="quote-list__ttl mbpc-19">補助書類のアップロード</h2>
                    <hr class="hr mbpc-15 pc">
                    <ExeoTableSupporterSupportingDocument></ExeoTableSupporterSupportingDocument>
                    <hr class="hr mbpc-30">
                    <div class="request-note">審査完了まで30分〜24時間ほどかかります。審査結果はメールにて通知されます。</div>
                    <div class="c-control--submit mw-500">
                      <a href="./P025.html" class="btn_back w155 w100-sp">もどる</a>
                      <a href="#" class="btn_entry">申請する</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import ExeoTableSupporterIdentityDocument from "@/components/table/ExeoTableSupporterIdentityDocument";
import ExeoTableSupporterSupportingDocument from "@/components/table/ExeoTableSupporterSupportingDocument";

export default {
  layout: 'supporter',
  components: {
    ExeoTableSupporterIdentityDocument,
    ExeoTableSupporterSupportingDocument,
  },
  head() {
    return {
      title: '氏名・住所変更申請'
    }
  },
  data () {
    return {
      mode: 1,
    }
  }
}
</script>
