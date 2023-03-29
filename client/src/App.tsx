import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ResortList from './components/ResortList';
import Resort from './components/Resort';
import Sort from './components/AddResortForm';

const App:React.FC = () => {
  return (
    <Router>
        <Header />
        {/* <Sort/> */}
        <Routes>
          <Route path='/' element={<ResortList />}/>
          <Route path='/resort/:id' element={<Resort/>} />
        </Routes>
    </Router>
  );
};

export default App;
