<template>
  <div class="hello">
      <h1>A different Component</h1>
      <p>There are currently {{linksCount}} Links</p>
      <button>Remove all links</button>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'HelloWorld',
  computed:{
    ...mapState([
      'links'
      ]),
    ...mapGetters([
      'linksCount'
      ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello button{
  width: 100%;
  background: none;
  border: 1px solid gray;
  outline: none;
  font-size: .8em;
  margin-top: 2em;
  cursor: pointer;
  padding: 10px 15px;
  font-size: 1em;
  box-shadow: 1px 2px 3px rgba(0 , 0, 0, 0.25);
}
</style>
