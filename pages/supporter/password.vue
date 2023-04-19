<template>
    <main id="page-P040" class="wrapper">
        <div class="breadcrumb">
            <div class="inner">
                <a href="../">マイページ</a><span class="current">その他の設定</span>
            </div>
        </div>
        <div class="main-content page-account-setting">
            <div class="inner">
                <h1 class="c-ttl__01">その他の設定</h1>
                <ul class="m-subnav job-menu mbsp-1">
                    <!-- <li class="m-subnav__item"><a href="">受取口座設定</a></li> -->
                    <li class="m-subnav__item is-active"><span>パスワード設定</span></li>
                    <!-- <li class="m-subnav__item"><a href="">通知設定</a></li> -->
                </ul>
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
                        <h2 class="c-ttl__02 mbpc-34">パスワード設定</h2>
                        <hr class="hr mbpc-15">
                        <ul class="quote-list quote-list--02 quote-list--03 quote-list--start">
                            <li class="quote-list__item quote-list__item--223">
                                <div class="quote-list__fee-item">
                                    <div class="quote-list__fee-ttl"> 現在のパスワード <small class="required">※</small>
                                    </div>
                                    <div class="quote-list__fee-ct">
                                        <input type="password" minlength="8" class="form-edit__input" placeholder="半角英数字 8文字以上" v-model="form.current_password">
                                    </div>
                                </div>
                            </li>
                            <li class="quote-list__item quote-list__item--223">
                                <div class="quote-list__fee-item">
                                    <div class="quote-list__fee-ttl"> 新しいパスワード <small class="required">※</small>
                                    </div>
                                    <div class="quote-list__fee-ct">
                                        <input type="password" minlength="8" class="form-edit__input" placeholder="半角英数字 8文字以上" v-model="form.new_password">
                                    </div>
                                </div>
                            </li>
                            <li class="quote-list__item quote-list__item--223">
                                <div class="quote-list__fee-item">
                                    <div class="quote-list__fee-ttl"> 新しいパスワード（再入力） <small class="required">※</small>
                                    </div>
                                    <div class="quote-list__fee-ct">
                                        <input type="password" minlength="8" class="form-edit__input" placeholder="半角英数字 8文字以上" v-model="form.new_password_confirmation">
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <button type="button" @click="save" class="btn_entry mw-335">保存する</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import PasswordService from '@/services/supporter/PasswordService'
export default {
    layout: "supporter",
    head() {
        return {
            title: 'その他の設定'
        }
    },
    data() {
        return {
            form: {
                current_password: '',
                new_password: '',
                new_password_confirmation: ''
            },
            status: ''
        }
    },
    methods: {
        async save() {
            if (this.form.new_password === this.form.new_password_confirmation) {
                try {
                    await PasswordService.updatePassword(this, this.form);
                    this.status = 'success';
                } catch {
                    this.status = 'failed';
                }
            } else {
                alert('新しいパスワードは新しいパスワード（再入力）と同じではありません。');
            }
        },
    }
}
</script>

<style>

</style>
