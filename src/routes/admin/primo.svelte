<br/><br/><br/>
<div class="row align-items-center justify-content-center h-100">
    <div class="col-md-6">
        <div class="container">
            <center>
                <h1>Bentornato! Quale sarà la tua prossima mossa?</h1>f
                <br /><br /><br />
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button type="button" class="btn btn-outline-warning"><h1>Crea un torneo</h1></button>
                </div>
                <br /><br /><br /></center
            >
            <div class="d-grid gap-2 col-6 mx-auto">
                <button type="button" class="btn btn-outline-warning"><h1>Visualizza Club</h1></button>
            </div>
        </div>
    </div>
    <div class="col-md-6">
       <table class="table table-dark table-striped">
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
            <tr>
                <th scope="row">{cont+i+1}</th>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.altro}</td>
              </tr>
        {/each}
          </tbody>
       </table>
    </div>
    </div>

<script>
    import {mockData} from "../../mock"
    console.log(mockData)
    let cont=0
</script>