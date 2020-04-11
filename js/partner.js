var contactUsBtn = document.getElementById("contactUsLink");

var contactScape = document.querySelector('.contactUsSpace');

var contactCancelBtn = document.getElementById("btncancel");

contactUsBtn.addEventListener('click',function() {
    contactScape.classList.add('contactUsSpace-active');
});

contactCancelBtn.addEventListener('click',function() {
    contactScape.classList.remove('contactUsSpace-active');
});
