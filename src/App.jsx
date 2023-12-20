import { useState } from 'react'
import './App.css'
import MyPage from './components/MyPage'
import MyPageContext from './components/MyPageContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Context Api</h1>
      <a href="https://es.react.dev/reference/react/useContext#usage" target='_blank'>Documentation</a>
      <hr />
      <MyPageContext />
      <hr />
      <MyPage />
    </>
  )
}

export default App
