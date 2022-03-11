import Animal from "./Animal.js";

export default class Oso extends Animal {
    constructor(nombre, edad, imagen, comentarios, sonido) {
        super(nombre, edad, imagen, comentarios, sonido)
    }
}