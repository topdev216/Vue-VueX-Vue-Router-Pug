<template>
<section id="wall" class="wall">
  <div class="c-grid">
    <div class="wall__wrapper">
      <h1 class="wall__title title">Create a new post</h1>
      <a href="#" class="wall__btn">Send post</a>
    </div>

    <div class="wall__createEdit">
      <div class="wall__createEdit-left">

        <div>

          <div class="wall__createEdit-img">
            <svgicon name="empty-post-img" class="icon" :original="true"/>
          </div>

        </div>

        <a href="#">Add a photo or video</a>

      </div>

      <div class="wall__createEdit-right">

        <div>

          <p class="wall__createEdit-title">What would you like to say?</p>

          <form action="" autocomplete="off">

            <textarea name="createEdit-post"></textarea>

          </form>

        </div>

      </div>
    </div>

  </div>
</section>
</template>

<script>
export default {
  name: 'wall-create',
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
