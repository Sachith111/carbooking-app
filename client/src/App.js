import './App.css';
import { BrowserRouter, Route,Routes,Navigate, Outlet} from 'react-router-dom';
import { BookingCar } from './pages/BookingCar';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import 'antd/dist/antd.min.css';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

        <Route element={<PrivateRoutes />}>
        <Route path='/' exact element={<Home />} />
        </Route>

        <Route path='/login' exact element={<Login />}/>
        <Route path='/register' exact element={<Register />} />
        
        <Route element={<PrivateRoutes />}>
        <Route path='/booking/:carid' exact element={<BookingCar />} />
        </Route>

        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;


export function PrivateRoutes(props)

{
  if(localStorage.getItem('user'))
  {
    return <Outlet {...props} /> 
  }else
  {
    return <Navigate to='/login' />
  }
}


