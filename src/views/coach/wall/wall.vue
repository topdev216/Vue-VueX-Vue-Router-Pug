<template>
  <section id="wall" class="wall">
    <div class="c-grid">
      <div class="wall__wrapper">
        <h1 class="wall__title title">Wall</h1>
        <a href="#" class="wall__btn">Compose new post</a>
      </div>

      <div class="wall__scroll">

        <div class="wall__row">

          <div class="wall__col wall__col-0">

            <div class="wall__col-title-wrap">
              <p class="wall__col-title">Notifications</p>
              <a href="#">mark all read</a>
            </div>

            <div class="wall__notify">
              <ul>
                <li class="is-unread">
                  <a href="#" class="wall__notify-btn">
                    <div>
                      <p>New Likes on your post</p>
                    </div>
                    <div>
                      <p>March 14</p>
                    </div>
                  </a>
                </li>
                <li class="is-active">
                  <a href="#" class="wall__notify-btn">
                    <div>
                      <p>New Comment on your post</p>
                    </div>
                    <div>
                      <p>March 14</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="wall__notify-btn">
                    <div>
                      <p>New Comment on your post</p>
                    </div>
                    <div>
                      <p>March 14</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="wall__notify-btn">
                    <div>
                      <p>New Comment on your post</p>
                    </div>
                    <div>
                      <p>March 14</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="wall__notify-btn">
                    <div>
                      <p>New Likes on your post</p>
                    </div>
                    <div>
                      <p>March 14</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="wall__notify-btn">
                    <div>
                      <p>New Likes on your post</p>
                    </div>
                    <div>
                      <p>March 14</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div class="wall__col wall__col-1">

            <div class="wall__col-title-wrap">
              <p class="wall__col-title">All posts</p>
            </div>

            <div class="wall__post">

              <a href="#" class="wall__post-btn">

                <div class="wall__post-btn--head">

                  <div class="wall__post-user">
                    <img src="@/assets/img/img-profileHeader.jpg" srcset="@/assets/img/img-profileHeader@2x.jpg 2x" alt="">
                  </div>

                  <div>
                    <p>Marco Chavez</p>
                    <p>16 days ago</p>
                  </div>

                </div>

                <div class="wall__post-btn--body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... <a href="#">see more</a></p>
                </div>

                <div class="wall__post-btn--footer">

                  <div>
                    <a href="#"class="is-unlike">
                      <svgicon name="like" class="icon wall__post-btn--like" :original="true"/>
                      <p>15k likes</p>
                    </a>
                    <a href="#">
                      <svgicon name="comments" class="icon wall__post-btn--comments" :original="true"/>
                      <p>24 Comments</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <svgicon name="setting" class="icon wall__post-btn--setting" :original="true"/>
                    </a>
                  </div>

                </div>

              </a>

              <a href="#" class="wall__post-btn">

                <div class="wall__post-btn--head">

                  <div class="wall__post-user">
                    <img src="@/assets/img/img-profileHeader.jpg" srcset="@/assets/img/img-profileHeader@2x.jpg 2x" alt="">
                  </div>

                  <div>
                    <p>Marco Chavez</p>
                    <p>16 days ago</p>
                  </div>

                </div>

                <div class="wall__post-btn--body">
                  <div class="wall__post-img">
                    <img src="@/assets/img/img-post.png" srcset="@/assets/img/img-post@2x.png 2x" alt="">
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... <a href="#">see more</a></p>
                </div>

                <div class="wall__post-btn--footer">

                  <div>
                    <a href="#"class="is-like">
                      <svgicon name="like" class="icon wall__post-btn--like" :original="true"/>
                      <p>15k likes</p>
                    </a>
                    <a href="#">
                      <svgicon name="comments" class="icon wall__post-btn--comments" :original="true"/>
                      <p>24 Comments</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <svgicon name="setting" class="icon wall__post-btn--setting" :original="true"/>
                    </a>
                  </div>

                </div>

              </a>

            </div>

            <div class="wall__col-title-wrap">
              <a href="">< all posts</a>
              <p class="wall__col-title">Post details</p>
            </div>

            <div class="wall__post wall__post--details">

              <a href="#" class="wall__post-btn">

                <div class="wall__post-btn--head">

                  <div class="wall__post-user">
                    <img src="@/assets/img/img-profileHeader.jpg" srcset="@/assets/img/img-profileHeader@2x.jpg 2x" alt="">
                  </div>

                  <div>
                    <p>Marco Chavez</p>
                    <p>16 days ago</p>
                  </div>

                </div>

                <div class="wall__post-btn--body">
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                  <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>

                <div class="wall__post-btn--footer">

                  <div>
                    <a href="#"class="is-unlike">
                      <svgicon name="like" class="icon wall__post-btn--like" :original="true"/>
                      <p>15k likes</p>
                    </a>
                    <a href="#">
                      <svgicon name="comments" class="icon wall__post-btn--comments" :original="true"/>
                      <p>24 Comments</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <svgicon name="setting" class="icon wall__post-btn--setting" :original="true"/>
                    </a>
                  </div>

                </div>

              </a>

              <a href="#" class="wall__post-btn">

                <div class="wall__post-btn--head">

                  <div class="wall__post-user">
                    <img src="@/assets/img/img-profileHeader.jpg" srcset="@/assets/img/img-profileHeader@2x.jpg 2x" alt="">
                  </div>

                  <div>
                    <p>Marco Chavez</p>
                    <p>16 days ago</p>
                  </div>

                </div>

                <div class="wall__post-btn--body">
                  <div class="wall__post-img">
                    <img src="@/assets/img/img-post.png" srcset="@/assets/img/img-post@2x.png 2x" alt="">
                  </div>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                  <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>

                <div class="wall__post-btn--footer">

                  <div>
                    <a href="#"class="is-like">
                      <svgicon name="like" class="icon wall__post-btn--like" :original="true"/>
                      <p>15k likes</p>
                    </a>
                    <a href="#">
                      <svgicon name="comments" class="icon wall__post-btn--comments" :original="true"/>
                      <p>24 Comments</p>
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <svgicon name="setting" class="icon wall__post-btn--setting" :original="true"/>
                    </a>
                  </div>

                </div>

              </a>

            </div>

          </div>

          <div class="wall__col wall__col-2">

            <div class="wall__col-title-wrap">
              <p class="wall__col-title">Comments</p>
            </div>

            <div class="wall__comments wall__comments--empty">

              <div class="wall__comments-svg">
                <svgicon name="empty-comments" class="icon" :original="true"/>
                <p>Select a post to see comments</p>
              </div>

            </div>

            <div class="wall__comments">

              <div class="wall__comments--body">

                <a href="#" class="wall__post-btn">

                  <div class="wall__post-btn--head">

                    <div class="wall__post-user">
                      <img src="@/assets/img/img-profileHeader.jpg" srcset="@/assets/img/img-profileHeader@2x.jpg 2x" alt="">
                    </div>

                    <div>
                      <p>Marco Chavez</p>
                      <p>16 days ago</p>
                    </div>

                  </div>

                  <div class="wall__post-btn--body">
                    <p>Like...</p>
                  </div>

                </a>

                <a href="#" class="wall__post-btn">

                  <div class="wall__post-btn--head">

                    <div class="wall__post-user">
                      <img src="@/assets/img/img-profileHeader.jpg" srcset="@/assets/img/img-profileHeader@2x.jpg 2x" alt="">
                    </div>

                    <div>
                      <p>Marco Chavez</p>
                      <p>16 days ago</p>
                    </div>

                  </div>

                  <div class="wall__post-btn--body">
                    <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                  </div>

                  <div class="wall__post-btn--footer">

                    <div></div>
                    <div>
                      <a href="#">
                        <svgicon name="setting" class="icon wall__post-btn--setting" :original="true"/>
                      </a>
                    </div>

                  </div>

                </a>

                <a href="#" class="wall__post-btn">

                  <div class="wall__post-btn--head">

                    <div class="wall__post-user">
                      <img src="@/assets/img/img-profileHeader.jpg" srcset="@/assets/img/img-profileHeader@2x.jpg 2x" alt="">
                    </div>

                    <div>
                      <p>Marco Chavez</p>
                      <p>16 days ago</p>
                    </div>

                  </div>

                  <div class="wall__post-btn--body">
                    <p>Many desktop publishing packages.</p>
                  </div>

                </a>

                <a href="#" class="wall__post-btn">

                  <div class="wall__post-btn--head">

                    <div class="wall__post-user">
                      <img src="@/assets/img/img-profileHeader.jpg" srcset="@/assets/img/img-profileHeader@2x.jpg 2x" alt="">
                    </div>

                    <div>
                      <p>Marco Chavez</p>
                      <p>16 days ago</p>
                    </div>

                  </div>

                  <div class="wall__post-btn--body">
                    <p>Many desktop publishing packages and web page editors now use.</p>
                  </div>

                  <div class="wall__post-btn--footer">

                    <div></div>
                    <div>
                      <a href="#">
                        <svgicon name="setting" class="icon wall__post-btn--setting" :original="true"/>
                      </a>
                    </div>

                  </div>

                </a>

              </div>
              <div class="wall__comments--footer">

                <form action="" autocomplete="off">

                  <div>
                    <input type="text" placeholder="Type a comment">
                  </div>
                  <div>
                    <button type="submit">
                      <svgicon name="send" class="icon" :original="true"/>
                    </button>
                  </div>

                </form>

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
  name: 'wall',
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
