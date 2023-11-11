<script>
import { onMount } from 'svelte';

let data = null;

async function fetchData() {
try {
    const response = await fetch('https://apisimpsons.fly.dev/api/personajes?limit=20');
    data = await response.json();
} catch (error) {
    console.error(error);
}
}

onMount(async () => {
await fetchData();
});
</script>

{#if data}
  {#each data.docs as character}
    <div class="card">
        <div class="card-content">
            <div class="image">
                <img src="{ character.Imagen }" alt="muestra">
            </div>
            <div class="body">
                <h2>{ character.Nombre }</h2>
                <p class="history">{ character.Historia }</p>
                <p><strong>Sexo:</strong> { character.Genero }</p>
                <p><strong>Ocupacion:</strong> { character.Ocupacion } </p>
            </div>
        </div>
    </div>
  {/each}
{:else}
  <p>Loading data...</p>
{/if}

<style>

li {
  list-style-type: none;
}
.card{
  margin-top: 2%;
  margin-bottom: 2%;  
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  width:1200px;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 8px 4px #d3d3d3d1;
  border-radius:15px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: white;
}
.card-content {
    display: flex;
    align-items: center; 
    width: 80%;
}

.image {
    flex: 0 0 auto; 
    margin-left: 10%;
    width: 20%;
}

.body {
    flex: 1; 
    margin-left: 15%;
    font-family: Arial, Helvetica, sans-serif;
}
.body .history{
    font-size: 15px;
}
img {
  margin-top: 10%;
  margin-bottom: 10%;  
  width: auto;
  height: 200px;
}
</style>