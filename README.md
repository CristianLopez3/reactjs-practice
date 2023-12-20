# Use Context :pencil:

Aspectos importantes del contexto:

* Cambiar aspectos globales sin necesidad de tener que pasar props por muchos childs.
* Optimizar renderizados al pasar objetos y funciones.

### Partes

El contexto recibe dos valores, el wrapper del contexto y el consumidor

```jsx
    const MyContext = createContext(wrapper, consumer)
```

> [!IMPORTANT]
> Desde la creacion de los hooks en react 16.8, no se necesita un proveedor que envuelva todo ya que useContext lo reemplaza