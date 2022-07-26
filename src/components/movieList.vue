<template>
    <div>
        <div v-if="movies.length > 0" class="heading">
            <h3>{{heading}}</h3>
            <router-link v-if="showMore" :to="showMoreRoute">More...</router-link>
        </div>
            
        <div id="movie-list">
            <div class="items" v-for="movie in movies" :key="movie.id">
                <movie-card-vue :movie="movie" />
            </div>
        </div>
    </div>
</template>

<script>
import movieCardVue from './movieCard.vue'
import Axios from 'axios'
import { API_KEY, BASE_URL } from './../config.js'

export default {
    components: {
        movieCardVue
    },
    props: {
        keyword: {
            type: String,
            default: 'trending'
        },
        heading: {
            type: String,
            default: 'Trending this week'
        },
        numberOfMovies: {
            type: Number,
            default: 3
        },
        showMore: {
            type: Boolean,
            default: true
        },
        showMoreRoute: {
            type: String,
            required: false
        }
    },
    data () {
        return {
            movies: []
        }
    },
    mounted() {
        Axios.get(`${BASE_URL}${this.keyword}?api_key=${API_KEY}`).then(res => {
            this.movies = res.data.results.slice(0, this.numberOfMovies)
        })
    }
}
</script>

<style lang="scss" scoped>
    #movie-list {
        display: flex;
        flex-wrap: wrap;
        gap: 1em;
        justify-content: space-between;
    }
    
    .heading {
        display: flex;
        justify-content: space-between;
        a {
            color: #ee6060;
            text-decoration: none;
            margin-top: 20px;
        }
    }

    .items {
        flex: 0 1 250px;
    }
</style>