<script>
export default {
    data() {
        return {
            loaded: false,
            items: null
        };
    },
    mounted() {
        fetch('http://127.0.0.1:8000/illusts/select?sfw=true&nsfw=true&r18=false&offset=0&limit=300')
            .then(response => response.json())
            .then((data) => {
                this.items = data;
                console.log(this.items)
                this.loaded = true;
            });
    },
};
</script>
<template>
    <masonry-wall :items="items" :ssr-columns="1" :gap="7" :min-columns="4" :max-columns:="10" column-width="300"
        v-if="loaded">
        <template #default="{ item }">
            <a-card hoverable>
                <template #cover>
                    <div style="overflow: hidden;">
                        <img :alt="item.id" :src="item.link" style="width: 100%; 
                        transition: transform 0.3s ease; border-radius: 0;">
                    </div>
                </template>
            </a-card>
        </template>
    </masonry-wall>
</template>

<style>
img:hover {
    transform: scale(1.1);
}
</style>