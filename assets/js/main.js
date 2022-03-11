import Aguila from "./module/Aguila.js";
import Leon from "./module/Leon.js";
import Lobo from "./module/Lobo.js";
import Oso from "./module/Oso.js";
import Serpiente from "./module/Serpiente.js";
import Animal from "./module/Animal.js";

const btnRegistrar = document.getElementById("btnRegistrar");
const animalId = document.getElementById("animal");
const edadId = document.getElementById("edad");
const comentariosId = document.getElementById("comentarios");
const preview = document.getElementById("preview");
const player = document.getElementById("player");
const Animales = document.getElementById("Animales");


const getData = (async () => {
    try {
        const URL = "../../animales.json";
        const request = await fetch(URL);
        const data = await request.json();
        return data;
    } catch (error) {
        console.error(error);
    }
})();

const getDataAnimales = (async () => {
    const data = await getData;
    const dataAnimales = data.animales;
    for (let animales of dataAnimales) {
        animalId.addEventListener("change", () => {
            const animElegido = animalId.value
            if (animElegido == animales.name) {
                preview.innerHTML = `
                <div id=preview>
                <img src="./assets/imgs/${animales.imagen}"class="preview-card" alt="${animales.name}">
                </div>`
            }
        })
    }
    btnRegistrar.addEventListener("click", () => {
        let tarjetaAnimal = []
        const nombre = animalId.value
        const edad = edadId.value
        const comentarios = comentariosId.value
        const {
            imagen,
            sonido
        } = dataAnimales.find(anim => anim.name === nombre)

        switch (nombre) {
            case "Leon": {
                const leon = new Leon(nombre, edad, imagen, comentarios, sonido);
                tarjetaAnimal.push(leon)
            }
            break;
        case "Lobo": {
            const lobo = new Lobo(nombre, edad, imagen, comentarios, sonido);
            tarjetaAnimal.push(lobo);
        }
        break;
        case "Oso": {
            const oso = new Oso(nombre, edad, imagen, comentarios, sonido);
            tarjetaAnimal.push(oso);
        }
        break;
        case "Aguila": {
            const aguila = new Aguila(nombre, edad, imagen, comentarios, sonido);
            tarjetaAnimal.push(aguila);
        }
        break;
        case "Serpiente": {
            const serpiente = new Serpiente(nombre, edad, imagen, comentarios, sonido);
            tarjetaAnimal.push(serpiente);
        }
        break;
        }
        let selecAnimal = tarjetaAnimal[0];
        Animales.innerHTML += `
                <div class="card col-3 p-0">
                <img src="./assets/imgs/${selecAnimal._imagen}" class="img-animal" alt="${selecAnimal._nombre}">
                <button class="btn btn-secondary">
                <img src="./assets/imgs/audio.svg" style="width:50px">
                <audio src=".assets/sounds/${selecAnimal._sonido}"
                type="audio/mpeg">
                </audio>
                </button>
                </div>`
        resetForm();
    })
    const resetForm = () => {
        animalId.value = "";
        edadId.value = "";
        comentariosId.value = "";
        preview.innerHTML = "";
    }
})()