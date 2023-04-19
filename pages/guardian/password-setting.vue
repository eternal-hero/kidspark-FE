<template>
  <main id="page-U009-2" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><span class="current">その他の設定</span>
      </div>
    </div>
    <div class="main-content page-account-setting">
      <div class="inner">
        <h1 class="c-ttl__01">その他の設定</h1>
        <ul class="m-subnav job-menu mbsp-1">
          <li class="m-subnav__item">
            <a href="./U009.html">支払い方法設定</a>
          </li>
          <li class="m-subnav__item is-active"><span>パスワード設定</span></li>
          <li class="m-subnav__item"><a href="./U009-3.html">通知設定</a></li>
        </ul>
        <div class="l-content">
          <div class="l-content__body">
            <h2 class="c-ttl__02 mbpc-34">パスワード設定</h2>
            <hr class="hr mbpc-15" />
            <ul
              class="quote-list quote-list--02 quote-list--03 quote-list--start"
            >
              <li class="quote-list__item quote-list__item--223">
                <div class="quote-list__fee-item">
                  <div class="quote-list__fee-ttl">
                    現在のパスワード <small class="required">※</small>
                  </div>
                  <div class="quote-list__fee-ct">
                    <input
                      type="password"
                      v-model="form.current_password"
                      class="form-edit__input"
                      placeholder="半角英数字 8文字以上"
                    />
                  </div>
                </div>
              </li>
              <li class="quote-list__item quote-list__item--223">
                <div class="quote-list__fee-item">
                  <div class="quote-list__fee-ttl">
                    新しいパスワード <small class="required">※</small>
                  </div>
                  <div class="quote-list__fee-ct">
                    <input
                      type="password"
                      v-model="form.new_password"
                      class="form-edit__input"
                      placeholder="半角英数字 8文字以上"
                    />
                  </div>
                </div>
              </li>
              <li class="quote-list__item quote-list__item--223">
                <div class="quote-list__fee-item">
                  <div class="quote-list__fee-ttl">
                    新しいパスワード（再入力） <small class="required">※</small>
                  </div>
                  <div class="quote-list__fee-ct">
                    <input
                      v-model="form.new_password_confirmation"
                      type="password"
                      class="form-edit__input"
                      placeholder="半角英数字 8文字以上"
                    />
                  </div>
                </div>
              </li>
            </ul>
            <a href="./P019.html" class="btn_entry mw-335" @click.prevent="submit">保存する</a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import GuardianUserService from "@/services/guardian/GuardianUserService";

export default {
  name: "GuardianPasswordSettingPage",
  layout: "guardian",
  data() {
    return {
      form: {
        current_password: '',
        new_password: '',
        new_password_confirmation: ''
      }
    }
  },
  methods: {
    async submit() {
      await GuardianUserService.updatePassword(this, this.form);
    }
  }
};
</script>

<style scoped></style>
