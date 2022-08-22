import * as React from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Home from "../pages/Home";
import Overview from "../pages/Overview";
import Calendar from "../pages/Calendar";

import HomeIcon from "@mui/icons-material/Home";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import MediaCard from "./MediaCard";
import TabPanel from "./TabPanel";
import styles from "./VerticalTabs.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Empresas from "./Empresas";
import Pessoas from "./Pessoas";

function uniqByKeepFirst(array, key) {
  let seen = new Set();
  return array.filter((item) => {
    let k = key(item);
    return seen.has(k) ? false : seen.add(k);
  });
}
function uniqByKeepLast(a, key) {
  return [...new Map(a.map((x) => [key(x), x])).values()];
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const unique = uniqByKeepLast(props.leads, (it) => it.email);

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "auto",
        weight: "auto",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        width={"500px"}
        sx={{
          borderRight: 1,
          borderColor: "divider",
          width: "fixed",
          backgroundColor: "#ffffff",
        }}
      >
        <Tab
          icon={<HomeIcon />}
          iconPosition="start"
          label="HOME"
          {...a11yProps(0)}
        />
        <Tab
          icon={<BackupTableIcon />}
          iconPosition="start"
          label="OVERVIEW"
          {...a11yProps(1)}
        />
        <Tab
          icon={<RecentActorsIcon />}
          iconPosition="start"
          label="PROJETOS"
          {...a11yProps(2)}
        />
        <Tab
          icon={<BusinessIcon />}
          iconPosition="start"
          label="EMPRESAS"
          {...a11yProps(3)}
        />
        <Tab
          icon={<PeopleIcon />}
          iconPosition="start"
          label="PESSOAS"
          {...a11yProps(4)}
        />
        <Tab
          icon={<CalendarMonthIcon />}
          iconPosition="start"
          label="CALENDAR"
          {...a11yProps(5)}
        />

        {/* <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <Container fixed>
          <Home />
        </Container>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Container fixed>
          <Overview />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1 className={styles.lead}>LEAD</h1>
        {unique
          .filter((i) => i.etapa.toString() === "1")
          .map((cliente) => (
            <MediaCard
              key={cliente.id}
              id={cliente.id}
              nome={cliente.nome}
              email={cliente.email}
              telefone={cliente.telefone}
              tipo={cliente.tipo}
              etapa={cliente.etapa}
              data={cliente.data}
              dataFinal={cliente.expectativa}
            />
          ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1 className={styles.negocio}>NEGOCIAÇÃO</h1>
        {unique
          .filter((i) => i.etapa.toString() === "2")
          .map((cliente) => (
            <MediaCard
              key={cliente.id}
              id={cliente.id}
              nome={cliente.nome}
              email={cliente.email}
              telefone={cliente.telefone}
              tipo={cliente.tipo}
              etapa={cliente.etapa}
              data={cliente.data}
              dataFinal={cliente.expectativa}
            />
          ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1 className={styles.contrato}>CONTRATO</h1>
        {unique
          .filter((i) => i.etapa.toString() === "3")
          .map((cliente) => (
            <MediaCard
              key={cliente.id}
              id={cliente.id}
              nome={cliente.nome}
              email={cliente.email}
              telefone={cliente.telefone}
              tipo={cliente.tipo}
              etapa={cliente.etapa}
              data={cliente.data}
              dataFinal={cliente.expectativa}
            />
          ))}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1 className={styles.andamento}>EM ANDAMENTO</h1>
        {unique
          .filter((i) => i.etapa.toString() === "4")
          .map((cliente) => (
            <MediaCard
              key={cliente.id}
              id={cliente.id}
              nome={cliente.nome}
              email={cliente.email}
              telefone={cliente.telefone}
              tipo={cliente.tipo}
              etapa={cliente.etapa}
              data={cliente.data}
              dataFinal={cliente.expectativa}
            />
          ))}
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Empresas/>
      </TabPanel>

      <TabPanel value={value} index={4}>
          <Pessoas/>
      </TabPanel>

      <TabPanel value={value} index={5}>
        <Calendar />
      </TabPanel>
    </Box>
  );
}
