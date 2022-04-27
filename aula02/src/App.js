import { useState } from "react";
import { Nav, Nav2 } from "./component/nav"
import "./style.css";

function App() {

  const [contador, setContador] = useState(0);
  const [ativo, setAtivo] = useState(false);
  const [dadosPessoa, setDadosPessoa] = useState({
    nome: "Marcos",
    idade: "26"
  })

  const handleAtivo = () => {
    setAtivo(!ativo);
  }

  const maior = () => {
    setContador(contador + 1);
  }

  const menor = () => {

    if (contador !== 0) {
      setContador(contador - 1);
    }
  }


  return (
    <div className="App">
      <Nav />
      <Nav2 />
      <h1>Contador</h1>
      <h1>{contador}</h1>
      <button onClick={maior}>Somar</button>
      <button onClick={menor}>Diminiuir</button>
      <button onClick={handleAtivo} className={ativo ? "ativo" : "inativo"}>
        {ativo ? "Ativo" : "Inativo"}
      </button>
    </div>
  );
}

export default App;
