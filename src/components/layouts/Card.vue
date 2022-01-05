<template>
  <div class="card d-flex flex-column align-items-center">
    <slot
      class="logo d-flex justify-content-center align-items-center"
      name="image"
    >
      <img src="../assets/img/1.png" />
    </slot>
    <slot class="sub-head" name="heading">Card Heading</slot>
    <slot class="des1 text-center" name="description"></slot>
  </div>
</template>

<style scoped>
.card {
  background-color: #262a33;
  padding: 60px 20px;
  border-radius: 20px;
  width: 341.67px;
  margin: 12px;
}
.logo {
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
</style>

<script>
export default {};
</script>