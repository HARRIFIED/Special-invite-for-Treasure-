import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Bear from './assets/cute-love-bear-roses-ou7zho5oosxnpo6k.gif'
import './App.css'
import ButtonContainer from './ButtonContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src={Bear} alt="Bear with roses" className='logo' />
      <h2>Will you be...</h2>
      <ButtonContainer />
    </>
  )
}

export default App
