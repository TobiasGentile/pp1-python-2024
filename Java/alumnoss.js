const formulario = document.getElementById('formulario');
const tablaCalificaciones = document.getElementById('tabla-calificaciones').querySelector('tbody');
const botones = document.getElementById('botones').querySelectorAll('button');

let estudiantes = []; // Array para almacenar datos de los estudiantes

formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const calificacion = parseFloat(document.getElementById('calificacion').value);

  if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
    alert('Calificación inválida. Debe ser un número entre 0 y 10.');
    return;
  }

  estudiantes.push({ nombre, calificacion });
  actualizarTablaCalificaciones();
  limpiarFormulario();
});

function actualizarTablaCalificaciones() {
  tablaCalificaciones.innerHTML = ''; // Limpiar tabla antes de agregar nuevas filas

  estudiantes.forEach((estudiante) => {
    const fila = tablaCalificaciones.insertRow();
    const celdaNombre = fila.insertCell();
    const celdaCalificacion = fila.insertCell();

    celdaNombre.textContent = estudiante.nombre;
    celdaCalificacion.textContent = estudiante.calificacion;
  });
}

function limpiarFormulario() {
  document.getElementById('nombre').value = '';
  document.getElementById('calificacion').value = '';
}

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    switch (boton.id) {
      case 'btn-promedio':
        calcularPromedio();
        break;
      case 'btn-calificacion-mas-alta':
        mostrarCalificacionMasAlta();
        break;
      case 'btn-calificacion-mas-baja':
        mostrarCalificacionMasBaja();
        break;
      case 'btn-filtrar-aprobados':
        filtrarAprobados();
        break;
      case 'btn-filtrar-reprobados':
        filtrarReprobados();
        break;
    }
  });
});

function calcularPromedio() {
  if (estudiantes.length === 0) {
    alert('No hay estudiantes registrados para calcular el promedio.');
    return;
  }

  const sumaCalificaciones = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.calificacion, 0);
  const promedio = sumaCalificaciones / estudiantes
}
