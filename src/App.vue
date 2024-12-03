<script>
import { PictureOutlined, FolderOutlined } from '@ant-design/icons-vue';

export default {
  components: {
    PictureOutlined,
    FolderOutlined
  }
}
</script>
<template>
  <a-layout>
    <!-- 固定头部 -->
    <a-layout-header class="header" :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo">Gallery</div>
    </a-layout-header>

    <a-layout>
      <!-- 固定侧边栏 -->
      <a-layout-sider width="220"
        :style="{ height: '100vh', position: 'fixed', left: 0, top: '64px', background: '#fff' }">
        <a-menu :selectable="false" mode="inline" style="height: 100%; padding: 30px;">
          <a-menu-item>
            <PictureOutlined />
            <RouterLink to="/">画廊</RouterLink>
          </a-menu-item>
          <a-menu-item>
            <FolderOutlined />
            <RouterLink to="/albums">图集</RouterLink>
          </a-menu-item>
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
  color: white;
  font-size: x-large;
}

::v-deep(.ant-menu-item) {
  font-size: x-large;
  margin: 20px 0;
}
</style>
