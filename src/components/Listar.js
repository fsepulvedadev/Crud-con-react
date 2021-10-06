import React from "react";
import { Link } from "react-router-dom";

class Listar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { datosCargados: false, empleados: [] };
  }

  cargarDatos() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((datos) => {
        console.log(datos);
        this.setState({ datosCargados: true, empleados: datos });
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.cargarDatos();
  }

  render() {
    const { datosCargados, empleados } = this.state;
    if (!datosCargados) {
      return <div>Cargando...</div>;
    } else {
      return (
        <>
          <div className="card">
            <div className="card-header">
              <Link to={"/crear"} className="btn btn-success">
                Agregar nuevo empleado
              </Link>
            </div>
            <div className="card-body">
              <h4>Lista de Empleados</h4>
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>nombre</th>
                    <th>Correo</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {empleados.map((empleado) => (
                    <tr key={empleado.id}>
                      <td>{empleado.id}</td>
                      <td>{empleado.name}</td>
                      <td>{empleado.email}</td>
                      <td>
                        <div className="btn-group" role="group" aria-label="">
                          <Link to={"/editar"} className="btn btn-warning">
                            Editar
                          </Link>
                          <Link to={""} className="btn btn-danger">
                            Borrar
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="card-footer text-muted">Footer</div>
          </div>
        </>
      );
    }
  }
}

export default Listar;
