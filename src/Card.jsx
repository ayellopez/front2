//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

const Card =({codigoLibro,titulo,autor,selectValue})=>{
  return(
      <div>
          <h2>codigo Libro:{codigoLibro}</h2>
          <h2>titulo:{titulo}</h2>
          <h2>autor: {autor}</h2>
          <h2>numero de copia: {selectValue}</h2>
      </div>
  );
}

export default Card;
