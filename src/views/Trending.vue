<template>
  <div>
    <movie-list-vue :keyword="'/trending/all/week'" :showMore="false" :numberOfMovies="24" :heading="'Trending'" />
  </div>
</template>

<script>
import movieListVue from '@/components/movieList.vue'

export default {
    components: {
        movieListVue
    }
}
</script>

<style>

</style>