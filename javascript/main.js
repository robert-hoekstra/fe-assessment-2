// When the user scrolls the page, execute activateProgressbar(); 
// Scroll function is copied. However the progressive enhancement has been written by me (disabling and enabling the feauture.)
window.onscroll = function() {activateProgressbar()};

function activateProgressbar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
// Fire function when page has loaded
document.onload = deployProgressbar();

// remove class and add new one
function deployProgressbar() {
    console.log('page loaded');
    style = document.getElementsByClassName('progress-container-hidden')
    style[0].classList.add('progress-container-shown');
    style[0].classList.remove('progress-container-hidden');

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

// Sets stylesheet reference to other reference and ignores native behaviour.
function changeCSS(cssFile) {
    document.getElementById("cssID").setAttribute("href", cssFile);
    this.event.returnValue = false; 
}

// Toggle between classes to hide and show list items.
function classToggle() {
    this.classList.toggle('hidden');
    this.classList.toggle('summary');
}