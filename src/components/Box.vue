<template>
  <div class="uploadCont mt-5">
    <div class="upload-area d-flex flex-column justify-content-center align-items-center">
      <div class="des2 mb-3 mx-2 text-center">
        Drag & Drop files here to upload
      </div>
      <form method="POST" action="/">
        <label for="fileIn">
          <div class="btn btn-files mx-2">Browse files</div></label>
        <input class="visually-hidden file-in" type="file" id="fileIn" v-on:change="startUpload" />
        <div>
          <p>
            Progress: {{ uploadValue.toFixed() + "%" }}
            <progress id="progress" :value="uploadValue" max="100"></progress>
          </p>
          <p>
            {{ url }}
          </p>
        </div>
        <div v-if="file != null">
          <img class="preview" :src="url" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { addFiletoStorage, deleteFileFromCloud, removeFile } from "../utils/localStorageHelper";
import firebase from '../utils/firebase'

export default {
  name: "Box",
  data() {
    return {
      file: null,
      url: null,
      uploadValue: 0,
    };
  },
  methods: {
    startUpload(event) {
      console.log("File selected:", event.target.files[0]);
      this.uploadValue = 0;
      this.url = null;
      this.file = event.target.files[0];
      this.onUpload();
    },

    onUpload() {
      console.log("Uploading file:", this.file);
      this.url = null;

      const storage = getStorage();
      const storageRef = ref(storage, 'cloud-style' + Date.now().toString());

      const uploadTask = uploadBytesResumable(storageRef, this.file)

      uploadTask.on('state_changed', (snapshot)=>{
        console.log("Upload progress:", (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      }, (error)=>{
        console.log("Upload error:", error);
      }, ()=>{
        console.log("Upload complete");
        this.uploadValue = 100;
        getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
          console.log("Download URL:", url);
          this.url = url;
          const fileData = {
            name: this.file.name,
            url: url,
            dateUploaded: Date.now(),
            extension: this.file.type,
          };
          addFiletoStorage(fileData, 'files');
          deleteFileFromCloud(storageRef, fileData);
        })
      }
      );
    },
  },
};
</script>

<style scoped>
img.preview {
  width: 200px;
}
</style>
