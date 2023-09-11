$(document).ready(function() {
  // Realiza una solicitud GET para obtener las opciones del dropdown
  $.get('http://localhost:3000/allPokemon', function(data) {
    // Llena el primer dropdown
    console.log(data)
    llenarDropdown('#dropdownMenuButton1', data);
    // Llena el segundo dropdown
    llenarDropdown('#dropdownMenuButton2', data);

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
       var idActual = botonDropdown[0].id
       idActual=idActual[idActual.length - 1];
       console.log($('#fotoPokemon'+idActual)[0].src=data.imagen)
       //data.nombre
       
       //data.movimientos
       console.log(data.movimientos)
       // Agrega el nuevo elemento a la lista <ul> con id "miLista"
       $("#mov1Pokemon"+idActual).text("Movimiento : "+data.movimientos[0]);
       $("#mov2Pokemon"+idActual).text("Movimiento : "+data.movimientos[1]);
       $("#mov3Pokemon"+idActual).text("Movimiento : "+data.movimientos[2]);
       $("#tipoPokemon"+idActual).text("Tipo : "+data.tipos[0]);
       
       //data.tipos

   }); 
    
    

  });

/*
 * Funciones auxiliares
 * */
  function llenarDropdown(selector, opciones) {
  const dropdown = $(selector).next('.dropdown-menu');

  opciones.forEach(function(opcion) {
    dropdown.append(`<li><a class="dropdown-item" href="#">${opcion}</a></li>`);
  });
}

});
