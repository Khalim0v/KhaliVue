<template>
  <main class="form-signin w-25 m-auto mt-5">
    <form>
      <img :src="logo" alt="logo" style="width: 100px; cursor: pointer;" @click="toHomeHandler" />
      <h1 class="h3 mb-3 fw-normal mt-2">Register</h1>

      <Input :label="'Email address'" :type="'email'" />
      <Input :label="'Password'" :type="'password'" />
      <Input :label="'Name'" :type="'text'" />

      <Button type="submit" :disabled="isLoading" @click="submitHandler">Sign in</Button>
    </form>
  </main>
</template>

<script>
import { logo } from '../constants'
export default {
  data() {
    return {
      logo
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    }
  },
  methods: {
    submitHandler(e) {
      e.preventDefault() //page refresh bolib ketmasligi uchun event ga preventDefault qiymat beriladi
      this.$store.dispatch('register')
    }
  }
}
</script>

<style></style>