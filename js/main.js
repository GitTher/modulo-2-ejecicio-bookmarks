"use strict"

/* Dia 1*/
/* 1- Prueba mostrar formulario nuevo bookmark */

let addBookmark = document.querySelector (".data-actions__add");

addBookmark.classList.remove('hidden');

/* 2- Prueba mostrar menu */

let showMenu = document.querySelector (".menudropdown");

showMenu.classList.remove("collapsed");

/* 3- Añadir informacion de los enlaces desde JS
    3.1 Traer el elemento html
    3.2 Variable que contenga toda la información del li por cada uno de los enlaces
    3.3 Añadir esa info con el innerHTML por cada uno de los enlaces
*/
