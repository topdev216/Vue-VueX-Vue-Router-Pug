<template>
  <div id="app">
    <zura-header />
    <zura-sidebar />
    <router-view/>
  </div>
</template>
<script>
import zuraHeader from '@/components/Header'
import zuraSidebar from '@/components/Sidebar'
export default {
  components: {
    zuraSidebar,
    zuraHeader
  }
}
</script>
<style lang="scss">
</style>
