<template>
<section id="calendar" class="calendar">
  <div class="c-grid">
    <div class="calendar__wrapper">
      <h1 class="calendar__title title">My coaching calendar</h1>
      <p class="calendar__subtitle">To mark a day as available, you have to add at least one time slot</p>

      <div class="calendar__block calendar__block-0">
        <div class="calendar__block-head">
          <p>Monday</p>
          <div>
            <span>Available</span>
            <div class="calendar__input">
              <input type="checkbox" id="checkbox-0">
              <label for="checkbox-0">
                <i></i>
              </label>
            </div>
          </div>
        </div>

        <div class="calendar__block-body">

          <a href="#" class="calendar__block-btn">Add a time slot</a>

        </div>

        <div class="calendar__block-footer">

          <form action="">

            <textarea name="" placeholder="Add a note about your availabilities for this day of the week"></textarea>

          </form>

        </div>
      </div>

      <div class="calendar__block calendar__block-1">
        <div class="calendar__block-head">
          <p>Tuesday</p>
          <div>
            <span>Available</span>
            <div class="calendar__input">
              <input type="checkbox" id="checkbox-1">
              <label for="checkbox-1">
                <i></i>
              </label>
            </div>
          </div>
        </div>

        <div class="calendar__block-body">

          <a href="#" class="calendar__block-add">
            <span></span>3PM - 4PM</a>
          <a href="#" class="calendar__block-btn">Add a time slot</a>

        </div>

        <div class="calendar__block-footer">

          <form action="">

            <textarea name="" placeholder="Add a note about your availabilities for this day of the week"></textarea>

          </form>

        </div>
      </div>

    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'messages',
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
