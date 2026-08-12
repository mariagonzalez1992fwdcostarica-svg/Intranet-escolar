# Arquitectura del Sistema — Intranet Escolar

## 1. Visión General
La Intranet Escolar es una aplicación web desacoplada diseñada para la gestión académica e institucional de un centro educativo público.

## 2. Stack Tecnológico
- **Frontend:** HTML5 semántico, CSS3 (Flexbox/Grid, variables CSS) y JavaScript Vanilla (ES6+).
- **Almacenamiento Local / Prototipado:** LocalStorage y archivos JSON estructurados para la persistencia de datos del prototipo.
- **Control de Versiones:** Git con flujo de trabajo basado en ramas (`main`, `feature/*`).
- **Documentación:** Markdown con especificación GitHub Flavored Markdown (GFM).

## 3. Estructura de Directorios

```text
intranet-escolar/
├── docs/
│   ├── arquitectura.md
│   └── requerimientos.md
├── src/
│   ├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── auth.js
│   │   ├── grades.js
│   │   └── main.js
│   └── index.html
├── AGENTS.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
└── README.md
## 4. Control de Acceso y Roles
- **Administrador:** Gestión total de usuarios y parámetros globales del sistema.
- **Docente:** Registro de notas, gestión de asistencias y publicación de boletines.
- **Estudiante / Familia:** Consulta de calificaciones, horarios y comunicados del centro.