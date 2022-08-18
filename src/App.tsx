import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './views/authentication/Login/Login';
import Foodtrucks from './views/admin/Foodtruck/Foodtrucks';
import AuthView from './components/Layout/AuthView';
import RequireAuth from './views/authentication/Login/RequireAuth';
import Clients from './views/admin/Foodtruck/Clients';
import Events from './views/admin/Foodtruck/Events';
import FoodtruckDetail from './views/admin/FoodtruckDetail/FoodtruckDetail';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<AuthView />}>
        {/* public routes */}
        <Route index element={<Login />} />
        

        {/* authenticated routes*/}
        <Route element={<RequireAuth />} >

        <Route path='/foodtrucks'  element={<Foodtrucks />} />
        <Route path='/foodtrucks/:foodtruckId'  element={<FoodtruckDetail />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/events' element={<Events />} />
        </Route>

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
