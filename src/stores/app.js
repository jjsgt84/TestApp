import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const counter = ref(0)
  const appTitle = ref('TestApp')

  function increment() {
    counter.value++
  }

  function reset() {
    counter.value = 0
  }

  return {
    counter,
    appTitle,
    increment,
    reset
  }
})
