const BOTON_DESCARGA_CV = document.getElementById("CV_BUTTON");

function descargarArchivo() {
    // URL del archivo
    const url = '../CV/mi_cv.pdf'; 
    const nombreArchivo = 'CV_Jonathan_Gamon.pdf';  // Cambia la extensión a .pdf

    // Crear un elemento <a> para activar la descarga
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.download = nombreArchivo;

    // Simular un clic en el enlace para iniciar la descarga
    document.body.appendChild(enlace);
    enlace.click();

    // Eliminar el enlace del DOM después de la acción
    document.body.removeChild(enlace);
}

BOTON_DESCARGA_CV.addEventListener("click", () => descargarArchivo());