// var ZoomInImage = document.getElementById("expandedImg");
// var imgs = document.getElementsByClassName("images");
// var imgs1 = document.querySelectorAll('.images')
// console.log(imgs1);
// let data = ["images/capture.jpg", "images/coconutTree.jpg", "images/landscape.jpg"];
// let list = document.getElementById("mainGallery");
// let sbg = document.getElementsByClassName("subGallery");

// function myFunction1(img) {
//     // if( event.target.className==="images"||event.target.className==="subGallery"){
//  //   console.log(img);
//     ZoomInImage.src = img.src;
//     ZoomInImage.width = img.width+150;
//     ZoomInImage.height = img.height+150;
     
// }

// var myFunction = function(event) {
//     console.log(event.target);
//     if( event.target.className==="images"||event.target.className==="subGallery"){
//         myFunction1(this);
//     }
// };

// imgs1.forEach(item =>{
//     item.addEventListener('click',event =>{
//         if( event.target.className==="images"||event.target.className==="subGallery"){
//                // console.log(imgs1.item(index))
//                 myFunction1(item);
//         }  
//     })
// })

// var myFunction2 = function(event){
//     var img = document.querySelector('.images')
//     myFunction1(img);
// };  
// window.addEventListener('load',myFunction2);