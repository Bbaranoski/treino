import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [teste, setTeste] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setTeste(teste => teste + 1)
    }, 1000)
  },[])
  
  return <p>{teste} segundos</p>
}

export default App;
