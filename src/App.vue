<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@font-face {
    font-family: 'pf';
    src:url('./assets/font/PingFang Medium.ttf');
  }
#app{
  height:100%;
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-family: 'pf';
  box-sizing: border-box;
  font-size: .16rem;
}
html,body{
  width: 100%;
  height: 100%;
}
</style>
