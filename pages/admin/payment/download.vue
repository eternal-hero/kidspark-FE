<template>
  <div class="wrapper">
    <main id="page-T075" class="site_main">
      <nav class="breadcrumb">
        <ul>
          <li><a href="../">TOP</a></li>
          <li><a href="/">決済管理</a></li>
          <li>経理資料ダウンロード</li>
        </ul>
      </nav>
      <h1 class="page_ttl_01"><span>決済管理〈経理資料ダウンロード〉</span></h1>
      <form method="get" action="/assets/img/file.xlsx">
        <div class="download-block flex-box f-ai-center">
          <div class="download-block__date daily_data">
            <a href="" class="prev" @click.prevent="getPreviousMonth"></a>
            <div class="daily_data_inr">
              <p>
                <span class="daily_data_num">{{ $moment(currentMonth).format('YYYY年M月分') }}</span>
              </p>
            </div>
            <a href="" class="next" @click.prevent="getNextMonth"></a>
          </div>
          <span>の経理資料を</span>
          <button class="btn_style_07" @click.prevent="download">ダウンロード</button>
          <span>する</span>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "download",
  layout: 'admin',
  data() {
    return {
      currentMonth: this.$moment()
    }
  },
  head() {
    return {
      title: '決済管理〈経理資料ダウンロード〉'
    }
  },
  methods: {
    download() {
      // axios({
      //   url: '/download-excel',
      //   method: 'GET',
      //   responseType: 'blob',
      //   data: {
      //     month: this.currentMonth
      //   }
      // }).then((response) => {
      //   const url = window.URL.createObjectURL(new Blob([response.data]));
      //   const link = document.createElement('a');
      //   link.href = url;
      //   link.setAttribute('download', '決済管理.csv');
      //   document.body.appendChild(link);
      //   link.click();
      //   link.remove();
      // });
    },
    getNextMonth() {
      this.currentMonth = this.$moment(this.currentMonth).add(1, 'months');
    },
    getPreviousMonth() {
      this.currentMonth = this.$moment(this.currentMonth).subtract(1, 'months');
    }
  }

}
</script>

<style scoped>

</style>
