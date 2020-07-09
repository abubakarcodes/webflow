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
            <h3 class="medium-heading">Thanks! Last thing, what is your best email address</h3>
            <div class="form-block space-top w-form">
              <div id="wf-form-Landing-Subscribe-Form" class="form-grid-vertical text-left">
                        <input type="text" class="form-input form-input-large w-input" v-model="email"  placeholder="Enter Email Address">
                      <button  :disabled="!validate" @click="next()" class="button button-large w-button">Continue</button>
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
        email:"",
        isVerfied: false,

    };
},


methods:{
    next(){
       this.$router.push('fifth-question');
    },
    isValidateEmail: function() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        return true;
      }
      return false;
    },
},
computed:{
    validate(){
           return this.isValidateEmail();
    },
},

}
</script>
