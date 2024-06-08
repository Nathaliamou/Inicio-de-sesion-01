import { useState } from "react";
import { usuarios } from "../../database/dataBase.jsx";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Registro = () => {
  const [getUsuario, setUsuario] = useState("");
  const [getContrasena, setContrasena] = useState("");
  const [getCorreo, setCorreo] = useState("");
  const redireccion = useNavigate();
  function buscarUsuario() {
    return usuarios.some((usuario) => usuario.user === getUsuario);
  }
  function agregarUsuario() {
    
    let usuario = {
      user: getUsuario,
      contrasena: getContrasena,
      correo: getCorreo,
    };
    usuarios.push(usuario);
  }
  const registrarUsuario = () => {
    if (buscarUsuario()) {
      console.log("Usuario ya existe en la base de datos...");
    } else {
      agregarUsuario();
      console.log(usuarios);
      redireccion("/");
    }
  };
  return (
    <form>
      <div className="container fadeInAnimation">
        <h2>Iniciar Sesión</h2>
        <div className="input-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            onChange={(e) => {
              setUsuario(e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setContrasena(e.target.value);
            }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              setCorreo(e.target.value);
            }}
          />
        </div>
        <section className="botones">
          <button onClick={registrarUsuario} type="button" className="btn">
            Iniciar Sesión
          </button>
        </section>
      </div>
    </form>
  );
};
export default Registro;
