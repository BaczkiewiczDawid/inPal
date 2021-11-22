import Home from 'components/templates/Home/Home'
import Item from 'components/templates/Item/Item';
import GlobalStyle from 'assets/styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/item/:id" element={<Item />} />
        </Routes>
      </Router>
    </>

  )
}

export default App;
