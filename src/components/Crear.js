import React, { useState } from "react";
import { Link } from "react-router-dom";

function Crear() {
  const [newEmpleado, setNewEmpleado] = useState({ nombre: "", correo: "" });

  var cambioDeValorNombre = (e) => {
    setNewEmpleado({ correo: newEmpleado.correo, nombre: e.target.value });
    console.log(newEmpleado);
  };

  var cambioDeValorCorreo = (e) => {
    setNewEmpleado({ nombre: newEmpleado.nombre, correo: e.target.value });
    console.log(newEmpleado);
  };

  var enviarDatos = (e) => {
    e.preventDefault();

    var datosDeEnvio = {
      nombre: newEmpleado.nombre,
      correo: newEmpleado.correo,
    };
    console.log(datosDeEnvio);

    fetch("http://localhost:3000/empleados/", {
      method: "POST",
      body: JSON.stringify(datosDeEnvio),
      mode: "no-cors",
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  return (
    <>
      <div className="card">
        <div className="card-header">Empleados</div>
        <div className="card-body">
          <form onSubmit={enviarDatos}>
            <div className="form-group">
              <label htmlFor="">Nombre:</label>
              <input
                onChange={cambioDeValorNombre}
                value={newEmpleado.nombre}
                type="text"
                name="nombre"
                id="nombre"
                className="form-control"
                placeholder=""
                aria-describedby="helpId"
              />
              <small id="helpId" className="text-muted">
                Escribe el nombre del empleado
              </small>
            </div>

            <div className="form-group">
              <label htmlFor="">Correo:</label>
              <input
                type="text"
                value={newEmpleado.correo}
                onChange={cambioDeValorCorreo}
                name="correo"
                id="correo"
                className="form-control"
                placeholder=""
                aria-describedby="helpId"
              />
              <small id="helpId" className="text-muted">
                Escribe el email del empleado
              </small>
            </div>

            <div className="btn-group" role="group" aria-label="">
              <button type="submit" className="btn btn-success">
                Agregar nuevo empleado
              </button>
              <Link to={"/"} type="button" className="btn btn-danger">
                Cancelar
              </Link>
            </div>
          </form>
        </div>
        <div className="card-footer text-muted"></div>
      </div>
    </>
  );
}

export default Crear;
