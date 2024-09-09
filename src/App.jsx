import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './screen/Home';



const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
