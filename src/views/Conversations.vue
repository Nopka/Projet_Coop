<template>
     <div>
          <Navigation/>
          <h1>Liste des Conversations</h1>
          <p>
               Connecté en tant que <b>{{$store.state.member.fullname}}</b>
          </p>
          <router-link to="creationconversation">
               <button class="btn btn-primary">Créer une conversations </button>
          </router-link>
          <div class="listeConv" v-for="conversation in $store.state.conversations" :key="conversation.id">
               <router-link :to="{name:'UneConversation',params:{id: conversation.id}}" class="nav-link">
                    <div class="card" style="width: 100%;">
                         <div class="card-body">
                              <h5 class="card-title">{{conversation.topic}}</h5>
                              <p class="card-text">{{conversation.label}}</p>
                         </div>
                    </div>
               </router-link>
          </div>
     </div>
</template>
<script>
     import Navigation from "../components/Navigation.vue"
     export default {
          name: "Conversations",
          components:{
               Navigation
          },
          mounted(){
               this.$api.get("channels")
                    .then((response) => {
                         this.$store.commit('setConversations',response.data);
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