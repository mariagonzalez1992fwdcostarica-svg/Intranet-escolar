// Módulo Académico: Calificaciones y Asistencia
const mockAcademicData = [
    { id: 1, estudiante: "Estudiante A", materia: "Matemáticas", nota: 85, asistencia: "92%" },
    { id: 2, estudiante: "Estudiante B", materia: "Historia", nota: 90, asistencia: "98%" }
];

function cargarPanelAcademico(rol) {
    console.log(`Cargando vista académica para el rol: ${rol}`);

    // Si es docente: permite ver y editar notas
    if (rol === 'docente' || rol === 'admin') {
        return mockAcademicData; // Acceso completo a registros
    }

    // Si es estudiante/familia: vista restringida (solo sus propios datos, sin PII expuesta)
    if (rol === 'estudiante') {
        return mockAcademicData.map(item => ({
            materia: item.materia,
            nota: item.nota,
            asistencia: item.asistencia
        }));
    }
}