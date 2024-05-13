function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault()
        console.log("Cadastrado!!!")
    }


    return (
        <div>
            <h1>Meu formulário</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome:"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Form;