<template>
    <main id="page-T004" class="site_main">
        <nav class="breadcrumb">
            <ul>
                <li><a href="/app/admin/dashboard">TOP</a></li>
                <li><a href="/app/admin/supporter">パークサポーター管理</a></li>
                <li>サポートエリア</li>
            </ul>
        </nav>
        <h1 class="page_ttl_01"><span>プロフィール〈サポートエリア〉</span></h1>
        <ExeoAlert></ExeoAlert>
        <supporter-header @edit="edit" :isEditing="false" :user="supporter"/>
        <div class="col2_block">
            <exeo-supporter-navigation-window/>
            <exeo-table-supportarea :supportAreas="supportAreas" />
        </div>
    </main>
</template>

<script>
import SupporterHeader from '../../../../components/header/SupporterHeader.vue'
import ExeoSupporterNavigationWindow from '../../../../components/other/ExeoSupporterNavigationWindow.vue'
import ExeoTableSupportarea from '../../../../components/table/ExeoTableSupportarea.vue'
import SupporterAreaService from '@/services/admin/supporter/SupporterAreaService'
import SupporterInfoService from '../../../../services/admin/supporter/SupporterInfoService';
import ExeoAlert from "@/components/other/ExeoAlert";

export default {
    layout: "admin",
    components: {
        ExeoAlert,
        SupporterHeader,
        ExeoSupporterNavigationWindow,
        ExeoTableSupportarea,
    },
    head() {
        return {
            title: 'プロフィール〈サポートエリア〉'
        }
    },
    async asyncData(context) {
        const supportAreaData = await SupporterAreaService.getSupportArea(context, context.params.id)
        const supporterData = await SupporterInfoService.getSupporterInfo(context, context.params.id);

        return {
            supportAreas: supportAreaData,
            supporter: supporterData
        }
    },
    methods: {
        edit() {
            this.$router.push('./support-area-edit')
        }
    }
}
</script>

<style>

</style>
