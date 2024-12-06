<script>
export default {
    data() {
        return {
            loaded: false,
            items: null
        };
    },
    mounted() {
        fetch('http://localhost:8000/portfolios/author/info/select?offset=0&limit=100')
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
    <masonry-wall :items="items" :ssr-columns="1" :gap="20" :min-columns="4" :max-columns:="10" column-width="300" v-if="loaded">
        <template #default="{ item }">
            <a-card hoverable>
                <template #cover>
                    <div style="overflow: hidden;">
                        <img :src="item.post"
                            style="width: 100%; object-fit: cover; height: 500px; transition: transform 0.3s ease;" />
                    </div>
                </template>
                <a-card-meta :title="item.name">
                    <template #avatar>
                        <a-avatar :src="item.profile" />
                    </template>
                </a-card-meta>
            </a-card>
        </template>
    </masonry-wall>


</template>