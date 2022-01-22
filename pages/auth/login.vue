<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <form class="w-96 border-2 border-gray-200 p-10 rounded-md">
      <div
        class="
          p-4
          mb-4
          text-sm text-red-700
          bg-red-100
          rounded-lg
          dark:bg-red-200 dark:text-red-800
        "
        role="alert"
        v-if="showLoginError"
      >
        <span class="font-medium">Login Failed!</span> Change a few things up
        and try submitting again.
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="
            block
            mb-2
            text-sm
            font-medium
            text-gray-900
            dark:text-gray-300
          "
          >Email</label
        >
        <input
          type="email"
          id="email"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          placeholder="name@flowbite.com"
          required
          v-model="auth.email"
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="
            block
            mb-2
            text-sm
            font-medium
            text-gray-900
            dark:text-gray-300
          "
          >Password</label
        >
        <input
          type="password"
          id="password"
          class="
            bg-gray-50
            border border-gray-300
            text-gray-900 text-sm
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
            dark:bg-gray-700
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:text-white
            dark:focus:ring-blue-500
            dark:focus:border-blue-500
          "
          required
          v-model="auth.password"
        />
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            class="
              w-4
              h-4
              bg-gray-50
              rounded
              border border-gray-300
              focus:ring-3 focus:ring-blue-300
              dark:bg-gray-700
              dark:border-gray-600
              dark:focus:ring-blue-600
              dark:ring-offset-gray-800
            "
          />
        </div>
        <div class="ml-3 text-sm">
          <label
            for="remember"
            class="font-medium text-gray-900 dark:text-gray-300"
            >Remember me</label
          >
        </div>
      </div>
      <button
        type="submit"
        class="
          text-white
          bg-blue-700
          hover:bg-blue-800
          focus:ring-4 focus:ring-blue-300
          font-medium
          rounded-lg
          text-sm
          w-full
          sm:w-auto
          px-5
          py-2.5
          text-center
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        "
        @click="login"
      >
        Login
      </button>x
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
        loginErrorMessage: '',
        showLoginError: false,
        auth: {
            email: '',
            password: '',
        },
    }
  },

  methods: {
    login() {
      let that = this
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
      .catch(function (error){
        that.loginErrorMessage = error.message
        that.showLoginError = true
        console.log(error.message)
      }).then((user) => {
        //we are signed in
        $nuxt.$router.push('/')
      })
    }
  },
}
</script>

<style>
</style>