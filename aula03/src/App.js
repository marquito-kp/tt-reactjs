import { useEffect, useState } from "react";
import { CardMovie } from "./cardMovie";
import "./global/style-app.css";

function App() {

  const [contador, setContador] = useState(0);
  const [filmes, setFilmes] = useState([]);
  const [soma, setSoma] = useState(0);

  const buscaValor = async () => {
    const response = await fetch("https://61d3bc23b4c10c001712ba53.mockapi.io/tasks");
    const data = await response.json();

    setFilmes(data);

  }

  // const buscaValor = () => {
  //   fetch("https://61d3bc23b4c10c001712ba53.mockapi.io/tasks")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setFilmes(data);
  //       console.log(filmes);
  //     });
  // }

  // useEffect(() => {
  //   console.log("Rodei sem []");
  // });

  useEffect(() => {
    buscaValor();
  }, []);

  // useEffect(()=>{
  //   console.log("Contado!");
  // }, [contador]);

  // useEffect(()=>{
  //   console.log("Foi somado!");
  // }, [soma]);

  // useEffect(()=>{
  //   console.log("Diminui!");
  // }, [diminuir]);

  return (
    <div className="App">
      <h1>Target</h1>
      {contador}
      <h1>Total</h1>
      {soma}

      <div className="container-app">
        {
          filmes.map((item) => {
            return (
              <div key={item.id}>
                <CardMovie movie={item} />
              </div>
            );
          })}
      </div>
      <button onClick={() => setContador(contador + 1)}>Somar</button>
      <button onClick={() => setContador(contador - 1)}>Diminuir</button>
      <button onClick={() => setSoma(contador * 100)}>Soma</button>
    </div>
  );
}

export default App;
