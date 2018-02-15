const $form = $('#search-form');
const $searchField = $('#search-keyword');
const $pokemonContainer = $('#pokemon-container');
let pokemon;

// Le agregamos el evento submit a nuestro formulario
$form.submit(function (e) {
  e.preventDefault();
  $pokemonContainer.html('');
  pokemon = $searchField.val();
  getPkms();
});

// Funcion para crear peticiones
function getPkms() {
  // Creamos nuestro objeto de configuracion
  $.ajax({ // MIGRAMOS el objeto de configuración de XMLHttpRequest a jQuery con Ajax
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  }).done(addPkms)
  .fail(handleError);
}

// Funcion para error
function handleError() {
  console.log('Se ha presentado un error en la página');
}

function addPkms(pkms) {
  console.log(pkms);
  const pokeName = pkms.name;
  const pokeTypes = pkms.types;
  pokeTypes.forEach(function(type) {
    const nameType = type.name;
  });
  const pokeHeight = pkms.height;
  const pokeWeight = pkms.weight;
  // const pokeAbilities
  console.log(pokeName);
  console.log(pokeTypes);
  console.log(pokeHeight);
  console.log(pokeWeight);
  console.log(pkms.abilities[0].ability.name);

  let $imagen = $('<img>').attr('src', `https://pokeapi.co/media/img/${pkms.id}.png`).addClass('imgPoke');
  // pkms.forEach(function(pokemonName) {
  //   const title = pokemonName.headline.main;
  //   const snippet = pokemonName.snippet;
    
  //   // Creamos un li con la clase articleClass y con el texto rescatado (snippet).
  //   let $li = $('<li />').addClass('containerPoke').text(snippet);

  //   // Anexamos el li al ul
  $pokemonContainer.append($imagen);
  // }); 
}

// $(() => {

//   const $allPoke = 
//   $pokemonContainer.append()
// })