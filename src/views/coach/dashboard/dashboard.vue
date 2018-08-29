<template>
  <section id="dashboard" class="dashboard">
    <div class="c-grid">
      <div class="dashboard__wrapper">
        <h1 class="dashboard__title title">Dashboard</h1>

        <div class="dashboard__tabs-wrap">
          <router-link to="/dashboard/weight" title="Weight" class="dashboard__tabs" exact>Weight</router-link>
          <router-link to="/dashboard/bmi" title="BMI" class="dashboard__tabs" exact>BMI</router-link>
          <router-link to="/dashboard/engagement" title="Engagement" class="dashboard__tabs" exact>Engagement</router-link>
          <router-link to="/dashboard/education" title="Education" class="dashboard__tabs" exact>Education</router-link>
          <router-link to="/dashboard/well-being" title="Well being" class="dashboard__tabs" exact>Well being</router-link>
          <router-link to="/dashboard/feedback" title="Feedback" class="dashboard__tabs" exact>Feedback</router-link>
          <router-link to="/dashboard/profile" title="Profile" class="dashboard__tabs" exact>Profile</router-link>
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
  name: 'dashboard',
  data () {
    return {}
  }
}
</script>
