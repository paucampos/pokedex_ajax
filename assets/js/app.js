const $form = $('#search-form');
const $searchField = $('#search-keyword');
const $allPokeContainer = $('#allPokes');
const $pokeContainer = $('#pokeContainer');
let pokemon;

// Le agregamos el evento keypress a nuestro formulario
$form.on('keypress', function (e) {
  if(e.which === 13) {
    e.preventDefault();
    $pokeContainer.html('');
    pokemon = $searchField.val();
    getPkms();
  }
});

// Funcion para crear peticiones
function getPkms() {
  // Creamos nuestro objeto de configuracion
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  }).done(addPkms)
  .fail(handleError);
}

// Funcion para error
function handleError() {
  console.log('Se ha presentado un error en la API');
}

// Muestra el pokemon buscado
function addPkms(pkms) {
  // console.log(pkms);
  const pokeName = pkms.name;
  const pokeHeight = (pkms.height)/10;
  const pokeWeight = (pkms.weight)/10;

  const pokeTypes = pkms.types;
  pokeTypes.forEach(function(type) {
    const nameType = type.name;
  });
  
  // const pokeAbilities
  const pokeAbility = pkms.abilities[0].ability.name;
  const urlPoke = pkms.species.url;

  // Anexamos el li al ul
  $pokeContainer.append(`
    <div class="col-lg-6 col-md-6 col-xs-6 search-container text-center">
      <img src="https://pokeapi.co/media/img/${pkms.id}.png" imgPoke">
    </div>
    <div class="col-lg-6 col-md-6 col-xs-6 pokeInfo">
      <div class="col-lg-12 col-md-12 col-xs-12"><h2>${pokeName}</h2></div>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-xs-6">
          <p>Altura:<br>${pokeHeight} m</p>
          <p>Peso:<br>${pokeWeight} kg</p>
        </div>
        <div class="col-lg-6 col-md-6 col-xs-6">
          <p>Habilidad:<br>${pokeAbility}</p>
        </div>
      </div>
    </div>`);

  $.ajax({
    url: urlPoke
  }).done(function(species) {
    const descriptionPoke = species.flavor_text_entries[11].flavor_text;
    $('#pokeContainer').append(`
      <div class="row">
        <div class="col-lg-12 col-md-12 col-xs-12 descriptionPoke">
          <p>Descripción: ${descriptionPoke}</p>
        </div>
      </div>`);
  })
  .fail(handleError);
};

$(() => {
  //Mostrar todos los pokemones
  for(let i=1; i <= 151; i++){
     $allPokeContainer.append(`<div class="col-lg-2 col-md-2 col-xs-2 poke text-center">
      <img id="${i}" src="http://pokeapi.co/media/img/${i}.png">
      <p>
      </div>`);
  }
})