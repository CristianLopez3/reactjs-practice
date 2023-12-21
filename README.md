# Reducers
 
useReducer es un hook de React que te permite administrar el estado de un componente utilizando un patrón de "reducción". Básicamente, es una alternativa a useState cuando la lógica del estado se vuelve más compleja.

El hook useReducer toma dos argumentos: el primer argumento es una función reductora (reducer function) y el segundo es el estado inicial. La función reductora recibe dos argumentos: el estado actual y una acción, y devuelve el nuevo estado.

> [!NOTE]
>  useReducer es una funcion pura (funcion pura: no afecta valores globales)

### Params
useReducer recibe tres parametros, los cuales son:
* Reducer: debe ser la funcion que maneje toda la logica.
* initialState: debe contener el estado inicial de la variable u objeto que queremos manejar.
* init: este parametro es opcional, debe ser una funcion que contenga la logica de primer renderizado de la variabla a manejar