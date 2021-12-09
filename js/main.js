"use strict"

// /* Dia 1*/
// /* 1- Prueba mostrar formulario nuevo bookmark */

// let addBookmark = document.querySelector (".data-actions__add");

// addBookmark.classList.remove('hidden');

// /* 2- Prueba mostrar menu */

// let showMenu = document.querySelector (".menudropdown");

// showMenu.classList.remove("collapsed");

// /* 3- Añadir informacion de los enlaces desde JS
//     3.1 Traer el elemento html
//     3.2 Variable que contenga toda la información del li por cada uno de los enlaces
//     3.3 Añadir esa info con el innerHTML por cada uno de los enlaces
// */


/* Día 2 */


// let firstBookmarkUrl = "https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion";
// let firstBookmarkSeen = "checked ";
// let firstBookmarkDesc = "JS en los materiales de Adalab";
// let firstBookmarkTag1 = "javascript";
// let firstBookmarkTag2 = "HTML";

// let firstBookmark = document.querySelector (".js-bookmark-1");

// firstBookmark.innerHTML = `<p class="js-url-1 item__url">
// <a href="${firstBookmarkUrl}"
//   target="_blank" rel="noopener noreferrer">
//   ${firstBookmarkUrl.replace('https://', ' ')}
// </a>
// </p>
// <p class="js-seen-1 item__seen">
// <input type="checkbox" ${firstBookmarkSeen} name="item_imp_2" id="item_imp_2">
// </p>
// <p class="js-desc-1 item__desc">${firstBookmarkDesc}</p>
// <ul class="item__tags">
// <li class="js-tag-1-1 item__tag">${firstBookmarkTag1}</li>
// <li class="js-tag-1-2 item__tag">${firstBookmarkTag2}</li>
// </ul> `;

// let secondBookmarkUrl = "https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/";
// let secondBookmarkSeen = "checked ";
// let secondBookmarkDesc = "Ideas de proyectos JS";
// let secondBookmarkTag1 = "javascript";
// let secondBookmarkTag2 = "portfolio";

// let secondBookmark = document.querySelector (".js-bookmark-2");

// secondBookmark.innerHTML = `<p class="js-url-1 item__url">
// <a href="${secondBookmarkUrl}"
//   target="_blank" rel="noopener noreferrer">
//   ${secondBookmarkUrl.replace('https://', ' ')}
// </a>
// </p>
// <p class="js-seen-1 item__seen">
// <input type="checkbox" ${secondBookmarkSeen} name="item_imp_2" id="item_imp_2">
// </p>
// <p class="js-desc-1 item__desc">${secondBookmarkDesc}</p>
// <ul class="item__tags">
// <li class="js-tag-1-1 item__tag">${secondBookmarkTag1}</li>
// <li class="js-tag-1-2 item__tag">${secondBookmarkTag2}</li>
// </ul> `;

// //Día 3

// const data = document.querySelector (".js-data")
// if(data.classList.contains("tableview")){data.classList.add("listview");
// data.classList.remove("tableview");
// }

// // 1. Mostrar el menú hamburguesa y dejarlo siempre visible.
// let showMenu = document.querySelector (".menudropdown");
// showMenu.classList.remove("collapsed");

// // 2. Seleccionamos el input con el document.querySelector
// const input_search_desc = document.querySelector(".js_in_search_desc");

// // 3. Simulamos que escribe la usuaria en el `input` de búsqueda.
// input_search_desc.value = "materiales";

// // 4. Recoger el valor del `input` en una variable.
// const descrSearchText = input_search_desc.value;

// const bmk_1_desc = document.querySelector(".bmk_1_desc");

// if(bmk_1_desc.includes(descrSearchText)){
//   bmk_1_desc.classList.remove("hidden");
// } 
// else{bmk_1_desc.classList.add("hidden");
// }

//Dia 5 - Eventos

const burgerMenu = document.querySelector('.js_burgerMenu');
const dropdownMenu = document.querySelector ('.js_menuDropdown');

function handleClickLinkDropdown (event){
  event.preventDefault();
  dropdownMenu.classList.toggle('collapsed');
}

burgerMenu.addEventListener('click', handleClickLinkDropdown);