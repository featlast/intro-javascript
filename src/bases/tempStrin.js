//Template String

const nombre= 'Jose';
const apellido='Herrera';


console.log(nombre+" "+apellido)
console.log(`${nombre } ${ apellido} `)

function getNombreCompleto(nombre, apellido){
    return `${nombre} ${apellido}`
}

console.log(`Hola Como Estas: ${getNombreCompleto(nombre,apellido)}`);