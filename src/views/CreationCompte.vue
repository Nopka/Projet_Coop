<template>
     <div>
          <div>
               <h1>Créer votre compte</h1>
          </div>
          <div class="form">
               <form @submit.prevent="validation()">
                    <div class="mb-3">
                         <label class="form-label">Nom / pseudo : </label>
                         <input type="text" required v-model="fullname" class="form-control" />
                    </div>
                    <div class="mb-3">
                         <label class="form-label">Email : </label>
                         <input type="email" required v-model="email" class="form-control"/>
                    </div>
                    <div class="mb-3">
                         <label class="form-label">Mot de passe : </label>
                         <input type="password" required v-model="password" class="form-control" />
                    </div>
                    <button class="btn btn-primary">Valider</button>
               </form>
          </div>
          
     </div>
</template>

<script>
export default {
     data(){
          return{
               fullname : "",
               email : "",
               password : ""
          }
     },
     methods : {
          validation() {
               this.$api.post("members",{
                    fullname: this.fullname,
                    email: this.email,
                    password: this.password,
               }).then(response => {
                    alert("Compte créer !");
                    this.$router.push('/connexion');
               }).catch(error =>{
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