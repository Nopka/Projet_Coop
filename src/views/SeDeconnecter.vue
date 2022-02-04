<template>
  
</template>

<script>
export default {
     mounted(){
          this.$api
               .delete("members/signout")
               .then(
                    alert("Deconnexion réussi"),
                    this.$router.push("/connexion")
               )
     }
}
</script>

<style>

</style>