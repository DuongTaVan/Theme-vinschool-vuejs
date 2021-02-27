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
          <h2 class="banner-title">Vun đắp nhân tài, tương lai rạng rỡ</h2>
          <a href="utn" class="utn-banner">Ứng tuyển ngay</a>
        </div>
      </div>
    </div>
    <div class="main-about">
      <div class="about">
        <div class="about-header">
          <h2 class="about-title">
            GIỚI THIỆU VỀ VINSCHOOL
          </h2>
          <div class="about-tag">
          </div>
        </div>
        <div class="about-content">
          Là một doanh nghiệp xã hội của Tập đoàn Vingroup trong lĩnh vực giáo dục, Hệ thống Giáo dục Vinschool hoạt
          động với tôn chỉ không vì lợi nhuận. Trong vòng 8 năm kể từ ngày thành lập, Vinschool đã phát triển nhanh và
          mạnh về số lượng học sinh và từng bước khẳng định được vị thế dẫn đầu trong đổi mới giáo dục tại Việt Nam

          Với mục tiêu hiện thực hóa tầm nhìn về một ngôi trường Việt Nam mang đẳng cấp quốc tế, Vinschool hiện đang
          có
          6 điểm trường (bao gồm 10 cơ sở) là thành viên của Hội đồng các trường Quốc tế CIS (Council of International
          Schools). Tất cả 35 cơ sở trường của Vinschool đang chuẩn hóa trên tất cả các mảng xây dựng chương trình,
          tuyển dụng và đào tạo Giáo viên và vận hành các dịch vụ giáo dục theo tiêu chuẩn của CIS
        </div>
        <div class="about-image">
          <img src="https://datax-talent.basecdn.net/vinschool/work.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="why-choose">
      <div class="wc-container">
        <div class="wc-header">
          <h2 class="wc-title">
            NHỮNG ƯU THẾ VƯỢT TRỘI CỦA GIÁO VIÊN VINSCHOOL
          </h2>
          <div class="wc-tag"></div>
        </div>
        <div class="row wc-content">
          <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 wc-item" v-for="index in 3" :key="index">
            <div class="item-img">
              <img src="https://datax-talent.basecdn.net/vinschool/icon/icon-carrers-why1.png" alt="">
            </div>
            <h3 class="item-title">Liên tục được đào tạo theo<br>tiêu chuẩn quốc tế</h3>
            <div class="item-content">
              Bên cạnh tuyển dụng nhân sự chất lượng cao, Vinschool đặc biệt chú trọng tới các chương trình đào tạo
              giáo viên. Các giáo viên Vinschool được đào tạo theo chương trình sư phạm của Hoa Kỳ và chương trình
              các môn học theo chuẩn của chương trình phổ thông quốc tế Cambridge.
            </div>
          </div>
        </div>
        <div class="wc-link">
          <a class="btn btn-primary" href=""
             target="_blank">Tìm hiểu thêm về Vinschool</a>
        </div>
      </div>
    </div>
    <div class="job-opportunities">
      <div class="job-contaner">
        <div class="job-header">
          <h2 class="job-title">
            Cơ hội việc làm
          </h2>
          <div class="job-tag"></div>
        </div>
        <div class="row job-content">
          <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 job-sidebar">
            <button class="job-filler btn btn-danger">
              Áp dụng bộ lọc
            </button>
            <div class="job-category" v-for="(n,idx) in 3" :key="idx">
              <h3 class="job-title">Nhóm công việc</h3>
              <div class="search form-group">
                <input class="form-control" type="text" placeholder="search ... ">
              </div>
              <form action="">
                <div class="form-check" v-for="(i,index) in 6" :key="index">
                  <input type="checkbox" class="form-check-input" :id="'job'+ i">
                  <label class="form-check-label" :for="'job'+i">Giáo viên Khối Mầm non {{ i }}</label>
                </div>
              </form>
            </div>
            <div class="social">
              <p class="title">Chia sẻ:</p>
              <a href="">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook'}"/>
              </a>
              <a href="">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google' }"/>
              </a>
              <a href="">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
              </a>
            </div>
          </div>
          <div class="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 job-sidebar">
            <div class="dept">EXPAT POSITIONS</div>
            <div class="job_item row" v-for="(i,index) in 9" :key="index">
              <div class="col-9 col-sm-9 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                <div>
                  <h4 class="job-title_expat">
                    <a href="">School Vice Principal</a>
                  </h4>
                  <p>
                    <font-awesome-icon :icon="['fa', 'thumbtack']"/>
                    <span class="job-desc"><a class="_blank" href="">TP Hồ Chí Minh, </a>
                  </span></p>

                  <p>
                    <font-awesome-icon :icon="['fa', 'clock']"/>
                    <span class="job-desc">31/03/2021</span></p>
                </div>
              </div>
              <div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 job-sidebar">
                <button class="btn btn-danger utn" href="">Ứng tuyển ngay</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #fff;
}

.social a {
  color: #747b81;
  margin: 0 7px;
  font-size: 20px;
}

.social a:hover {
  color: #1422d2;
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
}

.color-gd {
  position: absolute;
  width: 100%;
  height: 632px;
  top: 0px;
  left: 0px;
  z-index: 2;
  background: linear-gradient(
      180deg, #0B1935, #174856);
  opacity: 0.5;
}

.about {
  margin: 40px 0;
}

.about-header {
  margin-bottom: 40px;
  text-align: center;
}

.about-title {
  margin-bottom: 20px;
  line-height: 40px;
}

.about-content {
  margin-bottom: 40px;
}

.main-about {
  max-width: 1000px;
  margin: 0px auto;
}

.wc-container {
  max-width: 1000px;
  margin: 0px auto;
}

.job-contaner {
  max-width: 1000px;
  margin: 0px auto;
}


.about-tag {
  background-color: #343d60;
  width: 140px;
  height: 4px;
  margin: auto;
}

.wc-tag {
  background-color: #343d60;
  width: 140px;
  height: 4px;
  margin: auto;
}

.wc-item {
  text-align: center;
}

.job-tag {
  background-color: #343d60;
  width: 140px;
  height: 4px;
  margin: auto;
}

.about-image img {
  width: 100%;
}

.why-choose {
  background-color: #be1d2c;
  color: #fff;
  padding: 40px 0px;
}

.wc-header {
  text-align: center;
  max-width: 600px;
  margin: 0px auto;
  margin-bottom: 40px;
}

.wc-title {
  font-size: 32px;
  margin-bottom: 20px;
  line-height: 40px;
}

.wc-link {
  margin-top: 35px;
  text-align: center;
}

.item-title {
  margin: 20px 0;
}

.item-img {
  text-align: center;
}

.job-opportunities {
  padding: 40px 0px;
}

.job-desc a {
  color: #747b81;
}

.job-title {
  margin-bottom: 20px;
  line-height: 40px;
}

.job-title_expat {
  line-height: 40px;
}

.job-title a {
  color: #3a3f44;
}

.job-title_expat a {
  color: #3a3f44;
}

.job-header {
  margin-bottom: 40px;
  text-align: center;
}

.job-desc {
  color: #747b81;
  font-size: 14px;
  margin-bottom: 10px;
}

.col-3.col-sm-3.col-md-3.col-lg-3.col-xl-3.job-sidebar button {
  /* text-align: center; */
  margin-top: 20px;
}

.utn {
  font-size: 13px;
  margin-top: 10px;
}

.form-check {
  margin-bottom: 10px;
}

.dept {
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
  padding-top: 20px;
}

span.job-desc {
  margin-left: 5px;
}
</style>
