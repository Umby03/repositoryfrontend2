<script>
  import {mockData} from "../../mock"
  console.log(mockData)
  let cont=0 
  let cont2=0 
  let results = [];
  let results2=[];

	$:{
		if (typeof localStorage != 'undefined') {
			fetch('http://192.168.114.55:8080/tournament/search', {
				method: 'post',

				headers: {
					'content-type': 'application/json',
					authorization: localStorage.getItem('token')
				}
			})
				.then((resp) => resp.json())
				.then((json) => {
					results = json;
				});
		}
	}

  $: {
		if (typeof localStorage != 'undefined') {
			fetch('http://192.168.114.55:8080/tournament/search', {
				method: 'post',

				headers: {
					'content-type': 'application/json',
					authorization: localStorage.getItem('token')
				}
			})
				.then((resp) => resp.json())
				.then((json) => {
					results2 = json;
				});
		}
	}




</script>




<div class="row align-items-center justify-content-center" >
    <div class="col-md-3" id="sidebar"> 
    </div>
    <div class="col-md-6">
      <center>
        <h1><b>I tuoi tornei</b></h1>
      <br />  <br /> 
       <table class="table table-dark table-striped">
        <thead>
            <tr>
              <th scope="col">N</th>
              <th scope="col">Tournament Name</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {#each results as item,i}
        

            <tr on:click={() => {
              window.location.href  = '/admin/visualizzaTorneo/' + item.ID_Tournament;
                }}>
                <th scope="row">{cont + i}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
        {/each}
          </tbody>
       </table>
       <br />
       <h1 style="margin-top:30px"><b>I tuoi club</b></h1>
      <br />  <br /> 
       <table class="table table-dark table-striped">
        <thead>
            <tr>
              <th scope="col">N</th>
              <th scope="col">Club Name</th>
              <th scope="col">BIO</th>
              <th scope="col">Sport</th>
            </tr>
          </thead>
          <tbody>
            {#each results2 as item,i}
         

          <tr on:click={() => {
            window.location.href  = '/admin/visualizzaClub/' + item.ID_Club;
              }}>
              <th scope="row">{cont + i}</th>
              <td>{item.name}</td>
              <td>{item.bio}</td>
              <td>{item.name_sport}</td>
            </tr>
             
        {/each}
          </tbody>
       </table>
    </div>
    <div class="col-md-3" id="sidebar"> 
    </div>
    </div>


<style>
    #sidebar{
        padding:0
    }
    
    :global(body){
        background-image: url("https://images3.alphacoders.com/147/147407.jpg");
        background-repeat: no-repeat;
    }

    h1{
      margin-top:30px
    }

</style>