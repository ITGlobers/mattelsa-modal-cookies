import React, { useState } from "react";
import PropTypes from "prop-types";
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

type Props = {
  titleCookies: string
  messageCookies: string
}

const CSS_HANDLES = ['container', 'buttons', 'buttonAccept', 'buttonCancel']

const ModalCookies = ({ titleCookies, messageCookies }: Props) => {
  const handles = useCssHandles(CSS_HANDLES)
  const [isVisible, setIsVisible] = useState(true) // Estado para controlar la visibilidad del modal

  const closeModal = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null // Si el modal no es visible, no renderizar nada

  return (
    <>
      <div className={`${handles.container}`}>
        <p className="white f8 b">{titleCookies}</p>
        <p className="white f6 b">{messageCookies}</p>
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
