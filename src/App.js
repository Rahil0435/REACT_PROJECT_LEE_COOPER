import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar'
import Britain from './pages/Britain';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<h1>Hi World</h1>}/>
      <Route path="/home" element= {<Home/>}/>
      <Route path="/login" element= {<Login/>}/>
      <Route path="/signup" element= {<Signup/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
      <Route path="/britain" element={<Britain/>}/>
    </Routes>

    </>
  );
}

export default App;
