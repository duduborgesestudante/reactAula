import "./app.css"
import { useState } from "react"
function App() {
  const [hi, setHi] = useState()
  const [mi, setMi] = useState()
  const [mf, setMf] = useState()
  const [hf, setHf] = useState()
  const [resultado, setResultado] = useState("Resultado")
  
  const soma = () =>{
    let somaHora = Number(hi) + Number(hf)
    let somaMin = Number(mf) + Number(mi)
    while (somaMin > 59) {
      somaMin -= 60
      somaHora++
    }
    if (somaHora < 10) {
      somaHora = "0" + somaHora
    }
    if (somaMin < 10) {
      somaMin = "0" + somaHora
    }
    setResultado(`${somaHora}:${somaMin}`)


  }
  const diferenca = () =>{
    let momentoInicial = hi * 60 + Number(mi)
    let momentoFinal = hf * 60 + Number(mf)
    let resultadoHora = 0
    let resultadoMinuto = momentoInicial - momentoFinal
    if (resultadoMinuto < 0) {
        resultadoMinuto *= -1
    }
    while (resultadoMinuto > 59) {
        resultadoMinuto -= 60
        resultadoHora++
    }
    setResultado(`${resultadoHora}  :  ${resultadoMinuto}`)  
  }
  return (
     <main>
        <h1>Calculadora de Horas</h1>
        <div>
            <h2>Digite os horarios  que deseja calcular!</h2>
            <input
             type="number" 
             placeholder="Hora Inicial"  
             value={hi}
             onChange={(e) => setHi(e.target.value)}
             /> &nbsp; : &nbsp;
            <input type="number"
             placeholder="Minuto Inicial"
              value={mi}
              onChange={(e) => setMi(e.target.value)}
              /> <br/> 
            <input type="number"
             placeholder="Hora Final" 
             value={hf}
             onChange={(e) => setHf(e.target.value)}
             /> &nbsp; : &nbsp;
            <input type="number"
             placeholder="Minuto Final" 
             value={mf}
             onChange={(e) => setMf(e.target.value)}
             /> <br/><br/>
            <button onClick={soma}>Soma</button> &nbsp; 
            <button onClick={diferenca}>Diferença</button> <br/>
            <h2>{resultado}</h2>
        </div>
    </main>

    
  )
}

export default App
