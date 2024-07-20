# Tripleten web_project_around

## Nombre del proyecto: Página Web Around the US - Tripleten

### Descripción del proyecto: 

Página Web interactiva la cual consta de:

  * un encabezado con el logo del proyecto.

  * una sección de perfil en la cual se puede:

    * editar el nombre del usuario y la profesión a través de una ventana modal que se abre al dar click en el botón de editar (lápiz).

    * editar la foto del perfil del usuario a través de una ventana modal que se abre al dar click sobre el icono de editar (lápiz) que se muestra cuando el puntero del mouse se pone sbore la foto del perfil 

  * una sección con tarjetas interactivas de distintos lugares de los Estados Unidos, en las cuales se puede:

    * eliminar las tarjeta al accionar el botón de eliminar (basura)
    * dar like al accionar el botón de like (corazón)
    * abrir una ventana modal con la visualización de la imagen al dar click sobre la imagen de la tajeta; 
    
  * una sección con un botón para añadir mas tarjetas (+) que despliega una ventana modal con un formulario para agregar un nombre y un link de foto.

  * el pie de página.

  Los formularios de las ventanas modales cuentan con validación en tiempo real<!-- , que muestra los mensajes de error mientras que el usuario está completando los campos -->. Si alguno de los campos no esta completado correctamente el botón de guardar permanecerá desactivado. Una vez todos los campos esten llenos de la manera correcta, el botón de guardar cambia su estado y su estilo para quedar activo.

***

### Tecnologías:

  La página web esta diseñada con las siguientes tecnologías:

  * El lenguaje de programación para escribir la lógica y funcionalidad de la página es **React Js**, El Lenguaje de Marcado de Hipertexto **JSX** es el código que se utiliza para estructurar la página web y sus contenidos

  * Las hojas de estilo para los elementos de la página web estan escritos en **CSS**
  * El proyecto es creado con **Create React App CRA** 

  Se codifican funciones asincronas de JavaScript mediante el uso de promises, para el consumo de la información de la api **https://around.nomoreparties.co/v1/web_es_11**, de la cual se consumen datos para inicializar el renderizado de las tarjetas, la información del usuario, y también enviar datos de tarjetas creadas por el usuario, la actualización de datos personales, y la actualización de los "me gusta" o "likes" que se agregan a cada tarjeta por los distintos usuarios.
***

### Organización:

  El proyecto está organizado siguiendo el principio de estructura de archivos jerárquica.

  Para la organización de los archivos CSS se utilizó la metodología BEM.

  Adicionalmente, los componentes han sido desarrollados utilizando la programación orientada a objetos (POO).
***

### Despliegue en la web:
  La página web esta desplegada en Github Pages y se aloja en el siguiente link: **https://odontoana804.github.io/web_project_around_react/**
***

## Página Web diseñada por Ana María Vargas.