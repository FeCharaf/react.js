import { useState } from 'react';

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(name);
    console.log("Cadastrado!!!");
  }

  const [name, setName] = useState()

  return (
    <div>
      <h1>Meu formulário</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome:"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite sua senha"
          />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
