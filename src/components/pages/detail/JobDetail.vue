<template>
  <div>
    <div class="des-job-interview">
      <h2>Mô tả công việc</h2>
      <div class="list-article">
        <p><strong>About Vinschool‘s Cambridge Program:</strong></p>
        <p>Vinschool‘s Advanced (Cambridge) Program is an integrated bilingual program that follows the Cambridge
          International Curriculum. (Grades 1-12)&nbsp;</p>
        <p><strong>What we need:</strong></p>
        <p>Vinschool is seeking dynamic, experienced, professionally certified teachers to join our international
          teaching team. Successful applicants will teach Business and Economics Courses at the IGCSE &amp; A-Level
          (Grades 10-12). The course of study follows the relevant Cambridge International Curriculum Framework.
          Successful applicants will be suitably qualified and experienced, as well as being fully committed to
          supporting the development of students through curricular and extra-curricular activities.</p>
        <p><strong>Essential Responsibilities (included, but not limited to):</strong></p>
        <p>· Teaching Business &amp; Economics to students according to the requirements of the Cambridge International
          Examinations Curriculum.</p>
        <p>· Preparing curriculum, lesson plans, and teaching materials for class instruction and activities, managing
          information on the LMS.&nbsp;</p>
        <p>· Adapting teaching methods, learning strategies, and instructional materials to meet the varying needs and
          interests of students.</p>
        <p>· Conducting assessments of student attainment, monitoring student academic progress and providing pertinent
          feedback.</p>
        <p>· Establishing classroom expectations, observing and evaluating student performance, behavior, social
          development, and health.</p>
        <p>· Conferring with teachers, parents, or guardians to discuss student progress and to address behavioral or
          academic issues.</p>
        <p>· Preparing and implementing remedial programs for students requiring extra help.</p>
        <p>· Attending faculty meetings, professional development training, and school events.</p>
        <p>· Planning and working on extracurricular activities such as clubs, academic contests, etc.</p>
        <p>· Performing miscellaneous professional duties as assigned by the Principal/Director.</p>
        <p><strong>Other Benefits:</strong></p>
        <p>• Salary starts at 3,000 USD</p>
        <p>• Airfare support (Overseas hires)</p>
        <p>• Relocation allowance (Overseas hires)</p>
        <p>• Housing Allowance</p>
        <p>• Paid National and School holidays&nbsp;</p>
        <p>• Summer payments</p>
        <p>• International health insurance</p>
        <p>• Visa, Work permit, and residence card provided</p>
        <p>• Dependent Visa, residence card support</p>
        <p>• Discount for children‘s tuition fee (bilingual education)</p>
        <p><strong>Qualifications:</strong></p>
        <p>- Education Degree in a relevant field</p>
        <p>- Professional Teaching qualification/license/certification</p>
        <p>Preference will be given to those graduating with honors or holding a Master’s degree</p>
        <p><strong>You must meet the following requirements for a Vietnamese work permit:</strong></p>
        <p>- 3 years of professional teaching experience in a related subject, with official verification by a competent
          government authority</p>
        <p>- A degree where the title includes the subject studied</p>
        <p>- B. Ed, Bachelors with Teaching Qualification, PGCE or PGDE, UK Qualified Teacher Status, UK &nbsp;Teacher
          Status, Government approved teaching certification from a non-UK country or similar teaching qualification</p>
        <p>- &nbsp;DBS/Police Background Certificate (or equivalent) – additional background screening is required under
          Council of International Schools (CIS) Safer Recruiting child protection and safeguarding standards</p>
        <p>** Valid passport from Australia, Canada, Ireland, New Zealand, United Kingdom, or the United States.&nbsp;
          Passport holders from other countries are welcome to apply but may require additional qualifications and
          approval from the government before the issuing of a visa and/or work permit.</p>
        <p><strong>Knowledge, Skills, Abilities, and Other Requirements:</strong></p>
        <p>· Fluent level English speaker (minimum C1 fluency - evidence required for non-natives)</p>
        <p>· Strong presentation, communication, problem-solving, and critical thinking skills.</p>
        <p>· Competency in class management, time management, interpersonal relations, and teamwork.</p>
        <p>· Adaptable, patient, flexible, devoted, and positive outlook.</p>
        <p>· Experience of Cambridge International Curriculum in the Business and Economics subjects is essential.</p>
        <p>&nbsp;</p></div>
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
                <input class="choose-file" type="file" name="file"><br>
                CV của bạn *
                <div class="more">
                  Click để chọn &amp; tải lên CV của bạn
                </div>
              </div>
            </div>
          </div>
          <div class="submit">Nộp đơn ứng tuyển</div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped>
.ctas .btn-apply {
  padding: 10px 40px;
  border-radius: 3px;
  background-color: #be1d2c;
  color: #fff;
  text-align: center;
  font-weight: bold;

}

.list-article p {
  margin-bottom: 15px;
}

.choose-file {
  position: absolute;
  width: 100%;
  background: transparent;
  width: 100%;
  height: 100%;
  z-index: 1001;
  opacity: 0;
  top: 0;
  left: 0;
}

.text {
  text-align: center;
  font-size: 13px;
}

.more {
  font-size: 20px;
  font-weight: 300;
  color: #999;
  padding-top: 4px;
}

.title-form {
  font-weight: 300;
  font-size: 36px;
  padding-bottom: 30px;
}

.form-register .form-group label {
  color: #666;
  font-weight: bold;
  padding-bottom: 8px;
}

.submit {
  background-color: #be1d2c;
  padding: 15px 0;
  border-radius: 4px;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  margin-top: 30px;
}

.submit:hover {
  background: rgba(190, 29, 44, .9);
}

.ctas {
  margin-top: 35px;
}

.ctas a {
  text-decoration: none;
}

.ctas a:hover {
  border-bottom: 3px solid #fff;;
}

.upload {
  border: 2px dashed #ccc;
  border-radius: 4px;
  margin-top: 10px;
  text-align: center;
  padding: 15px;
}

.full-mask {
  position: relative;
}

.des-job-interview h2 {
  font-size: 24px;
  color: #be1d2c;
}
.des-job-interview{
  padding-bottom: 60px;
  line-height: 1.3;
}
</style>