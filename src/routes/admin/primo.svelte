<div class="row align-items-center justify-content-center ">
    <div class="col-md-3" id="sidebar"> 
            <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width:100% height:100%">
                <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg>
                  <span class="fs-4">Home</span>
                </a>
                <hr>
                <ul class="nav nav-pills flex-column mb-auto">
                  <li class="nav-item">
                    <a href="#" class="nav-link active" aria-current="page">
                      <svg class="bi me-2" width="16" height="16"><use xlink:href="#home"/></svg>
                      Crea un torneo
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link text-white">
                      <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"/></svg>
                      Visualizza club
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link text-white">
                      <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"/></svg>
                      Orders
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link text-white">
                      <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"/></svg>
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link text-white">
                      <svg class="bi me-2" width="16" height="16"><use xlink:href="#people-circle"/></svg>
                      Customers
                    </a>
                  </li>
                </ul>
                <hr>
                <div class="dropdown">
                  <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                  </ul>
                </div>
              </div>
    </div>
    <div class="col-md-9">
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

<style>
    #sidebar{
        padding:0
    }
</style>