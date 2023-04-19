<template>
  <main id="page-P039" class="wrapper">
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
          <li class="m-subnav__item"><a href="">パスワード設定</a></li>
          <li class="m-subnav__item"><a href="">通知設定</a></li>
        </ul>
        <div class="l-content">
          <div class="l-content__body">
            <h2 class="c-ttl__02 mbpc-34">受取口座設定</h2>
            <hr class="hr mbpc-15">
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
                            <exeo-select
                                :options="$BRIEF_BANK_NAME"
                                v-model="selectedBriefBank"
                            >
                              <slot>
                                <option disabled="disabled">選択してください</option>
                              </slot>
                            </exeo-select>
                          </div>
                        </div>
                      </div>
                      <div class="quote-list__fee-wfoption">
                        <p class="quote-list__option-ttl">銀行名</p>
                        <div class="quote-list__fee-wfct">
                          <div class="form_part_select w179">
                            <exeo-select
                                :options="banks"
                                v-model="selectedBank"
                            ></exeo-select>
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
                            <exeo-select
                                :options="$BRIEF_BANK_NAME"
                                v-model="selectedBriefBranch"
                            >
                              <slot>
                                <option disabled="disabled">選択してください</option>
                              </slot>
                            </exeo-select>
                          </div>
                        </div>
                      </div>
                      <div class="quote-list__fee-wfoption">
                        <p class="quote-list__option-ttl">支店名</p>
                        <div class="quote-list__fee-wfct">
                          <div class="form_part_select w179">
                            <exeo-select
                                :options="branchs"
                                v-model="selectedBranch"
                            >
                            </exeo-select>
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
                      <label class="form-edit__radio"><input type="radio" name="radio"><span>普通</span></label>
                      <label class="form-edit__radio"><input type="radio" name="radio" checked="checked"><span>当座</span></label>
                      <label class="form-edit__radio"><input type="radio" name="radio" checked="checked"><span>貯蓄</span></label>
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
              <p class="c-txt__01">口座情報の間違いにより振り込みエラーが発生した場合、入金額から手数料○○○円が差し引かれますので、内容にお間違いが無いようにご注意ください。</p>
            </div>
            <NuxtLink class="btn_entry mw-335 mbpc-40 mbsp-40" to="/supporter/payment">保存する</NuxtLink>
            <h2 class="c-ttl__02 c-ttl__02--md mbpc-10 mbsp-10">振込手数料</h2>
            <p class="c-txt__01 mbpc-16 mbsp-16"> お振込の際にはご登録の口座と振込金額により、以下の手数料がかかります。 </p>

            <exeo-table-supporter-transfer></exeo-table-supporter-transfer>

            <div class="quote-list__fee-note quote-list__fee-note--02 mbpc-0 mbsp-0">
              <a href="https://www.kids-parks.com/faq/reward/69/" target="_blank">給与振り込みについて</a><br>
              <a href="./P045.html" target="_blank">入出金を確認したい</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

import ExeoSelect from '@/components/action/ExeoSelect.vue'
import ExeoTableSupporterTransfer from '@/components/table/ExeoTableSupporterTransfer.vue'

export default {
  name: 'quotion-edit',
  layout: 'supporter',
  components: { ExeoSelect, ExeoTableSupporterTransfer },
  head() {
    return {
      title: 'その他の設定'
    }
  },
  data () {
    return {
      selectedBriefBank: 'あ',
      selectedBriefBranch: 'あ',
      selectedBank: '銀行名銀行名',
      selectedBranch: '東京支店（023）',
      banks: [
        {
          label: '銀行名銀行名',
          value: '銀行名銀行名',
        },
        {
          label: '青森銀行',
          value: '青森銀行',
        },
        {
          label: '秋田銀行',
          value: '秋田銀行',
        },
      ],
      branchs: [
        {
          label: '東京支店（023）',
          value: '東京支店（023）',
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>