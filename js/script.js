// JS GOES HERE

var menu = document.getElementsByClassName("menu-button");
var i;
for (i = 0; i < menu.length; i++) {

    menu[i].onclick = function() {
        this.classList.toggle('expanded');
    }

}

// JS GOES HERE

var navlinks = document.querySelectorAll(".site-navigation a");
var mymenubutton = document.querySelector(".menu-button");
var j;
for (j = 0; j < navlinks.length; j++) {

    navlinks[j].onclick = function() {



        mymenubutton.classList.remove('expanded');
    }

}


// OVERLAY

var myservicesbutton = document.querySelector("#servicesbutton");
var myservicessection = document.querySelector("#services");
console.log(myservicesbutton);
console.log(myservicessection);
myservicesbutton.addEventListener('click', function() {
    myservicessection.classList.toggle("overlay-on");
    this.classList.toggle("hidden");
});

var myservicesclosebutton = document.querySelector("#services-close-overlay");
console.log(myservicesclosebutton);
myservicesclosebutton.addEventListener('click', function() {
    myservicessection.classList.remove("overlay-on");
    myservicesbutton.classList.remove("hidden");
});

var mycontactbutton = document.querySelector("#contactbutton");
var mycontactsection = document.querySelector("#contact");
console.log(mycontactbutton);
console.log(mycontactsection);
mycontactbutton.addEventListener('click', function() {
    mycontactsection.classList.toggle("overlay-on");
    this.classList.toggle("hidden");
});

var mycontactclosebutton = document.querySelector("#contact-close-overlay");
console.log("huh " + mycontactclosebutton);
mycontactclosebutton.addEventListener('click', function() {
    mycontactsection.classList.remove("overlay-on");
    mycontactbutton.classList.remove("hidden");
});