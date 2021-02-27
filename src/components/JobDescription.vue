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
            >Quay lại
            </router-link>
          </div>
          <h2 class="banner-title">Cambridge Primary Teacher</h2>
          <p class="icon">
            <font-awesome-icon :icon="['fa', 'clock']"/>
            <span class="job-desc">Toàn thời gian</span></p>
          <button href="utn" class="utn-banner" @click="scrollToElement">Nộp đơn ứng tuyển</button>
          <!--          <router-link-->
          <!--          to="/"-->
          <!--          tag="a"-->
          <!--          class="utn-banner"-->
          <!--          >Nộp đơn ứng tuyển</router-link>-->
        </div>
      </div>
    </div>
    <div class="job-des-content">
      <div class="job-des-article">
        <div class="row">
          <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 job-sidebar-left">
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
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook'}"/>
                    Facebook</a>

                  <a class="google">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google'}"/>
                    Google</a>
                </div>

              </div>
              <div class="list-job">
                <div class="name">Công việc liên quan</div>
                <div class="item" v-for="index in 5" :key="index">
                  <a href="">School Vice Principal</a><br>
                  <span class="salary">
                    Thỏa Thuận</span>
                </div>

              </div>
              <div class="show_all_job"><a class="show_all">Xem tất cả </a></div>
            </div>
          </div>
          <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 job-sidebar-right">
            <div class="des-job-interview">
              <h2>Mô tả công việc</h2>
              <div class="list-article">
                <p>Vinschool Education System is seeking professionally-certified primary teachers ready for the
                  exciting challenge of working in one of the world‘s most desirable countries for expats. &nbsp;Vietnam‘s
                  optimistic energy and insatiable thirst for knowlesge creates a truly enthusiastic teaching
                  environment.</p>
                <div class="essential" v-for="index in 3" :key="index">
                  <p><strong>Essential Responsibilities (included, but not limited to):</strong></p>
                  <p v-for="index in 3" :key="index">· Teaching Mathematics, English, Global Perspectives, and
                    Cumulating Project to students according to the requirements of the Cambridge International
                    Examinations Curriculum.</p>
                </div>
                <button class="btn btn-danger" @click="scrollToElement">Nộp đơn ứng tuyển</button>
              </div>
              <div class="form-register">
                <h1 class="title-form">Nộp đơn ứng tuyển công việc này</h1>
                <form action="">
                  <div class="form-group">
                    <label for="fullname">Họ và tên *</label>
                    <input type="text" id="fullname" class="form-control" placeholder="Họ và tên">
                  </div>
                  <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" class="form-control" placeholder="Email">
                  </div>
                  <div class="form-group">
                    <label for="phone">Số điện thoại *</label>
                    <input type="number" id="phone" class="form-control" placeholder="Số điện thoại">
                  </div>
                  <div class="form-group">
                    <label for="content">Nội dung (Cover letter)</label>
                    <input type="text" id="content" class="form-control" placeholder="Nội dung">
                  </div>
                  <div class="form-group">
                    <div class="upload">
                      <div class="text full-mask">
                        <input type="file" name="file"><br>
                        CV của bạn *
                        <div class="more">
                          Click để chọn &amp; tải lên CV của bạn
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="form-control btn btn-danger">Nộp đơn ứng tuyển</button>
                </form>
              </div>
            </div>
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
  color: #273777;
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

.job-des-content {
  max-width: 1000px;
  margin: 25px auto;
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

.facebook, .google {
  margin-right: 10px;
  color: #fff;
  background-color: #3b5999;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
}

.facebook:hover {
  text-decoration: none;
  background-color: #5f79af;
}

.google:hover {
  text-decoration: none;
  background-color: #bb4839;
}

.google {
  background-color: #dd4b39;
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

.upload {
  position: relative;
  border: 2px dashed #ccc;
  border-radius: 4px;
  margin-top: 10px;
  text-align: center;
  padding: 15px;
}

.show_all {
  padding: 15px 40px;
  margin-top: 30px;
  border-radius: 3px;

  cursor: pointer;
  font-weight: 600;
  border: 1px solid #be1d2c;
  background: rgba(255, 255, 255, 0.05);
}

.show_all:hover {
  background-color: #be1d2c;
  color: #fff;
}

.google-fb {
  width: 100%;
  height: 100%;
  line-height: 40px;
}

@media only screen and (max-width: 600px) {
  .banner-main img {
    object-fit: cover;
  }

  .show_all[data-v-22393eaf] {
    padding: 0;
  }
}
</style>