console.log('uzomian');

////////////////////////////////// FUNCTIONS ///////////////////////////////
// Handlers
function checkMatch(e) {
    if (e.target.value === pwd.value) {
        hiddenSpan.classList.add('hidden');
        e.target.classList.remove('red-border');
        pwd.classList.remove('red-border');
    } 
    else {
        hiddenSpan.classList.remove('hidden');
        e.target.classList.add('red-border');
        pwd.classList.add('red-border');
    }
}

function setTitleHt () {
    title.style.height = getComputedStyle(logoBox).top + logoBox.clientHeight;
}

///////////////////////////////////////////////////////////////////////////


// Variables
const pwd = document.querySelector('#pwd');
const cpwd = document.querySelector('#cpwd');
const hiddenSpan = document.querySelector('.hidden');
const logoBox = document.querySelector('.logo-box');
const title = document.querySelector('.title');

// Event Listeners
cpwd.addEventListener('input', checkMatch);

setTitleHt();