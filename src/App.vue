<script setup>
import Nav from '@/layout/Nav/index.vue'
import Banner from '@/layout/Banner/index.vue'
import Main from '@/layout/Main/index.vue'
import Sidebar from '@/layout/Sidebar/index.vue'
import Footer from '@/layout/Footer/index.vue'
</script>

<template>
  <div class="container pr w">
    <Nav />
    <Banner />
    <Main />
    <Sidebar />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.container {
  background: #eff3f8;
  min-width: 1200px;
}
</style>

<style>
#app {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
