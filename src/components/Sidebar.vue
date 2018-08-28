<template>
<aside id="sidebar" class="sidebar" :class="hamburgerVisibility ? 'is-open' : ''">
  <div class="sidebar__wrapper">
    <ul class="sidebar__list">
      <router-link
        tag="li"
        :to="item.href"
        v-for="item in sideBarData"
        :key="item.btnName"
        class="sidebar__item">
        <a
          :title="item.btnName"
          class="sidebar__link"
          :class="`sidebar__link-${item.classBtnMod}`">
          <div>
            <svgicon
              :name="item.svgName"
              class="icon"
              :original="true"
              :class="`icon-i-${item.svgName}`" />
          </div>
          <p>{{ item.btnName }}</p>
          <sup v-if="item.badge">
            <span>
              {{ item.badgeVal }}
            </span>
          </sup>
        </a>
      </router-link>
    </ul>
  </div>
</aside>
</template>

<script>
export default {
  data () {
    return {
      sideBarData: [{
        href: '/dashboard',
        classBtnMod: '0',
        svgName: 'dashboard',
        btnName: 'Dashboard',
        badge: false,
        badgeVal: ''
      }, {
        href: '/calls',
        classBtnMod: '1',
        svgName: 'call',
        btnName: 'Coaching Calls',
        badge: true,
        badgeVal: '2'
      }, {
        href: '/messages',
        classBtnMod: '2',
        svgName: 'message',
        btnName: 'Messages',
        badge: true,
        badgeVal: '5'
      }, {
        href: '/wall',
        classBtnMod: '3',
        svgName: 'wall',
        btnName: 'Wall',
        badge: true,
        badgeVal: '9'
      }, {
        href: '/program',
        classBtnMod: '4',
        svgName: 'program',
        btnName: 'Program',
        badge: false,
        badgeVal: ''
      }, {
        href: '/toolkit',
        classBtnMod: '5',
        svgName: 'toolkit',
        btnName: 'Toolkit',
        badge: false,
        badgeVal: ''
      }]
    }
  },
  computed: {
    hamburgerVisibility () {
      return this.$store.state.hamburgerVisibility
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
