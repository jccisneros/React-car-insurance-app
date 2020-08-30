import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {obtenerDiferenciaanio, calcularCostoMarca, calcularPlan} from '../../helper';

const Campo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;  
`;

const Label = styled.label`
  flex: 0 0 100px;
  @media (max-width: 800px) {
    flex: 0 0 75px;
  }
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;  
`;

const Input = styled.input`
  margin: 0 1rem;  
`;

const ContenedorButton = styled.div`
  display: flex;
  justify-content: center;  
`

const Button = styled.button`
  background-color: #9b59b6;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  padding: .8rem;  
  margin-top: 2rem;
  text-transform: uppercase;
  width: 30%;
  transition: .3s ease;
  @media (max-width: 800px) {
    width: 60%;
  }   
  &:hover{
    background-color: #8e44ad;
    cursor: pointer;
  }
`;

const Error = styled.div`
  background-color: hsl(348, 100%, 61%);
  color: #fff;
  margin-bottom: 2rem;
  padding: 1rem;
  text-align: center;
  width: 100%;  
`;


const Formulario = ({setResumen, setCargando}) => {

  const [ datos, actualizarDatos ] = useState({
    marca: '',
    anio: '',
    plan: 'basico'
  });

  const [error, setError] = useState(false);
  
  const { marca, anio, plan } = datos;

  const obtenerInformacion = e => {
    actualizarDatos({
      ...datos,
      [e.target.name] : e.target.value
    })
  }

  const cotizarSeguro = e => {
    e.preventDefault();

    if( marca.trim() === '' ||
     anio.trim() === '' || plan.trim() === '' ){
      setError(true);
      return;
    }

    setError(false);

    let resultado = 2000;        
    const diferencia = obtenerDiferenciaanio(anio);    
    resultado -= (( diferencia * 3) * resultado ) / 100;        
    resultado *= calcularCostoMarca(marca);        
    resultado *= calcularPlan(plan);        
    resultado = parseFloat(resultado).toFixed(2);        
    
    setCargando(true);

    setTimeout(() => {

      setResumen({
        cotizacion: Number(resultado),
        datos
      })  

      setCargando(false);      
      
    }, 2500);   

  }

  return (
    <form
      
    >
      { error ? <Error>Debe ingresar todos los campos</Error> : null }
      <Campo>
        <Label>Marcas</Label>
        <Select 
          name = "marca"
          value = { marca }
          onChange = { obtenerInformacion }
        >
          <option value="">-- Seleccione --</option>
          <option value="americano"> Americano </option>
          <option value="europeo"> Europeo </option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Año</Label>
        <Select 
          name = "anio" 
          value = { anio } 
          onChange = { obtenerInformacion }
        >
          <option value="">-- Seleccione --</option>
          <option value="2020"> 2020</option>
          <option value="2019"> 2019 </option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Plan</Label>
        <Input 
          type="radio" 
          name="plan"
          value="basico"
          checked={plan==="basico"}
          onChange = { obtenerInformacion }
        />Básico
        <Input 
          type="radio" 
          name="plan"
          value="completo"
          checked={plan==="completo"}
          onChange = { obtenerInformacion }
        />Completo
      </Campo>
      <ContenedorButton>
        <Button          
          onClick={cotizarSeguro}
        >
          Cotizar
        </Button>
      </ContenedorButton>
    </form>
  )
}

Formulario.propTypes = {
  setResumen: PropTypes.func.isRequired,
  setCargando: PropTypes.func.isRequired
}

export default Formulario