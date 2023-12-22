import './App.css'
import Counter from './components/Counter'
import CounterImproved from './components/CounterImproved'
import CrudApi from './components/CrudApi'
import ShoppingCart from './components/ShoppingCart'

function App() {


  return (
    <>
      <h1>Use Reducer</h1>
      <hr />
      <CrudApi />
      <hr />
      <ShoppingCart />
      <hr />
      <CounterImproved />
      <hr />
      <Counter />

 
    </>
  )
}

export default App
