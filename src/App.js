import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Dev from './components/Dev/Dev';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Signup from './components/Dev/Signup';
import Login from './components/Dev/Login';
import APIList from './components/Dev/APIList';
import APIItem from './components/Dev/APIItem';
import Logout from './components/Dev/Logout';
import Tictactoe from './components/Projects/games/tictactoe/Tictactoe';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dev' element={<Dev/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/dev/signup' element={<Signup/>} />
          <Route path='/dev/login' element={<Login/>} />
          <Route path='/dev/apilist' element={<APIList/>} />
          <Route path='/dev/logout' element={<Logout/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/dev/apidetail/:id' element={<APIItem/>} />
          <Route path='/projects/tictactoe' element={<Tictactoe/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
