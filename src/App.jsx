import { useState } from 'react'
import './App.css'
import CrudApp from './components/CrudApp'
import CrudApi from './components/CrudApi'

function App() {

  return (
    <>
      <h1>Crud with React</h1>
      <CrudApi />
      <hr />
      <CrudApp />
      <hr />
    </>
  )
}

export default App
