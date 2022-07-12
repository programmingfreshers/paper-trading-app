import './App.css';
import Navbar from './components/Navbar'
import Recommendations from './components/Recommendations'
import Pricing from './components/Pricing'
import Education from './components/Education'
import News from './components/News'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import PaperTrading from './components/PaperTrading';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<PaperTrading/>}>
          </Route>
          <Route path='/recommendations' element={ <Recommendations/> }></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path='/pricing' element={<Pricing/>}></Route>
          <Route path='/education' element={<Education/>} ></Route>
        </Routes>
      </Router>

    </>
  );
}

export default App;
