<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent >
      <input
        v-model="form.email"
        type="email"
        placeholder="email"
      >
      <br>
      <input
        v-model="form.password"
        type="password"
        placeholder="password"
      >
      <br>
      <button @click="register">submit</button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      form: {
        email: 'ff',
        password: ''
      }
    }
  },
  methods: {
    register () {
      AuthenticationService.register(this.form)
    }
  }
}
</script>

<style scoped>

</style>
