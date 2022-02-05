import React, { useState,useEffect, useRef } from "react";

const Timer = () => {

  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState("Contador");

  const handleToggle = () => {
    setActivo(!activo);
  }

  const handleReset = () => {
    setSegundos(0);
    setActivo(false);
    if(tipo === "Cuenta Regresiva") myRef.current.value = 0;
  }

  const handleTipo = () => {
    tipo === 'Contador'? setTipo('Cuenta Regresiva') : setTipo('Contador');
  }

  const handleInput = () => {
    let ref = myRef.current.value
    setSegundos(ref);
  }

  const myRef = useRef(null);

  useEffect(() => {
    if(activo && tipo === "Contador"){
      var s = setInterval(() => {
        setSegundos(segundos + 1)
      }, 1000);
    }

    if(activo && tipo === "Cuenta Regresiva"){
      var s = setInterval(() => {
        setSegundos(segundos - 1)
      }, 1000);
    }

    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(s);
    }

    if (!activo && segundos !== 0 && tipo === 'Cuenta Regresiva') {
      clearInterval(s);
    }

    if ( segundos === 0 && tipo === 'Cuenta Regresiva') {
      clearInterval(s);
    }

    return () => {
      clearInterval(s);
    };
  },[activo, segundos, tipo]);

  return (
    <div className="app">
      <div className="time">{segundos}s</div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            activo ? "active" : "inactive"
          }`}
          onClick={() => handleToggle()}
        >
          {activo ? "Pausa" : "Inicio"}
        </button>
        <button className="button-secondary" onClick={() => handleReset()}>Reset</button>
      </div>
      <button className="button" onClick={() => handleTipo()}>{tipo}</button>
      {tipo === "Cuenta Regresiva" && (
        <input
          type="number"
          placeholder="Ingresa Segundos"
          autoComplete="off"
          ref={myRef}
          onChange={() => handleInput()}
        />
      )}
    </div>
  );
};

export default Timer;
