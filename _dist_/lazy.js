
const isIntersecting = (entry) =>{
    return entry.isIntersecting //true dentro de la pantalla
}

const loadImage = (entry) =>{
    const container = entry.target;//Container(DIV)
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //cargue la imagen
    imagen.src = url;

    /* console.log("Holis"); */

    //desregistra la imagen(unlisten)
    observer.unobserve(container)
}


const observer = new IntersectionObserver((allElements) =>{
    allElements
    .filter(isIntersecting)
    .forEach(loadImage)
})




export const registerImage = (imagen)=>{
    //IntersectionObserver -observer(imagen)
    observer.observe(imagen)
}