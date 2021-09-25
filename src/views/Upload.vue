<template>
<nav class="nav d-flex justify-content-center align-items-center py-3 px-4">

        <div class="cont d-flex">

            <div class="back flex-shrink-0">
                <a href="home.html">
                <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M1.5999 16L38.3999 16" stroke="#A8A9C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4.80078 21.001L0.79998 16L4.80078 10.999" stroke="#A8A9C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="32" height="39.2" fill="white" transform="translate(39.2) rotate(90)"/>
                </clipPath>
                </defs>
                </svg>
            </a>
            </div>        
    
            <div class="midSpacer flex-shrink-1"></div>
            
            <div class="pageName flex-shrink-0" onclick="location.href = 'uploads.html'">
                My Uploads
            </div>

        </div>

    </nav>
    
    <div class="hero1 d-flex flex-column mb-5">
        <div class="title text-center mb-3 mx-2">Upload your files</div>
        <div class="des2 text-center">The files should be maximum of 100mb.</div>

        <div class="uploadCont mt-5">
            <div class="upload-area d-flex flex-column justify-content-center align-items-center">
                <div class="des2 mb-3 mx-2 text-center">Drag & Drop files here to upload</div>
                <form method="POST" action="/">
                    <label for="fileIn"><div class="btn btn-files mx-2">Browse files</div></label>
                    <input class="visually-hidden file-in" type="file" id="fileIn" onchange="form.submit()">
                </form>
            </div>
        </div>
    </div>
    
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import 'bootstrap/dist/js/bootstrap.min.js';
export default {
  name: "Upload"
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,800;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap');

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

.nav{  
    color:  #A8A9C2;  
    font-size: 1.125rem;
    font-family: Montserrat,sans-serif;
    letter-spacing: -.64px;
    font-weight: 600;
    background-color: #262A33;
    height: 67px;
  }
  
  .pageName:hover, .back{
    color: white;
    transition: 250ms;
  }

  .pageName{
    cursor: pointer;
  }
  
  .hero1{
    max-width: 600px;
    margin: 18vh auto;
    margin-top: 190px;
  }
  
  .midSpacer{
    width: 45vw;
    min-width: 35vw;
  }
  
  .uploadCont{
    width: 100%;  
    background-color: #262A33;
    border-radius: 20px;
    padding: 24px;
  }
  
  .upload-area{
    height: 28vh;
    border-radius: 20px;
    border: 2px dashed #5E6271;
    transition: 250ms;
  }
  
  .upload-area:hover{
    border: 2px dashed #246bf7;
    background-color: rgb(36, 107, 247, 0.2);
  }
  
  .btn-files{
    color: #A8A9C2;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #A8A9C2;
    border-radius: 14px;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 38px;
    transition: 250ms;
  }
  
  .des2{
    font-family: sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;  
    color: #a8a9c2;
    margin-bottom: 30px;
    letter-spacing: -.64px;
  }
  .btn-files:hover{
    color: #5E6271;
    border: 1px solid #5E6271;
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
    font-family: "Source Sans Pro" ,sans-serif;  
    font-size: 18px;
    line-height: 25px;
    color: #a8a9c2; 
    letter-spacing: 0.5px;
    margin-top: 14px;  
    }
</style>
