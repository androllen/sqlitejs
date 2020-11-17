<!-- <template>
  <div class="hello">
    <h1>{{ msgstr }}</h1>
    <h1>{{ svgitem }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msgstr: String
  },
  data() {
    return {
      svgitem: this.msgstr,
    };
  },
}
</script>-->

<!-- <template>
  <div>
    <input type="checkbox" v-bind:checked="numbed" v-on:change="$emit('addnum', $event.target.checked)" />
    <div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  model: {
    prop: 'numbed',
    event: 'addnum',
  },
  props: {
    numbed: Boolean,
  },
};
</script>-->

<template>
  <div>
    <input :value="text" @input="$emit('my-show', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  model: {
    prop: 'text',
    event: 'my-show',
  },
  props: {
    text: String,
  },
};
</script>