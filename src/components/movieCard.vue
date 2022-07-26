<template>
    <div id="movie-card">
        <img :src="imgUrl+movie.backdrop_path" class="movie-img"/>
        <div class="text">
            <div class="title" @click="pushToMovieDetails(movie.id)">
                <!-- <h5 v-if="movie.media_type">{{ movie.title }} ({{movie.release_date}})</h5> -->
                <h5 v-if="!movie.media_type || movie.media_type == 'movie'">{{ movie.title }} ({{ convert(movie.release_date) }})</h5>
                <h5 v-else>{{ movie.name }} ({{ convert(movie.first_air_date) }})</h5>
            </div>
            <div class="details">
                <h5>{{ movie.vote_average.toFixed(1) }} Rating</h5>
                <h5>{{ movie.release_date || movie.first_air_date }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
import { IMG_URL, convertToYear } from './../config.js'

export default {
    props: {
        movie: {
            type: Object
        }
    },
    data () {
        return {
            imgUrl: IMG_URL
        }
    },
    methods: {
        convert(date) {
            return convertToYear(date)
        },
        pushToMovieDetails(id) {
            this.$router.push({
                name: 'Movie Details',
                params: { id }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    h5 {
        margin: 0;
        margin-top: 10px;
    }
    
    .text {
        padding: 10px;
        padding-bottom: 50px;
    }

    .title {
        h5 {
            height: 20px;
            cursor: pointer;
            &:hover {
                color: #ff6161
            }
        }
    }

    #movie-card {
        border: 1px solid #ccc;
        // max-width: 300px;
        // box-shadow: 1px 2px 20px #ccc;
    }

    .movie-img {
        height: 180px;
        object-fit: cover;
        width:100%;
    }

    .details {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
</style>