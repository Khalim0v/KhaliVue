<template>
  <div>
    <div class="container">
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>

<script>
import { Navbar } from '@/components'
import { RouterView } from 'vue-router' // routing lar ishlashi uchun routerdan App ga import qilinadi
export default {
  components: { Navbar },
}
</script>

<style></style>
