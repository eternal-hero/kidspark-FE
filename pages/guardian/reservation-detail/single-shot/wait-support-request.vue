<template>
  <main id="page-U025" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="/">予約管理</a
        ><span class="current">予約詳細（単発）</span>
      </div>
    </div>
    <section class="sec-job">
      <div class="inner">
        <h1 class="c-ttl__01 pc">予約詳細（単発）</h1>
        <div class="l-content__02 pd-0--sp">
          <div class="l-content__02-l">
            <h2 class="c-ttl__02">時間変更を依頼する</h2>
            <hr class="hr mbpc-33" />
            <div class="quote-list">
              <div class="quote-list__item">
                <p class="c-txt__01">
                  予約時間の変更はサポーターに事前にご相談の上、申請してください。<br />開始予定時間まで48時間を切っていて、依頼時間が短くなる場合は部分キャンセル料が発生済ますのでご注意ください。
                </p>
                <QuestionBox :questions="questions" />
              </div>
              <div class="quote-list__item">
                <div
                  class="quote-list__date quote-list__date--02 quote-list__date--start"
                >
                  <div class="quote-list__date-ttl">
                    時間変更<small class="required">※</small>
                  </div>
                  <div class="quote-list__fee-ct">
                    <div
                      class="quote-list__date-list quote-list__date-list--time"
                    >
                      <div class="quote-list__date-item">開始時間</div>
                      <div class="quote-list__date-item">
                        <div class="form_part_select">
                          <select>
                            <option value="00時">00時</option>
                            <option value="01時">01時</option>
                            <option value="02時">02時</option>
                            <option value="03時">03時</option>
                            <option value="04時">04時</option>
                            <option value="05時">05時</option>
                            <option value="06時">06時</option>
                            <option value="07時">07時</option>
                            <option value="08時">08時</option>
                            <option value="09時">09時</option>
                            <option value="10時">10時</option>
                            <option value="11時">11時</option>
                            <option value="12時" selected="selected">
                              12時
                            </option>
                            <option value="13時">13時</option>
                            <option value="14時">14時</option>
                            <option value="15時">15時</option>
                            <option value="16時">16時</option>
                            <option value="17時">17時</option>
                            <option value="18時">18時</option>
                            <option value="19時">19時</option>
                            <option value="20時">20時</option>
                            <option value="21時">21時</option>
                            <option value="22時">22時</option>
                            <option value="23時">23時</option>
                          </select>
                        </div>
                      </div>
                      <div class="quote-list__date-item">
                        <div class="form_part_select">
                          <select id="" name="">
                            <option value="00分" selected="">00分</option>
                            <option value="15分">15分</option>
                            <option value="30分">30分</option>
                            <option value="45分">45分</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div
                      class="quote-list__date-list quote-list__date-list--time"
                    >
                      <div class="quote-list__date-item">終了時間</div>
                      <div class="quote-list__date-item">
                        <div class="form_part_select">
                          <select>
                            <option value="00時">00時</option>
                            <option value="01時">01時</option>
                            <option value="02時">02時</option>
                            <option value="03時">03時</option>
                            <option value="04時">04時</option>
                            <option value="05時">05時</option>
                            <option value="06時">06時</option>
                            <option value="07時">07時</option>
                            <option value="08時">08時</option>
                            <option value="09時">09時</option>
                            <option value="10時">10時</option>
                            <option value="11時">11時</option>
                            <option value="12時" selected="selected">
                              12時
                            </option>
                            <option value="13時">13時</option>
                            <option value="14時">14時</option>
                            <option value="15時">15時</option>
                            <option value="16時">16時</option>
                            <option value="17時">17時</option>
                            <option value="18時">18時</option>
                            <option value="19時">19時</option>
                            <option value="20時">20時</option>
                            <option value="21時">21時</option>
                            <option value="22時">22時</option>
                            <option value="23時">23時</option>
                          </select>
                        </div>
                      </div>
                      <div class="quote-list__date-item">
                        <div class="form_part_select">
                          <select id="" name="">
                            <option value="00分" selected="">00分</option>
                            <option value="15分">15分</option>
                            <option value="30分">30分</option>
                            <option value="45分">45分</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr class="hr mbpc-15 mbsp-12" />
            <div class="c-control--submit">
              <a href="#" class="btn_back w100">もどる</a>
              <a href="#" class="btn_entry">確認ページへ</a>
            </div>
          </div>
          <aside class="l-content__02-r">
            <GuardianRightMenu step-active="4" />
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import QuestionBox from "@/components/block/QuestionBox.vue";
import GuardianRightMenu from "@/components/block/GuardianRightMenu.vue";

export default {
  layout: "guardian",
  components: {
    QuestionBox,
    GuardianRightMenu,
  },
  data() {
    return {
      questions: [
        {
          name: "予約確定後に時間を変更したい",
          url: "https://www.kids-parks.com/faq/reserve-3/203/",
        },
      ],
    };
  },
};
</script>
