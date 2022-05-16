import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import BasicList from './BasicList';
import BasicModal from './BasicModal';
import SearchAppBar from './SearchAppBar';
import MediaCard from './MediaCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <BasicModal>xs=8</BasicModal>
        </Grid>
        <Grid item xs={9}>
          <BasicList>xs=4</BasicList>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <BasicModal>xs=8</BasicModal>
        </Grid>
        <Grid item xs={10} md={3}>
          <SearchAppBar>xs=4</SearchAppBar>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <MediaCard>xs=8</MediaCard>
        </Grid>

      </Grid>

      

      
    </Box>
  );
}
