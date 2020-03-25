import React from "react";
import { Link } from "react-router-dom";
import { Container, Navigation } from "./styles";
import { MdExpandMore } from "react-icons/md";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  panel: {
    backgroundColor: "#4fb3bf",
    fontSize: "16px",
    display: "flex",
    justifyContent: "space-between"
  }
}));

function Main() {
  const classes = useStyles();
  const Links = [
    {
      id: "08",
      path: "/vila-bonita",
      name: "Vila Bonita"
    },
    {
      id: "09 / 16",
      path: "/jardim-cacula",
      name: "Jardim Caçula"
    },
    {
      id: "10",
      path: "/bosque-santana-santa-rosa",
      name: "Bosque Santana / Santa Rosa"
    },
    {
      id: "12",
      path: "/jardim-dos-eucaliptos",
      name: "Jardim Dos Eucaliptos"
    },
    {
      id: "13",
      path: "/ouro-fino-km-04",
      name: "Ouro Fino / Km 04"
    },
    {
      id: "14",
      path: "/ouro-fino-soma",
      name: "Ouro Fino / Soma"
    },
    {
      id: "15",
      path: "/parque-das-fontes",
      name: "Parque Das Fontes"
    },
    {
      id: "17",
      path: "/pereira-barreto",
      name: "Pereira Barreto"
    },
    {
      id: "18",
      path: "/nossa-senhora-de-fatima",
      name: "Nossa Senhora De Fátima"
    },
    {
      id: "20",
      path: "/jardim-valentina",
      name: "Jardim Valentina"
    },
    {
      id: "21",
      path: "/vila-aurora-hospital",
      name: "Vila Aurora / Hospital"
    },
    {
      id: "21",
      path: "vila-aurora-ponte-seca",
      name: "Vila Aurora / Ponte Seca / Vila Tavolaro"
    },
    {
      id: "22",
      path: "/vila-nova-suissa",
      name: "Vila Nova Suíssa"
    },
    {
      id: "23",
      path: "/jardim-mirante",
      name: "Jardim Mirante"
    },
    {
      id: "23",
      path: "/jardim-marquesa",
      name: "Jardim Marquesa"
    },
    {
      id: "24",
      path: "/cooperhodia",
      name: "Cooperhodia"
    },
    {
      id: "25",
      path: "/vila-sueli",
      name: "Vila Sueli"
    },
    {
      id: "26",
      path: "/recanto-suisso",
      name: "Recanto Suisso"
    },
    {
      id: "27",
      path: "vila-guerda",
      name: "Vila Guerda"
    },
    {
      id: "27",
      path: "/vila-mara",
      name: "Vila Mara"
    },
    {
      id: "27",
      path: "/vila-nova",
      name: "Vila Nova"
    },
    {
      id: "28",
      path: "/jardim-luzo",
      name: "Jardim Luzo"
    },
    {
      id: "29",
      path: "/jardim-ribeirao-pires",
      name: "Jardim Ribeirão Pires"
    },
    {
      id: "30",
      path: "/jardim-serrano",
      name: "Jardim Serrano"
    },
    {
      id: "31",
      path: "/parque-alianca",
      name: "Parque Aliança"
    },
    {
      id: "32",
      path: "/santa-clara-jardim-iramaia",
      name: "Santa Clara / Jardim Iramaia"
    },
    {
      id: "33",
      path: "/santa-luzia",
      name: "Santa Luzia"
    },
    {
      id: "34",
      path: "/santo-bertoldo",
      name: "Santo Bertoldo / Vila Conceição / Hospital"
    },
    {
      id: "35",
      path: "/sao-caetaninho",
      name: "São Caetaninho"
    },
    {
      id: "36",
      path: "/vila-gomes",
      name: "Vila Gomes/Jardim Planalto/Jardim Guanabara"
    }
  ];
  return (
    <>
      <Container>
        <h1>
          Escolha uma linha <br />
          para ver o horário
          <br /> do ônibus
        </h1>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>Escolha</h3>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.panel}>
            <Navigation>
              <h3>Linhas Municipais</h3>
              <List
                component="nav"
                className={classes.root}
                aria-label="contacts"
              >
                {Links.map(link => (
                  <ListItem
                    key={`${link.id}-${link.path}`}
                    button
                    component={Link}
                    to={link.path}
                  >
                    <ListItemText primary={`${link.id} - ${link.name}`} />
                  </ListItem>
                ))}
              </List>
            </Navigation>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Container>
    </>
  );
}

export default Main;
