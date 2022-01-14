import React from "react";
import { Route, Redirect, RouteProps  } from "react-router-dom";

interface Props extends RouteProps {
    isAuth: boolean;
}

const ProtectedRoute = ({ isAuth, ...routeProps}: Props) => {
    if(isAuth){
        return <Route { ...routeProps} />;
    }
    return <Redirect to="/login" />;
};

export default ProtectedRoute;