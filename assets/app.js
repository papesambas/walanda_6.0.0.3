import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import boostrap from 'bootstrap';
import canvasconfetti from 'canvas-confetti';
//import jquery from 'jquery';
// import Jquery
import $ from 'jquery';
window.$ = window.jQuery = $;
import './styles/app.css';

document.body.addEventListener('click', ()=>{
    canvasconfetti()
})

console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');
