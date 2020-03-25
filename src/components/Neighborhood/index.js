import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import data from "../../data/data.json";
import {
  Wrapper,
  Type,
  Price,
  Place,
  Hour,
  Section,
  OpenItinerario,
  ContentItinerario
} from "./styles";

import { MdExpandMore, MdUndo, MdSwapVert } from "react-icons/md";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Notification from "../Notification";

import SrcImage from "../../images/image.png";

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

function Neighborhood(props) {
  const classes = useStyles();
  const { name } = props;
  const [showItinerario, setShowItinerario] = useState({ open: false });
  const ogGraph = {
    ogDescription: "Confira aqui o horário do ônibus",
    ogUrl: "http://localhost:3000",
    ogType: "site"
  };

  function openItinerario() {
    if (!showItinerario) {
      setShowItinerario(true);
    } else {
      setShowItinerario(false);
    }
  }

  return (
    <>
      {data[name].map(
        (
          {
            id,
            type,
            name,
            slug,
            price,
            info,
            mondayToSaturday,
            SundaysAndHolidays,
            saturday,
            mondayToFriday,
            itinerary
          },
          index
        ) => (
          <div key={id}>
            <Helmet>
              <title>{`Horário do Ônibus ${name}`}</title>
              <meta
                name="description"
                content={`Confira aqui o horário do ônibus ${name}`}
              />
              <meta property="og:url" content={`${ogGraph.ogUrl}/${slug}`} />
              <meta property="og:type" content={ogGraph.ogType} />
              <meta property="og:title" content={name} />
              <meta
                property="og:description"
                content={`${ogGraph.ogDescription} ${name}`}
              />
              <meta property="og:image" content={SrcImage} />
            </Helmet>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                <p>
                  {`
                    ${id}
                    ${name}
                  `}
                </p>
              </Toolbar>
            </AppBar>
            <Wrapper key={`${name}-${index}`}>
              <Type>{type}</Type>
              <h1>
                <span>Horário do ônibus</span> <br />
                {name}
              </h1>
              <Price>
                <span>Tarifa:</span> {price}
              </Price>

              {info !== "" ? <Notification description={info} /> : null}

              <hr />
              {mondayToSaturday ? (
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h3>Segunda á Sabádo</h3>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.panel}>
                    {mondayToSaturday.map(({ place, hours }, index) => (
                      <div key={index}>
                        <Place>{place}</Place>
                        {hours.map((h, i) => (
                          <Hour key={i}>{h}</Hour>
                        ))}
                      </div>
                    ))}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              ) : null}

              {mondayToFriday && (
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h3>Segunda á Sexta</h3>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.panel}>
                    {mondayToFriday.map(({ place, hours }, index) => (
                      <div key={index}>
                        <Place>{place}</Place>
                        {hours.map((h, i) => (
                          <Hour key={i}>{h}</Hour>
                        ))}
                      </div>
                    ))}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )}

              {saturday && (
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h3>Sabádo</h3>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.panel}>
                    {saturday.map(({ place, hours }, index) => (
                      <div key={index}>
                        <Place>{place}</Place>
                        {hours.map((h, i) => (
                          <Hour key={i}>{h}</Hour>
                        ))}
                      </div>
                    ))}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )}

              {SundaysAndHolidays && (
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<MdExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <h3>Domingos e Feriados</h3>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={classes.panel}>
                    {SundaysAndHolidays.map(({ place, hours }, index) => (
                      <div key={index}>
                        <Place>{place}</Place>
                        {hours.map((h, i) => (
                          <Hour key={i}>{h}</Hour>
                        ))}
                      </div>
                    ))}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )}
              {!showItinerario ? (
                <ContentItinerario>
                  {itinerary.map((it, index) => (
                    <article key={index}>
                      <h3>{it.direction}</h3>
                      {it.streets.map((street, index) => (
                        <p key={index}>{street}</p>
                      ))}
                    </article>
                  ))}
                </ContentItinerario>
              ) : null}
              <Section>
                <OpenItinerario onClick={() => openItinerario()}>
                  <MdSwapVert />
                  Itinerário
                </OpenItinerario>
                <Link to="/">
                  <MdUndo />
                  Voltar
                </Link>
              </Section>
            </Wrapper>
          </div>
        )
      )}
    </>
  );
}

export default Neighborhood;
