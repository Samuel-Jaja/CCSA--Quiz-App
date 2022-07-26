<template>
  <div>
    <movie-list-vue :showMoreRoute="'/trending'" :keyword="'/trending/all/week'" :numberOfMovies="6" :heading="'Trending this week'" />
    <movie-list-vue :showMoreRoute="'/trending'" :keyword="'/trending/all/day'" :numberOfMovies="6" :heading="'Trending this day'" />
    <movie-list-vue :showMoreRoute="'/top-rated'" :keyword="'/movie/top_rated'" :numberOfMovies="6" :heading="'Top Rated Movies'" />
    <movie-list-vue :showMoreRoute="'/popular'" :keyword="'/movie/popular'" :numberOfMovies="6" :heading="'Popular'" />
    <movie-list-vue :showMoreRoute="'/upcoming'" :keyword="'/movie/upcoming'" :numberOfMovies="6" :heading="'Upcoming'" />
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