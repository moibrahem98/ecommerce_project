import { Header } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Container } from "react-bootstrap";
import { HomePage } from "./components/Homepage";
export const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomePage />
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
