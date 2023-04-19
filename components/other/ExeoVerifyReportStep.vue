<template>
    <ul class="report-steps">
        <li class="report-steps__item" :class="[supporterClass]"><NuxtLink :to="supporterLink">パークサポーター</NuxtLink></li>
        <li class="report-steps__item" :class="[guardianClass]"><NuxtLink :to="guardianLink">ユーザー</NuxtLink></li>
    </ul>
</template>

<script>
import Web from '~/const/web.js'

export default ({
    props: {
        isGuardian: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            supporterLink: '',
            supporterClass: '',
            guardianLink: '',
            guardianClass: ''
        }
    },
    mounted() {
        if (this.isGuardian) {
            this.supporterLink = Web.VERIFY_SUPPORTER_LIST_WEB
            this.guardianClass = 'is-active'
        } else {
            this.guardianLink = Web.VERIFY_GUARDIAN_LIST_WEB
            this.supporterClass = 'is-active'
        }
    }
})
</script>

