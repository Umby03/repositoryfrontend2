<div>

    <button type="button" class="btn btn-primary" on:click={funzione}>Primary</button>
</div>

<script>
import { goto } from "$app/navigation";

    function funzione(){
        goto("https://getbootstrap.com/docs/5.1/components/buttons/")
    }
</script>