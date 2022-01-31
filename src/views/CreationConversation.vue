<template>
  <div>
     <h1>Création d'une conversation</h1>
     <div class="form">
          <form @submit.prevent="validation()">
               <div class="mb-3">
                    <label class="form-label">Titre : </label>
                    <input type="text" required v-model="topic" class="form-control"/>
               </div>
               <div class="mb-3">
                    <label class="form-label">Description : </label>
                    <input type="text" required v-model="label" class="form-control"/>
               </div>
               <button class="btn btn-primary">Créer la conversation</button>
          </form>
     </div>
  </div>
</template>

<script>
export default {
     name:"CreationConversation",
     data(){
          return{
               topic:"",
               label:""
          }
     },
     methods: {
          validation(){
               let donnees = {
                    topic: this.topic,
                    label: this.label
               };
               this.$api
                    .post("https://allweb.fun/coop/api/channels",donnees)
                    .then((response) => {
                         this.$router.push("/");
                    })
                    .catch((error) => {
                         alert(error.response.data.message);
                    })
          }
     }
}
</script>

<style scoped>
     .form{
          width: 40%;
          margin-left: auto;
          margin-right: auto;
     }
</style>