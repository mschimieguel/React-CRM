import React, { useState, useEffect } from "react";
import MediaCard from "../components/MediaCard";
import Box from "@mui/material/Box";

import styles from "../nav/VerticalTabs.module.css";

function Projetos() {
  const [Leads, setLeads] = useState([]);

  async function CarregaLeads() {
    const resposta = await fetch("http://127.0.0.1:7776/lead/");
    const LeadsProjetos = await resposta.json();
    setLeads(LeadsProjetos);
  }

  useEffect(() => {
    CarregaLeads();
  }, [Leads]);

  return (
    <Box sx={{ display: "inline-flex" }}>
      <div>
        <h1 className={styles.lead}>LEAD</h1>
        {Leads
          .filter((i) => i.etapa.toString() === "1")
          .map((cliente) => (
            <MediaCard
              key={cliente.id}
              id={cliente.id}
              cliente={cliente}
              dataFinal={cliente.expectativa}
              setLeads={setLeads}
            />
          ))}
      </div>

      <div>
        <h1 className={styles.negocio}>NEGOCIAÇÃO</h1>
        {Leads
          .filter((i) => i.etapa.toString() === "2")
          .map((cliente) => (
            <MediaCard
              key={cliente.id}
              id={cliente.id}
              cliente={cliente}
              dataFinal={cliente.expectativa}
              setLeads={setLeads}
            />
          ))}
      </div>

      <div>
        <h1 className={styles.contrato}>CONTRATO</h1>
        {Leads
          .filter((i) => i.etapa.toString() === "3")
          .map((cliente) => (
            <MediaCard
              key={cliente.id}
              id={cliente.id}
              cliente={cliente}
              dataFinal={cliente.expectativa}
              setLeads={setLeads}
            />
          ))}
      </div>

      <div>
        <h1 className={styles.andamento}>EM ANDAMENTO</h1>
        {Leads
          .filter((i) => i.etapa.toString() === "4")
          .map((cliente) => (
            <MediaCard
              key={cliente.id}
              id={cliente.id}
              cliente={cliente}
              dataFinal={cliente.expectativa}
              setLeads={setLeads}
            />
          ))}
      </div>
    </Box>
  );
}
export default Projetos;
