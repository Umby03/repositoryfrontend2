<script>
import { onMount } from "svelte";

  import {mockData} from "../../mock"
  console.log(mockData)
  let cont=0 
  let cont2=0 
  let results = [];
  let results2= [];

  onMount(() => {
		if(!localStorage.getItem('Profilo')){
	  	 window.location.href= "/public/login"
			}
		})

	$:{
		if (typeof localStorage != 'undefined') {
			fetch('http://192.168.236.55:8080/tournament/my', {
				method: 'post',

				headers: {
					'content-type': 'application/json',
					authorization: localStorage.getItem('token')
				}
			})
				.then((resp) => {
          if (resp.ok) {
            return resp.json()
          }

          throw new Error('bad response')
        })
				.then((json) => {
					results = json;
				})
        .catch(console.error);
		}
	}

  $: {
		if (typeof localStorage != 'undefined') {
			fetch('http://192.168.236.55:8080/club/my', {
				method: 'post',

				headers: {
					'content-type': 'application/json',
					authorization: localStorage.getItem('token')
				}
			})
				.then((resp) => resp.json())
				.then((json) => {
          console.log("Change results2, is array:", Array.isArray(json))
					results2 = json;
				});
		}
	}




</script>




<div class="row align-items-center justify-content-center" >
    <div class="col-md-3" id="sidebar"> 
    </div> 
   <center>
    <div class="col-md-6" style="margin-left:10px">
     <center>
        <h1><b>Your tournaments</b></h1></center>
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
       <center>
       <h1 style="margin-top:30px"><b>Your clubs</b></h1></center>
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
  </center>
    <div class="col-md-3" id="sidebar"> 
    </div>
    </div>


<style>
    #sidebar{
        padding:0
    }
    
  

    h1{
      margin-top:30px
    }

</style>