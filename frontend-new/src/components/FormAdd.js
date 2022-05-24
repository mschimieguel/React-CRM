import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./FormAdd.module.css";

export default function FormAdd(props) {
  const [name, setName] = useState(props.nome);
  const [email, setEmail] = useState(props.email);
  const [telefone, setTelefone] = useState(props.telefone);
  const [etapa, setEtapa] = useState(props.etapa);
  const [tipo, setTipo] = useState(props.tipo);

  const [data, setData] = useState(props.data);
  const [expectativa, setExpectativa] = useState(props.expectativa);

  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:7776/lead/", {
        method: "POST",
        body: JSON.stringify({
          id: -1,
          nome: name,
          email: email,
          telefone: telefone,
          tipo: "Pessoa",
          etapa: etapa,
          data: data,
          expectativa: expectativa,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setEmail("");
        setTelefone("");
        setMessage("PROJETO adicionado com sucesso!");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className={styles.form_control} onSubmit={handleSubmit}>
      <label for="fname">Data</label>
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <label for="fname">Expectativa</label>
      <input
        type="date"
        value={expectativa}
        onChange={(e) => setExpectativa(e.target.value)}
      />

      <label for="fname">Nome do Lead</label>

      <input
        type="text"
        value={name}
        placeholder={props.nome}
        onChange={(e) => setName(e.target.value)}
      />
      <label for="fname">E-mail</label>
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label for="fname">Telefone</label>
      <input
        type="text"
        value={telefone}
        defaultValue={props.telefone}
        placeholder="Mobile Number"
        onChange={(e) => setTelefone(e.target.value)}
      />
      <label for="fname">Etapa</label>
      <select
        for="fname"
        id="Etapa"
        value={props.etapa}
        onChange={(e) => setEtapa(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <label for="fname">Tipo</label>
      <div>
        <input type="radio" value="Pessoa" id="Pessoa" name="drone" checked/>
        <label for="html">Pessoa   </label>
        <input type="radio" value="Empresa" id="Empresa" name="drone" />
        <label for="html">Empresa</label>
      </div>
      <br />
      <button onClick={props.refreshCard} className={styles.btn} type="submit">
        Criar
      </button>

      <div className="message">{message ? <p>{message}</p> : null}</div>
    </form>
  );
}
