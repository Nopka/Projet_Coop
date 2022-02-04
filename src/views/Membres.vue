<template>
  <div>
     <Navigation/>
     <h1>Liste des Membres</h1>
     <div class="listeMembres" v-for="membre in $store.state.membres" :key="membre.id">
          <div class="card" style="width: 100%;">
               <router-link :to="{name:'UnMembre',params:{id: membre.id}}" class="nav-link">
                    <div class="card-body">
                    <h5 class="card-title">{{membre.fullname}}</h5>
                    <p class="card-text">{{membre.id}}</p>
               </div>
               </router-link>
          </div>
     </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue"
export default {
     name:"Membres",
     components:{
          Navigation
     },
     mounted(){
          this.$api.get("members")
               .then((response) => {
                    this.$store.commit('setMembres',response.data);
               })
     }
}
</script>

<style scoped>

</style>