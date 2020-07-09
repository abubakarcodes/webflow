<style>
:disabled {
   background: #dddddd;
   color: dimgrey;
   border: dimgrey;
}
</style>
<template>
     <div class="section bg-white" style="margin-top: -5%">
        <div class="container center-content">
          <div class="content-width-large">
            <img src="assets/images/avatar-1.jpg" alt="" class="avatar avatar-large">
            <br/> <br/>
            <h3 class="medium-heading">Hey! I'm Brandon.  You’re minutes away from making your easiest
                financial decision. Ready to go?</h3>
            <div class="form-block space-top w-form">
              <div id="wf-form-Landing-Subscribe-Form" class="form-grid-vertical text-left">
                  <input type="text" class="form-input form-input-large w-input" v-model="firstName"  placeholder="First Name">
                  <input type="text" class="form-input form-input-large w-input" v-model="lastName"    placeholder="Last Name">
                  <button @click="example()" :disabled="!validate"  class="button button-large w-button">Let’s Do This</button>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
data(){
    return{
        firstName:"",
        lastName:"",
    };
},


methods:{
    example(){
        this.$router.push('second-question');
    }
},
computed:{
    validate(){
        return this.lastName && this.firstName;
    }
},

}
</script>
