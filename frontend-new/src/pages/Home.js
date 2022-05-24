import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';

import styles from "./Home.module.css";

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import logo from '../static/gifs/69395-man-working-on-system.gif';
import logo2 from '../static/gifs/72686-company-growth.gif';
import logo3 from '../static/gifs/72309-website-qa.gif';
import logo4 from '../static/gifs/71440-dashboard.gif';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
        <div>
          <h1 className={styles.titulo} >Objetivos para a qualidade do software e da interface</h1>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

          <Grid item xs={6}  >
            <img className={styles.imgs} src={logo} alt="loading..."/>

            <Item className={styles.texto2} >Facilidade de aprendizado <b>(learnability)</b>: quanto tempo e esforço é necessário para que o usuário aprenda a manipular o software;</Item>
          </Grid>


          <Grid item xs={6}>
          <img className={styles.imgs}  src={logo2} alt="loading..." />
            <Item className={styles.texto2}>Facilidade de recordação <b>(memorability)</b>: quanto tempo e esforço será demandado do usuário para lembrar como manipular o software;</Item>
          </Grid>
          <Grid item xs={6}>
          <img className={styles.imgs}  src={logo3} alt="loading..." />
            <Item className={styles.texto2}>Eficiência <b>(efficiency)</b>: quanto tempo e esforço é necessário para que o usuário conclua uma tarefa corretamente, com o auxílio do software;</Item>
          </Grid>
          <Grid item xs={6}>
          <img  className={styles.imgs}  src={logo4} alt="loading..." />
            <Item className={styles.texto2}>Satisfação do usuário <b>(satisfaction)</b>: uma avaliação subjetiva que reflete o efeito sentimental e emocional que a utilização do software estimulou sobre o usuário.</Item>
          </Grid>
        </Grid>
        </div>

    
  );
}
