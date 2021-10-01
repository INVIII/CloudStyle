<template>
  <RouterView />
</template>

<script>

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min';
import Upload from './views/Upload.vue';

export default{
  name: 'app',
  components: {
    Upload
  },
}
</script>
