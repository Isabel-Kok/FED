


var hamburgeropen = document.querySelector('nav:first-of-type>img:first-of-type');
var hamburgersluit = document.querySelector('.hamburger img:first-of-type');
var menu = document.querySelector('.hamburger');

function openmenu(){
    menu.classList.add('open')
}
function sluitmenu(){
    menu.classList.remove('open')
}

hamburgeropen.addEventListener('click', openmenu);
hamburgersluit.addEventListener('click', sluitmenu);

