import React, { useState } from 'react';

import styles from './FormAdd.module.css';

export default function FormAdd() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
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
          etapa: 2,
          data: new Date(2019, 1, 2),
          expectativa: new Date(2022, 12, 12),          
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
      <form className={styles.form_control}  onSubmit={handleSubmit}>
        <label for="fname">Nome do Lead</label>
        <input
          type="text"
          value={name}
          placeholder="Name"
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
          placeholder="Mobile Number"
          onChange={(e) => setTelefone(e.target.value)}
        />
        <label for="fname">Tipo</label>
        <input
          type="text"
          placeholder="Pessoa ou empresa"
          onChange={(e) => setTelefone(e.target.value)}
        />
        

        <button className={styles.btn}  type="submit">Criar</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
  );
}





