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
                        <button type="submit" class="contact-us-form__submit  mt-4 rounded-pill p-4 position-relative">
                            <span class="title-submit text-light pe-4 text-capitalize">view more</span>
                          <span  class=" submit-button btn btn-secondary rounded-pill   " >
                             <img src="../assets/image/arrow-right.png"  alt=""> 
                          </span>
                        </button>
                        </div>
              </form>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email  , helpers ,maxLength,minLength, numeric } from '@vuelidate/validators'
const alpha = helpers.regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/)
export default {
    setup () {
    return { v$: useVuelidate({$autoDirty:true}) }
  }   
,
   validations () {
    return {
      name: {
        required: helpers.withMessage('* name is required .', required),
        alpha:helpers.withMessage('* name must be char only .', alpha),
        minLength:helpers.withMessage('* name is (2) char min .' ,minLength(2)) ,
         maxLength:helpers.withMessage('* maxLenght must be (100) char .' ,maxLength(100)) }, 
      contact: {
        email: { required:helpers.withMessage('* email is required .',
         required), email:helpers.withMessage('* enter a valid email address.', email) ,
         maxLength:helpers.withMessage('* maxLenght must be (100) char .' ,maxLength(100))
        
        } 
      },
      subject:{ required:helpers.withMessage('* subject is required .', required) , 
       minLength:helpers.withMessage('* subject is (2) char min .' ,minLength(2)),
       maxLength:helpers.withMessage('* maxLenght must be (100) char .' ,maxLength(100)) 
        },
        message:{ maxLength:helpers.withMessage('* maxLenght must be (500) char .' ,maxLength(500))}    }
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
      let value ={
        Name :this.name , Email : this.contact.email , Subject : this.subject , Message :this.message
      }
      console.log(value)
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect){
      console.log("bad form")
      } 
      // actually submit form
    }
  }

}
</script>