<template>
                  <form class="contact-us-form" @submit.prevent="submitForm"  >
                        <div class="contact-us-form__info d-flex flex-column align-items-start">
                        <div  class="input-name contact-us-form__field-group">
                            <input
                            type="text"
                            v-model="name"
                            placeholder="Your Name"
                            />
                            <div
                            class="input-errors "
                            >
                            <div class="error-msg">{{ v$.name?.$errors[0]?.$message }}</div>
                            </div>
                        </div>
                        <div class="input-email contact-us-form__field-group">
                            <input
                            type="email"
                            v-model="contact.email"
                            placeholder="Your Email"
                            />
                            <div
                            class="input-errors "
                            
                            >
                            <div class="error-msg">{{ v$.contact?.$errors[0]?.$message }}</div>
                            </div>
                        </div>
                        <div class="input-subject contact-us-form__field-group">
                            <input
                            type="text"
                            v-model="subject"
                            placeholder=" Subject"
                            />
                            <div
                            class="input-errors "
                            
                            >
                            <div class="error-msg">{{ v$.subject?.$errors[0]?.$message }}</div>
                            </div>
                        </div>  
                        <div class="input-message  contact-us-form__field-area">
                          <textarea  v-model="message" placeholder="Your Message (Optional)"  cols="30" rows="50">
                          </textarea>
                            <div
                            class="input-errors "
                            
                            >
                            <div class="error-msg">{{ v$.message?.$errors[0]?.$message }}</div>
                            </div>
                        </div>
                        <div class="contact-us-form__submit  mt-4 rounded-pill p-4 position-relative">
                            <span class="title-submit text-light pe-4 text-capitalize">view more</span>
                          <button type="submit" class=" submit-button btn btn-secondary rounded-pill   " >
                             <img src="../assets/image/arrow-right.png"  alt=""> 
                            </button>
                        </div>
                        </div>
              </form>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email  , helpers ,maxLength,minLength, numeric ,alpha} from '@vuelidate/validators'
export default {
    setup () {
    return { v$: useVuelidate({$autoDirty:true}) }
  }   
,
   validations () {
    return {
      name: {
       required: helpers.withMessage('* Name is required .', required),
        minLength:helpers.withMessage('* MinLenght must be (2) character .' ,minLength(2)) ,
         maxLength:helpers.withMessage('* MaxLenght must be (50) character .' ,maxLength(30)) }, 
      contact: {
        email: { required:helpers.withMessage('* Email is required .',
         required), email:helpers.withMessage('* Value is not a valid email address .', email) } 
      },
      subject:{ required:helpers.withMessage('* Subject is required .', required) , 
       minLength:helpers.withMessage('* MinLenght must be (2) character .' ,minLength(2)),
       maxLength:helpers.withMessage('* MaxLenght must be (50) character .' ,maxLength(100)) 
        },
       
      message:{required:helpers.withMessage('* Message is required .', required)
      ,  minLength:helpers.withMessage('* MinLenght must be (10) character .' ,minLength(10)) ,
        maxLength:helpers.withMessage('* MaxLenght must be (500) character .' ,maxLength(500))}    }
},
data() {
    return {
      name: '',
      contact: {
        email: ''
      },
      subject:'',
      message:''
    };
  },
  methods:{
    async submitForm () {
      const isFormCorrect =  await this.v$.$validate() 
      console.log(`Name :${this.name} , Email : ${this.email} , Subject : ${this.subject} , Message :${this.message}`)
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect){
      console.log("bad form")
      } 
      // actually submit form
    }
  }

}
</script>