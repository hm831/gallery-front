<script setup lang="ts">
import { onMounted } from 'vue';

const items = [
    {
        img: 'https://i.imgur.com/lnngStm.jpeg',
    },
    {
        img: 'https://i.imgur.com/q3JSHzR.jpeg',
    },
    {
        img: 'https://i.imgur.com/nEcw0HV.png',
    },
    {
        img: 'https://i.imgur.com/ZCnALW0.jpeg',
    },
];
onMounted(() => {
    const len = items.length;
    for (var i = 0; i < len * 10; i++) {
        const num = Math.floor(Math.random() * len);
        items.push(items[num]);
    }
})
</script>

<template>
    <masonry-wall :items="items" :ssr-columns="1" :gap="7" 
        :min-columns="3" :max-columns:="3" column-width="300">
        <template #default="{ item, index }">
            <div>
                <img :src="item.img" style="width: 100%;">
            </div>
        </template>
    </masonry-wall>
</template>