<template>
  <main id="page-U007-4" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="./U007.html">予約管理</a><span class="current">領収書発行</span>
      </div>
    </div>
    <div class="main-content">
      <div class="inner">
        <h2 class="c-ttl__01">予約管理</h2>
        <div class="nav-scroll">
          <sub-nav></sub-nav>
        </div>
        <div class="l-content">
          <div class="l-content__body">
            <h3 class="c-ttl__02">領収書発行</h3>
            <div class="job-infor__list job-infor__list mbsp-32">
              <p class="c-txt__01">発行したい月を選択、宛名を確認して、<br>領収書を発行するボタンを押してPDF形式の領収書がダウンロードできます。</p>
              <form class="request-form--02" id="id-form">
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl">発行月</div>
                  <div class="job-infor__list-desc">
                    <div class="form_part_select mw-290">
                      <exeo-select value="2022年12月" :options="$MONTH_OF_ISSUE"></exeo-select>
                    </div>
                  </div>
                </div>
                <div class="job-infor__list-item job-infor__list-item--wrap">
                  <div class="job-infor__list-ttl">宛名<small class="required">※</small></div>
                  <div class="job-infor__list-desc">
                    <textarea name="" cols="30" rows="1" class="form-edit__textarea mb0" placeholder="木村　花子"></textarea>
                  </div>
                </div>
              </form>
              <div class="c-control--submit">
                <a href="./U007-5.html" class="c-btn__04">領収書プレビュー</a>
                <a href="./" class="btn_entry--disabled">領収書を発行する</a>
              </div>
            </div>
            <h4 class="c-ttl__02 precautions">注意事項</h4>
            <ul class="precautions_list">
              <li class="F04850">※領収書発行は原則1回までとなります。</li>
              <li class="F04850">※再発行は可能ですが領収書に「再発行」と記載されます。</li>
              <li>※請求書の印刷および郵送を承ることができません。</li>
              <li>※月末依頼の場合、支払日が翌月になった場合には翌月の領収書に記載されます。</li>
            </ul>
            <p class="c-txt__01">各依頼の明細をご覧になりたい場合は、依頼完了した各ページから明細書のダウンロードが可能です。</p>
            <question-box :questions="questions"></question-box>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SubNav from "@/components/guardian/SubNav";
import QuestionBox from "@/components/block/QuestionBox";
import ExeoSelect from "@/components/action/ExeoSelect";
export default {
  components: {ExeoSelect, QuestionBox, SubNav},
  layout: 'guardian',

  data() {
    return {
      questions: [
        {
          url: 'https://www.kids-parks.com/faq/detail/167/',
          name: '明細書・領収書をダウンロードしたい'
        },
      ]
    }
  }
}
</script>
<style scoped>
.l-content {
  overflow: hidden;
}
.job-infor__list {
  background: #FAFAFA;
  border-radius: 4px;
  padding: 25px 20px;
  float: left;
  width: 38%;
  margin-right: 40px;
}
.job-infor__list-item:first-child {
  border: none;
}
.job-infor__list-item {
  border: none;
  align-items: center;
}
.job-infor__list-ttl {
  width: 6em;
}
.job-infor__list-desc {
  width: calc(100% - 6em);
}
.c-btn__04 {
  background: #FFF;
  margin: 0.8em 0 1.6em 0;
}
.form-edit__textarea {
  resize: none;
  margin-bottom: 0;
}
.c-control--submit {
  display: block;
  max-width: inherit;
}
.precautions {
  font-size: 1.6rem;
  margin-bottom: 13px;
}
.precautions_list {
  display: grid;
  margin-bottom: 20px;
}
.precautions_list li {
  font-size: 14px;
  font-size: 1.4rem;
  line-height: 1.4571428571;
  font-weight: 500;
  text-indent: -1em;
  padding-left: 1em;
  margin-bottom: 0.2em;
}
.F04850 {
  color: #F04850;
}
@media screen and (max-width: 800px) {
  .l-content {
    padding-top: 30px;
  }
  .c-ttl__02 {
    display: none;
  }
  .job-infor__list {
    float: inherit;
    width: inherit;
    margin-right: 0;
  }
  .job-infor__list-item--wrap .job-infor__list-ttl {
    width: 6em;
    margin-bottom: 0;
  }
  .job-infor__list-item--wrap .job-infor__list-desc {
    width: calc(100% - 6em);
  }
  .form-edit__textarea {
    height: auto;
  }
}
</style>
