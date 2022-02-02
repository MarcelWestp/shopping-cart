import React from 'react';
import './App.css';
import CartHeader from './components/CartHeader'
import CartBody from './components/CartBody'
import CartFooter from './components/CartFooter'

const App = () => (
  <div>
    <CartHeader />
    <CartBody />
    <CartFooter copyright="&copy;" date={new Date().getFullYear()} />
  </div>
)




export default App;
