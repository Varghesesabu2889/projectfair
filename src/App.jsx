import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Dashboard from './Pages/Dashboard';
import Footer from './Components/Footer';
import Auth from './Components/Auth';

function App() {
  return (
    <div className="App">
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/login' element={<Auth/>} />
    <Route path='/register' element={<Auth register/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
