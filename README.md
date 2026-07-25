# CV estilo iOS 26 (Liquid Glass) — Carlos Vásquez

Portafolio/CV interactivo hecho con **Next.js 14 (App Router)**, **TypeScript** y **Tailwind CSS**, con una interfaz que imita el **Home Screen de iOS 26**: barra de estado con Dynamic Island, cuadrícula de apps tipo squircle, Dock inferior, "sheets" (hojas) que se deslizan desde abajo al abrir cada sección con el material **Liquid Glass**, y un **gato asistente** flotante que ayuda a navegar el portafolio.

## 📁 Estructura del proyecto

```
cv-win11/
├── app/
│   ├── layout.tsx        → layout raíz (metadata, fuente)
│   ├── page.tsx           → home screen: cuadrícula + dock + sheets + gato
│   └── globals.css        → material Liquid Glass, squircle, animaciones
├── components/
│   ├── StatusBar.tsx        → hora, Dynamic Island, señal/batería
│   ├── AppIcon.tsx            → ícono squircle con gradiente tipo iOS
│   ├── Dock.tsx                → dock inferior + home indicator
│   ├── AppSheet.tsx             → hoja modal que se desliza al abrir una app
│   ├── CatGuide.tsx              → gato asistente flotante + buscador
│   └── SkillBar.tsx               → barra de progreso de habilidades
├── lib/
│   ├── data.ts                     → TODA tu info del CV (edítala aquí)
│   └── storage.ts                    → persistencia en localStorage
├── tailwind.config.ts               → paleta de colores iOS
└── package.json
```

## 🚀 Paso a paso para correrlo

### 1. Requisitos
Node.js 18 o superior (https://nodejs.org).

### 2. Instalar y correr
```bash
npm install
npm run dev
```
Abre **http://localhost:3000**. Toca cualquier ícono de la cuadrícula o del dock inferior para abrir su "app". Toca al **gato** 🐱 (abajo a la izquierda) para buscar habilidades/proyectos o recibir consejos.

### 3. Editar tu información
Todo el contenido vive en `lib/data.ts` (perfil, habilidades, proyectos, certificaciones, contacto, wallpapers y colores de cada ícono).

### 4. Producción
```bash
npm run build
npm start
```

### 5. Publicarlo gratis (Vercel)
1. Sube el proyecto a GitHub.
2. Entra a https://vercel.com → conecta GitHub → importa el repo.
3. Vercel detecta Next.js automáticamente → "Deploy". En minutos tendrás una URL pública.

## ✨ Funciones incluidas

- **Home screen tipo iOS**: cuadrícula de 6 apps (Sobre mí, Habilidades, Proyectos, Certificados, Contacto, Ajustes) con íconos squircle degradados, más una barra de estado con Dynamic Island simulada.
- **Dock inferior** con las 4 apps principales, estilo "glass" translúcido con blur real, más el home indicator.
- **Sheets estilo iOS**: al tocar un ícono, la sección se desliza desde abajo con el material Liquid Glass (blur + saturación), barra de navegación con ícono/título y botón de cerrar (flecha hacia abajo).
- **Gato asistente ("Miu")** 🐱: personaje flotante con animación de rebote suave. Al tocarlo despliega una burbuja con:
  - Consejos rotativos sobre cómo usar el portafolio.
  - Un **buscador funcional** de habilidades y proyectos: escribe "Python" o "Django" y te muestra resultados; al elegir uno, abre la app correspondiente y hace scroll con un resaltado animado hasta el ítem.
- **App de Ajustes**: cambia el **fondo de pantalla** (5 wallpapers) y el **modo oscuro/claro**, con un botón para "Restablecer valores predeterminados".
- **Persistencia real con localStorage**: el fondo de pantalla y el modo oscuro elegidos se guardan en el navegador del visitante y se recuerdan en su próxima visita — esto funciona porque es una app real que corre en su navegador (no un artifact embebido), a diferencia de la vista previa dentro del chat de Claude.

## 🧩 Cómo agregar una nueva "app" (sección)

1. Agrega los datos en `lib/data.ts` (y un color en `appColors` si quieres un ícono nuevo).
2. Agrega la key al tipo `AppKey` en `app/page.tsx`.
3. Copia un bloque `<AppSheet>...</AppSheet>` existente, cámbiale el ícono/gradiente y el contenido.
4. Agrégalo al arreglo `grid` (cuadrícula) y, si quieres, a `dockApps` (dock inferior).

## 🐾 Ideas para seguir extendiendo
- Reemplazar el emoji del gato por una ilustración SVG personalizada o animada (Lottie).
- Agregar más "personajes" de presentación (ej. un compañero que muestre certificaciones).
- Simular "swipe" entre páginas del home screen si agregas más apps.
- Sonidos sutiles tipo iOS al abrir/cerrar sheets.

## 📦 Dependencias principales
- `next` 14.2.35 · `react` 18 · `tailwindcss` 3 · `lucide-react` (íconos)
