import React from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled'

const ContenedorHeader = styled.header`
  background-color: #9b59b6;
  padding: 10px;  
  color: #fff;  
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  font-family: 'Slabo 27px', serif;
  font-weight: bolder;
  text-align: center;
  letter-spacing: 4px;
  @media (max-width: 800px) {
    font-size: 1.8rem;
  }
`;

const Header = ({titulo}) => {
  return (
    <ContenedorHeader>
      <H1>{titulo}</H1>
    </ContenedorHeader>
  )
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}

export default Header