# Documentación del Proyecto NovaTech
### Abel Moises Mucha Arteta — Matriz de Responsabilidad

---

## ÍNDICE
1. [Mi componente: MatrizRes](#1-mi-componente-matrizres)
2. [Conceptos de JavaScript usados](#2-conceptos-de-javascript-usados)
3. [Conceptos de React y JSX](#3-conceptos-de-react-y-jsx)
4. [Otros componentes del proyecto](#4-otros-componentes-del-proyecto)
5. [Estructura general del proyecto](#5-estructura-general-del-proyecto)

---

## 1. Mi componente: MatrizRes

### ¿Qué es una Matriz de Responsabilidad (RACI)?
Es una tabla que muestra **quién hace qué** dentro de un proyecto. Cada integrante del equipo tiene un rol asignado para cada actividad:

| Letra | Nombre | Significado |
|-------|--------|-------------|
| **R** | Responsable | Quien **ejecuta** la tarea directamente |
| **A** | Aprobador | Quien **aprueba** y responde por el resultado |
| **C** | Consultado | Quien **da su opinión** antes de tomar una decisión |
| **I** | Informado | Quien **se entera** del avance, pero no interviene |

---

### Archivo: `MatrizRes.jsx`

El componente se divide en tres partes:

#### Parte 1 — Datos del equipo (`integrantes`)
```js
const integrantes = [
    { nombre: 'Angelo Melo',    rol: 'Coordinador'    },
    { nombre: 'Manuel Huarac',  rol: 'Gestor de Equipo' },
    { nombre: 'Abel Mucha',     rol: 'Desarrollador'  },
    // ... y los demás integrantes
]
```
- Es un **array de objetos**.
- Cada objeto tiene dos propiedades: `nombre` y `rol`.
- Este array controla las **columnas** de la tabla.

#### Parte 2 — Datos de actividades (`actividades`)
```js
const actividades = [
    {
        fase: 'Planificación',
        nombre: 'Planificación del proyecto y gestión del backlog',
        celdas: ['A', 'R', 'C', 'C', 'C', 'C'],
    },
    // ... más actividades
]
```
- Cada objeto representa una **fila** de la tabla.
- `celdas` es un array de letras (R, A, C, I) en el **mismo orden** que `integrantes`.
- Para editar la tabla, solo hay que cambiar los valores dentro de `celdas`.

#### Parte 3 — Leyenda (`leyenda`)
```js
const leyenda = [
    { letra: 'R', titulo: 'Responsable', desc: 'Ejecuta la tarea' },
    // ...
]
```
- Array que describe qué significa cada letra. Se renderiza como la leyenda de colores.

#### Parte 4 — Función componente
```jsx
export function MatrizRes() {
    return (
        <section className="matriz-section">
            ...
        </section>
    )
}
```
- Es una **función con nombre** que retorna JSX.
- Se exporta con `export` para poder usarla en `NosotrosPage.jsx`.

---

### Archivo: `MatrizRes.scss`
Define los estilos visuales del componente:
- `.matriz-section` — el contenedor general de la sección.
- `.badge-R`, `.badge-A`, `.badge-C`, `.badge-I` — cada color de badge según la letra.
- `.matriz-wrapper` — hace la tabla con scroll horizontal en pantallas pequeñas.

---

## 2. Conceptos de JavaScript usados

### Array
Un array es una **lista de elementos** encerrada en corchetes `[]`.
```js
// Array de strings
const letras = ['R', 'A', 'C', 'I']

// Array de objetos
const personas = [
    { nombre: 'Abel', edad: 20 },
    { nombre: 'Angelo', edad: 21 },
]
```

---

### Objeto (`{}`)
Un objeto guarda datos en pares **clave: valor**.
```js
const integrante = {
    nombre: 'Abel Mucha',
    rol: 'Desarrollador'
}

// Acceder a una propiedad:
console.log(integrante.nombre) // "Abel Mucha"
```

---

### `.map()` — Recorrer un array
Es el método más usado en React para renderizar listas. Recorre cada elemento de un array y **devuelve un resultado nuevo** por cada uno.

```js
// Sintaxis básica:
array.map((elemento) => resultado)

// Ejemplo del proyecto:
integrantes.map((p, i) => (
    <th key={i}>
        <span>{p.rol}</span>
        <span>{p.nombre}</span>
    </th>
))
```
- `p` representa **cada objeto** del array `integrantes` en cada vuelta.
- `i` es el **índice** (0, 1, 2...) de ese elemento.
- El resultado es un `<th>` por cada integrante.

---

### Destructuring (Desestructuración)
Permite extraer propiedades de un objeto directamente en los parámetros.

```js
// Sin destructuring:
leyenda.map((item) => {
    console.log(item.letra)
    console.log(item.titulo)
})

// Con destructuring (lo que usa el proyecto):
leyenda.map(({ letra, titulo, desc }) => (
    <div>{titulo}: {desc}</div>
))
```
Las llaves `{ letra, titulo, desc }` extraen esas propiedades automáticamente del objeto.

---

### Template Literals (Plantillas de texto)
Permiten **insertar variables dentro de un string** usando backticks `` ` ` `` y `${}`.

```js
const valor = 'R'

// Sin template literal:
const clase = 'badge badge-' + valor   // "badge badge-R"

// Con template literal (lo que usa el proyecto):
const clase = `badge badge-${valor}`   // "badge badge-R"
```
En el proyecto se usa para asignar la clase CSS correcta a cada badge según su letra.

---

### Export / Import (Módulos)
Permiten **dividir el código** en archivos separados.

```js
// En MatrizRes.jsx — exportar:
export function MatrizRes() { ... }

// En NosotrosPage.jsx — importar:
import { MatrizRes } from "../components/MatrizRes"
```
- `export` hace que la función esté disponible para otros archivos.
- `import` la trae al archivo actual para usarla.

---

### `.filter()` — Filtrar un array
Devuelve un **nuevo array** con solo los elementos que cumplen una condición.

```js
// Ejemplo del proyecto (ListProducts.jsx):
const productosFiltrados = productos.filter((producto) => {
    return producto.tipo === "Procesador"
})
// Resultado: solo los productos cuyo tipo es "Procesador"
```

---

### `.sort()` — Ordenar un array
Ordena los elementos de un array comparando dos elementos a la vez (`a` y `b`).

```js
// Ejemplo del proyecto (ListProducts.jsx):
const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    return a.precio - b.precio  // Orden de menor a mayor precio
})
// Si el resultado es negativo: a va primero
// Si el resultado es positivo: b va primero
```
El `[...productosFiltrados]` crea una **copia** del array antes de ordenar (para no modificar el original).

---

### `.slice()` — Recortar un array
Devuelve una **porción** del array entre dos índices, sin modificar el original.

```js
// Ejemplo del proyecto (paginación en ListProducts.jsx):
const productosVisibles = productosOrdenados.slice(0, 8)
// Devuelve los primeros 8 productos (índice 0 hasta el 7)
```

---

## 3. Conceptos de React y JSX

### Componente funcional
Un componente es una **función de JavaScript** que retorna JSX (la interfaz visual).

```jsx
export function MatrizRes() {
    return (
        <section>
            <h2>Matriz de Responsabilidad</h2>
        </section>
    )
}
```

---

### JSX
JSX es una sintaxis especial de React que **combina JavaScript con HTML**. Parece HTML pero se compila a JavaScript.

```jsx
// JSX (lo que se escribe):
const elemento = <h2 className="titulo">Hola</h2>

// JavaScript puro (lo que genera React internamente):
const elemento = React.createElement('h2', { className: 'titulo' }, 'Hola')
```
Diferencias clave con HTML normal:
- Se usa `className` en lugar de `class`.
- Las expresiones JavaScript van entre llaves `{}`.
- Las etiquetas siempre deben cerrarse (`<br />`, `<input />`).

---

### Props
Las props son los **parámetros que recibe un componente** desde afuera.

```jsx
// Definición del componente con props:
export function ProductDetail({ nombre, precio, descripcion }) {
    return <h2>{nombre} — S/ {precio}</h2>
}

// Uso del componente pasando props:
<ProductDetail nombre="AMD Ryzen 5" precio={699} descripcion="..." />
```

---

### Prop `key`
React necesita una `key` única en cada elemento de una lista para identificarlos internamente.

```jsx
integrantes.map((p, i) => (
    <th key={i}>{p.nombre}</th>  // key es obligatorio en listas
))
```

---

### `useState` — Estado del componente
Permite que un componente **recuerde un valor** que puede cambiar con el tiempo.

```jsx
// Ejemplo de ListProducts.jsx:
const [paginaActual, setPaginaActual] = useState(1)
//     ↑ valor actual    ↑ función para cambiarlo    ↑ valor inicial

// Cambiar el estado:
setPaginaActual(2)  // React re-renderiza el componente con el nuevo valor
```

---

### `useEffect` — Efectos secundarios
Se ejecuta automáticamente **después de que el componente se renderiza**, o cuando cambia algún valor de su lista de dependencias.

```jsx
// Ejemplo de ListProducts.jsx:
useEffect(() => {
    if (paginaActual > totalPaginas) {
        setPaginaActual(1)  // Si el filtro reduce páginas, vuelve a la 1
    }
}, [totalPaginas, paginaActual])
//  ↑ Se ejecuta cada vez que estas variables cambien
```

---

### React Router — Navegación entre páginas
Permite crear una **Single Page Application (SPA)**: la URL cambia pero la página no se recarga.

```jsx
// En App.jsx:
<BrowserRouter>
    <Routes>
        <Route path="/"          element={<HomePage />}   />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/nosotros"  element={<NosotrosPage />} />
        <Route path="/productos/:id" element={<ProductDetailPage />} />
    </Routes>
</BrowserRouter>
```
- `path` define la URL.
- `element` define qué componente se muestra.
- `:id` es un **parámetro dinámico** (cambia según el producto).

---

## 4. Otros componentes del proyecto

### `datos.js` — Base de datos de productos
```js
// Carga dinámica de todas las imágenes de la carpeta:
const imagenes = import.meta.glob('./img/PageProducts/*', { eager: true })

// Función auxiliar para obtener la ruta correcta de una imagen:
function obtenerImagen(nombreArchivo) {
    const ruta = `./img/PageProducts/${nombreArchivo}`
    return imagenes[ruta]?.default
}

// Array con todos los productos del catálogo:
export const productos = [
    {
        id: 1,
        nombre: "AMD Ryzen 3",
        tipo: "Procesador",
        precio: 399,
        img: obtenerImagen("AmdRyzen3.webp"),
        caracteristicas: ["4 núcleos", "Frecuencia turbo 4.0 GHz", ...],
        stock: 12
    },
    // ... más productos
]
```
- `import.meta.glob` es una función de **Vite** que importa múltiples archivos de una carpeta.
- `?.default` es el **optional chaining**: evita un error si la imagen no existe.

---

### `ListProducts.jsx` — Catálogo con filtros y paginación
Este componente implementa tres funcionalidades encadenadas:

```
productos (array completo)
    → .filter()  → productosFiltrados   (por búsqueda y categoría)
    → .sort()    → productosOrdenados   (por precio)
    → .slice()   → productosVisibles    (solo la página actual)
```

Usa cuatro estados:
- `busqueda` — texto que escribe el usuario en el buscador.
- `categoriaSel` — categoría seleccionada en el desplegable.
- `orden` — "menor" o "mayor" precio.
- `paginaActual` — número de página en la que está el usuario.

---

### `ProductDetail.jsx` — Detalle de un producto
Recibe los datos del producto como **props** y muestra:
- Imagen, nombre, precio, descripción y stock.
- Lista de características usando `.map()`.
- Productos relacionados: filtra el catálogo por mismo tipo, excluye el actual y toma los primeros 5.

```js
const productosRelacionados = productos
    .filter((p) => p.nombre !== nombre)  // Excluye el producto actual
    .filter((p) => p.tipo === tipo)      // Solo del mismo tipo
    .slice(0, 5)                         // Máximo 5 relacionados
```

---

### `NosotrosPage.jsx` — Página Nosotros
Ensambla todos los componentes de la sección Nosotros:

```jsx
export function NosotrosPage(){
    return(
        <main>
            <MapaOrg />      {/* Angelo */}
            <Mision />       {/* Manuel */}
            <ObjPrin />      {/* Felix David */}
            <SliderCv />     {/* Fernando */}
            <MatrizRes />    {/* Abel */}
        </main>
    )
}
```

---

## 5. Estructura general del proyecto

```
NovaTech/
├── src/
│   ├── assets/
│   │   ├── datos.js          ← Base de datos de productos
│   │   └── img/              ← Todas las imágenes
│   ├── components/
│   │   ├── Header.jsx        ← Barra de navegación superior
│   │   ├── Footer.jsx        ← Pie de página
│   │   ├── Hero.jsx          ← Sección principal del inicio
│   │   ├── MapaOrg.jsx       ← Organigrama del equipo (Angelo)
│   │   ├── Mision.jsx        ← Misión y Visión (Manuel)
│   │   ├── ObjPrin.jsx       ← Objetivos (Felix David)
│   │   ├── SliderCv.jsx      ← Slider de CVs (Fernando)
│   │   ├── MatrizRes.jsx     ← Matriz RACI (Abel) ← TU PARTE
│   │   ├── ListProducts.jsx  ← Catálogo con filtros
│   │   └── Card.jsx          ← Tarjeta de producto
│   ├── Pages/
│   │   ├── HomePage.jsx      ← Página de inicio
│   │   ├── NosotrosPage.jsx  ← Página Nosotros
│   │   ├── ProductsPage.jsx  ← Página catálogo
│   │   └── ProductsDetailPage.jsx ← Página detalle
│   ├── styles/
│   │   └── styles.css        ← Estilos globales del proyecto
│   ├── App.jsx               ← Enrutamiento principal
│   └── main.jsx              ← Punto de entrada de la app
└── index.html                ← Archivo HTML base
```

### Tecnologías usadas
| Tecnología | Para qué se usa |
|---|---|
| **React** | Librería para construir la interfaz con componentes |
| **Vite** | Herramienta que compila y ejecuta el proyecto |
| **React Router** | Navegación entre páginas sin recargar |
| **SCSS** | CSS con variables, anidamiento y más funcionalidades |
| **JavaScript ES6+** | Lenguaje base: arrow functions, destructuring, módulos |

---

*Documentación generada para la exposición del proyecto NovaTech — 2026*
