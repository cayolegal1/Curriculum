
let media = window.matchMedia("(max-width: 640px)")


let company = document.querySelector('#compañia')

let ul = document.querySelector('.ul')

let another_ul = document.querySelector('.ul-kfir')

year_kfir = document.querySelector('.age')

let title = document.querySelector('.title')

let studies = document.querySelectorAll('.hola')

let una = document.querySelector('.UNA')

let cursado = document.querySelector('.none')

let ccpa = document.querySelector('.CCPA')

let programs = document.querySelector('.programs-media')


window.onload = changeHTML()

function changeHTML() {

    if(media.matches) {

        company.textContent = "NBS LATAM"

        ul.firstElementChild.textContent =  "- Administración de cuentas de clientes"

        ul.children[1].textContent = "- Aplicación de pagos de clientes de la región Plata"

        ul.children[3].textContent = "- Operativa basada en objetivos KPI "

        another_ul.firstElementChild.textContent = "- Venta de créditos"

        year_kfir.textContent = "2019"

        title.textContent = "Experiencia"

        una.textContent = "UNA"

        cursado.classList.remove('none')

        cursado.classList.add('cursado')

        ccpa.textContent = "CCPA"

        programs.classList.add('none')
    } 
    
    else {

        cursado.style.display = 'None'
    }
}

