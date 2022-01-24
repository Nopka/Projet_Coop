<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Conversations</router-link> |
      <router-link to="/membres">Membres</router-link> |
      <router-link to="/creationcompte">Création de compte</router-link> |
      <router-link to="/connexion">Se connecter</router-link>
    </div>
    <h1 id="appTitle">Projet COOP</h1>
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
<style lang="scss" scoped>
  h1{
    text-align: center;
  }
  #nav{
    text-align: center;
  }
</style>
