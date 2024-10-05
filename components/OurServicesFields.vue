<template>
  <form class="our-services__form" @submit.prevent="handleSubmit">
    <v-text-field
      v-model="state.firstName"
      :counter="50"
      :error-messages="v$.firstName.$errors.map((e) => e.$message)"
      :label="$t('firstNameLabel')"
      @blur="v$.firstName.$touch"
      @input="v$.firstName.$touch"
      class="filed-style"
    ></v-text-field>

    <v-text-field
      v-model="state.lastName"
      :counter="50"
      :error-messages="v$.lastName.$errors.map((e) => e.$message)"
      :label="$t('lastNameLabel')"
      @blur="v$.lastName.$touch"
      @input="v$.lastName.$touch"
      class="filed-style"
    ></v-text-field>

    <v-text-field
      v-model="state.email"
      :counter="70"
      :error-messages="v$.email.$errors.map((e) => e.$message)"
      :label="$t('emailLabel')"
      @blur="v$.email.$touch"
      @input="v$.email.$touch"
      class="filed-style"
    ></v-text-field>

    <v-text-field
      v-model="state.phoneNumber"
      :counter="50"
      :error-messages="v$.phoneNumber.$errors.map((e) => e.$message)"
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
      :error-messages="v$.message.$errors.map((e) => e.$message)"
      :label="$t('messageLabel')"
      @blur="v$.message.$touch"
      @change="v$.message.$touch"
      class="filed-style"
    ></v-textarea>

    <div class="d-flex justify-content-center ">
      <v-btn
        :disabled="loading"
        :loading="loading"
        class="our-services__submit   rounded-pill p-md-4 p-3 position-relative mt-5 "
        color="rgb(81 81 81)"
        type="submit"
      >
        <span class="title-submit text-light pe-4 text-capitalize"
          >{{ $t('sendMsg') }}</span
        >
           <span class="submit-button btn btn-secondary rounded-pill">
          <img src="../assets/image/arrow-right.png" alt="" />
        </span>
      </v-btn>
    </div>
  </form>
</template>

<script setup>
import { reactive, computed,  ref } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email , numeric , helpers } from "@vuelidate/validators";
const i18n = useI18n();
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
};
const state = reactive({ ...initialState });
const _required = computed(() => helpers.withMessage(() => i18n.t('validations.requiredMsg') , required ));
const _email = computed(() => helpers.withMessage(() => i18n.t('validations.emailMsg') , email ));
const _phone = computed(() => helpers.withMessage(() => i18n.t('validations.phone') , numeric ));

const rules = {
  firstName: { required : _required.value},
  lastName: { required:_required.value },
  email: { required:_required.value, email:_email.value },
  phoneNumber: { required:_required.value , numeric:_phone.value},
  message: { required:_required.value },
};

const v$ = useVuelidate(rules, state);
const loading = ref(false);
async function checkApi(userName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!userName) return resolve("Please enter a user name.");
      if (userName === "johnleider")
        return resolve("User name already taken. Please try another one.");

      return resolve(true);
    }, 1000);
  });
}

async function handleSubmit() {
  const isValid = await v$.value.$validate();

  if (isValid) {
    loading.value = true;
    try {
      await submitForm();
      // alert("Form submitted successfully!");
      clear();
    } catch (error) {
      alert(error);
    } finally {
      loading.value = false;
    }
  }
}

async function submitForm() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

function clear() {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
}
</script>
