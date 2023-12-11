import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import CounterSon from './components/CounterSon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Memorization in ReactJS</h1>
      <hr />
      <h3>Memo Function</h3>
      <hr />
      <Counter />
      <hr />

      <ul>
        <b>Memo Function</b>
        <li>It's responsible for memorizing a component.</li>
        <li>It rememorizing when the props was changed</li>
        <li>Avoid Re-enderizing</li>
        <li>To be avoided as much as possible, because it could be mor expense the task of Memorization than the re-endirizing a component</li>
        <li>
          Use this when:
          <ul>
            <li>There are too many items rendered in a list</li>
            <li>We call data from an API</li>
            <li>A jcomponent turns very weight</li>
            <li>Performance alerts pop up on the console.</li>
          </ul>
        </li>
      </ul>
      
      <hr />
      <ul>
      <b>Use Callback</b>
        <li>memorises a function, so as not to have to redefine it for each rendering</li>
        <li>use it whenever a function is passed as a prop to a stored component.</li>
        <li>Use it always that a funciton is passed as a parameter in a effect.</li>
      </ul>
    </>
  )
}

export default App
