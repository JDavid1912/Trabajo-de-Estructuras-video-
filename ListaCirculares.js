
// Nodo individual de la lista
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Lista circular
class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  // Agregar un nodo al final
  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head; // Apunta a sí mismo
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
  }

  // Mostrar la lista (cuidado con el bucle infinito)
  printList() {
    if (!this.head) {
      console.log("La lista está vacía");
      return;
    }

    let current = this.head;
    const values = [];

    do {
      values.push(current.data);
      current = current.next;
    } while (current !== this.head);

    console.log("Lista circular:", values.join(" -> "));
  }
}

const lista = new CircularLinkedList();

lista.append(10);
lista.append(20);
lista.append(30);

lista.printList(); // Output: Lista circular: 10 -> 20 -> 30