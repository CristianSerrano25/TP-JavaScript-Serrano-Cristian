// Función para validar nombres de tareas
function nombreValido(nombreTarea) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(nombreTarea);
}

// Función para agregar una tarea
function agregarTarea(tareas, nombreTarea) {
    if (nombreValido(nombreTarea)) {
        if (!tareas.includes(nombreTarea)) {
            tareas.push(nombreTarea);
            alert("Tarea agregada con éxito.");
        } else {
            alert("La tarea ya existe en la lista.");
        }
    } else {
        alert("Ingrese un nombre válido (sin caracteres especiales ni espacios).");
    }
}

// Función para listar tareas
function listarTareas(tareas) {
    if (tareas.length === 0) {
        alert("No hay tareas.");
    } else {
        alert("Tareas: " + tareas.join(", "));
    }
}

// Función para editar una tarea
function editarTarea(tareas, nombreTarea) {
    if (tareas.includes(nombreTarea)) {
        let nuevoNombre = prompt("Ingrese el nuevo nombre de la tarea");
        if (nombreValido(nuevoNombre)) {
            if (!tareas.includes(nuevoNombre)) {
                tareas[tareas.indexOf(nombreTarea)] = nuevoNombre;
                alert(`Tarea editada con éxito\n${nombreTarea} -> ${nuevoNombre}`);
            } else {
                alert("La tarea ya existe en la lista.");
            }
        } else {
            alert("Ingrese un nombre válido (sin caracteres especiales ni espacios).");
        }
    } else {
        alert("La tarea no existe en la lista.");
    }
}

// Función para eliminar una tarea
function eliminarTarea(tareas, nombreTarea) {
    if (tareas.includes(nombreTarea)) {
        tareas.splice(tareas.indexOf(nombreTarea), 1);
        alert(`Tarea eliminada con éxito\n->${nombreTarea}`);
    } else {
        alert("La tarea no existe en la lista.");
    }
}

// Declaración de variables
let tareas = [];
let opcion;

// Bucle para el menu
while (true) {
    opcion = parseInt(prompt(`¡Bienvenido! Elija la tarea a realizar:
        1 - Agregar Tarea
        2 - Listar Tareas
        3 - Editar Tarea
        4 - Eliminar Tarea
        5 - Salir`));

    if (isNaN(opcion) || opcion < 1 || opcion > 5) {
        alert("Ingrese un valor del 1 al 5");
        continue;
    }

    switch (opcion) {
        case 1:
            agregarTarea(tareas, prompt("Ingresa el nombre de la tarea"));
            break;
        case 2:
            listarTareas(tareas);
            break;
        case 3:
            alert(tareas);
            editarTarea(tareas, prompt("Ingrese el nombre de la tarea a editar"));
            break;
        case 4:
            alert(tareas);
            eliminarTarea(tareas, prompt("Ingrese el nombre de la tarea a eliminar"));
            break;
        case 5:
            alert("Gracias por utilizar el programa");
            exit();
    }
}
