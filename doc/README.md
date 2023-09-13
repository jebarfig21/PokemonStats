# PokemonStats
## Descripcion
Proyecto de desarrollo de software fullstack el cual consiste en una API que consume otra API y muestra resultados, así mismo es interactiva, responsiva  y usa herramietnas como lo son promesas.
##Dependencias
- Jquery
- Boostrap
- ChartJs
- nodeJs
	- express
	- axios

## Uso

### Levantar Server
El primer paso es levantar el servidor con el comando node src/app.js , el archivo app.js es el archivo principal del backend, si no corremos el server la pagina es solo un front sin funcionalidad.
[![https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/0Server.png](https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/0Server.png "https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/0Server.png")](https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/0Server.png "https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/0Server.png")
### Visualización de página
La pagina se encuentra en public/index.html, se puede abrir en cualquier navegador, una vez que el server este funcionado vamos a poder jugar con la aplicación
[![https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/1Inicio.png](https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/1Inicio.png "https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/1Inicio.png")](https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/1Inicio.png "https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/1Inicio.png")

### Selección de pokemon
En la aplicación podemos seleccionar pokemons mediante un menu desplegable, podemos buscar en la lista mediante una barra de filtrado o bien deslizandonos por la lista
[![https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/3Seleccion.png](https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/3Seleccion.png "https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/3Seleccion.png")](https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/3Seleccion.png "https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/3Seleccion.png")

[![https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/4Busqueda.png](https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/4Busqueda.png "https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/4Busqueda.png")](https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/4Busqueda.png "https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/4Busqueda.png")
###Data
[![https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/5Vista.png](https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/5Vista.png "https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/5Vista.png")](https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/5Vista.png "https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/5Vista.png")

Al seleccionar el pokemon podemos ver su data de la siguiente manera, nombre, un chart de poligono donde vemos las estadisticas de sus 3 movimientos de ataque principales, podteriormente listamos esos movimientos, y por ultimo mostramos el tipo de pokemon.
### Lucha y Ganador

Por último con el boton A Luchar podemos simular un combate que por el momento se decide por azar, no usamos ningun tipo de heurisitca ni algoritmo de pelea, solo un random basado en el timestamp,
[![https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/6Lucha.png](https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/6Lucha.png "https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/6Lucha.png")](https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/6Lucha.png "https://github.com/jebarfig21/PokemonStats/blob/main/doc/img/6Lucha.png")
