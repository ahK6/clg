1. Para correr el proyecto:

   - ejecutar NPM INSTALL o YARN
   - Ejecutar NPX PRISMA MIGRATE
   - Crear base de datos manualmente
   - Modificar en el .env DATABASE_URL los datos de coneccion a la bd
   - Correr NPX PRISMA MIGRATE
   - ejecutar YARN DEV para modo desarrollo o node index.js en modo normal

2. Use una arquitectura llamada SCREAM por que considero que es mas entendible y escalable aparte de lo facil que es encontrar los modelos, controladores, rutas, etc de las entidades al estar llamadas directamente con su nombre dichas carpetas. Hubiera usado postgres en vez de MYSQL pero en mac me iba a dar un poquito de atraso y preferia terminar.

3. - En las reservas falto que en la respuesta se mostrara la respuesta como se pidio en el requerimiento y me falto el endpoint que consulta cuantos cupos quedan disponibles en una experiencia.
   - En terminos de mejora crearia un singleton para prisma para manejar la conexion a la bd y no se cree una conexion por cada consulta, para asi no tener que estarse desconectando en los finally en cada peticion realizada. Adicionalmente algunas validaciones como si una fecha ya paso, las moveria a otro archivo y solo mandaria a llamar las funciones de validacion. Tambien todos los .find y todo esa logica la separaria a una carpeta de servicios y pasarle unicamente los parametros que se ocupa, asi el codigo se haria mas corto y limpio.
