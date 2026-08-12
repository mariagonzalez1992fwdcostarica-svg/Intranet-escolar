// Manejo de autenticación accesible por roles
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const role = document.getElementById('role').value;
            const email = document.getElementById('email').value;

            // Simulación de sesión segura (sin guardar contraseña en texto plano)
            const sessionData = {
                userEmail: email,
                userRole: role,
                loginTime: new Date().toISOString()
            };

            localStorage.setItem('intranet_session', JSON.stringify(sessionData));
            alert(`Sesión iniciada correctamente como: ${role.toUpperCase()}`);

            // Aquí se redirigiría según el rol
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const role = document.getElementById('role').value;
            const email = document.getElementById('email').value;

            const sessionData = {
                userEmail: email,
                userRole: role,
                loginTime: new Date().toISOString()
            };

            localStorage.setItem('intranet_session', JSON.stringify(sessionData));

            // Obtener los datos del módulo académico según el rol
            if (typeof cargarPanelAcademico === 'function') {
                const data = cargarPanelAcademico(role);
                mostrarInformacionEnPantalla(role, data);
            }
        });
    }
});

function mostrarInformacionEnPantalla(rol, datos) {
    const dashboard = document.getElementById('dashboard');
    const title = document.getElementById('dashboard-title');
    const content = document.getElementById('academic-data');

    if (!dashboard) return;

    dashboard.style.display = 'block';
    title.textContent = `Panel Académico - Vista (${rol.toUpperCase()})`;

    let html = '<ul style="list-style: none; padding: 0;">';
    datos.forEach(item => {
        html += `<li style="padding: 8px 0; border-bottom: 1px solid #ccc;">`;
        if (item.estudiante) html += `<strong>Estudiante:</strong> ${item.estudiante} | `;
        html += `<strong>Materia:</strong> ${item.materia} | <strong>Nota:</strong> ${item.nota} | <strong>Asistencia:</strong> ${item.asistencia}`;
        html += `</li>`;
    });
    html += '</ul>';

    content.innerHTML = html;
}
