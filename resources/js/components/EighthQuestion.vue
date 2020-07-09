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
            <h4 class="small-heading">Do you have at least $10,000 in assets in or available for your investment portfolio?</h4>
            <div class="form-block space-top w-form">
              <div id="wf-form-Landing-Subscribe-Form" class="form-grid-vertical text-left">

                          <label class="form-custom-selectable-field w-radio">
                          <div class="w-form-formradioinput w-form-formradioinput--inputType-custom custom-radio w-radio-input"></div>
                          <input type="radio" value="yes"  v-model="assets">
                          <span class="form-custom-label w-form-label">Yes</span></label>
                          <label class="form-custom-selectable-field w-radio">
                              <div class="w-form-formradioinput w-form-formradioinput--inputType-custom custom-radio w-radio-input">
                              </div>
                        <input type="radio" value="no" v-model="assets">
                        <span class="form-custom-label w-form-label">Not Yet!</span>
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
        assets:"",
        isVerfied: false,

    };
},


methods:{
    next(){
       if(this.assets == 'no'){
           this.$router.push('eighth-question-no-response');
       }
       else if(this.assets.assets == 'yes'){
           this.$router.push('nineth-question');

       }
    },

},
computed:{
    validate(){
           return this.assets;
    },
}

}
</script>
