import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthenticationLayout from "./layouts/Authentication";
import { authenticationRouters, homeRouters, mainRouters, workspacesRouters } from "./config/routes";
import WorkspacesLayout from "./layouts/Workspaces";
import ChooseWorkspaces from "./pages/Workspaces/ChooseWorkspaces";
import HomeLayout from "./layouts/Home";
import Home from "./pages/Home/Home";
import MainLayout from "./layouts/Main";

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
                        <Route index element={<Home />} />
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
                    {/* router for main */}
                    <Route path="/app" element={<MainLayout />}>
                        {/* <Route index element={<>} */}
                        {renderRoute(mainRouters)}
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
