<template>
<section id="profile" class="profile">
  <div class="c-grid">
    <div class="profile__wrapper">
      <h1 class="profile__title title">My profile</h1>

      <div class="profile__tabs-wrap">
        <router-link to="/profile/editProfile" title="Phase 1" class="profile__tabs" exact>Edit profile</router-link>
        <router-link to="/profile/changePassword" title="Phase 2" class="profile__tabs" exact>Change password</router-link>
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
  name: 'profile',
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
