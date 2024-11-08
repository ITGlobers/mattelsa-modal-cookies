import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  titleCookies: string
  messageCookies: string
}

const ModalCookies = ({titleCookies, messageCookies}: Props) =>{
  console.log(titleCookies, messageCookies);

  return (
    <>
      <p>{titleCookies}</p>
      <p>{messageCookies}</p>
    </>
  )

}

ModalCookies.propTypes = {
  titleCookies: PropTypes.string.isRequired,
  messageCookies: PropTypes.string.isRequired
}

ModalCookies.defaultProps = {
  titleCookies: 'Titulo del componente Cookies',
  messageCookies: 'Aquí va el mensaje de aprobación de cookies para el usuario'
}

export default ModalCookies;
