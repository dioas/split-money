<template>
  <div id="app" class="containers">
    <div class="paper">
      <div id="nav">
        <div class="header">
          <h1>Split Money</h1>
        </div>
      </div>
      <router-view/>
    </div>
  </div>
</template>

<style lang="less" scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  background-color:white;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.containers {
  padding: 20px 50px;
  background-color: #ddd;
  .paper {
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16)
  }
  .header {
    border-bottom: solid 2px #ddd;
  }
}
</style>
