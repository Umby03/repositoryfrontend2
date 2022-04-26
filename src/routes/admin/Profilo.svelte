<script lang="ts">
import { user } from "../../stores/store";

//let user=JSON.parse(localStorage.getItem("Profilo"))


//const result = api()
//$user = result

</script>
<br/><br/><br/><br/>
<div class="container-fluid">
    <center>
        <div class="card" style="width: 20rem">
            <img src={$user.image} class="card-img-top" alt="...">
            <div class="card">
              <h1 class="card-title">    {$user.name}              </h1>
              <h2 class="card-text"><h2>Stats:</h2>
              <h3>Tornei organizzati: {$user.tornei} </h3>
              <h3>Tornei effettuai: {$user.giocati} </h3>

              <a href="#" class="btn btn-primary">Organizza un torneo</a> <br>
              <a href="#" class="btn btn-primary">Crea un club</a>
            </div>
          </div>
        </center>
</div>

<style>
   :global(body){
        background-image: url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1035676256.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
    }
    
    .card{
      background-color:cadetblue;
      padding:0px;
    }

</style>