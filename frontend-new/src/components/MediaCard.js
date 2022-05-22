import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicModal from "./BasicModal";

import Avatar from '@mui/material/Avatar';

export default function MediaCard(props) {
  const ChangedLeadHandler = (enteredChangedLead) => {
    const LeadData = {
      ...enteredChangedLead,
    };
    props.onChangeLead(LeadData);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345, boxShadow: 5, marginTop: 2, padding:2 }}>
        {/*       <CardMedia
          component="img"
          height="140"
          image="../static/rashed-alakroka-cc.jpg"
          alt="green iguana"
        /> */}
        <CardContent>
        <Avatar variant="rounded" src="avatar1.jpg"   />
          <Typography gutterBottom variant="h5" component="div">
            {props.nome}
          </Typography>

          {/*
            <Typography variant="h7" color="text.secondary">
            ID: {"" + props.id}
          </Typography>
            <Typography variant="h6" color="text.secondary">
            Telefone: {props.telefone}
          </Typography>

             <Typography variant="h6" color="text.secondary">
            e-mail: {props.email}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Etapa: {props.etapa}
          </Typography>
            */}

          <Typography variant="h6" color="text.secondary">
            Descricao: 
                  asnhebfdhsbsdss 
            fuisdcbisdbfisdjcbjdcjdnjd
            efefewfwefwe
              efdfesfsdf efefwf  efe eefefe efsdkdsk ddsjfsfn fdsfsdjf 
              odkfdsfksd 
              fdfd fdf dfd fdfdfdfd  fdfdfdfd df ddfdfdfd
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Tipo: {props.tipo}
          </Typography>

          <Typography variant="h6" color="text.secondary">
            
            data: {props.data.toString()}
            <br />
          </Typography>
          <Typography variant="h7" color="text.secondary">
            Expectativa: {props.dataFinal.toString()}
            <br />
            <br />
          </Typography>
          <Typography variant="h7" color="text.secondary">
            <h7>Descrição:</h7>
            <p>Reprehenderit eu deserunt enim eu laboris. Ad amet sit culpa veniam est labore </p>
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button>
          <Button size="small">Learn More</Button> */}
          <BasicModal 
            mode="modify"
            key={props.id}
            nome={props.nome}
            email={props.email}
            telefone={props.telefone}
            tipo={props.tipo}
            etapa={props.etapa}
            data={props.data}
            dataFinal={props.dataFinal}
            onChangeLead={ChangedLeadHandler}
          />
        </CardActions>
      </Card>
    </div>
  );
}
