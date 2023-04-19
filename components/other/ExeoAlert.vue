<template>
  <div class="alert" v-if="this.$route.params.message">
    <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
    {{ this.$route.params.message }}
  </div>
</template>

<script>
export default {
  name: "ExeoAlert"
}
</script>

<style scoped>
  .alert {
    padding: 20px;
    background-color: #04AA6D;
    color: white;
    margin-bottom: 2em;
    text-align: center;
  }

  .closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
  }

  .closebtn:hover {
    color: black;
  }
</style>
