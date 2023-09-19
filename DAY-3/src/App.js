
import './App.css';
import Login from './Components/login';
import Signin from './Components/signin';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  return (
   <Router>
    <Routes>

      <Route path='/'element={<Login/>}/>
<Route path='/Signin'element={<Signin/>}/>
    </Routes>
      
   </Router>
  
  );
}

export default App;
