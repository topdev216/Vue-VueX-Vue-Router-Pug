<template>
  <section id="calls" class="calls">
    <div class="c-grid">
      <div class="calls__wrapper">
        <h1 class="calls__title title">Coaching Calls</h1>

        <div class="calls__row">
          <div class="calls__block">
            <p class="calls__block-title">Next Coaching call</p>
            <p class="calls__block-subtitle">Start your next coaching call here</p>

            <div class="calls__box">
              <div class="calls__box-head">
                <p class="calls__box-title">Call title</p>
                <div class="calls__box-time">
                  <svgicon name="clock-small" class="icon calls__box-icon" :original="true"/>
                  <span>02:34</span>
                </div>
                <p class="calls__box-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua.</p>
              </div>

              <div class="calls__box-body">
                <a href="#" class="calls__box-link">
                  <svgicon name="doc" class="icon calls__box-icon" :original="true"/>
                </a>
                <button type="button" class="calls__box-btn calls__box-btn--c">Start</button>
              </div>
            </div>

            <div class="calls__box">
              <div class="calls__box-head">
                <p class="calls__box-title">Call title</p>
                <div class="calls__box-time">
                  <svgicon name="clock-small" class="icon calls__box-icon" :original="true"/>
                  <span>02:34</span>
                </div>
                <p class="calls__box-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua.</p>
              </div>

              <div class="calls__box-body">
                <a href="#" class="calls__box-link">
                  <svgicon name="doc" class="icon calls__box-icon" :original="true"/>
                  <span>+</span>
                </a>
              </div>
            </div>
          </div>

          <div class="calls__block">
            <p class="calls__block-title">Coaching history</p>
            <p class="calls__block-subtitle">If you missed you coaching call, watch here</p>

            <div class="calls__box">
              <div class="calls__box-head">
                <p class="calls__box-title">Call title</p>
                <div class="calls__box-time">
                  <svgicon name="clock-small" class="icon calls__box-icon" :original="true"/>
                  <span>02:34</span>
                </div>
                <p class="calls__box-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua.</p>
              </div>

              <div class="calls__box-body">
                <a href="#" class="calls__box-link">
                  <svgicon name="doc" class="icon calls__box-icon" :original="true"/>
                </a>
                <button type="button" class="calls__box-btn calls__box-btn--wc">Watch</button>
              </div>
            </div>

            <div class="calls__box">
              <div class="calls__box-head">
                <p class="calls__box-title">Call title</p>
                <div class="calls__box-time">
                  <svgicon name="clock-small" class="icon calls__box-icon" :original="true"/>
                  <span>02:34</span>
                </div>
                <p class="calls__box-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua et dolore magna aliqua.</p>
              </div>

              <div class="calls__box-body">
                <a href="#" class="calls__box-link">
                  <svgicon name="doc" class="icon calls__box-icon" :original="true"/>
                  <span>+</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'calls',
    data() {
      return {}
    }
  }
</script>

<style scoped lang="scss">

</style>
