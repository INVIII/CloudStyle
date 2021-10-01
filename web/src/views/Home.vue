<template>
<!-- Navbar Section -->
<div id = "app">
    <nav class="navbar fixed-top d-flex justify-content-between align-items-center py-3">

          <div class="flex-shrink-0">
              <a class="back" href="#">Home</a>
          </div>
          <div class="d-flex">
          <div class="flex-shrink-0"><a class="pageName" href="/upload">Upload</a>
          </div>
          <div class="flex-shrink-0"><a class="pageName" href="#services">Services</a>
          </div>
          <div class="flex-shrink-0"><a class="pageName" href="#services">About Us</a>
          </div>
         </div>

  </nav>

    <!--Hero Section-->
    <div class="hero d-flex flex-column align-items-center">
      <div class="title text-center mb-4">Cloud Style</div>
      <div class="des text-center">
        Easy way to upload and share files quickly for free and no login
        required.
      </div>

      <div class="row gy-3 control text-center">
        <div class="button col-md-6">
          <button
            class="btn-upload btn flex-fill"
            onclick="location.href = '/upload'"
          >
            Upload Files
          </button>
        </div>

        <div class="button col-md-6">

          <button
            class="btn-seeUpload btn flex-fill"
            onclick="location.href = '/uploads'"
          >
            My Uploads
          </button>
        </div>
      </div>
    </div>

    <section id="services">  </section>
    <div class="other d-flex flex-column align-items-center mb-5 pt-5">
      <div class="down">
        <div class="down-2 text-center">How it works</div>
        <div class="down-3 text-center flex-fill">
          Cloud Style is just simple, it was built to make everything easy for
          you.
        </div>
      </div>
    </div>

    <!-- cards -->

    <div class="cards d-lg-flex justify-content-center mt-5">
      <div
        class="
          card
          d-flex
          flex-column
          align-items-center
        "
      >
        <div class="logo1 d-flex justify-content-center align-items-center">

          <img src="../assets/img/1.png">

        </div>
        <div class="sub-head">All Files Expire</div>
        <div class="des1 text-center">
          After 30 minutes, all files expire automatically. Then you can no
          longer access them.
        </div>
      </div>

      <div
        class="
          card
          d-flex
          flex-column
          align-items-center
        "
      >
        <div class="logo2 d-flex justify-content-center align-items-center">
          <img src="../assets/img/2.png">
        </div>
        <div class="sub-head">No Login Required</div>
        <div class="des1 text-center">
          No data from you will be saved.
           As long as you stay in the same browser, you can see all your uploaded files.
        </div>
      </div>

      <div
        class="
          card
          d-flex
          flex-column
          align-items-center
        "
      >
        <div class="logo3 d-flex justify-content-center align-items-center">
          <img src="../assets/img/3.png">
        </div>
        <div class="sub-head">For Free Forever</div>
        <div class="des1 text-center">
          You will never need to pay for this service.
          It was created with the intention of simplifying your life.
        </div>
      </div>
    </div>

    <!--Footer-->
    <div class="d-sm-flex justify-content-between foot">

      <div class="text-center mb-2"><a style="color: #a8a9c2;" href="https://github.com/INVIII/CloudStyle">Github</a></div>
      <div class="text-center">&copy; CloudStyle 2021</div>
</div>
    </div>
</template>

<script>

export default {
  name: 'Home',
};
</script>

<!--CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,800;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap");

body {
  background-color: #181a20;
  color: white;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
html {
  scroll-behavior: smooth;
}

/* Nav */

.navbar{
  color:  #A8A9C2;
    font-size: 1.125rem;
    font-family: Montserrat,sans-serif;
    letter-spacing: -.64px;
    font-weight: 600;
    background-color: #1e2027;
    height: 67px;
    padding-left: 100px;
    padding-right: 100px;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }

  .pageName:hover, .back:hover{
   color: #babac4a1;
   transition: 250ms;
  }

  .back {
    color: rgb(203, 210, 216);
    cursor: pointer;
  }

  .pageName{
    color: rgb(203, 210, 216);
    cursor: pointer;
    margin-left: 70px
  }

/* Hero */
.hero {
  max-width: 470px;
  margin: 30vh auto;
}

.title {
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  margin-top: -30px;
}

.des {
  font-family: "Source Sans Pro", sans-serif;
  letter-spacing: 0.5px;
  font-size: 20px;
  line-height: 25px;
  color: #a8a9c2;
  margin-bottom: 55px;
}

.control {
  width: 80%;
}

.btn-upload {
  font-weight: 600;
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: -8px;
  padding-right: -8px;
  background: #246bf7;
  border-radius: 12px;
  color: white;
  font-size: 18px;
  transition: 250ms;
}

.btn-seeUpload {
  font-weight: 600;
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: -8px;
  padding-right: -8px;
  background: #3c4250;
  border-radius: 12px;
  color: white;
  font-size: 18px;
  transition: 250ms;
}

.button {
  margin-top: 6px;
  padding: 0 6px;
}

.btn-upload:hover{
  background: rgba(36, 107, 247, 0.75);
  color: white;
}

.btn-seeUpload:hover{
  background: rgba(60, 66, 80, 0.75);
  color: white;
}

@media only screen and (max-width: 767px) {
  .btn-seeUpload,
  .btn-upload {
    width: 100%;
  }

  .control {
    width: 100%;
  }

  .title {
    font-size: 48px;
  }
}

a {
  text-decoration: none;
  color: white;
}

.other {
  max-width: 1000px;
  margin: 330px auto;
}

.cards {
  max-width: 1100px;
  margin: auto;
}

.card {
  background-color: #262a33;
  padding: 60px 20px;
  border-radius: 20px;
  width: 341.67px;
  margin: 12px;
}

.logo1 {
  background-color: #FFDD7240;
}

.logo2 {
  background-color: rgba(251, 143, 138, 0.251);
}

.logo3 {
  background-color: rgba(193, 96, 250, 0.251);
}

.logo2,
.logo1,
.logo3 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}

.sub-head {
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin: 28px 0 14px;
}

.des1 {
  font-size: 20px;
  font-family: "Source Sans Pro", sans-serif;
  color: #a8a9c2;
}

img {
  margin: auto;
  width: 54px;
  height: 54px;
}

.down {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  justify-content: center;
}
.down-2 {
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 150%;
  letter-spacing: -0.04em;
  color: #ffffff;
  text-align: center;
  font-family: "Montserrat", sans-serif;
}
.down-3 {
  width: 100%;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  line-height: 25px;
  color: #a8a9c2;
  letter-spacing: 0.5px;
  margin-top: 14px;
}

@media only screen and (max-width: 992px) {
  .card {
    width: auto;
  }
}

.foot {
  padding: 20px 40px;
  margin-top: 500px;
  background-color: #262a33;

  font-family: "Source Sans Pro", sans-serif;
  letter-spacing: 0.5px;
  font-size: 20px;
  line-height: 25px;
  color: #a8a9c2;
}

</style>
