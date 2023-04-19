<template>
  <main id="page-P004" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><span class="current">やることリスト</span>
      </div>
    </div>
    <div class="main-content">
      <div class="inner">
        <div class="l-content__01">
          <div class="l-content__01-l">
            <h1 class="c-ttl__02">やることリスト</h1>
            <ul class="todo-block__list">
              <li class="todo-block__list-item" v-for="(item, index) in items" :key="index">
                <NuxtLink to="/">{{ item.name }}</NuxtLink>
              </li>
            </ul>
          </div>
          <aside class="l-content__01-r sp-gray">
            <div class="sidebar-page">
              <user-status-box :user="user"></user-status-box>
              <ul class="sidebar-tags">
                <li class="sidebar-tags__item active"><span>ベビーシッター</span></li>
                <li class="sidebar-tags__item"><span>病児保育</span></li>
                <li class="sidebar-tags__item"><span>産前産後</span></li>
                <li class="sidebar-tags__item active"><span>家事代行</span></li>
              </ul>
              <div class="sidebar-ages">
                <div class="sidebar-ages__heading c-txt__02">
                  <span>保育可能年齢</span>
                  <span class="c-purple">0歳6ヶ月以上</span>
                </div>
                <a href="./P024.html" class="btn_entry btn_entry--arrow">自分のページを見る</a>
              </div>
              <div class="sidebar-cumulative">
                <p class="sidebar-cumulative__txt-lead">最新累計　2022/09/06 02:23</p>
                <a href="./P042.html" class="sidebar-cumulative__control btn_entry btn_entry--arrow">
                  <span>今月の売上見込</span>
                  <span class="sidebar-cumulative__sales">35,000<small>円</small></span>
                </a>
                <div class="sidebar-cumulative__month">
                  <dl class="sidebar-cumulative__month-item">
                    <dt class="sidebar-cumulative__month-label">2022年8月の売上</dt>
                    <dd class="sidebar-cumulative__month-price">20,000円</dd>
                  </dl>
                  <dl class="sidebar-cumulative__month-item">
                    <dt class="sidebar-cumulative__month-label">2022年7月の売上</dt>
                    <dd class="sidebar-cumulative__month-price">3,8000円</dd>
                  </dl>
                </div>
                <div class="sidebar-cumulative__calculator">
                  <dl class="sidebar-cumulative__calculator-item">
                    <dt class="sidebar-cumulative__calculator-label">お仕事回数</dt>
                    <dd class="sidebar-cumulative__calculator-result">110回</dd>
                  </dl>
                  <dl class="sidebar-cumulative__calculator-item">
                    <dt class="sidebar-cumulative__calculator-label">フォロワー数</dt>
                    <dd class="sidebar-cumulative__calculator-result">10人</dd>
                  </dl>
                  <dl class="sidebar-cumulative__calculator-item">
                    <dt class="sidebar-cumulative__calculator-label">リピートユーザー数</dt>
                    <dd class="sidebar-cumulative__calculator-result">35%</dd>
                  </dl>
                  <dl class="sidebar-cumulative__calculator-item">
                    <dt class="sidebar-cumulative__calculator-label">予約成立率</dt>
                    <dd class="sidebar-cumulative__calculator-result">80%</dd>
                  </dl>
                  <dl class="sidebar-cumulative__calculator-item">
                    <dt class="sidebar-cumulative__calculator-label">返信率</dt>
                    <dd class="sidebar-cumulative__calculator-result">100%</dd>
                  </dl>
                  <dl class="sidebar-cumulative__calculator-item">
                    <dt class="sidebar-cumulative__calculator-label">直前キャンセル率</dt>
                    <dd class="sidebar-cumulative__calculator-result">0%</dd>
                  </dl>
                </div>
              </div>
              <ul class="sidebar-menus">
                <li class="sidebar-menus__item"><a href="./P003-1.html" class="sidebar-menus__link">お知らせ</a></li>
                <li class="sidebar-menus__item"><a href="./P005.html" class="sidebar-menus__link">メッセージ</a></li>
                <li class="sidebar-menus__item"><a href="./P004.html" class="sidebar-menus__link">やることリスト</a></li>
                <li class="sidebar-menus__item"><a href="./P008.html" class="sidebar-menus__link">お仕事管理</a></li>
                <li class="sidebar-menus__item"><a href="./P060.html" class="sidebar-menus__link">スケジュール</a></li>
                <li class="sidebar-menus__item"><a href="" class="sidebar-menus__link sidebar-menus__logout">ログアウト</a></li>
              </ul>
              <ul class="sidebar-control">
                <li class="sidebar-control__item"><a href="#" class="btn_s_entry--search">公開お仕事を探す</a></li>
                <li class="sidebar-control__item"><a href="./P059.html" class="btn_entry--faq">よくある質問</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </main>
</template>
<script>

import UserStatusBox from '~/components/block/UserStatusBox.vue'
export default {
  components: { UserStatusBox },
  layout: 'supporter',
  head() {
    return {
      title: 'やることリスト'
    }
  },
  data() {
    return {
      user: {
        name: '木村　花子',
        avatar: '',
        address: '東京都千代田区',
        rating: 3
      },
      items: [
        {
          name: 'プロフィールを登録しましょう',
          url: '',
        },
        {
          name: '共通プロフィールを登録しましょう',
          url: '',
        },
        {
          name: '来月のスケジュールを登録してください',
          url: '',
        },
        {
          name: '来月のスケジュールを登録してください',
          url: '',
        },
        {
          name: '来月のスケジュールを登録してください',
          url: '',
        },
        {
          name: '来月のスケジュールを登録してください',
          url: '',
        }
      ],
    }
  },
}
</script>