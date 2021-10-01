<template>
  <div id="app">
    <nav
      class="
        nav
        fixed-top
        d-flex
        justify-content-around
        align-items-center
        py-3
      "
    >
      <div class="back1 flex-shrink-0" onclick="location.href = '/'">Home</div>
      <div class="midSpacer flex-shrink-1"></div>
      <div class="back2 flex-shrink-0" onclick="location.href = '/uploads'">
        My Uploads
      </div>
    </nav>

    <div class="hero1 d-flex flex-column mb-5">
      <div class="title text-center mb-3 mx-2">Upload your files</div>
      <div class="des2 text-center">The files should be maximum of 300mb.</div>

      <Box/>
    </div>
  </div>
</template>

<script>
import { Box } from "../../components/Box";
export default defineComponent({
  name: "Upload",
  components: { 
    Box 
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,800;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap");

body {
  background-color: #181a20;
  color: white;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.title {
  /* font-family: sans-serif; */
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 150%;
  letter-spacing: -0.01em;
  color: #ffffff;
  margin-top: -30px;
}

.nav {
  font-size: 1.125rem;
  font-family: Montserrat, sans-serif;
  letter-spacing: -0.64px;
  font-weight: 600;
  background-color: #1e2027;
  height: 67px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
img.preview {
  width: 200px;
}

.back1:hover,
.back2:hover {
  color: #babac4a1;
  transition: 250ms;
}

.back1 {
  color: rgb(203, 210, 216);
  cursor: pointer;
  margin-right: 500px;
}
.back2 {
  color: rgb(203, 210, 216);
  cursor: pointer;
  margin-left: 500px;
}
.hero1 {
  max-width: 600px;
  margin: 18vh auto;
  margin-top: 190px;
}

.uploadCont {
  width: 100%;
  background-color: #262a33;
  border-radius: 20px;
  padding: 24px;
}

.upload-area {
  height: 28vh;
  border-radius: 20px;
  border: 2px dashed #5e6271;
  transition: 250ms;
}

.upload-area:hover {
  border: 2px dashed #246bf7;
  background-color: rgb(36, 107, 247, 0.2);
}

.btn-files {
  color: #a8a9c2;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #a8a9c2;
  border-radius: 14px;
  font-size: 20px;
  font-weight: 600;
  padding: 10px 38px;
  transition: 250ms;
}

.des2 {
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  color: #a8a9c2;
  margin-bottom: 30px;
  letter-spacing: -0.44px;
}
.btn-files:hover {
  color: #5e6271;
  border: 1px solid #5e6271;
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
  margin-top: -20px;
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
</style>
