import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/Home/NavBar';
import { Home } from './Components/Home/Home';
import { Food } from './Components/Food/Food';
import { Book_us } from './Components/Book_Table/Book_us';
import { Book_tab } from './Components/Book_Table/Book_tab';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Food/>
      <Book_us/>
      <Book_tab/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
