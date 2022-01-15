<template>
      <div class="cards mt-5">

      <div class="card">
        <div class="">

          <ProgressCircle
            size="144"
            :progress="this.uploadValue"
            :progressColor="`green`"
            :foregroundColor="`yellow`"
            data-testid="upload-card-progress"
          />

          <p>
            Progress: {{ uploadValue.toFixed() + "%" }}
<!--            <progress id="progress" :value="uploadValue" max="100"></progress>-->
          </p>

        </div>
        <div class="sub-head">{{ this.fileName }}

        </div>
        <div v-if="this.uploadValue < 100" class="des1">{{ Math.round(this.fileSize / 1048576) }} MB
        </div>
        <div v-else class="des1"> Uploaded
        </div>
        <div v-if="this.uploadValue >= 100" class="button">
          <button
            class="btn-upload btn flex-fill"
            @click="copy">
            Copy Link
          </button>
        </div>
        <div v-else class="button">
          <button
            class="btn btn-cancel btn-danger flex-fill"
            @click="cancelBtn">
            <span v-if="isCancelled">Cancelled</span>
            <span v-else>Cancel</span>
          </button>
        </div>
      </div>
      </div>


</template>

<script>
import { defineComponent } from 'vue'
import ProgressCircle from '@/components/ProgressCircle.vue'
import firebase from "firebase/compat";
import {truncate} from "@/utilities/link";
const {copyToClipboard} = require("@/utilities/link");

export default defineComponent({
  name: 'Container',
  components: {
    ProgressCircle
  },
  data () {
    return {
      file: null,
      uploadValue: 0,
      fileName: truncate(this.fileData.name, 30),
      fileSize: 0,
      storageRef: null,
      isCancelled: false
    }
  },
  props: {
    fileData: {
      required: true
    }
  },

  mounted() {
    this.onUpload()
  },

  methods: {
    cancelBtn() {
      if (this.storageRef) {
        this.storageRef.cancel()
        this.uploadValue = 0
        this.isCancelled = true
      }
    },
    copy(){
      copyToClipboard(this.file)
    },
    onUpload() {
      this.file = null;
      this.storageRef = firebase
        .storage()
        .ref(`${this.fileData.name}`)
        .put(this.fileData);
      this.storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.fileSize = snapshot.totalBytes
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          this.storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.file = url;
          });
        }
      );
    },
  }
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
  height: 461px;
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
  padding: 19px -8px;
  background: #246bf7;
  border-radius: 12px;
  color: white;
  font-size: 20px;
  transition: 250ms;
}

.btn-cancel {
  font-weight: 600;
  width: 100%;
  padding: 19px -8px;
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
