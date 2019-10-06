"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

const key = new Date().toISOString().slice(0,10);
const hydrapp__number = document.querySelector ('.hydrapp__number')

const numOfGlasses = localStorage.getItem(key);
if (numOfGlasses === null) {
  localStorage.setItem(key, 0);
}
else {
hydrapp__number.innerHTML =numOfGlasses;
}


const hydrapp__button1= document.querySelector('.hydrapp__button1--js')
hydrapp__button1.addEventListener ('click', (e)=> {
  const number = parseInt(localStorage.getItem (key));
  console.log ("click__hydrapp__button1");
  localStorage.setItem(key , number+1);
  hydrapp__number.innerHTML =number+1;


})

const hydrapp__button2 = document.querySelector ('.hydrapp__button2')
hydrapp__button2.addEventListener ('click', (e) => {
  const number =parseInt(localStorage.getItem (key));
  if (number >0) {
    localStorage.setItem(key, number-1);
    hydrapp__number.innerHTML=number-1;
  }
})

for (let i =0; i<7; i++) {
  var d = new Date();
  d.setDate(d.getDate()-i -1);
  const dayKey = d.toISOString().slice(0,10);
  console.log(d.toISOString());
  const historylist = document.querySelector('.history__list--js');
const li =document.createElement("li");
li.innerHTML = localStorage.getItem(dayKey)  + "  szklanek  " + d.toISOString().slice(0,10);
historylist.appendChild(li);
}








