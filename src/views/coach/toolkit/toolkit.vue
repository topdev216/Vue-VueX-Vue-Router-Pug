<template>
<section id="toolkit" class="toolkit">
  <div class="c-grid">
    <div class="toolkit__wrapper">
      <h1 class="toolkit__title title">Toolkit</h1>

      <div class="toolkit__tabs-wrap">
        <router-link to="/toolkit/phase-1" title="Phase 1" class="toolkit__tabs" exact>Phase 1</router-link>
        <router-link to="/toolkit/phase-2" title="Phase 2" class="toolkit__tabs" exact>Phase 2</router-link>
        <router-link to="/toolkit/phase-3" title="Phase 3" class="toolkit__tabs" exact>Phase 3</router-link>
        <router-link to="/toolkit/phase-4" title="Phase 4" class="toolkit__tabs" exact>Phase 4</router-link>
      </div>

      <div>
        <router-view/>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'toolkit',
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
