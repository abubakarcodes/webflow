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
            <h6 class="text-uppercase subheading">You might relate to more than one answer. Select the one that best fits you.</h6>
              <div id="wf-form-Landing-Subscribe-Form" class="form-grid-vertical text-left">

                    <label class="w-checkbox form-custom-selectable-field">
                        <input value="I don’t have time to research all the financial products available to me and manage my investment portfolio." type="checkbox" v-model="best_financial">
                        <span class="form-custom-label w-form-label">I don’t have time to research all the financial products available to me and manage my investment portfolio.</span></label>
                         <label class="w-checkbox form-custom-selectable-field">
                        <input value="I don’t understand what products are right for my goals or how to make a comprehensive investment strategy." type="checkbox" v-model="best_financial">
                        <span class="form-custom-label w-form-label">I don’t understand what products are right for my goals or how to make a comprehensive investment strategy.</span></label>
                         <label class="w-checkbox form-custom-selectable-field">
                        <input value="There are other things in my life I’d rather obsess over other than the daily maintenance of my finances." type="checkbox" v-model="best_financial">
                        <span class="form-custom-label w-form-label">There are other things in my life I’d rather obsess over other than the daily maintenance of my finances.</span></label>
                         <label class="w-checkbox form-custom-selectable-field">
                        <input value="I don’t feel confident making financial and investment decisions on my own and taking responsibility for them." type="checkbox" v-model="best_financial">
                        <span class="form-custom-label w-form-label">I don’t feel confident making financial and investment decisions on my own and taking responsibility for them.</span></label>
                         <label class="w-checkbox form-custom-selectable-field">
                        <input value="I’ve recently experienced a major life event like: buying a home, getting married or divorced, the birth of a child, or a death in the family." type="checkbox" v-model="best_financial">
                        <span class="form-custom-label w-form-label">I’ve recently experienced a major life event like: buying a home, getting married or divorced, the birth of a child, or a death in the family.</span></label>
                        <label class="w-checkbox form-custom-selectable-field">
                        <input value="I’d like to have greater peace of mind that my finances are in order for the sake of my family." type="checkbox" v-model="best_financial">
                        <span class="form-custom-label w-form-label">I’d like to have greater peace of mind that my finances are in order for the sake of my family.</span></label>
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
        best_financial:[],
        isVerfied: false,

    };
},


methods:{
    next(){
       this.$router.push('eighth-question');
    },

},
computed:{
    validate(){
           return this.best_financial.length > 0;
    },
}

}
</script>
