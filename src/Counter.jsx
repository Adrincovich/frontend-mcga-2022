// creamos un componente aparte, y lo exportamos.
// se importa en el componente padre app.jsx

const Counter = (props) => {
    return <h1>Contador: {props.cont}</h1>
}

export default Counter;