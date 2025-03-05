const BOTON_INICIO = document.getElementById("BOTON_INICIO");
const BOTON_PROYECTOS = document.getElementById("BOTON_PROYECTOS");
const BOTON_SOBRE_MI = document.getElementById("BOTON_SOBRE_MI");

const INICIO = document.getElementById("INICIO");
const PROYECTOS = document.getElementById("PROYECTOS");
const SOBRE_MI = document.getElementById("SOBRE_MI");

const scrollBoton = (elemento) => {
    const target = document.querySelector(elemento);
    if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY; // Obtiene la posición del elemento
        window.scrollTo({
            top: top,
            behavior: 'smooth' // Desplazamiento suave
        });
    }
};

// pc
BOTON_INICIO.addEventListener("click", () => {scrollBoton('#INICIO');});
BOTON_PROYECTOS.addEventListener('click', () => {scrollBoton('#PROYECTOS');});
BOTON_SOBRE_MI.addEventListener('click', () => {scrollBoton('#SOBRE_MI');});