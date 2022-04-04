<div>
    <button type="button" class="btn btn-primary" on:click={funzione}>Primary</button>
</div>

<!--<nav class="navbar navbar-light bg-light">
  <div class="position-absolute top-0 start-0">
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a class="dropdown-item" href="https://getbootstrap.com/docs/5.1/components/navbar/">Action</a></li>
      <li><a class="dropdown-item" href="https://getbootstrap.com/docs/5.1/components/navbar/">Another action</a></li>
      <li><hr class="dropdown-divider"></li>
      <li><a class="dropdown-item" href="https://getbootstrap.com/docs/5.1/components/navbar/">Something else here</a></li>
    </ul>
  </li>
</div>
  <div class="position-absolute top-0 end-0"> posizioni
    <div class="container-fluid">
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Cerca un torneo" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Cerca</button>
      </form>
    </div>
    </div>
  </nav>-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://getbootstrap.com/docs/5.1/components/navbar/">Profilo</a>
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="https://getbootstrap.com/docs/5.1/components/navbar/">Home</a>
      </li>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Cerca un torneo" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Cerca</button>
        </form>
    </div>
  </nav>

  
<script>
import { goto } from "$app/navigation";

    function funzione(){
        goto("https://getbootstrap.com/docs/5.1/components/buttons/")
    }
</script>


<style lang="scss" global>
	@import 'bootstrap/scss/bootstrap';
    //.navbar navbar-light bg-light{
    //height: 700px;
    //width: 950px;
    //}
</style>