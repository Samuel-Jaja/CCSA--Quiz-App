<template>
  <div id="container">
    <nav>
      <ul>
        <li v-for="link in links" :key="link.link" ><router-link :class="router == link.link? 'active': ''" :to="link">{{link.name}}</router-link></li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>
import movieListVue from './components/movieList.vue'
import movieComponent from './views/Movie-Component.vue'

export default {
  components: {
    movieListVue,
    movieComponent
  },
  data() {
    return {
      links: [
        {
          name: 'Home',
          link: '/'
        },
        {
          name: 'Categories',
          link: '/categories'
        },
        {
          name: 'Trending',
          link: '/trending'
        },
        {
          name: 'Top Rated',
          link: '/top-rated'
        },
        {
          name: 'Popular',
          link: '/popular'
        },
        {
          name: 'Upcoming',
          link: '/upcoming'
        },
      ]
    }
  },
  computed: {
    router () {
      return this.$route.path
    }
  },  
}
</script>

<style lang="scss" scoped>
  #container {
    margin: 0 auto;
    max-width: 900px;
  }

  nav {
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    height: 50px;
    width: 100%;
  }
  
  ul {
    display: flex;
    list-style: none;
    padding: 10px;
    padding-left: 0;
    padding-bottom: 0 !important;
    li {
      margin-left: 10px;
      a.active {
        color: #fe6c6c
      }
      &:first-of-type {
        margin-left: 0;
      }
      a {
        color: #333;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
</style>
