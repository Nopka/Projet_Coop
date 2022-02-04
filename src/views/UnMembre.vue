<template>
  <div>
     <Navigation/>
     <h1>Informations sur le membre : <b>{{nomMembre}}</b> </h1>
     <ul>
          <li>
               Id du membre : {{idMembre}}
          </li>
          <li>
               E-mail du membre : {{emailMembre}}
          </li>
          <li>
               Date de création du compte : {{dateMembre}}
          </li>
     </ul>

  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue"
export default {
     name:"UnMembre",
     components:{
          Navigation
     },
     data(){
          return{
               idMembre : '',
               emailMembre : '',
               nomMembre : '',
               dateMembre : '',
          }
     },
     mounted(){
          this.$store.state.membres.forEach(membre => {
               if (membre.id == this.$route.params.id) {
                    this.idMembre = membre.id;
                    this.emailMembre = membre.email;
                    this.nomMembre = membre.fullname;
                    this.dateMembre = membre.created_at;
               }
          });
     }
}
</script>

<style>

</style>