
<div class="row align-items-center justify-content-center" >
    <div class="col-md-3" id="sidebar"> 
    </div>
    <div class="col-md-6">
      <center>
        <h1 style="margin-top:20px">I tuoi tornei</h1>
      <br />  <br /> 
       <table class="table table-dark table-striped">
        <thead>
            <tr>
              <th scope="col">N</th>
              <th scope="col">Tournament Name</th>
              <th scope="col">Organizator</th>
              <th scope="col">Team Number</th>
              <th scope="col">Status</th>
              <th scope="col">Sport</th>
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
                <td>{item.altro}</td>
                <td>{item.altro}</td>
              </tr>
              {:else}
              Nessun elemento
        {/each}
          </tbody>
       </table>
       <br />
       <h1 style="margin-top:20px">I tuoi club</h1>
      <br />  <br /> 
       <table class="table table-dark table-striped">
        <thead>
            <tr>
              <th scope="col">N</th>
              <th scope="col">Club Name</th>
              <th scope="col">Club Creator</th>
              <th scope="col">Users</th>
              <th scope="col">Sport</th>
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
                <td>{item.altro}</td>
              </tr>
              {:else}
              Nessun elemento
        {/each}
          </tbody>
       </table>
    </div>
    <div class="col-md-3" id="sidebar"> 
    </div>
    </div>
<script>
    import {mockData} from "../../mock"
    console.log(mockData)
    let cont=0
</script>

<style>
    #sidebar{
        padding:0
    }
    
    :global(body){
        background-image: url("https://images3.alphacoders.com/147/147407.jpg");
        background-repeat: no-repeat;
    }
</style>