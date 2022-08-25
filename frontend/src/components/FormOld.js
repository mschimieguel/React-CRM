import React, { useState } from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import RadioButton from "./RadioButton";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Etapas = [{ label: 1 }, { label: 2 }, { label: 3 }, { label: 4 }];

export default function Form(props) {
  const [enteredEmail, setEnteredEmail] = useState(props.email);
  const [enteredNome, setEnteredNome] = useState(props.nome);
  const [enteredData, setEnteredData] = useState(props.data);
  const [enteredDataFinal, setEnteredDataFinal] = useState(props.dataFinal);
  
  const [enteredTelefone, setEnteredTelefone] = useState(props.telefone);
  const [enteredEtapa, setEnteredEtapa] = useState(parseInt(props.etapa));

  const nomeChangeHandler = (event) => {
    setEnteredNome(event.target.value);
    console.log(event.target.value);
  };
  const dataChangeHandler = (event) => {
    setEnteredData(event.target.value);
    console.log(event.target.value);
  };
  const dataFinalChangeHandler = (event) => {
    setEnteredDataFinal(event.target.value);
    console.log(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    console.log(event.target.value);
  };
  const telefoneChangeHandler = (event) => {
    setEnteredTelefone(event.target.value);
    console.log(event.target.value);
  };
  const etapaChangeHandler = (event) => {
    setEnteredEtapa(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const changedLead = {
        id: props.id,
        nome: enteredNome,
        email: enteredEmail,
        telefone: enteredTelefone,
        tipo: "Pessoa",
        etapa: enteredEtapa,
        data: new Date(2019, 1, 2),
        dataFinal: new Date(2022, 12, 12),
    };
    props.onSaveChagedLead(changedLead);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1.9, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <form onSubmit={submitHandler}>
        <Stack spacing={1} direction="row">
          <TextField
            id="outlined"
            label="Data"
            type="date"
            defaultValue={props.data}
            direction="row"
            value={enteredData}
            onchange={dataChangeHandler}
          />
          <TextField
            id="outlined"
            label="Data Final"
            type="date"
            defaultValue={props.DataFinal}
            direction="row"
            value={enteredDataFinal}
            onchange={dataFinalChangeHandler}
          />
        </Stack>

        <TextField
         id="outlined"
          label="Nome" 
          defaultValue={props.nome} 
          value={enteredNome}
          onChange={nomeChangeHandler}
         />
        <TextField
          
          id="outlined"
          label="E-mail"
          defaultValue={props.email}
          value={enteredEmail}
          onchange={emailChangeHandler}
        />

        <TextField
          
          id="outlined"
          label="Telefone"
          defaultValue={props.telefone}
          value={enteredTelefone}
          onchange={telefoneChangeHandler}
        />
        <RadioButton tipo={props.tipo} />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Etapas}
          defaultValue={props.etapa}
          sx={{
            "& .MuiTextField-root": { m: 1.9, width: "10ch" },
          }}
          renderInput={(params) => <TextField {...params} label="Etapa" />}
          value={enteredEtapa}
          onchange={etapaChangeHandler}
        />
        <Button
         
          type="submit"
          variant="contained"
          sx={{ width: "4ch" }}
        >
          Ok
        </Button>
      </form>
    </Box>
  );
}
