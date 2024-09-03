
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './screens/Home';
import Login from './screens/Login'
import {
  BrowserRouter as Router,
  Routes,  //ear4lier as switch
  Route
} from 'react-router-dom'
function App() {
  return (
    <Router>

      <div>
         <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
         </Routes>
      </div>
    </Router>
  );

}

export default App;
