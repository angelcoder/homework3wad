<template>
    <div class="post" v-for="post in posts" :key="post.post_id"> 
      
      <div v-if = False>
        <h1>{{photo}}</h1>
      </div>
       <div class="post-header">
          <div class="post-profile">
            <div class="profilePlate">
              <img
                src="../assets/images/avatar.png"
                srcset="../assets/images/avatar.png 2x"
                class="profilePlate-image"
                alt="Profile avatar"
              />
            </div>
          </div>
          <div class="post-date">{{post.date}}</div>
        </div>
        <div class="post-content">

          <div class="post-contentItem">
          <div v-if = "post.photo != ' ' ">
            <img
                :src="post.photo"
                class="post-image"
                alt="post_image"
            />
          </div>
          </div>

          <div class="post-contentItem">{{post.body}}</div>
          <div class="post-bottom">
            <div class="post-profile">
              
              
              <div class="thumbs">
                <button v-on:click="addlike(post.post_id)"><img thumb src="../assets/images/like_thumb.png" width=" 20" height=" 20"/></button>
                {{ post.num_likes }} likes
                </div>


            </div>
            
          </div>
        </div>
      <!-- <p>  <b> Body: </b> {{post.body}} </p> -->
    </div>
    <div class="reset">
      <button v-on:click="zero">Reset likes</button>
</div> 
</template>


<script>
export default {
    name: "getPost",
    methods: {

      addlike: function(post_id){
        this.$store.commit("addlike", {post_id})
        
      },
      
      zero: function(){
        this.$store.commit("zero")
      }
    },
    computed: {
      
      posts () { 
        
  return this.$store.getters.postsget}
    }
}
</script>

<style scoped>


.reset{
  text-align:center;
  width: 75px;
  height: 20px;
  margin: 0 auto;
  }

body {
    line-height: 1.6;
    font-size: 600px;
}
.post {
  padding: 16px;
  border-radius: 12px;
  background-color: #A9A9A9;
  margin-bottom: 40px;
}

.post-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 8px;
}

.post-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 8px;
}


.post-profile {
  flex: 0 0 auto;
}

.profilePlate-image {
  display: inline-block;
  height: 40px;
  width: 40px;
  object-fit: cover; /* to avoid image distortion */
  vertical-align: top;
}

.post-image {
  display: inline-block;
  width: 100%;
  vertical-align: top;
  margin-bottom: 8px;
}

.post-image-like {
  display: inline-block;
  width: 10%;
  vertical-align: bottom;
}


</style>