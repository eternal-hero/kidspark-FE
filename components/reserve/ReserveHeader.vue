<template>
    <div>
        <div class="col2_block">
            <div class="col2_block_side">
                <div class="col2_block_side_status">
                    <span>現在のステータス</span>
                    <span class="statusicn statusicn_completion">完　了</span>
                </div>
            </div>
            <div class="col2_block_main f-ai-center f-jc-flex-start">
                <div class="col2_block_main_user">
                    <a href="./T002.html" class="flex-box decoration-none">
                        <div class="col2_block_main_img">
                            <img src="@/assets/admin/img/common/img_user.png" alt="">
                        </div>
                        <ul class="col2_block_main_data">
                            <li class="col2_block_main_post">
                                <span>パークサポーター</span>
                            </li>
                            <li class="col2_block_main_name">
                                <span>山田　太郎</span>
                                <span>やまだ　たろう</span>
                            </li>
                            <li class="col2_block_main_medal">
                                <span class="col2_block_main_medal_regular"></span>
                            </li>
                            <li class="col2_block_main_star">
                                <span class="col2_block_main_star_icn" data-rate="4.5"></span>
                            </li>
                        </ul>
                    </a>
                </div>
                <div class="col2_block_main_user">
                    <a href="./T028.html" class="flex-box decoration-none">
                        <div class="col2_block_main_img">
                            <img src="@/assets/admin/img/common/img_user.png" alt="">
                        </div>
                        <ul class="col2_block_main_data">
                            <li class="col2_block_main_post">
                                <span>ユーザー</span>
                            </li>
                            <li class="col2_block_main_name">
                                <span>佐藤　花子</span>
                                <span>さとう　はなこ</span>
                            </li>
                            <li class="col2_block_main_star">
                                <span class="col2_block_main_star_icn" data-rate="4.5"></span>
                            </li>
                        </ul>
                    </a>
                </div>
                <a href="./T083.html" class="btn_style_04">メッセージを開く</a>
            </div>
        </div>
        <div class="col2_block">
            <div class="col2_block_side">
                <div class="col2_block_side_approvaldeadline">
                    <span>承認期限：残り00時間00分</span>
                    <span>2022年8月9日20:15まで</span>
                </div>
            </div>
            <div class="col2_block_main f-jc-flex-start">
                <div class="form_block user-memo02">
                    <div class="form_part">
                        <span class="form_part_name">メモ</span>
                        <exeo-textarea name="memo" rows="2" cols="40" class="form_part_txt form_part_txt_memo"
                            placeholder="メモを入力して下さい"></exeo-textarea>
                    </div>
                    <div class="form_part">
                        <span class="form_part_name">　</span>
                        <button class="form_part_savebtn" @click="">保存</button>
                        <p class="form_part_com">※ステータス変更したら保存を押してください。<br>※メモはパークサポーターには公開されません。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ExeoTextarea from '../form/ExeoTextarea.vue';
export default {
    name: 'ReserveHeader',
    components: {
        ExeoTextarea
    },
    props: {
        value: { type: String },
        placeholder: {
        }
    },
    data() {
        return {
            form: {}
        };
    },
    methods: {

    }
}
</script>