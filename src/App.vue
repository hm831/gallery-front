<script>
import { PictureOutlined, FolderOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons-vue';
export default {
  setup() {
    const handleSelect = (v) => {
      console.log(v)
    };
    return {
      handleSelect
    }
  },
  components: {
    PictureOutlined,
    FolderOutlined,
    HeartOutlined,
    StarOutlined
  },
  data() {
    return {
      fontSize: '22px',
      marginRight: '4px',
      loaded: false
    }
  },
  methods: {
  },
  computed: {
    dropdownLoad() {
      return this.$route.path === '/' ||
        this.$route.path === '/home' ||
        this.$route.path === '/stars' ||
        this.$route.matched[0].path === '/albums/artworks/:id'
    }
  }
}
</script>
<template>
  <a-layout>
    <!-- 固定头部 -->
    <a-layout-header class="header" :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <a-row style="margin-top: 0.7%;" align="end">
        <a-col :span="20" style="padding-left: 2.5%;">
          <RouterLink to="/home" class="logo">Gallery</RouterLink>
        </a-col>
        <a-col :span="4" v-if="dropdownLoad">
          <a-space size="large">
            <a-dropdown @select="handleSelect">
              <a-button class="item">列数</a-button>
              <template #content>
                <RouterLink to="?columns=3" class="doption">
                  <a-doption>3</a-doption>
                </RouterLink>
                <RouterLink to="?columns=4" class="doption">
                  <a-doption>4</a-doption>
                </RouterLink>
                <RouterLink to="?columns=5" class="doption">
                  <a-doption>5</a-doption>
                </RouterLink>
                <RouterLink to="?columns=6" class="doption">
                  <a-doption>6</a-doption>
                </RouterLink>
                <RouterLink to="?columns=7" class="doption">
                  <a-doption>7</a-doption>
                </RouterLink>
              </template>
            </a-dropdown>
            <a-button class="item">R-18</a-button>
          </a-space>
        </a-col>
      </a-row>
    </a-layout-header>

    <a-layout>
      <!-- 固定侧边栏 -->
      <a-layout-sider width="220" :style="{ height: '100vh', position: 'fixed', left: 0, top: '64px' }">
        <a-menu :selectable="false" mode="inline" style="height: 100%; padding: 30px;">
          <a-space direction="vertical" size="mini">
            <RouterLink to="/home">
              <a-menu-item class="m-item">
                <PictureOutlined :style="{ fontSize: fontSize, marginRight: marginRight }" />
                <span class="menu-font">画廊</span>
              </a-menu-item>
            </RouterLink>
            <RouterLink to="/albums">
              <a-menu-item class="m-item">
                <FolderOutlined :style="{ fontSize: fontSize, marginRight: marginRight }" />
                <span class="menu-font">作品</span>
              </a-menu-item>
            </RouterLink>
            <RouterLink to="/stars">
              <a-menu-item class="m-item">
                <StarOutlined :style="{ fontSize: fontSize, marginRight: marginRight }" />
                <span class="menu-font">收藏</span>
              </a-menu-item>
            </RouterLink>
            <RouterLink to="/albums">
              <a-menu-item class="m-item">
                <HeartOutlined :style="{ fontSize: fontSize, marginRight: marginRight }" />
                <span class="menu-font">写真</span>
              </a-menu-item>
            </RouterLink>
          </a-space>
        </a-menu>
      </a-layout-sider>

      <!-- 内容部分 -->
      <a-layout-content :style="{
        marginLeft: '180px',
        marginTop: '64px',
        padding: '24px 120px',
        minHeight: '280px',
        background: '#fff',
      }">
        <RouterView />
      </a-layout-content>
    </a-layout>

    <!-- 页脚 -->
    <!-- <a-layout-footer style="text-align: center; margin-left: 180px;">
      Gallery
    </a-layout-footer> -->
  </a-layout>
</template>
<style scoped>
.logo {
  color: black;
  font-size: x-large;
  font-family: Wawati SC;
  text-decoration: none;
}

.header {
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  height: 6.5%;
  background-color: white;
}

.item {
  color: black;
  font-size: large;
  font-family: Wawati SC;
  background: none;
}

.doption {
  font-family: Wawati SC;
  text-decoration: none;
}

.menu-font {
  font-size: x-large;
  font-family: Wawati SC;
}

a:link {
  color: inherit;
  text-decoration: none;
}

a:visited {
  color: inherit;
}

a:hover {
  color: inherit;
}

a:active {
  color: inherit;
}
</style>
