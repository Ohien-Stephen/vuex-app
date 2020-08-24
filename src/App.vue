<template>
  <main id="app">
    <header id="nav">
      <nav>
        <a class="logo">Vuex-app</a>
        <ul>
          <li>
            <a href=""><router-link to="/">Home</router-link></a>
          </li>
          <li><a href=""><router-link to="/about">About</router-link></a>
          </li>
        </ul>
      </nav>
    </header>
    
    <section>
      <router-view/>
    </section>
  </main>
</template>

<style>
body{
  background: rgb(253, 237, 239);
}
html, #app, .home{
    height: 100%;
}
#app {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
header{
  color: white;
  background-color: crimson;
}
ul{
  list-style: none;
}
h1{
  margin-bottom:1em ;
}
a{
  text-decoration: none;
  color: inherit;
}
header .logo{
  font-size: 1.5em;
  font-weight: bold;
}
header nav{
  width: 80%;
  margin: 0 auto;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .7em;
}
header ul{
  display: flex;
}
header ul a{
  padding: .7em;
}
header ul a:hover{
  background-color: rgb(187, 0, 37);
}

</style>
