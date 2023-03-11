import { useState } from 'react';
import Card from './Card';

function App() {
  const [codigoLibro, setCodigoLibro] = useState("");
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [send, setSend] = useState(false);
  const [errorSelect, setErrorSelect] = useState("");

  const onChangeCodigoLibro = (event) =>{setCodigoLibro(event.target.value);};
  const onChangeTitulo = (event) =>{setTitulo(event.target.value);};
  const onChangeAutor = (event) =>{setAutor(event.target.value);};
  const onChangeSelectValue = (event) =>{
    setSelectValue(event.target.value);
  };

  const validarCodigoLibro = (codigoLibro) => {
    const withoutSpace = codigoLibro.trim();
    if (withoutSpace.length >= 3) {
      return true;
    } else {
      setErrorSelect("Por favor chequea que la información sea correcta.");
      return false;
    }
  };

  const validarTitulo = (titulo) => {
    const withoutSpace = titulo.trim();
    if (withoutSpace.length >= 6) {
      return true;
    } else {
      setErrorSelect("Por favor chequea que la información sea correcta.");
      return false;
    }
  };

  const handleSubmit = (event) =>{
    event.preventDefault();

    const isValidarCodigoLibro = validarCodigoLibro(codigoLibro);

    const isValidarTitulo =validarTitulo(titulo);

    if (isValidarCodigoLibro && isValidarTitulo) {
      setSend(true);
      setErrorSelect("");
    }
  };


  return (
    <div className="App">
      <h1>FORMULARIO LIBROS</h1>

      <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder='Codigo libro' 
        value={codigoLibro}
        onChange={onChangeCodigoLibro} /> 

      <input type="text" 
        placeholder='Titulo' 
        value={titulo}
        onChange={onChangeTitulo} />

      <input type="text" 
        placeholder='Autor' 
        value={autor}
        onChange={onChangeAutor} />
      
      <select placeholder='Ingrese numero de copia del libro' value={selectValue}
        onChange={onChangeSelectValue}>
          <option value="" disabled default>Numero de copia</option>
          <option value="1">1</option>
          <option value="2">2</option>
      </select>

      <input type="submit" value="enviar">
      </input>

      </form>

      <div className="error">{errorSelect}</div>

      {send && <Card
      codigoLibro = {codigoLibro}
      titulo = {titulo}
      autor = {autor}
      selectValue ={selectValue}
      />}

    </div>
  )
}

export default App;
