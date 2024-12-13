<script>
export default {
    data() {
        return {
            loaded: false,
            items: null
        };
    },
    mounted() {
        fetch('http://'+this.host+':8000/cosplays/select')
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
                    <RouterLink :to="'/cosplays/photos/' + item.id">
                        <div style="overflow: hidden;">
                            <img :src="item.cover"
                                style="width: 100%; object-fit: cover; transition: transform 0.3s ease;"
                                class="hover" />
                        </div>
                    </RouterLink>
                </template>
                <a-card-meta :title="item.author + '   ' + item.title"></a-card-meta>
            </a-card>
        </template>
    </masonry-wall>
</template>
<style>
.hover:hover {
    transform: scale(1.1);
}
</style>