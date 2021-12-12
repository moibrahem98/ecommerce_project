import {Container}from 'react-bootstrap'
import {BrowserRouter as Router,  Route,Routes } from 'react-router-dom'
import Header  from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import Product from './components/Product'
import ProductScreen from './screens/ProductScreen'
function App() {
  return (
    <div >
      <Header/>
      <main className='py-5'>
        <Container>
          <Router>
            <Routes>
          <Route path="/" element={<HomeScreen/>}exact/>
          <Route path="/product/:id" element={<ProductScreen/>}exact/>
          </Routes>
         </Router>
        </Container>
   
      </main>
      <Footer/>
    </div>
  );
}

export default App;
