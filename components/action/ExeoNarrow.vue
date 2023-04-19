<template>
    <div>
        <button @click="openModal">絞り込む</button>
        <m-001 v-show="showContent1" @close="closeModal"/>
        <m-004 v-show="showContent5" @close="closeModal" @narrow="narrow"/>
    </div>
</template>

<script>
import M001 from '~/components/modal/M001.vue';
import M005 from '~/components/modal/M005.vue';

export default {
    components: {
        M001,
        M005,
    },
    props: ['id'],
    data() {
        return {
            showContent1: false,
            showContent5: false,
        }
    },
    methods: {
        openModal() {
            switch (this.id) {
                case 'M001': this.showContent1 = true; break;
                case 'M005': this.showContent5 = true; break;
                default: break;
            }
        },
        closeModal() {
            this.showContent1 = false;
            this.showContent5 = false;
        },
        narrow(narrow) {
            this.showContent1 = false;
            this.showContent5 = false;
            this.$emit('narrow', narrow);
        }
    }
}
</script>

<style>

</style>