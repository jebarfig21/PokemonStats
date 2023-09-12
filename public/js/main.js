var canvas={} ;
$(document).ready(function() {
  // Realiza una solicitud GET para obtener las opciones del dropdown
  $.get('http://localhost:3000/allPokemon', function(data) {
    llenarDropdown($('#dropdownSelect1'), data);
    llenarDropdown($('#dropdownSelect2'), data);
   
  });

  // Agrega un controlador de eventos para las opciones del dropdown
  $(".dpSelect").on("change", async function() {
    const opcionSeleccionada = $(this).val();
    var idActual = $(this).attr("id");
    var idActual=idActual[idActual.length - 1];
    var dataPokemon = []   
    // Realiza una solicitud GET al servidor después de seleccionar una opción
    $.get('http://localhost:3000/onePokemon/'+opcionSeleccionada,async function(data) {
       // Tu código para manejar la respuesta del servidor aquí
       $('#fotoPokemon'+idActual)[0].src=data.imagen
       $("#mov1Pokemon"+idActual).text("Movimiento : "+data.movimientos[0]);
       $("#mov2Pokemon"+idActual).text("Movimiento : "+data.movimientos[1]);
       $("#mov3Pokemon"+idActual).text("Movimiento : "+data.movimientos[2]);
       $("#tipoPokemon"+idActual).text("Tipo : "+data.tipos[0]);
       $("#namePokemon"+idActual).text(data.nombre);
       dataPokemon = data
       var statsArr=[]
       let diccionario = {};

      for (let i = 0; i < dataPokemon.movimientos.length; i++) {
        let mov_aux = dataPokemon.movimientos[i];
        let datosMovimiento = await obtenerDatosMovimiento(mov_aux);
        diccionario[mov_aux] = datosMovimiento;
      
      }

        // Acceder a los elementos del diccionario
        
        //if(canvas[]={})
     console.log(canvas["chartPokemon"+idActual])
      var canva

      if (canvas["chartPokemon"+idActual] !== undefined) {
        canvas["chartPokemon"+idActual].destroy()
        console.log(canvas["chartPokemon"+idActual])
        console.log("Se detruyo")
      }
      canva = createChart(dataPokemon.movimientos,diccionario,"chartPokemon"+idActual)
      canvas["chartPokemon"+idActual]=canva
      
      console.log(canvas["chartPokemon"+idActual])
       console.log(canvas)
    });
  });

  function obtenerDatosMovimiento(movimiento) {
    return new Promise((resolve, reject) => {
      $.get('http://localhost:3000/move/' + movimiento, function(data) {
        resolve([data.accuracy, data.power, data.pp, data.priority, data.effect_chance]);
    });
  });

}
  $("#botonLucha").click(function () {
    var namePokemon2 = $("#namePokemon2").text()
    var namePokemon1 = $("#namePokemon1").text()
    var timestamp = Date.now();
    var result = timestamp%2==0;
    if(result==0){
      $("#pokemonGanador").text($("#namePokemon1").text());
      $('#fotoPokemon3')[0].src = $('#fotoPokemon1')[0].src;
    }else{
      $("#pokemonGanador").text($("#namePokemon2").text());
      $('#fotoPokemon3')[0].src = $('#fotoPokemon2')[0].src;

    }
    });

  // Ahora puedes aplicar una función o realizar operaciones en todos los elementos seleccionados
  $(".dpSelect").each(function() {
      $(this).prepend('<option></option>').select2({
            maximumSelectionLength: 2,
            width: '100%',
            placeholder: 'Selecciona opciones',
            allowClear: true,
            language: {
                noResults: function() {
                    return 'No se encontraron resultados';
                }
            }
        });
  });

/*
 * Funciones auxiliares
 * */
  function llenarDropdown(selector, opciones) {
    opciones.forEach(function(opcion) {
    var newOption = $("<option>");
    newOption.val(opcion); // Establece el valor del nuevo option
    newOption.text(opcion); // Establece el texto del nuevo option

  // Agrega el nuevo option al select
    selector.append(newOption);
  });
}

function createChart(movimientos,stats,idChart){
  
     var data1 = {
        labels: ["Precisión", "Poder", "Repeticiones", "Prioridad", "Probabilidad de Efecto"],
        datasets: [{
          label: movimientos[0],
          data: stats[movimientos[0]],
          backgroundColor: "rgba(255, 99, 132, 0.4)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1
        },
        {
          label: movimientos[1],
          data: stats[movimientos[1]],
          backgroundColor: "rgba(99, 205, 71, 0.2)",
          borderColor: "rgba(99, 255, 132, 1)",
          borderWidth: 1
        },
        {
          label: movimientos[2],
          data: stats[movimientos[2]],
          backgroundColor: "rgba(71, 99, 205, 0.1)",
          borderColor: "rgba(71, 99, 205, 1)",
          borderWidth: 1
        }

        ]
  };
  // Configura y crea las gráficas de radar
  var options = {
    scale: {
      angleLines: {
        display: true
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 10
      }
    }
  };

  return new Chart(document.getElementById(idChart), {
    type: "radar",
    data: data1,
    options: options
  });
}

});
