<template>
  <div class="contact-us-form-container" >
    <form class="contact-us-form" @submit.prevent="submitForm">
    <div class="contact-us-form__info d-flex flex-column align-items-start">
      <div class="input-name contact-us-form__field-group">
        <input
          autocomplete="off"
          type="text"
          v-model="name"
          placeholder="Your Name"
        />
        <div class="input-errors">
          <div class="error-msg">{{ v$.name?.$errors[0]?.$message }}</div>
        </div>
      </div>
      <div class="input-email contact-us-form__field-group">
        <input
          autocomplete="off"
          type="email"
          v-model="contact.email"
          placeholder="Your Email"
        />
        <div class="input-errors">
          <div class="error-msg">{{ v$.contact?.$errors[0]?.$message }}</div>
        </div>
      </div>
      <div class="input-subject contact-us-form__field-group">
        <input
          autocomplete="off"
          type="text"
          v-model="subject"
          placeholder=" Subject"
        />
        <div class="input-errors">
          <div class="error-msg">{{ v$.subject?.$errors[0]?.$message }}</div>
        </div>
      </div>
      <div class="input-message contact-us-form__field-area">
        <textarea v-model="message" placeholder="Your Message (Optional)">
        </textarea>
        <div class="input-errors">
          <div class="error-msg">{{ v$.message?.$errors[0]?.$message }}</div>
        </div>
      </div>
      <button
        type="submit"
        class="contact-us-form__submit mt-4 mt-xxl-5 rounded-pill p-md-4 p-3 position-relative"
      >
        <span class="title-submit text-light pe-4 text-capitalize"
          >Send Message</span
        >
        <span class="submit-button btn btn-secondary rounded-pill">
          <img src="../assets/image/arrow-right.png" alt="" />
        </span>
      </button>
    </div>
    </form>

  </div>

</template>
<script>
import { useMainStore } from '~/store'
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  helpers,
  maxLength,
  minLength,
} from "@vuelidate/validators";
import axios from "axios";
// import  {useToast} from "vue-toast-notification"
// import toast from "vue-toast-notification"
// console.log(toast);
// import * as vueToast from "vue-toast-notification";
// todo check to be moved to setup or not
// const $toast = useToast(vueToast);
import { mapStores } from 'pinia'

const alpha = helpers.regex(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
export default {
  setup() {
  //   const store = useMainStore()
  // const { data } = await useAsyncData('user', () => store.fetchUser())

    return { v$: useVuelidate({ $autoDirty: true }) };
  },
  computed:{
    ...mapStores(useMainStore),

  },
  validations() {
    return {
      name: {
        required: helpers.withMessage("* name is required .", required),
        alpha: helpers.withMessage("* name must be char only .", alpha),
        minLength: helpers.withMessage(
          "* name is (2) char min .",
          minLength(2)
        ),
        maxLength: helpers.withMessage(
          "* maxLenght must be (100) char .",
          maxLength(100)
        ),
      },
      contact: {
        email: {
          required: helpers.withMessage("* email is required .", required),
          email: helpers.withMessage("* enter a valid email address.", email),
          maxLength: helpers.withMessage(
            "* maxLenght must be (100) char .",
            maxLength(100)
          ),
        },
      },
      subject: {
        required: helpers.withMessage("* subject is required .", required),
        minLength: helpers.withMessage(
          "* subject is (2) char min .",
          minLength(2)
        ),
        maxLength: helpers.withMessage(
          "* maxLenght must be (100) char .",
          maxLength(100)
        ),
      },
      message: {
        maxLength: helpers.withMessage(
          "* maxLenght must be (500) char .",
          maxLength(500)
        ),
      },
    };
  },
  data() {
    return {
      name: "",
      contact: {
        email: "",
      },
      subject: "",
      message: "",
    };
  },
  methods: {
    showLoader(){
      this.mainStore.showLoader()
    },
    hideLoader(){
      this.mainStore.hideLoader()
    },
    async getApi(formModel) {
      this.showLoader()
        await axios
          .post(`https://ecommerce.routemisr.com/api/v1/categories` , formModel)
          .then((response) => {
            this.$toast.default("Success, we will contact you soon", {
              position: "bottom-left",
            });
          })
          .catch((error) => {
            this.$toast.error("Sorry, something went wrong please try again", {
              position: "bottom-left",
            });
          });

          this.hideLoader();

      },
    async submitForm() {
      
      const isFormCorrect = await this.v$.$validate();
          
      if (isFormCorrect) {
          const value = {
            name: this.name,
            email: this.contact.email,
            subject: this.subject,
            message: this.message,
        };
        this.getApi(value);
      }
    },
 
  },
};
</script>
