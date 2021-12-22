let media_desktop = window.matchMedia("(max-width: 640px)")

let nbs_company = document.querySelector("#compañia")

let current_position = document.querySelector("#current-position")

let experiences = document.querySelectorAll(".exp")

let programs = document.querySelector('.programs-media')

let ul = document.querySelector('.ul')

let another_ul = document.querySelector('.ul-kfir')

let year_kfir = document.querySelector('.age')

const responsive_html = () => {

    if(media_desktop.matches) {

        nbs_company.textContent = "NBS LATAM"

        current_position.textContent = "O2C Sr Asocciate"

        programs.classList.add("none")

        ul.firstElementChild.textContent = "Management of customers accounts."

        ul.children[1].textContent = "Payment Application for Plata market."

        ul.children[2].textContent = "Operational based on KPI."

        ul.removeChild(ul.children[3])


        // for(let exp = 0; exp <= experiences.length; exp++) {

        //     experiences[exp].style.color = "red"
        // }
    }
}
window.onload = responsive_html()






