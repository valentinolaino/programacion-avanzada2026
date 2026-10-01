import { useState } from "react";
import Tarea from "./Tarea";

function ListadoTareas({
  tareas,
  onEliminarTarea,
  onFinalizarTarea,
  onEditarTarea,
}) {
  const [filtro, setFiltro] = useState("Todas");

  const tareasFiltradas =
    filtro === "Todas"
      ? tareas
      : tareas.filter((tarea) => {
          if (filtro === "Pendientes") {
            return tarea.estado === "Pendiente";
          }

          if (filtro === "En progreso") {
            return tarea.estado === "En progreso";
          }

          if (filtro === "Finalizadas") {
            return tarea.estado === "Finalizada";
          }

          return true;
        });

  const cantidadPendientes = tareas.filter(
    (tarea) => tarea.estado === "Pendiente",
  ).length;

  const cantidadEnProgreso = tareas.filter(
    (tarea) => tarea.estado === "En progreso",
  ).length;

  const cantidadFinalizadas = tareas.filter(
    (tarea) => tarea.estado === "Finalizada",
  ).length;

  return (
    <section>
      <h2>Ver tareas</h2>

      <div className="filtros-tareas">
        <button
          type="button"
          className={filtro === "Todas" ? "filtro activo" : "filtro"}
          onClick={() => setFiltro("Todas")}
        >
          Todas ({tareas.length})
        </button>

        <button
          type="button"
          className={filtro === "Pendientes" ? "filtro activo" : "filtro"}
          onClick={() => setFiltro("Pendientes")}
        >
          Pendientes ({cantidadPendientes})
        </button>

        <button
          type="button"
          className={filtro === "En progreso" ? "filtro activo" : "filtro"}
          onClick={() => setFiltro("En progreso")}
        >
          En progreso ({cantidadEnProgreso})
        </button>

        <button
          type="button"
          className={filtro === "Finalizadas" ? "filtro activo" : "filtro"}
          onClick={() => setFiltro("Finalizadas")}
        >
          Finalizadas ({cantidadFinalizadas})
        </button>
      </div>

      {tareasFiltradas.length === 0 ? (
        <p>No hay tareas para este filtro.</p>
      ) : (
        tareasFiltradas.map((tarea) => {
          const index = tareas.indexOf(tarea);

          return (
            <Tarea
              key={index}
              tarea={tarea}
              index={index}
              onEliminarTarea={onEliminarTarea}
              onFinalizarTarea={onFinalizarTarea}
              onEditarTarea={onEditarTarea}
            />
          );
        })
      )}
    </section>
  );
}

export default ListadoTareas;
