import { useContext } from "react";
import { Authcontext } from "../provider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user} = useContext(Authcontext);
    const {name,email} = user || {};

    if (name) {
        return children;
    } else {
        alert("You need to login to access this page");
        return null;
    }
};

export default PrivateRoute;