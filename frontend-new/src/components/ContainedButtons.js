import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import styles from './ContainedButtons.module.css';

export default function ContainedButtons() {
  return (
    <Stack direction="row" spacing={2}>
        <input></input>
      <Button className={styles.BottonColor} variant="contained">ADD LEAD</Button>
    </Stack>
  );
}
