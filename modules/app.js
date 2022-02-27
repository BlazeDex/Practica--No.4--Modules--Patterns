// Llamando al módulo greet.js
/*require('./greet');

greet();*/
/*Al querer llamar a la función obtenemos un error
al ejecutar el node app.js, esto se debe a que no 
tenemos permiso para acceder al código.*/

let greet = require('./greet');
greet();
/*Con el módulo greet habilitado y teniendo un parámetro llamado greet 
podemos observar el contenido mediante node app.js*/

