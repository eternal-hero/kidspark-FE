<template>
  <div class="wrapper">
    <main id="page-T087" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li><a href="..">TOP</a></li>
          <li><a href="/static">決済管理</a></li>
          <li>未回収管理</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>決済管理〈未回収管理〉</span></h1>
      <div class="looksort settement_manager">
        <div class="settement_manager_heading">
          <div class="daily_data">
            <a href="" class="prev"></a>
            <div class="daily_data_inr">
              <p>
                <span class="daily_data_num">2022年7月分</span>
              </p>
            </div>
            <a href="" class="next"></a>
          </div>
          <div class="statuschips js-tooltip"
               data-tippy-content="<div class='inner-cap'><p>ステータス説明が入ります。</p><p>ツールチップにはHTMLも使えます。</p></div>">
            <span>未回収について</span></div>
        </div>
        <ul class="report-steps">
          <li class="report-steps__item">
            <nuxt-link :to="{ name: 'admin-payment-supporter-unpaid-payment'}">
              パークサポーター未回収管理
            </nuxt-link>
          </li>
          <li class="report-steps__item is-active"><a href="">ユーザー未回収管理</a></li>
        </ul>
        <unpaid-payment-table :value="unpaidPayments"/>
      </div>
      <div class="flex_box f-jc-flex-end settement_manager_note">
        <div class="statusdescription looksort_statusdescription">
          <p class="statusdescription_ttl">ステータス説明</p>
          <ul class="statusdescription_list">
            <li>
              <span class="statusicn statusicn_unsupported">
                未確定
              </span>
              <span>
                キャンセル料などのペナルティ料の未回収がある（2ヶ月経っても補填ない場合はお仕事受付停止）
              </span>
            </li>
            <li><span class="statusicn statusicn_completion">決済済み</span><span>振込または売上から回収済み</span></li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import UnpaidPaymentTable from "@/components/table/admin/UnpaidPaymentTable.vue";

export default {
  name: "GuardianUnpaidPaymentPage",
  components: {
    UnpaidPaymentTable
  },
  layout: 'admin',
  head() {
    return {
      title: '決済管理〈未回収管理〉'
    }
  },
  async asyncData(context) {
    try {
      const unpaidPayments = [{user:{first_name:"高升",last_name:"良子",first_kana:"たかます",last_kana:"よしこ"},status:0,billing_date:"2023-01-26",payment_date:"2022-08-15",amount:25e3,deposit:25e3,memo:"memo text"},{user:{first_name:"坂口",last_name:"桃香",first_kana:"さかぐち",last_kana:"ももこ"},status:1,billing_date:"2021-06-01",payment_date:"2021-08-15",amount:35e3,deposit:35e3,memo:"memo text"},{user:{first_name:"美王",last_name:"彩華",first_kana:"みおう",last_kana:"あやか"},status:0,billing_date:"2020-06-01",payment_date:"2020-08-15",amount:33e3,deposit:33e3,memo:"memo text"}];
      return {
        unpaidPayments: unpaidPayments,
      };
    } catch (e) {
      context.error(e.response.data.status);
    }
  },
}
</script>

<style scoped>

</style>
