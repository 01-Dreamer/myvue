<template>
  <NavBar />
  <router-view />
</template>

<script>

import NavBar from './components/NavBar.vue';
import $ from 'jquery'


export default {
  components: {
    NavBar,
  },

  setup() {
  $.ajax({
    url: 'https://data.zxylearn.top/',
    type: 'GET',
    success: (response) => {
      console.log(response);
    },
    error: (error) => {
      console.error(error);
    }
  });
}

}

</script>


<style></style>
