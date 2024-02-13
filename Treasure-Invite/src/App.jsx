import { useState } from 'react'
import Bear from './assets/cute-love-bear-roses-ou7zho5oosxnpo6k.gif'
import './App.css'
import ButtonContainer from './ButtonContainer'

function App() {
  const [bear, setBear] = useState(Bear)
  const [words, setWords] = useState("Treasure Odigie will you be my valentine, movie night date, dinner date ....?")


  return (
    <>
      <img src={bear} alt="Bear with roses" className='logo' />
      <h2 style={{
        fontSize: "20px",
        textAlign: "center"
      }}>{words}</h2>
      <ButtonContainer state={setBear} setWords={setWords} />
    </>
  )
}

export default App
