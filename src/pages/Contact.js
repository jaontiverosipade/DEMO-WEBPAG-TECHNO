import React from 'react';

const Contacto = () => (
    <>
        <div className="container">
        <section className="hero">
          <div className="container">
            <h1 className="hero-title">Contactanos</h1>
        </div>
        </section>
            <h1>Esbríbenos!</h1>
            <img src="https://1.bp.blogspot.com/-mipsxk4T4ck/XI1nV4H0ZKI/AAAAAAAAGs4/Q4ZLvcbXDN0ojNAHfkGf1A6M_vq1QvblQCEwYBhgL/s1600/ppica.jpg" width="380px" alt="logo"></img>
            <p></p>
            <input></input><strong>Nombre</strong>
            <p></p>
            <input></input><strong>Correo</strong>
            <p></p>
            <textarea name="comentarios" rows="10" cols="40">Escribe aquí tus comentarios</textarea>
            <button><strong>Enviar</strong></button>
            
        </div>
    </>
);

export default Contacto;