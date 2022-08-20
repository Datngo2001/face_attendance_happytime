import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationLayout from "./layouts/Authentication";
import { authenticationRouters } from "./config/routes";

function App() {
    const renderRoute = (listRoutes) => {
        return listRoutes.map(({ path, Component }, index) => {
            return <Route path={path} element={<Component />} key={index} />;
        });
    };
    return (
        <>
            <Router>
                <Routes>
                    {/* layout for Login, Register, Forgot password */}
                    <Route path="/auth" element={<AuthenticationLayout />}>
                        {renderRoute(authenticationRouters)}
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
