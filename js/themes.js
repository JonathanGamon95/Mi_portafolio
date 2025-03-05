const BOTON_TEMA = document.getElementById("BOTON_TEMA");
const BACKGROUND = document.getElementById("BG_ANIMADO");

const ETIQUETAS_P = document.querySelectorAll("p");
const ETIQUETAS_H1 = document.querySelectorAll("h1");
const SPAM_TITULO = document.querySelector("span");

let tema_actual = "tema-oscuro"
function cambio_de_tema() {
    if (tema_actual === "tema-oscuro") {
        BOTON_TEMA.style.background = "#100420"
        BACKGROUND.style.background = "#b2babb"
        SPAM_TITULO.style.color = "#ba4a00"
        
        for (let i of ETIQUETAS_P) {
            i.style.color = "#1b2631"
        }

        for (let k of ETIQUETAS_H1) {
            k.style.color = "#1b2631"
        }

        tema_actual = "tema-claro"
    } else {
        BOTON_TEMA.style.background = "#fff"
        BACKGROUND.style.background = "#100420"
        SPAM_TITULO.style.color = "#f1c40f"

        for (let i of ETIQUETAS_P) {
            i.style.color = "aliceblue"
        }

        for (let k of ETIQUETAS_H1) {
            k.style.color = "aliceblue"
        }
        tema_actual = "tema-oscuro"
    }
}

BOTON_TEMA.addEventListener("click", cambio_de_tema)