import React from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types'

const ContenedorResumen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: hsl(204, 86%, 53%);
  color: #fff;
  margin-top: 1rem;
  padding: 1rem;
  & h2{
    font-size: 1.3rem;
  }
  & ul {
    padding-left: 0;
  }
`;

const Resumen = ({datos}) => {  

  const {marca, anio, plan} = datos;

  if ( marca === '' || anio === '' || plan === '' ) { 
    return null; 
  } else{
    return (
      <ContenedorResumen>
        <h2>Resumen de cotización</h2>
        <ul className="contenedor-datos">
          <li>Marca: <span className="datos"> {marca} </span></li>
          <li>Plan: <span className="datos"> {plan} </span></li>
          <li>Año: <span className="datos"> {anio} </span></li>
        </ul>
      </ContenedorResumen>
    )
  }
}

Resumen.propTypes = {
  datos: PropTypes.object.isRequired
}

export default Resumen;