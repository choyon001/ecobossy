import { Outlet } from "react-router-dom";


const Auth = () => {
    return (
        <div>
            
            <div className="flex justify-center items-center h-screen bg-[#F8F6F0]">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Auth;