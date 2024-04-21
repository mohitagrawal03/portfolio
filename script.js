function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for(tablink of tablinks){
            tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Contact form

const scriptURL = 'https://script.google.com/macros/s/AKfycbzp96pr7JP73EZTeSPF527pTSzLGGj0PyJY2FcpzeizT7GAICSe33rj1sQKQyF_NX1HgQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const conformation = document.getElementById("conformation")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        conformation.innerHTML = "Thank You! I got your message."
        setTimeout(function(){
            conformation.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })