<template>
  <scroll-animator
    @next="currentProgress++"
    @prev="currentProgress--"
    :breakPointsNumber="9"
    :gap="500"
    :startThresHold="100"
  >
    <CoreHomeSectionContainer class="home-sec--portfolio pt-4">
      <div
        class="animate__animated"
        :class="{
          animate__fadeOutLeftBig:
            currentProgress >= PROGRESS.titleMoveUpAndFade,
        }"
      >
        <div class="home-sec--portfolio__title-wrapper">
          <core-zoomed-title
            origin="58px 100px"
            class="home-sec__title"
            :scale="currentProgress == PROGRESS.titleZoomIn ? 50 : 1"
          >
            <span class="text-white">CONTACT</span>
          </core-zoomed-title>
          <h2 class="text-secondary home-sec__title">US</h2>
        </div>
      </div>

      <transition-group mode="out-in" name="fadeInDelayOutLeft">
        <core-card
          class="animate__animated"
          :key="1"
          v-if="currentProgress == PROGRESS.firstSlide"
        />
        <core-card
          class="bg-primary animate__animated"
          :key="2"
          v-else-if="currentProgress == PROGRESS.secondSlide"
        />
        <core-card
          class="animate__animated bg-info"
          :key="3"
          v-else-if="currentProgress == PROGRESS.thirdSlide"
        />
        <core-card
          class="animate__animated bg-danger"
          :key="4"
          v-else-if="currentProgress == PROGRESS.fourthSlide"
        />
        <core-card
          class="animate__animated bg-secondary"
          :key="5"
          v-else-if="currentProgress == PROGRESS.fifthSlide"
        />
        <core-card
          class="animate__animated bg-success"
          :key="6"
          v-else-if="currentProgress == PROGRESS.sixthSlide"
        />
      </transition-group>
    </CoreHomeSectionContainer>
  </scroll-animator>
  <!--  Contact Us  -->
  <section class="py-4 bg-primary contact-us">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-sm-12">
          <div class="row">
            <div class="col-md-12">
              <div class="title py-5 d-flex flex-column align-content-start">
                <p class="text-uppercase">get in touch</p>
                <p class="text-uppercase">with <span>digify</span></p>
                <p class="text-uppercase">team today <span>!</span></p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <form>
                <div class="contact-info d-flex flex-column align-items-start">
                  <div class="input-name">
                    <input
                      type="text"
                      v-model="state.name"
                      placeholder="Your Name"
                    />
                    <div
                      class="input-errors"
                      v-for="error of v$.name.$errors"
                      :key="error.$uid"
                    >
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>
                  <div class="input-email">
                    <input
                      type="email"
                      v-model="state.email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div class="input-subject">
                    <input
                      type="text"
                      v-model="state.subject"
                      placeholder=" Subject"
                    />
                  </div>
                  <div class="input-message">
                    <input
                      type="text"
                      v-model="state.message"
                      placeholder="Your Message (Optional)"
                    />
                  </div>
                  <button class="btn btn-secondary rounded-pill fs-6">s</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  Saudi Branch Ifo  -->
  <section class="saudi-branch bg-primary py-5">
    <div class="container">
      <div class="row gy-5">
        <div class="col-md-7">
          <img
            src="../assets/image/fox.png"
            class="w-100 img-fluid"
            alt="fox-image"
          />
        </div>
        <div class="col-md-5 d-flex align-items-center">
          <div class="branch-details">
            <h1>saudi <span>arabia</span> branch</h1>
            <p>
              office #101 the <br />
              courtyard, prince saud al faisal sT.jeddah
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  Cairo Branch Ifo  -->
  <section class="cairo-branch bg-primary py-5">
    <div class="container">
      <div class="row gy-5">
        <div class="col-md-7">
          <img
            src="../assets/image/Lama.png"
            class="w-100 img-fluid"
            alt="fox-image"
          />
        </div>
        <div class="col-md-5 d-flex align-items-center">
          <div class="branch-details">
            <h1><span>cairo</span> branch</h1>
            <p>
              82 abdulaziz fahmy cairo, cairo <br />
              governorate, egypt 11361
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  Email Us  -->
  <section class="email-us bg-primary py-5">
    <div class="container">
      <div class="row gy-5">
        <div class="col-md-7">
          <img
            src="../assets/image/Lama.png"
            class="w-100 img-fluid"
            alt="fox-image"
          />
        </div>
        <div class="col-md-5 d-flex align-items-center">
          <div class="email-details">
            <h1>email<span>us</span></h1>
            <p>info@digifymena.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  Ring Us  -->
  <section class="ring-us bg-primary py-5">
    <div class="container">
      <div class="row gy-5">
        <div class="col-md-7">
          <img
            src="../assets/image/ring.png"
            class="w-100 img-fluid"
            alt="fox-image"
          />
        </div>
        <div class="col-md-5 d-flex align-items-center">
          <div class="ring-details">
            <h1>ring <span>us</span></h1>
            <p>
              +20227748700 <br />
              +201144447609
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  Ring Us Rectangle -->
  <section class="ring-us bg-primary py-5">
    <div class="container">
      <div class="row gy-5">
        <div class="col-md-7">
          <img
            src="../assets/image/Rectangle 40503.png"
            class="w-100 img-fluid"
            alt="fox-image"
          />
        </div>
        <div class="col-md-5 d-flex align-items-center">
          <div class="ring-details">
            <h1>ring <span>us</span></h1>
            <p>
              +20227748700 <br />
              +201144447609
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vuelidate from "vuelidate";
import { required, email } from "vuelidate/lib/validators";

const PROGRESS = Object.freeze({
  titleZoomIn: 0,
  titleZoomOut: 1,
  titleMoveUpAndFade: 2,
  firstSlide: 3,
  secondSlide: 4,
  thirdSlide: 5,
  fourthSlide: 6,
  fifthSlide: 7,
  sixthSlide: 8,
});
const PROGRESS_HIGHLIGHT_RATIO = Object.freeze({
  [PROGRESS.titleZoomIn]: 100,
  [PROGRESS.titleZoomOut]: 100,
  [PROGRESS.titleMoveUpAndFade]: 0,
  [PROGRESS.firstSlide]: 15,
  [PROGRESS.secondSlide]: 30,
  [PROGRESS.thirdSlide]: 45,
  [PROGRESS.fourthSlide]: 60,
  [PROGRESS.fifthSlide]: 75,
  [PROGRESS.sixthSlide]: 100,
});
const PROGRESS_TYPES = Object.freeze({
  forward: 1,
  backward: 2,
});
export default defineNuxtComponent({
  data() {
    return {
      currentProgress: PROGRESS.titleZoomIn,
      progressType: PROGRESS_TYPES.forward,
      state: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  validations: {
    yourName: { required }, // Matches this.firstName
    email: { required }, // Matches this.lastName
    subject: { required },
    message: { required },
  },
  computed: {
    PROGRESS() {
      return PROGRESS;
    },
    PROGRESS_TYPES() {
      return PROGRESS_TYPES;
    },
    PROGRESS_HIGHLIGHT_RATIO() {
      return PROGRESS_HIGHLIGHT_RATIO;
    },
    // getUrl(){
    //     return require('../assets/image/404Error.jpg')
    // } ,
    getUrl() {
      return new URL(`../assets/image/404Error.jpg`, import.meta.url).href;
    },
  },
  watch: {
    currentProgress(curr, prev) {
      this.progressType =
        curr > prev ? PROGRESS_TYPES.forward : PROGRESS_TYPES.backward;
    },
  },
});
</script>
