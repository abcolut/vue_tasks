<template>
  <div class="home">
    <List />
    <br><br>
    <Insert />
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/views/List.vue'
import Insert from '@/views/Insert.vue'

export default {
  name: 'home',
  components: { List, Insert }
}
</script>
