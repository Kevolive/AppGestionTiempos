// console.log(document.getElementById('fecha'))
// console.log(document.getElementsByClassName('clase'))
// console.log(document.getElementsByTagName('input'))

// console.log(document.querySelector('input')) /*para etiquetas*/
// console.log(document.querySelectorAll('input')) /*para todas las etiquetas*/
// console.log(document.querySelector('#fecha'))/*para id*/
// console.log(document.querySelector('.clase'))/*para clases*/
// console.log(document.querySelectorAll('.clase')) /*para todas las clases*/

// console.log(document.querySelector('from button'))/*para seleccionar el botón de form, cuando haya otros botones fuera*/
// console.log(document.querySelector('from button'))/*para seleccionar el botón de form, cuando haya otros botones fuera y estén en otros formularios*/

// usar variables para hacer las manipulaciones, siempre.
import { registrarTiempos } from "../CONTROLLER/ControllerTiempos.js";
document.getElementById('btnRegistrar').addEventListener('click', registrarTiempos)