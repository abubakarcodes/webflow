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
            <h3 class="medium-heading">Great to meet you First Name! Please take a moment to verify your phone number.</h3>
            <h6 class="text-uppercase subheading">This helps us confirm your identity and secure your relationship with Form Advisory Group.</h6>
            <div class="form-block space-top w-form">
              <div id="wf-form-Landing-Subscribe-Form" class="form-grid-vertical text-left">
                  <vue-phone-number-input required size="lg" BorderRadius="0"  color="#24292E" default-country-code="SG" @update="results = JSON.stringify($event)"   v-model="phone"></vue-phone-number-input>
                      <button  :disabled="!validate" @click="sendVerificationCode()"  class="button button-large w-button">Send Verfication Code</button>
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
        phone:"",
        isCodeSent: false,

    };
},


methods:{
    sendVerificationCode(){
       this.isCodeSent = true;
    this.$router.push('third-question');
    }
},
computed:{
    validate(){
            return this.phone;
    },
},

}
</script>
