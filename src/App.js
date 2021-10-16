import './App.css';
import Delivered from './Pages/DeliveryProgress/Delivered/Delivered';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/HomePage/Home/Home';

import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <>

      <Header></Header>
      {/* <Home></Home> */}
      <Signup></Signup>
      <Footer></Footer>

    </>
  );
}

export default App;
