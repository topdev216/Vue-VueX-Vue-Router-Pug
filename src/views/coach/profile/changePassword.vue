<template>
  <div>

    <div class="profile__change">

      <form action="" class="profile__form" autocomplete="off">

        <div class="profile__form-field has-error">
          <label class="profile__form-label" for="changePass-current">Current password</label>
          <div class="profile__form-input">
            <input type="password" name="changePass-current" id="changePass-current" placeholder="************">
            <span>Messages error...</span>
          </div>
        </div>

        <div class="profile__form-field">
          <label class="profile__form-label" for="changePass-new">New password</label>
          <div class="profile__form-input">
            <input type="password" name="changePass-new" id="changePass-new" placeholder="************">
            <span>Messages error...</span>
          </div>
        </div>

        <div class="profile__form-field">
          <label class="profile__form-label" for="changePass-confirm">Confirm password</label>
          <div class="profile__form-input">
            <input type="password" name="changePass-confirm" id="changePass-confirm" placeholder="************">
            <span>Messages error...</span>
          </div>
        </div>

        <div class="profile__form-field profile__form-field--btn">
          <button type="submit" class="profile__form-btn">Change password</button>
        </div>

      </form>

    </div>

  </div>
</template>

<script>
export default {
  name: 'changePassword',
  data () {
    return {}
  }
}
</script>
