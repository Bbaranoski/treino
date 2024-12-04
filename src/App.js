import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [teste, setTeste] = useState(0)
 
  return <button onClick={() => {
    setTeste(teste => teste + 1)
  }}>{teste}</button>
}

export default App;
