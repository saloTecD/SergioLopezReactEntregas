Se hace entrega del proyecto final, detallo lo realizado en base a los requisitos base que estan en la plataforma de coderhouse

Al ingresar a la aplicacion se muestra una barra de navegacion con el logo de la pagina que lleva a la pagina principal, en la barra de navegacion tambien esta el menu con el item
Categorias donde se pueden filtrar los productos en base a categorias
En el navbar tambien se mostrara el icono del carrito, si no hay items dentro del carrito este no estara visible

En el cuerpo se cargan cards que muestran una imagen del producto junto a su nombre, en las mismas se puede hacer click para ir al detalle del producto, donde se observa la imagen nombre precio y descripcion,
en esta pantalla tambien se puede seleccionar cuantos items se quieren comprar de este producto y agregarlos al carrito de compras, al agregarse productos, se visualizara el carrito
con la cantidad de items seleccionados, al agregar items, se mostrara un nuevo boton que da la posibilidad de terminar la compra, o seguira mostrandose el boton de añadir mas items en caso que se quiera,

Si se intenta acceder manualmente desde el navegador al website/item/:id, con un id de producto que no existe en la base de datos, se mostrara una alerta indicando que el producto que se esta buscando no existe, y la posibilidad de volver a la pagina principal

La lista de productos se encuentra cargada en firebase, desde la cual se consumen todos los datos del item, las imagenes se encuentran almacenadas de manera local, pero los links de la imagen se sacan de firebase

en firebase tambien esta creada la coleccion orders, donde se almacena la orden que se crea al finalizar la compra, con la fecha, nombre, telefono, Email, ID de la orden, y detalles de los productos seleccionados junto con la cantidad de cada item y el precio total de la compra

Al filtrar en el menu de categories por la categoria, se obtiene la ruta /categories/categoria

El cart, es accesible durante toda la navegacion de la pagina desde el momento que se agrega un item, si no hay items en el carrito, el mismo no estara visible, si se intenta acceder a la ruta /cart, estando el carrito vacio se mostrara una alerta indicando que no hay items en el carrito

Al finalizar la compra o al hacer click en el item del carrito, se va a la pagina de checkout, donde se visuazliza el resumen de la compra, y la posibilidad de eliminar algun item o vaciar todo el carrito
Tambien se tiene un formulario donde se debe ingresar el nombre,telefono,email y confirmacion del email para poder generar la orden de compra, si algun dato falta se hace la validacion y se informa al cliente que dato hace falta, hasta que no este completo el formulario no se genera la oprden de compra, adicionalmente se hace la validacion que los campos email, y confirmacion del email, sean iguales, antes e poder seguir con la generacion de la orden

Al generar la orden de compra, esta se carga en firebase, y se muestra en pantalla una alerta indicando que se realizop correctamente la orden y se muestra el ID generado de la orden, tambien se vacia el carrito una vez se genera la orden.

Se agrego un spinner de carga para mostrarse mientras se obtienen los datos de firebase