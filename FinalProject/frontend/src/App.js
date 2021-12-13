import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <div >
      <Header />
      <main className='py-5'>
        <Container>
          <Router>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />

          </Router>
        </Container >

      </main >
      <Footer />
    </div >
  );
}

export default App;
