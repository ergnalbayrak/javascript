// Yeni Element Oluşturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>               

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "http://www.google.com.tr";
newLink.target = "_blank";

// Text Content

// cardbody.textContent = " asdasdas"

// Text Node

// const text = document.createTextNode("Merhaba");
// cardbody.appendChild(text);
// console.log(cardbody);


newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));

cardbody.appendChild(NewLink);

console.log(newLink);