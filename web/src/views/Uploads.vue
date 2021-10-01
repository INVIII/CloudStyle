<template>


<div id = "app">
    <nav class="nav fixed-top d-flex justify-content-around align-items-center py-3">

          <div class="back1 flex-shrink-0" onclick="location.href = '/'">
          Home
          </div>
          <div class="midSpacer flex-shrink-1"></div>
          <div class="back2 flex-shrink-0" onclick="location.href = '/upload'">
          Upload Files
          </div>

  </nav>

    <div class="hero1 d-flex flex-column align-items-center justify-content-center">
      <div class="title text-center">You don't have any files uploaded yet</div>
      <div class="button">
        <div class="share" onclick="location.href = '/upload'">
          Share now
        </div>
      </div>
    </div>

    <div class="twill">
        <img src="../assets/img/ghanta.png" />
      </div>
</div>
</template>

<script>
export default {
  name: 'Upload',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,800;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@0,400;0,500;0,600;0,800;1,700&display=swap');

body {
  background-color: #181a20;
  color: white;
  font-family: "Montserrat", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.nav{
    font-size: 1.125rem;
    font-family: Montserrat,sans-serif;
    letter-spacing: -.64px;
    font-weight: 600;
    background-color: #1e2027;
    height: 67px;
    box-shadow:
    0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
.title {
  font-style: normal;
  font-weight: 800;
  font-size: 4rem;
  line-height: 150%;
  letter-spacing: -.64px;
  color: white;
  font-family: "Montserrat", sans-serif;
  }
.back1:hover, .back2:hover{
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
.hero1{
  max-width: 700px;
  margin: auto;
  margin-top: 190px;
}

.share {
  display: flex;
  height: 58px;
  width: 168.8px;
  justify-content: center;
  border-radius: 10px;
  padding-top: 18px;
  padding-bottom: 18px;
  padding-right: 10px;
  padding-left: 10px;
  background-color: #246bf7;
  margin-top: 40px;
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  font-family: "Source Sans Pro", sans-serif;
  cursor: pointer;
  transition: 250ms;
  font-weight: 600;
}

.share:hover{
  background-color: rgba(36, 107, 247, 0.75);
}

.button {
  padding: 0 6px;
}

@media only screen and (max-width: 767px) {
  .share {
    width: 100%;
  }
}

/*card*/

  .twill{
    margin-top: 185px;
  }

  img{
    width: 100%;
  }
</style>
