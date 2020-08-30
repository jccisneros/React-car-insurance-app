import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Mensaje = styled.p`
  background-color: hsl(0, 0%, 21%);
  color: #fff;
  font-weight: bold;
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`

const ContenedorTotal = styled.div`
  text-align: center;
  padding: .5rem;
  border: 1px solid hsl(0, 0%, 4%);
  background-color: hsl(0, 0%, 21%);
  margin-top: 1rem;
  position: relative;
`

const Total = styled.span`  
  color: #fff;
  font-weight: bold;
  margin: 0;
  padding: 1rem;
  text-transform: uppercase;
`

const Resultado = ({cotizacion}) => {

  return (
    ( cotizacion === 0 ) 
      ? <Mensaje> Ingresa los datos para recibir tu cotización </Mensaje> 
      : (
        <ContenedorTotal>
          <TransitionGroup
            component='p'
            className="resultado"
          >
            <CSSTransition
              classNames="resultado"
              key={cotizacion}
              timeout={{ enter: 500, exit: 500 }}
            >
              <Total>El total es: ${cotizacion}</Total>
            </CSSTransition>
          </TransitionGroup>
        </ContenedorTotal>
      )    
  )
}

Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired
}

export default Resultado