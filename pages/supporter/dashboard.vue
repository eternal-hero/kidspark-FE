<template>
		<main id="page-P001" class="wrapper">
			<div class="breadcrumb">
				<div class="inner">
					<a href="./supporter/profile-preview" >マイページ</a><span class="current">ダッシュボード</span>
				</div>
			</div>
			<div class="main-content">
				<div class="inner">
					<div v-if="errors.sizeOrver" class="c-notyfication c-notyfication--danger">
						<div class="c-notyfication__icn">
							<img src="@/assets/supporter/img/common/icn_danger.png" alt="Ico" width="24">
						</div>
						<div class="c-notyfication__ct">
							<div class="c-notyfication__ttl">エラー通知</div>
							<div class="c-notyfication__desc">100MBを超えるファイルはアップロードできません。</div>
						</div>
						<div class="c-notyfication__close js-close-notyfication"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
					</div>
					<div v-if="errors.savefailed" class="c-notyfication c-notyfication--danger">
						<div class="c-notyfication__icn">
							<img src="@/assets/supporter/img/common/icn_danger.png" alt="Ico" width="24">
						</div>
						<div class="c-notyfication__ct">
							<div class="c-notyfication__ttl">エラー通知</div>
							<div class="c-notyfication__desc">保存に失敗しました。</div>
						</div>
						<div class="c-notyfication__close js-close-notyfication"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
					</div>
					<div v-if="errors.fileNotDefind" class="c-notyfication c-notyfication--danger">
						<div class="c-notyfication__icn">
							<img src="@/assets/supporter/img/common/icn_danger.png" alt="Ico" width="24">
						</div>
						<div class="c-notyfication__ct">
							<div class="c-notyfication__ttl">エラー通知</div>
							<div class="c-notyfication__desc">指定されたファイルが存在しません。</div>
						</div>
						<div class="c-notyfication__close js-close-notyfication"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
					</div>
					<div v-if="errors.downloadFailed" class="c-notyfication c-notyfication--danger">
						<div class="c-notyfication__icn">
							<img src="@/assets/supporter/img/common/icn_danger.png" alt="Ico" width="24">
						</div>
						<div class="c-notyfication__ct">
							<div class="c-notyfication__ttl">エラー通知</div>
							<div class="c-notyfication__desc">ファイルのダウンロードに失敗しました。</div>
						</div>
						<div class="c-notyfication__close js-close-notyfication"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
					</div>
					<div v-if="errors.uploadFailed" class="c-notyfication c-notyfication--danger">
						<div class="c-notyfication__icn">
							<img src="@/assets/supporter/img/common/icn_danger.png" alt="Ico" width="24">
						</div>
						<div class="c-notyfication__ct">
							<div class="c-notyfication__ttl">エラー通知</div>
							<div class="c-notyfication__desc">ファイルのアップロードに失敗しました。</div>
						</div>
						<div class="c-notyfication__close js-close-notyfication"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
					</div>
					<div v-if="errors.insertDataSaveFailed" class="c-notyfication c-notyfication--danger">
						<div class="c-notyfication__icn">
							<img src="@/assets/supporter/img/common/icn_danger.png" alt="Ico" width="24">
						</div>
						<div class="c-notyfication__ct">
							<div class="c-notyfication__ttl">エラー通知</div>
							<div class="c-notyfication__desc">入力データの保存に失敗しました。</div>
						</div>
						<div class="c-notyfication__close js-close-notyfication"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
					</div>
					<div v-if="errors.dataNotDefind" class="c-notyfication c-notyfication--danger">
						<div class="c-notyfication__icn">
							<img src="@/assets/supporter/img/common/icn_danger.png" alt="Ico" width="24">
						</div>
						<div class="c-notyfication__ct">
							<div class="c-notyfication__ttl">エラー通知</div>
							<div class="c-notyfication__desc">該当データが存在しません。</div>
						</div>
						<div class="c-notyfication__close js-close-notyfication"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
					</div>
					<div v-if="errors.error" class="c-notyfication c-notyfication--danger">
						<div class="c-notyfication__icn">
							<img src="@/assets/supporter/img/common/icn_danger.png" alt="Ico" width="24">
						</div>
						<div class="c-notyfication__ct">
							<div class="c-notyfication__ttl">エラー通知</div>
							<div class="c-notyfication__desc">エラーが発生しました。</div>
						</div>
						<div class="c-notyfication__close js-close-notyfication"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
					</div>
					<div v-if="errors.executionError" class="c-notyfication c-notyfication--danger">
						<div class="c-notyfication__icn">
							<img src="@/assets/supporter/img/common/icn_danger.png" alt="Ico" width="24">
						</div>
						<div class="c-notyfication__ct">
							<div class="c-notyfication__ttl">エラー通知</div>
							<div class="c-notyfication__desc">実行時エラーが発生しました。</div>
						</div>
						<div class="c-notyfication__close js-close-notyfication"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
					</div>
					<div v-if="errors.loginFailed" class="c-notyfication c-notyfication--danger">
						<div class="c-notyfication__icn">
							<img src="@/assets/supporter/img/common/icn_danger.png" alt="Ico" width="24">
						</div>
						<div class="c-notyfication__ct">
							<div class="c-notyfication__ttl">エラー通知</div>
							<div class="c-notyfication__desc">ログインに失敗しました。</div>
						</div>
						<div class="c-notyfication__close js-close-notyfication"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
					</div>
					<div v-if="sentSuccessfully" class="c-notyfication c-notyfication--primary">
						<div class="c-notyfication__icn">
							<img src="@/assets/supporter/img/common/icn_success.png" alt="Ico" width="24">
						</div>
						<div class="c-notyfication__ct">
							<div class="c-notyfication__ttl">送信しました</div>
						</div>
						<div class="c-notyfication__close js-close-notyfication"><img src="@/assets/supporter/img/common/icn_close_03.png" alt="Ico" width="16"></div>
					</div>
					<div class="l-content__01">
						<div class="l-content__01-l reset-layout">
							<div class="recent-works block-layout">
								<div class="recent-works__heading cmn-heading-block">
									<h2 class="cmn-heading-block__ttl">直近のお仕事</h2>
									<a href="./P008.html" class="cmn-heading-block__link-sp"></a>
									<a href="./P008.html" class="cmn-heading-block__link">一覧をみる</a>
								</div>
								<ul class="recent-works__list">
									<li class="recent-works__list-item">
										<a href="./P013.html" class="recent-works__list-link">
											<div class="recent-works__list-meta c-txt__02">
												<span class="recent-works__list-date">2022年9月6日（日）</span>
												<span class="recent-works__list-time">10:00-11:00</span>
											</div>
											<div class="recent-works__list-ct c-txt__02">
												<span class="recent-works__list-user">佐藤花子</span>
												<span class="recent-works__list-map">渋谷駅</span>
												<span class="recent-works__list-tag">シッター</span>
											</div>
										</a>
									</li>
									<li class="recent-works__list-item">
										<a href="./P013.html" class="recent-works__list-link">
											<div class="recent-works__list-meta c-txt__02">
												<span class="recent-works__list-date">2022年9月6日（日）</span>
												<span class="recent-works__list-time">10:00-11:00</span>
											</div>
											<div class="recent-works__list-ct c-txt__02">
												<span class="recent-works__list-user">佐藤花子</span>
												<span class="recent-works__list-map">渋谷駅</span>
												<span class="recent-works__list-tag">シッター</span>
											</div>
										</a>
									</li>
									<li class="recent-works__list-item">
										<a href="./P013.html" class="recent-works__list-link">
											<div class="recent-works__list-meta c-txt__02">
												<span class="recent-works__list-date">2022年9月6日（日）</span>
												<span class="recent-works__list-time">10:00-11:00</span>
											</div>
											<div class="recent-works__list-ct c-txt__02">
												<span class="recent-works__list-user">佐藤花子</span>
												<span class="recent-works__list-map">渋谷駅</span>
												<span class="recent-works__list-tag">シッター</span>
											</div>
										</a>
									</li>
								</ul>
								<div class="recent-works__empty"> 直近のお仕事はありません </div>
							</div>
							<div class="project-status block-layout">
								<div class="cmn-heading-block cmn-heading-block--styles02 project-status__heading">
									<h2 class="cmn-heading-block__ttl">進行中の案件</h2>
								</div>
								<ul class="project-status__list">
									<li class="project-status__list-item">
										<a href="./P002.html">
											<h3 class="project-status__list-ttl">メッセージ</h3>
											<div class="project-status__list-wp">
												<p class="project-status__list-label">未読</p>
												<div class="project-status__list-number"><span>8888</span>件</div>
											</div>
										</a>
									</li>
									<li class="project-status__list-item">
										<a href="./P009.html">
											<h3 class="project-status__list-ttl">リクエスト</h3>
											<div class="project-status__list-wp">
												<p class="project-status__list-label">未対応</p>
												<div class="project-status__list-number"><span>8888</span>件</div>
											</div>
										</a>
									</li>
									<li class="project-status__list-item">
										<a href="./P011-3.html">
											<h3 class="project-status__list-ttl">見積もり</h3>
											<div class="project-status__list-wp">
												<p class="project-status__list-label">提案中</p>
												<div class="project-status__list-number"><span>888</span>件</div>
											</div>
										</a>
									</li>
									<li class="project-status__list-item">
										<a href="./P008.html">
											<h3 class="project-status__list-ttl">お仕事管理</h3>
											<div class="project-status__list-wp">
												<p class="project-status__list-label">予約確定</p>
												<div class="project-status__list-number"><span>8888</span>件</div>
											</div>
										</a>
									</li>
									<li class="project-status__list-item">
										<a href="./P018.html">
											<h3 class="project-status__list-ttl">レポート・評価</h3>
											<div class="project-status__list-wp">
												<p class="project-status__list-label">未提出</p>
												<div class="project-status__list-number"><span>8888</span>件</div>
											</div>
										</a>
									</li>
									<li class="project-status__list-item">
										<a href="">
											<h3 class="project-status__list-ttl">公開お仕事</h3>
											<div class="project-status__list-wp">
												<p class="project-status__list-label">応募中</p>
												<div class="project-status__list-number"><span>8888</span>件</div>
											</div>
										</a>
									</li>
								</ul>
							</div>
							<div class="notice-block block-layout">
								<div class="cmn-heading-block notice-block__heading">
									<h2 class="cmn-heading-block__ttl">あなたへのお知らせ</h2>
									<a href="./P003.html" class="cmn-heading-block__link-sp"></a>
									<a href="./P003.html" class="cmn-heading-block__link">一覧をみる</a>
								</div>
								<ul class="notice-block__list">
									<li class="notice-block__list-item latest">
										<a href="./P003-3.html">
											<span class="notice-block__list-date">2022-09-10</span>
											<p class="notice-block__list-ttl">で既読表示になります。タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
										</a>
									</li>
									<li class="notice-block__list-item latest">
										<a href="./P003-3.html">
											<span class="notice-block__list-date">2022-09-10</span>
											<p class="notice-block__list-ttl">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
										</a>
									</li>
									<li class="notice-block__list-item">
										<a href="./P003-3.html">
											<span class="notice-block__list-date">2022-09-10</span>
											<p class="notice-block__list-ttl">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
										</a>
									</li>
									<li class="notice-block__list-item">
										<a href="./P003-3.html">
											<span class="notice-block__list-date">2022-09-10</span>
											<p class="notice-block__list-ttl">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</p>
										</a>
									</li>
								</ul>
							</div>
							<div class="todo-block block-layout">
								<div class="cmn-heading-block todo-block__heading">
									<h2 class="cmn-heading-block__ttl">やることリスト</h2>
									<a href="./P004.html" class="cmn-heading-block__link-sp"></a>
									<a href="./P004.html" class="cmn-heading-block__link">一覧をみる</a>
								</div>
								<ul class="todo-block__list">
									<li class="todo-block__list-item">
										<a href="./P004-2.html">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</a>
									</li>
									<li class="todo-block__list-item">
										<a href="./P004-2.html">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</a>
									</li>
									<li class="todo-block__list-item">
										<a href="./P004-2.html">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</a>
									</li>
									<li class="todo-block__list-item">
										<a href="./P004-2.html">タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル</a>
									</li>
								</ul>
							</div>
						</div>
						<aside class="l-content__01-r sp-gray">
							<div class="sidebar-page">
								<div class="user-heading">
									<div class="user-heading__image"><img src="@/assets/supporter/img/common/img_use02.png" class="u-img-of" alt=""></div>
									<div class="user-heading__name">山田　太郎</div>
									<div class="user-status">
										<div class="user-status__medal">
											<span class="user-status__medal--regular"></span>
										</div>
										<div class="user-status__star">
											<span class="user-status__star-icn" data-rate="4.5"></span>
										</div>
										<div class="user-status__num">（110件）</div>
									</div>
								</div>
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
									<a href="./supporter/profile-preview" class="btn_entry btn_entry--arrow">自分のページを見る</a>
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
import ExeoUserIcon from "@/components/block/ExeoUserIcon.vue";
export default {
	layout: 'supporter',
	data() {
		return {
			errors:{
				sizeOrver : false,
				savefailed : false,
				fileNotDefind : false,
				downloadFailed : false,
				uploadFailed : false,
				insertDataSaveFailed : false,
				dataNotDefind : false,
				error : false,
				executionError : false,
				loginFailed : false,
			},
			sentSuccessfully : false,
		}
	},
}
</script>

<style scoped>
@import url('@/assets/supporter/css/styles.css');
@import url('@/assets/supporter/fonts/css/all.min.css');
@import url('@/assets/supporter/js/slick/slick-theme.css');
@import url('@/assets/supporter/js/slick/slick.css');
</style>
