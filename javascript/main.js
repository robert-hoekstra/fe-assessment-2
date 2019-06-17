// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// Code from:  https://www.w3schools.com/howto/howto_js_scroll_indicator.asp





// Writing the function like this results in JavaScript crashing when there is no node to be found. 
// document.querySelector('#toggle').addEventListener('click' classToggle);

// Rewrote toggle function so it wont stop the JS file.
var lever = document.querySelector('#toggle')
if (lever) {
    lever.addEventListener('click', classToggle);
} else {
    console.log('Lever does not exist')
}

//Switching between stylesheets for accessibility.
document.querySelector('#styleMain').onclick = function () { changeCSS("../css/mainStyle.css") };
document.querySelector('#styleAccessibility').onclick = function () { changeCSS("../css/accessibilityStyle.css"); };

function changeCSS(cssFile) {
    document.getElementById("cssID").setAttribute("href", cssFile);
    this.event.returnValue = false; 
}


function classToggle() {
    this.classList.toggle('hidden');
    this.classList.toggle('summary');
}


  
