import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Form from "./Form";
import "./BasicModal.css";
import FormAdd from "./FormAdd";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 900,
  bgcolor: "background.paper",
  boxShadow: 24,
  radius: 20,

  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const saveChangedLeadHandler = (enteredChangedLead) => {
    const LeadData = {
      ...enteredChangedLead,
    };
    props.onChangeLead(LeadData);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        {(() => {
          // eslint-disable-next-line default-case
          switch (props.mode) {
            case "add":
              return "Adicionar";
            case "modify":
              return "editar";
            default:
              return "ERRO insira um modo para o BasicModal";
          }
        })()}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h7" component="h2">
            PROJETO
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Para adicionar leads rapidamente, clique no botão Adicionar lead na
            caixa de entrada de leads. Um lead sempre precisará estar vinculado
            a uma pessoa ou empresa.
            
          
          </Typography>

          <FormAdd
            mode="modify"
            key={props.id}
            nome={props.nome}
            email={props.email}
            telefone={props.telefone}
            tipo={props.tipo}
            etapa={props.etapa}
            data={props.data}
            expectativa={props.dataFinal}
            refreshCard={props.refreshCard}
            changeTab={props.changeTab}
          />

          {/*
         <Form
            ClassName="Form"
            key={props.id}
            nome={props.nome}
            email={props.email}
            telefone={props.telefone}
            tipo={props.tipo}
            etapa={props.etapa}
            data={props.data}
            dataFinal={props.dataFinal}
            onSaveChagedLead = {saveChangedLeadHandler}
      />*/}
        </Box>
      </Modal>
    </div>
  );
}
