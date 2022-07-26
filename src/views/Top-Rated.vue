<template>
  <div>
    <movie-list-vue :keyword="'/movie/top_rated'" :showMore="false" :numberOfMovies="24" :heading="'Top Rated'" />
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