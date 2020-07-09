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
            <h4 class="small-heading">Great! Let’s customize your experience by understanding if you can you benefit from working with Form Advisory Group and how much it would costs.</h4>
            <div class="form-block space-top w-form">
            <h6 class="text-uppercase subheading">How far away is retirement?</h6>
              <div id="wf-form-Landing-Subscribe-Form" class="form-grid-vertical text-left">

                          <label class="form-custom-selectable-field w-radio">
                          <div class="w-form-formradioinput w-form-formradioinput--inputType-custom custom-radio w-radio-input"></div>
                          <input type="radio" value="Not in the picture."  v-model="retirement" >
                          <span class="form-custom-label w-form-label">Not in the picture.</span></label>
                          <label class="form-custom-selectable-field w-radio">
                              <div class="w-form-formradioinput w-form-formradioinput--inputType-custom custom-radio w-radio-input">
                              </div>
                        <input type="radio" value="A ways off but I’m in the early stages of planning" v-model="retirement" >
                        <span class="form-custom-label w-form-label">A ways off but I’m in the early stages of planning</span>
                        </label>
                        <label class="form-custom-selectable-field w-radio">
                              <div class="w-form-formradioinput w-form-formradioinput--inputType-custom custom-radio w-radio-input">
                              </div>
                        <input type="radio" value="Approaching." v-model="retirement" >
                        <span class="form-custom-label w-form-label">Approaching.</span>
                        </label>
                        <label class="form-custom-selectable-field w-radio">
                              <div class="w-form-formradioinput w-form-formradioinput--inputType-custom custom-radio w-radio-input">
                              </div>
                        <input type="radio" value="I’m in it." v-model="retirement" >
                        <span class="form-custom-label w-form-label">I’m in it.</span>
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
        retirement:"",
        isVerfied: false,

    };
},


methods:{
    next(){
       this.$router.push('sixth-question');
    },

},
computed:{
    validate(){
           return this.retirement;
    },
}

}
</script>
