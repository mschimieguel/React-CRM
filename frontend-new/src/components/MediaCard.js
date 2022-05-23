import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicModal from "./BasicModal";

import Avatar from '@mui/material/Avatar';

import CustomizedDialogs from "./CustomizedDialogs";





export default function MediaCard(props) {
  const year =  props.data.toString().slice(0,4);
  const month =  props.data.toString().slice(5,7);
  const day =  props.data.toString().slice(8,10);
  const mydate = " "+ day + "/" + month + "/" + year + " ";

  const ExpectYear =  props.dataFinal.toString().slice(0,4);
  const ExpectMonth =  props.dataFinal.toString().slice(5,7);
  const ExpectDay =  props.dataFinal.toString().slice(8,10);
  const myExpectDate = " "+ ExpectDay + "/" + ExpectMonth + "/" + ExpectYear + " ";
 
  
 
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

 {/*          <Typography variant="h6" color="text.secondary">
            Descricao: 
                  asnhebfdhsbsdss 
            fuisdcbisdbfisdjcbjdcjdnjd
            efefewfwefwe
              efdfesfsdf efefwf  efe eefefe efsdkdsk ddsjfsfn fdsfsdjf 
              odkfdsfksd 
              fdfd fdf dfd fdfdfdfd  fdfdfdfd df ddfdfdfd
          </Typography> */}
          <Typography variant="h7" color="text.secondary">
            Tipo: {props.tipo}
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
            <p>Reprehenderit eu deserunt enim eu laboris. Ad amet sit culpa veniam est labore </p>
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Button size="small">Share</Button>
          <Button size="small">Learn More</Button> */}
          <CustomizedDialogs/>
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
