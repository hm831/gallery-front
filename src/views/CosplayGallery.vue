<script>
export default {
    data() {
        return {
            loaded: false,
            items: null
        };
    },
    mounted() {
        fetch('http://localhost:8000/cosplays/gallery/select?limit=100')
            .then(response => response.json())
            .then((data) => {
                this.items = data;
                console.log(this.items)
                this.loaded = true;
            });
        console.log(this.columns)
    },
    methods: {
    },
    computed: {
        setColumns() {
            return this.$route.query.columns == null ? 4 : this.$route.query.columns
        }
    }
};
</script>
<template>
    <a-image-preview-group infinite :actions-layout="[]" :closable="false">
        <masonry-wall :items="items" :ssr-columns="1" :gap="5" :min-columns="setColumns" :max-columns:="10"
            column-width="300" :key="this.$route.query.columns" v-if="loaded">
            <template #default="{ item }">
                <div style="overflow: hidden;" class="container">
                    <a-image width="100%" :src="item.link" class="hover-border" />
                </div>
            </template>
        </masonry-wall>
    </a-image-preview-group>
</template>

<style>
.hover-border {
    transition: transform 0.3s ease;
    border-radius: 0;
    display: block;
}

.hover-border:hover {
    transform: scale(1.1);
}

.container:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.24);
    transition: box-shadow 0.3s ease;
}
</style>