<?php

$domain = "/";
$site_title = "Kids Park【キッズパーク】ベビーシッター";

## path
$document_root = $_SERVER['DOCUMENT_ROOT'].$domain;
$include_folder = $document_root . "/assets/inc/";
$css_folder = $domain . "assets/css/";
$js_folder = $domain . "assets/js/";
$img_folder = $domain . "assets/img/";
$img_folder_common = $domain . "assets/img/common/";

#  $pageUrl = $_SERVER["REQUEST_URI"]; #URI（ドメイン以下のパス※パラメーター含む）
$pageUrl = $_SERVER["SCRIPT_NAME"]; #URI（ドメイン以下のパス※パラメーター含まない）
$pageUrl = str_replace("index.php", "", $pageUrl);

?>