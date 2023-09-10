$(document).ready(function() {
  // Realiza una solicitud GET para obtener las opciones del dropdown
  $.get('http://localhost:3000/allPokemon', function(data) {
    // Llena el primer dropdown
    console.log(data)
    llenarDropdown('#dropdownMenuButton1', data);
    console.log("Dimos clic al dropdwon 1")
    // Llena el segundo dropdown
    llenarDropdown('#dropdownMenuButton2', data);

    console.log("Dimos clic al dropdwon 2")
  });

  // Agrega un controlador de eventos para las opciones del dropdown
  $('.dropdown-menu').on('click', '.dropdown-item', function() {
    const opcionSeleccionada = $(this).text();
    const botonDropdown = $(this).closest('.dropdown').find('.dropdown-toggle');
    botonDropdown.text(opcionSeleccionada);
    // Realiza una solicitud GET al servidor después de seleccionar una opción
    $.get('http://localhost:3000/onePokemon/'+opcionSeleccionada, function(data) {
       // Tu código para manejar la respuesta del servidor aquí
       console.log(data);
   }); 
  });

  function llenarDropdown(selector, opciones) {
  const dropdown = $(selector).next('.dropdown-menu');

  opciones.forEach(function(opcion) {
    dropdown.append(`<li><a class="dropdown-item" href="#">${opcion}</a></li>`);
  });
}
});
