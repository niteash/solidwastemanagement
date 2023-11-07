import './style.css'
// @ts-ignore
import Typed from 'typed.js'; 
import * as bootstrap from 'bootstrap';


let typed = new Typed('.element', {
  strings: [' It is normally discarded as useless or unwanted...', ' It is responsible for land pollution in urban and industrial areas...'],
  typeSpeed: 20,
  backSpeed: 30,
  backDelay:3000,
  loop:true
});

let element = new Typed('.element-2', {
  strings: [' Statistics...', ' Effects...'],
  typeSpeed: 40,
  backSpeed: 50,
  backDelay:4000,
  loop:true
});