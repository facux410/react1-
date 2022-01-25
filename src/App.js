import React, { useState } from "react";

import "./App.css";

function App() {
  const [options, setOptions] = useState(true);
  const [showpass, setOptions2] = useState(true);
  // const [email, setEmail] = useState("");
  // const [name, setName] = useState("");
  // const [pass, setPass] = useState("");
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  console.log(email, pass, name);

  return (
    <div className="App">
      <h1>Formulario de {options ? "Login" : "register"}</h1>
      <form>
        {!options ? (
          <input
            name="name"
            type="text"
            placeholder="ingrese su nombre"
            value={fields.name}
            onChange={(e) =>
              setFields({ ...fields, [e.target.name]: e.target.value })
            }
          ></input>
        ) : null}

        <input
          type="text "
          placeholder="ingrese su email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          type={showpass ? "password" : "text"}
          placeholder=" password"
          id="pass"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        ></input>
        <button
          type="button"
          onClick={() => {
            setOptions2(!showpass);
          }}
        >
          {showpass ? "mostrar" : "ocultar"} contraseña
        </button>
        <button>login</button>
      </form>
      <p
        onClick={() => {
          setOptions(!options);
        }}
      >
        {options ? "crear una cuenta " : "Ya tienes una cuenta ?"}
      </p>
    </div>
  );
}

export default App;
