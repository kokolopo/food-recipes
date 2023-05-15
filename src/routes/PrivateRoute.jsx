import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuthenticated = localStorage.getItem('token') !== null;
    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    // <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                    <Routes >
                        <Route Component={LandingPage} path="/" />
                    </Routes>
                )
            }
        />
    );
};

export default PrivateRoute