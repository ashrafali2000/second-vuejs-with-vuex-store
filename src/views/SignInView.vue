<script>
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

export default {
  name: "SignInView",
  components: {
    SignIn,
    SignUp,
  },
  data() {
    return {
      tab: "SignIn",
    };
  },
  methods: {
    signInHandler() {
      this.tab = "SignIn";
    },
    signUpHandler() {
      this.tab = "SignUp";
    },
  },
};
</script>

<template>
  <component
    :is="tab"
    :signUpHandler1="signUpHandler"
    :signInHandler1="signInHandler"
  />
</template>
