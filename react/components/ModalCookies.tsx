import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

type Props = {
  titleCookies: string
  messageCookies: string
}

const CSS_HANDLES = [
  "container",
  "buttons",
  "buttonAccept",
  "buttonCancel",
  "container__tittle",
  "container__paragraph"]

const ModalCookies = ({ titleCookies, messageCookies }: Props) => {
  const handles = useCssHandles(CSS_HANDLES)

  // Verificar si el usuario ya aceptó los términos
  const [isVisible, setIsVisible] = useState(() => {
    return localStorage.getItem("cookiesAccepted") !== "true";
  });

  const closeModal = () => {
    setIsVisible(false);
    localStorage.setItem("cookiesAccepted", "true"); // Guardar en localStorage
  }

  useEffect(() => {
    // Comprobar al cargar el componente si el usuario ya aceptó los términos
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (cookiesAccepted === "true") {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null; // Si el modal no es visible, no renderizar nada

  return (
    <>
      <div className={handles.container}>
        <p className={handles.container__tittle}>{titleCookies}</p>
        <p className={handles.container__paragraph}>{messageCookies}</p>
        <div className={handles.buttons}>
          <button className={handles.buttonAccept} onClick={closeModal}>Aceptar</button>
          <button className={handles.buttonCancel} onClick={closeModal}>Cancelar</button>
        </div>
      </div>
    </>
  )
}

ModalCookies.propTypes = {
  titleCookies: PropTypes.string.isRequired,
  messageCookies: PropTypes.string.isRequired
}

ModalCookies.defaultProps = {
  titleCookies: "Titulo del componente Cookies",
  messageCookies: "Aquí va el mensaje de aprobación de cookies para el usuario"
}

ModalCookies.schema = {
  title: "modal informativo para cookies",
  type: "object",
  properties: {
    titleCookies: {
      title:"Titulo para el modal",
      description: "Agrega un titulo para el modal",
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
