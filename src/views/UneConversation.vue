<template>
     <div>
          {{idConv}}
          <h1><u>Topic :</u> {{topicConv}}</h1>
          <h2><u>Label :</u> {{labelConv}}</h2>
          <form @submit.prevent="posterMessage()">
               <div class="input-group mb-3">
                    <input type="text" required v-model="MessageToSend"  placeholder="Message à poster" class="form-control" aria-describedby="button-addon2"/>
                    <button class="btn btn-success" id="button-addon2">Envoyer</button>
               </div>
          </form>
          <br/>
          <div v-for="message in messagesConv" :key="message.id">
               <div class="card">
                    <div class="card-header">
                         {{nomMembre(message.member_id)}} à écrit :
                    </div>
                    <div class="card-body">
                         {{message.message}}
                    </div>
               </div>
          </div>
     </div>
</template>

<script>
export default {
     name:"UneConversation",
     data(){
          return{
               idConv : '',
               messagesConv : [],
               labelConv : '',
               topicConv : '',
               MessageToSend : ''
          }
     },
     mounted(){
          this.$store.state.conversations.forEach(conversation => {
               if (conversation.id == this.$route.params.id) {
                    this.idConv = conversation.id;
                    this.topicConv = conversation.topic;
                    this.labelConv = conversation.label;
                    this.$api.get("channels/"+conversation.id+"/posts")
                         .then((response) => {
                              this.messagesConv = response.data;
                         })
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
                         console.log(response.data.message)
                    });
          },
          nomMembre(idMembre){
               this.$store.state.membres.forEach(membre => {
                    if (membre.id == idMembre) {
                         return membre.fullname;
                    }
               });
          }
     }
}
</script>

<style>

</style>