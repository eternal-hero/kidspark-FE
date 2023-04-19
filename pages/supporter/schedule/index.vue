<template>
  <main id="page-P060" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><span class="current">スケジュール</span>
      </div>
    </div>
    <div class="main-content page-schedule">
      <div class="inner">
        <h1 class="c-ttl__01 pc">スケジュール</h1>
        <div class="l-content l-content--styles02 pd-0--sp">
          <div class="l-content__body">
            <div class="register-schedule">
              <h2 class="c-ttl__02 register-schedule__ttl">スケジュールを登録してください</h2>
              <div class="c-txt__01 register-schedule__txt-intro">
                <p> 登録したスケジュールがご自身のサポータープロフィール画面へ反映されます。<br> ユーザーは、サポーターが登録した日時から予約が可能です。 </p>
              </div>
              <div class="register-schedule__month">
                <div class="register-schedule__month-wp">
                  <button class="register-schedule__month-control register-schedule__month-control--prev"><i class="fa-solid fa-angle-left"></i></button>
                  <div class="register-schedule__month-ct">2022年08月</div>
                  <button class="register-schedule__month-control register-schedule__month-control--next"><i class="fa-solid fa-angle-right"></i></button>
                </div>
              </div>
              <div class="register-schedule__heading">
                <p class="register-schedule__heading-txt c-txt__01">編集したい日付をクリックして、お仕事可能な時間帯を選択してください。</p>
                <ul class="register-schedule__heading-btn">
                  <li><button class="c-btn__modal js-modal" data-modal="M003">一括入力する</button></li>
                  <li><button class="c-btn__modal js-modal" data-modal="M004">自動登録設定</button></li>
                </ul>
              </div>
              <exeo-table-register-schedule />
              <div class="questions-box">
                <h3 class="questions-box__ttl"><img src="~/assets/supporter/img/common/questions-icon.svg" alt="icon" width="26">よくある質問</h3>
                <ul class="questions-box__list">
                  <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/schedule/144/" target="_blank">スケジュール登録方法</a></li>
                  <li class="questions-box__list-item"><a href="https://www.kids-parks.com/faq/about/88/" target="_blank">スケジュールを一括登録する方法</a></li>
                </ul>
              </div>
            </div>
            <div class="appointment-schedule" id="idbox01">
              <h2 class="c-ttl__02 appointment-schedule__ttl">定期予約スケジュール</h2>
              <div class="appointment-schedule__intro">
                <p class="appointment-schedule__intro-txt-lead c-txt__01">定期予約のスケジュールはこちらから登録してください。</p>
                <ul class="appointment-schedule__intro-note">
                  <li>・定期予約のスケジュール登録は、単発予約のスケジュールとは連動しておりません。</li>
                  <li>・定期予約に予約が入った場合は単発予約のその時間帯は予約リクエストは不可になります。</li>
                </ul>
                <button class="c-btn__modal appointment-schedule__intro-btn js-modal" data-modal="M001">定期予約登録</button>
              </div>
              <exeo-table-appointment-schedule />
              <div class="questions-box">
                <h3 class="questions-box__ttl"><img src="~/assets/supporter/img/common/questions-icon.svg" alt="icon" width="26">よくある質問</h3>
                <ul class="questions-box__list">
                  <li class="questions-box__list-item"><a href="">定期予約とは</a></li>
                  <li class="questions-box__list-item"><a href="">スケジュール登録方法</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <m001 />
    <m002 />
    <m002_2 />
    <m003 />
    <m004 />
  </main>
</template>

<script>

import M003 from "@/components/modal/supporter/M003.vue";
import M001 from "@/components/modal/supporter/M001.vue";
import M002 from "@/components/modal//supporter/M002.vue";
import M002_2 from "@/components/modal/supporter/M002_2.vue";
import M004 from "@/components/modal/supporter/M004.vue";
import ExeoTableRegisterSchedule from "@/components/table/ExeoTableRegisterSchedule.vue";
import ExeoTableAppointmentSchedule from "@/components/table/ExeoTableAppointmentSchedule.vue";

export default {
  components: {
    ExeoTableAppointmentSchedule,
    ExeoTableRegisterSchedule,
    M004,
    M002_2,
    M002,
    M001,
    M003
  },
  layout: "supporter",
  head() {
    return {
      title: 'スケジュール'
    }
  },
}
</script>

<style>

</style>
