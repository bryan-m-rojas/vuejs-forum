<template>
  <div class="col-full push-top">
    <h1>Welcome to the Forum</h1>
    <CategoryList :categories="categories"/>
  </div>
</template>

<script>
  import CategoryList from '@/components/CategoryList'

  export default {
    name: 'PageHome',
    components: {
      CategoryList
    },

    computed: {
      categories () {
        return Object.values(this.$store.state.categories)
      }

      // beforeCreated () {
      //   console.log('beforeCreate', this.categories)
      // },

      // created () {
      //   console.log('created', this.categories)
      // },

      // beforeMount () {
      //   console.log('beforeMount', this.categories)
      // },

      // mounted () {
      //   console.log('mounted', this.categories, this.$el.innerText)
      // },

      // destroyed () {
      //   console.log('destroyed', this.categories)
      // }
    }
  }
</script>