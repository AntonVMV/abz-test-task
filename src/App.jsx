import "./baseStyles/base.scss";
import { Header } from "./components/header/Header";
import { Welcome } from "./components/welcome/Welcome";
import { About } from "./components/about/About";
import { Users } from "./components/users/Users";
import { Register } from "./components/register/Register";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Welcome />
        <About />
        <Users />
        <Register />
      </main>
      <Footer />
    </>
  );
}

export default App;
