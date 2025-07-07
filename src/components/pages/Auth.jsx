import { Outlet } from "react-router-dom";


const Auth = () => {
    return (
        <div>
            
            <div className="flex justify-center items-center  bg-[#F8F6F0] min-h-screen font-source-serif">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Auth;