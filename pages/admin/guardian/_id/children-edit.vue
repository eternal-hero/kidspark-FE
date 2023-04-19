<template>
    <main id="page-T029" class="site_main">
        <nav class="breadcrumb">
            <ul>
                <li><a href="/app/admin/dashboard">TOP</a></li>
                <li><a href="/app/admin/guardian">ユーザー管理</a></li>
                <li>お子様の情報</li>
            </ul>
        </nav>
        <h1 class="page_ttl_01"><span>プロフィール〈お子様の情報〉</span></h1>
         <exeo-guardian-header
           :guardian="guardian"
        ></exeo-guardian-header>
        <div class="col2_block f-ai-start">
            <ExeoGuardianNavigationWindow />
            <ExeoTableChildEdit @save="saveChildrenData" v-model="children" />
        </div>
    </main>
</template>

<script>
import ExeoTableChildEdit from "~/components/table/ExeoTableChildEdit.vue"
import ExeoUserIcon from "~/components/block/ExeoUserIcon.vue"
import ExeoGuardianNavigationWindow from "~/components/other/ExeoGuardianNavigationWindow.vue"
import ChildService from "~/services/admin/guardian/ChildService.js"
import GuardianService from "~/services/admin/guardian/GuardianService.js"
import Web from "~/const/web.js"
import ExeoGuardianHeader from "@/components/header/ExeoGuardianHeader.vue";

export default {
    layout: 'admin',
    components: {
        ExeoTableChildEdit,
		ExeoUserIcon,
		ExeoGuardianNavigationWindow,
        ExeoGuardianHeader
    },
    head() {
        return {
            title: 'プロフィール〈お子様の情報〉'
        }
    },
    data() {},
    async asyncData(context) {
        const guardian = await GuardianService.getGuardianInfo(context, context.params.id);
        let children = await ChildService.getChildFromGuardianId(context, context.params.id);
        if(children.length === 0) {
            children = [{
                id: '',
                guardian_user_id: context.params.id,
                first_name: '',
                last_name: '',
                first_kana: '',
                last_kana: '',
                gender: 0,
                nickname: '',
                birthday: '',
                allergy: '',
                chronic_disease: '',
                chronic_disease_checked: '0',
                other: '',
            }];
        }
        return {
            guardian: guardian,
            children: children
        }
    },
    methods: {
        async saveChildrenData() {
            this.children.forEach(e =>
            e.chronic_disease = e.chronic_disease_checked == '0' ? 'なし' : e.chronic_disease)
            await ChildService.updateChildFromGuardianId(this,this.$route.params.id, this.children)
            this.$router.push(this.$route.path.split('-edit')[0]) // Index 戻る
        }
    },
}
</script>
