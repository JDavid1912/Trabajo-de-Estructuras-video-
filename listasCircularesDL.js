// Clase Nodo: cada elemento de la lista
class Nodo {
    constructor(valor) {
        this.valor = valor;       // Dato del nodo
        this.siguiente = null;    // Enlace al siguiente nodo
        this.anterior = null;     // Enlace al nodo anterior
    }
}

// Clase ListaDobleCircular: controla toda la lista
class ListaDobleCircular {
    constructor() {
        this.inicio = null;  // Referencia al primer nodo
    }

    // Agrega un nuevo nodo al final
    agregar(valor) {
        const nuevo = new Nodo(valor); // Crear el nuevo nodo

        if (this.inicio === null) {
            // Si la lista está vacía
            nuevo.siguiente = nuevo;   // Se enlaza consigo mismo
            nuevo.anterior = nuevo;
            this.inicio = nuevo;       // Es el único y primer nodo
        } else {
            // Si ya hay nodos en la lista
            const ultimo = this.inicio.anterior;

            nuevo.siguiente = this.inicio;
            nuevo.anterior = ultimo;

            this.inicio.anterior = nuevo;
            ultimo.siguiente = nuevo;
        }
    }

    // Muestra los valores de la lista hacia adelante
    mostrarAdelante() {
        if (this.inicio === null) {
            console.log("La lista está vacía");
            return;
        }

        let actual = this.inicio;
        let resultado = "";

        do {
            resultado += actual.valor + " <-> ";
            actual = actual.siguiente;
        } while (actual !== this.inicio);

        console.log(resultado.slice(0, -5)); // Quita el último "<->"
    }

    // Muestra los valores hacia atrás
    mostrarAtras() {
        if (this.inicio === null) {
            console.log("La lista está vacía");
            return;
        }

        let actual = this.inicio.anterior; // Comienza desde el último
        let resultado = "";

        do {
            resultado += actual.valor + " <-> ";
            actual = actual.anterior;
        } while (actual !== this.inicio.anterior);

        console.log(resultado.slice(0, -5)); // Quita el último "<->"
    }
}

// Uso de ejemplo
const lista = new ListaDobleCircular();

lista.agregar("A");
lista.agregar("B");
lista.agregar("C");
lista.agregar("D");


console.log("Lista hacia adelante:");
lista.mostrarAdelante();

console.log("Lista hacia atrás:");
lista.mostrarAtras();
