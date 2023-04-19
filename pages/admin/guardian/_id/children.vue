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
          @edit="moveEditPage"
        ></exeo-guardian-header>
        <div class="col2_block f-ai-start">
            <ExeoGuardianNavigationWindow />
			<ExeoTableChildShow v-model="this.children"/>
        </div>
    </main>
</template>

<script>
import ExeoTableChildShow from "~/components/table/ExeoTableChildShow.vue"
import ExeoUserIcon from "~/components/block/ExeoUserIcon.vue"
import ExeoGuardianNavigationWindow from "~/components/other/ExeoGuardianNavigationWindow.vue"
import ChildService from "~/services/admin/guardian/ChildService.js"
import GuardianService from "~/services/admin/guardian/GuardianService.js"
import Web from "~/const/web.js"
import ExeoGuardianHeader from "@/components/header/ExeoGuardianHeader.vue";

export default {
    layout: 'admin',
    components: {
        ExeoTableChildShow,
		ExeoUserIcon,
		ExeoGuardianNavigationWindow,
        ExeoGuardianHeader
    },
    head() {
        return {
            title: 'プロフィール〈お子様の情報〉'
        }
    },
    data() {
        return {
            children: [],
        }
    },
    async asyncData(context) {
        const guardian = await GuardianService.getGuardianInfo(context, context.params.id);
        let children = await ChildService.getChildFromGuardianId(context, context.params.id)
        if(children.length === 0) {
            children = [{
				id: '',
				guardian_id: context.params.id,
				guardian: {},
				first_name: '',
				last_name: '',
				first_kana: '',
				last_kana: '',
        gender: '',
				chronic_disease: '',
				chronic_disease_checked: '0',
				other: '',
			}]
        }
        return {
            guardian: guardian,
            children: children
        }
    },
    methods: {
        moveEditPage() {
            this.$router.push(this.$route.path + '-edit');
        }
    }
}
</script>
