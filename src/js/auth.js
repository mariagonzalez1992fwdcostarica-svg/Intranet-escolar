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
