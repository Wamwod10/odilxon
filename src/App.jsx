import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import "./components/media.scss";
import Info from "./components/info/Info";
import About from "./components/about/About";
import Fight from "./components/fights/Fight";


function App() {

  return (
    <>
      <Nav />
      <Header />
      <Info/>
      <About/>
      <Fight/>
    </>
  )
}

export default App
