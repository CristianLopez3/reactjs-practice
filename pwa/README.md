# Progressive Web Apps

Una Progressive Web App (PWA) es un tipo de aplicación web que combina las funcionalidades de una página web y una aplicación móvil. Se desarrollan utilizando tecnologías web estándar como HTML, CSS y JavaScript, pero están diseñadas para ofrecer una experiencia similar a la de una aplicación nativa.

Las PWAs tienen varias características clave:

* Confiabilidad: Pueden funcionar incluso en condiciones de red poco confiable o sin conexión, utilizando estrategias como el almacenamiento en caché de recursos esenciales para cargar la aplicación en ausencia de conexión a internet.

* Capacidad de respuesta: Se adaptan a diferentes dispositivos y tamaños de pantalla, brindando una experiencia de usuario consistente tanto en computadoras de escritorio como en dispositivos móviles.

* Interactividad: Proporcionan interacciones similares a las aplicaciones nativas, incluyendo notificaciones push, acceso al hardware del dispositivo (como la cámara o la geolocalización) y la capacidad de funcionar en segundo plano.

* Instalables: Los usuarios pueden "instalar" una PWA directamente desde el navegador en sus dispositivos, lo que crea accesos directos en la pantalla de inicio, brindando una experiencia más similar a una aplicación nativa.

* Seguridad: Utilizan conexiones seguras (HTTPS) para proteger la integridad de los datos y garantizar la privacidad del usuario.

> [!IMPORTANT]
> Las PWAs ofrecen beneficios tanto para los usuarios como para los desarrolladores. Para los usuarios, proporcionan una experiencia de usuario fluida y rápida, mientras que para los desarrolladores, permiten un desarrollo más ágil y mantenimiento simplificado al escribir una sola base de código para varias plataformas.

## Build

Ejecuta los siguientes comandos para poder hacerle build y mostrar el resultado:

```npm
  npm build
  npm i -g serve
  serve -s dist # caso de vite
```

Ahora abre el host y el puerto que se te indica
> [!TIP]
> Ten en cuenta de que si estas en algun sistema linux tendras que ejecutar uno que otro sudo para instalar todo correctamente.