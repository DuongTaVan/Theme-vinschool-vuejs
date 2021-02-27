<template>
  <div id="app">
    <div class="main">
      <div class="ctn">
        <div class="header">
          <div class="logo">
            <a href="">
              <img src="https://datax-talent.basecdn.net/vinschool/logo-w.png">
            </a>
          </div>
          <div class="list-menu">
            <div class="menu-item">
              <a href="">Trang chu</a>
            </div>
          </div>
          <div class="language">
            <a href="">English</a>
            <a href="">Vietnamese</a>
          </div>
        </div>
      </div>
      <!--      <Home/>-->
      <!--      <JobDesc></JobDesc>-->
      <router-view></router-view>
      <a class="back_to_top" @click="scrollTop" v-show="visible">back to top</a>
      <div class="footer-logo">
        <div class="footer-logo-container">
          <div class="footer-logos-item"><img src="https://datax-talent.basecdn.net/vinschool/footer/logo_cam.png"
                                              alt="" class="img-fluid"></div>
          <div class="footer-logos-item"><img src="https://datax-talent.basecdn.net/vinschool/footer/logo_cis.png"
                                              alt="" class="img-fluid"></div>
          <div class="footer-logos-item"><img src="https://datax-talent.basecdn.net/vinschool/footer/logo_ipc.png"
                                              alt="" class="img-fluid"></div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-container">
          <div class="container">
            <p class="footer-title">HỆ THỐNG GIÁO DỤC VINSCHOOL</p>
            <div class="row">
              <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" v-for="(i,index) in 3" :key="index">
                <div class="widget">
                  <p class="h6 footer-title">Tại Miền Bắc</p>
                  <div class="content-widget">
                    <p><b>T: </b><span>0243 9753333 - máy lẻ: 6638, 6644, 6647</span>
                    </p>
                    <p>hoặc hotline: 097 875 8080</p>
                    <p><b>Email: </b><a href="">abc.edu.vn</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <div class="bottom-footer">
              <div class="copyright">
                Powered by <a target="__blank" href="">Base
                E-Hiring.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Home from './components/Home.vue'
// import JobDesc from './components/JobDescription.vue'

export default {
  name: 'App',
  components: {
    //Home,
    // JobDesc
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
  font-family: 'Roboto', 'Segoe UI', sans-serif;
  margin: 0;
  padding: 0;
  color: #747b81;

}

.main {
  position: relative;
}

.ctn a {
  color: #fff;
}

.ctn {
  position: fixed;
  z-index: 4;
  width: 100%;
}

.footer a {
  color: #fff;
}

.list-menu a {
  margin-left: 30px;
}

.language a {

  margin-left: 30px;
}

.logo {
  float: left;
  margin-top: 5px;
}

.logo img {
  height: 55px;
  width: auto;
}

.list-menu .menu-item {
  line-height: 65px;
}

.list-menu {
  float: left;
}

.language {
  line-height: 65px;
  float: right;
}

.ctn {
  background-color: #be1d2c;

}

.header {
  height: 65px;
  max-width: 1000px;
  margin: 0px auto;

}

.footer-logo-container {
  display: flex;
  max-width: 1000px;
  margin: 0px auto;
  align-items: center;
  justify-content: center;
}

.footer-logos-item {
  padding: 0 30px;
}

.footer-logo {
  padding: 25px 0px;
  background: #d2d2d2;
  border-bottom: 8px solid #202744;
}

.footer {
  background: url(https://datax-talent.basecdn.net/vinschool/footer/bg_footer.jpg) no-repeat;
  background-size: cover;
  padding: 30px 0;
  color: #fff;
  line-height: 2;
}

.footer-container {
  text-align: center;
}

.back_to_top {
  position: fixed;
  z-index: 6;
  top: 85%;
  right: 2%;
  background-color: #be1d2c;
  padding: 10px;
}

.back_to_top:hover {
  text-decoration: none;
  background-color: #ec3243;
  cursor: pointer;
}
</style>
