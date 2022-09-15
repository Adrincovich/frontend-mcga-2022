// import './App.css';
import {useState} from 'react' //from node_modules -> react
import Counter from "./Counter"  //me traigo el contador 
import Button from './Button'

function App() { // componentes siempre con la primer letra mayuscula -
  let [cont, setCont] = useState (0)
  console.log(setCont) // lo actualiza por consola

  const handleOnClick = () => {
    //cont+1  --> el valor va a aumentar pero react no lo renderiza, hay que dar uso a useState
    setCont(cont+1) //el valor lo actualiza y lo renderiza react
  }

  return (
    <div>
      {/*<h1>{cont}</h1>  --> le pasamos los valores entre parentesis de la constante cont. --> ej 0 */}
      {/* <button onClick={handleOnClick}>Incrementar</button> */}
      <Counter cont={cont} /> {/* en vez de poner una etiqueta html le mandamos un componente*/}
      <Button text={"Incrementar"} click={handleOnClick}/>
    </div>
  );
}

export default App;
