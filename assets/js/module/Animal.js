export default class Animal {
    constructor(nombre, edad, imagen, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._imagen = imagen;
        this._comentarios = comentarios;
        this._sonido = sonido
    }
    get nombre() {
        return this._nombre;
    }
    get edad() {
        return this._edad;
    }
    get img() {
        return this._imagen;
    }
    get sonido() {
        return this._sonido;
    }
    get comentarios() {
        return this._comentarios;
    }
    set comentarios(comentarios) {
        this._comentarios = comentarios;
    }
}

