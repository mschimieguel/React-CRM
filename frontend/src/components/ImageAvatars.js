import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import logo from '../static/images/avatar/klysman.jpg';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={5} padding={2}>
      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /> */}
      <Avatar alt="KLYSMAN" src={logo}  />

    </Stack>
  );
}
