import "./App.css";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import List from "./components/List";
import Evento from "./components/Evento";

function App() {
  const nome = "Maria";
  return (
    <div className="App">
      <h1>Testando eventos</h1>
      <Evento />
    </div>
  );
}

export default App;
