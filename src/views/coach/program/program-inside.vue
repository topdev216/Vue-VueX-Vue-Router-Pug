<template>
  <section id="program" class="program">
    <div class="c-grid">
      <div class="program__wrapper">
        <h1 class="program__title title">Nutrition 101</h1>

        <div class="program__tabs-row">

          <div class="program__tabs-wrap">
            <router-link to="/program-inside/step-1" title="1" class="program__tabs" exact>1</router-link>
            <router-link to="/program-inside/step-2" title="2" class="program__tabs" exact>2</router-link>
            <router-link to="/program-inside/step-3" title="3" class="program__tabs" exact>3</router-link>
            <router-link to="/program-inside/step-4" title="4" class="program__tabs" exact>4</router-link>
            <router-link to="/program-inside/step-5" title="4" class="program__tabs" exact>5</router-link>
            <router-link to="/program-inside/step-6" title="4" class="program__tabs" exact>6</router-link>
            <router-link to="/program-inside/step-7" title="4" class="program__tabs" exact>7</router-link>
          </div>

          <a href="#" class="program__tabs-btn">Toolkit for Phase #</a>

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
  name: 'program-inside',
  data () {
    return {}
  }
}
</script>
