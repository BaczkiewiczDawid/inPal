import { useState } from 'react';
import Home from 'components/templates/Home/Home'
import Item from 'components/templates/Item/Item';
import ShoppingCart from 'components/templates/ShoppingCart/ShoppingCart';
import GlobalStyle from 'assets/styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from 'components/templates/Checkout/Checkout';

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/item/:id" element={<Item shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />} />
          <Route path="/cart" element={<ShoppingCart shoppingCart={shoppingCart} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>

  )
}

export default App;
