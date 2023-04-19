const PREFECTURES = [
  { label: '都道府県', value: '' },
  { label: '北海道', value: '北海道' },
  { label: '青森県', value: '青森県' },
  { label: '岩手県', value: '岩手県' },
  { label: '宮城県', value: '宮城県' },
  { label: '秋田県', value: '秋田県' },
  { label: '山形県', value: '山形県' },
  { label: '福島県', value: '福島県' },
  { label: '茨城県', value: '茨城県' },
  { label: '栃木県', value: '栃木県' },
  { label: '群馬県', value: '群馬県' },
  { label: '埼玉県', value: '埼玉県' },
  { label: '千葉県', value: '千葉県' },
  { label: '東京都', value: '東京都' },
  { label: '神奈川県', value: '神奈川県' },
  { label: '新潟県', value: '新潟県' },
  { label: '富山県', value: '富山県' },
  { label: '石川県', value: '石川県' },
  { label: '福井県', value: '福井県' },
  { label: '山梨県', value: '山梨県' },
  { label: '長野県', value: '長野県' },
  { label: '岐阜県', value: '岐阜県' },
  { label: '静岡県', value: '静岡県' },
  { label: '愛知県', value: '愛知県' },
  { label: '三重県', value: '三重県' },
  { label: '滋賀県', value: '滋賀県' },
  { label: '京都府', value: '京都府' },
  { label: '大阪府', value: '大阪府' },
  { label: '兵庫県', value: '兵庫県' },
  { label: '奈良県', value: '奈良県' },
  { label: '和歌山県', value: '和歌山県' },
  { label: '鳥取県', value: '鳥取県' },
  { label: '島根県', value: '島根県' },
  { label: '岡山県', value: '岡山県' },
  { label: '広島県', value: '広島県' },
  { label: '山口県', value: '山口県' },
  { label: '徳島県', value: '徳島県' },
  { label: '香川県', value: '香川県' },
  { label: '愛媛県', value: '愛媛県' },
  { label: '高知県', value: '高知県' },
  { label: '福岡県', value: '福岡県' },
  { label: '佐賀県', value: '佐賀県' },
  { label: '長崎県', value: '長崎県' },
  { label: '熊本県', value: '熊本県' },
  { label: '大分県', value: '大分県' },
  { label: '宮崎県', value: '宮崎県' },
  { label: '鹿児島県', value: '鹿児島県' },
  { label: '沖縄県', value: '沖縄県' },
]

const WORKS_IMAGE_STATUS = [
  { value: 0, label: '公開中' },
  { value: 1, label: '非公開' },
]

const WORKS_IMAGE_CATEGORY = [
  { value: 0, label: 'シッティング風景写真' },
  { value: 1, label: 'シッティング風景動画' },
  { value: 2, label: '家事代行風景写真' },
  { value: 3, label: '家事代行風景動画' },
]

const TRANSPORTATION = [
{ value: 0, label: "徒歩" },
{ value: 1, label: "バス" },
{ value: 2, label: "自転車" },
{ value: 3, label: "自家用車" },
{ value: 4, label: "その他" },
];

const DISCLOSURE = [
  { value: 1, label: '公開する' },
  { value: 0, label: '公開しない' },
]

const PUBLIC = [
  { value: 1, label: '公開する' },
  { value: 0, label: '公開しない' },
]

const GENDER = [
  { value: 0, label: '女性' },
  { value: 1, label: '男性' },
]

const CONDITION = [
  { value: '1', label: 'あり' },
  { value: '0', label: 'なし' },
]

// 利用実績
const USAGE_RECORD = [
  { value: '1', label: 'あり' },
  { value: '0', label: 'なし' },
  { value: '', label: 'すべて' }
]

const WORKS_IMAGE_CATEGORIES = {
  1: 'シッティング風景写真',
  2: '家事代行風景写真',
  3: '家事代行風景動画',
}

const SUPPORTER_SITTER_STATUSES = [
  { label: '未設定', value: 0 },
  { label: '選考中', value: 1 },
  { label: '書類未', value: 2 },
  { label: '公開中（予約受付可）', value: 3 },
  { label: '公開中（予約停止）', value: 4 },
  { label: '非公開', value: 5 },
  { label: '不採用', value: 6 },
]

const CHILD_BIRTH_STATUSES = [
  { label: '未設定', value: 0 },
  { label: '選考中', value: 1 },
  { label: '書類未', value: 2 },
  { label: '公開中（予約受付可）', value: 3 },
  { label: '公開中（予約停止）', value: 4 },
  { label: '非公開', value: 5 },
  { label: '不採用', value: 6 },
]

const CHILD_CARE_STATUSES = [
  { label: '未設定', value: 0 },
  { label: '選考中', value: 1 },
  { label: '書類未', value: 2 },
  { label: '公開中（予約受付可）', value: 3 },
  { label: '公開中（予約停止）', value: 4 },
  { label: '非公開', value: 5 },
  { label: '不採用', value: 6 },
]

const HOUSEWORK_AGENT_STATUSES = [
  { label: '未設定', value: 0 },
  { label: '選考中', value: 1 },
  { label: '書類未', value: 2 },
  { label: '公開中（予約受付可）', value: 3 },
  { label: '公開中（予約停止）', value: 4 },
  { label: '非公開', value: 5 },
  { label: '不採用', value: 6 },
]

const JOB_STATUSES = [
  { label: 'すべて', value: '' },
  { label: 'リクエスト', value: 0 },
  { label: '見積もり提示', value: 1 },
  { label: '予約確定', value: 2 },
  { label: 'レポート待ち', value: 3 },
  { label: '承認待ち', value: 4 },
  { label: '完了', value: 5 },
  { label: '期限切れ', value: 6 },
  { label: 'キャンセル', value: 7 },
]

const JOB_REASON_CANCELLATION_OPTIONS = [
  { label: '選択してください', value: '' },
  { label: 'ご自身の体調不良または怪我', value: 'ご自身の体調不良または怪我' },
  { label: '家族・親族の体調不良や葬儀', value: '家族・親族の体調不良や葬儀' },
  { label: '台風などの自然災害', value: '台風などの自然災害' },
  { label: 'その他', value: 'その他' },
]

const RESERVATION_REASON_CANCELLATION_OPTIONS = [
  { label: '選択してください', value: '' },
  { label: '予定が変わった', value: '予定が変わった' },
  { label: '他のサポーターに決まった', value: '他のサポーターに決まった' },
  { label: 'その他', value: 'その他' },
]

const HAS_APPLICATIONS = [
  { label: '応募あり', value: 1 },
  { label: '応募なし', value: 0 },
  { label: 'すべて', value: '' },
]

const APPLY_STATUSES = [
  { label: 'すべて', value: '' },
  { label: '応募中', value: 0 },
  { label: '応募中', value: 1 },
  { label: '応募終了', value: 2 },
  { label: '決定', value: 3 },
  { label: '期限切れ', value: 4 },
  { label: 'キャンセル', value: 5 },
]

const IS_PET = [
  { value: '0', label: 'なし' },
  { value: '1', label: 'あり' },
]

const IS_CAMERA = [
  { value: '1', label: 'あり' },
  { value: '0', label: 'なし' },
  { value: '', label: 'すべて' },
]

const REQUEST_CATEGORIES = [
  { label: 'すべて', value: '' },
  { label: 'シッター', value: 0 },
  { label: '産前産後', value: 1 },
  { label: '病児保育', value: 2 },
  { label: '家事代行', value: 3 },
]

const PAYMENT_TYPES = [
  { label: '単発', value: 0 },
  { label: '定期', value: 1 },
  { label: 'すべて', value: '' },
]

const WATCHOVER_OPTIONS = [
  { label: 'あり', value: 1 },
  { label: 'なし', value: 0 },
  { label: 'すべて', value: '' },
]

const ATTENDANCE_STATUSES = [
  { label: 'すべて', value: '' },
  { label: '予約中', value: '予約中' },
  { label: '欠席', value: '欠席' },
  { label: 'キャンセル', value: 'キャンセル' },
  { label: '受講済み', value: '受講済み' },
]

const COURSE_CATEGORIES = [
  { label: 'すべて', value: '' },
  { label: '勉強会', value: '勉強会' },
  { label: '更新研修', value: '更新研修' },
]

const AGE_OPTIONS = [
  { label: '0歳', value: 0 },
  { label: '1歳', value: 1 },
  { label: '2歳', value: 2 },
  { label: '3歳', value: 3 },
  { label: '4歳', value: 4 },
  { label: '5歳', value: 5 },
  { label: '6歳', value: 6 },
  { label: '7歳', value: 7 },
  { label: '8歳', value: 8 },
  { label: '9歳', value: 9 }
]

// お子様の年齢
const YEAR_MONTH_RANGE = [
  { label: '0歳0ヶ月', value: '0' },
  { label: '0歳1ヶ月〜2ヶ月', value: '1' },
  { label: '0歳3ヶ月〜5ヶ月', value: '2' },
  { label: '0歳6ヶ月〜11ヶ月', value: '3' },
  { label: '1歳', value: '4' },
  { label: '2歳', value: '5' },
  { label: '3歳〜6歳', value: '6' },
  { label: '7歳以上', value: '7' },
]

const MONTH_OPTIONS = [
  { label: '0ヶ月', value: 0 },
  { label: '1ヶ月', value: 1 },
  { label: '2ヶ月', value: 2 },
  { label: '3ヶ月', value: 3 },
  { label: '4ヶ月', value: 4 },
  { label: '5ヶ月', value: 5 },
  { label: '6ヶ月', value: 6 },
  { label: '7ヶ月', value: 7 },
  { label: '8ヶ月', value: 8 },
  { label: '9ヶ月', value: 9 },
  { label: '10ヶ月', value: 10 },
  { label: '11ヶ月', value: 11 },
  { label: '12ヶ月', value: 12 }
]

const VERITIFY_STATUS_OPTIONS = [
  { value: '', label: 'すべて' },
  { value: '0', label: '未対応' },
  { value: '1', label: '対応済み' },
  { value: '2', label: '期限切れ' },
  { value: '3', label: '不受理' },
]

const VERITIFY_STATUS_SHOW = {
  0: '未対応',
  1: '対応済み',
  2: '期限切れ',
  3: '不受理',
}

const IDENTITY_DOCUMENT_TYPES = [
{ value: 0, label: "本人確認書類" },
{ value: 1, label: "シッター必須資格" },
{ value: 2, label: "病児・産前産後必須資格" },
{ value: 3, label: "その他の保育関連資格" },
{ value: 4, label: "家事代行関連資格" },
];

const VERITIFY_TYPE_SHOW = {
  0: '本人確認書類',
  1: 'シッター必須資格',
  2: '病児・産前産後必須資格',
  3: 'その他の保育関連資格',
  4: '不家事代行関連資格受理',
}

const PRIORITY = {
  0: '緊急',
  1: '最優先',
  2: '普通',
  3: '低',
}

const APPLICATION_STATUSES = [
  { label: '未対応', value: 0 },
  { label: '有効', value: 1 },
  { label: '無効', value: 2 },
]

const APPLICATION_TYPES = [
  { label: '運転免許証', value: 0 },
  { label: '健康保険証', value: 1 },
  { label: 'マイナンバーカード', value: 2 },
  { label: '住民基本台帳カード', value: 3 },
  { label: '在留カード', value: 4 },
  { label: '住民票の写し', value: 5 },
  { label: 'アカウント写真', value: 6 },
]
const APPLICATION_TYPES_SHOW = {
  0: '運転免許証',
  1: '健康保険証',
  2: 'マイナンバーカード',
  3: '住民基本台帳カード',
  4: '在留カード',
  5: '住民票の写し',
  6: 'アカウント写真'
}

const SETTING_OPTIONS_UNIT = [
  { value: 0, label: '円/時間' },
  { value: 1, label: '円/1回あたり' },
]

const ADMIN_SUPPORTER_APPLICATION_STATUS = [
  { value: 0, label: '未対応' },
  { value: 1, label: '有効' },
  { value: 2, label: '期限切れ' },
  { value: 3, label: '不受理' },
]

const ADMIN_SUPPORTER_APPLCATION_CATEGORY = [
  { value: 0, label: '本人確認書類' },
  { value: 1, label: 'シッター必須資格' },
  { value: 2, label: '病児・産前産後必須資格' },
  { value: 3, label: 'その他の保育関連資格' },
  { value: 4, label: '家事代行関連資格' },
]

const ADMIN_SUPPORTER_APPLCATION_CATEGORY_SHOW = {
  0: '本人確認書類',
  1: 'シッター必須資格',
  2: '病児・産前産後必須資格',
  3: 'その他の保育関連資格',
  4: '家事代行関連資格',
}

const ADMIN_SUPPORTER_APPLICATION_IDENTITY = [
  { value: 0, label: '運転免許証（裏面の手書き住所記載不可）' },
  { value: 1, label: '健康保険証（裏面の手書き住所記載の場合は補助書類必須）' },
  { value: 2, label: 'マイナンバーカード（個人番号が見えないように）' },
  { value: 3, label: '住基カード' },
  { value: 4, label: '在留カード' },
  { value: 5, label: '住民票の写し（6ヶ月以内に発行されたもの）' },
  { value: 6, label: '本人確認補助書類' },
  { value: 7, label: 'アカウント写真' },
]

const ADMIN_SUPPORTER_APPLICATION_IDENTITY_SHOW = {
  0: '運転免許証（裏面の手書き住所記載不可）',
  1: '健康保険証（裏面の手書き住所記載の場合は補助書類必須）',
  2: 'マイナンバーカード（個人番号が見えないように）',
  3: '住基カード',
  4: '在留カード',
  5: '住民票の写し（6ヶ月以内に発行されたもの）',
  6: '本人確認補助書類',
  7: 'アカウント写真',
}

const ADMIN_SUPPORTER_APPLICATION_SITTER_LICENSE = [
  { value: 0, label: '保育士（旧姓表記不可・保母資格不可）' },
  { value: 1, label: '看護師（旧姓表記不可）' },
  { value: 2, label: '准看護師（旧姓表記不可）' },
  { value: 3, label: '家庭的保育者等研修' },
  { value: 4, label: '子育て支援員（地域保育コース）研修' },
  { value: 5, label: '全国保育サービス協会（ACSA）認定ベビーシッター' },
  { value: 6, label: '全国保育サービス協会（ACSA）ベビーシッター養成研修＋現任研修' },
  { value: 7, label: '全国保育サービス協会（ACSA）居宅訪問型基礎研修' },
  { value: 8, label: 'ベビーシッター届出（認可外保育施設設置届）' },
  { value: 9, label: 'その他' },
]

const ADMIN_SUPPORTER_APPLICATION_SITTER_LICENSE_SHOW = {
  0: '保育士（旧姓表記不可・保母資格不可）',
  1: '看護師（旧姓表記不可）',
  2: '准看護師（旧姓表記不可）',
  3: '家庭的保育者等研修',
  4: '子育て支援員（地域保育コース）研修',
  5: '全国保育サービス協会（ACSA）認定ベビーシッター',
  6: '全国保育サービス協会（ACSA）ベビーシッター養成研修＋現任研修',
  7: '全国保育サービス協会（ACSA）居宅訪問型基礎研修',
  8: 'ベビーシッター届出（認可外保育施設設置届）',
  9: 'その他',
}
const SUPPORTER_APPLICATION_SITTER_LICENSE_SHOW = {
  0 : "保育士",
  1 : "看護師",
  2 : "准看護師",
  3 : "家庭的保育者等研修",
  4 : "子育て支援員（地域保育コース）研修",
  5 : "全国保育サービス協会（ACSA）認定ベビーシッター",
  6 : "全国保育サービス協会（ACSA）ベビーシッター養成研修＋現任研修",
  7 : "全国保育サービス協会（ACSA）居宅訪問型基礎研修",
  8 : "ベビーシッター届出（認可外保育施設設置届）",
  9 : "その他",
}

const ADMIN_SUPPORTER_APPLICATION_INFANT_CARE_LICENSE = [
  { value: 0, label: '産後ドゥーラ' },
  { value: 1, label: 'ナーシングドゥーラ' },
  { value: 2, label: '助産師' },
  { value: 3, label: '保健師' },
]

const ADMIN_SUPPORTER_APPLICATION_INFANT_CARE_LICENSE_SHOW = {
  0: '産後ドゥーラ',
  1: 'ナーシングドゥーラ',
  2: '助産師',
  3: '保健師',
}

const ADMIN_SUPPORTER_APPLICATION_OTHER_LICENSE = [
  { value: 0, label: 'おもちゃコンサルタント' },
  { value: 1, label: '運動保育士' },
  { value: 2, label: '絵本専門士' },
  { value: 3, label: 'イングリッシュエキスパート保育士' },
  { value: 4, label: 'チャイルドマインダー' },
  { value: 5, label: 'チャイルドコーチング' },
  { value: 6, label: 'その他' },
]

const ADMIN_SUPPORTER_APPLICATION_OTHER_LICENSE_SHOW = {
  0: 'おもちゃコンサルタント',
  1: '運動保育士',
  2: '絵本専門士',
  3: 'イングリッシュエキスパート保育士',
  4: 'チャイルドマインダー',
  5: 'チャイルドコーチング',
  6: 'その他',
}

const ADMIN_SUPPORTER_APPLICATION_HOUSEKEEPER_LICENSE = [
  { value: 0, label: '調理師' },
  { value: 1, label: '栄養士' },
  { value: 2, label: '管理栄養士' },
  { value: 3, label: 'クリンネスト' },
  { value: 4, label: '整理収納アドバイザー' },
  { value: 5, label: 'ライフオーガナイザー' },
  { value: 6, label: '作りおき料理コーディネーター' },
  { value: 7, label: '家事クリエイター' },
  { value: 8, label: 'ハウスクリーニングアドバイザー' },
  { value: 9, label: 'お掃除スペシャリスト' },
  { value: 10, label: 'お掃除プロフェッショナル' },
  { value: 11, label: 'その他' },
]

const ADMIN_SUPPORTER_APPLICATION_HOUSEKEEPER_LICENSE_SHOW = {
  0: '調理師',
  1: '栄養士',
  2: '管理栄養士',
  3: 'クリンネスト',
  4: '整理収納アドバイザー',
  5: 'ライフオーガナイザー',
  6: '作りおき料理コーディネーター',
  7: '家事クリエイター',
  8: 'ハウスクリーニングアドバイザー',
  9: 'お掃除スペシャリスト',
  10: 'お掃除プロフェッショナル',
  11: 'その他',
}
const SETTING_OPTIONS_UNIT_SHOW = {
  0: '円/時間',
  1: '円/1回あたり'
}

const SETTING_OPTIONS_SUBJECT_TYPE = [
  { value: 0, label: '病児保育オプション' },
]

const SETTING_OPTIONS_SUBJECT_TYPE_SHOW = {
  0: '病児保育オプション',
}
const IDENTITY_APPLICATION_STATUSES = [
  { value: 0, label: '未対応'},
  { value: 1, label: '期限切れ'},
  { value: 2, label: '不受理'},
]

const ACRONYM = [
  { label: 'あ', value: 'あ' },
  { label: 'い', value: 'い' },
  { label: 'う', value: 'う' },
  { label: 'え', value: 'え' },
  { label: 'お', value: 'お' },
  { label: 'か', value: 'か' },
  { label: 'き', value: 'き' },
  { label: 'く', value: 'く' },
  { label: 'け', value: 'け' },
  { label: 'こ', value: 'こ' },
  { label: 'さ', value: 'さ' },
  { label: 'し', value: 'し' },
  { label: 'せ', value: 'せ' },
  { label: 'そ', value: 'そ' },
  { label: 'す', value: 'す' },
]

const BRIEF_BANK_NAME = [
  { label: 'あ', value: 'あ' },
  { label: 'い', value: 'い' },
  { label: 'う', value: 'う' },
  { label: 'え', value: 'え' },
  { label: 'お', value: 'お' },
  { label: 'か', value: 'か' },
  { label: 'き', value: 'き' },
  { label: 'く', value: 'く' },
  { label: 'け', value: 'け' },
  { label: 'こ', value: 'こ' },
  { label: 'さ', value: 'さ' },
  { label: 'し', value: 'し' },
  { label: 'す', value: 'す' },
  { label: 'せ', value: 'せ' },
  { label: 'そ', value: 'そ' },
  { label: 'た', value: 'た' },
  { label: 'ち', value: 'ち' },
  { label: 'つ', value: 'つ' },
  { label: 'て', value: 'て' },
  { label: 'と', value: 'と' },
  { label: 'な', value: 'な' },
  { label: 'に', value: 'に' },
  { label: 'ぬ', value: 'ぬ' },
  { label: 'ね', value: 'ね' },
  { label: 'の', value: 'の' },
  { label: 'は', value: 'は' },
  { label: 'ひ', value: 'ひ' },
  { label: 'ふ', value: 'ふ' },
  { label: 'へ', value: 'へ' },
  { label: 'ほ', value: 'ほ' },
  { label: 'ま', value: 'ま' },
  { label: 'み', value: 'み' },
  { label: 'む', value: 'む' },
  { label: 'め', value: 'め' },
  { label: 'も', value: 'も' },
  { label: 'や', value: 'や' },
  { label: 'ゆ', value: 'ゆ' },
  { label: 'よ', value: 'よ' },
  { label: 'ら', value: 'ら' },
  { label: 'り', value: 'り' },
  { label: 'る', value: 'る' },
  { label: 'れ', value: 'れ' },
  { label: 'ろ', value: 'ろ' },
  { label: 'わ', value: 'わ' },
]

const ACCOUNT_TYPE = [
  { value: '0', label: '普通預金' },
  { value: '1', label: '当座預金' },
]

const SUPPORTER_REQUEST_APPLICATION_TYPES = [
  { value: 0, label: '住所変更申請' },
  { value: 1, label: '氏名変更申請' },
  { value: 2, label: '住所・氏名変更申請' },
  { value: 3, label: '保険申請' },
  { value: 4, label: 'ペナルティ免除申請' },
  { value: 5, label: 'プロフィール写真変更依頼' },
  { value: 6, label: '産前産後対応可能申請' },
  { value: 7, label: '病児対応可能申請' },
  { value: 8, label: '障がい児対応可能申請' },
  { value: 9, label: '保育可能年齢申請' },
  { value: 10, label: '退会・一時休会申請' },
  { value: 11, label: '活動再開申請' },
]

const MINUTES_SELECT_OPTION_FULL = [
  { label: '00', value: '00' },
  { label: '01', value: '01' },
  { label: '02', value: '02' },
  { label: '03', value: '03' },
  { label: '04', value: '04' },
  { label: '05', value: '05' },
  { label: '06', value: '06' },
  { label: '07', value: '07' },
  { label: '08', value: '08' },
  { label: '09', value: '09' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
  { label: '13', value: '13' },
  { label: '14', value: '14' },
  { label: '15', value: '15' },
  { label: '16', value: '16' },
  { label: '17', value: '17' },
  { label: '18', value: '18' },
  { label: '19', value: '19' },
  { label: '20', value: '20' },
  { label: '21', value: '21' },
  { label: '22', value: '22' },
  { label: '23', value: '23' },
  { label: '24', value: '24' },
  { label: '25', value: '25' },
  { label: '26', value: '26' },
  { label: '27', value: '27' },
  { label: '28', value: '28' },
  { label: '29', value: '29' },
  { label: '30', value: '30' },
  { label: '31', value: '31' },
  { label: '32', value: '32' },
  { label: '33', value: '33' },
  { label: '34', value: '34' },
  { label: '35', value: '35' },
  { label: '36', value: '36' },
  { label: '37', value: '37' },
  { label: '38', value: '38' },
  { label: '39', value: '39' },
  { label: '40', value: '40' },
  { label: '41', value: '41' },
  { label: '42', value: '42' },
  { label: '43', value: '43' },
  { label: '44', value: '44' },
  { label: '45', value: '45' },
  { label: '46', value: '46' },
  { label: '47', value: '47' },
  { label: '48', value: '48' },
  { label: '49', value: '49' },
  { label: '50', value: '50' },
  { label: '51', value: '51' },
  { label: '52', value: '52' },
  { label: '53', value: '53' },
  { label: '54', value: '54' },
  { label: '55', value: '55' },
  { label: '56', value: '56' },
  { label: '57', value: '57' },
  { label: '58', value: '58' },
  { label: '59', value: '59' },
]

const INTERVIEW_REASON_CANCEL_OPTIONS = [
  { label: '選択してください', value: '' },
  { label: '他のユーザーと調整中のため', value: '他のユーザーと調整中のため' },
  { label: 'スケジュール未設定・未更新だったため', value: 'スケジュール未設定・未更新だったため' },
  { label: '前後に他の依頼があり間に合わないため', value: '前後に他の依頼があり間に合わないため' },
  { label: '私用のため', value: '私用のため' },
  { label: '引き受けたくないユーザー', value: '引き受けたくないユーザー' },
  { label: 'ユーザーの要望に応えられない内容があるため', value: 'ユーザーの要望に応えられない内容があるため' },
  { label: 'ユーザーからの連絡不通', value: 'ユーザーからの連絡不通' },
]

const REASON_FOR_REFUSAL_OPTIONS = [
  {label: '選択してください', value: '選択してください'},
  {label: '予定が変わったため', value: '予定が変わったため'},
  {label: 'サポーターが要望に応えられないため', value: 'サポーターが要望に応えられないため'},
  {label: '他のサポーターに決定したため', value: '他のサポーターに決定したため'},
  {label: 'サポーターからの連絡不通', value: 'サポーターからの連絡不通'},
]

const STEP_PRE_INTERVIEW_STATUS = [
  { number: '01', message: 'お見積もりを提示する' },
  { number: '02', message: 'お見積もり確認待ち' },
  { number: '03', message: '事前面談開始待ち' },
  { number: '04', message: '事前面談中' },
  { number: '05', message: '完了レポートを提出する' },
  { number: '06', message: 'お支払い待ち' },
  { number: '', message: 'お疲れ様でした！' },
]

const MONTH_OF_ISSUE = [
  { label: '2022年12月', value: '2022年12月' },
  { label: '2022年11月', value: '2022年11月' },
  { label: '2022年10月', value: '2022年10月' },
  { label: '2022年9月', value: '2022年9月' },
  { label: '2022年8月', value: '2022年8月' },
]

const STEP_PRE_INTERVIEW_GUARDIAN = [
  { number: '01', message: 'リクエストを作成する' },
  { number: '02', message: 'お見積もり待ち' },
  { number: '03', message: '見積もり承認・お支払い方法選択' },
  { number: '04', message: '事前面談開始待ち' },
  { number: '05', message: '事前面談中' },
  { number: '06', message: '完了レポート待ち' },
  { number: '07', message: 'レポートの承認・お支払い' },
  { number: '', message: 'ご利用ありがとうございました！' },
]

const MINUTES_SELECT_OPTION_STEP_5 = [
  { label: '00', value: '00' },
  { label: '05', value: '05' },
  { label: '10', value: '10' },
  { label: '15', value: '15' },
  { label: '20', value: '20' },
  { label: '25', value: '25' },
  { label: '30', value: '30' },
  { label: '35', value: '35' },
  { label: '40', value: '40' },
  { label: '45', value: '45' },
  { label: '50', value: '50' },
  { label: '55', value: '55' },
]

export default (context, inject) => {
  inject('AGE_OPTIONS', AGE_OPTIONS)
  inject('MONTH_OPTIONS', MONTH_OPTIONS)
  inject('PREFECTURES', PREFECTURES)
  inject('WORKS_IMAGE_CATEGORIES', WORKS_IMAGE_CATEGORIES)
  inject('SUPPORTER_SITTER_STATUSES', SUPPORTER_SITTER_STATUSES)
  inject('CHILD_BIRTH_STATUSES', CHILD_BIRTH_STATUSES)
  inject('CHILD_CARE_STATUSES', CHILD_CARE_STATUSES)
  inject('HOUSEWORK_AGENT_STATUSES', HOUSEWORK_AGENT_STATUSES)
  inject('PREFECTURES', PREFECTURES)
  inject('PAYMENT_TYPES', PAYMENT_TYPES)
  inject('HAS_APPLICATIONS', HAS_APPLICATIONS)
  inject('APPLY_STATUSES', APPLY_STATUSES)
  inject('WORKS_IMAGE_STATUS', WORKS_IMAGE_STATUS)
  inject('WORKS_IMAGE_CATEGORY', WORKS_IMAGE_CATEGORY)
  inject('TRANSPORTATION', TRANSPORTATION)
  inject('DISCLOSURE', DISCLOSURE)
  inject('PUBLIC', PUBLIC)
  inject('GENDER', GENDER)
  inject('CONDITION', CONDITION)
  inject('JOB_STATUSES', JOB_STATUSES)
  inject('JOB_REASON_CANCELLATION_OPTIONS', JOB_REASON_CANCELLATION_OPTIONS)
  inject('REQUEST_CATEGORIES', REQUEST_CATEGORIES)
  inject('WATCHOVER_OPTIONS', WATCHOVER_OPTIONS)
  inject('ATTENDANCE_STATUSES', ATTENDANCE_STATUSES)
  inject('COURSE_CATEGORIES', COURSE_CATEGORIES)
  inject('WORKS_IMAGE_CATEGORIES', WORKS_IMAGE_CATEGORIES)
  inject('IS_PET', IS_PET)
  inject('IS_CAMERA', IS_CAMERA)
  inject('USAGE_RECORD', USAGE_RECORD)
  inject('YEAR_MONTH_RANGE', YEAR_MONTH_RANGE)
  inject('VERITIFY_STATUS_OPTIONS', VERITIFY_STATUS_OPTIONS)
  inject('VERITIFY_STATUS_SHOW', VERITIFY_STATUS_SHOW)
	inject('IDENTITY_DOCUMENT_TYPES', IDENTITY_DOCUMENT_TYPES)
	inject('VERITIFY_TYPE_SHOW', VERITIFY_TYPE_SHOW)
	inject('APPLICATION_STATUSES', APPLICATION_STATUSES)
	inject('APPLICATION_TYPES', APPLICATION_TYPES)
	inject('ADMIN_SUPPORTER_APPLICATION_STATUS', ADMIN_SUPPORTER_APPLICATION_STATUS)
	inject('ADMIN_SUPPORTER_APPLCATION_CATEGORY', ADMIN_SUPPORTER_APPLCATION_CATEGORY)
  inject('ADMIN_SUPPORTER_APPLCATION_CATEGORY_SHOW', ADMIN_SUPPORTER_APPLCATION_CATEGORY_SHOW)
  inject('ADMIN_SUPPORTER_APPLICATION_IDENTITY', ADMIN_SUPPORTER_APPLICATION_IDENTITY)
  inject('ADMIN_SUPPORTER_APPLICATION_IDENTITY_SHOW', ADMIN_SUPPORTER_APPLICATION_IDENTITY_SHOW)
  inject('ADMIN_SUPPORTER_APPLICATION_SITTER_LICENSE', ADMIN_SUPPORTER_APPLICATION_SITTER_LICENSE)
  inject('ADMIN_SUPPORTER_APPLICATION_SITTER_LICENSE_SHOW', ADMIN_SUPPORTER_APPLICATION_SITTER_LICENSE_SHOW)
  inject('SUPPORTER_APPLICATION_SITTER_LICENSE_SHOW', SUPPORTER_APPLICATION_SITTER_LICENSE_SHOW)
  inject('ADMIN_SUPPORTER_APPLICATION_INFANT_CARE_LICENSE', ADMIN_SUPPORTER_APPLICATION_INFANT_CARE_LICENSE)
  inject('ADMIN_SUPPORTER_APPLICATION_INFANT_CARE_LICENSE_SHOW', ADMIN_SUPPORTER_APPLICATION_INFANT_CARE_LICENSE_SHOW)
  inject('ADMIN_SUPPORTER_APPLICATION_OTHER_LICENSE', ADMIN_SUPPORTER_APPLICATION_OTHER_LICENSE)
  inject('ADMIN_SUPPORTER_APPLICATION_OTHER_LICENSE_SHOW', ADMIN_SUPPORTER_APPLICATION_OTHER_LICENSE_SHOW)
  inject('ADMIN_SUPPORTER_APPLICATION_HOUSEKEEPER_LICENSE', ADMIN_SUPPORTER_APPLICATION_HOUSEKEEPER_LICENSE)
  inject('ADMIN_SUPPORTER_APPLICATION_HOUSEKEEPER_LICENSE_SHOW', ADMIN_SUPPORTER_APPLICATION_HOUSEKEEPER_LICENSE_SHOW)
  inject('APPLICATION_TYPES_SHOW', APPLICATION_TYPES_SHOW)
  inject('PRIORITY', PRIORITY)
  inject('SETTING_OPTIONS_UNIT', SETTING_OPTIONS_UNIT)
  inject('SETTING_OPTIONS_UNIT_SHOW', SETTING_OPTIONS_UNIT_SHOW)
  inject('SETTING_OPTIONS_SUBJECT_TYPE', SETTING_OPTIONS_SUBJECT_TYPE)
  inject('SETTING_OPTIONS_SUBJECT_TYPE_SHOW', SETTING_OPTIONS_SUBJECT_TYPE_SHOW)
  inject('ACRONYM', ACRONYM)
  inject('BRIEF_BANK_NAME', BRIEF_BANK_NAME)
  inject('ACCOUNT_TYPE', ACCOUNT_TYPE)
  inject('SUPPORTER_REQUEST_APPLICATION_TYPES', SUPPORTER_REQUEST_APPLICATION_TYPES)
  inject('MINUTES_SELECT_OPTION_FULL', MINUTES_SELECT_OPTION_FULL)
  inject('INTERVIEW_REASON_CANCEL_OPTIONS', INTERVIEW_REASON_CANCEL_OPTIONS)
  inject('STEP_PRE_INTERVIEW_STATUS', STEP_PRE_INTERVIEW_STATUS)
  inject('MINUTES_SELECT_OPTION_STEP_5', MINUTES_SELECT_OPTION_STEP_5)
  inject('STEP_PRE_INTERVIEW_GUARDIAN', STEP_PRE_INTERVIEW_GUARDIAN)
  inject('MONTH_OF_ISSUE', MONTH_OF_ISSUE)
  inject('RESERVATION_REASON_CANCELLATION_OPTIONS', RESERVATION_REASON_CANCELLATION_OPTIONS)
  inject('REASON_FOR_REFUSAL_OPTIONS', REASON_FOR_REFUSAL_OPTIONS)
  inject('IDENTITY_APPLICATION_STATUSES', IDENTITY_APPLICATION_STATUSES)
};
