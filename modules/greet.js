// Javascrit modules.

//console.log('Hello from the module');
// Si ejecutamos app.js (vacío) con node no sucede nada.

// Función greet mediante function expression.
let greet = () => console.log('Hello from the module');
//greet();
/*Si en app.js añadimos require('./greet')* y lo ejecutamos mediante node
nos dará como resultado el mensaje de la función, osea 'Hello from the module'*/

module.exports = greet 
//Ahora "estamos exponiendo" el contenido del módulo hacia otros módulos. 