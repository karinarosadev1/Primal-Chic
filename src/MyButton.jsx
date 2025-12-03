//Este archivo define un componente hijo de botón reutilizable que recibe props desde App.jsx. No toma decisiones → solo ejecuta lo que App le pasa
// Las props text, color y onClick permiten personalizar el texto, el estilo y la acción 
// al hacer clic. El componente construye un estilo dinámico y ejecuta la función onClick 
// que recibe desde su componente padre.


function MyButton({ text, color, onClick }) {
 //Recibe las props que le envió App.MyButton no sabe qué alerta mostrar. App se lo dice.

 //objeto Js
    const style = {
        backgroundColor: color,
        color: 'white',
        padding: '25px 20px',
        margin: '10px'
    }

    return (
        //boton con atributo style, con variables como argumentos
        <button className="Button" onClick={onClick} style={style}>{text}</button>
    )
}

export default MyButton