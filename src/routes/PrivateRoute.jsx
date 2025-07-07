import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from './../components/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(Authcontext);
    const location = useLocation();
    
    if (loading) {
        return <Loading></Loading>
    }
    
    if (user) {
        return children;
    } 
    
    return <Navigate to="/auth/login" state={location.pathname}></Navigate>
        
    
};

export default PrivateRoute;