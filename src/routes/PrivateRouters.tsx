import { Outlet, Navigate } from "react-router-dom";
import { IsAuths } from "./isAuth";

export const PrivateRouters: React.FC = () => {
    const token = IsAuths();
    return token ? <Outlet /> : <Navigate to="/login" />;
};
