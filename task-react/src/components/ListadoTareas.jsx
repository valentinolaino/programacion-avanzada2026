import Tarea from "./Tarea";

function ListadoTareas({
  tareas,
  onEliminarTarea,
  onFinalizarTarea,
  onEditarTarea,
}) {
  return (
    <section>
      <h2>Listado de Tareas</h2>

      {tareas.length === 0 ? (
        <p>No hay tareas cargadas.</p>
      ) : (
        tareas.map((tarea, index) => (
          <Tarea
            key={index}
            tarea={tarea}
            index={index}
            onEliminarTarea={onEliminarTarea}
            onFinalizarTarea={onFinalizarTarea}
            onEditarTarea={onEditarTarea}
          />
        ))
      )}
    </section>
  );
}

export default ListadoTareas;
