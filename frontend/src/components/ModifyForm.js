import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import styles from "./FormAdd.module.css";




export default function ModifyForm(props) {

  const [name, setName] = useState(props.cliente.nome);
  const [email, setEmail] = useState(props.cliente.email);
  const [telefone, setTelefone] = useState(props.cliente.telefone);
  const [etapa, setEtapa] = useState(props.cliente.etapa);
  const [tipo, setTipo] = useState(props.cliente.tipo);
  

  const [data, setData] = useState(props.data);
  const [expectativa, setExpectativa] = useState(props.expectativa);

  const [message, setMessage] = useState("");

  function refresh(){
    //props.refreshCard();
    //props.onClose();
  }
  
    

  function radioHandler(){
    if (tipo === "Pessoa" )
      setTipo("Empresa");
    if (tipo === "Empresa" )
      setTipo("Pessoa");
    
}


  let handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let res = await fetch("http://127.0.0.1:7776/lead/", {
        method: "POST",
        body: JSON.stringify({
          id: props.id,
          nome: name,
          email: email,
          telefone: telefone,
          tipo: tipo,
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
    await props.carregaLeads();
    props.onClose();
    //  props.refreshCard();


  };

  return (
    <form className={styles.form_control} onSubmit={handleSubmit}>
      <label htmlFor="fname">Data</label>
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <label htmlFor="fname">Expectativa</label>
      <input
        type="date"
        value={expectativa}
        onChange={(e) => setExpectativa(e.target.value)}
      />

      <label htmlFor="fname">Nome do Lead</label>

      <input
        type="text"
        value={name}
        placeholder='Nome do Lead'
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="fname">E-mail</label>
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="fname">Telefone</label>
      <input
        type="text"
        value={telefone}
        defaultValue={props.telefone}
        placeholder="Mobile Number"
        onChange={(e) => setTelefone(e.target.value)}
      />
      <label htmlFor="fname">Etapa</label>
      <select
        htmlFor="fname"
        id="Etapa"
        value={etapa}
        defaultValue={props.etapa}
        onChange={(e) => setEtapa(e.target.value)}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>

      <label htmlFor="fname">Tipo</label>
      <div onChange={(e) => setTipo(e.target.value)} >
        <input type="radio" value="Pessoa" id="Pessoa" name="drone" defaultChecked={ tipo == "Pessoa"? true: false}/>
        <label className="Tipo" htmlFor="html">Pessoa </label>
        <input type="radio" value="Empresa" id="Empresa" name="drone" defaultChecked={ tipo == "Empresa"? true: false}/>
        <label className="Tipo" htmlFor="html">Empresa</label>
      </div>
      <br />
      <button className={styles.btn} onClick={refresh}  type="submit">
        Salvar
      </button>

      <div className="message">{message ? <p>{message}</p> : null}</div>
    </form>
  );
}
