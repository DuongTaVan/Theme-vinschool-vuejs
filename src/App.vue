<template>
  <div id="app">
    <div class="container-fluid">
      <Header/>
      <router-view></router-view>
      <a class="back_to_top" @click="scrollTop" v-show="visible">
        <font-awesome-icon :icon="['fas', 'chevron-up']"/>
      </a>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    // scrollToTop() {
    //   {
    //     window.scrollTo(0, 0);
    //   }
    // },
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener: function () {
      this.visible = window.scrollY > 150
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  }

}
</script>

<style>
#app {
  font-family: 'Oxy Vietnam','Roboto', 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
  color: #747b81;
  font-size: 16px;
}

.container-fluid {
  padding: 0 !important;
  position: relative;
}

.back_to_top {
  position: fixed;
  z-index: 6;
  top: 85%;
  right: 10px;
  background-color: #be1d2c;
  padding: 10px;
  color: #fff;
  font-size: 20px;
  width: 50px;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 2px 3px 0px rgb(0 0 0 / 20%);
  height: 50px;
}

.back_to_top:hover {
  text-decoration: none;
  cursor: pointer;
  color: #205081;
  transition: 0.2s;
}

@media only screen and (max-width: 600px) {
  .banner-main img {
    object-fit: cover;
  }

  .wc-item {
    margin-bottom: 5%;
  }

  .des-job-interview {
    margin-top: 30px;
  }
  .language a {

    margin-left: 0px !important;
  }
  .list-menu a {
    margin-left: 5px !important;
  }
  a.vietnamese {
    margin-left: 5px !important;
  }
  .title-form {
    font-size: 30px !important;
  }

}

</style>
