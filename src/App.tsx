import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './views/authentication/Login/Login';
import Foodtrucks from './views/admin/Foodtruck/Foodtrucks';
import AuthView from './components/Layout/AuthView';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<AuthView />}>
        <Route index element={<Login />} />
        
        <Route path='foodtrucks'  element={<Foodtrucks />} />

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
