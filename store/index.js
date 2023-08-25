import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state : () => ({
    isLoader: false
  }),
  actions : {
    showLoader() {
        this.isLoader = true
    },
    hideLoader() {
        this.isLoader = false
    }
  }
})