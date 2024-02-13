let tareas = [
    { id: 1, nombre: 'Tarea 1', estado: false },
    { id: 2, nombre: 'Tarea 2', estado: true },
    { id: 3, nombre: 'Tarea 3', estado: false },
    { id: 4, nombre: 'Tarea 4', estado: true },
    { id: 5, nombre: 'Tarea 5', estado: false }
];

labelTotal = document.querySelector('#total');
labelRealizadas = document.querySelector('#realizadas');
labelTotal.innerHTML = tareas.length;
labelRealizadas.innerHTML = tareas.filter(tarea => tarea.estado).length;

botonEliminar = document.querySelector('#eliminar');
botonAgregar = document.querySelector('#agregar');


const agregar = () => {
    const nombre = document.querySelector('#nombre').value;
    const id = tareas.length + 1;
    const tarea = { id, nombre, estado: false };
    tareas.push(tarea);
    render();
    labelTotal.innerHTML = tareas.length;
    labelRealizadas.innerHTML = tareas.filter(tarea => tarea.estado).length;
    document.querySelector('#nombre').value = '';
}
botonAgregar.onclick = agregar;

const eliminar = (id) => {
    tareas = tareas.filter(tarea => tarea.id !== id);
    render();
}

const render = () => {
    const lista = document.querySelector('#tareas');
    lista.innerHTML = '';
    tareas.forEach(tarea => {
        const row = document.createElement('div');
        row.classList.add('row');

        const colId = document.createElement('div');
        colId.classList.add('col');
        colId.innerHTML = tarea.id;

        const colNombre = document.createElement('div');
        colNombre.classList.add('col');
        colNombre.innerHTML = tarea.nombre;

        const colEstado = document.createElement('div');
        colEstado.classList.add('col');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onchange = () => {
            tarea.estado = checkbox.checked;
            labelRealizadas.innerHTML = tareas.filter(tarea => tarea.estado).length;
        }
        checkbox.checked = tarea.estado;
        colEstado.appendChild(checkbox);

        const colAcciones = document.createElement('div');
        colAcciones.classList.add('col');
        const botonEliminar = document.createElement('button');
        botonEliminar.onclick = () => eliminar(tarea.id);
        botonEliminar.innerHTML = 'Eliminar';
        colAcciones.appendChild(botonEliminar);

        row.appendChild(colId);
        row.appendChild(colNombre);
        row.appendChild(colEstado);
        row.appendChild(colAcciones);

        lista.appendChild(row);
    });
}

render();