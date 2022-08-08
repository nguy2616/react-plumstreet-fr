import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './views/authentication/Login/Login';
import Foodtrucks from './views/admin/Foodtruck/Foodtrucks';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Login />} />
        
        <Route path='foodtrucks'  element={<Foodtrucks />} />

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
