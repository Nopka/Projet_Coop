<template>
  <div id="app">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link to="/" class="nav-link active" aria-current="page">Conversations</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/membres" class="nav-link" aria-current="page">Membres</router-link> 
      </li>
      <li class="nav-item">
        <router-link to="/creationcompte" class="nav-link" aria-current="page">Création de compte</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/connexion" class="nav-link" aria-current="page">Se connecter</router-link>
      </li>
    </ul>
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
