import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import RadioButton from "./RadioButton";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from '@mui/material/Stack';

const Etapas = [
  { label: "Inicial" },
  { label: "Intermediario" },
  { label: "Avancado" },
  { label: "Finalizado" },
];

export default function Form(props) {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1.9, width: "30ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Stack spacing={1} direction="row">
          <TextField
            id="outlined"
            label="Data"
            type="date"
            defaultValue= {props.data}
            direction="row"
          />
          <TextField
            id="outlined"
            label="Data Final"
            type="date"
            defaultValue={props.DataFinal}
            direction="row"
          />
        </Stack>

        <TextField id="outlined" label="Nome" defaultValue={props.nome} />
        <TextField
          inputProps={{ inputMode: "text", pattern: "*@*" }}
          id="outlined"
          label="E-mail"
          defaultValue={props.email}
          margin="dense"
        />

        <TextField
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          id="outlined"
          label="Telefone"
          defaultValue={props.telefone}
        />
        <RadioButton tipo={props.tipo}/>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={Etapas}
          defaultValue={props.etapa}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Etapa do Pipeline" />
          )}
        />
      </div>
    </Box>
  );
}
