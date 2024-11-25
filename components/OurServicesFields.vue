<template>
  <form class="our-services__form" @submit.prevent="handleSubmit">
    <v-text-field
      v-model="state.firstName"
      :counter="50"
      :error-messages="v$.firstName.$errors.map((e) =>'* ' +  e.$message)"
      :label="$t('firstNameLabel')"
      @blur="v$.firstName.$touch"
      @input="v$.firstName.$touch"
      class="filed-style"
    ></v-text-field>

    <v-text-field
      v-model="state.lastName"
      :counter="50"
      :error-messages="v$.lastName.$errors.map((e) =>'* ' +  e.$message)"
      :label="$t('lastNameLabel')"
      @blur="v$.lastName.$touch"
      @input="v$.lastName.$touch"
      class="filed-style"
    ></v-text-field>

    <v-text-field
      v-model="state.email"
      :counter="70"
      :error-messages="v$.email.$errors.map((e) =>'* ' +  e.$message)"
      :label="$t('emailLabel')"
      @blur="v$.email.$touch"
      @input="v$.email.$touch"
      class="filed-style"
    ></v-text-field>

    <v-text-field
      v-model="state.phoneNumber"
      :counter="50"
      :error-messages="v$.phoneNumber.$errors.map((e) =>'* ' +  e.$message)"
      :label="$t('phoneLabel')"
      @blur="v$.phoneNumber.$touch"
      @input="v$.phoneNumber.$touch"
      class="filed-style"
    ></v-text-field>

    <v-textarea
      maxlength="80"
      counter
      rows="3"
      auto-grow
      v-model="state.message"
      :error-messages="v$.message.$errors.map((e) => '* ' + e.$message)"
      :label="$t('messageLabel')"
      @blur="v$.message.$touch"
      @change="v$.message.$touch"
      class="filed-style"
    ></v-textarea>

    <div class="d-flex justify-content-center mt-4">
          <SubmitBtn :loading="loading" @submit="handleSubmit"  :activeHover="false" />
    </div>
  </form>
</template>

<script setup lang="ts" >
import { reactive, computed, ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, numeric, helpers } from "@vuelidate/validators";
import axios from "axios";
import emailjs from '@emailjs/browser';
import {useToast} from 'vue-toast-notification';
const $toast = useToast();

const i18n = useI18n();
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
};
const state = reactive({ ...initialState });
const _required = computed(() =>
  helpers.withMessage(() => i18n.t("validations.requiredMsg"), required)
);
const _email = computed(() =>
  helpers.withMessage(() => i18n.t("validations.emailMsg"), email)
);
const _phone = computed(() =>
  helpers.withMessage(() => i18n.t("validations.phone"), numeric)
);

const rules = {
  firstName: { required: _required.value },
  lastName: { required: _required.value },
  email: { required: _required.value, email: _email.value },
  phoneNumber: { required: _required.value, numeric: _phone.value },
  message: { required: _required.value },
};

const v$ = useVuelidate(rules, state);
const loading = ref(false);

async function handleSubmit() {
  const isValid = await v$.value.$validate();

  if (isValid) {
      await sendMessage(state);
  }
}

async function sendMessage(formModel) {
  loading.value = true;

  const  data = {
    service_id: 'service_wypna4e',
    template_id: 'template_dwduqwa',
    user_id: 'iqy0uj76_814S6jzT',
    template_params: {
      mail_title:`New Campaign Contact Request Received From ${formModel.email}`,
    to_address:"Info@digifymena.com",
    from_address:"Digify_Campaigns@outlook.com",
    from_name:"Digify Campaigns",
    message:`you have received a new contact request from user 
    <table
    style="padding: 20px;border-left: 4px solid #d0d0d0;font-style: italic;text-align: start;"
    >
    <thead>
    <th
      style="padding: 12px;"
    >
      Name
    </th>
    <th
      style="padding: 12px;"
    >
      Email
    </th>
    <th
      style="padding: 12px;"
    >
      Phone
    </th>
    <th
      style="padding: 12px;"
    >
      Message
    </th>
    </thead>
    <tbody>
    <tr>
    <td
      style="padding: 12px;"
    >
    ${formModel.firstName} ${formModel.lastName} 
    </td>
    <td
      style="padding: 12px;"
    >
    ${formModel.email}
    </td>
    <td
      style="padding: 12px;"
    >
    ${formModel.phoneNumber}
    </td>
    <td
      style="padding: 12px;"
    >
    ${formModel.message}
    </td>
    </tbody>
    </table
    `,
    reply_to:"Info@digifymena.com"
    }
};
/**
 * @todo move all static variables to env file
 */
axios.post('https://api.emailjs.com/api/v1.0/email/send', data )
.then((response) => {
  $toast.success(i18n.t("successContactMsg"), {
    
    position: "bottom-left",
  });
  clear();
})
.catch((error) => {
  $toast.error(i18n.t("failSendMsg"), {
    position: "bottom-left",
  })
})
  .finally(() => {
    loading.value = false;
  });


// i could send by endpoint to me 


  // const config = useRuntimeConfig();
  // console.log(config.public)
//   emailjs.init({
//   publicKey: 'iqy0uj76_814S6jzT',
//   // Do not allow headless browsers
//   // blockHeadless: true,
//   // blockList: {
//   //   // Block the suspended emails
//   //   list: ['foo@emailjs.com', 'bar@emailjs.com'],
//   //   // The variable contains the email address
//   //   watchVariable: 'userEmail',
//   // },
//   limitRate: {
//     // Set the limit rate for the application
//     id: 'app',
//     // Allow 1 request per 10s
//     throttle: 10000,
//   },
// });
//   console.log("send msg")
//   console.log();
//   window.emailjs = emailjs;
//   window.payload = formModel
//   const sendResult = emailjs.sendForm('digify_jtqbwof', 'template_dwduqwa', formModel)
    // .then((result) => {
    //   console.log('Email sent successfully!', result.text);
    // }, (error) => {
    //   console.error('Failed to send email:', error.text);
    // });
  /**
   * @note admin.digifymena.com throw error  
   */
  // await axios
  //   .post(`https://admin.digifymena.com/api/v1/message/create`, {
  //     name: formModel.firstName + " " + formModel.lastName,
  //     ...formModel
  //   } )
  //   .then((response) => {
  //     // this.$toast.default("Success, we will contact you soon", {
  //     //   position: "bottom-left",
  //     // });
  //     clear();

  //   })
  //   .catch((error) => {
  //     // this.$toast.error("Sorry, something went wrong please try again", {
  //     //   position: "bottom-left",
  //     // });
  //   });
}

function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}
</script>
