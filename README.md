# Use Context :pencil:

Aspectos importantes del contexto:

* Cambiar aspectos globales sin necesidad de tener que pasar props por muchos childs.
* Optimizar renderizados al pasar objetos y funciones.

> [!TIP]
> React nos sugiere crear un context por cada funcionalidad global.

### Partes
El contexto recibe dos valores, el wrapper o proveedor del contexto y el consumidor.

```jsx
    // Context 
    const MyContext = createContext(wrapper, consumer);
    // Real Use
    const MyContext = createContext();
```

> [!IMPORTANT]
> Desde la creacion de los hooks en react 16.8, no se necesita un consumer que envuelva todo ya que useContext lo reemplaza.

> [!IMPORTANT]
> No puedes tener el contexto y el proveedor en el mismo archivo.

### Install

para poder correr bien este brazo necesitas ejecutar los siguiente comandos en tu bash:


```node
    npm i 
    npm i json-server
```