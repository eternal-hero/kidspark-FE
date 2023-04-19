<template>
    <div class="pagination">
        <ul class="pagination_list">
            <li>
                <button class="pagination_btn pagination_btn_prev" @click="prev"><span>前へ</span></button>
            </li>
            <li>
                <input type="text" aria-activedescendant="" class="pagination_input" v-model="current_page" min="1"
                    :max="last" disabled>
            </li>
            <li><span class="pagination_text">／ {{ last }}</span></li>
            <li>
                <button class="pagination_btn pagination_btn_next" @click="next"><span>次へ</span></button>
            </li>
        </ul>
        <p>{{ last }}ページ中{{ current_page }}ページ目を表示（{{ per_page }}件）</p>
    </div>
</template>

<script>
export default {
    props: {
        last: {
            type: Number,
            required: true
        },
        per_page: {
            type: Number,
            required: true
        },
        current_page: {
            type: Number,
            required: true
        },
    },
    watch: {
        current_page(newValue) {
            this.$emit('input', newValue)
        }
    },
    methods: {
        prev() {
            if (this.$props.current_page > 1) {
                this.$emit('prev', this.$props.current_page - 1);
                this.$router.push({path: this.$route.fullPath, query: { page: this.$props.current_page - 1 }})
            }
        },
        next() {
            if (this.$props.current_page < this.$props.last) {
                this.$emit('next', this.$props.current_page + 1);
                this.$router.push({path: this.$route.fullPath, query: { page: this.$props.current_page + 1 }})
            }
        }
    }
}
</script>
