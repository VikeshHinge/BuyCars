import './App.css';
import Navbar from './Pages/Navbar';
import Signup from './Pages/Authantication/Signup';
import Login from './Pages/Authantication/Login';
import DealersPage from './Pages/Dealers_pg/DealersPage';
import CarInputsPage from './Pages/Dealers_pg/CarInputsPage';
import AllRoutes from './AllRoutes/AllRoutes';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      {/* <Navbar/> */}
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <DealersPage/> */}
      <Footer/>
    </div>
  );
}

export default App;
