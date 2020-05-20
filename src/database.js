const mysql = require('mysql');
const { promisify } = require('util');//modulo para que el codigo sea soportado
/*importar la conexión de keys.js para hacer uso de una 
propiedad en especifico en este caso database*/
const { database } = require('./keys');

//utilización de la conexión
//createPool-->es mas cercano a un estorno de producción
const pool = mysql.createPool(database);//creación de la conexión a las db

//utilización de la conexión 
pool.getConnection((err, connection) => {
    if(err) {
         if(err.code === 'PROTOCOL_CONNECTION_LOST'){
             console.error('DATABASE CONNECTION WAS CLOSED');
         } 
         if(err.code === 'ER_CON_COUNT_ERROR'){
             console.error('DATABASE HAS TO MANY CONNECTIONS'); 
         }
         if(err.code === 'ECONNREFUSED'){
             console.error('DATABASE CONNECTION WAS REFUSED');
         }
     }
     if (connection) connection.release();//con esto se da inicio a la conexión
    console.log('DB is Connected');
    return;
});

//promisify pool querys
pool.query = promisify(pool.query);

//exporto la conexión para iniciar las consultas
module.exports = pool;


