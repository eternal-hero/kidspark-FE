<template>
  <main id="page-U007" class="wrapper">
    <div class="breadcrumb">
      <div class="inner">
        <a href="../">マイページ</a><a href="./U007.html">予約管理</a><span class="current">すべて</span>
      </div>
    </div>
    <section class="sec-work">
      <div class="inner">
        <h1 class="c-ttl__01">予約管理</h1>
        <div class="nav-scroll">
          <sub-nav></sub-nav>
        </div>
        <div class="l-content">
          <div class="l-content__body">
            <h3 class="c-ttl__02">すべての依頼</h3>
            <div class="work-date">
              <a href="" class="prev"></a>
              <div class="work-date__inr">
                <p><span class="work-date__num">2022年08月</span></p>
              </div>
              <a href="" class="next"></a>
            </div>
            <div data-tabs="">
              <div class="c-al--c">
                <work-list></work-list>
              </div>
              <div class="m-tabs__content-content">
                <div class="m-tabs__content-item is-active" data-tab-content="">
                  <div class="work-seach c-txt__01">
                    <button class="work-seach__ttl js-modal" data-modal="M006"><img src="@/assets/guardian/img/U007/icon-bar.svg" alt="絞り込み" width="17">絞り込み</button>
                    <ul class="work-seach__list">
                      <li class="work-seach__list-item">ベビーシッター</li>
                      <li class="work-seach__list-item">完了</li>
                    </ul>
                  </div>
                  <ul class="work-list c-txt__03 js-accordion02">
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00<img src="@/assets/guardian/img/common/icn-watch_over.png" alt="見守り依頼あり" width="18"></div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-sitter_off.png" alt="単発" width="18">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn"><span>リクエスト</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-sitter_off.png" alt="単発" width="18">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--red"><span>予約確定</span></div><span class="limit">見積承認期限：残り40時間</span></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-baby_off.png" alt="単発" width="18">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--green"><span>レポート待ち</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-sick_off.png" alt="単発" width="18">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--green"><span>承認待ち</span></div><span class="limit last12">完了レポート承認期限：残り8時間</span></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--black"><span>期限切れ</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">定期</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--black"><span>キャンセル</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">定期</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--black02"><span>完　了</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn"><span>リクエスト</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn"><span>リクエスト</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn"><span>リクエスト</span></div></div>
                      </a>
                    </li>
                  </ul>
                  <div class="c-al--c"><span class="btn_more js-btn-more02">もっとみる</span></div>
                </div>
                <div class="m-tabs__content-item" data-tab-content="">
                  <div class="work-seach c-txt__01">
                    <button class="work-seach__ttl js-modal" data-modal="M006"><img src="@/assets/guardian/img/U007/icon-bar.svg" alt="絞り込み" width="17">絞り込み</button>
                    <ul class="work-seach__list">
                      <li class="work-seach__list-item">ベビーシッター</li>
                      <li class="work-seach__list-item">完了</li>
                    </ul>
                  </div>
                  <ul class="work-list c-txt__03">
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-sitter_off.png" alt="単発" width="18">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn"><span>リクエスト</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-sitter_off.png" alt="単発" width="18">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--red"><span>予約確定</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-baby_off.png" alt="単発" width="18">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--green"><span>レポート待ち</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-sick_off.png" alt="単発" width="18">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn"><span>見積り提示</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--black"><span>期限切れ</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">定期</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--black"><span>キャンセル</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">定期</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--black02"><span>完　了</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><<div class="work-list__btn"><span>リクエスト</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><<div class="work-list__btn"><span>リクエスト</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><<div class="work-list__btn"><span>リクエスト</span></div></div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="m-tabs__content-item" data-tab-content="">
                  <div class="work-seach c-txt__01">
                    <button class="work-seach__ttl js-modal" data-modal="M006"><img src="@/assets/guardian/img/U007/icon-bar.svg" alt="絞り込み" width="17">絞り込み</button>
                    <ul class="work-seach__list">
                      <li class="work-seach__list-item">ベビーシッター</li>
                      <li class="work-seach__list-item">完了</li>
                    </ul>
                  </div>
                  <ul class="work-list c-txt__03">
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-sitter_off.png" alt="単発" width="18">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><<div class="work-list__btn"><span>リクエスト</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/supporter/img/common/icn-sitter_off.png" alt="単発" width="18">単発</span>
                              <span><img src="@/assets/supporter/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--red"><span>予約確定</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/supporter/img/common/icn-baby_off.png" alt="単発" width="18">単発</span>
                              <span><img src="@/assets/supporter/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--green"><span>レポート待ち</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-sick_off.png" alt="単発" width="18">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn"><span>見積り提示</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--black"><span>期限切れ</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">定期</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--black"><span>キャンセル</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">定期</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn work-list__btn--black02"><span>完　了</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn"><span>リクエスト</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn"><span>リクエスト</span></div></div>
                      </a>
                    </li>
                    <li class="work-list__item">
                      <a href="#" class="work-list__link">
                        <div class="work-list__ct">
                          <div class="work-list__date">2022年07月20日(水) 12:00~15:00</div>
                          <div class="work-list__meta">
                            <div class="work-list__meta-name">佐藤　花子</div>
                            <div class="work-list__meta-date">
                              <span><img src="@/assets/guardian/img/common/icn-housekeeping_off.png" alt="単発" width="16">単発</span>
                              <span><img src="@/assets/guardian/img/common/icn_gps.png" alt="東京都千代田区" width="9">東京都千代田区</span>
                            </div>
                          </div>
                        </div>
                        <div class="deadline"><div class="work-list__btn"><span>リクエスト</span></div></div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <modal-m006-g></modal-m006-g>
  </main>
</template>

<script>
import SubNav from "@/components/guardian/SubNav";
import WorkList from "@/components/block/WorkList";
import M006G from "@/components/modal/M006G";
import {loadMoreMixin} from "@/mixins/loadMoreMixin";
export default {
  components: {WorkList, SubNav, M006G},
  layout: 'guardian',
  mixins: [loadMoreMixin],

  mounted() {
    this.initLoadMore();
  }
}
</script>
<style scoped>
a.work-list__link:hover {
  background: #FAFAFA;
}
.work-list__date {
  display: flex;
  align-items: center;
}
.icn-list {
  align-items: center;
  justify-content: center;
  line-height: 1.8;
  margin-bottom: 15px;
}
.work-list__btn {
  padding-top: 0;
  float: right;
}
.work-list__meta-name span {
  padding-right: 0.5em;
  float: right;
  color: #5BC0DE;
}
.work-list__meta-name span.limit {
  color: #F04850;
}
.work-list__link {
  position: relative;
}
.deadline {
  position: absolute;
  right: 0;
  display: table;
  padding-top: 11px;
}
.deadline span.limit {
  padding-right: 1em;
  display: table-cell;
  float: left;
  vertical-align: middle;
  color: #5BC0DE;
}
.deadline span.limit.last12 {
  color: #F04850;
}
@media screen and (max-width: 800px) {
  .l-content {
    padding-top: 0;
  }
  .c-ttl__02 {
    display: none;
  }
  .icn-list {
    margin: 0 calc((100vw - 100%) / 2 * -1) 14px;
  }
  .work-list__btn {
    padding-top: 11px;
    float: none;
  }
  .deadline {
    display: contents;
  }
  .deadline span.limit {
    text-align: center;
    display: block;
    float: none;
    width: 100%;
    border-top: 1px solid #E0E1E3;
    border-bottom: 1px solid #E0E1E3;
    padding: 5px 0;
    margin-top: 10px;
  }
}
</style>
