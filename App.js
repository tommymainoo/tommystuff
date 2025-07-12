import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import AddProducts from './Components/AddProducts';
import GetProducts from './Components/GetProducts';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>SokoGarden-Buy and sell online</h2>
          <NavBar/>
        </header>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/addproducts" element={<AddProducts />} />
          <Route path="/" element={<GetProducts />} />
        
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
