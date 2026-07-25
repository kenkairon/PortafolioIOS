export const perfil = {
  nombre: "Carlos Enrique Vásquez Colimilla",
  rol: "Desarrollador Web Full Stack",
  objetivo:
    "Desarrollador Full Stack con experiencia en JavaScript, Ruby on Rails y Python (Django), especializado en aplicaciones web escalables y de alto rendimiento. Dominio de front-end (HTML5, CSS, JavaScript) y back-end (Node.js, Ruby on Rails, Django), además de bases de datos MySQL y PostgreSQL. Formado en tres bootcamps de Talento Digital, con experiencia en proyectos colaborativos aplicando control de versiones (GitHub) y metodologías ágiles.",
  sobreMi:
    "Desarrollador Full Stack enfocado en la optimización de bases de datos y el equilibrio entre front-end y back-end para crear aplicaciones funcionales y atractivas. Busco un entorno donde crecer profesionalmente, asumir nuevos retos y aportar valor con mi trabajo.",
  intereses: [
    "Fútbol",
    "Ping pong",
    "Gastronomía chilena y asiática",
    "Anime",
    "Música clásica y rock progresivo",
    "Bailar",
    "Cantar",
  ],
};

export const habilidades = [
  { nombre: "HTML5", nivel: 90 },
  { nombre: "CSS3", nivel: 85 },
  { nombre: "JavaScript", nivel: 85 },
  { nombre: "Bootstrap", nivel: 80 },
  { nombre: "Ruby on Rails", nivel: 75 },
  { nombre: "Node.js", nivel: 75 },
  { nombre: "Python", nivel: 80 },
  { nombre: "Django", nivel: 78 },
  { nombre: "Selenium", nivel: 70 },
  { nombre: "JUnit & Mockito", nivel: 65 },
  { nombre: "Cucumber & Gherkin", nivel: 65 },
  { nombre: "Postman & Newman", nivel: 72 },
  { nombre: "JMeter", nivel: 60 },
];

export const proyectos = [
  {
    titulo: "Portafolio Profesional Online",
    descripcion:
      "Facilita la creación de un CV profesional, permitiendo ingresar datos en tiempo real y generar automáticamente un formato listo para impresión.",
    stack: ["Django", "JavaScript", "SQLite3"],
  },
  {
    titulo: "Home Specialist",
    descripcion:
      "Plataforma que conecta personas con especialistas técnicos por área, con filtros de búsqueda y contacto directo con profesionales.",
    stack: ["JavaScript", "Bootstrap"],
  },
  {
    titulo: "Cuadro de Mando Integral",
    descripcion:
      "Aplicación web responsiva para visualizar métricas e indicadores estratégicos, con diseño optimizado para dispositivos móviles.",
    stack: ["JavaScript", "Bootstrap"],
  },
  {
    titulo: "Automatización de Pruebas",
    descripcion:
      "Especialización en pruebas funcionales, BDD, API y de rendimiento, integrando frameworks de testing y CI/CD para garantizar calidad de software.",
    stack: ["Selenium", "JUnit/Mockito", "Cucumber/Gherkin", "Postman/Newman", "JMeter", "CI/CD"],
  },
];

export const certificaciones = [
  {
    titulo: "Emprendimientos de tipo Startup — Inteligencia Humana",
    entidad: "Talento Digital",
  },
  {
    titulo: "Full Stack JavaScript — Trainee",
    entidad: "Talento Digital",
  },
  {
    titulo: "Full Stack Python — Trainee",
    entidad: "Talento Digital",
  },
];

export const contacto = {
  email: "ingeinfo2006@gmail.com",
  portafolio: "https://portafoliodevcevasquez.netlify.app",
};

// Fondos de escritorio (gradientes, sin imágenes externas)
export const wallpapers = [
  {
    id: "bloom",
    nombre: "Aurora azul",
    css: "linear-gradient(160deg, #1c92d2 0%, #4facfe 45%, #a6ffcb 100%)",
  },
  {
    id: "nocturno",
    nombre: "Nocturno",
    css: "linear-gradient(160deg, #0b1220 0%, #16213a 45%, #263a5c 100%)",
  },
  {
    id: "aurora",
    nombre: "Violeta",
    css: "linear-gradient(160deg, #2b1055 0%, #7597de 100%)",
  },
  {
    id: "atardecer",
    nombre: "Atardecer",
    css: "linear-gradient(160deg, #ff7e5f 0%, #feb47b 100%)",
  },
  {
    id: "bosque",
    nombre: "Menta",
    css: "linear-gradient(160deg, #11998e 0%, #38ef7d 100%)",
  },
];

// Colores de íconos tipo iOS (fondo degradado de cada "app")
export const appColors: Record<string, string> = {
  sobreMi: "linear-gradient(160deg, #34AADC, #007AFF)",
  habilidades: "linear-gradient(160deg, #34C759, #248A3D)",
  proyectos: "linear-gradient(160deg, #AF52DE, #5E5CE6)",
  certificaciones: "linear-gradient(160deg, #FFD60A, #FF9500)",
  contacto: "linear-gradient(160deg, #5AC8FA, #007AFF)",
  ajustes: "linear-gradient(160deg, #8E8E93, #636366)",
};

// Frases del gato asistente
export const catTips = [
  "¡Miau! Prueba a escribir “Python” o “Django” en el buscador 🐾",
  "Puedes tocar cualquier ícono para abrir esa sección.",
  "En Ajustes puedes cambiar el fondo de pantalla y el modo oscuro.",
  "¿Buscas contratarlo? Toca el ícono de Contacto ✉️",
];
