<template>
     <div>
          <Navigation/>
          <u>Id Conversation :</u> {{idConv}}
          <h1><u>Topic :</u> {{topicConv}}</h1>
          <h2><u>Label :</u> {{labelConv}}</h2>
          <form @submit.prevent="posterMessage">
               <div class="input-group mb-3">
                    <input type="text" required v-model="MessageToSend"  placeholder="Message à poster" class="form-control" aria-describedby="button-addon2"/>
                    <button class="btn btn-success" id="button-addon2">Envoyer</button>
               </div>
          </form>
          <br/>
          <div v-for="message in messagesConv" :key="message.id">
               <div class="card">
                    <div class="card-header">
                         <router-link :to="{name:'UnMembre',params:{id: message.member_id}}">
                              {{ nomMembre(message.member_id) }} 
                         </router-link> à écrit :
                         
                    </div>
                    <div class="card-body">
                         {{message.message}}
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
import Navigation from "../components/Navigation.vue"
export default {
     name:"UneConversation",
     components:{
          Navigation
     },
     data(){
          return{
               idConv : '',
               messagesConv : [],
               labelConv : '',
               topicConv : '',
               MessageToSend : '',
               NomMembre : 'Utilisateur Inconnu'
          }
     },
     mounted(){
          this.$store.state.conversations.forEach(conversation => {
               if (conversation.id == this.$route.params.id) {
                    this.idConv = conversation.id;
                    this.topicConv = conversation.topic;
                    this.labelConv = conversation.label;
                    this.getMessages(this.idConv);
               }
          });
     },
     methods:{
          posterMessage(){
               let donnees = {
                    message: this.MessageToSend
               };
               this.$api
                    .post("channels/"+this.idConv+"/posts",donnees)
                    .then((response) => {
                         this.getMessages(this.idConv);
                    });
          },
          nomMembre(idMembreDonne) {
               let nom = 'Utilisateur Inconnu'
               this.$store.state.membres.forEach(membre => {
                    if (membre.id == idMembreDonne) {
                         nom = membre.fullname
                    }
               });
               return nom;
          },
          getMessages(id){
               this.$api.get("channels/"+id+"/posts")
                         .then((response) => {
                              this.messagesConv = response.data;
                         })
          }
     }
}
</script>

<style>

</style>