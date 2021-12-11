let link = document.querySelector('#link')

let body = document.querySelector('body')

const toggleLanguage = (event) => {

    event.preventDefault()

    if(window.location.href === "file:///C:/Users/usuario/Documents/CV/index.html" 
    ) {

        window.location = "en.html"
    // sessionStorage.setItem("name", "Cayo")
    // body.innerHTML = sessionStorage.getItem("name")

    } else if(window.location.href === "https://cayolegal1.github.io/Curriculum/") {

        window.location = "https://cayolegal1.github.io/Curriculum/en.html"

    } else if (window.location.href === "https://cayolegal1.github.io/Curriculum/en.html") {


        window.location = "https://cayolegal1.github.io/Curriculum/"
    }
    
    else {
        
        window.location = "index.html"
    }
}



link.addEventListener('click', toggleLanguage)
