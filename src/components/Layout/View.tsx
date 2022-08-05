import { BrowserRouter, Route, Routes } from "react-router-dom";
import Foodtrucks from "../../views/admin/Foodtruck/Foodtrucks";
import Login from "../../views/authentication/Login/Login";

function View() {
  return (
    <>
    {/*top header*/}
    {/*<AppBar />*/}
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/foodtrucks' element={<Foodtrucks />} />
        </Routes>
      </BrowserRouter>
    
    </>
  )

}
export default View;