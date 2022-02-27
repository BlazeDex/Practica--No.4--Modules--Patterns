// Javascript Objects

//let obj = {} 
/*Al realizar el node no ocurre nada. Esto se debe 
a que no hay un console.log, además de que los parámetros 
en el objeto creado están vacíos.*/

let persona = {
    nombre: 'Carlos',
    apellido: 'Ulibarri',
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    }, 
    domicilio : {
        calle:'Madero #144',
        colonia: 'Centro',
        cp: 28000,
        municipio: 'Colima'
    },
    //Creación de la función getAdress
    getAdress: function () {
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`
    }
}
console.log(persona);
/*Ahora al aplicar el node nos regresa la información del objeto*/

console.log(persona.nombre); //Imprime únicamente el nombre de la persona.
console.log(persona.apellido); //Imprime únicamente el apellido de la persona.
console.log(persona.getName()); //Imprime el nombre completo de la persona.
console.log(persona.domicilio); //Imprime todos los parámetros del domicilio de la persona a manera de objeto.
console.log(persona.getAdress()); //Imprime el domicilio completo de la persona.