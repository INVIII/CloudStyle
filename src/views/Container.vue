<template>
      <div class="cards mt-5">
        <div class = "nam">Uploaded files</div>
      <div class="card">
        <div class="logo1">

          <ProgressCircle/>

        </div>
        <div class="sub-head">vmware.exe
          
        </div>
        <div class="des1">Uploaded
          
        </div>
        <div class="button">
          <button
            class="btn-upload btn flex-fill"
            onclick="location.href = '/upload'">
            Copy Link
          </button>
        </div>
      </div>
      </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProgressCircle from '@/components/ProgressCircle.vue'
import { truncate } from '@/utilities/link'

export default defineComponent({
  name: 'Container',
  components: { 
    ProgressCircle 
  },
  // props: {
  //   fileName: { type: String, required: true },
  // },
  // setup(props) {
  //   const truncatedFileName = truncate(props.fileName, 35)

  //   return { truncatedFileName }
  // },
})
</script>

<style>
.cards {
  max-width: 1100px;
  margin: auto;
}
.nam {
  margin-bottom: 1.5rem;
  margin-left: 15px;
  font-size: 1.8rem;
  font-weight: 800;
  color: rgb(255 255 255);
  font-family: "Montserrat", sans-serif;
  line-height: 1.5;
  letter-spacing: -.64px;
}

.card {
  background-color: #262a33;
  padding: 25px 25px;
  border-radius: 20px;
  height: 460.66px;
  width: 326px;
  margin: 12px;
}

.logo1 {
  background-color: #FFDD7240;
}

.logo1 {
  display: flex;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 12px;
  margin-left: 62px;
  border-radius: 50%;
  width: 150px;
  height: 150px;
}

.sub-head {
  margin-left: 25px;
  word-break: break-all;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 38px 6px 6px;
}

.des1 {
  margin-left: 6px;
  font-size: 20px;
  font-family: "Source Sans Pro", sans-serif;
  color: rgb(164 233 139);
}

img {
  margin: auto;
  width: 54px;
  height: 54px;
}

.btn-upload {
  font-weight: 600;
  width: 100%;
  padding-top: 19px;
  padding-bottom: 19px;
  padding-left: -8px;
  padding-right: -8px;
  background: #246bf7;
  border-radius: 12px;
  color: white;
  font-size: 20px;
  transition: 250ms;
}

.button {
  margin-top: 35px;
  padding: 0 6px;
}

.btn-upload:hover{
  background: rgba(36, 107, 247, 0.75);
  color: white;
}
</style>
