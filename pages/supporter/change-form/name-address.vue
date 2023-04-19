<template>
    <main id="page-P047" class="wrapper">
        <div class="main-content">
            <div class="inner">
                <h1 class="c-ttl__01 c-al--c">氏名・住所変更申請</h1>
                <div class="l-content">
                    <form action="">
                        <div class="l-content__body">
                            <div class="quote-list">
                                <div class="quote-list__item02">
                                    <p class="c-txt__01 mbpc-17"> 氏名または住所を変更したい場合は、新しい氏名・住所が記載された新しい本人確認書類の提出が必要です。<br> 変更したい内容を下記からお選びください。 </p>
                                    <ul class="form-check form-check--radio js-check-value form-check--03 js-tabcheckbox">
                                        <li class="form-check__item">
                                            <label class="form-edit__checkbox js-check" data-id="form-edit__checkbox01">
                                                <input type="radio" name="transportation" class="checks" checked="checked" value="氏名を変更したい">
                                                <span class="checkmark"></span>氏名を変更したい </label>
                                        </li>
                                        <li class="form-check__item">
                                            <label class="form-edit__checkbox js-check" data-id="form-edit__checkbox02">
                                                <input type="radio" name="transportation" class="checks" value="住所を変更したい">
                                                <span class="checkmark"></span>住所を変更したい </label>
                                        </li>
                                        <li class="form-check__item">
                                            <label class="form-edit__checkbox js-check" data-id="form-edit__checkbox03">
                                                <input type="radio" name="transportation" class="checks" value="氏名・住所両方を変更したい">
                                                <span class="checkmark"></span>氏名・住所両方を変更したい </label>
                                        </li>
                                    </ul>
                                </div>
                                <div class="quote-list__w">
                                    <div class="quote-list__item02 js-ctcheck is-open" id="form-edit__checkbox01">
                                        <h2 class="quote-list__ttl mbpc-19 mbsp-18">新しい氏名を記入してください。</h2>
                                        <hr class="hr sp mbsp-0">
                                        <div class="request-form request-form--02">
                                            <div class="request-form__item">
                                                <div class="request-form__ttl">名前<span>※</span>
                                                </div>
                                                <div class="request-form__ct">
                                                    <ul class="input-samerow">
                                                        <li class="input-samerow__item">
                                                            <input type="text" class="form-edit__input" placeholder="（姓）佐藤">
                                                        </li>
                                                        <li class="input-samerow__item">
                                                            <input type="text" class="form-edit__input" placeholder="（名）花子">
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="request-form__item">
                                                <div class="request-form__ttl">ふりがな<span>※</span>
                                                </div>
                                                <div class="request-form__ct">
                                                    <ul class="input-samerow">
                                                        <li class="input-samerow__item">
                                                            <input type="text" class="form-edit__input" placeholder="（せい）さとう">
                                                        </li>
                                                        <li class="input-samerow__item">
                                                            <input type="text" class="form-edit__input" placeholder="（めい）はなこ">
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <hr class="hr mbsp-0">
                                        </div>
                                        <h2 class="quote-list__ttl mbpc-19 mbsp-12">本人確認書類</h2>
                                        <hr class="hr mbpc-15 mbsp-12">
                                        <div class="mbpc-22">
                                            <p class="c-txt__01">必ず変更後の氏名や住所と同じものが記載された書類をご提出ください。</p>
                                        </div>
                                        <div class="request-form__ttl w100 mbpc-10 mbsp-10">本人確認書類の種類を選択<span>※</span></div>
                                        <div class="form_part_select form_part_select">
                                            <select class="js-check-name">
                                                <option value="運転免許証" selected="selected">運転免許証</option>
                                                <option value="健康保険証">健康保険証</option>
                                                <option value="マイナンバーカード">マイナンバーカード</option>
                                                <option value="住民基本台帳カード">住民基本台帳カード</option>
                                                <option value="在留カード">在留カード</option>
                                                <option value="住民票の写し">住民票の写し</option>
                                            </select>
                                        </div>
                                        <div class="file-option mbpc-30">
                                            <div class="item show" id="運転免許証">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo01">
                                                                    <small>表面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-01.png" alt="表面">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo01">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo02">
                                                                    <small>裏面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-02.png" alt="表面">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo02">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
                                            </div>
                                            <div class="item" id="健康保険証">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo05">
                                                                    <small>表面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-05.jpg" alt="住民基本台帳カード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo05">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04">※写真データを送信する際は、付箋などでオレンジ色の箇所(記号・番号・保険者番号・QRコード)を隠して写真撮影するか、スマートフォンで撮影した後に加工して該当箇所を隠してください。<br>※アップロードいただけるファイル　jpg / jpeg / gif / png<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
                                            </div>
                                            <div class="item" id="マイナンバーカード">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo06"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-06.png" alt="マイナンバーカード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo06">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
                                            </div>
                                            <div class="item" id="住民基本台帳カード">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo03">
                                                                    <small>表面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-07.png" alt="住民基本台帳カード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo03">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo04">
                                                                    <small>裏面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-08.png" alt="住民基本台帳カード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo04">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04"> ※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br> ※記載の住所が現住所と同じことを確認してください。<br> ※反射や影などで文字や画像が不鮮明な場合、お手続きができません。 </div>
                                            </div>
                                            <div class="item" id="在留カード">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo07"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-09.png" alt="在留カード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo07">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo08"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-10.png" alt="在留カード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo08">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
                                            </div>
                                            <div class="item" id="住民票の写し">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo09"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-11.png" alt="住民票の写し">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo09">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04">※6ヶ月以内に発行されたもののみご利用いただけます。<br>※マイナンバー(個人番号)の記載がある場合は、該当箇所を付箋などで隠して写真撮影するか、スマートフォンで撮影した後に加工して該当箇所を隠してください。<br>※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
                                            </div>
                                        </div>
                                        <hr class="hr">
                                        <h2 class="quote-list__ttl mbpc-19">補助書類のアップロード</h2>
                                        <hr class="hr mbpc-15 pc">
                                        <div class="mbpc-24 mbsp-17">
                                            <p class="c-txt__01">運転免許証の住所が手書きの場合、名前が旧姓のままの場合は補助書類をアップロードしてください。</p>
                                        </div>
                                        <div class="support-ct__form-flex support-ct__form-flex--file">
                                            <div class="support-ct__form-img">
                                                <img id="blah" src="@/assets/supporter/img/p047/img-03.png" alt="ファイル">
                                                <button type="submit" class="c-btn__07 c-btn__07--red">削除</button>
                                            </div>
                                            <div class="support-ct__form-file">
                                                <label for="imgInp">PCからの<span>ファイル選択</span>、<br>またはドラッグ＆ドロップで添付できます。</label>
                                                <input type="file" name="photo" accept="image/*" id="imgInp" @change="imgInpChange">
                                                <div class="support-ct__form-desc">
                                                    <div class="statuschips js-tooltip js-tooltip--right" data-tippy-content="<div class='inner-cap'>
                                        発行日から6ヶ月以内のものが有効です。<br>
                                        公共料金の領収書の名義は、ご本人さまのものをお送りください。<br>
                                        ※カタカナ名義の補完書類はご利用できません<br>
                                        公共料金の領収書は、現住所と一致する住所記載があるものをご提出ください。
                                    </div>"><small>●補助書類としてご使用いただける書類</small></div>
                                                    <span> 公共料金の領収書　※電力会社、水道局、ガス会社のいずれか<br> 国税または地方税の領収書<br> 納税証明書<br> 社会保険料の領収書 </span> ※アップロードいただけるファイル　jpg / jpeg / png / pdf<br> ※記載の住所が現住所と同じことを確認してください。<br> ※反射や影などで文字や画像が不鮮明な場合、お手続きができません。
                                                </div>
                                            </div>
                                        </div>
                                        <hr class="hr mbpc-30">
                                        <div class="request-note">審査完了まで30分〜24時間ほどかかります。審査結果はメールにて通知されます。</div>
                                        <div class="c-control--submit mw-500">
                                            <a href="./P025.html" class="btn_back w155 w100-sp">もどる</a>
                                            <a href="#" class="btn_entry">申請する</a>
                                        </div>
                                    </div>
                                    <div class="quote-list__item02 js-ctcheck" id="form-edit__checkbox02">
                                        <h2 class="quote-list__ttl mbpc-19 mbsp-18">新しい住所を記入してください。</h2>
                                        <hr class="hr sp mbsp-0">
                                        <div class="request-form request-form--02 h-adr">
                                            <span class="p-country-name" style="display:none;">Japan</span>
                                            <div class="request-form__item">
                                                <div class="request-form__ttl">郵便番号<span>※</span>
                                                </div>
                                                <div class="request-form__ct">
                                                    <div class="request-form__ct--zip">
                                                        <input type="text" class="p-postal-code form-edit__input" size="8" maxlength="8" placeholder="0123456">
                                                        <p>郵便番号を入力すると自動で住所が検索されます。</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="request-form__item">
                                                <div class="request-form__ttl">都道府県<span>※</span></div>
                                                <div class="request-form__ct">
                                                    <div class="form_part_select form_part_select--216">
                                                        <select class="p-region-id">
                                                            <option value=""></option>
                                                            <option value="1">北海道</option>
                                                            <option value="2">青森県</option>
                                                            <option value="3">岩手県</option>
                                                            <option value="4">宮城県</option>
                                                            <option value="5">秋田県</option>
                                                            <option value="6">山形県</option>
                                                            <option value="7">福島県</option>
                                                            <option value="8">茨城県</option>
                                                            <option value="9">栃木県</option>
                                                            <option value="10">群馬県</option>
                                                            <option value="11">埼玉県</option>
                                                            <option value="12">千葉県</option>
                                                            <option value="13">東京都</option>
                                                            <option value="14">神奈川県</option>
                                                            <option value="15">新潟県</option>
                                                            <option value="16">富山県</option>
                                                            <option value="17">石川県</option>
                                                            <option value="18">福井県</option>
                                                            <option value="19">山梨県</option>
                                                            <option value="20">長野県</option>
                                                            <option value="21">岐阜県</option>
                                                            <option value="22">静岡県</option>
                                                            <option value="23">愛知県</option>
                                                            <option value="24">三重県</option>
                                                            <option value="25">滋賀県</option>
                                                            <option value="26">京都府</option>
                                                            <option value="27">大阪府</option>
                                                            <option value="28">兵庫県</option>
                                                            <option value="29">奈良県</option>
                                                            <option value="30">和歌山県</option>
                                                            <option value="31">鳥取県</option>
                                                            <option value="32">島根県</option>
                                                            <option value="33">岡山県</option>
                                                            <option value="34">広島県</option>
                                                            <option value="35">山口県</option>
                                                            <option value="36">徳島県</option>
                                                            <option value="37">香川県</option>
                                                            <option value="38">愛媛県</option>
                                                            <option value="39">高知県</option>
                                                            <option value="40">福岡県</option>
                                                            <option value="41">佐賀県</option>
                                                            <option value="42">長崎県</option>
                                                            <option value="43">熊本県</option>
                                                            <option value="44">大分県</option>
                                                            <option value="45">宮崎県</option>
                                                            <option value="46">鹿児島県</option>
                                                            <option value="47">沖縄県</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="request-form__item">
                                                <div class="request-form__ttl">市区町村<span>※</span></div>
                                                <div class="request-form__ct">
                                                    <input type="text" class="form-edit__input p-locality p-street-address p-extended-addresss">
                                                </div>
                                            </div>
                                            <div class="request-form__item">
                                                <div class="request-form__ttl">丁目・番地・号<span>※</span></div>
                                                <div class="request-form__ct">
                                                    <input type="text" class="form-edit__input">
                                                </div>
                                            </div>
                                            <div class="request-form__item">
                                                <div class="request-form__ttl">建物名</div>
                                                <div class="request-form__ct">
                                                    <input type="text" class="form-edit__input">
                                                </div>
                                            </div>
                                        </div>
                                        <h2 class="quote-list__ttl mbpc-19 mbsp-12">本人確認書類</h2>
                                        <hr class="hr mbpc-15 mbsp-12">
                                        <div class="mbpc-22">
                                            <p class="c-txt__01">必ず変更後の氏名や住所と同じものが記載された書類をご提出ください。</p>
                                        </div>
                                        <div class="request-form__ttl w100 mbpc-10 mbsp-10">本人確認書類の種類を選択<span>※</span></div>
                                        <div class="form_part_select form_part_select">
                                            <select class="js-check-name">
                                                <option value="運転免許証" selected="selected">運転免許証</option>
                                                <option value="健康保険証">健康保険証</option>
                                                <option value="マイナンバーカード">マイナンバーカード</option>
                                                <option value="住民基本台帳カード">住民基本台帳カード</option>
                                                <option value="在留カード">在留カード</option>
                                                <option value="住民票の写し">住民票の写し</option>
                                            </select>
                                        </div>
                                        <div class="file-option mbpc-30">
                                            <div class="item show" id="運転免許証">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo01">
                                                                    <small>表面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-01.png" alt="表面">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo01">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo02">
                                                                    <small>裏面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-02.png" alt="表面">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo02">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
                                            </div>
                                            <div class="item" id="健康保険証">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo05">
                                                                    <small>表面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-05.jpg" alt="住民基本台帳カード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo05">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04">※写真データを送信する際は、付箋などでオレンジ色の箇所(記号・番号・保険者番号・QRコード)を隠して写真撮影するか、スマートフォンで撮影した後に加工して該当箇所を隠してください。<br>※アップロードいただけるファイル　jpg / jpeg / gif / png<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
                                            </div>
                                            <div class="item" id="マイナンバーカード">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo06"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-06.png" alt="マイナンバーカード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo06">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
                                            </div>
                                            <div class="item" id="住民基本台帳カード">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo03">
                                                                    <small>表面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-07.png" alt="住民基本台帳カード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo03">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo04">
                                                                    <small>裏面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-08.png" alt="住民基本台帳カード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo04">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04"> ※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br> ※記載の住所が現住所と同じことを確認してください。<br> ※反射や影などで文字や画像が不鮮明な場合、お手続きができません。 </div>
                                            </div>
                                            <div class="item" id="在留カード">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo07"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-09.png" alt="在留カード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo07">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo08"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-10.png" alt="在留カード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo08">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
                                            </div>
                                            <div class="item" id="住民票の写し">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo09"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-11.png" alt="住民票の写し">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo09">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04">※6ヶ月以内に発行されたもののみご利用いただけます。<br>※マイナンバー(個人番号)の記載がある場合は、該当箇所を付箋などで隠して写真撮影するか、スマートフォンで撮影した後に加工して該当箇所を隠してください。<br>※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
                                            </div>
                                        </div>
                                        <hr class="hr">
                                        <h2 class="quote-list__ttl mbpc-19">補助書類のアップロード</h2>
                                        <hr class="hr mbpc-15 pc">
                                        <div class="mbpc-24 mbsp-17">
                                            <p class="c-txt__01">運転免許証の住所が手書きの場合、名前が旧姓のままの場合は補助書類をアップロードしてください。</p>
                                        </div>
                                        <div class="support-ct__form-flex support-ct__form-flex--file">
                                            <div class="support-ct__form-img">
                                                <img id="blah" src="@/assets/supporter/img/p047/img-03.png" alt="ファイル">
                                                <button type="submit" class="c-btn__07 c-btn__07--red">削除</button>
                                            </div>
                                            <div class="support-ct__form-file">
                                                <label for="imgInp">PCからの<span>ファイル選択</span>、<br>またはドラッグ＆ドロップで添付できます。</label>
                                                <input type="file" name="photo" accept="image/*" id="imgInp" @change="imgInpChange">
                                                <div class="support-ct__form-desc">
                                                    <div class="statuschips js-tooltip js-tooltip--right" data-tippy-content="<div class='inner-cap'>
                                        発行日から6ヶ月以内のものが有効です。<br>
                                        公共料金の領収書の名義は、ご本人さまのものをお送りください。<br>
                                        ※カタカナ名義の補完書類はご利用できません<br>
                                        公共料金の領収書は、現住所と一致する住所記載があるものをご提出ください。
                                    </div>"><small>●補助書類としてご使用いただける書類</small></div>
                                                    <span> 公共料金の領収書　※電力会社、水道局、ガス会社のいずれか<br> 国税または地方税の領収書<br> 納税証明書<br> 社会保険料の領収書 </span> ※アップロードいただけるファイル　jpg / jpeg / png / pdf<br> ※記載の住所が現住所と同じことを確認してください。<br> ※反射や影などで文字や画像が不鮮明な場合、お手続きができません。
                                                </div>
                                            </div>
                                        </div>
                                        <hr class="hr mbpc-30">
                                        <div class="request-note">審査完了まで30分〜24時間ほどかかります。審査結果はメールにて通知されます。</div>
                                        <div class="c-control--submit mw-500">
                                            <a href="./P025.html" class="btn_back w155 w100-sp">もどる</a>
                                            <a href="#" class="btn_entry">申請する</a>
                                        </div>
                                    </div>
                                    <div class="quote-list__item02 quote-list__item02--02 js-ctcheck" id="form-edit__checkbox03">
                                        <h2 class="quote-list__ttl mbpc-19 mbsp-18">新しい氏名を記入してください。</h2>
                                        <hr class="hr sp mbsp-0">
                                        <div class="request-form request-form--02">
                                            <div class="request-form__item">
                                                <div class="request-form__ttl">名前<span>※</span>
                                                </div>
                                                <div class="request-form__ct">
                                                    <ul class="input-samerow">
                                                        <li class="input-samerow__item">
                                                            <input type="text" class="form-edit__input" placeholder="（姓）佐藤">
                                                        </li>
                                                        <li class="input-samerow__item">
                                                            <input type="text" class="form-edit__input" placeholder="（名）花子">
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="request-form__item">
                                                <div class="request-form__ttl">ふりがな<span>※</span>
                                                </div>
                                                <div class="request-form__ct">
                                                    <ul class="input-samerow">
                                                        <li class="input-samerow__item">
                                                            <input type="text" class="form-edit__input" placeholder="（せい）さとう">
                                                        </li>
                                                        <li class="input-samerow__item">
                                                            <input type="text" class="form-edit__input" placeholder="（めい）はなこ">
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <hr class="hr mbsp-0">
                                        </div>
                                        <h2 class="quote-list__ttl mbpc-19 mbsp-18">新しい住所を記入してください。</h2>
                                        <hr class="hr sp mbsp-0">
                                        <div class="request-form request-form--02 h-adr">
                                            <span class="p-country-name" style="display:none;">Japan</span>
                                            <div class="request-form__item">
                                                <div class="request-form__ttl">郵便番号<span>※</span>
                                                </div>
                                                <div class="request-form__ct">
                                                    <div class="request-form__ct--zip">
                                                        <input type="text" class="p-postal-code form-edit__input" size="8" maxlength="8" placeholder="0123456">
                                                        <p>郵便番号を入力すると自動で住所が検索されます。</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="request-form__item">
                                                <div class="request-form__ttl">都道府県<span>※</span></div>
                                                <div class="request-form__ct">
                                                    <div class="form_part_select form_part_select--216">
                                                        <select class="p-region-id">
                                                            <option value=""></option>
                                                            <option value="1">北海道</option>
                                                            <option value="2">青森県</option>
                                                            <option value="3">岩手県</option>
                                                            <option value="4">宮城県</option>
                                                            <option value="5">秋田県</option>
                                                            <option value="6">山形県</option>
                                                            <option value="7">福島県</option>
                                                            <option value="8">茨城県</option>
                                                            <option value="9">栃木県</option>
                                                            <option value="10">群馬県</option>
                                                            <option value="11">埼玉県</option>
                                                            <option value="12">千葉県</option>
                                                            <option value="13">東京都</option>
                                                            <option value="14">神奈川県</option>
                                                            <option value="15">新潟県</option>
                                                            <option value="16">富山県</option>
                                                            <option value="17">石川県</option>
                                                            <option value="18">福井県</option>
                                                            <option value="19">山梨県</option>
                                                            <option value="20">長野県</option>
                                                            <option value="21">岐阜県</option>
                                                            <option value="22">静岡県</option>
                                                            <option value="23">愛知県</option>
                                                            <option value="24">三重県</option>
                                                            <option value="25">滋賀県</option>
                                                            <option value="26">京都府</option>
                                                            <option value="27">大阪府</option>
                                                            <option value="28">兵庫県</option>
                                                            <option value="29">奈良県</option>
                                                            <option value="30">和歌山県</option>
                                                            <option value="31">鳥取県</option>
                                                            <option value="32">島根県</option>
                                                            <option value="33">岡山県</option>
                                                            <option value="34">広島県</option>
                                                            <option value="35">山口県</option>
                                                            <option value="36">徳島県</option>
                                                            <option value="37">香川県</option>
                                                            <option value="38">愛媛県</option>
                                                            <option value="39">高知県</option>
                                                            <option value="40">福岡県</option>
                                                            <option value="41">佐賀県</option>
                                                            <option value="42">長崎県</option>
                                                            <option value="43">熊本県</option>
                                                            <option value="44">大分県</option>
                                                            <option value="45">宮崎県</option>
                                                            <option value="46">鹿児島県</option>
                                                            <option value="47">沖縄県</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="request-form__item">
                                                <div class="request-form__ttl">市区町村<span>※</span></div>
                                                <div class="request-form__ct">
                                                    <input type="text" class="form-edit__input p-locality p-street-address p-extended-addresss">
                                                </div>
                                            </div>
                                            <div class="request-form__item">
                                                <div class="request-form__ttl">丁目・番地・号<span>※</span></div>
                                                <div class="request-form__ct">
                                                    <input type="text" class="form-edit__input">
                                                </div>
                                            </div>
                                            <div class="request-form__item">
                                                <div class="request-form__ttl">建物名</div>
                                                <div class="request-form__ct">
                                                    <input type="text" class="form-edit__input">
                                                </div>
                                            </div>
                                        </div>
                                        <h2 class="quote-list__ttl mbpc-19 mbsp-12">本人確認書類</h2>
                                        <hr class="hr mbpc-15 mbsp-12">
                                        <div class="mbpc-22">
                                            <p class="c-txt__01">必ず変更後の氏名や住所と同じものが記載された書類をご提出ください。</p>
                                        </div>
                                        <div class="request-form__ttl w100 mbpc-10 mbsp-10">本人確認書類の種類を選択<span>※</span></div>
                                        <div class="form_part_select form_part_select">
                                            <select class="js-check-name">
                                                <option value="運転免許証" selected="selected">運転免許証</option>
                                                <option value="健康保険証">健康保険証</option>
                                                <option value="マイナンバーカード">マイナンバーカード</option>
                                                <option value="住民基本台帳カード">住民基本台帳カード</option>
                                                <option value="在留カード">在留カード</option>
                                                <option value="住民票の写し">住民票の写し</option>
                                            </select>
                                        </div>
                                        <div class="file-option mbpc-30">
                                            <div class="item show" id="運転免許証">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo01">
                                                                    <small>表面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-01.png" alt="表面">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo01">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo02">
                                                                    <small>裏面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-02.png" alt="表面">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo02">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
                                            </div>
                                            <div class="item" id="健康保険証">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo05">
                                                                    <small>表面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-05.jpg" alt="住民基本台帳カード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo05">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04">※写真データを送信する際は、付箋などでオレンジ色の箇所(記号・番号・保険者番号・QRコード)を隠して写真撮影するか、スマートフォンで撮影した後に加工して該当箇所を隠してください。<br>※アップロードいただけるファイル　jpg / jpeg / gif / png<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
                                            </div>
                                            <div class="item" id="マイナンバーカード">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo06"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-06.png" alt="マイナンバーカード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo06">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
                                            </div>
                                            <div class="item" id="住民基本台帳カード">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo03">
                                                                    <small>表面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-07.png" alt="住民基本台帳カード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo03">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo04">
                                                                    <small>裏面</small> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-08.png" alt="住民基本台帳カード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo04">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04"> ※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br> ※記載の住所が現住所と同じことを確認してください。<br> ※反射や影などで文字や画像が不鮮明な場合、お手続きができません。 </div>
                                            </div>
                                            <div class="item" id="在留カード">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo07"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-09.png" alt="在留カード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo07">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo08"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-10.png" alt="在留カード">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo08">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04">※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
                                            </div>
                                            <div class="item" id="住民票の写し">
                                                <div class="list-file">
                                                    <div class="job-infor__listfile list-file__item">
                                                        <div class="job-infor__listfile-item job-infor__listfile-item--add">
                                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                                <label for="upload-photo09"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。 <span class="job-infor__listfile-imguse">
                                                                        <img src="@/assets/supporter/img/p047/img-11.png" alt="住民票の写し">
                                                                    </span>
                                                                </label>
                                                                <input type="file" name="photo" id="upload-photo09">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="c-txt__04">※6ヶ月以内に発行されたもののみご利用いただけます。<br>※マイナンバー(個人番号)の記載がある場合は、該当箇所を付箋などで隠して写真撮影するか、スマートフォンで撮影した後に加工して該当箇所を隠してください。<br>※アップロードいただけるファイル　jpg / jpeg / png / heic / pdf<br>※記載の住所が現住所と同じことを確認してください。<br>※反射や影などで文字や画像が不鮮明な場合、お手続きができません。</div>
                                            </div>
                                        </div>
                                        <hr class="hr">
                                        <h2 class="quote-list__ttl mbpc-19">補助書類のアップロード</h2>
                                        <hr class="hr mbpc-15 pc">
                                        <div class="mbpc-24 mbsp-17">
                                            <p class="c-txt__01">運転免許証の住所が手書きの場合、名前が旧姓のままの場合は補助書類をアップロードしてください。</p>
                                        </div>
                                        <div class="support-ct__form-flex support-ct__form-flex--file">
                                            <div class="support-ct__form-img">
                                                <img id="blah" src="@/assets/supporter/img/p047/img-03.png" alt="ファイル">
                                                <button type="submit" class="c-btn__07 c-btn__07--red">削除</button>
                                            </div>
                                            <div class="support-ct__form-file">
                                                <label for="imgInp">PCからの<span>ファイル選択</span>、<br>またはドラッグ＆ドロップで添付できます。</label>
                                                <input type="file" name="photo" accept="image/*" id="imgInp" @change="imgInpChange">
                                                <div class="support-ct__form-desc">
                                                    <div class="statuschips js-tooltip js-tooltip--right" data-tippy-content="<div class='inner-cap'>
                                        発行日から6ヶ月以内のものが有効です。<br>
                                        公共料金の領収書の名義は、ご本人さまのものをお送りください。<br>
                                        ※カタカナ名義の補完書類はご利用できません<br>
                                        公共料金の領収書は、現住所と一致する住所記載があるものをご提出ください。
                                    </div>"><small>●補助書類としてご使用いただける書類</small></div>
                                                    <span> 公共料金の領収書　※電力会社、水道局、ガス会社のいずれか<br> 国税または地方税の領収書<br> 納税証明書<br> 社会保険料の領収書 </span> ※アップロードいただけるファイル　jpg / jpeg / png / pdf<br> ※記載の住所が現住所と同じことを確認してください。<br> ※反射や影などで文字や画像が不鮮明な場合、お手続きができません。
                                                </div>
                                            </div>
                                        </div>
                                        <hr class="hr mbpc-30">
                                        <div class="request-note">審査完了まで30分〜24時間ほどかかります。審査結果はメールにて通知されます。</div>
                                        <div class="c-control--submit mw-500">
                                            <a href="./P025.html" class="btn_back w155 w100-sp">もどる</a>
                                            <a href="#" class="btn_entry">申請する</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    layout: 'supporter',
    data() {
        return {
            imgInp: null,
        }
    },
    head() {
        return {
            title: '氏名・住所変更申請'
        }
    },
    methods: {
        imgInpChange() {
            const [file] = imgInp.files
            if (file)
            {
                blah.src = URL.createObjectURL(file)
                $('.support-ct__form-flex--file').addClass('on');
            }
        }
    }
}
</script>

<style>

</style>