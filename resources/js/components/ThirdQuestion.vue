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
            <h3 class="medium-heading">Your number is not Verified yet! A verification code has been sent to your phone number.</h3>
            <div class="form-block space-top w-form">
              <div id="wf-form-Landing-Subscribe-Form" class="form-grid-vertical text-left">
                        <input type="text" class="form-input form-input-large w-input" v-model="code"  placeholder="Enter Verification Code">
                      <button  :disabled="!validate" @click="verify()" class="button button-large w-button">Verify Phone Number</button>
                    <!-- <button :disabled="!validate"   class="button button-large w-button">Continue</button> -->
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
        code:"",
        isVerfied: false,

    };
},


methods:{
    verify(){
       this.isVerfied = true;
       this.$router.push('fourth-question');
    }
},
computed:{
    validate(){
            return this.code;
    },
},

}
</script>
