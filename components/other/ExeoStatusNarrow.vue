<template>
    <div style="display:flex;">
        <div v-for="(narrow, index) in value" :key="index">
            <a class="status" v-if="narrowStr(narrow, index)">
                {{narrowStr(narrow,index)}}
                <a @click="deleteNarrow(index)">×</a>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {Type: Array}
    },
    data() {
        return {
            message: ''
        }
    },
    methods: {
        deleteNarrow(narrow) {
            this.$emit('delete', narrow)
        },
        narrowStr(narrow,index) {
            switch (index) {
                case 'sitter': this.message = 'シッター'; break;
                case 'sick': this.message = '病児保育'; break;
                case 'childbirth': this.message = '産前産後'; break;
                case 'tutor': this.message = '家庭教師'; break;
                case 'housekeeping': this.message = '家事代行'; break;
                case 'result': this.message = '稼働実績'; break;
                case 'gender': this.message = '性別'; break;
                default: this.message = narrow; return this.message;
            }
            if(!Array.isArray(narrow)){
                switch (narrow) {
                    case "1": this.message = this.message + '選考中'; break;
                    case "2": this.message = this.message + '書類未'; break;
                    case "3": this.message = this.message + '公開中（予約受付可）'; break;
                    case "4": this.message = this.message + '公開中（予約停止）'; break;
                    case "-1": this.message = this.message + '不採用'; break;
                    case "-2": this.message = this.message + '未設定'; break;
                    default: return false
                }
            } else if (index === "gender") {
                switch (narrow[0]) {
                    case 1: this.message = this.message + '男性'; break;
                    case 0: this.message = this.message + '女性'; break;
                    default: return false
                }
            } else if (index === "result") {
                switch (narrow[0]) {
                    case 1: this.message = this.message + 'あり'; break;
                    case 0: this.message = this.message + 'なし'; break;
                    default: return false
                }
            }
            return this.message
        },
    }
}
</script>

<style scoped>

</style>