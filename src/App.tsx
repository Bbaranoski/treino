import './App.css';
import { useState, useEffect } from 'react'

function App() {
  const [teste, setTeste] = useState(0)
 
  return <div>
    
    <button onClick={() => {
      setTeste(teste => teste + 1)
    }}>click</button>
  
    <p>{teste}</p>
  </div>
    
}
export default App;
