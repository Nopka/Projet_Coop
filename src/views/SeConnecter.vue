<template>
     <div>
          <div>
               <h1>Page de connexion</h1>
          </div>
          <div class="form">
               <form @submit.prevent="validation()">
                    <div class="mb-3">
                         <label class="form-label">Email : </label>
                         <input type="email" required v-model="email" class="form-control" />
                    </div>
                    <div class="mb-3">
                         <label class="form-label">Mot de passe : </label>
                         <input type="password" required v-model="password" class="form-control" />
                    </div>
                    <button class="btn btn-primary">Valider</button>
               </form>
          </div>
          <router-link to="/creationcompte" class="btn btn-warning" aria-current="page">Pas de compte ?</router-link>
     </div>
</template>
<script>
export default {
     data(){
          return{
               email : "",
               password : ""
          }
     },
     methods : {
          validation() {
               let donnees = {
                    email: this.email,
                    password: this.password
               };
               this.$api
                    .post("members/signin",donnees)
                    .then((response) => {
                         alert("Vous êtes connecter");
                         this.$store.commit('setToken',response.data.token);
                         this.$store.commit('setMember',response.data.member);
                         this.$router.push("/");
                    })
                    .catch((error) => {
                         alert(error.response.data.message);
                    });
               
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