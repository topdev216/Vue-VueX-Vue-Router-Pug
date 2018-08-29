<template>
  <section id="program" class="program">
    <div class="c-grid">
      <div class="program__wrapper">
        <h1 class="program__title title">Program</h1>

        <div class="program__tabs-wrap">
          <router-link to="/program/phase-1" title="Phase 1" class="program__tabs" exact>Phase 1</router-link>
          <router-link to="/program/phase-2" title="Phase 2" class="program__tabs" exact>Phase 2</router-link>
          <router-link to="/program/phase-3" title="Phase 3" class="program__tabs" exact>Phase 3</router-link>
          <router-link to="/program/phase-4" title="Phase 4" class="program__tabs" exact>Phase 4</router-link>
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
  name: 'program',
  data () {
    return {}
  }
}
</script>
