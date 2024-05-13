function Evento() {

    function meuEvento() { //Método
        console.log("Fui ativado!")
    }

    return (
        <div>
            <p>Clique para ativar evento</p>
            <button onClick={meuEvento}>ATIVAR</button>
        </div>
    )
}

export default Evento