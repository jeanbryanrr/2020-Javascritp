import '../css/componentes.css'


export const saludar = (nombre) => {
    console.log('creando etiqueda');
    const h1 = document.createElement('h1');
    h1.innerText = `nombre ${nombre}`;
    document.body.append(h1);
};