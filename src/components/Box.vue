<template>
  <div class="uploadCont mt-5">
    <div
      class="
        upload-area
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
    >
      <div class="des2 mb-3 mx-2 text-center">
        Drag & Drop files here to upload
      </div>
      <form method="POST" action="/">
        <label for="fileIn"
          ><div class="btn btn-files mx-2">
            Browse files
          </div></label
        >
        <input
          class="visually-hidden file-in"
          type="file"
          id="fileIn"
          v-on="selectFile"
          accept=""
        />
        <div>
          <p>
            Progress: {{ uploadValue.toFixed() + "%" }}
            <progress id="progress" :value="uploadValue" max="100"></progress>
          </p>
          <p>
            {{file}}
          </p>
        </div>
        <div v-if="fileData != null">
          <img class="preview" :src="file" />
        </div>
      </form>
    </div>
  </div>
</template>



<script>
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

export default {
  name: "Box",
  data() {
    return {
      fileData: null,
      file: null,
      uploadValue: 0,
    };
  },
  methods: {
    selectFile(event) {
      this.uploadValue = 0;
      this.file = null;
      this.fileData = event.target.files[0];
      this.onUpload();
    },

    onUpload() {
      this.file = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.fileData.name}`)
        .put(this.fileData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.file = url;
          });
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
