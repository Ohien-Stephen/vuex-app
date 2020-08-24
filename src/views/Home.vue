<template>
  <div class="home">
    <div class="left">
      <h1>{{message}}</h1>
      <form @submit.prevent="addLink" class="div-input">
        <input v-model="newlink" type="text" placeholder="add link here...." />
      </form>

      <ul class="items">
        <li v-for="(link, index) in links" v-bind:key="index">
          {{link}}
          <button>Remove</button>
        </li>
      </ul>
    </div>

    <div class="right">
      <HelloWorld />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState, mapMutations} from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',

  components:{
    HelloWorld
  },

  data(){
    return {
      newlink:""
    }
  },

  computed:{
    ...mapState(['message','links'])
  },

  methods:{
    ...mapMutations([
      'ADD_LINK'
      ]),
    addLink(){
      this.ADD_LINK(this.newlink)
      this.newlink = ''
    }
  }
}
</script>

<style scoped>
.home{
  display: flex;
}
div.left{
  height: 100%;
  flex: 1;
  padding: 30px; 
}
div.right{
  background: rgb(248, 238, 239);
  flex: 1;
  padding: 30px;
  height: 82vh;
}
.div-input{
  margin-bottom: 3em;
}

input{
  width: 95%;
  padding: 1em;
  font-size: 1em;
  outline: none;
  border: none;

  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
}
.items li{
  background-color: white;
  padding: .6em;
  margin-top: .5em;
  font-size: 1.2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.items button{
  background: lightpink;
  border: none;
  outline: none;
  font-size: .8em;
  cursor: pointer;
  padding: 10px 15px;
  color: crimson;
}
</style>
