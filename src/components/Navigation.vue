<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="btn btn-light" aria-current="page">Conversations</router-link>
        <router-link to="/membres" class="btn btn-light" aria-current="page">Membres</router-link> 
        <router-link to="/creationcompte" class="btn btn-light" aria-current="page">Création de compte</router-link>
        <router-link to="/connexion" class="btn btn-light" aria-current="page">Se connecter</router-link>
        <router-link to="/deconnexion" class="btn btn-danger" aria-current="page">Se deconnecter</router-link>
      </div>
    </nav>
    <h1 id="appTitle">Projet COOP</h1>
  </div>
  
</template>
<style lang="scss" scoped>
  h1{
    text-align: center;
  }
  #nav{
    text-align: center;
  }
</style>