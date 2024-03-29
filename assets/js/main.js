const tablinks = document.getElementsByClassName('tab-links')
const tabcontents = document.getElementsByClassName('tab-contents')

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove('active-link')
    }
    for(let tacontent of tabcontents){
        tacontent.classList.remove('active-tab')
    }
    event.target.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')

}



const sidemenu = document.getElementById('sidemenu')
const menuIcon = document.querySelector('.fa-bars')

function openmenu(){
    sidemenu.style.right = "0"
}

function closemenu(){
    sidemenu.style.right = "-200px"
}

function clickOutsideMenu(event){
    if(!sidemenu.contains(event.target) && !menuIcon.contains(event.target)){
        closemenu()
    }
}

document.addEventListener('click', clickOutsideMenu);

const scriptURL = 'https://script.google.com/macros/s/AKfycbyjiWZPh65lNQdlvJutKu7xKUhCGw5IVqdxwV4oNGs0sw-F1No7L9qfocz8k2c7F0CZ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})