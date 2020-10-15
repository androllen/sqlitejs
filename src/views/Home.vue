<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg='msg'></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { fileContents } from '@/sql/file';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      msg: fileContents,
    };
  },
};
</script>
