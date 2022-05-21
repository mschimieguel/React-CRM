import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicModal from "./BasicModal";

export default function MediaCard(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 345, boxShadow: 5, marginTop: 2 }}>
        {/*       <CardMedia
          component="img"
          height="140"
          image="../static/rashed-alakroka-cc.jpg"
          alt="green iguana"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {props.nome}
          </Typography>

          {/*
            <Typography variant="h6" color="text.secondary">
            ID: {"" + props.id}
          </Typography>
            <Typography variant="h6" color="text.secondary">
            Telefone: {props.telefone}
          </Typography>

             <Typography variant="h6" color="text.secondary">
            e-mail: {props.email}
          </Typography>
            */}

          <Typography variant="h6" color="text.secondary">
            Tipo: {props.tipo}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Etapa: {props.etapa}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            data: {props.data.toString()}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Expectativa: {props.dataFinal.toString()}
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
          />
        </CardActions>
      </Card>
    </div>
  );
}
