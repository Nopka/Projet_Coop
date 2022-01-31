<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="btn btn-light" aria-current="page">Conversations</router-link>
        <router-link to="/membres" class="btn btn-light" aria-current="page">Membres</router-link> 
        <router-link to="/creationcompte" class="btn btn-light" aria-current="page">Création de compte</router-link>
        <router-link to="/connexion" class="btn btn-light" aria-current="page">Se connecter</router-link>
      </div>
    </nav>
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
