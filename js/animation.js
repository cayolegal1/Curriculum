let text = document.querySelectorAll('.field-text')

const animation = () => {

    for(i = 0; i <= text.length; i++) {

        text[i].classList.add('onload-anim')
    }
}


window.onload = animation()
