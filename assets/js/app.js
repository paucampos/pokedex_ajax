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
    console.log(nameType);
  });
  const pokeHeight = (pkms.height)/10;
  const pokeWeight = (pkms.weight)/10;
  // const pokeAbilities
  console.log(pokeName);
  console.log(pokeTypes);
  console.log(pokeHeight + ' m');
  console.log(pokeWeight + ' kg');

  console.log(pkms.abilities[0].ability.name);

  let $pokeImg = $('<img>').attr('src', `https://pokeapi.co/media/img/${pkms.id}.png`).addClass('imgPoke');

  //   // Anexamos el li al ul
  $pokeContainer.append($pokeImg);
  // }); 
};

$(() => {
  //Mostrar todos los pokemones
  for(let i=1; i <= 151; i++){
     $allPokeContainer.append(`<div class="col-lg-2 col-md-2 col-xs-2 poke text-center">
      <img id="${i}" src="http://pokeapi.co/media/img/${i}.png">
      <p>
      </div>`);
  }
  $.ajax({ // MIGRAMOS el objeto de configuración de XMLHttpRequest a jQuery con Ajax
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  }).done(addPkms)
  .fail(handleError);

  ${pkms.id}.click()
})