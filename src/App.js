import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
    authenticationRouters,
    homeRouters,
    mainRouters,
    workspacesRouters,
} from "./config/Routers";
import {
    AuthenticationLayout,
    HomeLayout,
    MainLayout,
    WorkspacesLayout,
} from "./layouts";

function App() {
    // ARROW FUNCTION
    const renderRoute = (listRoutes) => {
        return listRoutes.map(({ path, component }, index) => {
            return <Route path={path} element={component} key={index} />;
        });
    };
    const renderRouterMain = (listRoutes) => {
        return listRoutes.map(({ path, component, listChildrenRoutes }) => {
            return (
                <Route path={path} element={component} key={path}>
                    {renderRoute(listChildrenRoutes)}
                </Route>
            );
        });
    };
    // ***********************************************************

    return (
        <>
            <Router>
                <Routes>
                    {/* HOME */}
                    <Route path="/" element={<HomeLayout />}>
                        {renderRoute(homeRouters)}
                    </Route>
                    {/* AUTHENTICATION */}
                    <Route path="/auth" element={<AuthenticationLayout />}>
                        {renderRoute(authenticationRouters)}
                    </Route>
                    {/* WORKSPACES */}
                    <Route path="/workspaces" element={<WorkspacesLayout />}>
                        {renderRoute(workspacesRouters)}
                    </Route>
                    {/* MAIN */}
                    <Route path="/app" element={<MainLayout />}>
                        {renderRouterMain(mainRouters)}
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
