<template>
  <div>
    <movie-list-vue :keyword="'/movie/popular'" :showMore="false" :numberOfMovies="24" :heading="'Popular'" />
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