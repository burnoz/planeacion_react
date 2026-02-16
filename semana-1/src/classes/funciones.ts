function saludar(nombre: string) : string {
    return `Hola, ${nombre}`;
}

const saludarFlecha = (nombre: string) : string => {
    return `Hola, ${nombre}`;
}

const message = saludar("Bruno");
const messageFlecha = saludarFlecha("Bruno");

console.log(message);
console.log(messageFlecha);