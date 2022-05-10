<script lang="ts">
import { onMount } from "svelte";


//let user=JSON.parse(localStorage.getItem("Profilo"))


//const result = api()
//$user = result

let user: any = {}

onMount(() => {
console.log(localStorage.getItem("Profilo"))
  user = JSON.parse(localStorage.getItem("Profilo"))
})

function funzione(){
  window.location.href = '/admin/creazioneTorneo/'
}

function funzione1(){
  window.location.href = '/admin/creaClub/'
}
</script>
<br/><br/><br/><br/>
<center>
<div class="col-md-3">
<div class="container-fluid">
  <div class="d-flex w-100" style="align-items:center; gap:110px">
    <div class="d-flex" style="align-items:center; justify-content: flex-start;">
          <img src="https://cdn2.vectorstock.com/i/1000x1000/32/01/user-sign-icon-person-symbol-human-avatar-vector-12693201.jpg" class="card-img-top" style="width:50px; height: 50px; border-radius:50%" alt="..."> 
</div>
<div>
  <h1 class="card-title">   

   {user.name}   

            </h1> 
</div>
             
</div>
<br/>
<div style="height:1px; width:100%; background: black;">

</div>

              <h2 class="card-text"><h2>Stats:</h2>
              <!--<h3>Tornei organizzati: {$user.tornei} </h3>
              <h3>Tornei effettuai: {$user.giocati} </h3>-->

              <a href="#" class="btn btn-outline-warning" on:click={()=>{(funzione())}}>Create a tournament</a> <br>
              <a href="#" class="btn btn-outline-warning" on:click={()=>{(funzione1())}}>Create a club</a>
</div>
</div>
</center>

<style>
:global(body){
        background-color:lightgrey;
        background-repeat: no-repeat;
    }
</style>