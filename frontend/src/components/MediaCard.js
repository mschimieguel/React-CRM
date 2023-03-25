import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ModifyModal from "./ModifyModal";

import Avatar from "@mui/material/Avatar";

import CustomizedDialogs from "./CustomizedDialogs";

export default function MediaCard(props) {
  const year = props.cliente.data.toString().slice(0, 4);
  const month = props.cliente.data.toString().slice(5, 7);
  const day = props.cliente.data.toString().slice(8, 10);
  const mydate = " " + day + "/" + month + "/" + year + " ";
  const backendDate = "" + year + "-" + month + "-" + day;

  const ExpectYear = props.dataFinal.toString().slice(0, 4);
  const ExpectMonth = props.dataFinal.toString().slice(5, 7);
  const ExpectDay = props.dataFinal.toString().slice(8, 10);
  const myExpectDate =
    " " + ExpectDay + "/" + ExpectMonth + "/" + ExpectYear + " ";
  const backendExpectDate =
    "" + ExpectYear + "-" + ExpectMonth + "-" + ExpectDay;

  const ChangedLeadHandler = (enteredChangedLead) => {
    const LeadData = {
      ...enteredChangedLead,
    };

    props.onChangeLead(LeadData);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345, boxShadow: 5, marginTop: 2, padding: 2 }}>
        <CardContent>
          <Avatar variant="rounded" src="avatar1.jpg" />

          <Typography gutterBottom variant="h5" component="div">
            {props.cliente.nome}
          </Typography>

          <Typography variant="h7" color="text.secondary">
            Tipo: {props.cliente.tipo}
            <br />
          </Typography>

          <Typography variant="h7" color="text.secondary">
            Data: {mydate}
            <br />
          </Typography>
          <Typography variant="h7" color="text.secondary">
            Expectativa: {myExpectDate}
            <br />
            <br />
          </Typography>
          <Typography variant="h7" color="text.secondary">
            <h7>Descrição:</h7>
            <p>
              Reprehenderit eu deserunt enim eu laboris. Ad amet sit culpa
              veniam est labore{" "}
            </p>
          </Typography>
        </CardContent>
        <CardActions>
          <CustomizedDialogs />
          <ModifyModal
            mode="modify"
            key={props.cliente.key}
            id={props.cliente.id}
            cliente={props.cliente}
           
            data={backendDate}
            dataFinal={backendExpectDate}
            carregaLeads={props.carregaLeads}
            onChangeLead={ChangedLeadHandler}
          />
        </CardActions>
      </Card>
    </div>
  );
}
