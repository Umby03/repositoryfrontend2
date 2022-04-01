<div>
    <button type="button" class="btn btn-primary" on:click={funzione}>Primary</button>
</div>

<nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
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

    $container-fluid: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1320px
);
</style>