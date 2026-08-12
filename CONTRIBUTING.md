# Guía de Contribución — Intranet Escolar

¡Gracias por contribuir al desarrollo de la Intranet Escolar!

## Flujo de Trabajo con Git

1. **Ramas (Branching):**
   - La rama `main` contiene el código estable y verificado.
   - Crea una rama para cada nueva funcionalidad utilizando la convención:
     - `feature/nombre-funcionalidad`
     - `fix/descripcion-error`

2. **Convención de Commits (Conventional Commits):**
   - `feat:` para nuevas características (ej. `feat(auth): agregar formulario de login`).
   - `fix:` para solución de errores.
   - `docs:` para cambios exclusivamente en documentación Markdown.
   - `style:` para cambios estéticos en CSS sin alterar la lógica.

3. **Pull Requests (PR):**
   - Asegúrate de que el código pase las validaciones de sintaxis antes de solicitar la fusión.
   - Cada PR debe ser revisado por al menos un compañero antes de integrarse a `main`.
   