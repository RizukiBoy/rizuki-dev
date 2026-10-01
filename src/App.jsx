import { useState } from 'react'
import Home from './pages/Home'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
