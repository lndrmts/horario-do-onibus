import React from "react";

import data from "../../data/data.json";
import Bottom from "../Bottom";
import { Wrapper, Type, Price, Place } from "./styles";

import { MdExpandMore } from "react-icons/md";

import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

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

  return (
    <>
      {data[name].map(
        (
          { id, type, name, price, mondayToSaturday, SundaysAndHolidays },
          index
        ) => (
          <>
            <AppBar position="fixed" color="primary">
              <Toolbar>
                <Typography variant="p">
                  {`
                    ${id}
                    ${name}
                  `}
                </Typography>
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
              <hr />
              {mondayToSaturday && (
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
                          <p key={i}>{h}</p>
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
                    {mondayToSaturday.map(({ place, hours }, index) => (
                      <div key={index}>
                        <Place>{place}</Place>
                        {hours.map((h, i) => (
                          <p key={i}>{h}</p>
                        ))}
                      </div>
                    ))}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )}

              <Bottom />
            </Wrapper>
          </>
        )
      )}
    </>
  );
}

export default Neighborhood;
