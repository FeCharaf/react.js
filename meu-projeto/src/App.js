import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = "Felipe";
  
  function sum(a, b) {
    return a + b
  }

  return (
    <div className="App">
        <h1>Olá {name}</h1>
        <p>Meu aplicativo React</p>
        <p>Soma: {sum(1,2)} </p>
        <HelloWorld/>
    </div>
  );
}

export default App;
