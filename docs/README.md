# ModalCookies - Componente para Aceptación de Cookies

## Descripción

El componente **ModalCookies** es un modal informativo que solicita al usuario la aceptación de las cookies en una página web. El modal se muestra solo si el usuario no ha aceptado previamente las cookies. Al hacer clic en cualquiera de los dos botones ("Aceptar" o "Cancelar"), el modal se cierra y se guarda en el almacenamiento local (`localStorage`) la información de que el usuario ha aceptado las cookies. 

### Funcionalidad

- **Visibilidad del Modal**: El modal solo se muestra si el usuario no ha aceptado las cookies previamente. Esta información se guarda en el almacenamiento local (`localStorage`).
- **Botones**:
  - **Aceptar**: Al hacer clic en este botón, el modal se cierra y se guarda la información de que el usuario ha aceptado las cookies.
  - **Cancelar**: El comportamiento de este botón es el mismo que el de "Aceptar". Cierra el modal y marca las cookies como aceptadas.
- **Persistencia**: El estado de aceptación de las cookies se persiste en el `localStorage`, lo que significa que el modal no se volverá a mostrar hasta que se elimine la entrada correspondiente del almacenamiento local o se reinicie el navegador.

## Propiedades

El componente **ModalCookies** recibe dos propiedades:

- **titleCookies** (`string`): Título del modal que será mostrado en la parte superior del mismo. 
- **messageCookies** (`string`): Mensaje que se muestra debajo del título en el modal, informando al usuario sobre la política de cookies.

Ambas propiedades son requeridas y tienen valores predeterminados si no se pasan al componente.

### Propiedades Predeterminadas:

- **titleCookies**: "Titulo del componente Cookies"
- **messageCookies**: "Aquí va el mensaje de aprobación de cookies para el usuario"

## Componentes y Estilos

El componente utiliza la librería **VTEX CSS Handles** para gestionar los estilos de los diferentes elementos del modal. Los estilos se definen a través de las siguientes clases CSS:

- `container`: Contenedor principal del modal.
- `buttons`: Contenedor de los botones dentro del modal.
- `buttonAccept`: Estilo para el botón "Aceptar".
- `buttonCancel`: Estilo para el botón "Cancelar".
- `container__tittle`: Estilo para el título del modal.
- `container__paragraph`: Estilo para el mensaje del modal.

## Lógica Interna

1. **Verificación de Aceptación de Cookies**:
   Al cargar el componente, se verifica en el `localStorage` si el usuario ya ha aceptado las cookies. Si `cookiesAccepted` está configurado como `"true"`, el modal no se mostrará.

2. **Control de Visibilidad**:
   El estado `isVisible` se utiliza para gestionar la visibilidad del modal. Si el valor de `isVisible` es `false`, el componente no renderiza nada.

3. **Cambio de Estado**:
   Cuando el usuario hace clic en "Aceptar" o "Cancelar", la función `closeModal` se ejecuta. Esta función:
   - Establece `isVisible` a `false`, lo que oculta el modal.
   - Almacena en el `localStorage` la clave `cookiesAccepted` con el valor `"true"`, para indicar que el usuario ha aceptado las cookies.


