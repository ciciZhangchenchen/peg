<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "./assets/font/iconfont.css";
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,button,textarea,p,blockquote,th,td { margin:0; padding:0; }
  body { background:#f5f5f5; overflow: hidden; color:#555; font-size:14px; font-family: Verdana, Arial, Helvetica, sans-serif; width: 100%;height:100%; }
  td,th,caption { font-size:14px; }
  h1, h2, h3, h4, h5, h6 { font-weight:normal; font-size:100%; }
  address, caption, cite, code, dfn, em, strong, th, var { font-style:normal; font-weight:normal;}
  a { color:#555; text-decoration:none; }
  a:hover { text-decoration:underline; }
  img { border:none; }
  ol,ul,li { list-style:none; }
  input, textarea, select, button { font:14px Verdana,Helvetica,Arial,sans-serif; }
  table { border-collapse:collapse; }
  html {overflow-y: scroll;height:100%;}
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height:100%;
  }
</style>
