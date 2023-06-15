import './App.css';
import NavBar from './component/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Add from './component/Add';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
     </Routes>
    </div>
  );
}

export default App;
