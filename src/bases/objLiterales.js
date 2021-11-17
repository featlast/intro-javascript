// Objetos Literales

const persona={
    nombre: 'Jose',
    apellido:'Herrera',
    edad: 32,
   
}



//console.table(persona)

//const persona2= new Object(persona);
//console.log(persona2)

const persona2= {...persona};
persona2.nombre="Junior";

console.log(persona)
console.log(persona2)

const persona4= new persona('carlos','perez',20)

for (const key in persona4) {
    //if (Object.hasOwnProperty.call(object, key)) {
        const element = persona4[key];
        console.log(element)
    //}
}


