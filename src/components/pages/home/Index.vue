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
          <div class="row">
            <h2 class="banner-title">Vun đắp nhân tài, tương lai rạng rỡ</h2>
            <a class="utn-banner" @click="scrollToElement">Ứng tuyển ngay</a>
          </div>
        </div>

      </div>
    </div>
    <div class="main-about container">
      <div class="about">
        <div class="about-header">
          <h2 class="about-title">
            GIỚI THIỆU VỀ VINSCHOOL
          </h2>
          <div class="about-tag">
          </div>
        </div>
        <div class="about-content">
          <p>Là một doanh nghiệp xã hội của Tập đoàn Vingroup trong lĩnh vực giáo dục, Hệ thống Giáo dục Vinschool hoạt
            động với tôn chỉ không vì lợi nhuận. Trong vòng 8 năm kể từ ngày thành lập, Vinschool đã phát triển nhanh và
            mạnh về số lượng học sinh và từng bước khẳng định được vị thế dẫn đầu trong đổi mới giáo dục tại Việt Nam
            với 2 lần được Bộ Giáo dục & Đào tạo cấp bằng khen về đổi mới giáo dục.</p>
          <p>Với mục tiêu hiện thực hóa tầm nhìn về một ngôi trường Việt Nam mang đẳng cấp quốc tế, Vinschool hiện đang
            có 6 điểm trường (bao gồm 10 cơ sở) là thành viên của Hội đồng các trường Quốc tế CIS (Council of
            International Schools). Tất cả 35 cơ sở trường của Vinschool đang chuẩn hóa trên tất cả các mảng xây dựng
            chương trình, tuyển dụng và đào tạo Giáo viên và vận hành các dịch vụ giáo dục theo tiêu chuẩn của CIS.</p>
        </div>
        <div class="about-image">
          <img src="https://datax-talent.basecdn.net/vinschool/work.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="why-choose">
      <div class="wc-container container">
        <div class="wc-header">
          <h2 class="wc-title">
            VÌ SAO NÊN CHỌN VINSCHOOL
          </h2>
          <div class="wc-tag"></div>
        </div>
        <div class="row wc-content">
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 wc-item">
            <div class="item-img">
              <img src="https://datax-talent.basecdn.net/vinschool/icon/icon-carrers-why1.png" alt="">
            </div>
            <h3 class="item-title">Môi trường làm việc văn minh &amp;<br>cơ sở vật chất hiện đại</h3>
            <div class="item-content">
              Vinschool chú trọng xây dựng môi trường làm việc kỷ luật, văn minh, chuyên nghiệp, hiệu quả đồng thời đề
              cao 5 giá trị cốt lõi: Ham học, Chủ động, Chính trực, Quan tâm, Tôn trọng. Ngoài ra, cơ sở vật chất, trang
              thiết bị hiện đại và nền tảng công nghệ tân tiến cũng là những ưu thế giúp Giáo viên và Học sinh Vinschool
              tối ưu hiệu quả dạy và họ.
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 wc-item">
            <div class="item-img">
              <img src="https://datax-talent.basecdn.net/vinschool/icon/icon-carrers-why3.png" alt="">
            </div>
            <h3 class="item-title">Chế độ đãi ngộ hấp dẫn</h3>
            <div class="item-content">
              <ul>
                <li>Mức lương, thưởng cạnh tranh</li>
                <li>Chế độ bảo hiểm xã hội theo quy định và chế độ bảo hiểm sức khỏe riêng</li>
                <li>Ưu đãi học phí khi có con học tại Vinschool</li>
                <li>Thưởng tháng lương thứ 13, quà các ngày lễ Tết trong năm</li>
                <li>Hỗ trợ ăn trưa tại Canteen của trường</li>
                <li>Được ưu đãi đặc biệt khi trải nghiệm và sử dụng các sản phẩm và dịch vụ đẳng cấp của Tập đoàn
                  Vingroup như: Vinpearl, Vinmec, VinFast, VSmart
                </li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 wc-item">
            <div class="item-img">
              <img src="https://datax-talent.basecdn.net/vinschool/icon/icon-carrers-why2.png" alt="">
            </div>
            <h3 class="item-title">Cơ hội đào tạo, phát triển và<br>thăng tiến</h3>
            <div class="item-content">
              Bên cạnh việc tuyển dụng nhân sự chất lượng cao, Vinschool đặc biệt chú trọng vào việc đào tạo và phát
              triển chuyên môn cho Giáo viên thông qua các chương trình đào tạo bài bản, theo chuẩn quốc tế. Giáo viên
              Vinschool có cơ hội học hỏi, phát triển và thăng tiến trong công việc, được chứng tỏ bản thân và tạo điều
              kiện phát huy tối đa năng lực, tiềm năng của mình.
            </div>
          </div>
        </div>
        <div class="wc-link">
          <!--          <a class="btn btn-primary" href=""-->
          <!--             target="_blank">Tìm hiểu thêm về Vinschool</a>-->
          <router-link
              to="/job-desc"
              tag="a"
          >Tìm hiểu thêm về Vinschool
          </router-link>
        </div>
      </div>
    </div>
    <div class="job-opportunities">
      <div class="container">
        <div class="job-header">
          <h2 class="job-title-hd">
            Cơ hội việc làm
          </h2>
          <div class="job-tag"></div>
        </div>
        <div class="row job-content">
          <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-sidebar">
            <button class="job-filler">
              Áp dụng bộ lọc
            </button>
            <div class="job-category">
              <h3 class="job-title">Nhóm công việc</h3>
              <div class="search form-group">
                <input class="form-control filler" type="text" placeholder="Lọc phòng ban... ">
                <span class="search-icon" href=""><font-awesome-icon :icon="['fas', 'search']"/></span>
              </div>
              <form action="">
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>
                  Tất cả
                </div>
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>
                  Expat Positions
                </div>
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>

                  Giáo viên Khối Mầm non
                </div>
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>

                  Giáo viên Khối PTLC
                </div>
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>

                  Các vị trí Quản lý
                </div>
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>

                  Các vị trí khác
                </div>
              </form>
            </div>
            <div class="job-category">
              <h3 class="job-title">Địa điểm</h3>
              <div class="search form-group">
                <input class="form-control filler" type="text" placeholder="Địa điểm... ">
                <span class="search-icon" href=""><font-awesome-icon :icon="['fas', 'search']"/></span>
              </div>
              <form action="">
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>
                  Tất cả
                </div>
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>
                  Hà Nội
                </div>
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>

                  TP Hồ Chí Minh
                </div>
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>

                  Hải Phòng
                </div>
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>

                  Hà Tĩnh
                </div>
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>

                  Thanh Hóa
                </div>
              </form>
            </div>
            <div class="job-category">
              <h3 class="job-title">Loại công việc</h3>
              <form action="">
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>
                  Tất cả
                </div>
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>
                  Toàn thời gian
                </div>
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>

                  Bán thời gian
                </div>
                <div class="list" @click="clickMe = !clickMe">
                  <input class="ip" type="hidden" v-model="clickMe"/>
                  <span class="checkSpan" :class="{'st-ip': clickMe }" @click="clickMe">
                  <span v-if="clickMe"></span>
                </span>

                  Thực tập
                </div>

              </form>
            </div>
            <div class="social">
              <p class="title">Chia sẻ:</p>
              <a class="social-fb" href="">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-f'}"/>
              </a>
              <a class="social-google" href="">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'google-plus-g' }"/>
              </a>
              <a class="social-linkedin" href="">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin-in' }"/>
              </a>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
            <div class="list-ct">
              <div class="dept">EXPAT POSITIONS</div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">(IGCSE/A-Level) Business & Economics Teacher</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fas', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(1)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">IGCSE/A-Level Art & Design Teacher</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(2)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">School Vice Principal</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(3)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">A-Level Physics Teacher</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc"> 30/04/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(4)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">A-Level Media Studies Teacher</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">30/04/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(5)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Cambridge Primary Teacher</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh; Hải Phòng</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">30/04/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(6)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Kindergarten ESL Teacher</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href="">Hà Nội; TP Hồ Chí Minh; Hải Phòng</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">30/04/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(7)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Cambridge English Teacher</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(8)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Cambridge Natural Sciences Teacher</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(9)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Cambridge Global Perspectives Teacher</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(10)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Cambridge ICT Teacher</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(11)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Cambridge Mathematics Teacher</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(12)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Standard Program ESL Teacher</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(13)">Ứng tuyển ngay</button>
                </div>

              </div>
            </div>
            <div class="list-ct">
              <div class="dept">GIÁO VIÊN KHỐI MẦM NON</div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Giáo viên Tiếng Anh khối Mầm non</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(14)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Giáo viên mầm non/ Giáo viên tiếng anh mầm non</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(15)">Ứng tuyển ngay</button>
                </div>

              </div>

            </div>
            <div class="list-ct">
              <div class="dept">GIÁO VIÊN KHỐI PTLC</div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Giáo viên Toán</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(16)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Giáo viên Sinh học</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(17)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Giáo viên Ngữ văn</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(18)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Giáo viên Vật Lý</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc"> 30/04/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(19)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Giáo viên Lịch sử</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">30/04/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(20)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Giáo viên Hóa học</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh; Hải Phòng</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">30/04/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(21)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Giáo viên Địa lý</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href="">Hà Nội; TP Hồ Chí Minh; Hải Phòng</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">30/04/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(22)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Trợ giảng Tiếng Anh</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(23)">Ứng tuyển ngay</button>
                </div>

              </div>
            </div>
            <div class="list-ct">
              <div class="dept">CÁC VỊ TRÍ QUẢN LÝ</div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Phó Hiệu Trưởng Trung học</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(24)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Bếp trưởng</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(25)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Trưởng bộ phận Hành chính</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(26)">Ứng tuyển ngay</button>
                </div>

              </div>

            </div>
            <div class="list-ct">
              <div class="dept">CÁC VỊ TRÍ KHÁC</div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Chuyên viên Cố vấn học tập</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(28)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Chuyên viên Hành chính Tổng hợp</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(29)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Cộng tác viên Thủ tục Nhân sự</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">31/05/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(30)">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Cộng tác viên Bộ phận Tuyển sinh & Chăm sóc khách hàng</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc"> 30/04/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail">Ứng tuyển ngay</button>
                </div>

              </div>
              <div class="job_item row">
                <div class="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 job-sidebar">
                  <div>
                    <h4 class="job-title_expat">
                      <a href="">Cộng tác viên Tuyển dụng</a>
                    </h4>
                    <p>
                      <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                      <span class="job-desc"><a class="_blank" href=""> Hà Nội; TP Hồ Chí Minh</a>
                  </span></p>

                    <p>
                      <font-awesome-icon :icon="['fa', 'clock']"/>
                      <span class="job-desc">30/04/2021</span></p>
                  </div>
                </div>
                <div class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 job-utn">
                  <button class="utn-bt" @click="backDetail(33)">Ứng tuyển ngay</button>
                </div>

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
  data() {
    return {
      clickMe: false,
    };
  },
  methods: {
    backDetail(id) {
      this.$router.push('/job-desc/'+id);
    },
    scrollToElement() {
      const el = this.$el.getElementsByClassName('job-opportunities')[0];

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({behavior: 'smooth'});
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #fff;
}

.social a {
  margin: 0 3px;
  font-size: 16px;
  display: inline-block;
  text-align: center;
  color: #888;
  width: 30px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ddd;
  border-radius: 50%;
}

.social-fb:hover {
  background-color: #3b5998;
  border: 1px solid #3b5998;
  color: #fff;
}

.social-google:hover {
  background-color: #e62117;
  border: 1px solid #e62117;
  color: #fff;
}

.social-linkedin:hover {
  background-color: #0077b5;
  border: 1px solid #0077b5;
  color: #fff;
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
  margin: 0 auto;

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

.about {
  margin: 40px 0;
}

.about-header {
  margin-bottom: 40px;
  text-align: center;
}

.about-title {
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: normal;
  display: inline-block;
  line-height: 40px;
}

.about-content {
  margin-bottom: 40px;
  text-align: justify;

  line-height: 22px;
  color: #747b81;
}

.main-about {
  margin: 0px auto;
}

.about-tag {
  background-color: #343d60;
  width: 140px;
  height: 4px;
  margin: auto;
}

.wc-item ul {
  padding-left: 20px;
  list-style: disc;
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

.wc-item .item-img img {
  height: 50px;
}

.item-content {
  line-height: 22px;
  text-align: justify;
}

.job-tag {
  background-color: #343d60;
  width: 140px;
  height: 4px;
  margin: auto;
}
.job_item{
  padding: 15px 0px;
  border-bottom: 1px dotted #eee;
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
  font-weight: normal;
  line-height: 40px;
}

.wc-link {
  margin-top: 35px;
  text-align: center;
}

.wc-link a {
  color: #fff;
  padding: 10px 20px;
  font-weight: bold;
  display: inline-block;
  background-color: #343d60;
  text-transform: uppercase;
}

.wc-link a:hover {
  text-decoration: none;
}

.item-title {
  margin: 20px 0;
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
  min-height: 45px;
  max-height: 45px;
  overflow: hidden;
}

.item-img {
  text-align: center;
}

.job-filler {
  color: #fff;
  background-color: #be1d2c;
  border: 1px solid #be1d2c;
  width: 100%;
  cursor: pointer;
  padding: 10px;
  border-radius: 3px;
}

.job-opportunities {
  padding: 40px 0px;
}

.job-desc a {
  color: #747b81;
}
.job-desc a:hover {
  color: #205081;
}

.job-title-hd {
  margin-bottom: 20px;
  line-height: 40px;
  font-weight: normal;
  font-size: 32px;
  display: inline-block;
}

.job-title_expat {
  color: #3a3f44;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 24px;
}

.job-title {
  font-size: 20px;
  font-weight: normal;
  color: #3a3f44;
  margin-bottom: 10px;
  padding-bottom: 10px;
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

.utn-bt {
  color: #fff;
  background-color: #be1d2c;
  margin-top: 10px;
  font-size: 13px;
  font-weight: 600;
  margin-top: 20px;
  padding: 7px 15px;
  border-radius: 3px;
  width: 100%;
  border: 1px solid #be1d2c;;
}


.job-sidebar p {
  margin-top: 0;
  margin-bottom: 10px;
}
.job-utn {
  text-align: center;
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

.checkSpan {
  width: 14px;
  height: 14px;
  border: 1px solid #abacab;
  display: inline-block;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  margin-right: 10px;
}

.checkSpan > span {
  width: 11px;
  height: 6px;
  position: absolute;
  border: 3px solid #be1d2c;
  border-left: none;
  border-bottom: none;
  transform: rotate(127deg);
  top: 1px;
  left: 1px;
}

.list {
  cursor: pointer;
  margin-bottom: 10px;
}

.search {
  position: relative;
}

.search-icon {
  position: absolute;
  top: 8px;
  right: 13px;
  color: #747b81;
}

.st-ip {
  border: 1px solid #be1d2c;
}
.job-filler{
  margin-bottom: 20px;
}
.job-category {
  margin-bottom: 20px;
}
.job-category form{
  padding-left: 5px;
}
</style>
