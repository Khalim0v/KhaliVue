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
      const data = {
        username: "khali",
        email: "khali2@gmail.com",
        password: "qwertyu"
      }
      this.$store.dispatch('register', data).then(user => console.log("USER", user)).catch(err => console.log("ERROR", err)) //payload - dispatch qilyotgandagi ikkinchi parametr nomi
    }
  }
}
</script>

<style></style>