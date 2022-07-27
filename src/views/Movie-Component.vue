<template>
  <div>
    <img class="img-logo" :src="imgUrl + movie.backdrop_path" />
    <div class="overall">
        <div class="movie-details">
            <b>{{ movie.title }}</b>
            <p>Rating: {{ movie.vote_average ? movie.vote_average.toFixed(1) : 0 }}</p>
            <p>Budget: ${{ movie.budget }}</p>
            <p>Release Date: {{ movie.release_date }}</p>
            <p>Revenue: ${{ movie.revenue }}</p>
            <p>Tagline: {{ movie.tagline }}</p>
        </div>
        <div class="movie-overview">
            <p>{{ movie.overview }}</p>
        </div>
    </div>

    <movie-list :key="key" :showMore="false" :heading="similarObject.heading" :numberOfMovies="6" :keyword="similarObject.keyword" />
  </div>
</template>

<script>
import Axios from 'axios'
import { BASE_URL, API_KEY, IMG_URL } from '@/config'
import MovieList from './../components/movieList.vue'

export default {
    data() {
        return {
            movie: {},
            imgUrl: IMG_URL,
            key: 0
        }
    },
    components: {
        MovieList
    },
    computed: {
        routeParamsID: function() {
            return this.$route.params.id
        },
        similarObject () {
            return {
                heading: `Similar`,
                keyword: `/movie/${this.routeParamsID}/similar`
            }
        }
    },
    watch: {
        routeParamsID(newVal, oldVal) {
            this.loadMovieDetails(newVal)
            this.key++
        },
    },
    methods: {
        loadMovieDetails: function (id) {
            Axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`).then(res => {
                this.movie = res.data
            })
            window.scrollTo(0, 0)
        }
    },
    created() {
        this.loadMovieDetails(this.routeParamsID)
    }
}
</script>

<style lang="scss" scoped>
    .img-logo {
        height: 300px;
        object-fit: cover;
        width: 100%
    }

    .overall {
        display: flex;
        justify-content: space-between;
        .movie-details {
            height: 400px;
            flex: 1 1 30%;
            padding: 20px
        }
        .movie-overview {
            height: 400px;
            flex: 1 1 70% ;
            padding: 20px;
            p {
                line-height: 35px;
            }
        }
    }
</style>