<template>
  <div class="about">
    <h1>This is an about page</h1>
	<button @click="onStart">button</button>
  </div>
</template>

<script>
import { GetMd516 } from '../sql/md5';

export default {
	methods: {
		onStart(){
			GetMd516('ac59075b964b0715');
		}
	},
}
</script>