// aca se cambia de seccion del menu

// botones
const LANDING_PAGES = document.getElementById("Button_Landing_pages");
const APPS = document.getElementById("Button_Apps");

// secciones
const CONT_PROYECTS = document.getElementById("cont_proyects");
const CONT_LANDING_PAGES = document.getElementById("cont_landig_pages");
const CONT_APPS = document.getElementById("cont_apps");

// eventos
LANDING_PAGES.addEventListener("click", () => changeSections(CONT_LANDING_PAGES))
APPS.addEventListener("click", () => changeSections(CONT_APPS))



function changeSections(selecSection) {
    if (!selecSection.classList.contains("hidden")) {
        return;
    } else {
        // se oculta el contenedor padre
        CONT_PROYECTS.classList.remove('opacity-100');
        CONT_PROYECTS.classList.add("opacity-0");
        // se desactiva los botones
        LANDING_PAGES.disabled = true;
        APPS.disabled = true;
    }



    setTimeout(() => {
        // se ocultan todas las secciones
        CONT_LANDING_PAGES.classList.add("hidden");
        CONT_APPS.classList.add("hidden");
        // se visibiliza la seccion seleccionada
        selecSection.classList.remove("hidden");
        // se visibiliza la ventana general
        CONT_PROYECTS.classList.remove("opacity-0");
        CONT_PROYECTS.classList.add("opacity-100");
        // se activa los botones
        LANDING_PAGES.disabled = false;
        APPS.disabled = false;
    }, 1000)
}