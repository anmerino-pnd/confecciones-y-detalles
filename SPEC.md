* [ ] 

# SPEC.md --- Confecciones y Detalles

## 0. Objetivo del proyecto

Crear un sitio web estático, moderno, elegante y cálido para
**Confecciones y Detalles**, negocio de costura ubicado en Hermosillo,
Sonora y activo desde **2015**.

El sitio será administrado técnicamente por el propietario de este
repositorio y publicado mediante **GitHub Pages**.

El propósito principal no es vender productos directamente en línea. El
sitio debe funcionar como:

1. Portafolio visual del trabajo realizado.
2. Catálogo navegable de trabajos por categorías.
3. Presentación profesional del negocio.
4. Punto de contacto para clientes potenciales.
5. Evidencia de experiencia y trayectoria desde 2015.
6. Canal para dirigir al cliente a WhatsApp.
7. Base escalable para incorporar progresivamente más fotografías y
   trabajos.

La experiencia debe hacer que una persona que llega desde Google, una
recomendación, un volante o directamente desde el local pueda responder
rápidamente:

- ¿Qué hace este negocio?
- ¿Pueden hacer lo que necesito?
- ¿Cómo se ve su trabajo?
- ¿Tienen experiencia?
- ¿Dónde están?
- ¿Cómo puedo contactarlos?

---

# 1. Dirección visual

## 1.1 Concepto

La identidad visual debe comunicar:

- artesanal;
- profesional;
- cálida;
- elegante;
- cercana;
- femenina sin depender de una estética excesivamente femenina;
- moderna;
- confiable;
- local.

La página debe sentirse como un **atelier/taller de confección
moderno**, no como una plantilla genérica de negocio ni como una tienda
de ecommerce.

### Concepto central

> **Trabajo artesanal presentado con una imagen contemporánea.**

La fotografía real del negocio debe ser protagonista.

No utilizar fotografías de stock de personas cosiendo si existen
fotografías reales del local, trabajos, clientes o prendas realizadas
por Confecciones y Detalles.

---

# 2. Identidad visual propuesta

## 2.1 Paleta inicial

Usar CSS variables para centralizar todos los colores:

```css
:root {
  --color-background: #FAF8F5;
  --color-surface: #EFE8E0;
  --color-text: #292624;
  --color-primary: #7A5C61;
  --color-secondary: #B89B7A;
  --color-white: #FFFFFF;
  --color-border: #DDD3CA;
}
```

Esta paleta es una propuesta inicial y deberá poder modificarse desde un
único archivo.

No utilizar negro puro como color principal.

No utilizar gradientes llamativos.

No utilizar colores neón.

No utilizar una estética genérica de startup tecnológica.

---

# 3. Tipografía

Usar una combinación serif + sans-serif.

Propuesta inicial:

- Títulos: **Cormorant Garamond** o **DM Serif Display**
- Texto/interfaz: **Inter** o **Manrope**

La serif debe utilizarse para:

- nombre del negocio;
- titulares importantes;
- frases destacadas.

La sans-serif debe utilizarse para:

- navegación;
- botones;
- descripciones;
- etiquetas;
- información práctica.

La tipografía debe reforzar el concepto de atelier sin sacrificar
legibilidad.

---

# 4. Restricciones visuales

Estas reglas son obligatorias para la primera versión:

- NO utilizar emojis en ninguna sección.
- NO utilizar iconos emoji.
- NO crear un footer con redes sociales porque actualmente el negocio
  no tiene redes sociales.
- NO inventar información sobre el negocio.
- NO inventar precios.
- NO inventar horarios.
- NO inventar una dirección exacta.
- NO inventar testimonios.
- NO inventar estadísticas.
- NO inventar certificaciones.
- NO utilizar fotografías de stock cuando exista material real.
- NO sobrecargar la página con animaciones.
- NO usar carruseles automáticos innecesarios.
- NO utilizar demasiados colores.
- NO utilizar una navegación compleja.
- NO implementar ecommerce o pagos.
- NO solicitar información sensible a los clientes.

El único canal de contacto inicial será **WhatsApp**.

---

# 5. Arquitectura general del sitio

La primera versión debe ser una landing page completa:

```text
/
└── index.html
```

La página tendrá navegación interna mediante anchors:

```text
#inicio
#servicios
#nosotros
#galeria
#ubicacion
#contacto
```

No crear múltiples páginas HTML inicialmente salvo que exista una
necesidad real.

La arquitectura debe quedar preparada para poder añadir posteriormente:

```text
/galeria/
/servicios/
/sobre-nosotros/
```

si el contenido crece demasiado.

---

# 6. Estructura de la página

Orden recomendado:

```text
1. Header / navegación
2. Hero
3. Propuesta de valor / introducción
4. Servicios
5. Sobre Confecciones y Detalles
6. Galería / catálogo
7. Ubicación
8. CTA final de WhatsApp
9. Footer mínimo
```

---

# 7. Header

Debe contener:

```text
Confecciones & Detalles
```

o la representación visual del nombre/logotipo disponible.

La navegación inicial:

```text
Inicio
Servicios
Nosotros
Galería
Ubicación
Contacto
```

En desktop:

- navegación horizontal;
- header limpio;
- puede ser sticky si no perjudica la experiencia.

En móvil:

```text
LOGO                         MENU
```

Implementar menú hamburguesa con JavaScript o CSS.

El header debe ser discreto y no competir visualmente con el Hero.

---

# 8. Hero

El Hero es una de las secciones prioritarias.

Debe presentar inmediatamente:

```text
CONFECCIONES Y DETALLES

Trabajo de confección y arreglos
hecho con dedicación desde 2015.

[ Ver nuestro trabajo ]
[ WhatsApp ]
```

El texto exacto puede modificarse durante la afinación de copy.

No afirmar servicios que no hayan sido confirmados.

## Imagen

Utilizar una fotografía real del negocio o de una prenda/trabajo.

Placeholder inicial:

```text
assets/images/hero/hero-placeholder.jpg
```

La imagen debe ocupar un área importante del Hero.

En desktop puede utilizarse un layout dividido:

```text
┌──────────────────────┬──────────────────────┐
│                      │                      │
│  TEXTO               │                      │
│                      │       FOTO           │
│  CTA                 │                      │
│                      │                      │
└──────────────────────┴──────────────────────┘
```

En móvil:

```text
TEXTO
CTA
FOTO
```

No usar un Hero excesivamente alto que obligue al usuario a desplazarse
mucho antes de entender el negocio.

---

# 9. Propuesta de valor

Después del Hero:

```text
HECHO CON DEDICACIÓN

Cada prenda tiene una necesidad diferente.
Desde pequeños arreglos hasta prendas confeccionadas
desde cero, Confecciones y Detalles trabaja cada pieza
con atención al detalle.
```

Este texto es provisional.

Debe ser revisado con la dueña antes de considerarlo copy definitivo.

La sección debe ser visualmente ligera.

Puede incluir una fotografía secundaria.

---

# 10. Servicios

## 10.1 Servicios confirmados

El negocio realiza, entre otros:

- Bastillas.
- Parches de pantalón.
- Ajustes.
- Reducción de tallas de pantalón.
- Composturas y modificaciones de prendas.
- Cambio de cierre / zipper.
- Sumestido / sumetido según la terminología que utilice la dueña.
- Blusas.
- Camisas.
- Pantalones.
- Confección de vestidos casuales.
- Confección de vestidos de noche.
- Confección de vestidos de quinceañera.
- Confección de vestidos de dama.
- Confección de vestidos de novia.
- Arreglos de ropa confeccionada por terceros.
- Confección y modificación de distintas prendas.

IMPORTANTE:

Antes de publicar los nombres definitivos, validar con la dueña la
terminología exacta de cada servicio.

Por ejemplo, el letrero actual muestra "Sumestichado"; no asumir
automáticamente que esa es la palabra correcta. Confirmar si se refiere
a "suminchado", "sumechado", "surcido", "zurcido", "remendado" u otro
término local/profesional.

## 10.2 Presentación

No mostrar una lista gigantesca.

Agrupar los servicios en categorías comprensibles.

Propuesta:

### Arreglos y ajustes

- Bastillas.
- Ajustes.
- Reducción de tallas.
- Parches.
- Cierres.
- Reparaciones y modificaciones.

### Confección

- Blusas.
- Camisas.
- Pantalones.
- Vestidos casuales.
- Vestidos de noche.

### Vestidos especiales

- XV años.
- Dama.
- Novia.
- Ocasiones especiales.

Esto permite comunicar amplitud sin hacer que la sección parezca un menú
interminable.

---

# 11. Sobre nosotros

Título:

> Desde 2015, haciendo realidad cada detalle.

Contenido:

Confecciones y Detalles comenzó en 2015.

La sección debe comunicar experiencia y permanencia, pero sin inventar
una historia adicional.

Placeholder para fotografía:

```text
assets/images/about/mom-working-placeholder.jpg
```

La fotografía ideal sería una imagen real de la dueña trabajando.

No generar una fotografía artificial de ella.

Cuando exista la fotografía real:

- usarla;
- optimizarla;
- conservar buena resolución;
- agregar `alt` descriptivo.

---

# 12. Galería: componente central del proyecto

La galería NO debe tratarse como una simple sección decorativa.

Debe convertirse progresivamente en un **catálogo visual navegable**.

Esto es importante para el crecimiento futuro del negocio.

La pregunta que debe responder la galería es:

> "¿Quiero ver ejemplos del tipo de trabajo que necesito?"

---

# 13. Categorías de galería

Sí, implementar categorías desde la primera versión, pero de manera
sencilla.

No crear una página independiente por cada categoría.

Usar una sola colección de imágenes con filtros.

Categorías iniciales sugeridas:

```text
Todos
Vestidos
Vestidos de noche
Quinceañeras
Novias
Damas
Ropa casual
Blusas
Camisas
Pantalones
Arreglos y ajustes
Otros trabajos
```

Estas categorías son iniciales y deberán ajustarse según la cantidad
real de fotografías.

No mostrar categorías que todavía no tengan contenido suficiente.

---

# 14. Modelo de datos de la galería

NO hardcodear toda la información dentro del HTML.

Crear un archivo:

```text
data/gallery.js
```

o preferentemente:

```text
data/gallery.json
```

Ejemplo:

```json
[
  {
    "id": "vestido-001",
    "src": "assets/images/gallery/vestido-001.webp",
    "alt": "Vestido de noche confeccionado por Confecciones y Detalles",
    "title": "Vestido de noche",
    "category": "vestidos-noche"
  },
  {
    "id": "ajuste-001",
    "src": "assets/images/gallery/ajuste-001.webp",
    "alt": "Prenda ajustada por Confecciones y Detalles",
    "title": "Ajuste de prenda",
    "category": "arreglos"
  }
]
```

El JavaScript debe generar la galería dinámicamente.

Ventaja:

Agregar una fotografía nueva debe requerir principalmente:

1. copiar la imagen;
2. agregar un objeto al JSON;
3. hacer commit;
4. hacer push.

No modificar manualmente 20 elementos HTML.

---

# 15. Filtrado de galería

Implementar filtros visuales:

```text
[Todos]
[Vestidos]
[Quinceañeras]
[Novias]
[Ropa casual]
[Arreglos]
```

Al seleccionar una categoría:

```text
categoría seleccionada
        ↓
filtrar gallery.json
        ↓
renderizar imágenes correspondientes
```

El filtro debe funcionar sin recargar la página.

JavaScript vanilla es suficiente.

No introducir React solamente para esto.

---

# 16. Diseño de las categorías

Las categorías pueden mostrarse inicialmente como botones/chips:

```text
Todos   Vestidos   Quinceañeras   Novias   Arreglos
```

En móvil deben permitir desplazamiento horizontal si no caben.

No hacer una cuadrícula de 15 tarjetas de categorías.

La galería debe seguir siendo protagonista.

---

# 17. Imágenes de la galería

Preferir:

```text
.webp
```

cuando sea posible.

Mantener imágenes originales en una carpeta fuente separada si el flujo
de trabajo lo requiere:

```text
assets/
├── images/
│   ├── gallery/
│   └── originals/
```

El sitio publicado debe utilizar imágenes optimizadas.

Objetivo:

- buena calidad visual;
- carga rápida;
- tamaño razonable.

Nunca subir fotografías de varios MB sin optimización si no es
necesario.

---

# 18. Lightbox

Al hacer click en una fotografía:

```text
┌──────────────────────────────────────┐
│                                      │
│              FOTO                    │
│                                      │
│                                      │
│       ←                    →         │
│                                      │
│                         X            │
└──────────────────────────────────────┘
```

Debe permitir:

- ampliar fotografía;
- cerrar;
- siguiente;
- anterior;
- teclado Escape;
- teclado izquierda/derecha cuando sea posible;
- cerrar haciendo click fuera de la imagen.

En móvil debe ser cómodo.

No utilizar un plugin pesado si puede implementarse con JavaScript
sencillo.

---

# 19. Fotografías aportadas por clientes

Esta es una posibilidad futura y debe contemplarse desde el diseño, pero
NO implementarla todavía.

Posible flujo futuro:

```text
Cliente
   ↓
"¿Tienes una foto de tu prenda?"
   ↓
Formulario
   ↓
Sube fotografía
   ↓
Revisión manual
   ↓
Aprobación
   ↓
Repositorio / almacenamiento
   ↓
Galería
```

IMPORTANTE:

No permitir que cualquier archivo subido por un visitante termine
automáticamente publicado.

Debe existir moderación.

No implementar uploads directamente a GitHub desde el navegador.

Cuando llegue el momento, evaluar:

- Google Forms;
- Microsoft Forms;
- Cloudinary;
- Supabase Storage;
- Firebase Storage;
- un formulario conectado a un backend;
- otra solución adecuada.

La primera versión NO necesita backend.

---

# 20. CTA principal

En lugar de:

> ¿Tienes un proyecto?

Usar una frase relacionada con costura y creación.

Dirección creativa:

> **¿Quieres coser una idea?**

Puede explorarse también:

> **¿Tienes una idea en mente?**

> **Cuéntanos qué necesitas.**

> **Hagamos realidad tu idea.**

La opción final debe sonar natural en español mexicano y no demasiado
publicitaria.

CTA:

```text
[ Escríbenos por WhatsApp ]
```

El botón debe abrir WhatsApp.

No inventar el número.

Dejarlo inicialmente como variable/configuración:

```javascript
const WHATSAPP_NUMBER = "...";
```

---

# 21. Ubicación

Sección:

```text
ENCUÉNTRANOS EN HERMOSILLO

Confecciones y Detalles
Hermosillo, Sonora

[ Cómo llegar ]
```

Una vez validada la dirección:

- agregar mapa;
- agregar botón de Google Maps;
- permitir navegación desde móvil.

No inventar la dirección.

---

# 22. Footer

No utilizar footer de redes sociales.

Footer mínimo:

```text
Confecciones y Detalles

Hermosillo, Sonora

WhatsApp

© 2026 Confecciones y Detalles
```

El año debe generarse dinámicamente con JavaScript si se considera
conveniente.

No agregar Facebook, Instagram ni otras redes mientras el negocio no las
tenga.

---

# 23. WhatsApp

WhatsApp es el principal canal de conversión.

Debe existir:

1. botón en Hero;
2. CTA al final;
3. opcionalmente botón flotante persistente.

El mensaje inicial puede prellenarse.

Ejemplo conceptual:

```text
Hola, encontré Confecciones y Detalles en su página
y me gustaría preguntar por...
```

No hardcodear el mensaje si la dueña quiere modificarlo.

Centralizar configuración:

```javascript
const BUSINESS_CONFIG = {
  whatsappNumber: "",
  whatsappMessage: ""
};
```

---

# 24. Diseño orientado a comportamiento del usuario

El diseño debe aplicar principios de UX basados en evidencia, no
"neuromarketing mágico".

La prioridad es reducir fricción y ayudar al visitante a reconocer
rápidamente si el negocio puede resolver su necesidad.

Investigación de Baymard muestra que la capacidad de navegar y filtrar
grandes conjuntos de productos afecta fuertemente la facilidad con la
que los usuarios encuentran aquello que buscan. También encuentra que
las imágenes son especialmente útiles cuando las diferencias son
visuales.

Aplicación al proyecto:

```text
Necesidad del usuario
        ↓
Categoría clara
        ↓
Ejemplos visuales
        ↓
Confianza
        ↓
WhatsApp
```

Por eso la galería y sus filtros son parte funcional del sitio, no
solamente decoración.

---

# 25. Principios UX derivados de investigación

## 25.1 Mostrar antes que explicar

Cuando el servicio es visual, priorizar fotografías reales.

Un vestido confeccionado debe poder entenderse visualmente antes de leer
un párrafo sobre él.

## 25.2 Categorías comprensibles

Usar lenguaje que un cliente normal utilizaría.

Preferir:

```text
Vestidos de noche
```

sobre terminología técnica innecesaria.

## 25.3 Filtros visuales

Cuando las categorías sean visualmente distintas, considerar acompañar
el filtro con imágenes o miniaturas.

Baymard documenta que las imágenes pueden ayudar a los usuarios a
entender atributos visuales incluso cuando no conocen el término exacto.

## 25.4 No sobrecategorizar

No crear una categoría por cada pequeño tipo de trabajo.

Por ejemplo:

```text
Vestidos
  ├── Vestidos casuales
  ├── Vestidos de noche
  ├── XV
  ├── Dama
  └── Novia
```

puede ser correcto cuando existe suficiente contenido.

Pero si solamente existen dos fotos de vestidos de novia, no convertirlo
en una navegación enorme.

La estructura debe crecer conforme crezca el contenido.

Baymard advierte que una categorización excesiva puede dificultar que
los usuarios encuentren contenido relacionado.

## 25.5 Imágenes de calidad

Las fotografías son críticas.

No utilizar imágenes borrosas o demasiado pequeñas como contenido
principal.

La investigación de Baymard encontró que muchos usuarios exploran
imágenes inmediatamente y que imágenes insuficientes pueden perjudicar
la evaluación del producto.

## 25.6 CTA claro

No competir con cinco acciones diferentes.

La acción principal es:

```text
Contactar por WhatsApp
```

La acción secundaria es:

```text
Ver trabajos
```

---

# 26. Mobile-first

La página debe diseñarse primero pensando en móvil.

Razón práctica:

Clientes probablemente llegarán desde:

- WhatsApp;
- Google;
- enlaces compartidos;
- códigos QR;
- recomendaciones.

Muchos llegarán desde teléfono.

Por tanto:

- botones grandes;
- texto legible;
- navegación sencilla;
- imágenes optimizadas;
- galería cómoda;
- filtros desplazables;
- WhatsApp accesible.

Desktop será una adaptación, no el punto de partida.

---

# 27. Accesibilidad

Implementar como mínimo:

- HTML semántico.
- `alt` en imágenes.
- contraste suficiente.
- foco visible.
- navegación por teclado.
- botones reales para acciones.
- `aria-label` cuando un botón solamente tenga icono.
- `prefers-reduced-motion`.
- no depender exclusivamente del color para comunicar estados.

No sacrificar accesibilidad por estética.

---

# 28. Animaciones

Usar animaciones sutiles:

- aparición ligera de secciones;
- hover de botones;
- zoom pequeño en fotografías;
- transición de filtros;
- menú móvil.

Evitar:

- parallax excesivo;
- textos que rebotan;
- animaciones constantes;
- carruseles automáticos;
- elementos que distraigan del contenido.

El objetivo es transmitir refinamiento, no demostrar efectos CSS.

---

# 29. Estructura técnica del repositorio

Propuesta:

```text
confecciones-y-detalles/
│
├── index.html
│
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   └── responsive.css
│
├── js/
│   ├── config.js
│   ├── main.js
│   └── gallery.js
│
├── data/
│   └── gallery.json
│
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── about/
│   │   └── gallery/
│   │
│   └── icons/
│
├── .github/
│   └── workflows/
│       └── pages.yml
│
├── README.md
└── SPEC.md
```

---

# 30. Filosofía del código

Mantener el proyecto sencillo.

No introducir:

- React;
- Vue;
- Angular;
- Next.js;
- backend;
- base de datos;

en la primera versión.

La primera versión debe ser:

```text
HTML5
+
CSS3
+
Vanilla JavaScript
+
JSON
+
GitHub Pages
```

Dependencias externas solamente cuando aporten valor real.

---

# 31. Posibles dependencias

Se pueden considerar:

- Google Fonts para tipografía.
- Lucide Icons para iconos.
- Una librería ligera de imágenes únicamente si realmente mejora el
  resultado.

Preferir CSS y JavaScript propios cuando la funcionalidad sea sencilla.

No instalar una librería para resolver algo que puede hacerse en 20
líneas de JavaScript.

---

# 32. GitHub Pages

Configurar despliegue mediante GitHub Actions.

El flujo esperado:

```text
git push
   ↓
GitHub Actions
   ↓
GitHub Pages
   ↓
sitio actualizado
```

El proyecto debe funcionar completamente desde una ruta de GitHub Pages.

Evitar rutas absolutas como:

```text
/assets/image.jpg
```

si pueden romperse cuando el repositorio se publique bajo:

```text
https://usuario.github.io/nombre-repositorio/
```

Preferir rutas relativas o configurar correctamente `base`.

---

# 33. SEO básico

Implementar:

```html
<title>Confecciones y Detalles | Hermosillo, Sonora</title>

<meta
  name="description"
  content="Confecciones, arreglos y modificaciones de prendas en Hermosillo, Sonora."
>
```

Agregar:

- `lang="es-MX"`;
- Open Graph;
- favicon;
- canonical cuando corresponda;
- headings semánticos;
- información local real cuando haya sido validada.

No realizar keyword stuffing.

---

# 34. Datos estructurados

En una iteración posterior se puede añadir Schema.org para negocio
local.

No inventar:

- horarios;
- precios;
- ratings;
- reviews;
- teléfono.

Agregar únicamente datos reales confirmados.

---

# 35. Performance

Objetivo:

- imágenes optimizadas;
- lazy loading en galería;
- no cargar imágenes de galería antes de necesitarlas;
- minimizar JavaScript;
- evitar dependencias innecesarias;
- fuentes cargadas eficientemente.

Ejemplo:

```html
<img
  src="..."
  alt="..."
  loading="lazy"
  decoding="async"
>
```

La imagen principal del Hero puede utilizar una estrategia diferente
porque está above-the-fold.

---

# 36. Gestión de fotografías

El proyecto debe asumir que la galería crecerá.

No diseñar para 10 fotografías solamente.

Debe soportar eventualmente:

```text
10
50
100
200+
```

fotografías sin que el HTML tenga que crecer manualmente.

Por ello:

```text
gallery.json
        ↓
gallery.js
        ↓
filter
        ↓
render
```

es una decisión arquitectónica importante.

---

# 37. Futuro sistema de contribuciones de clientes

No implementar todavía.

Pero documentar una futura fase:

## Phase 2 --- Client Gallery Contributions

Objetivo:

Permitir que clientes compartan fotografías de prendas confeccionadas o
arregladas.

Requisitos futuros:

- formulario;
- consentimiento para publicación;
- moderación;
- almacenamiento externo;
- optimización automática;
- metadata;
- categoría;
- fecha;
- estado `pending/approved/rejected`.

Nunca publicar automáticamente contenido de clientes sin revisión.

---

# 38. Evolución futura del catálogo

Cuando la galería crezca suficientemente, considerar:

```text
Galería
│
├── Todos
├── Confección
│   ├── Vestidos
│   ├── Blusas
│   ├── Camisas
│   └── Pantalones
│
├── Vestidos especiales
│   ├── Noche
│   ├── XV
│   ├── Dama
│   └── Novia
│
└── Arreglos
    ├── Ajustes
    ├── Bastillas
    ├── Parches
    └── Reparaciones
```

Pero NO implementar toda esta estructura hasta que el contenido lo
justifique.

La arquitectura debe poder evolucionar hacia ella.

---

# 39. Contenido que debe solicitarse a la dueña

Antes de la publicación definitiva, conseguir:

## Información

- nombre comercial exacto;
- dirección;
- teléfono/WhatsApp;
- horario;
- servicios exactos;
- terminología correcta de cada servicio;
- si acepta trabajos urgentes;
- si trabaja con citas;
- si realiza cotizaciones por WhatsApp;
- zonas/colonias a las que atiende si es relevante.

## Fotografías

Idealmente:

- 1 fotografía del exterior/local;
- 1 fotografía de la dueña trabajando;
- 1 fotografía del espacio de trabajo;
- fotografías de vestidos;
- fotografías de arreglos;
- fotografías de pantalones;
- fotografías de blusas;
- fotografías de trabajos especiales;
- fotografías de clientes usando prendas, siempre con permiso.

---

# 40. Uso de la fotografía del letrero actual

La fotografía proporcionada del negocio muestra:

- fondo verde intenso;
- ilustración de máquina de coser;
- nombre "Confecciones & Detalles";
- tipografía script;
- listado de servicios;
- estética claramente asociada a costura.

No copiar literalmente el diseño del letrero para el sitio.

Usarlo como **referencia de identidad histórica del negocio**.

La nueva web debe reinterpretar esa identidad en una versión moderna.

El símbolo de la máquina de coser puede inspirar:

- favicon;
- iconografía;
- elemento decorativo;
- marca secundaria.

Pero no debe dominar toda la interfaz.

---

# 41. Copywriting

El tono debe ser:

- cercano;
- profesional;
- humano;
- sencillo;
- mexicano;
- directo.

Evitar:

> "Somos líderes en soluciones textiles integrales."

Preferir:

> "Desde 2015, ayudamos a darles el ajuste, arreglo o acabado que cada
> prenda necesita."

Evitar exageraciones.

No afirmar:

- "la mejor costurera";
- "la número uno";
- "calidad garantizada";
- "los mejores precios";

a menos que exista una razón real y verificable para afirmarlo.

---

# 42. Estructura final aproximada del index

```html
<header>
  <nav>
    ...
  </nav>
</header>

<main>

  <section id="inicio">
    <!-- Hero -->
  </section>

  <section id="intro">
    <!-- Propuesta de valor -->
  </section>

  <section id="servicios">
    <!-- Servicios agrupados -->
  </section>

  <section id="nosotros">
    <!-- Desde 2015 -->
  </section>

  <section id="galeria">
    <!-- Categorías + galería dinámica -->
  </section>

  <section id="ubicacion">
    <!-- Hermosillo + mapa -->
  </section>

  <section id="contacto">
    <!-- CTA WhatsApp -->
  </section>

</main>

<footer>
  <!-- Footer mínimo -->
</footer>
```

---

# 43. Prioridades de implementación

## P0 --- Esqueleto

- [x] Crear repo.
- [x] Crear estructura de carpetas.
- [x] Crear `index.html`.
- [x] Crear CSS base.
- [x] Crear navegación.
- [x] Crear responsive layout.
- [x] Configurar GitHub Pages.

## P1 --- Identidad

- [x] Implementar paleta.
- [x] Implementar tipografías.
- [x] Implementar Hero.
- [x] Implementar botones.
- [x] Implementar secciones.
- [ ] Implementar favicon/logo inspirado en costura.

## P2 --- Galería

- [x] Crear `gallery.json`.
- [x] Renderizar imágenes con JS.
- [x] Implementar categorías.
- [x] Implementar filtros.
- [x] Implementar lightbox.
- [x] Implementar lazy loading.
- [x] Implementar paginación "Cargar más" para escalar scroll.
- [x] Implementar layout Masonry para flexibilidad de dimensiones.

## P3 --- Contacto

- [x] Configurar WhatsApp.
- [x] Crear CTA.
- [x] Crear ubicación.
- [x] Agregar Google Maps cuando se confirme la dirección.

## P4 --- Contenido real

- [ ] Sustituir placeholders de texto con copy real.
- [x] Agregar fotografías reales (16 fotos del catálogo inicial).
- [ ] Agregar fotografías reales (Navidad, Country faltantes).
- [ ] Validar textos con la dueña.
- [ ] Validar servicios.
- [ ] Validar horario.
- [x] Validar dirección.

## P5 --- Calidad

- [x] Mobile testing.
- [x] Desktop testing.
- [ ] Accessibility check.
- [ ] SEO básico.
- [ ] Performance.
- [ ] Open Graph.
- [ ] Favicon.
- [ ] Broken-link check.

---

# 44. Definition of Done --- primera versión

La primera versión se considera terminada cuando:

- [x] El sitio funciona en GitHub Pages.
- [x] Es responsive.
- [x] No existen emojis en la interfaz.
- [x] El negocio se entiende en los primeros segundos.
- [x] Se comunica que existe desde 2015.
- [x] Los servicios principales son claros.
- [x] Existe una galería funcional.
- [x] La galería tiene filtros.
- [x] Las imágenes pueden ampliarse.
- [x] WhatsApp funciona.
- [x] La ubicación funciona cuando se agregue la dirección real.
- [ ] No existen datos inventados (Faltan validar algunos copies).
- [x] Las fotografías están optimizadas.
- [x] El sitio funciona sin backend.
- [x] Agregar una fotografía nueva no requiere modificar manualmente el HTML.
- [x] El diseño funciona correctamente en móvil.
- [x] El código está organizado y documentado.
- [x] El proyecto está preparado para crecer a cientos de fotografías.

---

# 45. Instrucción principal para el agente

No comenzar creando todo el sitio inmediatamente.

Primero:

1. Leer `SPEC.md` completo.
2. Inspeccionar la estructura actual del repositorio.
3. Proponer la arquitectura de archivos.
4. Proponer el sistema visual.
5. Crear primero un prototipo visual funcional.
6. Validar que el layout sea responsive.
7. Implementar después la galería dinámica.
8. Implementar después los filtros.
9. Implementar después el lightbox.
10. Configurar GitHub Pages al final del primer ciclo funcional.

Durante el desarrollo:

- mantener el proyecto sencillo;
- evitar dependencias innecesarias;
- no introducir frameworks sin justificarlo;
- no inventar información del negocio;
- no inventar fotografías;
- utilizar placeholders claramente identificados;
- priorizar fotografías reales;
- mantener la arquitectura preparada para crecimiento;
- pensar desde ahora en una galería que pueda pasar de 10 a cientos de
  fotografías;
- mantener separadas estructura, estilos, configuración y datos;
- mantener todas las variables de negocio configurables;
- no convertir el sitio en ecommerce;
- no implementar uploads de clientes en esta primera fase.

---

# 46. Principio de diseño central

La página no debe intentar convencer al visitante mediante publicidad
agresiva.

Debe hacer algo más sencillo:

```text
"Esto es lo que hacemos."
          ↓
"Así se ve nuestro trabajo."
          ↓
"Tenemos experiencia desde 2015."
          ↓
"Estamos en Hermosillo."
          ↓
"¿Necesitas algo parecido?"
          ↓
"Escríbenos por WhatsApp."
```

La fotografía real, la organización del catálogo y la facilidad para
contactar deben hacer el trabajo principal.
