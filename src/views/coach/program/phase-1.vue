<template>
  <div class="program__row">

    <div class="program__row-left">

      <div class="program__img-wrap">
        <svgicon name="img-empty" class="icon" :original="true"/>
      </div>

      <a href="#" class="program__img-btn">Toolkit for Phase 1</a>

    </div>

    <div class="program__row-right">

      <div class="program__block">
        <p class="program__block-title">Welcome to Phase 1</p>

        <p class="program__block-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>

      <div class="program__block">

        <p class="program__block-title">Topics</p>

        <div class="program__box">
          <div class="program__box-head">
            <p class="program__box-title">Goals & Intentios</p>

            <router-link to="/program-inside">
              <a class="program__box-btn">Visit</a>
            </router-link>

          </div>
          <p class="program__box-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>

        <div class="program__box">
          <div class="program__box-head">
            <p class="program__box-title">Nutrition 101</p>

            <router-link to="/program-inside">
              <a class="program__box-btn">Visit</a>
            </router-link>

          </div>
          <p class="program__box-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'phase-1',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
