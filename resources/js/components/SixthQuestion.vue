<style>
:disabled {
   background: #dddddd;
   color: dimgrey;
   border: dimgrey;
}
.radio-button{
    opacity:0;
    position:absolute;
    z-index:-1
}
</style>
<template>
     <div class="section bg-white" style="margin-top: -5%">
        <div class="container center-content">
          <div class="content-width-large">
            <img src="assets/images/avatar-1.jpg" alt="" class="avatar avatar-large">
            <br/> <br/>
            <h4 class="small-heading">Let’s look at what might be keeping you from your best financial self.</h4>
            <div class="form-block space-top w-form">
            <h6 class="text-uppercase subheading">What’s your biggest concern when you think about investing and financial planning?</h6>
              <div id="wf-form-Landing-Subscribe-Form" class="form-grid-vertical text-left">

                          <label class="form-custom-selectable-field w-radio">
                          <div class="w-form-formradioinput w-form-formradioinput--inputType-custom custom-radio w-radio-input"></div>
                          <input type="radio" value="I feel like I’m late to the game and need to catch up."  v-model="inv_fin_planning" >
                          <span class="form-custom-label w-form-label">I feel like I’m late to the game and need to catch up.</span></label>
                          <label class="form-custom-selectable-field w-radio">
                              <div class="w-form-formradioinput w-form-formradioinput--inputType-custom custom-radio w-radio-input">
                              </div>
                        <input type="radio" value="I need help understanding and preparing for retirement." v-model="inv_fin_planning" >
                        <span class="form-custom-label w-form-label">I need help understanding and preparing for retirement.</span>
                        </label>
                        <label class="form-custom-selectable-field w-radio">
                              <div class="w-form-formradioinput w-form-formradioinput--inputType-custom custom-radio w-radio-input">
                              </div>
                        <input type="radio" value="I have a plan in place, but I’d like an expert to help validate my strategy." v-model="inv_fin_planning" >
                        <span class="form-custom-label w-form-label">I have a plan in place, but I’d like an expert to help validate my strategy.</span>
                        </label>
                      <button  :disabled="!validate" @click="next()" class="button button-large w-button">Next</button>
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
        inv_fin_planning:"",
        isVerfied: false,

    };
},


methods:{
    next(){
       this.$router.push('seventh-question');
    },

},
computed:{
    validate(){
           return this.inv_fin_planning;
    },
}

}
</script>
