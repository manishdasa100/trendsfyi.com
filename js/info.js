console.log("Width=" + window.innerWidth);

console.log("Height=" + window.innerHeight);

var imgMaincontent1 = document.getElementById("image2");

//var imageaddresses = ["../images/image15(edit)","../images/image17(edit).png"];

// var currIndex = 0;

// setInterval(function fadeInNewImage() {

//     if (currIndex == 0) {
//         document.getElementById("image2").src = "../images/image15(edit).png";
//         currIndex ++;
//     } else {
//         document.getElementById("image2").src = "../images/image17(edit).png";
//         currIndex --;
//     }
   
// },2000);

var contactUsBtn = document.getElementById("contactUsLink");

var contactScape = document.querySelector('.contactUsSpace');

var contactCancelBtn = document.getElementById("btncancel");

contactUsBtn.addEventListener('click',function() {
    contactScape.classList.add('contactUsSpace-active');
});

contactCancelBtn.addEventListener('click',function() {
    contactScape.classList.remove('contactUsSpace-active');
});



