<template>
  <div>
    <div class="banner">
      <div class="banner-main">
        <img src="https://datax-talent.basecdn.net/vinschool/banner.jpg" alt="">
      </div>
      <div class="color-gd">
      </div>
      <div class="banner-txt">
        <div class="banner-text">
          <div class="banner-previous">
            <router-link
                to="/"
                tag="a"
                class="previous"
            >
              <font-awesome-icon :icon="{ prefix: 'fas', iconName: 'angle-left' }"/>
              Quay lại
            </router-link>
          </div>
          <h2 class="banner-title">Cambridge Primary Teacher</h2>
          <p class="icon">
            <span><font-awesome-icon :icon="['fas', 'briefcase']"/></span>&nbsp;
            <span><font-awesome-icon :icon="['fas', 'map-marker-alt']"/>&nbsp;
            Expat Positions</span>&nbsp;
            <span class="job-desc"><font-awesome-icon :icon="['fa', 'clock']"/>
            Toàn thời gian</span></p>
          <button href="utn" class="utn-banner" @click="scrollToElement">Nộp đơn ứng tuyển</button>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="job-des-article">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div class="job-article">
              <div class="desc-job">
                <p class="desc salary-table"><span class="name">Lương:</span> <br> <b>3,000</b> <span>USD</span></p>
                <p class="desc location"><span class="name">Location:</span> <br><a class="blank" href="">TP Hồ Chí
                  Minh</a>,
                  <a class="blank" href="">Hà Nội</a></p>
                <p class="desc date"><span class="name">Hạn nộp hồ sơ: </span><br>01/02 — 30/04/2021</p>

              </div>
              <div class="job-des-social">
                <div class="line-share"></div>
                <p class="name">Share:</p>
                <div class="google-fb">
                  <a class="facebook">
                    <span class="fb-icon"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square'}"/>
                    </span>Facebook</a>

                  <a class="google">
                     <span class="icon-google"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google-plus-g' }"/>
                  </span> Google</a>
                </div>

              </div>
              <div class="list-job">
                <div class="name">Công việc liên quan</div>
                <div class="item">
                  <router-link to="/job-desc/35" tag="a">IGCSE/A-Level Art & Design Teacher</router-link>
                  <br>
                  <span class="salary">
                      • <b>4,000</b> USD</span>
                </div>
                <div class="item">
                  <router-link to="/job-desc/35" tag="a">School Vice Principal</router-link>
                  <br>
                  <span class="salary">
                    Thỏa Thuận</span>
                </div>
                <div class="item">
                  <router-link to="/job-desc/35" tag="a">A-Level Physics Teacher</router-link>
                  <br>
                  <span class="salary">
                    Thỏa Thuận</span>
                </div>
                <div class="item">
                  <router-link to="/job-desc/35" tag="a">A-Level Media Studies Teacher</router-link>
                  <br>
                  <span class="salary">
                    Thỏa Thuận</span>
                </div>
                <div class="item">
                  <router-link to="/job-desc/36" tag="a">Cambridge Primary Teacher</router-link>
                  <br>
                  <span class="salary">
                    Thỏa Thuận</span>
                </div>
                <div class="item">
                  <router-link to="/job-desc/37" tag="a">Kindergarten ESL Teacher</router-link>
                  <br>
                  <span class="salary">
                     • <b>3,000</b> USD</span>
                </div>
                <div class="item">
                  <router-link to="/job-desc/35" tag="a">Cambridge English Teacher</router-link>
                  <br>
                  <span class="salary">
                      • <b>4,000</b> USD</span>
                </div>
                <div class="item">
                  <router-link to="/job-desc/35" tag="a">Cambridge Natural Sciences Teacher</router-link>
                  <br>
                  <span class="salary">
                      • <b>4,000</b> USD</span>
                </div>
                <div class="item">
                  <router-link to="/job-desc/35" tag="a">Cambridge Global Perspectives Teacher</router-link>
                  <br>
                  <span class="salary">
                    Thỏa Thuận</span>
                </div>
                <div class="item">
                  <router-link to="/job-desc/35" tag="a">Cambridge ICT Teacher</router-link>
                  <br>
                  <span class="salary">
                      • <b>4,000</b> USD</span>
                </div>


              </div>
              <a href="" class="btn-viewall">Xem tất cả <span
                  class="-ap icon-arrow-right3"><font-awesome-icon :icon="{ prefix: 'fas', iconName: 'arrow-right' }"/></span></a>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    scrollToElement() {
      const el = this.$el.getElementsByClassName('form-register')[0];

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'});
      }

    }
  }
}
</script>
<style scoped>
.previous {
  border-bottom: 1px solid #343d60;
  color: #343d60;
}

.previous:hover {
  color: #3a4fa0;
  text-decoration: none;
}

.utn-banner:hover {
  background-color: #fff;
  color: #be1d2c;
  text-decoration: none;
}

.utn-banner {
  padding: 15px 40px;
  margin-top: 30px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0.05);

}

.banner {
  position: relative;
  clear: both;
  height: 650px;
  z-index: 1;
}

.banner-title {
  color: #fff;
  font-size: 40px;
  font-weight: normal;
  line-height: 50px;
  margin-bottom: 30px;
}

.banner-main img {
  width: 100%;
  height: 100%;
}

.banner-txt {
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  z-index: 3;
  color: #fff;
}

.banner-main {
  width: 100%;
  height: 100%;
}

.color-gd {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 2;
  background: linear-gradient(
      180deg, #0B1935, #174856);
  opacity: 0.5;
}

.icon {
  font-size: 20px;
  margin-bottom: 50px;
}

.list-job a {
  color: #205081;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 5px;
}

.salary {
  color: #747b81;
  font-size: 12px;
}

.desc-job {
  border: 1px solid #e5e5e5;
  position: relative;
  border-radius: 5px;
}

.desc-job a {
  color: #747b81;
}

.desc {
  line-height: 25px;
  padding: 10px 20px;
  border-bottom: 1px solid #e5e5e5;
}

.job-des-social {
  border: 1px solid #e5e5e5;
  position: relative;
  border-radius: 5px;
  text-align: center;
  padding: 20px;
  margin-top: 20px;
}

.facebook {
  color: #fff;
  background-color: #3b5999;
  width: 47%;
  border-radius: 3px;
  line-height: 40px;
  text-align: center;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  float: left;
  padding-left: 30px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1)
}

.fb-icon {
  position: absolute;
  box-sizing: border-box;
  text-align: center;
  top: 0px;
  line-height: 40px;
  width: 30px;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  left: 0px
}


.facebook:hover {
  text-decoration: none;
  background-color: #5f79af;
  cursor: pointer;
}

.google:hover {
  text-decoration: none;
  background-color: #bb4839;
  cursor: pointer;
}

.icon-google {
  position: absolute;
  box-sizing: border-box;
  text-align: center;
  top: 0px;
  line-height: 40px;
  width: 30px;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  left: 0px;
}

.google {
  color: #fff;
  background-color: #dd4b39;
  width: 47%;
  border-radius: 3px;
  line-height: 40px;
  text-align: center;
  box-sizing: border-box;
  display: inline-block;
  position: relative;

  padding-left: 30px;

  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.list-job {
  padding: 40px 0px;
}

.list-job .item {
  padding: 15px 0px;
  border-bottom: 1px dotted #e5e5e5;
}

.form-register {
  background-color: #fff;
  padding: 25px 0;
  margin-top: 40px;
  border-top: 2px dotted rgba(0, 0, 0, 0.1);
}

.google-fb {
  width: 100%;
  height: 100%;
  line-height: 40px;
}

.btn-viewall {
  font-weight: bold;
  color: #be1d2c;
  margin-top: 20px;
  border: 1px solid #be1d2c;
  padding: 10px 20px;
  text-align: center;
  display: block;
  border-radius: 3px;
}

.btn-viewall:hover {
  background-color: #be1d2c;
  color: #fff;
  text-decoration: none;
  transition: 0.2s;
}

.job-des-article {
  padding: 40px 0px;
}

.list-job a:hover {
  text-decoration: none;
  color: #205081;
}
.list-job a{
 color: #343d60;
  font-weight: normal;
}

</style>