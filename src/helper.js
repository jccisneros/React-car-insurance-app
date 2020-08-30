export function obtenerDiferenciaanio(anio) {

  return new Date().getFullYear() - anio;
  
};

export function calcularCostoMarca(marca) {

  let incremento;

  switch (marca) {
    case 'europeo':
      incremento = 1.30;
      break;

    case 'americano':
      incremento = 1.15;
      break;
    
    case 'asiatico':
      incremento = 1.05;
      break;
  
    default:
      break;
  }

  return incremento;
  
}

export function calcularPlan(plan) {

  let incremento;

  ( plan === 'basico') ? incremento = 1.20 : incremento = 1.50;

  return incremento;
  
}