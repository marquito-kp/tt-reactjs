import { useState } from "react";
import Button from "./components/button";
import Input from "./components/input";

function App() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

    function handleSubmit(event){
      event.preventDefault();
      const data = {
        name: name,
        email: email
      };
      console.log(data);
      handleSubmitUser(data);
    }

  const handleSubmitUser = async (user) => {
    const response = await fetch("https://61d3bc23b4c10c001712ba53.mockapi.io/user",
    {
      method: "POST",
      headers: {
        Accept: "appication/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
  
  }

  return (
    <div className="App">
        <h1>Inputs</h1>
        
        <form onSubmit={handleSubmit} >
          {/* <label htmlFor="name" >Nome</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(event) => setName(event.target.value) } 
            placeholder="Digite seu nome..." ></input>

          

          <label htmlFor="email" >E-mail</label>
          <input 
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          /> */}

          <Input 
            id="name"
            label="Nome"
            type="text"
            name="name"
            value={name}
            setValue={setName}
            placeholder="Informe seu nome"
          />

          <Input 
            id="email"
            label="E-mail"
            type="email"
            name="email"
            value={email}
            setValue={setEmail}
            placeholder="Informe seu e-mail"
          
          />

          {/* <button>Enviar</button> */}

          <Button>Enviar</Button>

        </form>
        
    </div>
  );
}

export default App;
