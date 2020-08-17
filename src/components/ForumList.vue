<template>
  <div class="forum-list">
    <h2 class="list-title">
      <a href="#">Feedback &amp; Information</a>
    </h2>

    <ForumListItem
      v-for="forum in forums"
      :forum="forum"
      :key="forum['.key']"   
    />
  </div>
</template>

<script>
  import ForumListItem from '@/components/ForumListItem'
  export default {
    props: {
      components: {
        ForumListItem
      },
    
      forums: {
        required: true,
        type: Array
      }
    }
  }
</script>

<style scoped>
</style>