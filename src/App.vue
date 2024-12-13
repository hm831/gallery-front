<script>
import { PictureOutlined, FolderOutlined, HeartOutlined, StarOutlined } from '@ant-design/icons-vue';
export default {
  setup() {
    const handleSelect = (v) => {
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
      loaded: false,
      paddingRight: '0%',
      paddingTop: '3.1%',
      paddingLeftValues1: ['10%', '14%'],
      paddingLeftValues2: ['0%', '4%'],
      siderLoad: true,
      siderState1: '收起侧栏',
      siderState2: '展开侧栏',
      contentStyle: null,
      viewIndex: 0
    }
  },
  mounted() {
    this.setStyle()
  },
  watch: {
    $route(to, from) {
      this.styleByPath(to)
    }
  },
  methods: {
    setStyle(index) {
      this.contentStyle = {
        paddingLeft: this.paddingLeftValues1[index],
        paddingRight: this.paddingRight,
        paddingTop: this.paddingTop,
        background: '#fff'
      }
    },
    styleByPath(route) {
      if (route.path === '/' ||
        route.path === '/home' ||
        route.path === '/stars' ||
        route.matched[0].path === '/albums/artworks/:id' ||
        route.matched[0].path === '/cosplays/photos/:id' ||
        route.path === '/cosplays/gallery') {
        this.paddingRight = '0%';
        this.paddingTop = '3.1%';
        this.viewIndex = 0;
        this.setStyle(this.viewIndex)
      }
      else {
        this.paddingRight = '4%';
        this.paddingTop = '4.1%'
        this.viewIndex = 1;
        this.setStyle(this.viewIndex)
      }
    },
    collapseSider() {
      this.siderLoad = !this.siderLoad;
      let tmpValues = this.paddingLeftValues1;
      this.paddingLeftValues1 = this.paddingLeftValues2;
      this.paddingLeftValues2 = tmpValues;
      let tmpState = this.siderState1;
      this.siderState1 = this.siderState2;
      this.siderState2 = tmpState;
      this.setStyle(this.viewIndex)
    },
    addColunmsParam(col) {
      const newQuery = { columns: col };
      this.$router.push({ query: { ...this.$route.query, ...newQuery } });
    },
    addModeParam(mode) {
      const newQuery = { mode: mode };
      this.$router.push({ query: { ...this.$route.query, ...newQuery } });
    }
  },
  computed: {
    dropdownLoad() {
      return this.$route.path === '/' ||
        this.$route.path === '/home' ||
        this.$route.path === '/stars' ||
        this.$route.matched[0].path === '/albums/artworks/:id' ||
        this.$route.matched[0].path === '/cosplays/photos/:id' ||
        this.$route.path === '/cosplays/gallery'
    },
    columns12() {
      return this.$route.matched[0].path === '/cosplays/photos/:id'
    }
  }
}
</script>
<template>
  <a-layout style="height: 100%;">
    <!-- 固定头部 -->
    <a-layout-header class="header" :style="{ height: '6%', position: 'fixed', zIndex: 1, width: '100%' }">
      <a-row style="padding-top: 0.7%;" align="center">
        <a-col :span="19" style="padding-left: 2.5%;">
          <RouterLink to="/">
            <div>
              <img src="/src/assets/heart.png" style="width: 1.6%;">
              <span class="logo">Gallery</span>
            </div>
          </RouterLink>
        </a-col>
        <a-col :span="5" style="text-align: right; padding-right: 2%;">
          <a-space size="large">
            <a-button class="item" @click="collapseSider">{{ siderState1 }}</a-button>
            <a-dropdown @select="handleSelect">
              <a-button class="item" v-if="dropdownLoad">列数</a-button>
              <template #content>
                <RouterLink to="?columns=1" class="doption">
                  <a-doption v-if="columns12">1</a-doption>
                </RouterLink>
                <RouterLink to="?columns=2" class="doption">
                  <a-doption v-if="columns12">2</a-doption>
                </RouterLink>
                <a-doption @click="addColunmsParam(3)" class="doption">3</a-doption>
                <a-doption @click="addColunmsParam(4)" class="doption">4</a-doption>
                <a-doption @click="addColunmsParam(5)" class="doption">5</a-doption>
                <a-doption @click="addColunmsParam(6)" class="doption">6</a-doption>
                <a-doption @click="addColunmsParam(7)" class="doption">7</a-doption>
              </template>
            </a-dropdown>
            <a-dropdown>
              <a-button class="item" v-if="dropdownLoad">R-18</a-button>
              <template #content>
                <a-doption @click="addModeParam('all')" class="doption">全部</a-doption>
                <a-doption @click="addModeParam('safe')" class="doption">全年龄</a-doption>
                <a-doption @click="addModeParam('r18')" class="doption">R-18</a-doption>
              </template>
            </a-dropdown>
          </a-space>
        </a-col>
      </a-row>
    </a-layout-header>

    <a-layout>
      <!-- 固定侧边栏 -->
      <a-layout-sider v-if="siderLoad" :style="{ width: '10%', height: '100%', position: 'fixed', left: 0 }">
        <a-menu :selectable="false" mode="vertical" style="height: 100%; padding-top: 47%; text-align: center;">
          <a-space direction="vertical" size="mini">
            <RouterLink to="/">
              <a-menu-item class="m-item">
                <!-- <PictureOutlined :style="{ fontSize: fontSize, marginRight: marginRight }" /> -->
                <span class="menu-font">画廊</span>
              </a-menu-item>
            </RouterLink>
            <RouterLink to="/albums">
              <a-menu-item class="m-item">
                <!-- <FolderOutlined :style="{ fontSize: fontSize, marginRight: marginRight }" /> -->
                <span class="menu-font">作品</span>
              </a-menu-item>
            </RouterLink>
            <RouterLink to="/stars">
              <a-menu-item class="m-item">
                <!-- <StarOutlined :style="{ fontSize: fontSize, marginRight: marginRight }" /> -->
                <span class="menu-font">收藏</span>
              </a-menu-item>
            </RouterLink>
            <RouterLink to="/cosplays">
              <a-menu-item class="m-item">
                <!-- <HeartOutlined :style="{ fontSize: fontSize, marginRight: marginRight }" /> -->
                <span class="menu-font">图集</span>
              </a-menu-item>
            </RouterLink>
            <RouterLink to="/cosplays/gallery">
              <a-menu-item class="m-item">
                <!-- <HeartOutlined :style="{ fontSize: fontSize, marginRight: marginRight }" /> -->
                <span class="menu-font">Cosplay</span>
              </a-menu-item>
            </RouterLink>
          </a-space>
        </a-menu>
      </a-layout-sider>

      <!-- 内容部分 -->
      <a-layout-content :style="contentStyle">
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
  color: white;
  font-family: MLingWaiMedium-SC;
  ;
  text-decoration: none;
  font-weight: bolder;
  font-size: 1.5vw;
}

.header {
  border-bottom: 2px solid rgba(0, 0, 0, 0.05);
  height: 6.5%;
  background-color: #60B2E5;
}

.item {
  color: black;
  font-family: MLingWaiMedium-SC;
  ;
  background: none;
  font-size: 1.5vw;
}

.doption {
  font-family: MLingWaiMedium-SC;
  ;
  text-decoration: none;
}

.menu-font {
  font-family: MLingWaiMedium-SC;
  font-weight: bold;
  font-size: 1.4vw;
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
