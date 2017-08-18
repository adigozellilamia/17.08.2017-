var imageButton = document.querySelector(".image");
var foto = document.querySelector(".foto");


imageButton.addEventListener("click", function () {


    switch (foto.getAttribute("src")) {
  
        case "image/img.jpg" : 
        foto.setAttribute("src","image/img1.jpg");
        break;

        case "image/img1.jpg" : 
        foto.setAttribute("src","image/img2.jpg");
        break;

        case "image/img2.jpg" : 
        foto.setAttribute("src","image/img.jpg");
        break;





}
// var season = 'Yay';

// function getMonthOfSeason(season) {
//     switch (season) {
//         case "Yay":
//             return "Iyun,Iyul,Avgust";
//             break;
//         case "Payiz":
//             return "Sentiyabr,Noyabr,Oktiyabr";
//             break;
//         case "Qis":
//             return "Dekabr,Yanvar,Fevral";
//             break;
//         case "Yaz":
//             return "Mart,Aprel,May";
//             break;
//         default:
//             return "Bele bir fesil yoxdu";
//             break;
//     }
// }










