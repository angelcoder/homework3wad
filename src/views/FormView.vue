<template>
<div>
    
  <form @submit.prevent ="validateForm">
  <label for="email">Email</label>
  <input type="email" placeholder="Email" required v-model="email">
  <label for="password">Password</label>
  <input type="password" placeholder="Password" required v-model="password">
  <div v-if="validatePassword" class="error"> {{validatePassword}}</div>

<div class="submit">
    <button>Signup </button>
</div>
</form>


</div>


</template>

<script>
export default {
name: "FormView", 

data: function() {
    return {
   email: '',
   password: '',
   role: '',
   terms: false,
   validatePassword:'',
  }},
  methods: {
   /* Validate password */
   validateForm(){
   console.log('signup is submitted');
   this.validatePassword = (this.password.length <8 || this.password> 15)? 'password must be between 8-15 chars':''
   console.log(this.validatePassword);
   let regex = /[a-z]+[A-Z]+[0-9]+_+/
   console.log(regex.test(this.password));
   console.log(this.password);
   this.validatePassword = regex.test(this.password)? '':'password must contain a combination of Uppercase characters (A-Z), Lowercase characters (a-z), Digits (0-9), and _'
   }
  }
}
</script>

<style scoped>
form {
  max-width: 420px;
  margin: 10px auto;
  background:  rgb(208,240,192);
  border-radius: 20px;
  text-align: left;
  padding: 20px;
  border-radius: 10px;
}

label {
    color: black;
    display: inline-block;
}

input{
display: block;
padding: 10px 6px;
width: 60%;
text-align: center;
box-sizing: border-box;
border-radius: 20px;
border: none;
border-bottom: 1px solid white;
color: blue;
}
button{
background:  rgb(137, 207, 240);
border: 0;
padding: 5px 20px;
margin-top:  15px;
color: black;
border-radius: 20px;
}
h2, .submit{
    text-align: center;
}


.error{
    color: red;
    font-size: 0.8em;
    margin-top:  10px;
    text-align: center;
}
</style>