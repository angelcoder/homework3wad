<template>
    <div class="feed-item" v-for="post in posts" :key="post.post_id"> 
      <p>  <b> Body: </b> {{post.body}} </p>
      <!-- <div class="post">
        <div class="post-header">
          <div class="post-profile">
            <div class="profilePlate">
              <img
                src="./res/images/avatar.png"
                srcset="./res/images/avatar.png 2x"
                class="profilePlate-image"
                alt="Profile avatar"
              />
            </div>
        </div>

        <div class="post-date">{{post.date}}</div>
          </div>

        <div class="post-content">
          <div class="post-contentItem">
            <img
              src="./res/images/tartu2024.png"
              srcset="./res/images/tartu2024.png 2x"
              class="post-image"
              alt="Tartu 2024"
            />
          </div>

          <div class="post-contentItem">{{post.body}}</div>
            <div class="post-contentItem">
              <img
               src="./res/images/like_thumb..png"
              srcset="./res/images/like_thumb.png 2x"
              class="post-image-like"
              alt="Tartu 2024"
            />
          </div>
        </div>
      </div> -->
    </div> 
</template>


<script>
export default {
    name: "getPost",
    computed: {
      posts() { return this.$store.state.posts}
    }
}
</script>

<style scoped>
body {
    position: relative;
}


</style>