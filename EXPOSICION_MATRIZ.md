# Explicación Detallada — Matriz de Responsabilidad
### Abel Moises Mucha Arteta — Proyecto NovaTech

---

## ÍNDICE
1. [¿Qué es la Matriz RACI?](#1-qué-es-la-matriz-raci)
2. [Array 1 — integrantes](#2-array-1--integrantes)
3. [Array 2 — actividades](#3-array-2--actividades)
4. [Array 3 — leyenda](#4-array-3--leyenda)
5. [Método .map()](#5-método-map)
6. [Cómo se conectan los arrays](#6-cómo-se-conectan-los-arrays)
7. [Diseño SCSS](#7-diseño-scss)
8. [Variables CSS](#8-variables-css)
9. [Otros conceptos usados](#9-otros-conceptos-usados)
10. [Posibles preguntas del profesor](#10-posibles-preguntas-del-profesor)

---

## 1. ¿Qué es la Matriz RACI?

Es una tabla que muestra **quién hace qué** dentro de un proyecto. Cada integrante del equipo tiene un rol asignado para cada actividad:

| Letra | Nombre | Significado |
|-------|--------|-------------|
| **R** | Responsable | Quien **ejecuta** la tarea directamente |
| **A** | Aprobador | Quien **aprueba** y responde por el resultado |
| **C** | Consultado | Quien **da su opinión** antes de tomar una decisión |
| **I** | Informado | Quien **se entera** del avance, pero no interviene |

---

## 2. Array 1 — `integrantes`

### ¿Qué es un array de objetos?

Un **array** es una lista de elementos entre corchetes `[]`.
Un **objeto** es un conjunto de datos entre llaves `{}` con pares clave: valor.
Un **array de objetos** es una lista donde cada elemento es un objeto.

```js
// Array normal (solo strings)
const frutas = ['Manzana', 'Pera', 'Uva']

// Array de objetos (cada elemento tiene propiedades)
const personas = [
    { nombre: 'Abel', rol: 'Desarrollador' },
    { nombre: 'Angelo', rol: 'Coordinador' },
]
```

### El array `integrantes` del proyecto

```js
const integrantes = [
    { nombre: 'Angelo Melo',         rol: 'Coordinador'      },  // índice 0
    { nombre: 'Manuel Huarac',       rol: 'Gestor de Equipo' },  // índice 1
    { nombre: 'Abel Mucha',          rol: 'Desarrollador'    },  // índice 2
    { nombre: 'Felix Llacctahuaman', rol: 'Desarrollador'    },  // índice 3
    { nombre: 'Fernando Quispe',     rol: 'Desarrollador'    },  // índice 4
    { nombre: 'Jhassir Leon',        rol: 'Desarrollador'    },  // índice 5
]
```

- Es un **array de objetos simple**: cada objeto tiene solo 2 propiedades (`nombre` y `rol`), ambas son strings.
- Tiene 6 objetos → genera **6 columnas** en la tabla.
- El orden importa: el índice de cada persona (0, 1, 2...) se usa para conectarlo con sus roles.

### Lo que genera en la tabla

```
┌────────────┬───────────┬───────────┬───────────┬───────────┬───────────┬───────────┐
│ Actividad  │  Angelo   │  Manuel   │   Abel    │   Felix   │ Fernando  │  Jhassir  │
│            │Coordinador│ Gest.Equi │ Desarroll │ Desarroll │ Desarroll │ Desarroll │
└────────────┴───────────┴───────────┴───────────┴───────────┴───────────┴───────────┘
```

---

## 3. Array 2 — `actividades`

### ¿Por qué es un array de objetos complejo?

Porque cada objeto adentro tiene 3 propiedades, y una de ellas (`celdas`) es **otro array dentro del objeto**. A eso se le llama estructura anidada.

```
actividades        →  array
  └── [0]          →  objeto
        ├── fase   →  string (simple)
        ├── nombre →  string (simple)
        └── celdas →  array de strings (anidado)
```

### El array completo del proyecto

```js
const actividades = [
    {
        fase: 'Planificacion',
        nombre: 'Planificacion del proyecto y gestion del backlog',
        celdas: ['A', 'R', 'C', 'C', 'C', 'C'],
    },
    {
        fase: 'Planificacion',
        nombre: 'Coordinacion del equipo y seguimiento de avances',
        celdas: ['C', 'A', 'R', 'R', 'R', 'R'],
    },
    {
        fase: 'Diseno',
        nombre: 'Diseno de interfaz y estilos visuales del sitio',
        celdas: ['A', 'C', 'C', 'C', 'C', 'R'],
    },
    {
        fase: 'Desarrollo',
        nombre: 'Mapa Organizacional del equipo',
        celdas: ['R', 'C', 'I', 'I', 'I', 'A'],
    },
    {
        fase: 'Desarrollo',
        nombre: 'Seccion Mision y Vision',
        celdas: ['C', 'R', 'I', 'I', 'I', 'A'],
    },
    {
        fase: 'Desarrollo',
        nombre: 'Objetivos Principales y Objetivos Especiales',
        celdas: ['C', 'C', 'I', 'R', 'I', 'A'],
    },
    {
        fase: 'Desarrollo',
        nombre: 'Slider de CVs del equipo',
        celdas: ['I', 'C', 'I', 'I', 'R', 'A'],
    },
    {
        fase: 'Desarrollo',
        nombre: 'Matriz de Responsabilidad',
        celdas: ['C', 'C', 'R', 'I', 'I', 'A'],
    },
    {
        fase: 'Desarrollo',
        nombre: 'Catalogo de productos y pagina de detalle',
        celdas: ['A', 'I', 'C', 'C', 'C', 'R'],
    },
    {
        fase: 'Pruebas',
        nombre: 'Revision funcional y control de calidad',
        celdas: ['A', 'R', 'C', 'C', 'C', 'C'],
    },
    {
        fase: 'Entrega',
        nombre: 'Presentacion y entrega final del proyecto',
        celdas: ['A', 'R', 'C', 'C', 'C', 'C'],
    },
]
```

### Cómo se leen las `celdas`

`celdas` tiene exactamente **6 posiciones**, una por cada integrante, en el **mismo orden** que el array `integrantes`:

```
Posición:    [0]       [1]      [2]    [3]     [4]       [5]
Persona:   Angelo   Manuel    Abel   Felix  Fernando  Jhassir
```

Ejemplo con la fila "Matriz de Responsabilidad":

```
celdas: ['C',   'C',    'R',  'I',   'I',    'A'  ]
          ↓       ↓       ↓     ↓      ↓       ↓
       Angelo  Manuel  Abel  Felix  Fern.  Jhassir
```

| Persona | Letra | Significado |
|---------|-------|-------------|
| Angelo | C | Consultado |
| Manuel | C | Consultado |
| **Abel** | **R** | **Responsable** ← tu rol |
| Felix | I | Informado |
| Fernando | I | Informado |
| Jhassir | A | Aprobador |

### ¿Los roles se asignaron con algoritmo o manualmente?

**Manualmente, uno por uno.** No existe ningún algoritmo que calcule o distribuya roles automáticamente. Cada letra dentro de `celdas` fue escrita a mano según la lógica del proyecto. Lo único automático es que React empareja cada integrante con su celda por posición de índice.

### Tabla completa de roles

| Actividad | Angelo | Manuel | Abel | Felix | Fernando | Jhassir |
|---|---|---|---|---|---|---|
| Planificación del proyecto | A | R | C | C | C | C |
| Coordinación del equipo | C | A | R | R | R | R |
| Diseño de interfaz | A | C | C | C | C | R |
| Mapa Organizacional | R | C | I | I | I | A |
| Misión y Visión | C | R | I | I | I | A |
| Objetivos Principales | C | C | I | R | I | A |
| Slider de CVs | I | C | I | I | R | A |
| **Matriz de Responsabilidad** | **C** | **C** | **R** | **I** | **I** | **A** |
| Catálogo de productos | A | I | C | C | C | R |
| Revisión funcional | A | R | C | C | C | C |
| Presentación final | A | R | C | C | C | C |

---

## 4. Array 3 — `leyenda`

### El array

```js
const leyenda = [
    { letra: 'R', titulo: 'Responsable', desc: 'Ejecuta la tarea'                    },
    { letra: 'A', titulo: 'Aprobador',   desc: 'Aprueba y responde por el resultado' },
    { letra: 'C', titulo: 'Consultado',  desc: 'Da su opinion antes de decidir'      },
    { letra: 'I', titulo: 'Informado',   desc: 'Se mantiene al tanto del avance'     },
]
```

- Es un **array de objetos simple**: cada objeto tiene 3 propiedades (`letra`, `titulo`, `desc`), todas strings.
- Tiene 4 objetos → genera **4 badges** de referencia en la pantalla.
- Aparece entre el título y la tabla para que el usuario sepa qué significa cada letra antes de leer la tabla.

### Resumen de los 3 arrays

| Array | Tipo | Propiedades | Para qué sirve |
|---|---|---|---|
| `integrantes` | array de objetos simple | `nombre`, `rol` | Genera las columnas |
| `actividades` | array de objetos complejo | `fase`, `nombre`, `celdas[]` | Genera las filas |
| `leyenda` | array de objetos simple | `letra`, `titulo`, `desc` | Genera los badges de referencia |

---

## 5. Método `.map()`

### ¿Qué es?

`.map()` es un método de JavaScript que **recorre un array elemento por elemento** y por cada elemento devuelve algo nuevo. Siempre devuelve la misma cantidad de elementos que el array original.

### Ejemplo simple sin React

```js
const frutas = ['Manzana', 'Pera', 'Uva']

frutas.map((fruta) => {
    console.log(fruta)
})

// Imprime:
// Manzana   ← vuelta 1
// Pera      ← vuelta 2
// Uva       ← vuelta 3
```

El nombre `fruta` no es especial, es solo el nombre que le das al elemento en cada vuelta. Podría llamarse `x`, `item`, `f`, o cualquier cosa:

```js
frutas.map((x) => console.log(x))               // funciona igual
frutas.map((elemento) => console.log(elemento))  // funciona igual
```

### En React devuelve HTML

En el proyecto, en vez de imprimir texto, cada vuelta del `.map()` devuelve una etiqueta HTML:

```jsx
// 6 objetos en integrantes → 6 columnas <th>
integrantes.map((p, i) => (
    <th key={i}>
        <span>{p.rol}</span>
        <span>{p.nombre}</span>
    </th>
))
```

Lo que pasa vuelta por vuelta:

```
Vuelta 0 → p = { nombre: 'Angelo Melo', rol: 'Coordinador' }
           genera → <th> Coordinador / Angelo Melo </th>

Vuelta 1 → p = { nombre: 'Manuel Huarac', rol: 'Gestor de Equipo' }
           genera → <th> Gestor de Equipo / Manuel Huarac </th>

Vuelta 2 → p = { nombre: 'Abel Mucha', rol: 'Desarrollador' }
           genera → <th> Desarrollador / Abel Mucha </th>

... y así hasta la vuelta 5
```

### ¿Qué significa la `p`?

`p` no significa nada especial. Es solo un nombre corto elegido como abreviación de "persona". Podría llamarse de cualquier forma y funcionaría igual.

### ¿Qué significa la `i`?

`i` es el **índice**: el número de vuelta (0, 1, 2, 3...). Se usa principalmente para el `key`.

### ¿Qué es `key`?

React necesita identificar cada elemento de una lista. `key={i}` le da un identificador único a cada elemento generado por el `.map()`. Sin `key`, React muestra una advertencia en consola.

### Los 4 usos de `.map()` en el componente

```
integrantes.map()        → genera las 6 columnas (encabezados)
actividades.map()        → genera las 11 filas
  └── act.celdas.map()  → genera las 6 celdas por fila (.map dentro de .map)
leyenda.map()            → genera los 4 badges de referencia
```

---

## 6. Cómo se conectan los arrays

La conexión entre `integrantes` y `celdas` es **por posición de índice**. No hay ningún código que compare nombres ni busque coincidencias. React simplemente pone en la misma columna el elemento que está en la misma posición de ambos arrays:

```
integrantes[0] = Angelo    →   act.celdas[0] = letra del rol de Angelo
integrantes[1] = Manuel    →   act.celdas[1] = letra del rol de Manuel
integrantes[2] = Abel      →   act.celdas[2] = letra del rol de Abel
integrantes[3] = Felix     →   act.celdas[3] = letra del rol de Felix
integrantes[4] = Fernando  →   act.celdas[4] = letra del rol de Fernando
integrantes[5] = Jhassir   →   act.celdas[5] = letra del rol de Jhassir
```

Por eso el orden de `integrantes` y el orden dentro de cada `celdas` tienen que ser siempre el mismo. Si cambias el orden de `integrantes`, los roles se mezclan.

---

## 7. Diseño SCSS

El archivo `MatrizRes.scss` está dividido en 4 bloques.

### Bloque 1 — Contenedor general y títulos

```scss
.matriz-section {
    padding: 60px 20px;
    background-color: var(--light-bg);
}

.matriz-section h2 {
    text-align: center;
    font-size: 2.5rem;
    color: var(--text-main);
    margin-bottom: 10px;
}

.matriz-subtitulo {
    text-align: center;
    color: var(--text-muted);
    margin-bottom: 40px;
    font-size: 1rem;
}
```

- `.matriz-section` es la **caja grande** que envuelve todo el componente, no es la tabla en sí.
- `padding` — espacio interno para que el contenido no esté pegado a los bordes.
- `text-align: center` — centra el título y subtítulo.
- `var(--light-bg)` — variable CSS con el color de fondo.

### Bloque 2 — La leyenda

```scss
.matriz-leyenda {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 36px;
}

.leyenda-badge {
    width: 34px;
    height: 34px;
    border-radius: 7px;
    font-weight: 700;
    color: white;
}
```

- `display: flex` — pone los 4 badges en fila horizontal.
- `justify-content: center` — los centra horizontalmente.
- `flex-wrap: wrap` — si la pantalla es pequeña, los baja a la siguiente línea en vez de salirse.
- `gap: 16px` — espacio entre cada badge.
- `border-radius: 7px` — esquinas redondeadas del badge.

### Bloque 3 — La tabla

```scss
.matriz-wrapper {
    max-width: 1150px;
    margin: 0 auto;
    overflow-x: auto;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
}

.matriz-table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    min-width: 750px;
}

.matriz-table thead tr {
    background-color: var(--primary-blue);
    color: white;
}

.matriz-table tbody tr:hover {
    background-color: #f0f4ff;
}
```

- `max-width: 1150px` — la tabla no crece más de ese ancho.
- `margin: 0 auto` — centra la tabla en la página.
- `overflow-x: auto` — si la tabla es más ancha que la pantalla, aparece scroll horizontal.
- `box-shadow` — sombra debajo de la tabla para dar profundidad.
- `thead tr` — encabezados con fondo azul y texto blanco.
- `:hover` — la fila se ilumina cuando el usuario pasa el mouse por encima.

### Bloque 4 — Los badges RACI

```scss
.badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.9rem;
    color: white;
}

.badge-R { background-color: #2563eb; }   /* azul    */
.badge-A { background-color: #ef4444; }   /* rojo    */
.badge-C { background-color: #f59e0b; }   /* amarillo */
.badge-I { background-color: #10b981; }   /* verde   */
```

Cada letra tiene su propia clase con su propio color. La clase se asigna dinámicamente desde el JSX usando un template literal:

```jsx
className={`badge badge-${valor}`}
```

Si `valor` es `'R'`, genera la clase `badge badge-R` y el SCSS le pone fondo azul.
Si `valor` es `'A'`, genera la clase `badge badge-A` y el SCSS le pone fondo rojo.
Y así con cada letra automáticamente.

### Estructura visual del componente

```
.matriz-section          ← contenedor grande de toda la sección
│
├── h2                   ← título "Matriz de Responsabilidad"
├── p.matriz-subtitulo   ← subtítulo
│
├── .matriz-leyenda      ← los 4 badges [R] [A] [C] [I] con descripción
│
└── .matriz-wrapper      ← contenedor de la tabla (con scroll y sombra)
      └── .matriz-table
            ├── thead    ← fila de encabezados (fondo azul)
            └── tbody    ← 11 filas de actividades con badges de colores
```

---

## 8. Variables CSS

### ¿Qué son?

Una variable CSS es como una **caja con un nombre** donde se guarda un valor para reutilizarlo en todo el proyecto sin repetirlo.

### Cómo se definen

Se escriben en `:root` en el archivo de estilos globales, con dos guiones al inicio del nombre:

```css
:root {
    --light-bg:     #f8fafc;
    --primary-blue: #2563eb;
    --text-main:    #1e293b;
    --text-muted:   #64748b;
    --shadow-md:    0 4px 12px rgba(0,0,0,0.1);
    --radius-lg:    16px;
}
```

### Cómo se usan

Se llaman con `var()` desde cualquier archivo SCSS del proyecto:

```scss
.matriz-section {
    background-color: var(--light-bg);      /* lee #f8fafc */
}

.matriz-wrapper {
    border-radius: var(--radius-lg);        /* lee 16px */
    box-shadow:    var(--shadow-md);        /* lee la sombra */
}

.matriz-table thead tr {
    background-color: var(--primary-blue);  /* lee #2563eb */
}
```

### ¿Por qué se usan?

Si mañana se cambia el color principal del proyecto, solo se cambia `--primary-blue` en un solo lugar y se actualiza automáticamente en todos los archivos. Sin variables habría que buscar ese color en cada archivo del proyecto uno por uno.

---

## 9. Otros conceptos usados

### Destructuring (Desestructuración)

Permite extraer propiedades de un objeto directamente en los parámetros, sin tener que escribir `item.propiedad` cada vez.

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

Las llaves `{ letra, titulo, desc }` extraen esas propiedades automáticamente del objeto en cada vuelta del `.map()`.

### Template Literals

Permiten **insertar variables dentro de un string** usando backticks y `${}`.

```js
const valor = 'R'

// Sin template literal:
const clase = 'badge badge-' + valor    // "badge badge-R"

// Con template literal (lo que usa el proyecto):
const clase = `badge badge-${valor}`    // "badge badge-R"
```

Se usa para asignar la clase CSS correcta a cada badge según su letra automáticamente.

### Export / Import

Permiten dividir el código en archivos separados.

```js
// En MatrizRes.jsx — exportar:
export function MatrizRes() { ... }

// En NosotrosPage.jsx — importar:
import { MatrizRes } from "../components/MatrizRes"
```

---

## 10. Posibles preguntas del profesor

**1. ¿Qué es un array de objetos y en qué se diferencia de un array normal?**
Un array normal contiene valores simples como strings o números. Un array de objetos contiene objetos, donde cada uno tiene propiedades con su propio valor.

**2. ¿Por qué el array `celdas` tiene exactamente 6 posiciones?**
Porque hay 6 integrantes en el array `integrantes`. Cada posición de `celdas` corresponde a un integrante por índice. Si hubiera 7 integrantes, `celdas` tendría 7 posiciones.

**3. ¿Qué hace `.map()` y por qué se usa en React?**
Recorre un array y por cada elemento devuelve algo nuevo. En React se usa para generar HTML dinámicamente a partir de los datos de un array, sin tener que escribir cada elemento a mano.

**4. ¿Los roles se asignaron con un algoritmo?**
No, se asignaron manualmente uno por uno. El código solo los lee y los muestra. Lo que sí es automático es cómo React los empareja con cada integrante por posición de índice.

**5. ¿Qué significa la `p` en `.map((p, i) => ...)`?**
`p` es solo un nombre elegido como abreviación de "persona". Podría llamarse `x`, `item`, `persona` o cualquier nombre. No es una palabra reservada de JavaScript.

**6. ¿Cómo sabe el CSS qué color ponerle a cada badge?**
En el JSX se genera dinámicamente la clase `badge-R`, `badge-A`, etc. usando un template literal: `className={\`badge badge-${valor}\`}`. El SCSS tiene una clase por letra con su color específico.

**7. ¿Qué son las variables CSS como `var(--primary-blue)`?**
Son valores guardados con un nombre que se pueden reutilizar en todo el proyecto. Se definen una vez en `:root` y se llaman con `var()`. Si se cambia el valor en un lugar, se actualiza en todos los archivos automáticamente.

**8. ¿Qué es el `key` dentro del `.map()`?**
Es un identificador único que React necesita para cada elemento de una lista generada con `.map()`. Sin él React muestra una advertencia porque no puede identificar cada elemento internamente.

---

*Documentación de exposición — Proyecto NovaTech 2026*
