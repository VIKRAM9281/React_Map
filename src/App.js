import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/' element={""}/> */}
      </Routes>
    </div>
  );
}

export default App;
