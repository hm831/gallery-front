<script>
export default {
    data() {
        return {
            loaded: false,
            items: null
        };
    },
    mounted() {
        fetch('http://localhost:8000/albums/author/info/select?offset=0&limit=100')
            .then(response => response.json())
            .then((data) => {
                this.items = data;
                this.loaded = true;
            });
    },
};
</script>

<template>
    <masonry-wall :items="items" :ssr-columns="1" :gap="20" :min-columns="4" :max-columns:="10" column-width="300"
        v-if="loaded">
        <template #default="{ item }">
            <a-card hoverable style="border-radius: 2%;">
                <template #cover>
                    <RouterLink :to="'/albums/artworks/' + item.authorId">
                        <div style="overflow: hidden;">
                            <img :src="item.post"
                                style="width: 100%; object-fit: cover; height: 250px; transition: transform 0.3s ease;"
                                class="hover" />
                        </div>
                    </RouterLink>
                </template>
                <div>
                    <a-avatar :size="30" :style="{ marginRight: '8px' }">
                        <img :src="item.profile">
                    </a-avatar>
                    <a-typography-text style="font-weight: bold;">{{ item.name }}</a-typography-text>
                </div>
            </a-card>
        </template>
    </masonry-wall>
</template>
<style>
.hover:hover {
    transform: scale(1.1);
}
</style>