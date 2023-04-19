<template>
    <main id="page-T001" class="site_main">
        <h1 class="page_ttl_01"><span>パークサポーター管理〈一覧〉</span></h1>
        <nav class="breadcrumb">
            <ul>
                <li><a href="/app/admin/dashboard">TOP</a></li>
                <li>パークサポーター管理</li>
            </ul>
        </nav>
        <exeo-table-supporter/>
    </main>
</template>

<script>
import ExeoTableSupporter from "@/components/table/ExeoTableSupporter.vue"
export default {
    layout: "admin",
    components: {
        ExeoTableSupporter,
    },
    head() {
        return {
            title: 'パークサポーター管理〈一覧〉'
        }
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style scoped>
</style>
