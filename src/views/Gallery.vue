<script>
export default {
    data() {
        return {
            loaded: false,
            items: null,
            allage: true,
            r18: false
        };
    },
    watch: {
        '$route.query.mode'(newMode, oldMode) {
            this.setMode(newMode)
            this.loaded = false
            this.fetch_data()
        }
    },
    mounted() {
        if (this.$route.query.mode != null) {
            this.setMode(this.$route.query.mode)
        }
        this.fetch_data()
    },
    methods: {
        img_info(title, author) {
            const info = title + " " + author
            return info
        },
        fetch_data() {
            fetch('http://'+this.host+':8000/albums/artwork/gallery/select?allage='+this.allage+'&r18='+this.r18+'&limit=50')
            .then(response => response.json())
            .then((data) => {
                this.items = data;
                this.loaded = true;
            });
        },
        setMode(mode) {
            if (mode == "all") {
                this.allage = true,
                this.r18 = true
            } else if (mode == "safe") {
                this.allage = true,
                this.r18 = false
            } else {
                this.allage = false,
                this.r18 = true
            }
        }
    },
    computed: {
        setColumns() {
            return this.$route.query.columns == null ? 6 : this.$route.query.columns
        }
    }
};
</script>
<template>
    <a-image-preview-group infinite :actions-layout="[]" :closable="false">
        <masonry-wall :items="items" :ssr-columns="1" :gap="0" :min-columns="setColumns" :max-columns:="10"
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