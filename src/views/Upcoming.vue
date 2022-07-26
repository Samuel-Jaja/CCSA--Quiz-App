<template>
  <div>
    <movie-list-vue :keyword="'/movie/upcoming'" :showMore="false" :numberOfMovies="24" :heading="'Upcoming'" />
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