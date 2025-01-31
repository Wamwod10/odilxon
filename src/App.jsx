import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import "./components/media.scss";
import Info from "./components/info/Info";
import About from "./components/about/About";
import Fight from "./components/fights/Fight";
import Social from "./components/social/Social";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      <Nav />
      <Header />
      <Info/>
      <About/>
      <Fight/>
      <Social/>
      <Footer/>
    </>
  )
}

export default App
