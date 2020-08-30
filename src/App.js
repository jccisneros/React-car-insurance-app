import React, {useState} from 'react';
import styled from '@emotion/styled'
import Header from './components/Header/Header';
import Formulario from './components/Formulario/Formulario';
import Resumen from './components/Resumen/Resumen';
import Resultado from './components/Resultado/Resultado';
import Spinner from './components/Spinner/Spinner';

const Contenedor = styled.div`
  max-width: 70%;
  margin: 40px auto 40px auto;
  @media (max-width: 800px) {
      max-width: 98%;      
    }    
`;
 
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
  color: #000;
`;

function App() {

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      anio: '',
      plan: ''
    }
  });
  const { cotizacion, datos } = resumen;  
  const [cargando, setCargando] = useState(false); 

  return (
    <Contenedor>      
      <Header 
        titulo='Cotizador de seguros'
      />
      <ContenedorFormulario>
        <Formulario 
          setResumen={setResumen}
          setCargando={setCargando}
        />
        { cargando ? <Spinner /> : null }
        
        { (!cargando )
          ? <Resumen 
            datos={datos}
          /> 
          : null
        }        
        { !cargando 
          ? <Resultado 
            cotizacion={cotizacion}
          /> 
          : null
        }
        
      </ContenedorFormulario>      
    </Contenedor>    
  );
}

export default App;