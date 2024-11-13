import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

type Props = {
  titleCookies: string;
  messageCookies: string;
}

const CSS_HANDLES = [
  "container",
  "buttons",
  "buttonAccept",
  "buttonCancel",
  "container__tittle",
  "container__paragraph"
] as const;

const ModalCookies = ({ titleCookies, messageCookies }: Props) => {
  const handles = useCssHandles(CSS_HANDLES);

  // Detectar si estamos en el Site Editor
  const isSiteEditor = typeof document !== "undefined" && document.URL.includes("site-editor");
  console.log("isSiteEditor",isSiteEditor)

  const [isVisible, setIsVisible] = useState(() => {
    if (isSiteEditor) {
      return true; // Mostrar el modal en el Site Editor sin usar localStorage
    } else if (typeof window !== "undefined" && localStorage) {
      return localStorage.getItem("cookiesAccepted") !== "true";
    }
    return false;
  });

  const closeModal = () => {
    setIsVisible(false);
    if (!isSiteEditor && typeof window !== "undefined" && localStorage) {
      localStorage.setItem("cookiesAccepted", "true");
    }
  };

  useEffect(() => {
    if (!isSiteEditor && typeof window !== "undefined" && localStorage) {
      const cookiesAccepted = localStorage.getItem("cookiesAccepted");
      if (cookiesAccepted === "true") {
        setIsVisible(false);
      }
    }
  }, [isSiteEditor]);

  if (!isVisible) return null;

  return (
    <div className={handles.container} role="dialog" aria-labelledby="cookieTitle" aria-describedby="cookieMessage">
      <p id="cookieTitle" className={handles.container__tittle}>{titleCookies}</p>
      <p id="cookieMessage" className={handles.container__paragraph}>{messageCookies}</p>
      <div className={handles.buttons}>
        <button className={handles.buttonAccept} onClick={closeModal} aria-label="Aceptar cookies">Aceptar</button>
        <button className={handles.buttonCancel} onClick={closeModal} aria-label="Cancelar cookies">Cancelar</button>
      </div>
    </div>
  );
}

ModalCookies.propTypes = {
  titleCookies: PropTypes.string.isRequired,
  messageCookies: PropTypes.string.isRequired
}

ModalCookies.defaultProps = {
  titleCookies: "Título del componente Cookies",
  messageCookies: "Aquí va el mensaje de aprobación de cookies para el usuario"
}

ModalCookies.schema = {
  title: "modal informativo para cookies",
  type: "object",
  properties: {
    titleCookies: {
      title:"Título para el modal",
      description: "Agrega un título para el modal",
      type: "string"
    },
    messageCookies:{
      title: "Mensaje para el modal",
      description: "Agrega un mensaje para el modal",
      type: "string",
      widget: {
        "ui:widget":"textarea"
      }
    }
  }
}

export default ModalCookies;
