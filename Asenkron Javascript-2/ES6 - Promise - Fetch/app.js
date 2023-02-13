// function getData(data) { // Promise Objesi Döndüren Fonksiyon
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {

//             // resolve("Olumlu Sonuç");
//             reject("Olumsuz sonuç");
//         }, 4000);
//     })

// }


// console.log(getData("Merhaba")); // Biz

// getData("Merhaba").then(function(response){
//     console.log(response);
// }); // RESOLVE - OLUMLU SONUÇ

// getData("Merhaba").catch(function(response){
//     console.log(response);
// }); // REJECT - OLUMSUZ SONUÇ


// function getData(data) { // Promise Objesi Döndüren Fonksiyon
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {

//             if (typeof data === "string") {
//                 // Olumlu
//                 resolve(data);
//             }
//             else {
//                 // Olumsuz
//                 reject(new Error("Lütfen string bir değer girin.."));
//             }
//         }, 4000);
//     })

// }

// getData("Merhaba").then(function(response){
//     console.log("Gelen değer " + response);
// }).catch(function(err){
//     console.log(err);
// })

// getData(24).then(function(response){
//     console.log("Gelen değer " + response);
// }).catch(function(err){
//     console.error(err);
// })


// getData(24)
//     .then(response => console.log("Gelen değer " + resonse))
//     .catch(err => console.error(err)); 


function addTwo(number){
    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            if (typeof number === "number"){
                resolve(number+2);
            }
            else{
                reject(new Error("Lütfen bir sayı girin"));
            }
        },3000);
    });

}
addTwo("Merhaba")
.then(response => {
    console.log(response);
    return response + 2;
}).then(response2 => console.log(response2))
.catch(err => console.error(err));
// 1 tane catch - birden çok then - Promise Chain