import Button from 'react-bootstrap/Button';

function Contacto () {
    return (
        <>
        <div className="contacto">
            <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
            <p>Correo:</p>
            <input placeholder="name@example.com" className='email'></input>
            <p>Descripción</p>
            <input className='descripcion'></input>
            <Button variant="danger">Enviar</Button>
        </div>
        </>
    )
}

export default Contacto