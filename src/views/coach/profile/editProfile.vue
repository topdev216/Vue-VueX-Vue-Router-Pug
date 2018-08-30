<template>
  <div>

    <div class="profile__edit">

      <div class="profile__edit-left">

        <div>

          <div class="profile__edit-img">
            <img src="@/assets/img/img-profileHeader.jpg" srcset="@/assets/img/img-profileHeader@2x.jpg 2x" alt="">
          </div>

        </div>

        <a href="#" class="profile__edit-btn profile__edit-btn--edit">Edit avatar</a>
        <a href="#" class="profile__edit-btn profile__edit-btn--save">Save</a>

      </div>
      <div class="profile__edit-right">

        <div>

          <form action="" class="profile__form profile__form--edit" autocomplete="off">

            <div class="profile__form-wrap">

              <div class="profile__form--left">

                <div class="profile__form-field">
                  <label class="profile__form-label" for="firstName">First name</label>
                  <div class="profile__form-input">
                    <input type="text" name="firstName" id="firstName" placeholder="William">
                    <span>Messages error...</span>
                  </div>
                </div>

                <div class="profile__form-field">
                  <label class="profile__form-label" for="email">Email</label>
                  <div class="profile__form-input">
                    <input type="text" name="email" id="email" placeholder="william@guarana.io">
                    <span>Messages error...</span>
                  </div>
                </div>

                <div class="profile__form-field">
                  <label class="profile__form-label" for="phone">Phone</label>
                  <div class="profile__form-input">
                    <input type="text" name="phone" id="phone" placeholder="438 871 1106">
                    <span>Messages error...</span>
                  </div>
                </div>

              </div>

              <div class="profile__form--right">

                <div class="profile__form-field">
                  <label class="profile__form-label" for="lastName">Last name</label>
                  <div class="profile__form-input">
                    <input type="text" name="lastName" id="lastName" placeholder="Roussel">
                    <span>Messages error...</span>
                  </div>
                </div>

                <div class="profile__form-field">
                  <div class="profile__form-label--wrap">
                    <label class="profile__form-label" for="zoomEmail">Zoom login email</label>
                    <a href="#" class="profile__form-link">What’s zoom?</a>
                  </div>
                  <div class="profile__form-input">
                    <input type="text" name="zoomEmail" id="zoomEmail" placeholder="william@guarana.io">
                    <span>Messages error...</span>
                  </div>
                </div>

                <div class="profile__form-field">
                  <label class="profile__form-label" for="facebook">Facebook</label>
                  <div class="profile__form-input">
                    <input type="text" name="facebook" id="facebook" placeholder="www.facebook.com/william">
                    <span>Messages error...</span>
                  </div>
                </div>

              </div>

            </div>

            <div>

              <div class="profile__form-field profile__form-field--textarea has-error">
                <label class="profile__form-label" for="bio">Bio</label>
                <div class="profile__form-textarea">
                  <textarea name="bio" id="bio" placeholder="Tell us about yourself in 110 characters"></textarea>
                  <span>Messages error...</span>
                </div>
              </div>

            </div>

            <div class="profile__form-wrap">

              <div class="profile__form--left">

                <div class="profile__form-field">
                  <label class="profile__form-label" for="twitter">Twitter</label>
                  <div class="profile__form-input">
                    <input type="text" name="twitter" id="twitter" placeholder="@username">
                    <span>Messages error...</span>
                  </div>
                </div>

              </div>

              <div class="profile__form--right">

                <div class="profile__form-field">
                  <label class="profile__form-label" for="instagram">Instagram</label>
                  <div class="profile__form-input">
                    <input type="text" name="instagram" id="instagram" placeholder="@username">
                    <span>Messages error...</span>
                  </div>
                </div>

              </div>

            </div>

            <div class="profile__form-field profile__form-field--btn">
              <button type="submit" class="profile__form-btn">Save</button>
            </div>

          </form>
          
        </div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'editProfile',
  data () {
    return {}
  }
}
</script>
