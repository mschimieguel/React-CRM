import React, { useState } from 'react';

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
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={telefone}
          placeholder="Mobile Number"
          onChange={(e) => setTelefone(e.target.value)}
        />

        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
  );
}





