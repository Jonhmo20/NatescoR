// Importacion de funcion useState, imagen y estilo del proyecto
import { useState } from "react";
import Imagen1 from '../assets/Imagen1.jpg';
import './InicioSesion.css';

//componente como funcion de React 
function InicioSesion () {
return (
      <div>
          <header className="header">
             <figure className="contenedor">
                 <img src={Imagen1} alt="" className="logo" />
             </figure>
          </header>
          <main>
            <form action="" className="formulario">
                <h1 className="titulo">Inciar sesión</h1>
                <hr/>
                <label htmlFor="" className="label">Correo</label>
                <input type="text" className="input" placeholder="ejemplo@hotmail.com" required/>

                <label htmlFor="" className="label">Contraseña</label>
                <input type="password" className="input1" placeholder="********"/>

                <button className="button-a">Iniciar</button>
            </form>

                <div className="contenedor__links">
                    <a href="registro.html" className="hipervinculos">¿No tienes cuenta?</a>
                    <a href="restablecer.html" className="hipervinculos">Se te olvido la contraseña</a>
                </div>
         </main>
         <script type="module" src="./modules/script.js"></script>
      </div>
       );

}
//exportacion de componente
export default InicioSesion;