import Home from "./home/home";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from "./product/product";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/product" element={<Product />} /> */}

        </Routes>
      </Router>
    </>
  );
}

export default App;
