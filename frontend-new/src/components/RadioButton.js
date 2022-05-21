import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButton() {
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Tipo</FormLabel>
      <RadioGroup
        row
        aria-labelledby="empresa-pessoa"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Empresa" control={<Radio />} label="Empresa" />
        <FormControlLabel value="Pessoa" control={<Radio />} label="Pessoa" />
        
      </RadioGroup>
    </FormControl>
  );      
}
