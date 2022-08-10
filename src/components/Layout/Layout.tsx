import { Outlet } from "react-router-dom"
import NavDrawer from "./NavDrawer"
import '../../assets/css/layout/layout.css'
import { useSelector } from "react-redux"
import { getAuth } from "../../store/slices/authSlice"
import { createContext } from "react"
import { authInterface } from "../../interfaces/authInteface"
import { useContext } from "react"
type layoutContext = {
    token: string,
    user: object
}
const context: layoutContext = {
    token: '',
    user: {}
}

export const myContext = createContext(context)
function Layout() {
    const auth = useSelector(getAuth)
    console.log(auth, 'auth')
    return (
        <myContext.Provider value={auth}>
        
        <div className="layout d-flex">
           <div className={auth.token === '' ? 'navdrawer-login' : 'navdrawer-auth'}>
            <NavDrawer />
           </div>
           <div className="main">
           <main className="App">
            <Outlet />
        </main>
           </div>
        </div>
       
        </myContext.Provider>
    )
}
export default Layout