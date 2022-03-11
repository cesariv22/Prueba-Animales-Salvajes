import Animal from "./Animal.js";

export default class Lobo extends Animal {
    constructor(nombre, edad, imagen, comentarios, sonido) {
        super(nombre, edad, imagen, comentarios, sonido)
    }
}