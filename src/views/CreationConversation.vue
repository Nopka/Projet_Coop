<template>
  <div>
     <h1>Création d'une conversation</h1>
     <form @submit.prevent="validation()">
          <div>
               <label>Titre : </label>
               <input type="text" required v-model="topic"/>
          </div>
          <div>
               <label>Description : </label>
               <input type="text" required v-model="label"/>
          </div>
          <button>Créer la conversation</button>
     </form>
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

<style>

</style>