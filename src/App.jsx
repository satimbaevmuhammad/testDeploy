import { useState } from 'react'
import logo from './assets/logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>

      </header>


      <main>
        <h1>Test</h1>
      </main>


      <footer>

      </footer>

      <div className=''>
        <p>Test</p>
        <img className='w-[200px]' src={logo} alt="" />
      </div>
    </>
  )
}

export default App
