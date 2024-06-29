const tablinks = document.getElementsByClassName('tab-links')
const tabcontents = document.getElementsByClassName('tab-contents')

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove('active-link')
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }
    event.target.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')

}



const sidemenu = document.getElementById('sidemenu')

function openmenu(){
    sidemenu.style.right = "0"
}

function closemenu(){
    sidemenu.style.right = "-200px"
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbyjiWZPh65lNQdlvJutKu7xKUhCGw5IVqdxwV4oNGs0sw-F1No7L9qfocz8k2c7F0CZ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})