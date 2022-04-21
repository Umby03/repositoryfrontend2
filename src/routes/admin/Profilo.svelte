<script lang="ts">
import { user } from "../../stores/store";

//let user=JSON.parse(localStorage.getItem("Profilo"))


//const result = api()
//$user = result

</script>
<br/><br/><br/><br/>
<div class="container">
    {$user.name}
    <center>
        <div class="card" style="width: 18rem">
            <img src={$user.image} class="card-img-top" alt="...">
            <div class="card-body">
              <h1 class="card-title">    {$user.name}              </h1>
              <h2 class="card-text"><h2>Some quick example text to build on the card title and make up the bulk of the card's content.</h2>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </center>
</div>

<style lang="scss">
/*div{
    width: 100%;
}*/
</style>