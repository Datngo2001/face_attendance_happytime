import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationLayout from "./layouts/Authentication";
import { authenticationRouters, homeRouters, workspacesRouters } from "./config/routes";
import WorkspacesLayout from "./layouts/Workspaces";
import ChooseWorkspaces from "./pages/Workspaces/ChooseWorkspaces";
import HomeLayout from "./layouts/Home";

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
                    {/* router for home page */}
                    <Route path="/" element={<HomeLayout />}>
                        <Route index element={<ChooseWorkspaces />} />
                        {renderRoute(homeRouters)}
                    </Route>
                    {/* router for Login, Register, Forgot password */}
                    <Route path="/auth" element={<AuthenticationLayout />}>
                        {renderRoute(authenticationRouters)}
                    </Route>
                    {/* router for  Workspaces*/}
                    <Route path="/workspaces" element={<WorkspacesLayout />}>
                        <Route index element={<ChooseWorkspaces />} />
                        {renderRoute(workspacesRouters)}
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
