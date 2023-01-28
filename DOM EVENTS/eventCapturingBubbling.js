// Event Bubbling

// document.querySelector(".container").addEventListener("click", function(e){
//     console.log("Div Container");

// });
// document.querySelector(".card-row").addEventListener("click", function(e){
//     console.log("Card Row");

// });
// document.querySelectorAll(".card-body")[1].addEventListener("click", function(e){
//     console.log("Card Body");

// });

// Event Capturing veya Delegation

const cardBody = document.querySelectorAll(".card-body")[1];

cardBody.addEventListener("click", run);

function run(e) {
    if (e.target.className === "fa fa-remove") {
        console.log("Silme İşlei");

    }
    if (e.target.id === "filter"){
        console.log("Filtering");
    }
    if (e.target.id === "clear-todos"){
        console.log("Tüm Taskları Silme İşlemi");
    }
    // console.log(e.target);
}