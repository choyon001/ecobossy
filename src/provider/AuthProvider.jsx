import { createContext } from "react";

export const Authcontext = createContext();

const AuthProvider = ({children}) => {
    const user = {
        name:"choyon",
        email:"choyon@gmail.com"
    }

    const authInfo = {
        user,
    }
    return (
        <Authcontext.Provider value={authInfo}>{children}</Authcontext.Provider>
    );
};

export default AuthProvider;