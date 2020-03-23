import React from "react";
import { Link } from "react-router-dom";
import { Section, Itinerario } from "./styles";
import { MdUndo, MdSwapVert } from "react-icons/md";

function Bottom() {
  return (
    <>
      <Section>
        <Itinerario>
          <MdSwapVert />
          Itinerário
        </Itinerario>
        <Link to="/">
          <MdUndo />
          Voltar
        </Link>
      </Section>
    </>
  );
}

export default Bottom;
