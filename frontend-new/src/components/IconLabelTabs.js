import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import FacebookIcon from '@mui/icons-material/Facebook';

import Home from '../pages/Home';
import Overview from '../pages/Overview';

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<PhoneIcon />} label="HOME">
        <Home />
      </Tab>
      <Tab icon={<FacebookIcon />} label="OVERVIEW">
        <Overview />
      </Tab>
    </Tabs>
  );
}
