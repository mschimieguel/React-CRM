import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Form from "./Form";
import "./BasicModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const saveChangedLeadHandler = (enteredChangedLead) => {
    const LeadData = {
      ...enteredChangedLead
    };
    props.onChangeLead(LeadData);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        {(() => {
          switch (props.mode) {
            case "add":
              return "Adicionar";
            case "modify":
              return "Mais Info";
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>

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
          />

          
        </Box>
      </Modal>
    </div>
  );
}
