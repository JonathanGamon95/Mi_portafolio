const BOTON_TEMA = document.getElementById("BOTON_TEMA");
const BODY = document.getElementById("body")
const CONTAINER_HERO = document.getElementById("container_hero")
const SKILL_CONTAINER = document.getElementById("skills_containers");
const ABOUT_ME = document.getElementById("ABOUT_ME");

const ETIQUETAS_P = document.querySelectorAll("p");
const ETIQUETAS_H1 = document.querySelectorAll("h1");
const SPAM_TITULO = document.getElementById("nombre_portafolio");
const BOX_SKILLS = document.querySelectorAll(".box-skill")
const LINE = document.querySelectorAll(".line");

let tema_actual = "tema-oscuro"
function cambio_de_tema() {
    if (tema_actual === "tema-oscuro") {
        BOTON_TEMA.style.background = "#100420"
        BODY.style.background = "aliceblue"
        CONTAINER_HERO.style.backgroundColor = "aliceblue"
        SKILL_CONTAINER.style.color = "#100420"
        SKILL_CONTAINER.setAttribute("class", "rounded-2xl p-6 border border-black/10 text-white")
        ABOUT_ME.style.backgroundColor = "aliceblue"
        SPAM_TITULO.style.color = "#ba4a00"
        
        for (let i of ETIQUETAS_P) {
            i.style.color = "#1b2631"
        }

        for (let k of ETIQUETAS_H1) {
            k.style.color = "#1b2631"
        }

        for (let j of BOX_SKILLS) {
            j.setAttribute("class", "box-skill flex flex-col items-center justify-center space-y-2 bg-white/5 py-4 rounded-xl border border-black/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:border-yellow-500/30")
        }

        for (let g of LINE) {
            g.style.color = "#100420"
        }

        tema_actual = "tema-claro"
    } else {
        BOTON_TEMA.style.background = "#fff"
        BODY.style.background = "#100420"
        CONTAINER_HERO.style.backgroundColor = "#1f1f3d"
        SKILL_CONTAINER.style.color = "#fff"
        SKILL_CONTAINER.setAttribute("class", "rounded-2xl p-6 border border-white/10 text-white")
        ABOUT_ME.style.backgroundColor = "#1f1f3d"
        SPAM_TITULO.style.color = "#f1c40f"

        for (let i of ETIQUETAS_P) {
            i.style.color = "aliceblue"
        }

        for (let k of ETIQUETAS_H1) {
            k.style.color = "aliceblue"
        }

        for (let j of BOX_SKILLS) {
            j.setAttribute("class", "flex flex-col items-center justify-center space-y-2 bg-white/5 py-4 rounded-xl border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:border-yellow-500/30")
        }

        for (let g of LINE) {
            g.style.color = "aliceblue"
        }

        tema_actual = "tema-oscuro"
    }
}

BOTON_TEMA.addEventListener("click", cambio_de_tema)