<template>
     <div>
          <h1>Liste des Conversations</h1>
          <p>
               Connecté en tant que <b>{{$store.state.member.fullname}}</b>
          </p>
          <router-link to="creationconversation">
               <button class="btn btn-primary">Créer une conversations </button>
          </router-link>
          <div class="listeConv" v-for="conversation in conversations">
               <div class="card" style="width: 100%;">
                    <div class="card-body">
                         <h5 class="card-title">{{conversation.topic}}</h5>
                         <p class="card-text">{{conversation.label}}</p>
                         <button class="btn btn-secondary">Entrez</button>
                    </div>
               </div>
          </div>
     </div>
</template>
<script>
     export default {
          name: "Conversations",
          data(){
               return {
                    conversations:[],
               }
          },
          mounted(){
               this.$api.get("channels")
                    .then((response) => {
                         this.conversations = response.data;
                    })
          }
     }
</script>
<style scoped>
     .listeConv{
          width: 90%;
          margin-right: auto;
          margin-left: auto;
     }
</style>