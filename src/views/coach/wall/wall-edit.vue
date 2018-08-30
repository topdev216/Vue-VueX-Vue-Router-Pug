<template>
<section id="wall" class="wall">
  <div class="c-grid">
    <div class="wall__wrapper">
      <h1 class="wall__title title">Edit post</h1>
      <a href="#" class="wall__btn">Send updated post</a>
    </div>

    <div class="wall__createEdit">
      <div class="wall__createEdit-left">

        <div>

          <div class="wall__createEdit-img">
            <img src="@/assets/img/img-post.png" srcset="@/assets/img/img-post@2x.png 2x" alt="">
          </div>

        </div>

        <a href="#">Edit photo or video</a>

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
  name: 'wall-edit',
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
