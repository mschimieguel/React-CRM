import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>Facilidade de aprendizado (learnability): quanto tempo e esforço é necessário para que o usuário aprenda a manipular o software;</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Facilidade de recordação (memorability): quanto tempo e esforço será demandado do usuário para lembrar como manipular o software;</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Eficiência (efficiency): quanto tempo e esforço é necessário para que o usuário conclua uma tarefa corretamente, com o auxílio do software;</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>Satisfação do usuário (satisfaction): uma avaliação subjetiva que reflete o efeito sentimental e emocional que a utilização do software estimulou sobre o usuário.</Item>
          </Grid>
        </Grid>

    
  );
}
