import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './component/Home';
import LogIn from "./component/LogIn";
import Navbar from "./component/Navbar";
import Register from "./component/Register";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;