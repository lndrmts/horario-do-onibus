import React, { useState } from "react";
import { Alert, ButtonClose } from "./styles";
import { MdClose } from "react-icons/md";

function Notification(props) {
  const [showButton, setShowButton] = useState(true);
  const description = props;
  return (
    <>
      {showButton && (
        <Alert>
          <ButtonClose onClick={() => setShowButton(false)}>
            <MdClose />
          </ButtonClose>
          <h4>Atenção:</h4>
          {description.description}
        </Alert>
      )}
    </>
  );
}

export default Notification;
