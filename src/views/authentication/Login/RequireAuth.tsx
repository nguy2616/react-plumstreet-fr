import { useSelector } from "react-redux"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { getAuth } from "../../../store/slices/authSlice"

function RequireAuth() {
    const auth = useSelector(getAuth)
return (
   auth.token ? <Outlet /> : <Navigate to='/' />
)
}
export default RequireAuth