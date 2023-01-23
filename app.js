/* const button = document.getElementById("btn1")

 button.addEventListener("click", function(clicked) {

}) 

button.addEventListener("click" , clicked => {
console.log(clicked);
})

const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "It was a dark and stormy night...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
});

*/

// Sekmeden Ayrılınca Title Değiştirmek İçin Kod Satırları 

var title = document.title;
var alttitle = "Ben herkese yalan söylerim sana yalan söylemem";
window.onblur = function () { document.title = alttitle; };
window.onfocus = function () { document.title = title; }; 




   
// Counter İsimli butona tıkladıkça selam yazan ve kaç kez yazıldığını gösteren kod satırları

 let counter=0;
 function handleClick(e){
     counter++;  
     let DOMAsStr='';
     for(let i=0;i<counter;i++){
      DOMAsStr+=`<div>Selam</div>`
     }
     document.getElementById("counter").innerHTML=`${counter}`;
     document.getElementById("selamContainer").innerHTML=DOMAsStr;
 }

 // Buton'a Tıklandığında Arkaplan Rengi Değiştirmek İçin Kod Satırları
 
var btn1 = document.getElementById("btn1")
 btn1.addEventListener("click" , function() {

    var renk1 = Math.floor(Math.random()*255);
    var renk2 = Math.floor(Math.random()*255);
    var renk3 = Math.floor(Math.random()*255);

    var bgcolor = `rgb(${renk1} , ${renk2} , ${renk3}) `

    document.body.style.background = bgcolor;

})

function btnclicked(e){
  var kutu1 = document.getElementById("kutu");
  kutu1.style.textAlign = "left";
  kutu1.style.fontSize = "40px";
}