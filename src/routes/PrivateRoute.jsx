import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from './../components/Loading';

const PrivateRoute = ({children}) => {
    const {user} = useContext(Authcontext);
    const location = useLocation();
    
    const {loading} = useContext(Authcontext);
    if (loading) {
        return <Loading></Loading>
    }
    
    if (user) {
        return children;
    } 
    
    return <Navigate to="/auth/login" state={location.pathname}></Navigate>
        
    
};

export default PrivateRoute;