<template>
<header id="header" class="header">
  <div class="header__wrapper">
    <div class="header--left">
      <div class="header--hamburger">
        <div class="hamburger" role="button" @click="hamburgerClick()" :class="isHamburgerActive ? 'is-active' : ''">
          <div class="hamburger-box">
            <div class="hamburger-inner"></div>
          </div>
        </div>
      </div>
      <div class="header--logotype">
        <div class="logo">
          <router-link to="/" title="Zura Health">
            <img src="@/assets/img/img-logotype.png" srcset="@/assets/img/img-logotype@2x.png 2x"  alt="Zura Health logo" title="ZuraHealth">
          </router-link>
        </div>
      </div>
    </div>
    <div class="header--right">
      <div class="header--group">
        <div class="groupHeader headerDropdown"><a class="groupHeader__btn" href="#" title=""><sup><span>2</span></sup>
            <p>Group name</p>
            <svgicon class="icon icon-i-arrow" name="arrow"></svgicon>
          </a>
          <div class="groupHeader__dropdown headerDropdown__wrap">
            <div class="headerDropdown__cover">
              <div class="headerDropdown__corner"></div>
              <div class="headerDropdown__box">
                <ul class="headerDropdown__list">
                  <li class="headerDropdown__item"><a class="headerDropdown__link headerDropdown__link--badge" href="#" title="" role="button">
                      <p>General group</p><sup><span>2</span></sup></a></li>
                  <li class="headerDropdown__item"><a class="headerDropdown__link headerDropdown__link--badge" href="#" title="" role="button">
                      <p>Group name</p><sup><span>2</span></sup></a></li>
                  <li class="headerDropdown__item"><a class="headerDropdown__link headerDropdown__link--badge" href="#" title="" role="button">
                      <p>Group name</p><sup><span>2</span></sup></a></li>
                  <li class="headerDropdown__item"><a class="headerDropdown__link headerDropdown__link--badge" href="#" title="" role="button">
                      <p>Group name</p><sup><span>2</span></sup></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header--profile">
        <div class="profileHeader headerDropdown"><a class="profileHeader__btn" href="#" title="">
            <div><img src="@/assets/img/img-profileHeader.jpg" srcset="@/assets/img/img-profileHeader@2x.jpg 2x" alt="" title=""></div>
            <p>Christian Vizcarra</p>
            <svg class="icon icon-i-arrow ">
              <use xlink:href="./img/sprite.svg#i-arrow"></use>
            </svg></a>
          <div class="profileHeader__dropdown headerDropdown__wrap">
            <div class="headerDropdown__cover">
              <div class="headerDropdown__corner"></div>
              <div class="headerDropdown__box">
                <ul class="headerDropdown__list">
                  <li class="headerDropdown__item"><a class="headerDropdown__link" href="#" title="">My profile</a></li>
                  <li class="headerDropdown__item"><a class="headerDropdown__link" href="#" title="">My coaching calendar</a></li>
                  <li class="headerDropdown__item"><a class="headerDropdown__link" href="#" title="">Support</a></li>
                  <li class="headerDropdown__item"><a class="headerDropdown__link" href="#" title="">Log out</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
</template>

<script>
export default {
  data () {
    return {
      isHamburgerActive: false
    }
  },
  methods: {
    hamburgerClick () {
      this.$store.commit('hamburgerVisibility', 'toggle')
    }
  }
}
</script>

<style scoped>
</style>
