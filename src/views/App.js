import { useState } from 'react';
import Home from 'components/templates/Home/Home'
import Item from 'components/templates/Item/Item';
import ShoppingCart from 'components/templates/ShoppingCart/ShoppingCart';
import GlobalStyle from 'assets/styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from 'components/templates/Checkout/Checkout';
import OrderConfirmation from 'components/templates/OrderConfirmation/OrderConfirmation';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  const [inputValues, setInputValues] = useState({
    name: '',
    address: '',
    postcode: '',
    phone: '',
    email: '',
})

  const [selectedPayment, setSelectedPayment] = useState({
    payment: 'BLIK',
    shipping: 'DHL',
  })

  return (
    <>
      <GlobalStyle />
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/item/:id" element={<Item shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />} />
            <Route path="/cart" element={<ShoppingCart shoppingCart={shoppingCart} />} />
            <Route path="/checkout" element={<Checkout inputValues={inputValues} setInputValues={setInputValues} setSelectedPayment={setSelectedPayment} selectedPayment={selectedPayment} />} />
            <Route path="/order-confirmation" element={<OrderConfirmation inputValues={inputValues} selectedPayment={selectedPayment} setShoppingCart={setShoppingCart} />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>

  )
}

export default App;
