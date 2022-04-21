<!--BISOGNA FARE IL CONTROLLO PER LA NAV BAR, SE è LOGGATO NAV BAR ADMIN SE NON è LOGGATOO NAV BAR PUBLIC-->
<!--TABELLA TORNEI, CON UN CERCA TORNEO CHE è NELLA NAV BAR -->
<script>
    import {mockData} from "../../mock"
    console.log(mockData)
    let cont=0
</script>

<style>
    #sidebar{
        padding:0
    }
</style>

<center>
<table class="table table-dark table-striped" style="margin-left:20%; margin-right:20%">
    <thead>
        <tr>
          <th scope="col">N</th>
          <th scope="col">Name</th>
          <th scope="col">Organizator</th>
          <th scope="col">Player Number</th>
        </tr>
      </thead>
      <tbody>
        {#each mockData as item,i}
      <!--  <tr  on:click={() => {
      window.location.href = '/admin/torneo/' + item.id
        }}>
      -->

        <tr>
            <th scope="row">{cont+i+1}</th>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.altro}</td>
          </tr>
          {:else}
          Nessun elemento
    {/each}
      </tbody>
   </table>
</center>
<div class="col-md-3" id="sidebar"> 
</div>