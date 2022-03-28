let urlData = ["images/butterfly.jpg", "images/capture.jpg", "images/coconutTree.jpg", "images/landscape.jpg"];
let list = document.getElementById("mainGallery");
let subGallaryList = document.getElementsByClassName("sub-gallery");
let imageZoom = document.getElementById("expandedImg");
let imageList = document.getElementsByClassName("images");


urlData.forEach((item) => {
    let subGalleryElement = document.createElement("div");
    let imageElement = document.createElement("img");
    subGalleryElement.className = "sub-gallery";
    imageElement.src = item;
    imageElement.className = "images";
    list.append(subGalleryElement);
    subGalleryElement.appendChild(imageElement);
}); 

let imageQueryList = document.querySelectorAll('.images');
console.log(imageQueryList);

function DisplayZoomImage(imgElem) {
    imageZoom.src  =  imgElem.src;
    imageZoom.width  =  imgElem.width+150;
    imageZoom.height   =  imgElem.height+150;
}

imageQueryList.forEach(item =>{
    item.addEventListener('click',event =>{
        if( event.target.className==="images"||event.target.className==="sub-gallery"){
            DisplayZoomImage(item);
        }  
    })
})

let subGalleryQueryList = document.querySelectorAll('.sub-gallery');
console.log(subGalleryQueryList)

function highlight(subGalleryElem) {
   // for(var i=0;i<subGalleryQueryList.length;i++){
       let i=0;
       while(i<subGalleryQueryList.length){
        if(subGalleryQueryList[i].classList.value==='sub-gallery'){
           // console.log("hi1");
        subGalleryElem.classList.replace('sub-gallery','highlight');
            console.log(subGalleryQueryList[3])
        }
  
        if(subGalleryQueryList[i].classList.value==='highlight'){
        console.log("hi2");
        subGalleryQueryList[i].classList.replace('highlight','sub-gallery');
        }
        i++;
    }
}

subGalleryQueryList.forEach(item =>{
    item.addEventListener('click',event =>{
        if( event.target.className==="images"||event.target.className==="sub-gallery"){
            highlight(item);
            console.log("hi",item);
        }  
            
    })
})

var DisplayImageOnLoading = function(event){
    let imageItem = document.querySelector('.images');
    var subGalleryItem = document.querySelector('.sub-gallery')
    DisplayZoomImage(imageItem);
    highlight(subGalleryItem)
};  
window.addEventListener('load',DisplayImageOnLoading);