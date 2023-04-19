<template>
    <main id="page-U006-5" class="wrapper">
        <div class="breadcrumb">
            <div class="inner">
                <a href="/guardian/dashboard">マイページ</a><span class="current">アカウント設定</span>
            </div>
        </div>
        <div class="main-content page-account-setting">
            <div class="inner">
                <h1 class="c-ttl__01">アカウント設定</h1>
                <div class="nav-scroll">
                    <ul class="m-subnav">
                        <li class="m-subnav__item"><a href="./guardian/info">基本情報</a></li>
                        <li class="m-subnav__item"><a href="./guardian/children">お子様の情報</a></li>
                        <li class="m-subnav__item"><a href="./guardian/profile">共通プロフィール</a></li>
                        <li class="m-subnav__item is-active"><a href="./guardian/profile-image">プロフィール写真</a></li>
                    </ul>
                </div>
                <div class="l-content">
                    <div class="l-content__body">
                        <h2 class="c-ttl__02 mbpc-34">プロフィール写真</h2>
                        <hr class="hr mbpc-38">
                        <form method="post">
                            <div class="job-infor">
                                <h3 class="job-infor__ttl">アイコン画像</h3>
                                <div class="job-infor__txt">
                                    <span>●ご自身の顔写真1枚　●予約や公開掲示板、メッセージ中のパークサポーターのみに公開されます</span>
                                    ※アップロードいただけるファイル　jpg / jpeg / png / heic<br>※ 撮影場所が暗すぎて顔が見えない、遠すぎる、後ろ姿や横顔である、過度な加工が施してある。ご自分以外の方が入りこんでいない写真ご使用ください。<br>※ご自身のアイコンとして使用されます。※加工写真はご遠慮ください
                                </div>
                                <div class="job-infor__file job-infor__file--check">
                                    <div class="job-infor__file-img">
                                        <label for="imgInp">
                                            <input accept="image/*" type="file" id="imgInp" @change="changeIconImage">
                                            <img v-if="icon_image.show" id="blan" :src="icon_image.src">
                                            <img v-else id="blah" src="@/assets/guardian/img/U006-5/img_use.png" alt="アイコン画像">
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="job-infor job-infor--borderno">
                                <h3 class="job-infor__ttl">お子様と一緒の写真</h3>
                                <div class="job-infor__txt">
                                    <span>●お子様と一緒の写真1枚　●予約が確定されたときに、パークサポーターのみに公開されます</span>
                                    ※アップロードいただけるファイル　jpg / jpeg / png / heic（横画像推奨）<br>※ 撮影場所が暗すぎて顔が見えない、遠すぎる、後ろ姿や横顔である、過度な加工が施してある。ご自分以外の方が入りこんでいない写真ご使用ください。<br>※必ずお子様と一緒に写った写真をアップロードしてください。※加工写真はご遠慮ください
                                </div>
                                <div class="job-infor__listfile">
                                    <div class="job-infor__listfile">
                                        <div class="job-infor__listfile-item">
                                            <div class="job-infor__listfile-thumbnail form-fileimg">
                                                <label for="upload-photo06"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。
                                                    <span v-if="with_child_image.show" class="job-infor__listfile-imguse">
                                                        <img :src="with_child_image.src">
                                                    </span>
                                                    <span v-else class="job-infor__listfile-imguse">
                                                        <span class="pc"><img src="@/assets/guardian/img/U006-5/img-01.png" alt="img"></span>
                                                        <span class="sp"><img width="203" src="@/assets/guardian/img/U006-5/img-01.png" alt="img"></span>
                                                    </span>
                                                </label>
                                                <input type="file" name="photo" id="upload-photo06" @change="changeWithChildImage">
                                                <div class="form-remove js-remove-video">削除</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="job-infor">
                                <h3 class="job-infor__ttl">保育場所の写真</h3>
                                <div class="job-infor__txt">
                                    <span>●保育場所の写真1枚〜5枚　●予約が確定されたときに、パークサポーターのみに公開されます</span>
                                    ※アップロードいただけるファイル　jpg / jpeg / png / heic（横画像推奨）<br>※不適切な写真、または関連のない画像に関しては、非公開になる場合がございます。
                                </div>
                                <div class="job-infor__listfile">
                                    <div class="job-infor__listfile-item js-add-input-item setsize" v-for="(place_image,index) in place_images" :key="place_image.upload_id">
                                        <div class="job-infor__listfile-thumbnail form-fileimg">
                                            <label :for="'upload-photo'+place_image.upload_id"> PCからの<span>ファイル選択</span>、またはドラッグ＆ドロップで添付できます。
                                                <span v-if="place_image.show" class="job-infor__listfile-imguse">
                                                    <img :src="place_image.src">
                                                </span>
                                                <span v-else class="job-infor__listfile-imguse">
                                                    <span class="pc"><img src="@/assets/guardian/img/U006-5/img-03.png" alt="img"></span>
                                                    <span class="sp"><img width="203" src="@/assets/guardian/img/U006-5/img-03.png" alt="img"></span>
                                                </span>
                                            </label>
                                            <input type="file" name="photo" :id="'upload-photo'+place_image.upload_id" @change="changePlaceImage($event, place_image.upload_id)">
                                            <div class="form-remove js-remove" @click="deletePlaceImage(index)">削除</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-add on" @click="addImage">写真を追加する</div>
                            </div>
                            <div class="c-btn__control">
                                <button type="button" @click="save" class="btn_entry mw-260">保存する</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import ProfileImageService from "@/services/guardian/ProfileImageService"
export default {
    layout: 'guardian',
    head() {
        return {
            title: 'アカウント設定'
        }
    },
    async asyncData(context) {
        console.log(context.$cookies.get('auth_token'))
        try {
            const ProfileImageData = await ProfileImageService.getProfileImage(context)
            const upload_id = ["01","02","03","04","05"]
            ProfileImageData.forEach((item, index) => {
                ProfileImageData[index].show = true
                ProfileImageData[index].src = process.env.API_URL + "/storage/" + item.image_path
                if (item.which_image == 3) {
                    ProfileImageData[index].upload_id = upload_id.shift()
                }
            })
            if (!ProfileImageData.filter(item=>item.which_image==1).length) {
                ProfileImageData.push({show:false,which_image:1})
            }
            if (!ProfileImageData.filter(item=>item.which_image==2).length) {
                ProfileImageData.push({show:false,which_image:2})
            }
            if (!ProfileImageData.filter(item=>item.which_image==3).length) {
                ProfileImageData.push({show:false,which_image:3,upload_id:upload_id.shift()})
            }
            return {
                icon_image: ProfileImageData.filter(item => item.which_image==1)[0],
                with_child_image: ProfileImageData.filter(item => item.which_image==2)[0],
                place_images: ProfileImageData.filter(item => item.which_image==3),
                upload_id: upload_id,
            }
        } catch (e) {
            context.error(e.message)
        }
    },
    methods: {
        async save() {
            var data = []
            this.place_images.forEach(i => {data.push(i)})
            data.push(this.icon_image)
            data.push(this.with_child_image)
            for(const [index, item] of Object.entries(data)) {
                if(item.file) {
                    console.log(item.file)
                    const path = await ProfileImageService.postFile(this,item.file)
                    data[index].image_path = path.data
                }
            }
            await ProfileImageService.updateProfileImage(this,data)
        },
        changeIconImage(e) {
            this.icon_image = {
                image_path: null,
                which_image: 1,
                is_examination: 1,
                show: true,
                file: e.target.files[0],
                src: URL.createObjectURL(e.target.files[0]),
            }
        },
        changeWithChildImage(e) {
            this.with_child_image = {
                image_path: null,
                which_image: 2,
                is_examination: 1,
                show: true,
                file: e.target.files[0],
                src: URL.createObjectURL(e.target.files[0]),
            }
        },
        changePlaceImage(e, upload_id) {
            const index = this.place_images.map(item => {return item.upload_id;}).indexOf(upload_id)
            this.place_images[index].show = true
            this.place_images[index].file = e.target.files[0]
            this.place_images[index].src = URL.createObjectURL(e.target.files[0])
        },
        addImage() {
            const data = {
                image_path: null,
                which_image: 3,
                is_examination: 1,
                show: false,
                upload_id: this.upload_id.shift()
            }
            this.place_images.push(data)
        },
        deletePlaceImage(index) {
            this.upload_id.push(this.place_images[index].upload_id)
            this.place_images.splice(index, 1)
        }
    }
}
</script>
