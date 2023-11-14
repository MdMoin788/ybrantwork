import { Outlet, Navigate } from "react-router-dom";
import { IsAuths } from "./isAuth";

export const PublicRouters: React.FC = () => {
    const token = IsAuths();
    return token ?  <Navigate to="/" />  : <Outlet /> 
};
