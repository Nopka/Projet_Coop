<template>
  <div>
     <h1>Liste des Membres</h1>
     <div class="listeMembres" v-for="membre in membres" :key="membre.id">
          <div class="card" style="width: 100%;" >
               <div class="card-body">
                    <h5 class="card-title">{{membre.fullname}}</h5>
                    <p class="card-text">{{membre.id}}</p>
                    <button class="btn btn-info">Informations</button>
               </div>
          </div>
     </div>
  </div>
</template>

<script>
export default {
     name:"Membres",
     data(){
          return{
               membres:[],
          }
     },
     mounted(){
          this.$api.get("members")
               .then((response) => {
                    this.membres = response.data;
               })
     }
}
</script>

<style scoped>

</style>