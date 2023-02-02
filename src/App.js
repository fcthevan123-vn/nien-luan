import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import ListBook from "./components/ListBook";
function App() {
  return (
    <div className="">
      <Header></Header>
      <Intro></Intro>
      <Features></Features>
      <NavBar></NavBar>
      <ListBook></ListBook>
      <ListBook></ListBook>

      <Footer></Footer>
    </div>
  );
}

export default App;
