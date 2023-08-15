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
                        <div class="input-message contact-us-form__field-group">
                            <input
                            type="text"
                            v-model="message"
                            placeholder="Your Message (Optional)"
                            />
                            <div
                            class="input-errors "
                            
                            >
                            <div class="error-msg">{{ v$.message?.$errors[0]?.$message }}</div>
                            </div>
                        </div>
                        <button type="submit" class="btn  btn-secondary rounded-pill fs-6">submit</button>
                        </div>
              </form>
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email  , numeric } from '@vuelidate/validators'

export default {
    setup () {
    return { v$: useVuelidate({$autoDirty:true}) }
  },   
   validations () {
    return {
      name: { required  , numeric}, // Matches this.firstName
      contact: {
        email: { required, email } // Matches this.contact.email
      },
      subject:{required },
      message:{required}    }
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
  }

}
</script>