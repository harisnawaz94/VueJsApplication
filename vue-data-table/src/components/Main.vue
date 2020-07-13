<template>
  <div id="app">
    <v-btn @click="toggleComponentOne">Click To Get Data</v-btn>
    <first-component v-if="showComponentOne" />
  </div>
</template>

<script>
/**
 * Main file to load components
 */
import FirstComponent from "./table";
export default {
  name: "App",
  components: {
    FirstComponent,
  },
  data() {
    return {
      showComponentOne: false,
    };
  },
  methods: {
    /**
     * Toggle the view loading
     */
    toggleComponentOne() {
      this.showComponentOne = !this.showComponentOne;
    },
  },
};
</script>
