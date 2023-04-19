<template>
  <main id="page-U009" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><span class="current">その他の設定</span>
      </div>
    </div>
    <div class="main-content page-account-setting">
      <div class="inner">
        <h1 class="c-ttl__01">その他の設定</h1>
        <ul class="m-subnav job-menu mbsp-1">
          <li class="m-subnav__item is-active"><span>受取口座設定</span></li>
          <li class="m-subnav__item"><a href="./U009-2.html">パスワード設定</a></li>
          <li class="m-subnav__item"><a href="./U009-3.html">通知設定</a></li>
        </ul>
        <div class="l-content">
          <div class="l-content__body">
            <h2 class="c-ttl__02 mbpc-34">支払い方法設定</h2>
            <h2 class="quote-list__ttl">お支払いに使用するクレジットカード情報をご登録ください。</h2>
            <p class="c-txt__01 mbpc-24 mbsp-24">VISA、MasterCard、JCB、AmericanExpress、Discoverがご利用になれます。</p>
            <p class=" mbpc-40 mbsp-40"><img src="~/assets/guardian/img/common/img-credit_logo.png" alt="icon" width="428"></p>
            <hr class="hr mbpc-28 mbsp-20">
            <ul class="quote-list quote-list--02 ">
              <li class="quote-list__item quote-list__item--223">
                <div class="quote-list__fee-item">
                  <div class="quote-list__fee-ttl"> カードの種類 <small class="required">※</small>
                  </div>
                  <div class="quote-list__fee-ct">
                    <div class="quote-list__fee-wf">
                      <div class="quote-list__fee-wfoption">
                        <div class="quote-list__fee-wfct">
                          <div class="form_part_select w179">
                            <select>
                              <option disabled="disabled" selected="selected">選択してください</option>
                              <option value="">VISA</option>
                              <option value="">MasterCard</option>
                              <option value="">JCB</option>
                              <option value="">AmericanExpress</option>
                              <option value="">Discover</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="quote-list__item quote-list__item--223">
                <div class="quote-list__fee-item">
                  <div class="quote-list__fee-ttl">カード番号(ハイフンなし) <small class="required">※</small>
                  </div>
                  <div class="quote-list__fee-ct">
                    <input type="text" class="form-edit__input w186" placeholder="半角数字">
                  </div>
                </div>
              </li>
              <li class="quote-list__item quote-list__item--223">
                <div class="quote-list__fee-item">
                  <div class="quote-list__fee-ttl"> 有効期限(月／年) <small class="required">※</small>
                  </div>
                  <div class="quote-list__fee-ct">
                    <input type="text" name="expiry" placeholder="MM / YY" class="form-edit__input w186 js-expiry" maxlength="5" pattern="^[a-zA-Z0-9]+$">
                  </div>
                </div>
              </li>
              <li class="quote-list__item quote-list__item--223">
                <div class="quote-list__fee-item">
                  <div class="quote-list__fee-ttl"> 名義人 <small class="required">※</small>
                  </div>
                  <div class="quote-list__fee-ct">
                    <input type="text" class="form-edit__input w186" placeholder="（例）KIDS PARK">
                  </div>
                </div>
              </li>
              <li class="quote-list__item quote-list__item--223">
                <div class="quote-list__fee-item">
                  <div class="quote-list__fee-ttl"> セキュリティーコード <small class="required">※</small>
                  </div>
                  <div class="quote-list__fee-ct">
                    <input type="text" class="form-edit__input w400" placeholder="半角数字3〜4桁">
                  </div>
                </div>
              </li>
            </ul>
            <a class="btn_entry mw-335 mbpc-40 mbsp-40" href="">保存する</a>

            <h2 class="c-ttl__02 mbpc-34">受取口座設定</h2>
            <h2 class="quote-list__ttl">キャッシュバックを受け取る口座をご登録ください。</h2>
            <p class="c-txt__01 mbpc-24 mbsp-24">福利厚生の割引などをご利用の場合、キャッシュバックを受け取る口座の登録が必要です。</p>

            <div class="form-add js-show-acc mbpc-23 mbsp-23"><span class="add">受取口座を登録する</span><span class="delete">ー受取口座情報を<span>削除する</span></span></div>
            <div class="js-ct-acc">
              <hr class="hr  mbpc-28 mbsp-20">
              <ul class="quote-list quote-list--02 quote-list--03">
                <li class="quote-list__item">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 銀行名 <small class="required">※</small>
                    </div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__fee-wf">
                        <div class="quote-list__fee-wfoption">
                          <p class="quote-list__option-ttl">頭文字</p>
                          <div class="quote-list__fee-wfct">
                            <div class="form_part_select w179">
                              <select>
                                <option disabled="disabled">選択してください</option>
                                <option value="">あ</option>
                                <option value="">い</option>
                                <option value="">う</option>
                                <option value="">え</option>
                                <option value="">お</option>
                                <option value="">か</option>
                                <option value="">き</option>
                                <option value="">く</option>
                                <option value="">け</option>
                                <option value="">こ</option>
                                <option value="">さ</option>
                                <option value="">し</option>
                                <option value="">す</option>
                                <option value="">せ</option>
                                <option value="">そ</option>
                                <option value="">た</option>
                                <option value="">ち</option>
                                <option value="">つ</option>
                                <option value="">て</option>
                                <option value="">と</option>
                                <option value="">な</option>
                                <option value="">に</option>
                                <option value="">ぬ</option>
                                <option value="">ね</option>
                                <option value="">の</option>
                                <option value="">は</option>
                                <option value="">ひ</option>
                                <option value="">ふ</option>
                                <option value="">へ</option>
                                <option value="">ほ</option>
                                <option value="">ま</option>
                                <option value="">み</option>
                                <option value="">む</option>
                                <option value="">め</option>
                                <option value="">も</option>
                                <option value="">や</option>
                                <option value="">ゆ</option>
                                <option value="">よ</option>
                                <option value="">ら</option>
                                <option value="">り</option>
                                <option value="">る</option>
                                <option value="">れ</option>
                                <option value="">ろ</option>
                                <option value="">わ</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="quote-list__fee-wfoption">
                          <p class="quote-list__option-ttl">銀行名</p>
                          <div class="quote-list__fee-wfct">
                            <div class="form_part_select w179">
                              <select>
                                <option value="銀行名銀行名">銀行名銀行名</option>
                                <option value="青森銀行">青森銀行</option>
                                <option value="秋田銀行">秋田銀行</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="quote-list__item">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 支店名 <small class="required">※</small>
                    </div>
                    <div class="quote-list__fee-ct">
                      <div class="quote-list__fee-wf">
                        <div class="quote-list__fee-wfoption">
                          <p class="quote-list__option-ttl">頭文字</p>
                          <div class="quote-list__fee-wfct">
                            <div class="form_part_select w179">
                              <select>
                                <option disabled="disabled">選択してください</option>
                                <option value="">あ</option>
                                <option value="">い</option>
                                <option value="">う</option>
                                <option value="">え</option>
                                <option value="">お</option>
                                <option value="">か</option>
                                <option value="">き</option>
                                <option value="">く</option>
                                <option value="">け</option>
                                <option value="">こ</option>
                                <option value="">さ</option>
                                <option value="">し</option>
                                <option value="">す</option>
                                <option value="">せ</option>
                                <option value="">そ</option>
                                <option value="">た</option>
                                <option value="">ち</option>
                                <option value="">つ</option>
                                <option value="">て</option>
                                <option value="">と</option>
                                <option value="">な</option>
                                <option value="">に</option>
                                <option value="">ぬ</option>
                                <option value="">ね</option>
                                <option value="">の</option>
                                <option value="">は</option>
                                <option value="">ひ</option>
                                <option value="">ふ</option>
                                <option value="">へ</option>
                                <option value="">ほ</option>
                                <option value="">ま</option>
                                <option value="">み</option>
                                <option value="">む</option>
                                <option value="">め</option>
                                <option value="">も</option>
                                <option value="">や</option>
                                <option value="">ゆ</option>
                                <option value="">よ</option>
                                <option value="">ら</option>
                                <option value="">り</option>
                                <option value="">る</option>
                                <option value="">れ</option>
                                <option value="">ろ</option>
                                <option value="">わ</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="quote-list__fee-wfoption">
                          <p class="quote-list__option-ttl">支店名</p>
                          <div class="quote-list__fee-wfct">
                            <div class="form_part_select w179">
                              <select>
                                <option value="東京支店（023）">東京支店（023）</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="quote-list__item">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 口座種類 <small class="required">※</small>
                    </div>
                    <div class="quote-list__fee-ct">
                      <div class="c-control__02">
                        <label class="form-edit__radio"><input type="radio" name="radio" checked="checked"><span>普通</span></label>
                        <label class="form-edit__radio"><input type="radio" name="radio"><span>当座</span></label>
                        <label class="form-edit__radio"><input type="radio" name="radio"><span>貯蓄</span></label>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="quote-list__item">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 口座番号 <small class="required">※</small>
                    </div>
                    <div class="quote-list__fee-ct">
                      <input type="text" class="form-edit__input w186" placeholder="半角英数字最大7桁">
                    </div>
                  </div>
                </li>
                <li class="quote-list__item">
                  <div class="quote-list__fee-item">
                    <div class="quote-list__fee-ttl"> 口座カナ名義 <small class="required">※</small>
                    </div>
                    <div class="quote-list__fee-ct">
                      <input type="text" class="form-edit__input w400" placeholder="大文字カナで入力してください。（例）キツズ　パーク">
                    </div>
                  </div>
                </li>
              </ul>
              <div class="request-note mbpc-34">
                <p class="c-txt__01">口座情報の間違いにより振り込みエラーが発生した場合、入金額から手数料880円が差し引かれますので、内容にお間違いが無いようにご注意ください。</p>
              </div>
              <a class="btn_entry mw-335 mbpc-40 mbsp-40" href="">保存する</a>
              <h2 class="c-ttl__02 c-ttl__02--md mbpc-10 mbsp-10">振込手数料</h2>
              <p class="c-txt__01 mbpc-16 mbsp-16"> お振込の際にはご登録の口座と振込金額により、以下の手数料がかかります。 </p>
              <table class="tb-transfer c-txt__01">
                <tbody>
                <tr>
                  <th>振込金額</th>
                  <th>三菱UFJ銀行</th>
                  <th>その他の銀行</th>
                </tr>
                <tr>
                  <td> 3万円未満 </td>
                  <td class="ufj"> 0円 </td>
                  <td> 154円 </td>
                </tr>
                <tr>
                  <td> 3万円以上 </td>
                  <td class="ufj"> 0円 </td>
                  <td> 220円 </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  layout: 'guardian',
  mixins: [showAccountMixin],
  head() {
    return {
      title: '支払い方法設定'
    }
  },
  mounted() {
    this.showAccount();
  }
}
</script>

<style>

</style>
