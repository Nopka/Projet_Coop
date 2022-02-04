<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default{
  name : 'App',
  mounted(){
    this.$api.get('ping');
    if(!this.$store.state.token){
      this.$router.push('connexion');
    }
  }
}
</script>

